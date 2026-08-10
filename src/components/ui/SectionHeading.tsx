"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-2xl flex-col gap-4 md:mb-16 ${alignment} ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="gold-divider" aria-hidden />
      {description && (
        <p className="text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
