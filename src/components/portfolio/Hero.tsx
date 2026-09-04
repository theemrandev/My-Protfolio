import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code, ExternalLink, Github, Layers, Sparkles, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

import { ReactLogo } from "./TechLogos";
import { profile } from "@/data/portfolio";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles with smooth interval
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Heading, Role rotator, copy & actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md dark:border-cyan-400/20 dark:bg-cyan-950/40">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-700 dark:text-cyan-300">
                {profile.statusBadge}
              </span>
            </div>

            {/* Main Greeting and Role Display */}
            <div className="mt-6 w-full">
              <h1
                id="hero-heading"
                className="font-display text-3xl font-bold tracking-tight text-foreground xs:text-4xl sm:text-6xl lg:text-7xl"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-foreground via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              {/* Animated Rotating Role - LEFT -> RIGHT horizontal slide */}
              <div className="mt-2.5 sm:mt-3.5 w-full">
                {/* Stable container height prevents layout shift across role changes */}
                <div className="relative flex items-center min-h-[2.5rem] xs:min-h-[3rem] sm:min-h-[3.75rem] md:min-h-[4.25rem] lg:min-h-[5rem] w-full">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={profile.rotatingRoles[roleIndex]}
                      initial={{ x: -36, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 36, opacity: 0 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full text-left font-display text-2xl font-extrabold tracking-tight xs:text-3xl sm:text-5xl lg:text-6xl"
                    >
                      <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,210,255,0.35)] break-words sm:whitespace-nowrap">
                        {profile.rotatingRoles[roleIndex]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-3 flex items-start gap-2 max-w-xl rounded-xl border border-border/40 bg-surface/40 p-3 text-xs sm:text-sm text-muted-foreground backdrop-blur-sm dark:bg-card/30">
              <Sparkles className="size-4 shrink-0 text-cyan-400 mt-0.5" />
              <p>{profile.secondaryText}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,210,255,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,210,255,0.55)] hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border/80 bg-surface/80 px-7 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-cyan-500/60 hover:bg-secondary hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)] dark:border-border/40"
              >
                <Github className="size-4.5 transition-transform duration-200 group-hover:scale-110" />
                <span>GitHub</span>
                <ExternalLink className="size-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
              </a>
            </div>

            {/* Tech preview pills */}
            <div className="mt-10 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="text-[11px] uppercase tracking-widest text-primary font-semibold mr-1">
                Core Stack:
              </span>
              {["React", "JavaScript", "Tailwind CSS", "Redux", "Zustand"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border/60 bg-surface/50 px-2.5 py-1 backdrop-blur-xs transition-colors hover:border-primary/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-end futuristic developer workbench & code visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Ambient Background Glow behind card */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-indigo-600/20 blur-2xl dark:from-cyan-500/30 dark:via-blue-500/35"
            />

            {/* Developer Code Glass Card */}
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/85 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl dark:border-cyan-500/30 dark:bg-[#070e1e]/90">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-3 dark:border-border/30 dark:bg-[#050b18]/80">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-rose-500/80" />
                  <div className="size-3 rounded-full bg-amber-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Terminal className="size-3.5 text-cyan-400" />
                    theemrandev.tsx
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  <ReactLogo className="size-3.5" />
                  <span>React 19</span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs leading-relaxed sm:text-sm">
                <p className="text-muted-foreground/60">// The Emran Dev - Engineering Spec</p>
                <p className="mt-2">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-purple-400">=</span> &#123;
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-blue-300">name</span>:{" "}
                    <span className="text-emerald-300">&quot;Emran&quot;</span>,
                  </p>
                  <p>
                    <span className="text-blue-300">primaryRole</span>:{" "}
                    <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,
                  </p>
                  <p>
                    <span className="text-blue-300">coreSpecialties</span>: [
                    <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;JavaScript&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Tailwind&quot;</span>],
                  </p>
                  <p>
                    <span className="text-blue-300">learningNext</span>: [
                    <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;MongoDB&quot;</span>],
                  </p>
                  <p>
                    <span className="text-blue-300">cleanCodeMindset</span>:{" "}
                    <span className="text-cyan-400">true</span>,
                  </p>
                  <p>
                    <span className="text-blue-300">buildExperience</span>:{" "}
                    <span className="text-purple-400">()</span> =&gt; &#123;
                  </p>
                  <p className="pl-4 text-cyan-300">
                    return{" "}
                    <span className="text-emerald-300">
                      &quot;Fast, accessible &amp; responsive&quot;
                    </span>
                    ;
                  </p>
                  <p>&#125;</p>
                </div>
                <p>&#125;;</p>

                {/* Live Output preview block */}
                <div className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3 text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between text-cyan-400 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Code className="size-3.5" />
                      Status Output
                    </span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to build
                    </span>
                  </div>
                  <p className="text-foreground/90 font-sans font-medium">
                    Crafting clean, responsive interfaces with thoughtful motion.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Glass Pill 1: UI & Performance */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 right-2 sm:-top-6 sm:-right-6 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/90 px-3.5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-cyan-500/40"
            >
              <div className="grid size-8 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                <Layers className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-foreground">Clean UI</p>
                <p className="text-[10px] text-muted-foreground">Pixel Precision</p>
              </div>
            </motion.div>

            {/* Floating Glass Pill 2: JavaScript + React Focus */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-6 flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-blue-500/40"
            >
              <ReactLogo className="size-5 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-foreground">React &amp; JS</p>
                <p className="text-[10px] text-cyan-400 font-medium">Modern Ecosystem</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
