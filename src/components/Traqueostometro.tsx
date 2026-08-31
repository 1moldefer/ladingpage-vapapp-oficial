"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, CheckCircle2 } from "lucide-react";

export default function Traqueostometro() {
  const [count, setCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    // Check if user already interacted from LocalStorage
    const stored = localStorage.getItem("vapapp_traqueostometro_interacted");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasInteracted(true);
      // Simulate that their interaction is already in the count
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount((prev) => prev + 1);
    }
  }, []);

  const handleInteract = () => {
    if (hasInteracted) return;
    
    setCount((prev) => prev + 1);
    setHasInteracted(true);
    localStorage.setItem("vapapp_traqueostometro_interacted", "true");
  };

  if (!isClient) return null;

  return (
    <section className="relative py-24 bg-vap-dark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vap-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vap-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-vap-teal/10 text-vap-teal px-4 py-2 rounded-full mb-6"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Nossa Comunidade
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Você não está <span className="text-vap-gold">sozinho</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-vap-dark/70 text-white/70"
          >
            Acreditamos que a união faz a força. Já somos centenas de famílias compartilhando desafios, vitórias e informações valiosas.
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Counter and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Traqueostômetro</h3>
            <p className="text-white/60 mb-8">Famílias unidas pela mesma causa no Brasil.</p>
            
            <div className="flex flex-col items-center mb-10">
              <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-vap-teal to-vap-gold tabular-nums tracking-tighter">
                {count.toLocaleString('pt-BR')}
              </div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-2">
                Famílias registradas
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!hasInteracted ? (
                <motion.div
                  key="button-interact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={handleInteract}
                    className="w-full flex items-center justify-center gap-2 bg-vap-gold hover:bg-vap-gold/90 text-vap-dark font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-vap-gold/20"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    Eu também tenho uma criança traqueostomizada
                  </button>
                  <p className="text-xs text-white/40">
                    * Só marque se você tiver uma criança traqueostomizada.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="message-thanks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-white/10 border border-vap-teal/30 text-white font-medium py-4 px-8 rounded-2xl flex items-center justify-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-vap-teal/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-vap-teal" />
                  </div>
                  Obrigado por se juntar à nossa comunidade!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
