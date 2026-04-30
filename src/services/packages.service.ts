import services from "../data/packages.json";
import type { lang } from "../i18n/utils";

export const getAllPackages = async (lang: lang) => services[lang];
