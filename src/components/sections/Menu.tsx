"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MENU_CATEGORIES,
  SECTIONS,
  type MenuCategory,
  type MenuItem,
} from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline justify-between gap-4 text-sm text-foreground">
      <span className="font-medium">{item.name}</span>
      <span
        className="h-px min-w-[1rem] flex-1 border-b border-dotted border-[var(--card-border)]"
        aria-hidden
      />
      <span className="shrink-0 font-medium text-gold">{item.price}</span>
    </li>
  );
}

function MenuItemsList({ category }: { category: MenuCategory }) {
  if (category.subcategories?.length) {
    return (
      <div className="space-y-8">
        {category.subcategories.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 font-heading text-lg font-medium text-foreground">
              {group.title}
            </h4>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {category.items.map((item) => (
        <MenuItemRow key={item.name} item={item} />
      ))}
    </ul>
  );
}

export function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const activeCategory =
    MENU_CATEGORIES.find((category) => category.id === activeId) ??
    MENU_CATEGORIES[0];

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
          className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          role="tablist"
          aria-label="Kategorije menija"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeId;

            return (
              <motion.button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls="menu-panel"
                variants={fadeInUp}
                onClick={() => setActiveId(category.id)}
                className={`group relative aspect-square overflow-hidden rounded-2xl border bg-card text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "border-gold/50 card-shadow scale-[1.02]"
                    : "border-[var(--card-border)] card-shadow-hover hover:-translate-y-1"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/10"
                      : "bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent group-hover:from-espresso/80"
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 p-4 font-heading text-lg font-medium text-white md:p-5 md:text-xl">
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              id="menu-panel"
              role="tabpanel"
              aria-labelledby={`menu-tab-${activeCategory.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card-shadow rounded-2xl border border-[var(--card-border)] bg-card p-6 md:p-8"
            >
              <h3 className="mb-6 font-heading text-2xl font-medium text-foreground">
                {activeCategory.title}
              </h3>
              <MenuItemsList category={activeCategory} />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          {SECTIONS.menu.menuDisclaimer}
        </p>
      </div>
    </section>
  );
}
