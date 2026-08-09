"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import { openDownloadModal } from "@/lib/downloadModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-vap-teal shadow-lg border-b border-white/10"
      role="banner"
    >
      <div className="container-max mx-auto flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="flex items-center gap-3 shrink-0 group"
          aria-label="VAP App — Início"
        >
          <div className="relative w-48 h-20 transition-all duration-300 ease-out group-hover:scale-125 group-hover:-rotate-1 origin-center">
            <Image
              src="/images/logo-vap-transparent-v4.png"
              alt="Logo VAP App — Via Aérea Pediátrica"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1"
          role="navigation"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-vap-gold rounded-lg transition-colors duration-200 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openDownloadModal}
            className="inline-flex items-center gap-2 bg-white text-vap-teal hover:bg-vap-light font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105"
            aria-label="Baixar o VAP App"
          >
            <Download size={16} className="animate-bounce" style={{ animationDuration: '2s' }} />
            Baixar o VAP App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-vap-light transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-vap-light overflow-hidden"
            role="navigation"
            aria-label="Navegação mobile"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 text-base font-medium text-vap-dark/80 hover:text-vap-teal hover:bg-vap-light rounded-xl transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={() => { setIsOpen(false); openDownloadModal(); }}
                  className="flex items-center justify-center gap-2 bg-vap-teal hover:bg-vap-teal-dark text-white font-semibold py-3 rounded-xl transition-all w-full"
                >
                  <Download size={18} />
                  Baixar o VAP App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
