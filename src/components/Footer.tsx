"use client";

import Image from "next/image";
import CustomLogo from "./CustomLogo";
import { Mail, ExternalLink } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vap-teal text-white pt-16 border-t-4 border-vap-gold" role="contentinfo">
      <div className="container-max mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-2">
            <div className="relative w-80 h-40 mb-6 transition-all duration-300 ease-out hover:scale-110 hover:-rotate-1 origin-center cursor-pointer">
              <Image
                src="/images/logo-vap-transparent-v4.png"
                alt="Logo VAP App — Via Aérea Pediátrica"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-6">
              Plataforma gratuita de informação educativa, organização da
              rotina e comunidade para famílias de crianças traqueostomizadas.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={`https://www.instagram.com/vapapp.oficial`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram @vapapp.oficial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={`mailto:${APP_LINKS.email}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="E-mail institucional"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Política de Privacidade", href: "/politica-de-privacidade" },
                { label: "Termos de Uso", href: "/termos" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink size={12} className="opacity-50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Download */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Baixar o app
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5Z"/>
                </svg>
                App Store
              </a>
              <a
                href={APP_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.61 1.81L13.39 11.59L3.61 21.37C3.23 20.99 3 20.44 3 19.82V3.36C3 2.74 3.23 2.19 3.61 1.81Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          {/* Educational notice */}
          <div className="bg-white/5 rounded-xl p-4 mb-6">
            <p className="text-xs text-white/50 text-center leading-relaxed">
              O VAP App oferece conteúdo educativo e não substitui avaliação
              individual da equipe de saúde. Em caso de urgência, procure
              atendimento médico.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {currentYear} VAP App — Via Aérea Pediátrica. Todos os direitos
              reservados.
            </p>
            <p>
              Desenvolvido pela{" "}
              <span className="text-white/60 font-medium">Innova Digital</span>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
