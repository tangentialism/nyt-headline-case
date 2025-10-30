import { defineConfig } from 'tsup';

export default defineConfig({
  // Entry point
  entry: ['src/index.ts'],
  
  // Output formats: ESM and CommonJS
  format: ['esm', 'cjs'],
  
  // Generate TypeScript declaration files
  dts: true,
  
  // Generate sourcemaps for debugging
  sourcemap: true,
  
  // Clean dist folder before build
  clean: true,
  
  // Split chunks for better tree-shaking
  splitting: false,
  
  // Minify output
  minify: false,
  
  // Tree-shake unused code
  treeshake: true,
  
  // Target environment
  target: 'es2022',
  
  // Output directory
  outDir: 'dist',
});

