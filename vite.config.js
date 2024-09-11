import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  build: {
    outDir: "dist", // Output directory for built files (optional)
    rollupOptions: {
      input: "./index.html", // Entry point for building
    },
    // Add the base URL if needed
    base: "/josh_deploy/", // Replace "sammy" with your actual repository name
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
});
