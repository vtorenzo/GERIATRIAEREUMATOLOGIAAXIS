import { siteConfig } from "@/content/siteConfig";
import TrackedLink from "@/components/TrackedLink";
import {
  getPhone,
  getWhatsAppUrl,
  withDoctoraliaUtm
} from "@/lib/links";

export default function HomeCare() {
  const marcio = siteConfig.doctors[0];
  const mainPhone = getPhone(siteConfig.phones, "main");
  const whatsapp = getWhatsAppUrl(mainPhone.number, siteConfig.whatsappMessages.homeCare);

  return (
    <section id="domiciliar" className="dark-band py-16 text-white sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-axis-gold">
            Atendimento domiciliar
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Avaliação médica no ambiente familiar, quando indicada.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/82">{siteConfig.texts.homeCare}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href={whatsapp}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 font-bold text-axis-teal transition hover:bg-axis-sage"
              target="_blank"
              rel="noreferrer"
              label="homecare_whatsapp"
            >
              Falar sobre atendimento domiciliar
            </TrackedLink>
            <TrackedLink
              href={withDoctoraliaUtm(marcio.doctoraliaUrl)}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 font-bold text-white transition hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
              label="homecare_doctoralia_marcio"
            >
              Doctoralia do Dr. Márcio
            </TrackedLink>
          </div>
        </div>

        <aside className="rounded-2xl border border-white/14 bg-white/8 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/60">
            Disponibilidade sob consulta
          </p>
          <p className="mt-3 text-3xl font-bold">{siteConfig.homeCare.price}</p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/82">
            {siteConfig.homeCare.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-axis-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-white/10 p-4 text-sm font-semibold leading-6 text-white">
            {siteConfig.homeCare.disclaimer}
          </p>
        </aside>
      </div>
    </section>
  );
}
