import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
    preTransformRequests: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-intl',
      'zustand',
      'lodash/isEqual',
      'axios',
      'classnames',
    ],
    exclude: [],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true,
      },
    },
    holdUntilCrawlEnd: false,
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'intl-vendor': ['react-intl'],
          'utils-vendor': ['lodash', 'axios', 'zustand'],
        },
      },
    },
  },
  esbuild: {
    target: 'es2020',
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})

