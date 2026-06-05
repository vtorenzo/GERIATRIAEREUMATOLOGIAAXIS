import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/content/siteConfig";
import {
  getGoogleMapsUrl,
  getPhone,
  getWhatsAppUrl,
  withDoctoraliaUtm
} from "@/lib/links";

export default function Scheduling() {
  const [marcio, auxiliadora] = siteConfig.doctors;
  const mainPhone = getPhone(siteConfig.phones, "main");
  const generalWhatsApp = getWhatsAppUrl(mainPhone.number, siteConfig.whatsappMessages.general);
  const homeCareWhatsApp = getWhatsAppUrl(
    mainPhone.number,
    siteConfig.whatsappMessages.homeCare
  );

  const quickLinks = [
    {
      href: withDoctoraliaUtm(marcio.doctoraliaUrl),
      label: "scheduling_doctoralia_marcio",
      text: "Dr. Márcio"
    },
    {
      href: withDoctoraliaUtm(auxiliadora.doctoraliaUrl),
      label: "scheduling_doctoralia_auxiliadora",
      text: "Dra. Auxiliadora"
    },
    {
      href: generalWhatsApp,
      label: "scheduling_whatsapp_clinic",
      text: "WhatsApp da clínica"
    },
    {
      href: getGoogleMapsUrl(siteConfig.address),
      label: "scheduling_google_maps",
      text: "Como chegar"
    }
  ];

  const steps = [
    "Escolha o atendimento",
    "Abra Doctoralia ou WhatsApp",
    "Confirme com a equipe"
  ];

  return (
    <section id="agendar" className="section-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
              Agendamento simples, direto e sem formulários longos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-axis-graphite">
              Nesta primeira fase, o paciente agenda pelos perfis dos médicos na Doctoralia
              ou fala com a clínica pelo WhatsApp. A confirmação do horário acontece pelo
              atendimento da equipe.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="button-primary text-sm"
                label={link.label}
              >
                {link.text}
              </TrackedLink>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-axis-graphite/10 bg-white/78 p-4">
              <span className="text-sm font-extrabold text-axis-gold">0{index + 1}</span>
              <p className="mt-2 font-bold text-axis-ink">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="relative overflow-hidden rounded-2xl bg-axis-ink p-6 text-white shadow-soft">
            <div className="absolute inset-x-0 top-0 h-1 bg-axis-gold" aria-hidden="true" />
            <h3 className="text-2xl font-bold">Agendamento de visita domiciliar</h3>
            <p className="mt-4 max-w-2xl leading-7 text-white/82">
              Para pacientes com dificuldade de locomoção, fragilidade ou necessidade de
              avaliação no ambiente familiar, solicite disponibilidade pelo WhatsApp. Não se
              trata de atendimento de urgência.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/62">
                  Valor informado
                </p>
                <p className="mt-2 text-2xl font-bold">{siteConfig.homeCare.price}</p>
              </div>

              <ul className="grid gap-2 text-sm leading-6 text-white/84">
                {siteConfig.homeCare.items.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-axis-gold"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 rounded-xl bg-white/10 p-4 text-sm font-semibold leading-6 text-white/88">
              {siteConfig.homeCare.disclaimer}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={homeCareWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 font-bold text-axis-teal transition hover:bg-axis-sage"
                label="scheduling_homecare_whatsapp"
              >
                Agendar visita pelo WhatsApp
              </TrackedLink>
              <TrackedLink
                href={withDoctoraliaUtm(marcio.doctoraliaUrl)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 font-bold text-white transition hover:bg-white/10"
                label="scheduling_homecare_doctoralia_marcio"
              >
                Ver Dr. Márcio na Doctoralia
              </TrackedLink>
            </div>
          </article>

          <ContactForm whatsappPhone={mainPhone.number} />
        </div>
      </div>
    </section>
  );
}
