import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink, Github, Sparkles } from "lucide-react";

import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Featured Projects"
      description="A selection of recent frontend web applications built with React, JavaScript, and Tailwind CSS."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: (i % 2) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_-15px_rgba(0,210,255,0.3)] dark:border-border/40"
          >
            {/* Top Project Visual Banner with Interactive Zoom */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50 bg-[#050b18]">
              {/* Subtle grid pattern background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #00d2ff 1px, transparent 1px), linear-gradient(to bottom, #00d2ff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Dynamic Mockup Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105">
                <div className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                  <Code className="size-7" />
                </div>
                <h4 className="mt-4 font-display text-lg font-bold text-white drop-shadow-sm">
                  {project.title.split(" - ")[0]}
                </h4>
                <span className="mt-1 text-xs text-cyan-300 font-mono">{project.metrics}</span>
              </div>

              {/* Tag Pill in Upper Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-black/60 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                  <Sparkles className="size-3 text-cyan-400" />
                  {project.featuredTag}
                </span>
              </div>

              {/* Hover Overlay with Quick Live Icon */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-80"
              />
            </div>

            {/* Card Content & Details */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/60 bg-surface/70 px-2.5 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dual Action Buttons: GitHub & Live Preview */}
              <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 text-xs font-semibold text-foreground transition-all duration-200 hover:border-cyan-500/50 hover:bg-secondary hover:text-cyan-400 dark:border-border/40"
                >
                  <Github className="size-4" aria-hidden="true" />
                  <span>GitHub</span>
                  <span className="sr-only">for {project.title}</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 text-xs font-semibold text-white shadow-[0_0_15px_rgba(0,210,255,0.25)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(0,210,255,0.45)] hover:scale-[1.02]"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span>Live Preview</span>
                  <ArrowUpRight className="size-3.5 opacity-80" />
                  <span className="sr-only">for {project.title}</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
