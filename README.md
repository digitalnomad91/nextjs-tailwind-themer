# Next.js Tailwind Themer

Screenshot-inspired theme switcher demo app built with Next.js (App Router) + Tailwind CSS.

## What this includes

- A gallery of themes extracted from the provided screenshot (65 total).
- Real-time theme switching using CSS variables mapped to Tailwind color tokens.
- Persistence through both `localStorage` and a cookie.
- A structure that can be extracted into a reusable package later (`src/lib/themes.ts` + `src/components/theme-provider.tsx`).

## Theme interpretation notes

The screenshot includes both well-known public themes (e.g., Nord, Dracula, Gruvbox, Solarized, Catppuccin) and custom/less-standard names (e.g., Typomagical, Sanctum, Prism). For this first implementation:

1. **Well-known themes** were mapped using their common palette identities.
2. **Custom/unclear themes** were mapped using palette cues from the screenshot cards and naming intent.

This makes the switcher immediately usable while keeping the dataset easy to tune.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Packaging path (recommended)

1. Keep this app as a visual QA demo.
2. Extract reusable logic into `packages/nextjs-tailwind-themer`:
   - `themes.ts`
   - `ThemeProvider`
   - `ThemeGallery` (optional)
3. Publish package and consume it from demo app.
