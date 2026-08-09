import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import About from "@/components/About";
import Features from "@/components/Features";
import EuEstouAqui from "@/components/EuEstouAqui";
import Safety from "@/components/Safety";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Professionals from "@/components/Professionals";

import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";
import DownloadModal from "@/components/DownloadModal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Identification />
        <About />
        <Features />
        <EuEstouAqui />
        <Safety />
        <Story />
        <Team />
        <Professionals />

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingDownload />
      <DownloadModal />
    </>
  );
}
