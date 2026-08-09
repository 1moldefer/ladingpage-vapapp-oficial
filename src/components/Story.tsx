"use client";

import { motion } from "framer-motion";
import {
  Baby,
  AlertTriangle,
  Handshake,
  Sparkles,
  Globe,
} from "lucide-react";
import { TIMELINE_STEPS } from "@/lib/constants";

const iconMap = {
  Baby,
  AlertTriangle,
  Handshake,
  Sparkles,
  Globe,
} as const;

export default function Story() {
  return (
    <section
      className="section-padding bg-vap-light"
      aria-labelledby="story-title"
    >
      <div className="container-max mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-vap-teal uppercase tracking-wider mb-4">
            Nossa história
          </span>
          <h2
            id="story-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-6"
          >
            Uma solução construída a partir de uma{" "}
            <span className="text-vap-teal">história real</span>
          </h2>
          <p className="text-lg text-vap-gray leading-relaxed">
            O VAP App surgiu após anos acompanhando famílias que deixavam o
            hospital com uma criança traqueostomizada, mas sem acesso contínuo a
            informações claras e organizadas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vap-teal via-vap-gold to-vap-teal"
            aria-hidden="true"
          />

          {TIMELINE_STEPS.map((step, index) => {
            const IconComponent =
              iconMap[step.icon as keyof typeof iconMap];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-vap-light-alt card-hover">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-vap-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-vap-gray">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle */}
                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-vap-teal flex items-center justify-center shadow-md z-10"
                  aria-hidden="true"
                >
                  <IconComponent size={16} className="text-white" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-vap-teal italic max-w-2xl mx-auto">
            &ldquo;Nenhuma família deveria enfrentar essa jornada
            sozinha.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
