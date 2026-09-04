import type { SkillId } from "@/components/portfolio/TechLogos";

/**
 * Single source of truth for Emran's personal developer portfolio ("The Emran Dev").
 * Easily editable and strictly aligned with personal brand requirements.
 */

export const profile = {
  name: "Emran",
  brand: "The Emran Dev",
  role: "Frontend Developer | JavaScript Developer",
  statusBadge: "Available for Opportunities",
  tagline:
    "I build modern, responsive and interactive web experiences with clean design and smooth user interactions.",
  secondaryText:
    "Currently expanding my skills in backend development and modern full-stack technologies.",
  rotatingRoles: ["React Developer", "Frontend Developer", "JavaScript Developer"],
  bio: [
    "I am Emran, a passionate Frontend Developer focused on creating fast, visually refined, and interactive web experiences using JavaScript and React.",
    "My core philosophy centers on clean UI architecture, accessible user journeys, and robust performance. I enjoy transforming complex requirements and interface designs into modular, maintainable, and responsive web applications.",
    "Driven by continuous improvement, I am currently expanding my skills in backend development with Node.js, Next.js, and MongoDB to deepen my full-stack engineering foundation.",
  ],
  email: "ahmedmdimran180@gmail.com",
  github: "https://github.com/theemrandev",
  location: "Available for Remote & Relocation",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
] as const;

/** Honest, editable developer metrics */
export const stats = [
  { label: "Core Focus", value: "Frontend UI", detail: "HTML, CSS, JS, React" },
  { label: "Code Craft", value: "Clean & Tested", detail: "Pixel-first mindset" },
  { label: "Responsive", value: "320px to 4K", detail: "Mobile-first layouts" },
  { label: "Currently Learning", value: "Node & Mongo", detail: "Expanding to backend" },
];

/** 4 Core Services with icons */
export const services = [
  {
    id: "frontend-development",
    icon: "code",
    title: "Frontend Development",
    shortDesc:
      "Crafting semantic, accessible, and fast-loading web applications using HTML5, modern CSS, Tailwind CSS, and vanilla JavaScript.",
    highlights: ["Semantic HTML5 & SEO", "Modern ES6+ JavaScript", "Performance & Cross-Browser"],
  },
  {
    id: "react-development",
    icon: "atom",
    title: "React Development",
    shortDesc:
      "Building scalable single-page interfaces with modern React, functional component hooks, and predictable state management using Redux or Zustand.",
    highlights: [
      "Component Modularization",
      "State Management (Redux/Zustand)",
      "Smooth Micro-interactions",
    ],
  },
  {
    id: "responsive-web-design",
    icon: "smartphone",
    title: "Responsive Web Design",
    shortDesc:
      "Creating seamless fluid layouts and flexible grid systems that adapt flawlessly from compact 320px mobile screens to large desktop monitors.",
    highlights: [
      "Mobile-First Paradigm",
      "Fluid Typography & Spacing",
      "Touch-Friendly Interfaces",
    ],
  },
  {
    id: "ui-implementation",
    icon: "palette",
    title: "UI Implementation",
    shortDesc:
      "Transforming Figma wireframes and visual design prototypes into living, interactive code with high-fidelity glassmorphism, crisp contrast, and polished motion.",
    highlights: ["Figma to Clean Code", "Accessible Contrast & Tokens", "Framer Motion Animations"],
  },
] as const;

export interface SkillItem {
  id: SkillId;
  name: string;
  category: "Core Skills" | "Currently Learning";
  level: string;
  description: string;
}

