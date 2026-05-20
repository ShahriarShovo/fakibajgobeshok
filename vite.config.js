import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-plugin',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              try {
                // Inject environment variables
                process.env = { ...process.env, ...env }
                
                const handlerModule = await import('./api/contact.js')
                const handler = handlerModule.default

                // Mock Vercel specific res.status and res.json
                res.status = (statusCode) => {
                  res.statusCode = statusCode
                  return res
                }
                res.json = (data) => {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                }

                await handler(req, res)
              } catch (err) {
                console.error(err)
                res.statusCode = 500
                res.end(JSON.stringify({ message: 'Internal server error' }))
              }
            } else {
              next()
            }
          })
        }
      }
    ],
  }
})
