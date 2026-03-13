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
  links: {
    allymeal_app: {
      url: "https://play.google.com/store/apps/details?id=com.allymeal.app",
    },
    allymeal_website: {
      url: "https://allymeal.app/",
    },
    pexy_app: {
      url: "https://play.google.com/store/apps/details?id=com.lucysann.pexy",
    },
    pexy_website: {
      url: "https://stellam.dev/pexy",
    },
    slcode_blog: {
      url: "https://sl-code.dev",
    },
    adatools: {
      url: "https://www.adatools.dev/",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
