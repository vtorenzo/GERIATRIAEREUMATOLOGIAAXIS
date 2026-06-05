import { siteConfig } from "@/content/siteConfig";

export default function About() {
  return (
    <section id="clinica" className="section-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Sobre a Clínica Axis</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
            Cuidado organizado, humano e próximo do paciente.
          </h2>
          <p className="mt-5 text-lg leading-8 text-axis-graphite">{siteConfig.texts.about}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.aboutCards.map((card) => (
            <article key={card.title} className="soft-card rounded-2xl p-5">
              <h3 className="text-lg font-bold text-axis-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-axis-graphite">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
