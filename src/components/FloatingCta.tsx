"use client";

import { trackOutboundClick } from "@/lib/links";

type FloatingCtaProps = {
  whatsappHref: string;
};

export default function FloatingCta({ whatsappHref }: FloatingCtaProps) {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackOutboundClick("floating_whatsapp")}
        className="fixed bottom-5 right-5 z-40 hidden min-h-12 rounded-full bg-axis-forest px-5 py-3 font-bold text-white shadow-button transition hover:bg-axis-teal lg:inline-flex"
        aria-label="Falar com a Clínica Axis pelo WhatsApp"
      >
        WhatsApp
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-axis-graphite/10 bg-white/96 p-3 shadow-soft backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackOutboundClick("mobile_whatsapp_bar")}
            className="button-secondary min-h-12 text-sm"
            aria-label="Falar pelo WhatsApp"
          >
            WhatsApp
          </a>
          <a href="#agendar" className="button-primary min-h-12 text-sm" aria-label="Agendar consulta">
            Agendar
          </a>
        </div>
      </div>
    </>
  );
}
