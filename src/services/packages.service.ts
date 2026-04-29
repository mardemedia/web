import services from "../data/packages.json";

//TODO: Make this dynamic
export const getAllPackages = async (lang = "en") => services[lang];
