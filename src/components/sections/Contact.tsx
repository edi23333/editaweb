"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTIONS, SITE, UI } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding bg-beige/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={SECTIONS.contact.eyebrow}
          title={SECTIONS.contact.title}
          description={SECTIONS.contact.description}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="card-shadow rounded-2xl border border-[var(--card-border)] bg-card p-8">
              <h3 className="font-heading text-2xl font-medium text-foreground">
                {SITE.name}
              </h3>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beige text-espresso dark:bg-sand">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {SECTIONS.contact.address}
                    </p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-muted">
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}
                      <br />
                      {SITE.address.country}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beige text-espresso dark:bg-sand">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {SECTIONS.contact.phone}
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1 block text-sm text-muted transition-colors hover:text-gold"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beige text-espresso dark:bg-sand">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {SECTIONS.contact.hours}
                    </p>
                    <p className="mt-1 text-sm text-muted">{SECTIONS.contact.everyDay}</p>
                    <p className="text-sm text-muted">07:00 – 22:30</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream transition-all hover:bg-brown dark:bg-gold dark:text-espresso"
                >
                  {UI.callToReserve}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--card-border)] px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-gold/40 hover:text-gold"
                >
                  {UI.openInMaps}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-[var(--card-border)] shadow-lg"
          >
            <iframe
              title={`Mapa lokacije — ${SITE.name}`}
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full grayscale-[20%] transition-[filter] duration-500 hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
