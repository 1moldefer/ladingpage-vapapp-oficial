"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, FileCheck, AlertTriangle } from "lucide-react";

export default function Safety() {
  return (
    <section
      id="seguranca"
      className="section-padding bg-white"
      aria-labelledby="safety-title"
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
            Segurança
          </span>
          <h2
            id="safety-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-6"
          >
            Informação com{" "}
            <span className="text-vap-teal">responsabilidade</span>
          </h2>
          <p className="text-lg text-vap-gray leading-relaxed">
            Os conteúdos do VAP App possuem finalidade educativa e são produzidos
            com curadoria e revisão humana. Alguns materiais podem ser
            desenvolvidos com apoio de inteligência artificial.
          </p>
        </motion.div>

        {/* Safety Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "Conteúdo educativo",
              description:
                "Materiais desenvolvidos com foco na informação e na orientação das famílias.",
            },
            {
              icon: UserCheck,
              title: "Curadoria e revisão humana",
              description:
                "Conteúdos passam por padronização e revisão antes da publicação.",
            },
            {
              icon: FileCheck,
              title: "Linguagem clara e segura",
              description:
                "Compromisso com a clareza, a precisão e o respeito às famílias.",
            },
          ].map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-vap-teal/10 flex items-center justify-center mx-auto mb-4">
                <badge.icon
                  size={32}
                  className="text-vap-teal"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-vap-dark mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-vap-gray">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-vap-light rounded-2xl p-8 text-center max-w-3xl mx-auto mb-8"
        >
          <p className="text-lg font-semibold text-vap-dark">
            O VAP App não substitui avaliação médica, acompanhamento da equipe
            de saúde ou atendimento de emergência.
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
          role="alert"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle
                size={24}
                className="text-vap-emergency"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-vap-emergency mb-2">
                Atenção — Situação de emergência
              </h3>
              <p className="text-base text-red-800 leading-relaxed">
                Em caso de dificuldade para respirar, coloração arroxeada,
                sonolência incomum, piora rápida ou qualquer sinal de urgência,
                procure imediatamente um serviço de emergência.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
