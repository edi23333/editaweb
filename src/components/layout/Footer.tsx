import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Wifi } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS, UI } from "@/lib/constants";
import { LOGO } from "@/lib/media";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] bg-beige/50 dark:bg-[#231e19]/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-card text-muted transition-all hover:border-gold/40 hover:text-gold"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
            {UI.visitUs}
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={SITE.phoneHref} className="transition-colors hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span>{SITE.hours}</span>
            </li>
            <li className="flex items-center gap-3">
              <Wifi className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span>
                Wi-Fi lozinka:{" "}
                <span className="font-medium text-foreground">{SITE.wifiPassword}</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
            {UI.quickLinks}
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            {NAV_LINKS.filter((link) => link.href !== "#home").map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--card-border)] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5">
          <Image
            src={LOGO}
            alt="Slastičarna Gala logo"
            width={120}
            height={120}
            className="h-16 w-auto opacity-90 md:h-20"
          />
          <p className="text-center text-xs text-muted">
            © {year} {SITE.name}. {UI.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
