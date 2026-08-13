"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
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

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[300px] sm:h-auto sm:aspect-video rounded-2xl overflow-hidden shadow-xl bg-black group">
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 w-full h-full cursor-pointer z-10 flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://img.youtube.com/vi/bqHcTwigprU/maxresdefault.jpg" 
                    alt="Assistir vídeo sobre o VAP App"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  {/* Play Button */}
                  <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 bg-vap-teal text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <>
                  <iframe
                    src="https://www.youtube.com/embed/bqHcTwigprU?autoplay=1&rel=0&controls=1&enablejsapi=1"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Conheça o VAP App e a nossa missão"
                  />
                </>
              )}
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
