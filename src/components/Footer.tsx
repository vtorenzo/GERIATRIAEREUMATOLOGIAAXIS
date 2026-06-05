import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/content/siteConfig";
import {
  getFullAddress,
  isPlaceholder,
  withDoctoraliaUtm
} from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-axis-ink pb-24 pt-12 text-white lg:pb-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src={siteConfig.logoPath}
              width={900}
              height={357}
              alt={`${siteConfig.shortName} - logo`}
              className="h-auto w-48 rounded bg-white object-contain p-2"
            />
            <p className="mt-4 text-lg font-bold">{siteConfig.clinicName}</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/76">
              {siteConfig.slogan}
            </p>
            <p className="mt-5 max-w-xl rounded-xl bg-white/8 p-4 text-sm leading-6 text-white/82">
              As informacoes deste site tem carater informativo e nao substituem consulta
              medica. Em caso de urgencia ou emergencia, procure atendimento emergencial.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold">Contato</h2>
            <address className="mt-4 text-sm not-italic leading-7 text-white/76">
              {getFullAddress(siteConfig.address)}
            </address>
            <ul className="mt-4 grid gap-2 text-sm text-white/76">
              {siteConfig.phones.map((phone) => (
                <li key={phone.key}>
                  <span className="font-semibold text-white">{phone.label}: </span>
                  {phone.number}
                </li>
              ))}
              {!isPlaceholder(siteConfig.email) ? <li>{siteConfig.email}</li> : null}
              {!isPlaceholder(siteConfig.instagramUrl) ? (
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/35 underline-offset-4"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold">Agendamento</h2>
            <ul className="mt-4 grid gap-3 text-sm text-white/76">
              {siteConfig.doctors.map((doctor) => (
                <li key={doctor.id}>
                  <TrackedLink
                    href={withDoctoraliaUtm(doctor.doctoraliaUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white underline decoration-white/35 underline-offset-4"
                    label={`footer_doctoralia_${doctor.id}`}
                  >
                    {doctor.shortName} na Doctoralia
                  </TrackedLink>
                </li>
              ))}
              {!isPlaceholder(siteConfig.businessHours) ? (
                <li>Horarios: {siteConfig.businessHours}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6 text-sm leading-6 text-white/62">
          <p>
            Politica de privacidade: este site nao armazena dados de saude. O formulario
            apenas monta uma mensagem para WhatsApp.{" "}
            <a
              href="/privacidade"
              className="font-semibold text-white underline decoration-white/35 underline-offset-4"
            >
              Ler politica completa
            </a>
          </p>
          {!isPlaceholder(siteConfig.legal.companyDocument) ? (
            <p className="mt-3">Dados legais: {siteConfig.legal.companyDocument}.</p>
          ) : null}
          <p className="mt-3">© {new Date().getFullYear()} {siteConfig.shortName}.</p>
        </div>
      </div>
    </footer>
  );
}
