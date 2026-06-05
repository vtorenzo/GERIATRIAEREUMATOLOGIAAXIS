import { siteConfig } from "@/content/siteConfig";
import TrackedLink from "@/components/TrackedLink";
import {
  getDoctorWhatsAppUrl,
  getGoogleMapsUrl,
  getPhone,
  getWhatsAppUrl,
  withDoctoraliaUtm
} from "@/lib/links";

export default function Hero() {
  const [marcio, auxiliadora] = siteConfig.doctors;
  const mainPhone = getPhone(siteConfig.phones, "main");
  const generalWhatsApp = getWhatsAppUrl(mainPhone.number, siteConfig.whatsappMessages.general);
  const homeCareWhatsApp = getWhatsAppUrl(
    mainPhone.number,
    siteConfig.whatsappMessages.homeCare
  );

  const scheduleOptions = [
    {
      label: "Dr. Márcio Batista",
      detail: "Adulto, pessoa idosa, memória, mobilidade e cuidado domiciliar",
      href: withDoctoraliaUtm(marcio.doctoraliaUrl)
    },
    {
      label: "Dra. Auxiliadora Souza Silva Lima",
      detail: "Dor articular, doenças reumáticas e condições autoimunes",
      href: withDoctoraliaUtm(auxiliadora.doctoraliaUrl)
    },
    {
      label: "Atendimento domiciliar",
      detail: "Informações de disponibilidade e deslocamento",
      href: homeCareWhatsApp
    },
    {
      label: "Falar com a clínica",
      detail: mainPhone.number,
      href: generalWhatsApp
    }
  ];

  return (
    <section id="inicio" className="hero-background overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow">Clínica médica em Campo Grande, RJ</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-tight text-axis-ink sm:text-5xl lg:text-6xl">
            {siteConfig.texts.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-axis-graphite sm:text-xl">
            {siteConfig.texts.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#agendar" className="button-primary" aria-label="Agendar consulta">
              Agendar consulta
            </a>
            <TrackedLink
              href={generalWhatsApp}
              className="button-secondary"
              aria-label="Falar pelo WhatsApp"
              target="_blank"
              rel="noreferrer"
              label="hero_whatsapp"
            >
              Falar pelo WhatsApp
            </TrackedLink>
            <a
              href="#medicos"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-5 font-bold text-axis-teal transition hover:bg-white"
            >
              Conheça os médicos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Informações de confiança">
            {siteConfig.trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-axis-teal/15 bg-white/75 px-3 py-2 text-sm font-semibold text-axis-graphite"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside className="card rounded-2xl p-5 sm:p-6" aria-label="Agendamento rápido">
          <div className="rounded-xl bg-axis-teal px-5 py-6 text-white">
            <h2 className="text-2xl font-bold">Agende sua consulta</h2>
            <p className="mt-3 text-sm leading-6 text-white/82">
              Escolha o melhor caminho para continuar pela Doctoralia ou pelo contato direto.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {scheduleOptions.map((option) => (
              <TrackedLink
                key={option.label}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                label={`hero_schedule_${option.label}`}
                className="group rounded-xl border border-axis-graphite/10 bg-white p-4 transition hover:border-axis-teal/35 hover:shadow-soft"
              >
                <span className="block font-bold text-axis-ink group-hover:text-axis-teal">
                  {option.label}
                </span>
                <span className="mt-1 block text-sm leading-5 text-axis-graphite">
                  {option.detail}
                </span>
              </TrackedLink>
            ))}
          </div>

          <div className="mt-5 grid gap-3 rounded-xl bg-axis-mist p-4 text-sm text-axis-graphite sm:grid-cols-2">
            <TrackedLink href={getDoctorWhatsAppUrl(marcio, siteConfig.phones, siteConfig.whatsappMessages)} target="_blank" rel="noreferrer" className="font-bold text-axis-teal" label="hero_whatsapp_marcio">
              WhatsApp Dr. Márcio
            </TrackedLink>
            <TrackedLink href={getGoogleMapsUrl(siteConfig.address)} target="_blank" rel="noreferrer" className="font-bold text-axis-teal" label="hero_google_maps">
              Abrir localização
            </TrackedLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
