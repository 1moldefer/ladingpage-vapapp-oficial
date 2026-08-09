"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarCheck, Heart } from "lucide-react";
import { IDENTIFICATION_CARDS } from "@/lib/constants";

const iconMap = {
  BookOpen,
  CalendarCheck,
  Heart,
} as const;

export default function Identification() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="identification-title"
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
          <h2
            id="identification-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-6"
          >
            Cuidar não deveria significar{" "}
            <span className="text-vap-teal">enfrentar tudo sozinho.</span>
          </h2>
          <p className="text-lg text-vap-gray leading-relaxed">
            Depois da alta hospitalar, muitas famílias chegam em casa com
            dúvidas, medo e uma grande responsabilidade. O VAP App nasceu para
            aproximar informação, organização e apoio da rotina de quem cuida.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {IDENTIFICATION_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-8 border border-vap-light-alt shadow-sm card-hover"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-vap-teal/10 flex items-center justify-center mb-6 group-hover:bg-vap-teal/20 transition-colors duration-300">
                  <IconComponent
                    size={28}
                    className="text-vap-teal"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-vap-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-vap-gray leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative accent */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-vap-teal to-vap-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
