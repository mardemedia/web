import type { Route } from "../utils/routes";
import type { lang, translate } from "./utils";

export interface LanguageSwitcherCopy {
  href: string;
  label: string;
}

export interface BrandCopy {
  homeUrl: string;
  logoAlt: string;
  desktopLogoSrc: string;
  mobileLogoSrc: string;
}

export interface MenuCopy {
  contactTitle: string;
  emailLabel: string;
  email: string;
  location: string;
  socialLabel: string;
  socialAriaLabel: string;
}

export interface HeaderCopy {
  brand: BrandCopy;
  navLinks: Route[];
  langSwitcher: LanguageSwitcherCopy;
  menu: MenuCopy;
}

export interface LayoutCopy {
  header: HeaderCopy;
  footerRights: string;
}

export interface HomePageCopy {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleStart: string;
    titleHighlight: string;
    cta: string;
  };
  intro: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    cta: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      category: string;
      title: string;
      description: string;
      imageAlt: string;
      image: {
        mobile: string;
        desktop: string;
      };
      features?: string[];
      status?: string;
      url?: string;
      visitLabel?: string;
    }[];
  };
  packages: {
    eyebrow: string;
    title: string;
    includes: string;
    viewLabel: string;
  };
  contact: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    cta: string;
  };
}

export interface ComingSoonCopy {
  meta: {
    title: string;
    description: string;
  };
  titleStart: string;
  titleHighlight: string;
  description: string;
  footerRights: string;
}

export const getNavLinks = (t: translate, homeUrl: string): Route[] => [
  {
    label: t("nav.home.label"),
    description: t("nav.home.description"),
    url: homeUrl,
  },
  {
    label: t("nav.services.label"),
    description: t("nav.services.description"),
    url: "#services-section",
  },
  {
    label: t("nav.projects.label"),
    description: t("nav.projects.description"),
    url: "#projects-section",
  },
  {
    label: t("nav.packages.label"),
    description: t("nav.packages.description"),
    url: "#packages-section",
  },
  {
    label: t("nav.contact.label"),
    description: t("nav.contact.description"),
    url: "#contact-section",
  },
];

export const getBrandCopy = (t: translate, locale: lang, homeUrl: string): BrandCopy => ({
  homeUrl,
  logoAlt: t("logo.alt"),
  desktopLogoSrc: `/imagotipo-mar-de-media-${locale}.svg`,
  mobileLogoSrc: "/isotype.svg",
});

export const getMenuCopy = (t: translate): MenuCopy => ({
  contactTitle: t("menu.contact.title"),
  emailLabel: "Email:",
  email: "mardemedia@gmail.com",
  location: t("menu.location"),
  socialLabel: t("menu.socialLabel"),
  socialAriaLabel: t("menu.socialAriaLabel"),
});

export const getHomePageCopy = (t: translate): HomePageCopy => ({
  meta: {
    title: t("meta.title"),
    description: t("meta.description"),
  },
  hero: {
    titleStart: t("hero.title.start"),
    titleHighlight: t("hero.title.highlight"),
    cta: t("hero.cta"),
  },
  intro: {
    title: t("intro.title"),
    description: t("intro.description"),
  },
  services: {
    title: t("services.title"),
    cta: t("services.cta"),
  },
  projects: {
    eyebrow: t("projects.eyebrow"),
    title: t("projects.title"),
    description: t("projects.description"),
    items: [
      {
        category: t("projects.restaurancito.category"),
        title: t("projects.restaurancito.title"),
        description: t("projects.restaurancito.description"),
        imageAlt: t("projects.restaurancito.imageAlt"),
        image: {
          mobile: "/restaurancito-hero.png",
          desktop: "/restaurancito-hero.png",
        },
        features: [
          t("projects.restaurancito.feature.tables"),
          t("projects.restaurancito.feature.orders"),
          t("projects.restaurancito.feature.kitchen"),
        ],
        status: t("projects.restaurancito.status"),
        url: "https://restaurancito.com",
        visitLabel: t("projects.restaurancito.visitLabel"),
      },
    ],
  },
  packages: {
    eyebrow: t("packages.eyebrow"),
    title: t("packages.title"),
    includes: t("packages.includes"),
    viewLabel: t("packages.viewLabel"),
  },
  contact: {
    titleStart: t("contact.title.start"),
    titleHighlight: t("contact.highlight"),
    titleEnd: t("contact.title.end"),
    cta: t("contact.cta"),
  },
});

export const getComingSoonCopy = (t: translate): ComingSoonCopy => ({
  meta: {
    title: t("comingSoon.meta.title"),
    description: t("comingSoon.meta.description"),
  },
  titleStart: t("comingSoon.title.start"),
  titleHighlight: t("comingSoon.title.highlight"),
  description: t("comingSoon.description"),
  footerRights: t("footer.rights"),
});
