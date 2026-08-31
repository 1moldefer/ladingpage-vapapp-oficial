"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Heart, MapPin, Users } from "lucide-react";

// Using a standard world map topology
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Types for markers
type MapMarker = {
  id: string;
  name: string;
  coordinates: [number, number];
};

// Initial mock markers (a few cities in Brazil)
const initialMarkers: MapMarker[] = [
  { id: "sp", name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { id: "rj", name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
  { id: "ba", name: "Salvador", coordinates: [-38.5124, -12.9714] },
  { id: "pe", name: "Recife", coordinates: [-34.8776, -8.0476] },
  { id: "df", name: "Brasília", coordinates: [-47.9292, -15.7801] },
];

export default function Traqueostometro() {
  const [count, setCount] = useState(1432);
  const [markers, setMarkers] = useState<MapMarker[]>(initialMarkers);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    // Check if user already interacted from LocalStorage
    const stored = localStorage.getItem("vapapp_traqueostometro_interacted");
    if (stored) {
      setHasInteracted(true);
      // Simulate that their interaction is already in the count
      setCount((prev) => prev + 1);
    }
  }, []);

  const handleInteract = () => {
    if (hasInteracted) return;
    
    setCount((prev) => prev + 1);
    setHasInteracted(true);
    localStorage.setItem("vapapp_traqueostometro_interacted", "true");

    // Add a slightly randomized new marker near the center of Brazil to simulate their location
    // In a real app, this would use a selected state or geolocation
    const newLat = -15 + (Math.random() * 10 - 5);
    const newLng = -55 + (Math.random() * 10 - 5);
    
    const newMarker: MapMarker = {
      id: `new-${Date.now()}`,
      name: "Nova Família",
      coordinates: [newLng, newLat],
    };

    setMarkers((prev) => [...prev, newMarker]);
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Counter and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center lg:text-left backdrop-blur-sm shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Traqueostômetro</h3>
            <p className="text-white/60 mb-8">Famílias unidas pela mesma causa no Brasil.</p>
            
            <div className="flex flex-col items-center lg:items-start mb-10">
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-vap-teal to-vap-gold tabular-nums tracking-tighter">
                {count.toLocaleString('pt-BR')}
              </div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-2">
                Famílias registradas
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!hasInteracted ? (
                <motion.button
                  key="button-interact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={handleInteract}
                  className="w-full flex items-center justify-center gap-2 bg-vap-gold hover:bg-vap-gold/90 text-vap-dark font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-vap-gold/20"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  Eu também tenho uma criança traqueostomizada
                </motion.button>
              ) : (
                <motion.div
                  key="message-thanks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-white/10 border border-vap-teal/30 text-white font-medium py-4 px-8 rounded-2xl flex items-center justify-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-vap-teal/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-vap-teal" />
                  </div>
                  Obrigado por se juntar à nossa comunidade!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-sm relative min-h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-80 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}>
               {/* Decorative grid */}
               <div className="w-full h-full border-[0.5px] border-white/5 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            </div>
            
            <div className="w-full h-full cursor-default">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 600, // Zoomed into Brazil
                  center: [-55, -15],
                }}
                className="w-full h-[400px]"
              >
                <ZoomableGroup center={[-55, -15]} zoom={1} maxZoom={1}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: Array<Record<string, unknown> & { rsmKey: string }> }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#ffffff05"
                          stroke="#ffffff15"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: "#ffffff08" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ id, coordinates }) => (
                    <Marker key={id} coordinates={coordinates}>
                      <motion.circle
                        initial={{ r: 0, opacity: 0 }}
                        animate={{ r: 4, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        fill="#00B5B5" // vap-teal
                        stroke="#fff"
                        strokeWidth={1}
                      />
                      <motion.circle
                        initial={{ r: 4, opacity: 0.8 }}
                        animate={{ r: 15, opacity: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeOut",
                        }}
                        fill="#00B5B5"
                      />
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
