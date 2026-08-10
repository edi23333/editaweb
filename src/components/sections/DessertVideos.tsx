"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTIONS } from "@/lib/constants";
import { DESSERT_VIDEOS, type DessertVideo } from "@/lib/media";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function DessertVideoCard({
  video,
  className = "",
}: {
  video: DessertVideo;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.play().catch(() => {});
        } else {
          element.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.figure
      variants={fadeInUp}
      className={`group card-shadow overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card ${className}`}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[220px]">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={video.label}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <figcaption className="sr-only">{video.label}</figcaption>
    </motion.figure>
  );
}

export function DessertVideos() {
  const featured = DESSERT_VIDEOS.find((video) => video.featured) ?? DESSERT_VIDEOS[0];
  const supporting = DESSERT_VIDEOS.filter((video) => video.src !== featured.src);

  return (
    <section
      id="deserti-u-pokretu"
      aria-labelledby="dessert-videos-heading"
      className="section-padding bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.dessertVideos.eyebrow}
          title={SECTIONS.dessertVideos.title}
          description={SECTIONS.dessertVideos.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 md:gap-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5"
        >
          <DessertVideoCard
            video={featured}
            className="lg:row-span-2 lg:min-h-[520px]"
          />

          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:col-start-2 lg:row-span-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
            {supporting.map((video) => (
              <DessertVideoCard key={video.src} video={video} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
