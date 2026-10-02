# QuantumLab

A modern, animated marketing website for **QuantumLab** — a creative studio / agency landing page inspired by Webflow-style templates. Built with Next.js 16, Tailwind CSS, shadcn/ui, and Framer Motion, it ships a polished single-page experience with animated hero, features, showcase, pricing, FAQ, and contact sections.

## Features

- 🎨 Animated landing page (Framer Motion page transitions and scroll reveals)
- 🧩 shadcn/ui component library (34+ pre-built Radix-based components in `src/components/ui`)
- 📱 Fully responsive layout with mobile navigation
- 🌙 Clean, minimal design system (Inter typeface, Tailwind tokens)
- 📝 Rich-text editing capability via `@mdxeditor/editor`
- 📊 TanStack Table + React Query utilities ready for data views
- 🖱️ Drag-and-drop primitives via dnd-kit
- 🗄️ Prisma ORM scaffolding (`src/lib/db.ts`, `prisma/`) for adding a database later
- 🔌 Sample API route scaffold at `src/app/api/route.ts`

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (Radix UI primitives), `class-variance-authority`, `clsx`
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod resolvers
- **Data:** TanStack Query, TanStack Table, date-fns
- **Editor:** @mdxeditor/editor
- **Database (optional scaffolding):** Prisma ORM (set `DATABASE_URL` in `.env` to enable)
- **Package manager:** Bun or npm

## Quick Start

```bash
# install dependencies
npm install
# or
bun install

# run the dev server
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

### Optional: database

Copy the example env and point Prisma at your database:

```bash
cp .env.example .env   # if provided; otherwise create .env
# DATABASE_URL="postgresql://user:password@localhost:5432/quantumlab"
npx prisma db push
```

## Project Structure

```
src/
  app/
    api/route.ts      # sample "Hello, world!" API route (scaffold)
    layout.tsx        # root layout, fonts, metadata, toaster
    page.tsx          # the QuantumLab landing page
    globals.css       # Tailwind theme + global styles
  components/
    ui/               # shadcn/ui primitives (button, dialog, card, ...)
  hooks/              # custom React hooks
  lib/
    db.ts             # Prisma client singleton
    utils.ts          # cn() and helpers
prisma/               # Prisma schema / migrations
public/               # static assets (logo, images)
```

## Deployment

- **Static export:** set `output: "export"` in `next.config.ts` and deploy the `out/` folder to Cloudflare Pages, Netlify, or GitHub Pages.
- **Node server:** default `output: "standalone"` builds a self-contained server (`npm start`).
- Any platform that supports Next.js (Vercel, Netlify, Cloudflare Workers) works out of the box.

## Notes

- TypeScript build errors are ignored during builds (`typescript.ignoreBuildErrors: true`) — tighten this before production use.
- The API route and Prisma client are starter scaffolding; the landing page itself is fully client-rendered and needs no backend.

## License

Free to use for personal and commercial projects.

---

Built by Girish Lade — https://ladestack.in
