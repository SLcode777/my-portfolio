export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      privacy: "Confidentialité",
      contact: "Contact",
      download: "Télécharger",
      downloadSoon: "Bientôt disponible",
    },
    beta: {
      title: "Application en phase de test fermé",
      content:
        "L'application est actuellement en phase de test fermé. Si vous voulez faire partie des testeurs, envoyez votre adresse Gmail (celle de votre compte Play Store) à :",
      note: "Aucun spam garanti.",
      close: "Fermer",
      copied: "Email copié dans le presse-papier !",
    },
    footer: {
      about: {
        title: "À propos de Pexy",
        description:
          "Application de Communication Alternative Augmentée (CAA) gratuite pour faciliter la communication des personnes avec troubles du langage.",
      },
      links: {
        title: "Liens",
        home: "Accueil",
        privacy: "Politique de confidentialité",
        googlePlay: "Google Play",
      },
      contact: {
        title: "Contact",
        email: "Email",
        support: "Support",
      },
      bottom: {
        madeWith: "Développé avec 💙 par",
        rights: "Tous droits réservés.",
      },
    },
    home: {
      meta: {
        title: "Pexy - Communication Alternative Augmentée (CAA)",
        description:
          "Application de Communication Alternative Augmentée (CAA) gratuite pour faciliter la communication des personnes avec troubles du langage ou TSA. Développée avec amour par une maman.",
      },
      hero: {
        h1: "Communiquer facilement",
        h1Span: "avec Pexy",
        description:
          "Application de Communication Alternative Augmentée (CAA) gratuite pour les personnes avec troubles du langage.",
        cta: "Bientôt sur Google Play",
        privacyLink: "Politique de confidentialité",
      },
      features: {
        title: "Fonctionnalités",
        items: [
          {
            icon: "🎨",
            title: "Pictogrammes personnalisés",
            description:
              "Créez vos propres pictogrammes avec des photos pour personnaliser l'expérience de communication.",
          },
          {
            icon: "🔊",
            title: "Synthèse vocale",
            description:
              "Chaque pictogramme peut être lu à haute voix avec différentes voix et vitesses de lecture.",
          },
          {
            icon: "⭐",
            title: "Favoris",
            description:
              "Sauvegardez vos pictogrammes préférés pour y accéder rapidement et faciliter la communication quotidienne.",
          },
          {
            icon: "🌍",
            title: "Multilingue",
            description:
              "Disponible en français et en anglais avec support de plusieurs voix pour chaque langue.",
          },
          {
            icon: "💾",
            title: "Sauvegarde de données",
            description:
              "Exportez et importez vos données facilement pour ne rien perdre lors d'un changement d'appareil.",
          },
          {
            icon: "🔒",
            title: "100% Privé",
            description:
              "Toutes vos données restent sur votre appareil. Aucune collecte, aucun tracking, aucune publicité.",
          },
        ],
      },
      screenshots: {
        title: "Captures d'écran",
        alt: "Capture d'écran de l'application Pexy",
      },
      about: {
        title: "Développé avec 🧡",
        p1: "Pexy a été développée par la maman d'un merveilleux petit garçon avec TSA.",
        p2: "Cette application est",
        p2Bold: "gratuite et le restera toujours",
        p3: "L'objectif est de rendre la communication accessible à tous, sans barrière financière.",
        p4: "Si vous le souhaitez, vous pouvez me soutenir par un don à hauteur de vos moyens sur Ko-fi",
        kofiAlt: "Soutenir sur Ko-fi",
      },
      cta: {
        title: "Prêt à commencer ?",
        description:
          "Téléchargez Pexy gratuitement sur Google Play et commencez à communiquer plus facilement dès aujourd'hui.",
        button: "Bientôt disponible",
      },
    },
    privacy: {
      meta: {
        title: "Politique de confidentialité - Pexy",
        description:
          "Politique de confidentialité de l'application Pexy (CAA)",
      },
      backLink: "← Retour à Pexy",
      backLinkBottom: "← Retour à la page Pexy",
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour :",
      sections: {
        intro: {
          title: "Introduction",
          content:
            "Pexy est une application de Communication Alternative Augmentée (CAA) conçue pour respecter votre vie privée. Cette politique de confidentialité explique comment vos données sont traitées (ou plutôt, ne sont PAS traitées) lorsque vous utilisez Pexy.",
        },
        noData: {
          title: "Collecte de données personnelles",
          highlight: "✅ Pexy ne collecte AUCUNE donnée personnelle.",
          content:
            "L'application fonctionne entièrement hors ligne et toutes vos données restent stockées localement sur votre appareil.",
        },
        localStorage: {
          title: "Données stockées localement",
          intro: "Les données suivantes sont stockées",
          introStrong: "uniquement sur votre appareil",
          items: [
            "Nom du profil utilisateur",
            "Avatar choisi",
            "Préférences de langue",
            "Paramètres de synthèse vocale (vitesse, voix)",
            "Code PIN de protection des paramètres (si configuré)",
            "Pictogrammes favoris",
            "Phrases personnalisées",
            "Pictogrammes personnalisés (photos prises ou importées)",
          ],
          important:
            "Important : Ces données ne quittent jamais votre appareil et ne sont jamais transmises à des serveurs externes.",
        },
        permissions: {
          title: "Permissions de l'application",
          intro: "Pexy demande les permissions suivantes :",
          items: [
            {
              icon: "📷",
              title: "Accès à la caméra",
              description:
                "Utilisé uniquement pour prendre des photos de pictogrammes personnalisés. Les photos sont stockées localement sur votre appareil.",
            },
            {
              icon: "🖼️",
              title: "Accès à la galerie",
              description:
                "Utilisé uniquement pour sélectionner des images depuis votre galerie pour créer des pictogrammes personnalisés.",
            },
            {
              icon: "💾",
              title: "Accès au stockage",
              description:
                "Utilisé pour exporter et importer vos sauvegardes de données. Vous gardez le contrôle total de vos fichiers de sauvegarde.",
            },
          ],
        },
        thirdParty: {
          title: "Services tiers",
          intro: "Pexy n'utilise",
          introStrong: "aucun service tiers",
          items: [
            "Pas de tracking analytics (Google Analytics, Firebase, etc.)",
            "Pas de publicité",
            "Pas de crash reporting",
            "Pas de connexion internet requise",
          ],
        },
        security: {
          title: "Sécurité",
          content:
            "Pexy vous permet de protéger l'accès aux paramètres avec un code PIN à 4 chiffres. Ce code est stocké localement sur votre appareil de manière sécurisée. En cas de perte de votre code PIN, vous devrez réinitialiser l'application. Nous vous recommandons d'utiliser la fonctionnalité d'export de données pour créer des sauvegardes régulières.",
        },
        dataSharing: {
          title: "Partage de données",
          highlight: "✅ Pexy ne partage AUCUNE donnée avec qui que ce soit.",
        },
        children: {
          title: "Protection des enfants",
          content:
            "Pexy est conçue pour être utilisée par des enfants et des adultes avec TSA. Comme aucune donnée n'est collectée ou transmise, l'application est totalement sûre pour les enfants de tous âges.",
        },
        changes: {
          title: "Modifications de cette politique",
          content:
            "Cette politique de confidentialité peut être mise à jour occasionnellement. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.",
        },
        contact: {
          title: "Contact",
          content:
            "Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter à :",
        },
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      privacy: "Privacy",
      contact: "Contact",
      download: "Download",
      downloadSoon: "Coming soon",
    },
    beta: {
      title: "App in closed beta",
      content:
        "The app is currently in closed beta. If you'd like to be a tester, send your Gmail address (the one linked to your Play Store account) to:",
      note: "No spam, guaranteed.",
      close: "Close",
      copied: "Email copied to clipboard!",
    },
    footer: {
      about: {
        title: "About Pexy",
        description:
          "Free Augmentative and Alternative Communication (AAC) app to facilitate communication for people with speech disorders.",
      },
      links: {
        title: "Links",
        home: "Home",
        privacy: "Privacy Policy",
        googlePlay: "Google Play",
      },
      contact: {
        title: "Contact",
        email: "Email",
        support: "Support",
      },
      bottom: {
        madeWith: "Made with 💙 by",
        rights: "All rights reserved.",
      },
    },
    home: {
      meta: {
        title: "Pexy - Augmentative and Alternative Communication (AAC)",
        description:
          "Free Augmentative and Alternative Communication (AAC) app to facilitate communication for people with speech disorders or ASD. Made with love by a mom.",
      },
      hero: {
        h1: "Communicate easily",
        h1Span: "with Pexy",
        description:
          "Free Augmentative and Alternative Communication (AAC) app for people with speech disorders.",
        cta: "Coming soon on Google Play",
        privacyLink: "Privacy Policy",
      },
      features: {
        title: "Features",
        items: [
          {
            icon: "🎨",
            title: "Custom pictograms",
            description:
              "Create your own pictograms with photos to personalize the communication experience.",
          },
          {
            icon: "🔊",
            title: "Text-to-speech",
            description:
              "Each pictogram can be read aloud with different voices and reading speeds.",
          },
          {
            icon: "⭐",
            title: "Favorites",
            description:
              "Save your favorite pictograms for quick access and easier daily communication.",
          },
          {
            icon: "🌍",
            title: "Multilingual",
            description:
              "Available in French and English with support for multiple voices per language.",
          },
          {
            icon: "💾",
            title: "Data backup",
            description:
              "Easily export and import your data so you never lose anything when switching devices.",
          },
          {
            icon: "🔒",
            title: "100% Private",
            description:
              "All your data stays on your device. No collection, no tracking, no ads.",
          },
        ],
      },
      screenshots: {
        title: "Screenshots",
        alt: "Screenshot of the Pexy app",
      },
      about: {
        title: "Made with 🧡",
        p1: "Pexy was developed by the mom of a wonderful little boy with ASD.",
        p2: "This app is",
        p2Bold: "free and will always remain so",
        p3: "The goal is to make communication accessible to everyone, without financial barriers.",
        p4: "If you wish, you can support me with a donation on Ko-fi",
        kofiAlt: "Support me on Ko-fi",
      },
      cta: {
        title: "Ready to start?",
        description:
          "Download Pexy for free on Google Play and start communicating more easily today.",
        button: "Coming soon",
      },
    },
    privacy: {
      meta: {
        title: "Privacy Policy - Pexy",
        description: "Privacy policy for the Pexy (AAC) app",
      },
      backLink: "← Back to Pexy",
      backLinkBottom: "← Back to Pexy",
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: {
        intro: {
          title: "Introduction",
          content:
            "Pexy is an Augmentative and Alternative Communication (AAC) app designed to respect your privacy. This privacy policy explains how your data is handled (or rather, NOT handled) when you use Pexy.",
        },
        noData: {
          title: "Personal data collection",
          highlight: "✅ Pexy collects NO personal data.",
          content:
            "The app works entirely offline and all your data remains stored locally on your device.",
        },
        localStorage: {
          title: "Locally stored data",
          intro: "The following data is stored",
          introStrong: "only on your device",
          items: [
            "User profile name",
            "Chosen avatar",
            "Language preferences",
            "Text-to-speech settings (speed, voice)",
            "Settings protection PIN (if configured)",
            "Favorite pictograms",
            "Custom phrases",
            "Custom pictograms (photos taken or imported)",
          ],
          important:
            "Important: This data never leaves your device and is never transmitted to external servers.",
        },
        permissions: {
          title: "App permissions",
          intro: "Pexy requests the following permissions:",
          items: [
            {
              icon: "📷",
              title: "Camera access",
              description:
                "Used only to take photos for custom pictograms. Photos are stored locally on your device.",
            },
            {
              icon: "🖼️",
              title: "Gallery access",
              description:
                "Used only to select images from your gallery to create custom pictograms.",
            },
            {
              icon: "💾",
              title: "Storage access",
              description:
                "Used to export and import your data backups. You retain full control of your backup files.",
            },
          ],
        },
        thirdParty: {
          title: "Third-party services",
          intro: "Pexy uses",
          introStrong: "no third-party services",
          items: [
            "No analytics tracking (Google Analytics, Firebase, etc.)",
            "No advertising",
            "No crash reporting",
            "No internet connection required",
          ],
        },
        security: {
          title: "Security",
          content:
            "Pexy lets you protect access to settings with a 4-digit PIN. This PIN is stored securely and locally on your device. If you lose your PIN, you will need to reset the app. We recommend using the data export feature to create regular backups.",
        },
        dataSharing: {
          title: "Data sharing",
          highlight: "✅ Pexy shares NO data with anyone.",
        },
        children: {
          title: "Children's protection",
          content:
            "Pexy is designed for use by children and adults with ASD. Since no data is collected or transmitted, the app is completely safe for children of all ages.",
        },
        changes: {
          title: "Changes to this policy",
          content:
            "This privacy policy may be updated occasionally. Any changes will be published on this page with a new update date.",
        },
        contact: {
          title: "Contact",
          content:
            "For any questions about this privacy policy, you can contact me at:",
        },
      },
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
