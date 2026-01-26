// src/components/mode-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * ModeToggle (no dropdown)
 * - Click once: toggles Light <-> Dark
 * - No "System" option
 * - Uses shadcn Button
 *
 * Tip: Make sure you have <ThemeProvider> set in app/providers.tsx (next-themes)
 */

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // next-themes can return theme as "system" at first, so use resolvedTheme for actual state
  const current = (resolvedTheme ?? theme) as "light" | "dark" | undefined;

  const toggleTheme = () => {
    // If current is unknown, default to dark
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="relative"
    >
      {/* Sun (visible in light) */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      {/* Moon (visible in dark) */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
