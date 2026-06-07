import {
  getBrandCopy,
  getComingSoonCopy,
  getHomePageCopy,
  getMenuCopy,
  getNavLinks,
  type LayoutCopy,
  type LanguageSwitcherCopy,
} from "./content";
import { getTranslation, type lang } from "./utils";

interface PageUrls {
  homeUrl: string;
  langSwitcher: LanguageSwitcherCopy;
}

export const getHomePageI18n = (
  locale: lang,
  urls: PageUrls,
): {
  copy: ReturnType<typeof getHomePageCopy>;
  layoutCopy: LayoutCopy;
} => {
  const t = getTranslation(locale);
  const brand = getBrandCopy(t, locale, urls.homeUrl);

  return {
    copy: getHomePageCopy(t),
    layoutCopy: {
      header: {
        brand,
        navLinks: getNavLinks(t, urls.homeUrl),
        langSwitcher: urls.langSwitcher,
        menu: getMenuCopy(t),
      },
      footerRights: t("footer.rights"),
    },
  };
};

export const getComingSoonPageI18n = (locale: lang) => {
  const t = getTranslation(locale);

  return {
    copy: getComingSoonCopy(t),
  };
};
