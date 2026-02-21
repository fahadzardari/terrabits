// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        build: {
            minify: "terser",
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ["gsap"],
                    },
                },
            },
        },
        preview: {
            allowedHosts: true,
        },
    },
    site: "https://terrabits.com",
    output: "static",
    integrations: [
        sitemap(),
        compress({
            Path: ["./dist"],
            brotli: false,
            gzip: true,
            exclude: ["png", "jpg", "jpeg"],
        }),
    ],
    devToolbar: {
        enabled: false,
    },
    build: {
        assets: "_assets",
    },
});
