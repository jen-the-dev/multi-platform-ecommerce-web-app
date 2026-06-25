# Multi-Platform E-Commerce Web Application
Full-stack portfolio sample for ANZSCO 261312 (Developer Programmer).

## Why this project helps your visa/job-hunt profile
- Demonstrates complete feature delivery from UI to backend services.
- Shows secure payments integration with Stripe.
- Highlights deployment readiness and environment-based configuration.

## Tech stack
- Frontend: Next.js + React
- Backend: Node.js + Express
- Payments: Stripe API
- Data services: PostgreSQL + Redis (wired through Docker Compose)
- Hosting target: Vercel (frontend) and API service platform of choice

## MVP scope
- Product catalog endpoint and storefront homepage.
- Cart API and create-payment-intent endpoint.
- Admin-ready API structure for future inventory/order management.

## Repository structure
- `apps/web/` - Next.js storefront shell.
- `apps/api/` - Express API for catalog, cart, and payment intent.
- `docker-compose.yml` - Local API dependencies.
- `.github/workflows/ci.yml` - Starter CI checks.

## Quick start
1. `cd apps/api && npm install`
2. `cd ../web && npm install`
3. `cd ../.. && docker compose up --build`
4. Start web locally: `cd apps/web && npm run dev`

## Next upgrades (recommended before interviews)
- Implement user auth, order lifecycle, and admin dashboard routes.
- Add persistent cart and product tables in PostgreSQL.
- Add end-to-end tests for checkout flow.
