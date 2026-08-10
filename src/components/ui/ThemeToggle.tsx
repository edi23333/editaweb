"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Promijeni temu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-card/80 text-foreground"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Prebaci na svijetli način" : "Prebaci na tamni način"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-card/80 text-foreground transition-all hover:border-gold/40 hover:text-gold"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}
