import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: '.',               // default
  base: './',              // relative paths for Shopify/anywhere
  publicDir: false,        // (optional) nothing in /public
  build: {
    outDir: 'dist',        // final output folder
    emptyOutDir: true,

    // Library mode lets us emit an IIFE bundle
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'ScaleApp',             // global var name on window
      formats: ['iife'],
      fileName: () => 'app.iife.js' // final filename
    },

    // Make sure everything ends up in ONE file
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // force a single chunk
      }
    },

    // Optional: nice-to-haves
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
  },

  server: {
    port: 5173,
    open: true
  }
});
