import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/*.*': { // Match all URL's with period/dot
        target: 'http://localhost:8080/',  // send to webpack dev server
        rewrite: function (req) {
          req.url = 'index.html';  // Send to react app
        }
      }
    }
  }
})
