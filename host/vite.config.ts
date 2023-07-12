import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    port: 4000
  },
  plugins: [
      react(),
        federation({
            name: 'host',
            remotes: {
                booksApp: 'http://localhost:4173/assets/remoteEntry.js',
                layoutApp: 'http://localhost:4175/assets/remoteEntry.js'
            },
            shared: ['react','react-dom']
        })
    ],
 build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
