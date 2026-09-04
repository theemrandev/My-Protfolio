import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn("mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24", className)}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
