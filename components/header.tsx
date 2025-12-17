import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SocialLinks } from "./social-links";
import { siteConfig } from "@/site.config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            {siteConfig.name}
          </Link>

          <nav className="flex items-center gap-4">
            <div className="hidden sm:block">
              <SocialLinks />
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
