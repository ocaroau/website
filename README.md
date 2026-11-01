# Ocaro website

Marketing site for Ocaro. Next.js (App Router) + Tailwind CSS v4 + shadcn/ui, managed with pnpm.

```bash
pnpm dev     # http://localhost:3000
pnpm build
pnpm lint
```

- `src/components/site/`: one file per page section; `src/components/ui/`: shadcn components (Button, Accordion, Badge)
- `src/content/site.ts`: car meters, report rows and FAQ copy
- Colours, fonts and breakpoints live in `src/app/globals.css` (`ink`, `body`, `line`, `tint`, `brand`)
- Add shadcn components with `pnpm dlx shadcn@latest add <name>`
