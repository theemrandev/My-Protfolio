import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { BackgroundAnimation } from "@/components/portfolio/BackgroundAnimation";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { Testimonials } from "@/components/portfolio/Testimonials";

const title = "Emran — Frontend Developer | JavaScript Developer";
const description =
  "Portfolio of Emran, a frontend and JavaScript developer building fast, accessible React interfaces with clean design and thoughtful motion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh relative overflow-x-hidden">
      <BackgroundAnimation />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SkillsMarquee />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
