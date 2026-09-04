import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Logo } from "./Logo";
import { navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const observed = useActiveSection(ids);
  const active = scrolled ? observed : "home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-border/40 dark:bg-background/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Logo with Custom E */}
        <a
          href="#home"
          className="group flex items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          aria-label="The Emran Dev - Return to top"
        >
          <Logo size={38} showText textVariant="full" />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/50 p-1.5 backdrop-blur-md dark:border-border/30 dark:bg-card/40 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary dark:text-cyan-300"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-primary/20"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Theme Toggle + Let's Talk Button */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative grid size-11 place-items-center rounded-full border border-border/80 bg-surface/80 text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-secondary hover:text-primary dark:border-border/40"
          >
            {theme === "dark" ? (
              <Sun className="size-5 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="size-5 text-indigo-500" aria-hidden="true" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,210,255,0.5)] hover:brightness-110 sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-dialog"
            className="grid size-11 place-items-center rounded-full border border-border/80 bg-surface/80 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown / Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-dialog"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border/80 bg-background/95 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 pt-4 pb-8">
              <ul className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary dark:text-cyan-300"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="size-2 rounded-full bg-primary" />}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-4 border-t border-border/50">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-center text-base font-semibold text-white shadow-[0_0_20px_rgba(0,210,255,0.3)]"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
