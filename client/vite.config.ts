import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
      port: 3000,
      proxy: {
         '/api':
            'Enter your backend host with port',
      },
   },
   plugins: [
      react(),
      svgrPlugin({
         svgrOptions: {
            icon: true,
         },
      }),
      eslintPlugin(),
   ],
})
