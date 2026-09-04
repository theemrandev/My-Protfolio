import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundAnimation() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep Cyber Navy Gradient Base */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Subtle Futuristic Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Primary Electric Blue Ambient Orb - Hero Left */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 40, -30, 0],
                y: [0, -30, 25, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-[15%] h-[32rem] w-[32rem] rounded-full opacity-40 dark:opacity-55 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 210, 255, 0.6) 0%, rgba(37, 99, 235, 0.4) 45%, transparent 75%)",
        }}
      />

      {/* Secondary Cyan Glow Orb - Center Right */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, -50, 40, 0],
                y: [0, 45, -35, 0],
                scale: [1, 0.92, 1.1, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[35%] right-[10%] h-[28rem] w-[28rem] rounded-full opacity-30 dark:opacity-45 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(14, 165, 233, 0.35) 50%, transparent 75%)",
        }}
      />

      {/* Tertiary Deep Indigo Glow Orb - Lower Section */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 30, -40, 0],
                y: [0, -25, 30, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-[10%] left-[20%] h-[34rem] w-[34rem] rounded-full opacity-25 dark:opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, rgba(99, 102, 241, 0.25) 55%, transparent 75%)",
        }}
      />

      {/* Subtle Floating Tech Particles (Static or very gentle) */}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-40 dark:opacity-60">
          {[
            { top: "15%", left: "22%", size: 3, dur: 7, delay: 0 },
            { top: "28%", left: "78%", size: 2.5, dur: 9, delay: 1.5 },
            { top: "45%", left: "12%", size: 2, dur: 8, delay: 3 },
            { top: "62%", left: "85%", size: 3.5, dur: 10, delay: 2 },
            { top: "78%", left: "30%", size: 2.5, dur: 8.5, delay: 4 },
            { top: "90%", left: "68%", size: 3, dur: 9.5, delay: 0.5 },
          ].map((pt, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -18, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: pt.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pt.delay,
              }}
              className="absolute rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff]"
              style={{
                top: pt.top,
                left: pt.left,
                width: pt.size,
                height: pt.size,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
