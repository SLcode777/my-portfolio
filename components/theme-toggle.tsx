"use client";

import { Loader, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group inline-flex items-center justify-center w-9 h-9 border border-neutral-700 hover:bg-sidebar-primary/10 "
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 group-hover:text-sidebar-primary" />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4 group-hover:text-sidebar-primary" />
      ) : (
        <Loader className="h-4 w-4 animate-spin" />
      )}
    </button>
  );
}
