import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import {
  getFullAddress,
  getGoogleMapsUrl,
  getPhone,
  isPlaceholder,
  withDoctoraliaUtm
} from "@/lib/links";

function getDoctorDisplayTitle(doctor: {
  professionalTitle: string;
  rqe: string;
  displaySpecialty: string;
}) {
  if (!isPlaceholder(doctor.rqe) && !isPlaceholder(doctor.displaySpecialty)) {
    return `Especialista em ${doctor.displaySpecialty} | ${doctor.rqe}`;
  }

  return doctor.professionalTitle;
}

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.seo.siteUrl),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    alternates: {
      canonical: siteConfig.seo.canonicalUrl
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: siteConfig.seo.canonicalUrl,
      siteName: siteConfig.shortName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} em Campo Grande, RJ`
        }
      ]
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function buildJsonLd() {
  const address = siteConfig.address;
  const mainPhone = getPhone(siteConfig.phones, "main");
  const clinicId = `${siteConfig.seo.canonicalUrl}#clinic`;
  const physicians = siteConfig.doctors.map((doctor) => ({
    "@type": "Physician",
    "@id": `${siteConfig.seo.canonicalUrl}#${doctor.id}`,
    name: doctor.name,
    description: doctor.summary,
    identifier: doctor.crm,
    jobTitle: getDoctorDisplayTitle(doctor),
    url: withDoctoraliaUtm(doctor.doctoraliaUrl),
    worksFor: {
      "@id": clinicId
    },
    sameAs: [doctor.doctoraliaUrl],
    knowsLanguage: doctor.languages ?? ["Português"]
  }));

  const localBusiness = {
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": clinicId,
    name: siteConfig.clinicName,
    description: siteConfig.seo.description,
    image: `${siteConfig.seo.siteUrl}${siteConfig.logoPath}`,
    url: siteConfig.seo.canonicalUrl,
    telephone: mainPhone.number,
    priceRange: "$$",
    medicalSpecialty: [
      "Cuidado médico do adulto e da pessoa idosa",
      "Doenças reumáticas",
      "Dor articular",
      "Saúde óssea"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.building}, ${address.room}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "BR"
    },
    areaServed: "Campo Grande, Rio de Janeiro, RJ",
    hasMap: getGoogleMapsUrl(siteConfig.address),
    openingHours: isPlaceholder(siteConfig.businessHours)
      ? undefined
      : siteConfig.businessHours,
    employee: physicians
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, ...physicians, faqPage, {
      "@type": "Place",
      name: siteConfig.shortName,
      address: getFullAddress(siteConfig.address)
    }]
  };
}
