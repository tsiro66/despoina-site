// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    integrations: [react(), keystatic()],
    vite: {
        plugins: [ tailwindcss()],
        optimizeDeps: {
            exclude: ['@keystatic/astro'],
        },
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
