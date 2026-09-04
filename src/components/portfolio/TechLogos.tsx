interface TechLogoProps {
  className?: string;
  size?: number;
}

/** Official HTML5 Shield Logo */
export function Html5Logo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HTML5 logo"
    >
      <path d="M71 460L32 0h448l-39 460-185 52-185-52z" fill="#E44D26" />
      <path d="M256 472l149-42 32-384H256v426z" fill="#F16529" />
      <path
        d="M256 176h75l5-64H176l15 176h140l-5 60-70 19-70-19-4-45H127l8 94 121 34 121-34 16-187H256v-35z"
        fill="#EBEBEB"
      />
      <path
        d="M256 112v64h75l-5 56H256v64h65l-6 69-59 16v50l105-29 14-162 4-46 5-56H256v-26z"
        fill="#fff"
      />
    </svg>
  );
}

/** Official CSS3 Shield Logo */
export function Css3Logo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CSS3 logo"
    >
      <path d="M71 460L32 0h448l-39 460-185 52-185-52z" fill="#1572B6" />
      <path d="M256 472l149-42 32-384H256v426z" fill="#33A9DC" />
      <path
        d="M256 176h-66l-4-48h70V76H134l12 148h110v-48zm0 134l-42-11-3-33H159l6 74 91 25v-55z"
        fill="#EBEBEB"
      />
      <path
        d="M256 76v52h70l-6 64H256v52h64l-6 68-58 16v55l91-25 15-168 5-62 5-52H256z"
        fill="#fff"
      />
    </svg>
  );
}

/** Official JavaScript Logo */
export function JavaScriptLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 630 630"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JavaScript logo"
    >
      <rect width="630" height="630" rx="60" fill="#F7DF1E" />
      <path
        d="m165.5 480 39.5-24c8.5 14.5 17 25 35 25 18 0 29.5-7 29.5-34.5V263h49.5v184c0 47.5-27.5 69.5-69.5 69.5-38 0-61.5-20-84-36.5zm195-20 39-22.5c10.5 17.5 25 30.5 49 30.5 20.5 0 33.5-10 33.5-24 0-16.5-13.5-22.5-36-32.5l-12.5-5.5c-36-15.5-59.5-35-59.5-76 0-38 29-67 74.5-67 32.5 0 56 12 72.5 40.5l-37 23.5c-8-13.5-18.5-19.5-35.5-19.5-16.5 0-26 10-26 21.5 0 15 10 20.5 31.5 29.5l12.5 5.5c42.5 18 64 36.5 64 78 0 44.5-35 70-80.5 70-44.5 0-73-22-87-51.5z"
        fill="#000"
      />
    </svg>
  );
}

/** Official jQuery Logo */
export function JQueryLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="jQuery logo"
    >
      <rect width="256" height="256" rx="40" fill="#0769AD" />
      <path
        d="M207 141c-3-1-6-2-9-2-7 0-11 5-16 10-5 6-12 14-22 17-5 1-10 1-13-2-3-3-4-8-3-12 1-11 11-23 20-33 13-14 27-27 41-41-4 0-9 1-13 3-18 9-33 22-48 35-12 11-24 23-32 37-5 9-9 20-7 30 1 7 5 14 11 18 9 5 20 5 30 2 13-3 23-11 31-20 8-9 16-18 25-27 2-3 4-5 5-7zm-79 38c-3 1-7 2-10 2-8 0-15-5-21-11-7-7-14-16-19-25-6-11-10-23-12-36-1-7-1-14 1-21 2-6 5-11 10-15 9-7 21-8 31-4 12 5 21 14 29 24 10 12 18 26 27 39-2-1-4-3-6-5-10-10-19-21-29-31-8-8-17-15-27-20-7-3-15-4-23-1-6 2-11 7-13 13-3 7-3 15-2 22 2 13 6 25 12 36 6 10 14 19 22 26 7 6 16 11 25 11 4 0 7-1 10-2l-3-7z"
        fill="#fff"
      />
    </svg>
  );
}

/** Official React Logo */
export function ReactLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React logo"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

/** Official Tailwind CSS Logo */
export function TailwindLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 256 154"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tailwind CSS logo"
    >
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.736 2.434 16.697 9.499 24.401 17.318C145.753 62.003 161.436 77.867 192 77.867c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C174.247 15.864 158.564 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.736 2.434 16.697 9.499 24.401 17.318C81.753 138.803 97.436 154.667 128 154.667c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C110.247 92.664 94.564 76.8 64 76.8z"
        fill="#38BDF8"
      />
    </svg>
  );
}

/** Official Redux Logo */
export function ReduxLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Redux logo"
    >
      <path
        d="M336.7 186.7c19.3 29.5 28.5 64.9 25.5 100.2-3 35.3-17.8 68.6-42.3 94.5-24.5 25.8-57.1 42-92.5 45.9-35.4 3.9-70.9-4.3-100.8-23.2-14.8-9.4-27.8-21.2-38.4-34.9 3.5 3.3 7.3 6.3 11.2 9 32.1 21.6 70.8 31 109.4 26.6 38.6-4.4 74.3-22.3 100.9-50.6 26.6-28.3 42.7-64.8 45.6-103.3 2.9-38.5-7.4-76.9-28.6-109.1-3.6-5.4-7.5-10.6-11.7-15.5 7.4 17.6 15 37.3 21.7 60.4z"
        fill="#764ABC"
      />
      <path
        d="M211.5 83.2c35.4-3.9 70.9 4.3 100.8 23.2 14.8 9.4 27.8 21.2 38.4 34.9-3.5-3.3-7.3-6.3-11.2-9-32.1-21.6-70.8-31-109.4-26.6-38.6 4.4-74.3 22.3-100.9 50.6-26.6 28.3-42.7 64.8-45.6 103.3-2.9 38.5 7.4 76.9 28.6 109.1 3.6 5.4 7.5 10.6 11.7 15.5-7.4-17.6-15-37.3-21.7-60.4-19.3-29.5-28.5-64.9-25.5-100.2 3-35.3 17.8-68.6 42.3-94.5 24.5-25.8 57.1-42 92.5-45.9z"
        fill="#764ABC"
      />
      <circle cx="215" cy="275" r="30" fill="#764ABC" />
      <circle cx="340" cy="180" r="24" fill="#764ABC" />
      <circle cx="160" cy="150" r="22" fill="#764ABC" />
    </svg>
  );
}

