"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { useDeviceDetect } from "@/lib/useDeviceDetect";

export default function DownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const device = useDeviceDetect();

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openDownloadModal", handler);
    return () => window.removeEventListener("openDownloadModal", handler);
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
            aria-label="Baixar o VAP App"
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
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-vap-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#278887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-vap-dark mb-1">
                  Baixar o VAP App
                </h2>
                <p className="text-sm text-vap-gray">Gratuito para Android e iOS</p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-4">
                {/* App Store — só aparece no iOS ou desktop */}
                {(device === "ios" || device === "other") && (
                  <button
                    onClick={() => { window.location.href = APP_LINKS.appStore; }}
                    className="flex items-center gap-4 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg w-full text-left"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" />
                    </svg>
                    <div>
                      <p className="text-xs text-white/70 leading-none mb-0.5">Disponível na</p>
                      <p className="text-lg font-semibold leading-none">App Store</p>
                    </div>
                  </button>
                )}

                {/* Google Play — só aparece no Android ou desktop */}
                {(device === "android" || device === "other") && (
                  <button
                    onClick={() => { window.location.href = APP_LINKS.googlePlay; }}
                    className="flex items-center gap-4 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg w-full text-left"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3.61 1.81L13.39 11.59L3.61 21.37C3.23 20.99 3 20.44 3 19.82V3.36C3 2.74 3.23 2.19 3.61 1.81Z" fill="#4285F4"/>
                      <path d="M17.39 8.59L14.8 11.18L17.39 13.77L20.39 12.08C20.93 11.76 20.93 11.42 20.39 11.1L17.39 8.59Z" fill="#FBBC04"/>
                      <path d="M3.61 1.81L14.8 11.18L17.39 8.59L3.61 1.81Z" fill="#34A853"/>
                      <path d="M3.61 21.37L17.39 13.77L14.8 11.18L3.61 21.37Z" fill="#EA4335"/>
                    </svg>
                    <div>
                      <p className="text-xs text-white/70 leading-none mb-0.5">Disponível no</p>
                      <p className="text-lg font-semibold leading-none">Google Play</p>
                    </div>
                  </button>
                )}
              </div>

              <p className="text-center text-xs text-vap-gray mt-6">
                100% gratuito · Sem anúncios · Android e iOS
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
