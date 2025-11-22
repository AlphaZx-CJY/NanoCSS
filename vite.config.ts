import { defineConfig } from 'vite';
import nanoCSSPlugin from './plugins/nano-css';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.css',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        assetFileNames: 'nano.css',
        plugins: [nanoCSSPlugin()],
      },
    },
    minify: false,
    cssCodeSplit: true,
    emptyOutDir: true,
  },
  base: '/NanoCSS/',
});
