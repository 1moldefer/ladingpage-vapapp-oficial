"use client";

import { motion } from "framer-motion";
import { APP_LINKS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="finalcta"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-vap-teal via-vap-teal-dark to-vap-green animate-gradient-x"
      style={{ backgroundSize: "200% 200%" }}
      aria-labelledby="finalcta-title"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-vap-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/3 rounded-full blur-xl" />
      </div>

      <div className="container-max mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2
            id="finalcta-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Você não precisa cuidar sozinho.
          </h2>

          <p className="text-xl text-white/80 leading-relaxed mb-10">
            Tenha informação, ferramentas e acolhimento mais perto da sua
            família.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={APP_LINKS.appStore}
              className="inline-flex items-center justify-center gap-3 bg-white text-vap-teal font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:bg-vap-light"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" fill="currentColor"/>
              </svg>
              Baixar na App Store
            </a>
            <a
              href={APP_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-vap-gold hover:bg-vap-gold-light text-vap-dark font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.61 1.81L13.39 11.59L3.61 21.37C3.23 20.99 3 20.44 3 19.82V3.36C3 2.74 3.23 2.19 3.61 1.81Z" fill="#4285F4"/>
                <path d="M17.39 8.59L14.8 11.18L17.39 13.77L20.39 12.08C20.93 11.76 20.93 11.42 20.39 11.1L17.39 8.59Z" fill="#FBBC04"/>
                <path d="M3.61 1.81L14.8 11.18L17.39 8.59L3.61 1.81Z" fill="#34A853"/>
                <path d="M3.61 21.37L17.39 13.77L14.8 11.18L3.61 21.37Z" fill="#EA4335"/>
              </svg>
              Baixar no Google Play
            </a>
          </div>

          {/* Institutional phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg font-semibold text-vap-gold italic"
          >
            &ldquo;Respirar é um direito. Existir nos dados também.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
