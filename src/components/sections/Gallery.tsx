"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { GALLERY_IMAGES, SECTIONS } from "@/lib/constants";

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.gallery.eyebrow}
          title={SECTIONS.gallery.title}
          description={SECTIONS.gallery.description}
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4 md:gap-5">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={`${image.src}-${index}`}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Pogledaj fotografiju: ${image.alt}`}
              className={`group relative overflow-hidden rounded-2xl ${aspectClasses[image.aspect] ?? ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-espresso">
                  <ZoomIn className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={GALLERY_IMAGES}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </section>
  );
}
