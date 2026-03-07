# GV Backend Workspace

This workspace contains:

- `server`: Express + Prisma + Neon API for submissions and admin auth.
- `client`: Next.js admin panel.

## 1) Server setup

```bash
cd server
cp .env.example .env
# Fill JWT, Google OAuth and Cloudinary values
npm install
npx prisma db push
npm run dev
```

Server runs on `http://localhost:3001`.

## 2) Client setup

```bash
cd client
cp .env.example .env.local
npm install
npm run dev
```

Client runs on `http://localhost:3000`.

## Core endpoints

- `POST /api/submissions`
  - `formType`: `founder | msme | investor | talent`
  - `talent` must include `resume` file in multipart body.
- `GET /api/auth/google`
- `GET /api/admin/submissions` (Bearer token required)
- `PATCH /api/admin/submissions/:id/status` (Bearer token required)
