"use client";

import { Loader, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="group inline-flex items-center justify-center w-9 h-9 border border-neutral-700 hover:bg-sidebar-primary/10 "
        aria-label="Toggle theme"
      >
        <Loader className="h-4 w-4 animate-spin" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group inline-flex items-center justify-center w-9 h-9 border border-neutral-700 hover:bg-sidebar-primary/10 "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 group-hover:text-sidebar-primary" />
      ) : (
        <Moon className="h-4 w-4 group-hover:text-sidebar-primary" />
      )}
    </button>
  );
}
