import { ArrowUp, Github, Mail } from "lucide-react";

import { Logo } from "./Logo";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: profile.github,
      label: "GitHub profile",
      Icon: Github,
      detail: "github.com/theemrandev",
    },
    {
      href: `mailto:${profile.email}`,
      label: "Direct Email",
      Icon: Mail,
      detail: profile.email,
    },
  ];

  return (
    <footer className="relative border-t border-border/70 bg-surface/40 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div className="min-w-0 space-y-4">
          <Logo size="md" />
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            {profile.role} passionate about crafting responsive, interactive web applications with
            clean architecture and modern user interfaces.
          </p>
          <ul className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="grid size-10 place-items-center rounded-xl border border-border/80 bg-surface text-muted-foreground transition-all hover:border-cyan-500/50 hover:bg-secondary hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-6 sm:flex-row md:justify-end md:gap-12">
          <nav aria-label="Footer Navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-muted-foreground transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start sm:items-end justify-between">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-cyan-500/50 hover:text-foreground hover:shadow-[0_0_12px_rgba(0,210,255,0.2)]"
            >
              <ArrowUp className="size-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 bg-background/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name} ({profile.brand}). All rights reserved.
          </p>
          <p className="text-center sm:text-right text-muted-foreground/80">
            Crafted with React, Tailwind CSS, &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
