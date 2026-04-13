// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { DEFAULT_LANGUAGE, LANGUAGES } from "./src/i18n/utils";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: DEFAULT_LANGUAGE,
        locales: Object.keys(LANGUAGES),
        routing: {
            prefixDefaultLocale: true,
        },
    }
});