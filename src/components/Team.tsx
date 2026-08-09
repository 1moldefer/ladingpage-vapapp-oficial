"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <section
      id="equipe"
      className="section-padding bg-white"
      aria-labelledby="team-title"
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
            Equipe
          </span>
          <h2
            id="team-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark"
          >
            Conheça quem está por trás do{" "}
            <span className="text-vap-teal">VAP App</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Avatar placeholder with initials */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-vap-teal to-vap-green flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transform transition-transform">
                  <span className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {member.initials}
                  </span>
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute -inset-1 rounded-2xl border-2 border-vap-teal/20 group-hover:border-vap-gold/40 transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>

              {/* Name */}
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-vap-dark mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs font-medium text-vap-teal mb-2">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-sm text-vap-gray leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note about photos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-vap-gray-light mt-8"
        >
          Fotografias reais da equipe serão adicionadas em breve.
        </motion.p>
      </div>
    </section>
  );
}
