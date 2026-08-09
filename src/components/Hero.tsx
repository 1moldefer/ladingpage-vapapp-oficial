"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { APP_LINKS } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const APP_SCREENS = [
  { src: "/images/app-screens/1.jpg", alt: "Tela de Infográficos Educativos do VAP App" },
  { src: "/images/app-screens/2.jpg", alt: "Tela de Cadastro de Criança do VAP App" },
  { src: "/images/app-screens/3.jpg", alt: "Tela da Calculadora de Cânulas do VAP App" },
  { src: "/images/app-screens/159904.jpg", alt: "Tela do VAP App — funcionalidade do aplicativo" },
  { src: "/images/app-screens/159908.jpg", alt: "Tela do VAP App — conteúdos e recursos" },
  { src: "/images/app-screens/159910.jpg", alt: "Tela do VAP App — interface principal" },
  { src: "/images/app-screens/159914 (1).jpg", alt: "Tela do VAP App — ferramentas de cuidado" },
  { src: "/images/app-screens/screenshot-7.webp", alt: "Tela do VAP App — visão geral" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Hero() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback(
    (newDirection: number) => {
      setCurrentIndex(([prev]) => {
        const next = (prev + newDirection + APP_SCREENS.length) % APP_SCREENS.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 3500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-vap-light via-white to-vap-light-alt"
      aria-labelledby="hero-title"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 bg-vap-teal/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-vap-gold/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-vap-teal/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-max mx-auto section-padding pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-vap-teal/10 text-vap-teal text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-vap-teal rounded-full animate-pulse-soft" />
              Disponível para Android e iOS
            </motion.div>

            <h1
              id="hero-title"
              className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-vap-dark leading-tight mb-6"
            >
              Informação, cuidado e acolhimento para famílias de crianças{" "}
              <span className="text-vap-teal">traqueostomizadas.</span>
            </h1>

            <p className="text-lg md:text-xl text-vap-gray leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
              O VAP App reúne conteúdos educativos, ferramentas de organização,
              inteligência artificial, comunidade e recursos para apoiar a rotina
              de pais, familiares e cuidadores.
            </p>

            <p className="text-base font-semibold text-vap-teal italic mb-8 max-w-2xl mx-auto lg:mx-0">
              &ldquo;Respirar é um direito. Existir nos dados também.&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div
                className="inline-flex items-center justify-center gap-2 bg-vap-teal text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg cursor-default"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Baixar grátis
              </div>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-vap-light border-2 border-vap-teal text-vap-teal font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Conhecer o VAP App
              </a>
            </div>

            {/* Store Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Disponível na App Store"
                className="transition-transform hover:scale-105"
              >
                <svg width="135" height="40" viewBox="0 0 135 40" className="drop-shadow-sm" role="img" aria-label="Disponível na App Store">
                  <rect width="135" height="40" rx="5" fill="#000" />
                  <text x="45" y="14" fill="#fff" fontSize="8" fontFamily="Arial">Disponível na</text>
                  <text x="45" y="28" fill="#fff" fontSize="14" fontWeight="600" fontFamily="Arial">App Store</text>
                  <g transform="translate(12, 8)" fill="#fff">
                    <path d="M18.71 19.5C17.88 20.74 17.02 21.96 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" transform="scale(0.8) translate(-3, -2)"/>
                  </g>
                </svg>
              </a>
              <a
                href={APP_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Disponível no Google Play"
                className="transition-transform hover:scale-105"
              >
                <svg width="135" height="40" viewBox="0 0 135 40" className="drop-shadow-sm" role="img" aria-label="Disponível no Google Play">
                  <rect width="135" height="40" rx="5" fill="#000" />
                  <text x="45" y="14" fill="#fff" fontSize="8" fontFamily="Arial">DISPONÍVEL NO</text>
                  <text x="45" y="28" fill="#fff" fontSize="14" fontWeight="600" fontFamily="Arial">Google Play</text>
                  <g transform="translate(10, 5)">
                    <path d="M7.2 2.4L16.8 12L7.2 21.6C6.96 21.24 6.8 20.76 6.8 20.2V3.8C6.8 3.24 6.96 2.76 7.2 2.4Z" fill="#4285F4" transform="scale(0.9)"/>
                    <path d="M20.4 9.6L17.6 12L20.4 14.4L23.6 12.6C24.12 12.28 24.12 11.72 23.6 11.4L20.4 9.6Z" fill="#FBBC04" transform="scale(0.9)"/>
                    <path d="M7.2 2.4L17.6 12L20.4 9.6L7.2 2.4Z" fill="#34A853" transform="scale(0.9)"/>
                    <path d="M7.2 21.6L20.4 14.4L17.6 12L7.2 21.6Z" fill="#EA4335" transform="scale(0.9)"/>
                  </g>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Phone Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Glow effect behind phone */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-vap-teal/20 to-vap-gold/20 rounded-[3rem] blur-3xl scale-110"
                aria-hidden="true"
              />

              {/* Phone Frame */}
              <div className="relative z-10 w-[280px] md:w-[300px] mx-auto">
                {/* Phone outer bezel */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 350, damping: 35 },
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.3 },
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={APP_SCREENS[currentIndex].src}
                          alt={APP_SCREENS[currentIndex].alt}
                          fill
                          className="object-cover object-top"
                          sizes="300px"
                          priority={currentIndex === 0}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center pt-1.5 pb-0.5">
                    <div className="w-24 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all backdrop-blur-sm"
                aria-label="Tela anterior"
              >
                <ChevronLeft size={20} className="text-vap-teal" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all backdrop-blur-sm"
                aria-label="Próxima tela"
              >
                <ChevronRight size={20} className="text-vap-teal" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6 relative z-10">
                {APP_SCREENS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2.5 bg-vap-teal"
                        : "w-2.5 h-2.5 bg-vap-teal/25 hover:bg-vap-teal/40"
                    }`}
                    aria-label={`Ver tela ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : undefined}
                  />
                ))}
              </div>

              {/* Screen counter */}
              <p className="text-center text-xs text-vap-gray mt-3 relative z-10">
                {currentIndex + 1} de {APP_SCREENS.length} telas do aplicativo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
