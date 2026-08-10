"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO_VIDEO } from "@/lib/media";
import { SITE, UI } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      id="home"
      aria-label="Početna"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/10" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold">
            Sarajevo · Poslastice i kafa
          </p>
          <h1 className="font-heading text-5xl font-medium leading-[1.1] tracking-tight text-cream md:text-6xl lg:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85 md:text-xl">
            {SITE.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-espresso transition-all hover:bg-beige hover:shadow-lg"
            >
              {UI.viewMenu}
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/20"
            >
              {UI.findUs}
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
