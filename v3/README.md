# Tripple 7 V3

## Subscription plans
- Day: UGX 1,000
- Week: UGX 5,000
- Month: UGX 20,000
- Free trial: 5 days

## Passcode login
Users register with a name and phone number. The server generates an 8-character passcode and stores only its bcrypt hash. Users log in with the passcode instead of email/password. A server-side session cookie is created and expires with the active subscription.

## Payment
The project models subscriptions but does not fake payment confirmation. Connect a licensed Ugandan payment/mobile-money provider and activate a plan only from a verified webhook/callback.

## Setup
1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Add PostgreSQL DATABASE_URL and AUTH_SECRET.
4. Run:
npm install
npx prisma generate
npm run db:push
npm run db:seed
npm run dev

Open http://localhost:3000.

## Production security
Protect /admin with ADMIN role checks; rate-limit passcode attempts; lock accounts after repeated failures; use HTTPS; never log raw passcodes; keep TMDb keys server-side; verify payment webhook signatures.
