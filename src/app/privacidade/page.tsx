import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/content/siteConfig";
import { getFullAddress, visibleOrFallback } from "@/lib/links";

export const metadata: Metadata = {
  title: `Politica de privacidade | ${siteConfig.shortName}`,
  description:
    "Politica de privacidade e orientacoes sobre contato por WhatsApp, Doctoralia e formulario do site da Clinica Axis.",
  alternates: {
    canonical: `${siteConfig.seo.canonicalUrl}/privacidade`
  }
};

const sections = [
  {
    title: "Dados informados pelo visitante",
    text:
      "O site pode receber nome, telefone, interesse e mensagem curta quando o visitante usa o formulario de contato. O formulario apenas monta uma mensagem para WhatsApp e nao deve ser usado para enviar detalhes sensiveis de saude."
  },
  {
    title: "WhatsApp e Doctoralia",
    text:
      "Ao clicar em botoes de WhatsApp ou Doctoralia, o visitante e direcionado para servicos externos. O tratamento de dados nessas plataformas segue as politicas de privacidade de cada servico."
  },
  {
    title: "Dados de saude",
    text:
      "Evite enviar sintomas detalhados, exames, documentos ou informacoes medicas sensiveis por formularios abertos. Informacoes clinicas devem ser avaliadas em consulta medica."
  },
  {
    title: "Cookies e analytics",
    text:
      "O site esta preparado para medir cliques de forma futura, mas nao possui chave real de analytics configurada. Se uma ferramenta de analytics for adicionada depois, esta politica deve ser revisada."
  },
  {
    title: "Compartilhamento",
    text:
      "A Clinica Axis nao vende dados pessoais coletados pelo site. Dados enviados voluntariamente podem ser usados apenas para retorno de contato, agendamento e atendimento solicitado."
  },
  {
    title: "Urgencia e emergencia",
    text:
      "Este site nao e canal de urgencia. Em situacoes de emergencia, procure atendimento emergencial imediatamente."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header logoPath={siteConfig.logoPath} shortName={siteConfig.shortName} />
      <main className="bg-axis-linen py-16 sm:py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Privacidade</p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-tight text-axis-ink sm:text-5xl">
              Politica de privacidade
            </h1>
            <p className="mt-5 text-lg leading-8 text-axis-graphite">
              {siteConfig.privacyPolicy}
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-axis-ink">{section.title}</h2>
                <p className="mt-3 leading-7 text-axis-graphite">{section.text}</p>
              </article>
            ))}
          </div>

          <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-axis-ink">Responsavel pelo site</h2>
            <dl className="mt-4 grid gap-3 text-axis-graphite sm:grid-cols-2">
              <div>
                <dt className="font-bold text-axis-ink">Clinica</dt>
                <dd>{siteConfig.clinicName}</dd>
              </div>
              <div>
                <dt className="font-bold text-axis-ink">Endereco</dt>
                <dd>{getFullAddress(siteConfig.address)}</dd>
              </div>
              <div>
                <dt className="font-bold text-axis-ink">Dados legais</dt>
                <dd>{visibleOrFallback(siteConfig.legal.companyDocument)}</dd>
              </div>
              <div>
                <dt className="font-bold text-axis-ink">Ultima atualizacao</dt>
                <dd>{siteConfig.legal.privacyLastUpdated}</dd>
              </div>
            </dl>
          </section>

          <Link
            href="/"
            className="button-primary mt-8"
            aria-label="Voltar para a pagina inicial"
          >
            Voltar para o site
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
