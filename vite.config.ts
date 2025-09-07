// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 important for GitHub Pages project sites
  base: "/",
  
  server: { host: "::", port: 8080 },
  
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  resolve: { 
    alias: { 
      "@": path.resolve(__dirname, "./src") 
    } 
  },
  
  // 👇 Add this to handle .MP4 files as assets
  assetsInclude: ["**/*.MP4", "**/*.mp4"]
}));