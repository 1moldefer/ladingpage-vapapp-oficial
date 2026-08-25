import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-vap-light via-white to-vap-light-alt flex items-center justify-center px-4 pt-24 pb-16">
        <div className="text-center max-w-md mx-auto">
          {/* Número 404 estilizado */}
          <div className="relative mb-8">
            <p className="text-[10rem] font-bold text-vap-teal/10 leading-none select-none">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-vap-teal/10 rounded-full flex items-center justify-center animate-pulse-soft">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#278887"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-vap-dark mb-3">
            Página não encontrada
          </h1>
          <p className="text-vap-gray mb-8 leading-relaxed">
            O endereço que você acessou não existe ou foi movido. Volte para a
            página inicial e encontre o que precisa.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-vap-teal text-white font-semibold px-6 py-3.5 rounded-2xl hover:bg-vap-teal-dark transition-all duration-300 hover:scale-105 shadow-md"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Ir para o início
            </Link>
            <Link
              href="/baixar"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-vap-teal text-vap-teal font-semibold px-6 py-3.5 rounded-2xl hover:bg-vap-light transition-all duration-300 hover:scale-105"
            >
              Baixar o VAP App
            </Link>
          </div>

          <p className="mt-8 text-xs text-vap-gray/60">
            Em caso de emergência, procure atendimento médico imediato.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
