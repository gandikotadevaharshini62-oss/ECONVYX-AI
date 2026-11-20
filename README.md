<<<<<<< HEAD
﻿# ECONVYX AI

> Turn financial complexity into clarity.

ECONVYX AI is a React/TypeScript frontend with an Express/TypeScript API for Indian MSME finance workflows. It includes demo records for Apex Components, deterministic financial services, authenticated API routes, and a PostgreSQL schema draft.

## Current implementation status

This repository is **not production-ready for real financial data yet**. The running API currently stores its records in a local JSON file. It does not connect to the PostgreSQL/Supabase schema in `supabase/migrations/001_initial_schema.sql`. The local file store is not a transactional database and is not appropriate for multi-process or high-concurrency financial writes. Team-role enforcement, server-side rate limiting, private object storage, and a comprehensive API/security test suite still need work.

A seeded demo workspace is created on an empty data directory, but it has no pre-created login account. Create an account and workspace through sign-up/onboarding. Do not use real customer or bank records in a preview deployment.

## Stack

- React 18, TypeScript, Vite, Tailwind CSS, React Router, Recharts
- Node.js 20+, Express, JWT, bcryptjs
- Unit tests with Vitest
- PostgreSQL/Supabase migration draft (not yet connected to the API)
- Gemini extraction service with a deterministic fallback parser

## Local development

Requirements: Node.js 20+ and npm 10+.

```sh
npm ci
cp .env.example .env
npm run dev
```

The Vite client listens on port 5173 and proxies `/api` to the Express API on port 5000. Set a unique `JWT_SECRET` with at least 32 characters. Never commit `.env` or real credentials. Optional Gemini API calls run on the server only.

## Checks

```sh
npm test
npm run lint
npm run build
```

`npm test` currently covers financial calculations, verification, reconciliation, and cash flow. These tests do not cover every user journey, browser behavior, tenant boundary, file access, or deployment environment.

## Vercel frontend + Render API preview

`vercel.json` builds only the Vite client. `render.yaml` describes the Express API and a persistent disk for the current JSON store and uploaded files. Render persistent disks require a paid web-service plan and are attached to a single service instance. This is suitable for a limited preview, not a substitute for the intended managed relational database.

1. Push this repository to a **private GitHub repository**. Check that `.env`, `uploads/`, `server/data/*.json`, `node_modules/`, and `dist/` are ignored.
2. In Render, create a Blueprint from the repository and apply `render.yaml`. Set `CLIENT_URL` to the eventual Vercel production origin (for example, `https://your-project.vercel.app`). Render generates `JWT_SECRET`; set `GEMINI_API_KEY` only if you want server-side extraction enabled.
3. In Vercel, import the same repository. Set `VITE_API_URL` to `https://<your-render-service>.onrender.com/api` for Production and Preview as appropriate, then deploy. The browser bundle contains this API origin, but no secret.
4. Add the final Vercel production URL to Render's `CLIENT_URL`, then redeploy the API. Test sign-up, onboarding, login, workspace isolation, document download permissions, health, and a persistent-data restart.
5. Rotate any credential that was previously placed in a document or shared. Use new credentials in provider dashboards; do not reuse values from the local `.env`.

The current JSON store and filesystem uploads must migrate to PostgreSQL/Supabase and private object storage before using production business data. Configure backups and recovery before launch.

## Environment variables

See `.env.example` for names and placeholders. Required server configuration includes `JWT_SECRET`; deployment providers should supply secrets through their environment-variable controls. `CLIENT_URL` is a comma-separated allowlist of browser origins. `DATA_DIR` and `STORAGE_DIR` must be located on persistent storage for the current API implementation. `VITE_API_URL` is a public build-time API URL and must never contain credentials.

## Known limitations

- The SQL migration is a draft and is not wired into the active JSON database service.
- Existing records are stored in a single JSON file; writes are not transactionally safe across concurrent requests/processes.
- Team permissions are incomplete; current middleware must not be treated as production-grade RBAC.
- Gemini model availability and account configuration must be verified with a newly issued key before enabling extraction.
- File upload type checks rely primarily on filename extensions and need content inspection and virus scanning for production.
- The automated suite currently contains 15 unit tests; API integration, UI, security, and deployment tests are still required.
- No regulatory certification or compliance is claimed.
=======
# ECONVYX-AI
Ai-Powered Financial Managment Application
>>>>>>> 789a860ce3923ff5d2e0884b664a86b3cf210566
