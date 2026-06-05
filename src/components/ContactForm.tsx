"use client";

import { FormEvent, useState } from "react";
import { getWhatsAppUrl, trackFormSubmit } from "@/lib/links";

const interests = [
  "Consulta médica",
  "Dr. Márcio Batista",
  "Dra. Auxiliadora Souza Silva Lima",
  "Atendimento domiciliar",
  "Teleconsulta",
  "Localização e horários"
];

type ContactFormProps = {
  whatsappPhone: string;
};

export default function ContactForm({ whatsappPhone }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      "Olá, vim pelo site da Clínica Axis e gostaria de atendimento.",
      name ? `Nome: ${name}` : "",
      phone ? `Telefone: ${phone}` : "",
      interest ? `Interesse: ${interest}` : "",
      message ? `Mensagem: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    trackFormSubmit("whatsapp_contact_form");
    window.location.href = getWhatsAppUrl(whatsappPhone, text);
  }

  return (
    <form onSubmit={handleSubmit} className="card rounded-2xl p-5 sm:p-6">
      <h3 className="text-2xl font-bold text-axis-ink">Fale com a clínica</h3>
      <p className="mt-2 text-sm leading-6 text-axis-graphite">
        Preencha os campos e continue pelo WhatsApp. Evite enviar informações médicas
        sensíveis por este formulário.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-axis-ink">
          Nome
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            className="min-h-12 rounded-xl border border-axis-graphite/15 bg-white px-4 font-normal text-axis-ink"
            placeholder="Seu nome"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-axis-ink">
          Telefone
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            autoComplete="tel"
            inputMode="tel"
            className="min-h-12 rounded-xl border border-axis-graphite/15 bg-white px-4 font-normal text-axis-ink"
            placeholder="(21) 00000-0000"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-axis-ink">
          Interesse
          <select
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            className="min-h-12 rounded-xl border border-axis-graphite/15 bg-white px-4 font-normal text-axis-ink"
          >
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-axis-ink">
          Mensagem curta
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            className="rounded-xl border border-axis-graphite/15 bg-white px-4 py-3 font-normal text-axis-ink"
            placeholder="Ex.: Gostaria de consultar horários disponíveis."
          />
        </label>
      </div>

      <button type="submit" className="button-primary mt-6 w-full" aria-label="Enviar mensagem pelo WhatsApp">
        Continuar pelo WhatsApp
      </button>
    </form>
  );
}
