import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import progress from "vite-plugin-progress";

export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [
    react(),
    progress(),
    basicSsl(),
  ],
});
