# frontend-coolify

Vite + React + TypeScript frontend for the [`backend-coolify`](../backend-coolify) Spring Boot service.

## Prerequisites

- Node.js 20+ (developed with Node 24)
- The backend running on `http://localhost:8080` (or `8081` via `compose.yml`)

## Getting started

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

During development, Vite proxies `/hello` and `/actuator` to the backend (see
`vite.config.ts`), so there are no CORS issues. Point the proxy at a different
backend with:

```bash
VITE_BACKEND_URL=http://localhost:8081 npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production into `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — type-check only
