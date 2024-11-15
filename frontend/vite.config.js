/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/getCourses': {
        target: 'http://localhost:5000', // URL of your Flask backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
