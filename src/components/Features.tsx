"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BookHeart,
  GraduationCap,
  Headphones,
  Users,
  MapPin,
  HelpCircle,
  UserCircle,
  AlertTriangle,
  PlayCircle,
  Stethoscope,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Bot,
  BookHeart,
  GraduationCap,
  Headphones,
  Users,
  MapPin,
  HelpCircle,
  UserCircle,
  PlayCircle,
  Stethoscope,
} as const;

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="section-padding bg-white"
      aria-labelledby="features-title"
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
            Funcionalidades
          </span>
          <h2
            id="features-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-4"
          >
            Tudo o que você encontra no{" "}
            <span className="text-vap-teal">VAP App</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
          {FEATURES.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl hover:shadow-vap-teal/20 hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden flex flex-col"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-vap-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-vap-light/50 border border-vap-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-vap-teal group-hover:border-vap-teal group-hover:text-white transition-all duration-500 relative z-10">
                  <IconComponent
                    size={32}
                    className="text-vap-teal group-hover:text-white transition-colors duration-500"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-vap-dark mb-1">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                {feature.subtitle && (
                  <p className="text-xs text-vap-teal font-medium mb-2">
                    {feature.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-vap-gray leading-relaxed mb-4 flex-1">
                  {feature.description}
                </p>

                {/* Warning (for Dr. VAP) */}
                {feature.warning && (
                  <div className="mt-auto flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <AlertTriangle
                      size={14}
                      className="text-amber-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-amber-700 leading-relaxed">
                      {feature.warning}
                    </p>
                  </div>
                )}

                {/* Hover accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-vap-teal to-vap-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
