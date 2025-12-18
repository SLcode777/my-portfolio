export const siteConfig = {
  name: "<Stella />",
  description: "Développeuse web & mobile",
  url: "https://yoursite.com",
  author: {
    name: "Stella",
    email: "sl.code.777@gmail.com",
  },
  social: {
    github: {
      url: "https://github.com/SLcode777",
      icon: "Github",
    },
    x: {
      url: "https://x.com/StellaSLcode",
      icon: "Twitter",
    },
    email: {
      url: "mailto:sl.code.777@gmail.com",
      icon: "Mail",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
