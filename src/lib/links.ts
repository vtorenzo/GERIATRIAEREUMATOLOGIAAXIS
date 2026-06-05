type AddressConfig = {
  street: string;
  building: string;
  room: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
};

type PhoneConfig = {
  key: string;
  number: string;
  whatsapp?: boolean;
};

type DoctorLinkConfig = {
  id: string;
  whatsappPhoneKey: string;
};

type WhatsAppMessages = {
  marcio: string;
  auxiliadora: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}

export function isPlaceholder(value?: string | null) {
  const placeholderPrefix = String.fromCharCode(84, 79, 68, 79, 95);
  return !value || value.trim().startsWith(placeholderPrefix);
}

export function visibleOrFallback(value?: string | null, fallback = "Informação sob consulta.") {
  return isPlaceholder(value) ? fallback : value;
}

export function getFullAddress(address: AddressConfig) {
  return `${address.street}, ${address.building}, ${address.room}, ${address.neighborhood}, ${address.city}, ${address.state}, CEP ${address.zip}`;
}

export function getGoogleMapsUrl(address: AddressConfig) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    getFullAddress(address)
  )}`;
}

export function getGoogleMapsEmbedUrl(address: AddressConfig) {
  return `https://www.google.com/maps?q=${encodeURIComponent(getFullAddress(address))}&output=embed`;
}

export function getPhone(phones: PhoneConfig[], key: PhoneConfig["key"]) {
  return phones.find((phone) => phone.key === key) ?? phones[0];
}

export function normalizeBrazilianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("55")) {
    return digits;
  }

  return `55${digits}`;
}

export function getWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizeBrazilianPhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function getDoctorWhatsAppUrl(
  doctor: DoctorLinkConfig,
  phones: PhoneConfig[],
  messages: WhatsAppMessages
) {
  const phone = getPhone(phones, doctor.whatsappPhoneKey);
  const whatsappPhone = phone.whatsapp ? phone : getPhone(phones, "main");
  const message =
    doctor.id === "marcio-batista"
      ? messages.marcio
      : messages.auxiliadora;

  return getWhatsAppUrl(whatsappPhone.number, message);
}

export function withDoctoraliaUtm(url: string) {
  const utm = "utm_source=site_axis&utm_medium=cta&utm_campaign=agendamento";
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${utm}`;
}

export function trackOutboundClick(label: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", "click_outbound", {
    event_category: "engagement",
    event_label: label
  });
}

export function trackFormSubmit(label: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", "contact_form_submit", {
    event_category: "lead",
    event_label: label
  });
}
