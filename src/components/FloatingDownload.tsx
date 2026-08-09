"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export default function FloatingDownload() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 z-40 lg:hidden"
        >
          <a
            href={APP_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-vap-teal hover:bg-vap-teal-dark text-white font-semibold py-4 rounded-2xl shadow-xl shadow-vap-teal/30 transition-all"
            aria-label="Baixar o VAP App gratuitamente"
          >
            <Download size={20} />
            Baixar o VAP App — Grátis
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
