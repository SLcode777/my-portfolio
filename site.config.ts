export const siteConfig = {
  name: "Mon Portfolio",
  description: "Portfolio minimaliste et moderne",
  url: "https://yoursite.com",
  author: {
    name: "Votre Nom",
    email: "votre.email@example.com",
  },
  social: {
    github: {
      url: "https://github.com/username",
      icon: "Github",
    },
    x: {
      url: "https://x.com/username",
      icon: "Twitter",
    },
    email: {
      url: "mailto:votre.email@example.com",
      icon: "Mail",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
