import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textVariant?: "short" | "full";
}

/**
 * Geometric, minimal, technology-inspired "E" logo for Emran / The Emran Dev.
 * Built with sharp code-bracket geometry and an electric-blue gradient.
 */
export function Logo({ className, size = 36, showText = true, textVariant = "full" }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <div
        className="relative flex shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Subtle ambient glow in dark mode */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/40 to-indigo-500/30 blur-md transition-opacity duration-300 group-hover:opacity-100"
        />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 size-full drop-shadow-[0_2px_8px_rgba(0,210,255,0.4)]"
          aria-label="Emran Developer Logo"
        >
          <defs>
            <linearGradient
              id="emranLogoGrad"
              x1="4"
              y1="4"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#2979FF" />
              <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
            <linearGradient
              id="emranAccentGrad"
              x1="16"
              y1="20"
              x2="38"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#76FFFF" />
              <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>
            <linearGradient
              id="emranBorderGrad"
              x1="0"
              y1="0"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2979FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Sleek rounded-rect container backing */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="12"
            fill="#070d1e"
            fillOpacity="0.9"
            stroke="url(#emranBorderGrad)"
            strokeWidth="1.5"
          />

          {/* Futuristic geometric stylized "E" constructed from tech code angles */}
          {/* Top horizontal branch of E with angled tip */}
          <path
            d="M13 14H35L31.5 19H18.5V21.5H31L27.5 26.5H18.5V29H35L31.5 34H13V14Z"
            fill="url(#emranLogoGrad)"
          />

          {/* Accent circuit / terminal pulse dot */}
          <circle cx="34" cy="24" r="2.2" fill="url(#emranAccentGrad)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
            Emran
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            {textVariant === "full" ? "The Emran Dev" : "Frontend Dev"}
          </span>
        </div>
      )}
    </div>
  );
}
