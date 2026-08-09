"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vap-cookie-consent");
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vap-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("vap-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          role="dialog"
          aria-label="Banner de cookies"
        >
          <div className="container-max mx-auto bg-white rounded-2xl shadow-2xl border border-vap-light-alt p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-vap-teal/10 flex items-center justify-center shrink-0">
                <Cookie size={20} className="text-vap-teal" aria-hidden="true" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm text-vap-dark leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência no site.
                  Ao continuar navegando, você concorda com nossa{" "}
                  <a
                    href="#"
                    className="text-vap-teal hover:underline font-medium"
                  >
                    Política de Cookies
                  </a>{" "}
                  e{" "}
                  <a
                    href="#"
                    className="text-vap-teal hover:underline font-medium"
                  >
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="text-sm font-medium text-vap-gray hover:text-vap-dark px-4 py-2.5 rounded-xl hover:bg-vap-light transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="text-sm font-semibold text-white bg-vap-teal hover:bg-vap-teal-dark px-6 py-2.5 rounded-xl transition-colors shadow-md"
                >
                  Aceitar
                </button>
              </div>

              {/* Close */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 md:hidden p-1 text-vap-gray hover:text-vap-dark"
                aria-label="Fechar banner de cookies"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
