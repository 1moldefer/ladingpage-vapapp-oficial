import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Impede clickjacking — só permite iframe do mesmo domínio
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Força HTTPS por 1 ano (inclui subdomínios)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Impede MIME sniffing — o browser respeita o Content-Type declarado
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Controla quais informações de referência são enviadas para sites externos
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restringe acesso a APIs sensíveis do browser (câmera, microfone, localização, etc.)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()",
          },
          // Content Security Policy — restringe de onde scripts, estilos e recursos podem ser carregados
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: próprio domínio + inline necessário para Next.js e JSON-LD
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Estilos: próprio domínio + inline (Tailwind injeta inline) + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fontes: Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Imagens: próprio domínio + data URIs + imagens externas dos apps
              "img-src 'self' data: blob: https:",
              // Conexões: próprio domínio + App Store + Google Play para links
              "connect-src 'self'",
              // Frames: nenhum iframe de terceiros permitido
              "frame-src 'none'",
              // Objetos: nenhum (Flash, etc.)
              "object-src 'none'",
              // Base URI: apenas próprio domínio
              "base-uri 'self'",
              // Formulários: apenas próprio domínio
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacidade",
        destination: "/politica-de-privacidade",
        permanent: true, // 301 Redirect para SEO
      },
    ];
  },
};

export default nextConfig;
