import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env / .env.local files so VITE_BACKEND_URL can be configured there.
  const env = loadEnv(mode, process.cwd(), '')

  // compose.yml. Configure it in .env (VITE_BACKEND_URL).
  const backendUrl = env.VITE_BACKEND_URL ?? 'http://localhost:8081'

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        // Proxy API calls to the backend to avoid CORS during development.
        '/hello': backendUrl,
        '/actuator': backendUrl,
      },
    },
  }
})
