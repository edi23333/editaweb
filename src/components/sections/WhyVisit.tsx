"use client";

import { motion } from "framer-motion";
import { Coffee, Cake, Leaf, Heart, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTIONS, WHY_VISIT } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap = {
  coffee: Coffee,
  cake: Cake,
  leaf: Leaf,
  heart: Heart,
  "map-pin": MapPin,
} as const;

export function WhyVisit() {
  return (
    <section
      id="why-visit"
      aria-labelledby="why-visit-heading"
      className="section-padding bg-beige/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.whyVisit.eyebrow}
          title={SECTIONS.whyVisit.title}
          description={SECTIONS.whyVisit.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {WHY_VISIT.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group card-shadow card-shadow-hover rounded-2xl border border-[var(--card-border)] bg-card p-6 text-center transition-transform duration-500 hover:-translate-y-1 md:p-8"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-espresso transition-colors duration-300 group-hover:bg-gold/20 group-hover:text-gold dark:bg-sand">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
