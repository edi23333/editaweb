"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HERO_IMAGE, SECTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.about.eyebrow}
          title={SECTIONS.about.title}
          description={SECTIONS.about.description}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={HERO_IMAGE}
              alt="Enterijer Slastičarne Gala u Sarajevu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center justify-center gap-6"
          >
            {/* LINIJA IZNAD TEKSTA */}
            <motion.div variants={fadeInUp} className="h-0.5 w-12 bg-gold/50" />

            {/* TEKST */}
            <motion.p variants={fadeInUp} className="text-xl leading-relaxed text-muted">
              Na adresi Džemala Bijedića 48, Gala je postala omiljeno mjesto za
              lokalce i posjetioce. Poznati smo po ljubaznoj usluzi, svježim kolačima i ugodnom ambijentu.
              Uz pristupačne cijene i radno vrijeme od jutra do kasne večeri, 
              ovo je idealno mjesto za opuštenu kafu i druženje.
            </motion.p>

            {/* LINIJA ISPOD TEKSTA */}
            <motion.div variants={fadeInUp} className="h-0.5 w-12 bg-gold/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}