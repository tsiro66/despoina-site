// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [ tailwindcss()]
    },
    fonts: [
        {
            name: "Syne",
            cssVariable: "--font-syne",
            provider: fontProviders.google(),
        },
        {
            name: "Geom",
            cssVariable: "--font-geom",
            provider: fontProviders.google(),
            subsets: ["greek", "latin"]
        },
        {
            name: "Google Sans",
            cssVariable: "--font-google-sans",
            provider: fontProviders.google(),
        },
        {
            name: "Sansation",
            cssVariable: "--font-sansation",
            provider: fontProviders.google(),
        },
        {
            name: "Inter",
            cssVariable: "--font-inter",
            provider: fontProviders.google(),
            subsets: ["greek", "latin"],
        },
    ],
});
