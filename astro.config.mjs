// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [ tailwindcss()],
    },
    fonts: [
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
            name: "Fraunces",
            cssVariable: "--font-fraunces",
            provider: fontProviders.google(),
            subsets: ["latin"],
        },
    ],
});
