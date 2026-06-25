# Multi-Platform E-Commerce Web Application
Full-stack portfolio project aligned to ANZSCO 261312 (Developer Programmer).

## Recruiter quick view
- Focus: end-to-end product delivery from storefront UI to backend and payments.
- Business scenario: online catalog + cart + payment intent creation workflow.
- Stack signal: Next.js/React frontend, Express backend, Stripe integration, Dockerized dependencies, CI.
- Current maturity: interview-ready scaffold demonstrating architecture and integration strategy.

## ANZSCO 261312 competency mapping
- **Designing software components across tiers**
  - Split architecture into frontend (`apps/web`) and API (`apps/api`) services.
  - Defined API boundaries for catalog retrieval, cart mutations, and payment intent creation.
- **Developing and integrating application code**
  - Implemented storefront UI shell and product rendering logic.
  - Built backend routes for products, cart session updates, and Stripe-compatible payment intent flow.
- **Security and external service integration**
  - Added Stripe key-based configuration and mock fallback mode for safe local development.
  - Structured environment-driven configuration in container runtime.
- **Quality and maintainability practices**
  - Added CI checks for both API and web workspaces.
  - Maintained clear folder boundaries to support team collaboration and scaling.

## Evidence map (where reviewers should look)
- Frontend storefront: `apps/web/pages/index.tsx`
- Backend API and payment flow: `apps/api/src/index.js`
- Local service orchestration: `docker-compose.yml`
- CI checks: `.github/workflows/ci.yml`

## Tech stack
- Frontend: Next.js + React
- Backend: Node.js + Express
- Payments: Stripe API
- Data services: PostgreSQL + Redis (infrastructure wired)
- Deployment targets: Vercel (frontend) + API host of choice

## Implemented scope (current)
- Product catalog endpoint and storefront page.
- Cart item add endpoint by session.
- Payment intent endpoint with Stripe/live mode and mock fallback.
- Dockerized local stack for API dependencies.

## Quick start
1. `cd apps/api && npm install`
2. `cd ../web && npm install`
3. `cd ../.. && docker compose up --build`
4. Start web locally: `cd apps/web && npm run dev`

## 5-minute demo flow for interviews
1. Show web catalog rendering.
2. Demonstrate cart API request/response flow.
3. Trigger payment intent endpoint in mock mode.
4. Explain how to switch to real Stripe credentials.
5. Walk through planned progression to full checkout and order management.

## Next milestones to strengthen application evidence
- Add user authentication, order lifecycle, and admin dashboard routes.
- Persist products/cart/orders in PostgreSQL.
- Add end-to-end checkout tests and production deployment pipeline.
