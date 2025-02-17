import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_", // Chỉ load các biến bắt đầu với VITE_
});
