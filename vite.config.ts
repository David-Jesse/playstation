import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'named',
        namedExport: 'ReactComponent',
        ref: true
      }
    }),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-worker.ts",
      injectManifest: {
        injectionPoint: "self.__WB_MANIFEST",
        rollupFormat: "es",
      },
      // Make sure SW is being generated correctly for dev mode
      devOptions: {
        enabled: true,
        type: 'module',
      },
      // Ensure the manifest is correctly registered
      manifest: {
        name: "Playstation",
        short_name: "PS",
        start_url: "/",
        display: "standalone",
      }
    })
  ],
})