"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  isPlaceholder,
  trackOutboundClick,
  withDoctoraliaUtm
} from "@/lib/links";

export type DoctorCardData = {
  id: string;
  name: string;
  shortName: string;
  crm: string;
  displayTitle: string;
  postgraduateTraining: string[];
  doctoraliaUrl: string;
  whatsappUrl: string;
  reviewCount: number;
  photo: string;
  summary: string;
  formats: string[];
  languages?: string[];
  areas: string[];
  conditions: string[];
  prices: Array<{
    label: string;
    value: string;
  }>;
};

type DoctorCardProps = {
  doctor: DoctorCardData;
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const initials = useMemo(
    () =>
      doctor.name
        .replace(/^Dr\.?\s|^Dra\.?\s/i, "")
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join(""),
    [doctor.name]
  );

  const doctoraliaUrl = withDoctoraliaUtm(doctor.doctoraliaUrl);
  const postgraduateTraining = doctor.postgraduateTraining.filter(
    (training) => !isPlaceholder(training)
  );

  return (
    <article className="card rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-axis-sage">
          {isPlaceholder(doctor.photo) ? (
            <div className="flex h-full w-full items-center justify-center bg-axis-teal text-4xl font-bold text-white">
              {initials}
            </div>
          ) : (
            <Image
              src={doctor.photo}
              alt={`Foto de ${doctor.name}`}
              fill
              sizes="144px"
              className="object-cover"
            />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-axis-teal">
            {doctor.reviewCount} opiniões na Doctoralia
          </p>
          <h3 className="mt-2 text-2xl font-bold text-axis-ink">{doctor.name}</h3>
          <p className="mt-1 text-sm font-semibold text-axis-graphite">{doctor.crm}</p>
          <p className="mt-3 text-base font-bold text-axis-teal">{doctor.displayTitle}</p>
          {postgraduateTraining.length > 0 ? (
            <ul className="mt-3 grid gap-1 text-sm font-semibold text-axis-graphite">
              {postgraduateTraining.map((training) => (
                <li key={training}>Pós-graduação: {training}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <p className="mt-5 text-base leading-7 text-axis-graphite">{doctor.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {doctor.formats.map((format) => (
          <span
            key={format}
            className="rounded-full bg-axis-mist px-3 py-2 text-xs font-bold text-axis-graphite"
          >
            {format}
          </span>
        ))}
        {doctor.languages?.map((language) => (
          <span
            key={language}
            className="rounded-full bg-axis-linen px-3 py-2 text-xs font-bold text-axis-graphite"
          >
            {language}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-bold text-axis-ink">Principais áreas de atendimento</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {doctor.areas.slice(0, 6).map((area) => (
            <li
              key={area}
              className="rounded-full border border-axis-teal/15 px-3 py-2 text-sm text-axis-graphite"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      {expanded ? (
        <div className="mt-6 rounded-2xl bg-axis-linen p-5">
          <p className="text-sm font-bold text-axis-ink">Condições e queixas relacionadas</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {doctor.conditions.slice(0, 12).map((condition) => (
              <li
                key={condition}
                className="rounded-full border border-axis-teal/15 bg-white px-3 py-2 text-sm text-axis-graphite"
              >
                {condition}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-axis-graphite">
            Valores, disponibilidade e modalidade de atendimento devem ser confirmados no
            agendamento.
          </p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <a
          href={doctoraliaUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutboundClick(`doctoralia_${doctor.id}`)}
          className="button-primary text-center text-sm"
        >
          Agendar na Doctoralia
        </a>
        <a
          href={doctor.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutboundClick(`whatsapp_${doctor.id}`)}
          className="button-secondary text-center text-sm"
        >
          Chamar no WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-axis-graphite/15 bg-white px-4 text-sm font-bold text-axis-graphite transition hover:border-axis-teal/35 hover:text-axis-teal"
          aria-expanded={expanded}
        >
          {expanded ? "Ocultar detalhes" : "Ver detalhes"}
        </button>
      </div>
    </article>
  );
}
