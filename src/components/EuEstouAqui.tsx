"use client";

import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, Eye } from "lucide-react";
import dynamic from "next/dynamic";

const BrazilMap = dynamic(() => import("./BrazilMap"), { ssr: false });

export default function EuEstouAqui() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-vap-green"
      aria-labelledby="euestouaqui-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vap-green via-vap-green to-vap-teal-dark opacity-90" />
      </div>

      <div className="container-max mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 text-vap-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-vap-gold rounded-full animate-pulse-soft" />
              Iniciativa EU ESTOU AQUI
            </span>

            <h2
              id="euestouaqui-title"
              className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              Uma criança que não aparece nos dados também{" "}
              <span className="text-vap-gold">
                não aparece no planejamento.
              </span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-4">
              A iniciativa &ldquo;EU ESTOU AQUI&rdquo; busca ajudar a
              compreender onde estão as famílias de crianças traqueostomizadas e
              tornar essa realidade mais visível.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8">
              Participar leva poucos minutos e contribui para a construção de um
              panorama mais real da traqueostomia pediátrica no Brasil.
            </p>

            <a
              href="#finalcta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#finalcta")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-vap-gold hover:bg-vap-gold-light text-vap-dark font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-8"
            >
              Quero participar
            </a>

            {/* Privacy notices */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Shield, text: "Seus dados são protegidos" },
                {
                  icon: Lock,
                  text: "Participação com consentimento informado",
                },
                {
                  icon: Eye,
                  text: "Uso responsável e transparente das informações",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-white/70"
                >
                  <item.icon size={16} className="shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
              <p className="text-xs text-white/50 mt-2">
                Esta iniciativa não representa um cadastro governamental oficial.
              </p>
            </div>
          </motion.div>
          {/* Right: Dotted Brazil Map Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-square md:aspect-auto h-full flex items-center justify-center">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-vap-gold/10 rounded-full blur-3xl animate-pulse-soft max-w-[400px] mx-auto" />
              
              <BrazilMap />

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-vap-gold animate-pulse-soft" />
                  <span className="text-xs text-white/70">
                    Famílias mapeadas
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
