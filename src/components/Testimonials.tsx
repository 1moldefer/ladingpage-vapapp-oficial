"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const PLACEHOLDERS = [
  {
    id: 1,
    text: "Espaço reservado para depoimento autorizado de uma família.",
    location: "Cidade, Estado",
  },
  {
    id: 2,
    text: "Espaço reservado para depoimento autorizado de uma família.",
    location: "Cidade, Estado",
  },
  {
    id: 3,
    text: "Espaço reservado para depoimento autorizado de uma família.",
    location: "Cidade, Estado",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-title"
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
            Depoimentos
          </span>
          <h2
            id="testimonials-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark"
          >
            Quem cuida também precisa ser{" "}
            <span className="text-vap-teal">cuidado.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLACEHOLDERS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-vap-light rounded-2xl p-8 border border-vap-light-alt border-dashed"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-vap-teal/20 mb-4"
                aria-hidden="true"
              />

              {/* Placeholder photo */}
              <div className="w-16 h-16 rounded-full bg-vap-gray-light/30 flex items-center justify-center mb-4">
                <span className="text-vap-gray-light text-xs font-medium">
                  Foto
                </span>
              </div>

              {/* Text */}
              <p className="text-vap-gray italic leading-relaxed mb-4">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Location */}
              <p className="text-sm text-vap-gray-light">{item.location}</p>

              {/* Placeholder badge */}
              <div className="absolute top-4 right-4 bg-vap-teal/10 text-vap-teal text-xs font-medium px-3 py-1 rounded-full">
                Aguardando aprovação
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-vap-gray mt-8"
        >
          Os depoimentos serão publicados somente com autorização expressa e
          consentimento das famílias.
        </motion.p>
      </div>
    </section>
  );
}
