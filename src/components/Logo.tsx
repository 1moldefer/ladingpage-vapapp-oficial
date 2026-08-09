export default function Logo({ className = "", size = "md", theme = "light" }: { className?: string, size?: "sm" | "md" | "lg", theme?: "light" | "dark" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const textColorVAP = theme === "dark" ? "text-white" : "text-vap-teal";
  const textColorSubtitle = theme === "dark" ? "text-white/60" : "text-vap-gray";

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* Icon */}
      <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-vap-teal to-vap-teal-dark shadow-md overflow-hidden ${sizeClasses[size]}`}>
        {/* Subtle glow inside */}
        <div className="absolute inset-0 bg-white/10" />
        
        {/* SVG Mascot/Icon Representation */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[65%] h-[65%] text-white relative z-10"
        >
          {/* Stylized Lungs/Breath & Heart/Care shape */}
          <path
            d="M12 21.5C12 21.5 6 16.5 6 11.5C6 9 8 7 10 7C11.1 7 12 7.8 12 7.8C12 7.8 12.9 7 14 7C16 7 18 9 18 11.5C18 16.5 12 21.5 12 21.5Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          <path
            d="M12 18.5C12 18.5 7.5 14.5 7.5 10.5C7.5 8.5 9 7 10.5 7C11.3 7 12 7.6 12 7.6C12 7.6 12.7 7 13.5 7C15 7 16.5 8.5 16.5 10.5C16.5 14.5 12 18.5 12 18.5Z"
            fill="currentColor"
          />
          {/* Inner details representing airways/breath */}
          <path
            d="M12 15L12 9.5"
            stroke="var(--color-vap-teal-dark)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 11.5L10 13"
            stroke="var(--color-vap-teal-dark)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 11.5L14 13"
            stroke="var(--color-vap-teal-dark)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-[family-name:var(--font-heading)] font-bold leading-none ${textColorVAP} ${textClasses[size]}`}>
            VAP{" "}
          </span>
          <span className={`font-[family-name:var(--font-heading)] font-bold text-vap-gold leading-none ${textClasses[size]}`}>
            App
          </span>
        </div>
        {size !== "sm" && (
          <span className={`text-[10px] md:text-xs font-medium tracking-wide uppercase mt-0.5 ${textColorSubtitle}`}>
            Via Aérea Pediátrica
          </span>
        )}
      </div>
    </div>
  );
}
