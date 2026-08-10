"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: readonly GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, selectedIndex - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(images.length - 1, selectedIndex + 1));
    },
    [selectedIndex, onClose, onNavigate, images.length],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, selectedIndex]);

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
        aria-label="Galerija fotografija"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Zatvori galeriju"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-5 w-5" />
          </button>

          {selectedIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(selectedIndex - 1);
              }}
              aria-label="Prethodna fotografija"
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {selectedIndex < images.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(selectedIndex + 1);
              }}
              aria-label="Sljedeća fotografija"
              className="absolute right-16 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full object-contain"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-espresso/80 to-transparent px-6 py-4 text-sm text-cream">
              {images[selectedIndex].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
