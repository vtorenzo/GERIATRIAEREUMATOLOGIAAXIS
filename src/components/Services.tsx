import { siteConfig } from "@/content/siteConfig";

export default function Services() {
  return (
    <section id="servicos" className="section-calm py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Principais cuidados</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
              Avaliações médicas para saúde, mobilidade e qualidade de vida.
            </h2>
          </div>
          <p className="text-lg leading-8 text-axis-graphite">{siteConfig.texts.servicesIntro}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <article key={service.title} className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-axis-ink">{service.title}</h3>
              <p className="mt-3 min-h-[52px] text-sm leading-6 text-axis-graphite">
                {service.description}
              </p>
              <a
                href="#agendar"
                className="mt-5 inline-flex min-h-11 items-center rounded-full border border-axis-teal/20 px-4 text-sm font-bold text-axis-teal transition hover:border-axis-teal/50 hover:bg-axis-sage"
              >
                Agendar avaliação
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
