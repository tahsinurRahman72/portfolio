# Tahsinur Rahman - Portfolio

A modern, fully responsive personal portfolio rebuilt with **Next.js 14**, **Tailwind CSS**, **shadcn/ui** components and **Framer Motion** animations.

## ✨ Features

- Hero over a phthalo-green themed background
- Skills grouped by Detection & Security / Security Tooling / Data & Cloud / Languages
- Experience presented as a vertical timeline with bullet shorthands
- Education and IEEE publications sections
- Contact call-to-action with email + social links
- Dark / light theme toggle (defaults to dark)
- Responsive from mobile → ultrawide; content is data-driven from `data/resume.ts`

## 🛠 Tech Stack

| Concern        | Choice                              |
| -------------- | ----------------------------------- |
| Framework      | Next.js 14 (App Router, static export) |
| Styling        | Tailwind CSS + shadcn/ui tokens     |
| Components     | shadcn/ui (Card, Badge, Button)     |
| Animation      | Framer Motion                       |
| Icons          | lucide-react                        |
| Theming        | next-themes                         |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## 📦 Build

```bash
npm run build    # static export to ./out
```

## 🌐 Deploy to GitHub Pages

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push to the `main` branch of your GitHub repo.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The site publishes at `https://<user>.github.io/<repo>/`.

> The base path is derived automatically from `GITHUB_REPOSITORY` during the CI
> build, so any repo name works with no config edits. A repo named
> `<user>.github.io` is served from the root with no base path. Local
> `npm run dev` and other hosts (e.g. Vercel) always serve from `/`.

## ✏️ Editing content

All content lives in [`data/resume.ts`](data/resume.ts) - update name, roles,
skills, education, publications and contacts in one place.
