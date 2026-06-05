"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#clinica", label: "Clínica" },
  { href: "#servicos", label: "Serviços" },
  { href: "#medicos", label: "Médicos" },
  { href: "#domiciliar", label: "Atendimento domiciliar" },
  { href: "#localizacao", label: "Localização" },
  { href: "#agendar", label: "Agendar" }
];

type HeaderProps = {
  logoPath: string;
  shortName: string;
};

export default function Header({ logoPath, shortName }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-axis-graphite/10 bg-axis-linen/90 backdrop-blur-xl">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-axis-teal"
      >
        Ir para o conteúdo
      </a>
      <div className="section-shell flex min-h-[var(--header-height)] items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <Image
            src={logoPath}
            width={900}
            height={357}
            priority
            alt={`${shortName} - logo`}
            className="h-auto w-[136px] object-contain sm:w-[168px]"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-axis-graphite transition hover:bg-white hover:text-axis-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#agendar" className="button-primary text-sm" aria-label="Agendar consulta">
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-axis-graphite/15 bg-white text-axis-ink lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-axis-graphite/10 bg-axis-linen px-4 py-4 lg:hidden" aria-label="Menu mobile">
          <div className="mx-auto grid max-w-sm gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-white px-4 py-3 text-base font-semibold text-axis-graphite"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={() => setIsOpen(false)}
              className="button-primary mt-2 w-full"
              aria-label="Agendar consulta"
            >
              Agendar consulta
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
