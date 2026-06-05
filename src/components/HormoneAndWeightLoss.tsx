import { siteConfig } from "@/content/siteConfig";

export default function HormoneAndWeightLoss() {
  return (
    <section id="metabolismo" className="section-surface py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Metabolismo e acompanhamento</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
            Emagrecimento, metabolismo e reposição hormonal com avaliação médica.
          </h2>
          <p className="mt-5 text-lg leading-8 text-axis-graphite">{siteConfig.texts.metabolic}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.metabolicCare.map((item) => (
            <article key={item.title} className="rounded-2xl bg-axis-linen p-5">
              <h3 className="text-lg font-bold text-axis-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-axis-graphite">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-axis-gold/35 bg-axis-gold/10 p-5 text-sm font-semibold leading-6 text-axis-ink">
          {siteConfig.metabolicDisclaimer}
        </p>
      </div>
    </section>
  );
}
