import DoctorCard, { type DoctorCardData } from "@/components/DoctorCard";
import { type DoctorConfig, siteConfig } from "@/content/siteConfig";
import { getDoctorWhatsAppUrl, isPlaceholder } from "@/lib/links";

function getDoctorDisplayTitle(doctor: DoctorConfig) {
  if (!isPlaceholder(doctor.rqe) && !isPlaceholder(doctor.displaySpecialty)) {
    return `Especialista em ${doctor.displaySpecialty} | ${doctor.rqe}`;
  }

  return doctor.professionalTitle;
}

export default function Doctors() {
  const doctors: DoctorCardData[] = siteConfig.doctors.map((doctor) => ({
    id: doctor.id,
    name: doctor.name,
    shortName: doctor.shortName,
    crm: doctor.crm,
    displayTitle: getDoctorDisplayTitle(doctor),
    postgraduateTraining: doctor.postgraduateTraining.filter(
      (training) => !isPlaceholder(training)
    ),
    doctoraliaUrl: doctor.doctoraliaUrl,
    whatsappUrl: getDoctorWhatsAppUrl(
      doctor,
      siteConfig.phones,
      siteConfig.whatsappMessages
    ),
    reviewCount: doctor.reviewCount,
    photo: isPlaceholder(doctor.photo) ? "" : doctor.photo,
    summary: doctor.summary,
    formats: doctor.formats,
    languages: doctor.languages,
    areas: doctor.areas,
    conditions: doctor.conditions,
    prices: doctor.prices
  }));

  return (
    <section id="medicos" className="section-warm py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Médicos</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-axis-ink sm:text-4xl">
              Profissionais com atendimento presencial e por vídeo.
            </h2>
          </div>
          <p className="text-lg leading-8 text-axis-graphite">
            Conheça os profissionais e escolha o perfil mais alinhado ao motivo da sua
            consulta. Em caso de dúvida, fale com a clínica para orientação de agendamento.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
