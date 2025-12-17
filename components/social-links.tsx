import { siteConfig } from "@/site.config";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Github,
  Twitter,
  Mail,
} as const;

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {Object.entries(siteConfig.social).map(([key, { url, icon }]) => {
        const Icon = iconMap[icon as keyof typeof iconMap];
        return (
          <Link
            key={key}
            href={url}
            target={key !== "email" ? "_blank" : undefined}
            rel={key !== "email" ? "noopener noreferrer" : undefined}
            className="group inline-flex items-center justify-center w-9 h-9 border border-neutral-700 hover:bg-sidebar-primary/10 "
            aria-label={key}
          >
            <Icon className="h-4 w-4 group-hover:text-sidebar-primary" />
          </Link>
        );
      })}
    </div>
  );
}
