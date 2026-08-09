import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vapapp.com.br"),
  title: "VAP App | Apoio para famílias de crianças traqueostomizadas",
  description:
    "O VAP App reúne informação educativa, organização da rotina, conteúdos, inteligência artificial e comunidade para famílias de crianças traqueostomizadas.",
  keywords: [
    "Traqueostomia pediátrica",
    "Criança traqueostomizada",
    "Cuidados com traqueostomia",
    "Aplicativo para cuidadores",
    "Via aérea pediátrica",
    "VAP App",
    "Informação para famílias",
    "Dr. VAP",
  ],
  authors: [{ name: "VAP App — Via Aérea Pediátrica" }],
  creator: "Innova Digital",
  publisher: "VAP App",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vapapp.com.br",
    title: "VAP App | Apoio para famílias de crianças traqueostomizadas",
    description:
      "O VAP App reúne informação educativa, organização da rotina, conteúdos, inteligência artificial e comunidade para famílias de crianças traqueostomizadas.",
    siteName: "VAP App — Via Aérea Pediátrica",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VAP App — Via Aérea Pediátrica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAP App | Apoio para famílias de crianças traqueostomizadas",
    description:
      "O VAP App reúne informação educativa, organização da rotina, conteúdos, inteligência artificial e comunidade para famílias de crianças traqueostomizadas.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://vapapp.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Apple Smart App Banner — exibe faixa nativa no iOS para abrir direto na App Store */}
        <meta name="apple-itunes-app" content="app-id=6758860501" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "VAP App — Via Aérea Pediátrica",
                  url: "https://vapapp.com.br",
                  logo: "https://vapapp.com.br/images/logo-vap.jpg",
                  description:
                    "Plataforma gratuita de apoio a famílias de crianças traqueostomizadas.",
                  sameAs: [
                    "https://www.instagram.com/vapapp.oficial",
                  ],
                },
                {
                  "@type": "MobileApplication",
                  name: "VAP App",
                  operatingSystem: "Android, iOS",
                  applicationCategory: "HealthApplication",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                  description:
                    "Aplicativo gratuito com informação educativa, organização da rotina e comunidade para famílias de crianças traqueostomizadas.",
                  downloadUrl: [
                    "https://apps.apple.com/br/app/vapapp/id6758860501",
                    "https://play.google.com/store/apps/details?id=com.vapapp.aplicativo",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-vap-dark font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
