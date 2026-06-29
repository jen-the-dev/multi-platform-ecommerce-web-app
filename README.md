# Multi-Platform E-Commerce Web Application
Full-stack e-commerce application connecting storefront UX, backend APIs, and payment integration.

## Related
- Shipped work index: [projects-workspaces](https://github.com/jen-the-dev/projects-workspaces)
- Resume and cover letter: [nz-immigration-application-tracker](https://github.com/jen-the-dev/nz-immigration-application-tracker)

## Problem
Retail platforms need a coherent architecture that connects frontend UX, backend business logic, and secure payment integration without sacrificing maintainability.

## Solution
This repository implements a two-tier full-stack structure:
- Next.js storefront UI for catalog browsing,
- Express API for product, cart, and payment-intent workflows,
- Stripe-compatible payment flow with safe mock fallback,
- CI checks and automated tests for backend behavior.

## Architecture Diagram
```mermaid
flowchart LR
  Browser["Browser / Shopper"] --> Web["Next.js Frontend (apps/web)"]
  Web --> API["Express API (apps/api)"]
  API --> Stripe["Stripe Payment Intents"]
  API -.infrastructure ready.-> Data["PostgreSQL + Redis (planned persistence/cache)"]
  CI["GitHub Actions CI"] --> API
  CI --> Web
```

## Tech Stack
- Frontend: Next.js + React
- Backend: Node.js + Express
- Payments: Stripe API
- Infrastructure wiring: PostgreSQL + Redis via Docker Compose
- CI: GitHub Actions

## Setup Instructions
1. `cd apps/api && npm install`
2. `cd ../web && npm install`
3. `cd ../.. && docker compose up --build`
4. Start frontend: `cd apps/web && npm run dev`

## Testing
- Backend unit/integration tests:
  - `cd apps/api && npm test`
- Backend syntax checks:
  - `cd apps/api && npm run check`
- Frontend static check:
  - `cd apps/web && npm run check`

## Commit Convention
Use Conventional Commits for clear change history:
- `feat(cart): support quantity updates for existing cart items`
- `fix(payment): handle invalid amount in payment intent route`
- `test(api): add integration test for mock payment mode`
- `docs(readme): add architecture and competency mapping`

## Evidence Map
- Frontend storefront: `apps/web/pages/index.tsx`
- API composition: `apps/api/src/app.js`
- Product/catalog utilities: `apps/api/src/catalog.js`
- Tests: `apps/api/test/`
- CI pipeline: `.github/workflows/ci.yml`
