import services from "../data/services.json";

//TODO: Make this dynamic
export const getAllServices = async (lang = "en") => services[lang];
