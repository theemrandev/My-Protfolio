import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Layers, Smartphone, Sparkles } from "lucide-react";

import { Section } from "./Section";
import { services } from "@/data/portfolio";

export function Services() {
  const getIcon = (iconId: string) => {
    switch (iconId) {
      case "code":
        return Code2;
      case "atom":
        return Cpu;
      case "smartphone":
        return Smartphone;
      case "palette":
        return Layers;
      default:
        return Sparkles;
    }
  };

  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I Do"
      description="Specialized frontend engineering services focused on speed, responsive fidelity, and clean modern aesthetics."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = getIcon(service.icon);
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_16px_40px_-15px_rgba(0,210,255,0.3)] dark:border-border/40"
            >
              {/* Subtle top accent gradient line on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                {/* Icon Container with Electric Blue Glow */}
                <div className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-indigo-500/10 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-400">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <Icon className="relative z-10 size-6" />
                </div>

                {/* Service Title */}
                <h3 className="mt-5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-cyan-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>

                {/* Feature Highlights */}
                <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom subtle CTA link */}
              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors group-hover:text-cyan-300"
                >
                  <span>Discuss project</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
