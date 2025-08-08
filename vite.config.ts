import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

const isLocal = !process.env.VERCEL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    ...(isLocal && {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, "localhost+2-key.pem")),
        cert: fs.readFileSync(path.resolve(__dirname, "localhost+2.pem"))
      }
    }),
    host: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
