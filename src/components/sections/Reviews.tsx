"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS, SECTIONS, SITE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.reviews.eyebrow}
          title={SECTIONS.reviews.title}
          description={`Slastičarna Gala ima prosječnu ocjenu oko ${SITE.rating}/5 na temelju ${SITE.reviewCount}+ recenzija.`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {REVIEWS.map((review) => (
            <motion.blockquote
              key={review.text}
              variants={fadeInUp}
              className="card-shadow flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 md:p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-gold/50" aria-hidden />
              <div className="mb-4 flex gap-1" aria-label="5 od 5 zvjezdica">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted md:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}