import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";

import { Section } from "./Section";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  return (
    <Section
      id="clients"
      eyebrow="Clients"
      title="Client Feedback"
      description="What collaborators, clients, and team members say about working with me. (Sample feedback — editable in portfolio.ts)"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.48,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-card group relative flex flex-col justify-between rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_15px_35px_-10px_rgba(0,210,255,0.25)] dark:border-border/40"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                    />
                  ))}
                </div>
                <MessageSquareQuote className="size-6 text-primary/40 transition-colors group-hover:text-cyan-400" />
              </div>

              {/* Testimonial Quote */}
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            {/* Client Info & Avatar */}
            <div className="mt-6 flex items-center gap-3.5 pt-4 border-t border-border/50">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-indigo-500/20 font-display text-sm font-bold text-cyan-400 border border-cyan-400/30 shadow-xs">
                {item.initials}
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground truncate">{item.role}</p>
                <p className="text-[10px] text-cyan-500/90 font-medium">{item.companyOrContext}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground/80">
        Want to share your feedback or project experience? Feel free to reach out via the contact
        form below.
      </p>
    </Section>
  );
}
