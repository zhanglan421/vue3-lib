import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from 'vite-tsconfig-paths';

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ insertTypesEntry: true }), tsconfigPaths()],
    build: {
        lib: {
            entry: resolve(__dirname, "./packages/index.ts"),
            name: "MyLib",
            fileName: "my-lib",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
