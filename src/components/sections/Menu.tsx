"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU_CATEGORIES, SECTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="section-padding bg-beige/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.menu.eyebrow}
          title={SECTIONS.menu.title}
          description={SECTIONS.menu.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {MENU_CATEGORIES.map((category) => (
            <motion.article
              key={category.title}
              variants={fadeInUp}
              className="group card-shadow card-shadow-hover overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} — Slastičarna Gala`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-3 border-t border-[var(--card-border)] pt-5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 text-sm text-foreground"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span
                        className="h-px min-w-[1rem] flex-1 border-b border-dotted border-[var(--card-border)]"
                        aria-hidden
                      />
                      <span className="shrink-0 font-medium text-gold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-muted">
          {SECTIONS.menu.menuDisclaimer}
        </p>
      </div>
    </section>
  );
}
