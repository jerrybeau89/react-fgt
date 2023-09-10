import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/react-fgt",
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  esbuild: {
    loader: "jsx",
    include: [
      // Add this for business-as-usual behaviour for .jsx and .tsx files
      "src/**/*.jsx",
      "node_modules/**/*.jsx",

      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",
    ],
  },
  
});
