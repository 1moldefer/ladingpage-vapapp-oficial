"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export default function InstagramIOSModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openInstagramIOSModal", handler);
    return () => window.removeEventListener("openInstagramIOSModal", handler);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Como baixar o VAP App no iPhone"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 relative">
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-vap-light hover:bg-vap-light-alt flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X size={18} className="text-vap-gray" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-vap-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="#D4A843" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-vap-dark mb-2">
                  Baixar o VAP App no iPhone
                </h2>
                <p className="text-sm text-vap-gray leading-relaxed">
                  O Instagram pode impedir a abertura direta da App Store.
                </p>
              </div>

              {/* Instruction */}
              <div className="bg-vap-light rounded-2xl p-5 mb-6">
                <p className="text-sm text-vap-dark font-medium mb-4">
                  Para continuar, siga estes passos:
                </p>
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-vap-teal text-white text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    <p className="text-sm text-vap-dark leading-relaxed pt-0.5">
                      Toque em <span className="font-bold text-vap-teal">⋯</span> no canto superior direito
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-vap-teal text-white text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    <p className="text-sm text-vap-dark leading-relaxed pt-0.5">
                      Escolha <span className="font-bold">&ldquo;Abrir no navegador&rdquo;</span>
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-vap-teal text-white text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    <p className="text-sm text-vap-dark leading-relaxed pt-0.5">
                      Toque em <span className="font-bold">&ldquo;Baixar na App Store&rdquo;</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={close}
                  className="w-full bg-vap-teal hover:bg-vap-teal-dark text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-md"
                >
                  Entendi
                </button>
                <a
                  href={APP_LINKS.appStore}
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-3.5 rounded-2xl transition-all duration-300 shadow-md text-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" />
                  </svg>
                  Baixar na App Store
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
