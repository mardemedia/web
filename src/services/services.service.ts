import services from "../data/services.json";
import type { lang } from "../i18n/utils";

export const getAllServices = async (lang: lang) => services[lang];
