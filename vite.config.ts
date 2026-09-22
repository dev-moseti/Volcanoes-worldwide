import { defineConfig } from "vite";

export default defineConfig({
    base: '/',

    build: {
        outDir:      "dist",
        emptyOutDir: true,
    },
    optimizeDeps: {
        // maplibre-gl spawns its own worker via a dynamically-constructed
        // URL; Vite's dep optimizer doesn't track that correctly, so a
        // stale/rebuilt pre-bundle can point at a worker chunk that no
        // longer exists (surfaces as "file does not exist ...
        // maplibre-gl-worker.mjs ... optimize deps directory"). Excluding
        // it from pre-bundling avoids the mismatch entirely.
        exclude: ["maplibre-gl"],
    },

});
