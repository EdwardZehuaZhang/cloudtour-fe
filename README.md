# cloudtour-fe

Next.js frontend for CloudTour.

## Setup

```bash
pnpm install
cp .env.example .env.local
# fill in .env.local values
pnpm dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `NEXT_PUBLIC_APP_URL` | App URL (for redirects, emails) |
| `NEXT_PUBLIC_API_URL` | Backend API URL (cloudtour-be, e.g. http://localhost:3001) |

## Local Packages

- `packages/db` - Supabase client (auth, SSR cookies)
- `packages/types` - Shared TypeScript types
- `packages/ui` - UI component library (Radix + Tailwind)

## API Calls

All API calls go through `NEXT_PUBLIC_API_URL` (cloudtour-be).
In development: `http://localhost:3001`.
In production: your deployed cloudtour-be URL.
