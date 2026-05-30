// Thin client for the backend-coolify Spring Boot API.
// Requests are relative so the Vite dev proxy (see vite.config.ts) forwards
// them to the backend without running into CORS.

export async function fetchHello(): Promise<string> {
  const res = await fetch('/hello')
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }
  return res.text()
}
