import React from 'react';
import Image from 'next/image';

interface CustomLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function CustomLogo({ theme = 'light', className = '' }: CustomLogoProps) {
  const textColor = theme === 'light' ? 'text-vap-teal-dark' : 'text-white';
  
  return (
    <div className={`flex items-end ${className}`}>
      {/* Left Column: VAP APP */}
      <div className="flex flex-col text-vap-gold font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl leading-[0.85] tracking-tight text-right mr-2 select-none">
        <span>VAP</span>
        <span>APP</span>
      </div>
      
      {/* Right Column: Icon + Subtitle */}
      <div className="flex flex-col items-start select-none">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-1">
          <Image
            src="/images/logo-vap-transparent.png"
            alt="Logo VAP App Icon"
            fill
            className="object-contain drop-shadow-md"
            unoptimized
          />
        </div>
        <div className={`flex flex-col ${textColor} font-[family-name:var(--font-heading)] font-bold text-[9px] sm:text-[11px] leading-tight tracking-[0.1em] uppercase`}>
          <span>Via Aérea</span>
          <span>Pediátrica</span>
        </div>
      </div>
    </div>
  );
}
