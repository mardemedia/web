import type { lang } from "./utils";

const LABELS: Record<lang, Record<string, string>> = {
  en: {
    "meta.title": "Mar de Media | Digital Marketing Services",
    "meta.description":
      "Web development, custom software and multimedia services in Puerto Vallarta, Jalisco. Complete digital solutions for businesses.",

    "hero.title.start": "Where your ideas ",
    "hero.title.highlight": "come to life",
    "hero.cta": "Dive in →",

    "intro.title": "We make your brand\nemerge",
    "intro.title.highlight": "brand\nemerge",
    "intro.description":
      "Digital presence from the depths to the surface of Puerto Vallarta and Bahía de Banderas.",

    "services.title": "We drive your\nbrand from the\ndepths",
    "services.title.highlight": "from the\ndepths",
    "services.cta": "Let's talk about your brand",

    "projects.eyebrow": "Selected work",
    "projects.title": "Ideas with direction",
    "projects.title.highlight": "direction",
    "projects.description":
      "A glimpse into the digital experiences, identities and stories we can shape together.",
    "brands.eyebrow": "Brands",
    "brands.title": "Brands that rise to the surface",
    "brands.title.highlight": "to the surface",
    "brands.description":
      "Meet some of the brands we have helped emerge through strategy, identity and design.",
    "brands.cta": "See our work",
    "brands.velvet.imageAlt": "Velvet Giardino brand identity",
    "brands.cooltura.imageAlt": "Cooltura PV brand identity",
    "brands.service": "Branding & naming",
    "projects.restaurancito.category": "Digital product",
    "projects.restaurancito.title": "Restaurancito",
    "projects.restaurancito.description":
      "Your restaurant in sync, from table to kitchen. A platform for managing tables, digital orders, kitchen workflows and staff in real time.",
    "projects.restaurancito.imageAlt": "Restaurancito digital product graphic",
    "projects.restaurancito.feature.tables": "Visual table map",
    "projects.restaurancito.feature.orders": "Digital orders",
    "projects.restaurancito.feature.kitchen": "Real-time kitchen",
    "projects.restaurancito.status": "Coming soon",
    "projects.restaurancito.visitLabel": "Visit restaurancito.com",
    "packages.eyebrow": "Services",
    "packages.title": "A kit made for you",
    "packages.title.highlight": "made for you",
    "packages.includes": "Includes",
    "packages.viewLabel": "View package",

    "contact.title": "Your journey toward a solid digital presence starts here.",
    "contact.title.start": "Your journey toward a ",
    "contact.title.end": " starts here.",
    "contact.highlight": "solid digital presence",
    "contact.cta": "Let's talk about your brand",

    "nav.home.label": "Home",
    "nav.home.description": "Get back to home page",
    "nav.services.label": "Services",
    "nav.services.description": "Take a dive into our services",
    "nav.projects.label": "Projects",
    "nav.projects.description": "Explore our creative work",
    "nav.packages.label": "Kits",
    "nav.packages.description": "A solution tailored to your brand's stage",
    "nav.brands.label": "Brands",
    "nav.brands.description": "Discover the brands we have helped emerge",
    "nav.contact.label": "Contact",
    "nav.contact.description": "Let's talk about your brand",

    "menu.contact.title": "Let's talk about your brand",
    "menu.location": "Puerto Vallarta, Jalisco, Mexico.",
    "menu.socialLabel": "Follow Us",
    "menu.socialAriaLabel": "Social media",

    "footer.rights": "All Rights Reserved",
    "logo.alt": "Mar de Media",

    "comingSoon.meta.title": "Coming Soon | Mar de Media",
    "comingSoon.meta.description":
      "We are preparing something incredible for you.",
    "comingSoon.title.start": "Coming",
    "comingSoon.title.highlight": "Soon",
    "comingSoon.description":
      "We're crafting something amazing at Mar de Media. Stay tuned, your next digital experience is on the way.",
  },

  es: {
    "meta.title": "Mar de Media | Servicios de Marketing digital",
    "meta.description":
      "Servicios de desarrollo web, software a medida y multimedia, en Puerto Vallarta, Jalisco. Soluciones digitales completas para empresas.",

    "hero.title.start": "Donde tus ideas ",
    "hero.title.highlight": "cobran vida",
    "hero.cta": "Sumérgete →",

    "intro.title": "Hacemos que tu marca\nemerja",
    "intro.title.highlight": "marca\nemerja",
    "intro.description":
      "Presencia digital de las profundidades a la superficie de Puerto Vallarta y Bahía de Banderas.",

    "services.title": "Impulsamos tu\nmarca desde lo\nprofundo",
    "services.title.highlight": "desde lo\nprofundo",
    "services.cta": "Hablemos de tu marca",

    "projects.eyebrow": "Trabajo seleccionado",
    "projects.title": "Ideas con dirección",
    "projects.title.highlight": "dirección",
    "projects.description":
      "Un vistazo a las experiencias digitales, identidades e historias que podemos crear juntos.",
    "brands.eyebrow": "Marcas",
    "brands.title": "Marcas que emergen hacia la superficie",
    "brands.title.highlight": "hacia la superficie",
    "brands.description":
      "Conoce algunas de las marcas a las que hemos ayudado a emerger con estrategia, identidad y diseño.",
    "brands.cta": "Ver nuestro trabajo",
    "brands.velvet.imageAlt": "Identidad de marca de Velvet Giardino",
    "brands.cooltura.imageAlt": "Identidad de marca de Cooltura PV",
    "brands.service": "Branding & naming",
    "projects.restaurancito.category": "Producto digital",
    "projects.restaurancito.title": "Restaurancito",
    "projects.restaurancito.description":
      "Tu restaurante en sincronía, de la mesa a la cocina. Una plataforma para gestionar mesas, comandas digitales, cocina y personal en tiempo real.",
    "projects.restaurancito.imageAlt": "Gráfico del producto digital Restaurancito",
    "projects.restaurancito.feature.tables": "Mapa visual de mesas",
    "projects.restaurancito.feature.orders": "Comandas digitales",
    "projects.restaurancito.feature.kitchen": "Cocina en tiempo real",
    "projects.restaurancito.status": "Próximamente",
    "projects.restaurancito.visitLabel": "Visitar restaurancito.com",
    "packages.eyebrow": "Servicios",
    "packages.title": "El KIT a tu medida",
    "packages.title.highlight": "a tu medida",
    "packages.includes": "Incluye",
    "packages.viewLabel": "Ver paquete",

    "contact.title": "Tu viaje hacia una presencia digital sólida comienza aquí.",
    "contact.title.start": "Tu viaje hacia una ",
    "contact.title.end": " comienza aquí.",
    "contact.highlight": "presencia digital sólida",
    "contact.cta": "Hablemos de tu marca",

    "nav.home.label": "Inicio",
    "nav.home.description": "Vuelve al inicio y sigue explorando",
    "nav.services.label": "Servicios",
    "nav.services.description": "Descubre todo lo que podemos hacer por ti",
    "nav.projects.label": "Proyectos",
    "nav.projects.description": "Explora nuestro trabajo creativo",
    "nav.packages.label": "Kits",
    "nav.packages.description": "Una solución a la medida de la etapa de tu marca",
    "nav.brands.label": "Marcas",
    "nav.brands.description": "Conoce las marcas que hemos ayudado a emerger",
    "nav.contact.label": "Contacto",
    "nav.contact.description": "Hablemos de tu marca",

    "menu.contact.title": "Hablemos de tu marca",
    "menu.location": "Puerto Vallarta, Jalisco, México.",
    "menu.socialLabel": "Síguenos",
    "menu.socialAriaLabel": "Redes sociales",

    "footer.rights": "Todos los derechos reservados",
    "logo.alt": "Mar de Media",

    "comingSoon.meta.title": "Próximamente | Mar de Media",
    "comingSoon.meta.description":
      "Estamos preparando algo increíble para ti.",
    "comingSoon.title.start": "Muy",
    "comingSoon.title.highlight": "Pronto",
    "comingSoon.description":
      "Estamos creando algo increíble en Mar de Media. Mantente atento, tu próxima experiencia digital está en camino.",
  },
};

export default LABELS;
