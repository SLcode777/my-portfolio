import { SocialLinks } from "./social-links";
import { siteConfig } from "@/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-700 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-xs font-mono text-neutral-500">
            © {currentYear} {siteConfig.author.name}
          </p>

          <div className="sm:hidden">
            <SocialLinks />
          </div>

          <p className="text-xs font-mono text-neutral-500">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
