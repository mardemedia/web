import type { lang } from "../i18n/utils";

export interface Route {
  label: Record<lang, string>;
  description: Record<lang, string>;
  url: string;
}

export const routes: Route[] = [
  {
    label: {
      en: "Home",
      es: "Inicio",
    },
    description: {
      en: "Get back to home page",
      es: "Vuelve al inicio y sigue explorando",
    },
    url: "/",
  },
  {
    label: {
      en: "Services",
      es: "Servicios",
    },
    description: {
      en: "Take a dive into our services",
      es: "Descubre todo lo que podemos hacer por ti",
    },
    url: "#services-section",
  },
  {
    label: {
      en: "Packages",
      es: "Paquetes",
    },
    description: {
      en: "Personalized packages for you",
      es: "Paquetes diseñados a la medida de tu marca",
    },
    url: "#packages-section",
  },
  {
    label: {
      en: "Contact us",
      es: "Contáctanos",
    },
    description: {
      en: "Connect with us",
      es: "Conecta con nosotros y lleva tu idea al siguiente nivel",
    },
    url: "#contact-section",
  },
] as const;