/** Complete list of 11 recognized technologies */
export const skillsData: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "Core Skills",
    level: "Proficient",
    description: "Semantic landmarks, web accessibility, and structured markup.",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Core Skills",
    level: "Proficient",
    description: "Flexbox, CSS Grid, custom properties, and keyframe animations.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Core Skills",
    level: "Proficient",
    description: "ES6+, DOM manipulation, closures, promises, and async/await.",
  },
  {
    id: "jquery",
    name: "jQuery",
    category: "Core Skills",
    level: "Experienced",
    description: "DOM traversal, event handling, and legacy code maintenance.",
  },
  {
    id: "react",
    name: "React",
    category: "Core Skills",
    level: "Proficient",
    description: "Component architecture, hooks, lifecycle patterns, and virtual DOM.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Core Skills",
    level: "Proficient",
    description: "Utility-first design, custom configurations, responsive variants.",
  },
  {
    id: "redux",
    name: "Redux",
    category: "Core Skills",
    level: "Skilled",
    description: "Predictable central state management, slices, and dispatched actions.",
  },
  {
    id: "zustand",
    name: "Zustand",
    category: "Core Skills",
    level: "Skilled",
    description: "Lightweight reactive client-side store hooks with minimal boilerplate.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Currently Learning",
    level: "In Progress",
    description: "Server runtime basics, REST API structure, and Express routing.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Currently Learning",
    level: "In Progress",
    description: "Server-side rendering, App Router, and static generation.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Currently Learning",
    level: "In Progress",
    description: "NoSQL document collections, schemas, and basic CRUD operations.",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  featuredTag: string;
  metrics: string;
}

/** Featured Projects for the Portfolio section */
export const projects: ProjectItem[] = [
  {
    id: "dev-pulse-workspace",
    title: "DevPulse - Developer Workspace & Dashboard",
    description:
      "A modern developer productivity console featuring real-time task management, project status tracking, and theme-adaptive glassmorphic widgets.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/theemrandev",
    demo: "https://theemrandev.github.io",
    featuredTag: "Interactive Dashboard",
    metrics: "Sub-second state updates",
  },
  {
    id: "omni-cart-storefront",
    title: "OmniCart - Responsive Commerce Interface",
    description:
      "A high-speed modern e-commerce storefront with client-side cart management, filterable product catalog, and accessible slide-out checkout drawers.",
    technologies: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/theemrandev",
    demo: "https://theemrandev.github.io",
    featuredTag: "E-Commerce",
    metrics: "100% Mobile Responsive",
  },
  {
    id: "nimbus-weather-engine",
    title: "Nimbus - Atmospheric Weather Experience",
    description:
      "An interactive weather exploration app with responsive search, animated atmospheric status cards, and day-by-day temperature trend visualizers.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    github: "https://github.com/theemrandev",
    demo: "https://theemrandev.github.io",
    featuredTag: "Weather Web App",
    metrics: "Dynamic theme transitions",
  },
  {
    id: "motion-draft-ui-kit",
    title: "MotionDraft - Accessible UI Component Library",
    description:
      "A modular, reusable component showcase built with React and Tailwind CSS, featuring keyboard navigation, contrast compliance, and subtle micro-interactions.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Accessibility"],
    github: "https://github.com/theemrandev",
    demo: "https://theemrandev.github.io",
    featuredTag: "UI Design System",
    metrics: "WCAG AA Contrast",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrContext: string;
  quote: string;
  rating: number;
  initials: string;
}

/** 3 Editable Client Feedback Testimonial Cards */
export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Alex Johnson",
    role: "Senior Frontend Lead (Sample)",
    companyOrContext: "Tech Team Collaboration",
    quote:
      "Emran delivered clean, modular React components that integrated seamlessly with our codebase. His attention to responsive behavior and CSS architecture made the entire handoff effortless.",
    rating: 5,
    initials: "AJ",
  },
  {
    id: "t2",
    name: "Sarah Williams",
    role: "Product Designer (Sample)",
    companyOrContext: "Design System Implementation",
    quote:
      "Working with Emran was a pleasure. He translated our Figma designs with pixel-level precision and introduced smooth micro-interactions that enhanced usability without slowing down performance.",
    rating: 5,
    initials: "SW",
  },
  {
    id: "t3",
    name: "David Chen",
    role: "Engineering Manager (Sample)",
    companyOrContext: "Web Application Project",
    quote:
      "Impressive dedication to frontend craft and modern JavaScript. Emran writes readable, well-structured code, asks insightful questions, and communicates progress clearly at every milestone.",
    rating: 5,
    initials: "DC",
  },
];
