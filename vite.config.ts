/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-19 23:09:35
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 11:15:56
 * @FilePath: \vue3-trip\vite.config.ts
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8888,
    open: true,
    strictPort: true,
    host: "0.0.0.0",
    cors: true,
  },
});
