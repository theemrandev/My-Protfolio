import { motion } from "framer-motion";
import { Check, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

import { Section } from "./Section";
import { skillLogoComponents } from "./TechLogos";
import { skillsData, type SkillItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function SkillCard({ skill, compact = false }: { skill: SkillItem; compact?: boolean }) {
  const LogoComponent = skillLogoComponents[skill.id];
  const isLearning = skill.category === "Currently Learning";

  return (
    <div
      className={cn(
        "glass-card group relative flex shrink-0 items-center gap-3.5 rounded-2xl border border-border/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-[0_8px_25px_-5px_rgba(0,210,255,0.3)] dark:border-border/40",
        compact ? "min-w-[200px] sm:min-w-[220px]" : "w-full",
      )}
    >
      {/* Official Vector Logo */}
      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface/80 p-2 shadow-xs transition-transform duration-300 group-hover:scale-110 dark:bg-card/80">
        {LogoComponent && <LogoComponent className="size-full" />}
      </div>

      {/* Tech Name & Category Pill */}
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5">
          <span className="truncate font-display text-sm font-bold text-foreground group-hover:text-cyan-400">
            {skill.name}
          </span>
          {isLearning ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500 dark:text-amber-400 border border-amber-500/20">
              <Clock className="size-2.5" />
              Learning
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
              <Check className="size-2.5" />
              Core
            </span>
          )}
        </div>
        <span className="truncate text-xs text-muted-foreground mt-0.5">{skill.description}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 pr-4"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {skillsData.map((skill) => (
        <SkillCard key={skill.id} skill={skill} compact />
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  const [filter, setFilter] = useState<"All" | "Core Skills" | "Currently Learning">("All");

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === "All") return true;
    return skill.category === filter;
  });

  return (
    <Section
      id="skills"
      eyebrow="My Skills"
      title="Technologies & Tools"
      description="Official frontend competencies and modern backend technologies I am currently learning."
      className="overflow-hidden"
    >
      {/* Category Labels Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
            <span className="size-2 rounded-full bg-cyan-400" />
            Core Skills (Proficient)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
            <span className="size-2 rounded-full bg-amber-400" />
            Currently Learning (Backend)
          </span>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <Sparkles className="size-3.5 text-cyan-400" />
          Hover over track to pause slider
        </p>
      </div>

      {/* Infinite Horizontal Logo Slider: Moves LEFT -> RIGHT continuously */}
      <div className="marquee-viewport relative w-full overflow-hidden py-3">
        {/* Left and right gradient fade masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
        />

        {/* LTR Continuous Marquee Track */}
        <div className="marquee-track-ltr flex w-max">
          <MarqueeRow />
          <MarqueeRow ariaHidden />
          <MarqueeRow ariaHidden />
        </div>
      </div>

      {/* Interactive Filter Grid: Detailed View */}
      <div className="mt-14 pt-8 border-t border-border/50">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Detailed Skills Breakdown
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Browse all 11 verified technologies with official icon badges
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 p-1 backdrop-blur-md dark:border-border/30">
            {(["All", "Core Skills", "Currently Learning"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={cn(
                  "rounded-full px-3.5 py-1 text-xs font-semibold transition-colors",
                  filter === tab
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of skill cards */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
