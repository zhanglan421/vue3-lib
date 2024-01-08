import { defineConfig } from "vite";
import dts from "vite-plugin-dts"; // 生成ts的解释文件
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from 'vite-tsconfig-paths'; // ts 文件源地址重写插件

import { resolve } from "path"; // 路径处理

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ insertTypesEntry: true }), tsconfigPaths()],
    build: {
        lib: {
            entry: resolve(__dirname, "./packages/index.ts"), // 打包的入口文件
            name: "MyLib", // 输出的库的名称
            fileName: "my-lib", // 输出的文件名
        },
        rollupOptions: {
            external: ["vue"], // 告诉vite哪些库不需要打包
            output: {
                globals: {
                    vue: "Vue", // 重命名vue为Vue
                },
            },
        },
    },
});
