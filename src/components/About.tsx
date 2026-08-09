
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-vap-light"
      aria-labelledby="about-title"
    >
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-vap-teal uppercase tracking-wider mb-4">
              Sobre o projeto
            </span>
            <h2
              id="about-title"
              className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-6"
            >
              O que é o <span className="text-vap-teal">VAP App</span>?
            </h2>
            <p className="text-lg text-vap-gray leading-relaxed mb-6">
              O VAP App — Via Aérea Pediátrica — é uma plataforma gratuita
              desenvolvida para apoiar famílias de crianças traqueostomizadas. O
              aplicativo reúne informação educativa, ferramentas de organização,
              conteúdos revisados, inteligência artificial e uma comunidade
              voltada ao acolhimento e à troca responsável de experiências.
            </p>
            <p className="text-base text-vap-dark font-medium italic border-l-4 border-vap-gold pl-4">
              Cada ferramenta nasceu de uma necessidade real observada na rotina
              das famílias.
            </p>
          </motion.div>

          {/* Right: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <video 
                src="/videos/0721.mp4"
                className="w-full h-full object-cover"
                controls
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
                preload="none"
                poster="/images/video-cover-new.png"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            {/* Video Title */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-semibold text-vap-teal-dark">
                Conheça o VAP App e a nossa missão
              </h3>
              <p className="text-sm text-vap-gray mt-1">
                Assista ao depoimento e entenda como a plataforma pode transformar a sua rotina.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
