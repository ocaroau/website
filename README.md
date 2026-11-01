# Ocaro website

Marketing site for [Ocaro](https://ocaro.com.au), an Australian car-mileage tracker for tax returns. It explains the app, the 5,000 km cents-per-kilometre cap and the logbook method, and collects early-access interest.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui (Base UI) · TypeScript · pnpm

## Getting started

Requires Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Command      | What it does                      |
| ------------ | --------------------------------- |
| `pnpm dev`   | Dev server with hot reload        |
| `pnpm build` | Production build                  |
| `pnpm start` | Serve the production build        |
| `pnpm lint`  | ESLint                            |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts (Inter, Outfit), metadata, viewport
│   ├── page.tsx          # Page: assembles the sections in order
│   ├── globals.css       # Theme tokens and Tailwind config
│   └── icon.png          # Favicon
├── components/
│   ├── site/             # One file per page section (nav, hero, cap, methods, faq, cta, footer)
│   └── ui/               # shadcn/ui components (button, accordion, badge)
├── content/site.ts       # Copy: cap constants, methods, FAQ
└── lib/utils.ts          # `cn` class helper
```

Page order: Nav → Hero → Problem (`#how`) → Cap meter (`#cap`) → Methods (`#methods`) → FAQ (`#faq`) → CTA (`#start`) → Footer.

## Design system

Everything visual is defined in `src/app/globals.css`, so components use tokens instead of hex values.

| Token         | Value     | Use                          |
| ------------- | --------- | ---------------------------- |
| `ink`         | `#0A0A0A` | Text, primary buttons        |
| `brand`       | `#DC2626` | Red accent, eyebrows, dial   |
| `brand-200`   | `#FECACA` | Tags, soft highlights        |
| `grey`        | `#F6F6F7` | Alternate section background |
| `line`        | `#E8E8EA` | Borders                      |
| `muted-foreground` | `#5F5F66` | Secondary text          |

- **Fonts:** Outfit for headings (uppercase, light first line and bold second line via `BigTitle`), Inter for body.
- **Breakpoint:** `lg` is 901px. Below it the layout is a single column, and below 460px the back phone in the hero is hidden.
- **Light only:** there is no dark theme.

## Editing content

- Change copy, FAQ answers and method cards in [`src/content/site.ts`](src/content/site.ts).
- Section layout and wording that isn't in that file lives in the matching component in `src/components/site/`.
- The cap (`CAP_KM`) is marketing copy for the current ATO rule. Confirm it against the ATO before updating or publishing, since rates and caps change by financial year.

## Interactive pieces

- **Cap meter** (`cap-meter.tsx`, client component): a dial and slider. The needle is computed from the driven kilometres over a 270° sweep.
- **FAQ**: the shadcn `Accordion`, restyled with +/– icons.
- Everything else is server-rendered and statically prerendered.

## Adding shadcn components

```bash
pnpm dlx shadcn@latest add <component>
```

Components land in `src/components/ui/`. This project's `Button` is customised (10px radius, ink/outline variants), so review the diff if you re-add it.

## Not done yet

- The "Get started" and "Get early access" buttons don't go anywhere: there is no signup form or backend.
- No Open Graph image, sitemap or analytics.
- Privacy, terms and contact pages don't exist.

## Notes

- Ocaro records and reports, and is not tax advice. Keep that disclaimer in the footer.
- The Flutter app and API are not part of this repo.
