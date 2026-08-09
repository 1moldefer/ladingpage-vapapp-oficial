"use client";

import { motion } from "framer-motion";
import {
  Share2,
  BookOpen,
  Handshake,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";

export default function Professionals() {

  return (
    <section
      className="section-padding bg-vap-light"
      aria-labelledby="professionals-title"
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
            Para profissionais
          </span>
          <h2
            id="professionals-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-vap-dark mb-6"
          >
            Profissionais e instituições também fazem parte dessa{" "}
            <span className="text-vap-teal">transformação.</span>
          </h2>
          <p className="text-lg text-vap-gray leading-relaxed">
            O VAP App pode aproximar materiais educativos de hospitais, serviços
            de saúde, equipes de home care, escolas, profissionais e redes de
            apoio.
          </p>
        </motion.div>

        {/* Possibilities Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Share2,
              title: "Divulgar o aplicativo",
              description:
                "Compartilhe o VAP App com famílias que podem se beneficiar da plataforma.",
            },
            {
              icon: BookOpen,
              title: "Utilizar materiais educativos",
              description:
                "Use os conteúdos como apoio complementar na orientação das famílias.",
            },
            {
              icon: Handshake,
              title: "Colaborar com a iniciativa",
              description:
                "Participe de iniciativas de informação e visibilidade sobre a traqueostomia pediátrica.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-vap-light-alt card-hover text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-vap-teal/10 flex items-center justify-center mx-auto mb-4">
                <item.icon
                  size={24}
                  className="text-vap-teal"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-vap-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-vap-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-vap-light-alt">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle size={28} className="text-vap-teal" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-vap-dark">
                Entre em Contato
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-vap-light/40 border border-vap-teal/30 rounded-xl p-6 flex items-center gap-4">
                <Mail size={24} className="text-vap-teal shrink-0" />
                <div>
                  <p className="font-semibold text-vap-dark mb-1 text-sm">Email de Suporte</p>
                  <a href="mailto:comunicacao@vap-app.com.br" className="text-vap-teal hover:underline text-sm font-medium">
                    comunicacao@vap-app.com.br
                  </a>
                </div>
              </div>

              {/* Tempo de Resposta Card */}
              <div className="bg-vap-light/40 border border-vap-teal/30 rounded-xl p-6 flex items-center gap-4">
                <Clock size={24} className="text-vap-teal shrink-0" />
                <div>
                  <p className="font-semibold text-vap-dark mb-1 text-sm">Tempo de Resposta</p>
                  <p className="text-vap-gray text-sm">
                    24-48 horas úteis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
