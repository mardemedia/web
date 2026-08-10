import type { Route } from "../utils/routes";
import type { lang, translate } from "./utils";

export interface LanguageSwitcherCopy {
  href: string;
  label: string;
}

export interface BrandCopy {
  homeUrl: string;
  logoAlt: string;
  tagline: string;
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
    titleHighlight: string;
    description: string;
  };
  services: {
    title: string;
    titleHighlight: string;
    cta: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
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
  brands: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    items: {
      name: string;
      image: string;
      imageAlt: string;
      services: string[];
    }[];
  };
  packages: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
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
    label: t("nav.services.label"),
    description: t("nav.services.description"),
    url: "#services-section",
  },
  {
    label: t("nav.brands.label"),
    description: t("nav.brands.description"),
    url: "#brands-section",
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
];

export const getBrandCopy = (t: translate, locale: lang, homeUrl: string): BrandCopy => ({
  homeUrl,
  logoAlt: t("logo.alt"),
  tagline: t("logo.tagline"),
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
    titleHighlight: t("intro.title.highlight"),
    description: t("intro.description"),
  },
  services: {
    title: t("services.title"),
    titleHighlight: t("services.title.highlight"),
    cta: t("services.cta"),
  },
  projects: {
    eyebrow: t("projects.eyebrow"),
    title: t("projects.title"),
    titleHighlight: t("projects.title.highlight"),
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
  brands: {
    eyebrow: t("brands.eyebrow"),
    title: t("brands.title"),
    titleHighlight: t("brands.title.highlight"),
    description: t("brands.description"),
    cta: t("brands.cta"),
    items: [
      {
        name: "Velvet Giardino",
        image: "/brands/velvet-giardino.png",
        imageAlt: t("brands.velvet.imageAlt"),
        services: [t("brands.service")],
      },
      {
        name: "Cooltura PV",
        image: "/brands/cooltura-pv.png",
        imageAlt: t("brands.cooltura.imageAlt"),
        services: [t("brands.service")],
      },
    ],
  },
  packages: {
    eyebrow: t("packages.eyebrow"),
    title: t("packages.title"),
    titleHighlight: t("packages.title.highlight"),
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
