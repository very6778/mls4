# AGENTS GUIDE

## Purpose
- Serve as the onboarding reference for AI contributors assisting with the MillerSan marketing site.
- Highlight architectural expectations, workflow norms, and safety checks specific to this repository.

## Project Snapshot
- **Framework**: Next.js 14 (App Router) with forced dynamic rendering for ScrollTrigger/Lenis compatibility.
- **Languages**: TypeScript for components and hooks, Tailwind CSS for styling.
- **Key Libraries**: GSAP + ScrollTrigger, Lenis smooth scrolling, Radix primitives, MUI icons/material, Emotion (light use).
- **Aliases**: `@/components`, `@/hooks`, `@/lib` mapped via `tsconfig.json`.

## Directory Map
- `src/app`: App Router entry (`layout.tsx`, `page.tsx`), global styles, metadata.
- `src/components/sections`: Page-sized presentation sections; follow `SectionNameSection.tsx` naming.
- `src/components/ui`: Smaller reusable UI atoms/molecules.
- `src/hooks`: Client-side utilities (e.g., `useLenis`).
- `src/lib`: Shared helpers; keep framework-agnostic logic here when possible.
- `public/images`: Marketing imagery referenced by sections.

## Implementation Guidelines
- Prefer client components only when hooks (Lenis, ScrollTrigger) or browser APIs are required; otherwise keep components server-compatible.
- Place `"use client"` at top when a component relies on client-only APIs.
- Favor Tailwind classes from existing patterns; keep Emotion usage minimal and consistent with current imports.
- For GSAP animations:
  - Register plugins once per module, reuse timelines where feasible.
  - Always clean up ScrollTrigger timelines in `useEffect` return handlers.
- Maintain smooth-scrolling harmony by syncing Lenis with ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`).

## Styling & Assets
- Respect typography choices (Manrope) defined in `globals.css`.
- Use `Image` from `next/image` for media in sections; ensure assets live under `public/images`.
- Verify responsive breakpoints align with existing Tailwind utilities (mobile-first, `lg` for desktop parallax).

## Workflow
- Development: `npm run dev`
- Linting: `npm run lint` (run before commits; currently no automated tests configured).
- Build check: `npm run build`
- No tests exist; avoid adding frameworks without user approval.

## Security & Performance
- Do not commit secrets or environment data.
- Keep animations performant: avoid heavy `useEffect` allocations, enable `will-change` only where beneficial.
- Ensure Lenis/ScrollTrigger interactions do not block hydration; gate large effects behind viewport width checks when needed.
- Validate accessibility (semantic headings, alt text on images) while updating sections.

## Commit Kuralı
 Her kod değişikliğinden sonra mutlaka commit yap. Bu değişikliklerin güvenliğini sağlar ve daha profesyonel geliştirmeyi sağlar. 

Commit ismi kısa olsun (örneğin: "buton rengi beyaz yapıldı" gibi olabilicek en kısa ifade ile) ve kısa bir açıklamada ekleyebilirsin. 

git add . && git commit -m "yapılan değişiklik" 
 

ve eğer kullanıcı senden bir değişikliği geri almanı istersen "git revert HEAD" ile geri al bu son değişikliği geri alıp commit yapıcaktır
