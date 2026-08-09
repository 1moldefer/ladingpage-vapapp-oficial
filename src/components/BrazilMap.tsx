"use client";

import React, { memo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

interface GeoFeature {
  rsmKey: string;
  type: string;
  properties: Record<string, unknown>;
  geometry: {
    type: string;
    coordinates: unknown[];
  };
}

const geoUrl = "/brazil-states.json";

// Coordinates for some major states/cities to place the signaling dots
const markers = [
  { name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
  { name: "Belo Horizonte", coordinates: [-43.9378, -19.9208] },
  { name: "Vitória", coordinates: [-40.3381, -20.3155] },
  { name: "Curitiba", coordinates: [-49.2731, -25.4284] },
  { name: "Florianópolis", coordinates: [-48.5492, -27.5969] },
  { name: "Porto Alegre", coordinates: [-51.2177, -30.0346] },
  { name: "Salvador", coordinates: [-38.5124, -12.9714] },
  { name: "Recife", coordinates: [-34.8813, -8.0476] },
  { name: "Fortaleza", coordinates: [-38.5267, -3.7172] },
  { name: "São Luís", coordinates: [-44.3028, -2.5297] },
  { name: "Belém", coordinates: [-48.5044, -1.4558] },
  { name: "Manaus", coordinates: [-60.0217, -3.1190] },
  { name: "Brasília", coordinates: [-47.8822, -15.7942] },
  { name: "Goiânia", coordinates: [-49.2539, -16.6869] },
  { name: "Cuiabá", coordinates: [-56.0967, -15.6014] },
  { name: "Campo Grande", coordinates: [-54.6201, -20.4428] },
  { name: "Porto Velho", coordinates: [-63.9004, -8.7612] },
  { name: "Rio Branco", coordinates: [-67.8100, -9.9749] },
  { name: "Boa Vista", coordinates: [-60.6733, 2.8235] },
  { name: "Macapá", coordinates: [-51.0694, 0.0349] },
  { name: "Palmas", coordinates: [-48.3277, -10.1845] },
  { name: "Teresina", coordinates: [-42.8016, -5.0892] },
  { name: "Natal", coordinates: [-35.2094, -5.7945] },
  { name: "João Pessoa", coordinates: [-34.8631, -7.1150] },
  { name: "Maceió", coordinates: [-35.7351, -9.6662] },
  { name: "Aracaju", coordinates: [-37.0717, -10.9472] },
];

const BrazilMap = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 900, // Significantly increased scale for a larger map
          center: [-53, -15] // Adjusted center
        }}
        className="w-full h-full max-h-[500px]"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: GeoFeature[] }) =>
            geographies.map((geo: GeoFeature) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255, 255, 255, 0.1)"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth={1}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "rgba(255, 255, 255, 0.2)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={4} fill="#F2B531" />
            <circle r={12} fill="#F2B531" className="animate-ping" opacity={0.4} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default memo(BrazilMap);
