import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
            name: 'layout-app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Header': './src/components/Header/index.tsx',
                "./Footer": './src/components/Footer/index.tsx'
            },
            shared: ['react', 'react-dom']
        })],
     build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 4002
  }
})
