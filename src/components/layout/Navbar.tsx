"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE, UI } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      setHidden(currentY > lastScrollY && currentY > 120);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navClasses = scrolled
    ? "bg-cream/95 shadow-sm backdrop-blur-md dark:bg-[#1a1612]/95"
    : "bg-transparent";

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${navClasses}`}
      >
        <nav
          aria-label={UI.mainNav}
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        >
          <Link
            href="#home"
            className="font-heading text-xl font-medium tracking-tight text-espresso dark:text-cream md:text-2xl"
          >
            {SITE.name}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
               className="text-sm font-medium text-white transition-colors hover:text-white/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-brown hover:shadow-md dark:bg-gold dark:text-espresso dark:hover:bg-gold/90 sm:inline-flex"
            >
              {UI.reserve}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? UI.closeMenu : UI.openMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-card/80 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-espresso/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-cream px-6 pb-8 pt-24 dark:bg-[#1a1612]"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-beige"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream"
              >
                {UI.reserve}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
