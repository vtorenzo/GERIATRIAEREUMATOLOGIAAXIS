import { siteConfig } from "@/content/siteConfig";

export default function FAQ() {
  return (
    <section id="faq" className="section-warm py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
            Informações rápidas antes do agendamento.
          </h2>
        </div>

        <div className="mt-10 grid gap-3">
          {siteConfig.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-axis-ink">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-axis-mist text-axis-teal group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-axis-graphite">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