/** Official Zustand Logo (The iconic cute Zustand bear) */
export function ZustandLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Zustand logo"
    >
      <rect width="256" height="256" rx="48" fill="#443E38" />
      {/* Bear ears */}
      <circle cx="68" cy="76" r="32" fill="#8D6E63" />
      <circle cx="68" cy="76" r="18" fill="#D7CCC8" />
      <circle cx="188" cy="76" r="32" fill="#8D6E63" />
      <circle cx="188" cy="76" r="18" fill="#D7CCC8" />
      {/* Bear head */}
      <circle cx="128" cy="144" r="76" fill="#8D6E63" />
      {/* Muzzle */}
      <ellipse cx="128" cy="162" rx="40" ry="32" fill="#D7CCC8" />
      <ellipse cx="128" cy="148" rx="14" ry="10" fill="#3E2723" />
      {/* Mouth */}
      <path
        d="M128 158v12m-10 0c0 5 4.5 8 10 8s10-3 10-8"
        stroke="#3E2723"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="100" cy="126" r="8" fill="#212121" />
      <circle cx="102" cy="124" r="3" fill="#FFF" />
      <circle cx="156" cy="126" r="8" fill="#212121" />
      <circle cx="158" cy="124" r="3" fill="#FFF" />
    </svg>
  );
}

/** Official Node.js Hexagon Logo */
export function NodeJsLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 256 288"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Node.js logo"
    >
      <path d="M128 0L247.38 68.92V206.77L128 275.69L8.62 206.77V68.92L128 0Z" fill="#339933" />
      <path d="M128 15.54L233.91 76.69V199L128 260.15L22.09 199V76.69L128 15.54Z" fill="#66CC33" />
      <path
        d="M128 66c-2.3 0-4.6.6-6.6 1.7l-48 27.7c-4 2.3-6.5 6.6-6.5 11.2v55.5c0 4.6 2.5 8.9 6.5 11.2l48 27.7c2 .9 4.3 1.7 6.6 1.7 2.3 0 4.6-.8 6.6-1.7l48-27.7c4-2.3 6.5-6.6 6.5-11.2v-55.5c0-4.6-2.5-8.9-6.5-11.2l-48-27.7c-2-1.1-4.3-1.7-6.6-1.7z"
        fill="#333333"
      />
      <path d="M128 78l40 23v46l-40 23-40-23v-46l40-23z" fill="#FFFFFF" />
    </svg>
  );
}

/** Official Next.js Logo */
export function NextJsLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Next.js logo"
    >
      <circle cx="90" cy="90" r="88" fill="#000" stroke="#333" strokeWidth="4" />
      <path
        d="M149.5 153.5L78.8 62H62v56h12V77.2l62.5 80.3c4.5-1.2 8.8-2.6 13-4z"
        fill="url(#nextGrad)"
      />
      <path d="M106 62h12v56h-12V62z" fill="#FFF" />
      <defs>
        <linearGradient
          id="nextGrad"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Official MongoDB Leaf Logo */
export function MongoDbLogo({ className = "size-7", size }: TechLogoProps) {
  return (
    <svg
      viewBox="0 0 256 512"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MongoDB logo"
    >
      <path
        d="M127.5 0C127.5 0 120 7.8 116 12C95 33.7 20 127 20 256C20 373.8 83 446.5 122 485C125 488 127.5 491 127.5 491V0Z"
        fill="#47A248"
      />
      <path
        d="M127.5 0C127.5 0 135 7.8 139 12C160 33.7 235 127 235 256C235 373.8 172 446.5 133 485C130 488 127.5 491 127.5 491V0Z"
        fill="#499D4A"
      />
      <path
        d="M127.5 487C125 489.5 122.5 493.5 120 499C117 505.5 119 512 127.5 512C136 512 138 505.5 135 499C132.5 493.5 130 489.5 127.5 487Z"
        fill="#3FA037"
      />
      <path
        d="M127.5 54C127.5 54 117.8 142.6 117.8 248.8C117.8 355 127.5 422 127.5 422C127.5 422 137.2 355 137.2 248.8C137.2 142.6 127.5 54 127.5 54Z"
        fill="#E8F5E9"
      />
    </svg>
  );
}

export type SkillId =
  | "html5"
  | "css3"
  | "javascript"
  | "jquery"
  | "react"
  | "tailwind"
  | "redux"
  | "zustand"
  | "nodejs"
  | "nextjs"
  | "mongodb";

export const skillLogoComponents: Record<SkillId, React.ComponentType<TechLogoProps>> = {
  html5: Html5Logo,
  css3: Css3Logo,
  javascript: JavaScriptLogo,
  jquery: JQueryLogo,
  react: ReactLogo,
  tailwind: TailwindLogo,
  redux: ReduxLogo,
  zustand: ZustandLogo,
  nodejs: NodeJsLogo,
  nextjs: NextJsLogo,
  mongodb: MongoDbLogo,
};
