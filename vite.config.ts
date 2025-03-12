import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: "window",
  },
  css: {
    postcss: "./postcss.config.js", // Wskazanie konfiguracji PostCSS
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // Adres backendu
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Opcjonalnie: usuń /api z żądania
      },
    },
  },
});
