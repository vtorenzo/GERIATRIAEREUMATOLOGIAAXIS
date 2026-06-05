import { siteConfig } from "@/content/siteConfig";
import TrackedLink from "@/components/TrackedLink";
import {
  getFullAddress,
  getGoogleMapsEmbedUrl,
  getGoogleMapsUrl,
  getPhone,
  getWhatsAppUrl,
  visibleOrFallback
} from "@/lib/links";

export default function Location() {
  const mainPhone = getPhone(siteConfig.phones, "main");
  const whatsapp = getWhatsAppUrl(mainPhone.number, siteConfig.whatsappMessages.general);

  return (
    <section id="localizacao" className="section-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Localização</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
              Clínica Axis em Campo Grande, Rio de Janeiro.
            </h2>
          </div>
          <p className="text-lg leading-8 text-axis-graphite">
            {getFullAddress(siteConfig.address)}. Referência: {siteConfig.address.reference}.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-axis-ink">Endereço</h3>
            <address className="mt-4 not-italic leading-7 text-axis-graphite">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.building}
              <br />
              {siteConfig.address.room}
              <br />
              {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
              <br />
              CEP {siteConfig.address.zip}
            </address>

            <dl className="mt-6 grid gap-3 text-sm">
              <div className="rounded-xl bg-axis-linen p-4">
                <dt className="font-bold text-axis-ink">Telefone principal</dt>
                <dd className="mt-1 text-axis-graphite">{mainPhone.number}</dd>
              </div>
              <div className="rounded-xl bg-axis-linen p-4">
                <dt className="font-bold text-axis-ink">Horário de funcionamento</dt>
                <dd className="mt-1 text-axis-graphite">
                  {visibleOrFallback(siteConfig.businessHours)}
                </dd>
              </div>
              <div className="rounded-xl bg-axis-linen p-4">
                <dt className="font-bold text-axis-ink">Convênios</dt>
                <dd className="mt-1 text-axis-graphite">
                  {visibleOrFallback(siteConfig.insuranceInfo)}
                </dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <TrackedLink href={getGoogleMapsUrl(siteConfig.address)} target="_blank" rel="noreferrer" className="button-primary text-sm" label="location_google_maps">
                Abrir no Google Maps
              </TrackedLink>
              <TrackedLink href={whatsapp} target="_blank" rel="noreferrer" className="button-secondary text-sm" label="location_whatsapp">
                Falar no WhatsApp
              </TrackedLink>
            </div>
          </div>

          <div className="min-h-[380px] overflow-hidden rounded-2xl border border-axis-graphite/10 bg-axis-mist shadow-soft">
            <iframe
              title="Mapa da Clínica Axis em Campo Grande, Rio de Janeiro"
              src={getGoogleMapsEmbedUrl(siteConfig.address)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
