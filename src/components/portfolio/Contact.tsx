import { motion } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Info,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { Section } from "./Section";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(80, "Name cannot exceed 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject (at least 3 characters)")
    .max(120, "Subject cannot exceed 120 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message (at least 10 characters)")
    .max(2000, "Message cannot exceed 2000 characters"),
});

type FormFields = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormFields, string>>;

export function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormFields | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormFields;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate validation and processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(result.data);
    }, 800);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const fieldInputClass =
    "w-full rounded-xl border border-input bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-cyan-500 focus:bg-background focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something Amazing"
      description="Have a project, role opening, or want to collaborate on frontend work? Send me a message or connect directly."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
        {/* Left Column: Direct Contact & Channels */}
        <div className="space-y-4">
          {/* Email Direct Card with Copy Option */}
          <div className="glass-card group rounded-2xl border border-border/70 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(0,210,255,0.25)]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="grid size-11 place-items-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display text-sm sm:text-base font-bold text-foreground transition-colors hover:text-cyan-400"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email to clipboard"
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
              >
                {copied ? (
                  <Check className="size-4 text-emerald-400" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-xs text-emerald-400 font-medium">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* GitHub Profile Card */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex items-center justify-between rounded-2xl border border-border/70 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(0,210,255,0.25)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:text-cyan-400">
                <Github className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  GitHub Profile
                </p>
                <p className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-400">
                  github.com/theemrandev
                </p>
              </div>
            </div>
            <ExternalLink className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
          </a>

          {/* Location & Status Card */}
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <div className="flex items-center gap-3.5">
              <div className="grid size-11 place-items-center rounded-xl bg-cyan-500/15 text-cyan-400">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Location &amp; Availability
                </p>
                <p className="font-display text-sm sm:text-base font-bold text-foreground">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Transparency Note */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4.5 text-xs text-muted-foreground backdrop-blur-md">
            <div className="flex items-start gap-2.5">
              <Info className="size-4 shrink-0 text-cyan-400 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Integration Readiness Notice</p>
                <p className="leading-relaxed">
                  This form features complete client-side validation. To receive emails in
                  production, connect this component to Formspree, EmailJS, or your custom Express
                  backend route. Direct emails can also be dispatched via{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-cyan-400 underline font-medium"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="glass-card relative overflow-hidden rounded-3xl border border-border/80 p-6 sm:p-8 shadow-xl dark:border-cyan-500/30">
          {submittedData ? (
            /* Success State Feedback UI */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                <Check className="size-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                Message Validated &amp; Ready!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Thank you,{" "}
                <span className="font-semibold text-foreground">{submittedData.name}</span>. Your
                form inputs passed all validation checks.
              </p>

              <div className="mt-6 rounded-2xl border border-border/70 bg-surface/70 p-4 text-left text-xs font-mono text-muted-foreground max-w-md mx-auto space-y-1">
                <p>
                  <span className="text-cyan-400">To:</span> {profile.email}
                </p>
                <p>
                  <span className="text-cyan-400">Subject:</span> {submittedData.subject}
                </p>
                <p>
                  <span className="text-cyan-400">From:</span> {submittedData.email}
                </p>
                <p className="pt-1 text-foreground/80 line-clamp-2">
                  &quot;{submittedData.message}&quot;
                </p>
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    submittedData.subject,
                  )}&body=${encodeURIComponent(
                    `Hi Emran,\n\n${submittedData.message}\n\nFrom: ${submittedData.name} (${submittedData.email})`,
                  )}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,210,255,0.35)]"
                >
                  <Mail className="size-4" />
                  <span>Open in Mail Client</span>
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium hover:bg-secondary"
                >
                  Send another message
                </button>
              </div>
            </motion.div>
          ) : (
            /* Interactive Contact Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name & Email Inputs */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(
                      fieldInputClass,
                      errors.name &&
                        "border-destructive focus:border-destructive focus:ring-destructive/20",
                    )}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(
                      fieldInputClass,
                      errors.email &&
                        "border-destructive focus:border-destructive focus:ring-destructive/20",
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Frontend Development Collaboration"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={cn(
                    fieldInputClass,
                    errors.subject &&
                      "border-destructive focus:border-destructive focus:ring-destructive/20",
                  )}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, timeline, or inquiries..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    fieldInputClass,
                    "resize-y min-h-[120px]",
                    errors.message &&
                      "border-destructive focus:border-destructive focus:ring-destructive/20",
                  )}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-sm font-bold text-white shadow-[0_0_25px_rgba(0,210,255,0.3)] transition-all duration-200 hover:shadow-[0_0_35px_rgba(0,210,255,0.5)] hover:brightness-105 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4.5 animate-spin" />
                    <span>Validating message...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-muted-foreground">
                Your privacy is respected. Response usually within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
