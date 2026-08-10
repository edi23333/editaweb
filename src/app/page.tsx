"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { WhyVisit } from "@/components/sections/WhyVisit";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <WhyVisit />
      <Reviews />
      <Contact />
    </motion.main>
  );
}
