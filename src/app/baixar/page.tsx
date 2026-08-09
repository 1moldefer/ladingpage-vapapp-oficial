"use client";

import { useEffect, useState } from "react";
import { APP_LINKS } from "@/lib/constants";
import { useDeviceDetect } from "@/lib/useDeviceDetect";
import { openInstagramIOSModal } from "@/lib/downloadModal";
import Image from "next/image";

export default function BaixarPage() {
  const { device, isInstagramIOS } = useDeviceDetect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isInstagramIOS) {
      const url = "itms-apps://apps.apple.com/br/app/vapapp/id6758860501";
      
      window.location.href = url;
      
      try {
        if (window.top) window.top.location.href = url;
      } catch (e) {}
      
      const a = document.createElement("a");
      a.href = url;
      a.style.display = "none";
      a.target = "_top";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      document.body.appendChild(iframe);
    }
  }, [isInstagramIOS]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-vap-light via-white to-vap-light-alt flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-vap-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vap-light via-white to-vap-light-alt flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-24">
            <Image
              src="/images/logo-vap-transparent-v4.png"
              alt="Logo VAP App — Via Aérea Pediátrica"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Instagram iOS: mostra orientação */}
          {isInstagramIOS && (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-vap-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="#D4A843" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold text-vap-dark mb-2">
                  Baixar o VAP App no iPhone
                </h1>
                <p className="text-sm text-vap-gray leading-relaxed">
                  O Instagram pode impedir a abertura direta da App Store.
                </p>
              </div>

              <div className="bg-vap-light rounded-2xl p-5 mb-6">
                <p className="text-sm text-vap-dark font-medium mb-4">
                  Para continuar, siga estes passos:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-vap-teal text-white text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    <p className="text-sm text-vap-dark leading-relaxed pt-0.5">
                      Toque em <span className="font-bold text-vap-teal">⋯</span> no canto superior direito
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-vap-teal text-white text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    <p className="text-sm text-vap-dark leading-relaxed pt-0.5">
                      Escolha <span className="font-bold">&ldquo;Abrir no navegador&rdquo;</span>
                    </p>
                  </div>
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

              <a
                href={APP_LINKS.appStore}
                className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-3.5 rounded-2xl transition-all duration-300 shadow-md text-sm w-full"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" />
                </svg>
                Baixar na App Store
              </a>
            </>
          )}

          {/* iOS (Safari ou outro navegador, não Instagram) */}
          {device === "ios" && !isInstagramIOS && (
            <>
              <div className="text-center mb-6">
                <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-vap-dark mb-2">
                  Baixar o VAP App
                </h1>
                <p className="text-sm text-vap-gray">Gratuito para iOS</p>
              </div>
              <a
                href={APP_LINKS.appStore}
                className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-lg w-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" />
                </svg>
                Baixar na App Store
              </a>
            </>
          )}

          {/* Android */}
          {device === "android" && (
            <>
              <div className="text-center mb-6">
                <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-vap-dark mb-2">
                  Baixar o VAP App
                </h1>
                <p className="text-sm text-vap-gray">Gratuito para Android</p>
              </div>
              <a
                href={APP_LINKS.googlePlay}
                className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-lg w-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.61 1.81L13.39 11.59L3.61 21.37C3.23 20.99 3 20.44 3 19.82V3.36C3 2.74 3.23 2.19 3.61 1.81Z" fill="#4285F4"/>
                  <path d="M17.39 8.59L14.8 11.18L17.39 13.77L20.39 12.08C20.93 11.76 20.93 11.42 20.39 11.1L17.39 8.59Z" fill="#FBBC04"/>
                  <path d="M3.61 1.81L14.8 11.18L17.39 8.59L3.61 1.81Z" fill="#34A853"/>
                  <path d="M3.61 21.37L17.39 13.77L14.8 11.18L3.61 21.37Z" fill="#EA4335"/>
                </svg>
                Baixar no Google Play
              </a>
            </>
          )}

          {/* Desktop */}
          {device === "other" && (
            <>
              <div className="text-center mb-6">
                <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-vap-dark mb-2">
                  Baixar o VAP App
                </h1>
                <p className="text-sm text-vap-gray">Gratuito para Android e iOS</p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={APP_LINKS.appStore}
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-lg w-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5C17.88 20.74 17.02 21.97 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.91 6.84C16.54 6.87 18.28 7.1 19.4 8.73C19.31 8.78 17.16 10.04 17.19 12.62C17.22 15.72 19.89 16.75 19.92 16.76C19.9 16.83 19.48 18.28 18.71 19.5ZM13.05 4.25C13.75 3.42 14.22 2.27 14.1 1.11C13.08 1.15 11.86 1.78 11.14 2.6C10.5 3.33 9.93 4.52 10.07 5.65C11.2 5.74 12.35 5.07 13.05 4.25Z" />
                  </svg>
                  Baixar na App Store
                </a>
                <a
                  href={APP_LINKS.googlePlay}
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-lg w-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.61 1.81L13.39 11.59L3.61 21.37C3.23 20.99 3 20.44 3 19.82V3.36C3 2.74 3.23 2.19 3.61 1.81Z" fill="#4285F4"/>
                    <path d="M17.39 8.59L14.8 11.18L17.39 13.77L20.39 12.08C20.93 11.76 20.93 11.42 20.39 11.1L17.39 8.59Z" fill="#FBBC04"/>
                    <path d="M3.61 1.81L14.8 11.18L17.39 8.59L3.61 1.81Z" fill="#34A853"/>
                    <path d="M3.61 21.37L17.39 13.77L14.8 11.18L3.61 21.37Z" fill="#EA4335"/>
                  </svg>
                  Baixar no Google Play
                </a>
              </div>
            </>
          )}

          <p className="text-center text-xs text-vap-gray mt-6">
            100% gratuito · Sem anúncios
          </p>
        </div>

        <p className="text-center mt-6">
          <a href="/" className="text-sm text-vap-teal hover:underline font-medium">
            ← Voltar para o site
          </a>
        </p>
      </div>
    </div>
  );
}
