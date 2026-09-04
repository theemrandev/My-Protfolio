import { motion } from "framer-motion";
import { CheckCircle2, Code2, Compass, Cpu, Sparkles } from "lucide-react";

import { Section } from "./Section";
import { profile, stats } from "@/data/portfolio";

export function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Frontend Craft",
      desc: "Deep focus on HTML5, CSS3, modern JavaScript, and component-driven React architecture.",
    },
    {
      icon: Compass,
      title: "Clean UI & Usability",
      desc: "Crafting interfaces where layout math, accessible contrast, and smooth micro-interactions serve the user.",
    },
    {
      icon: Cpu,
      title: "Performance & Responsiveness",
      desc: "Fluid layouts tested from 320px smartphones to high-res desktops, optimized for fast loading.",
    },
    {
      icon: Sparkles,
      title: "Learning Backend",
      desc: "Actively expanding technical depth into Node.js, Next.js, and MongoDB to master full-stack workflows.",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Crafting thoughtful web interfaces with JavaScript & React"
      description="A dedicated Frontend Developer committed to clean design systems, accessible code, and continuous learning."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Left Column: Narrative story and philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground"
        >
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="text-foreground/85">
              {paragraph}
            </p>
          ))}

          {/* Core values list */}
          <div className="pt-2">
            <h3 className="font-display text-base font-semibold text-foreground mb-3">
              What drives my development:
            </h3>
            <ul className="grid gap-2.5 sm:grid-cols-2 text-sm">
              {[
                "Pixel-perfect responsive execution",
                "Clean, reusable component structure",
                "Predictable state management",
                "Accessibility & semantic HTML",
                "Smooth, purposeful micro-animations",
                "Active backend expansion (Node/Next/Mongo)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="size-4 shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest editable stats indicator */}
          <p className="text-xs text-muted-foreground/80 pt-2">
            Stats &amp; metrics below are editable in{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-cyan-400 border border-border/40">
              src/data/portfolio.ts
            </code>
            .
          </p>
        </motion.div>

        {/* Right Column: Glass cards and stats grid */}
        <div className="space-y-6">
          {/* 4 Feature Glass Cards */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(0,210,255,0.2)]"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-400">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="mt-3.5 font-display text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Editable Stats Bar */}
          <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="glass-card rounded-2xl p-4 text-center border border-border/60 hover:border-primary/40 transition-colors"
              >
                <p className="font-display text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-foreground">{stat.label}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{stat.detail}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
