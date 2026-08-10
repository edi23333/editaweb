"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SECTIONS } from "@/lib/constants";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/media";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const indexBySrc = useMemo(() => {
    const map = new Map<string, number>();
    GALLERY_IMAGES.forEach((image, index) => {
      map.set(image.src, index);
    });
    return map;
  }, []);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.gallery.eyebrow}
          title={SECTIONS.gallery.title}
          description={SECTIONS.gallery.description}
        />

        <div className="space-y-14 md:space-y-16">
          {GALLERY_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <h3 className="font-heading text-2xl font-medium text-foreground md:text-3xl">
                  {category.title}
                </h3>
                <div className="gold-divider flex-1" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {category.images.map((image, imageIndex) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: imageIndex * 0.04 }}
                    onClick={() => setSelectedIndex(indexBySrc.get(image.src) ?? null)}
                    aria-label={`Pogledaj fotografiju: ${image.alt}`}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-square"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" />
                    <div className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-espresso">
                        <ZoomIn className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
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
