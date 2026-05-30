# globalnode — Thread 1 Build Plan (scaffolding)

> Fresh repo. Today's scope: **build the project tree + file raw .md into `docs/hopper/`**. Nothing else is committed-to yet.
>
> Next thread picks up framework + first components.

## Carryover Notes (T0→T1)

**T0 (this thread) closed** — tree + hopper populated + meta-docs written. No framework chosen. No components built. No commits yet (Tyler's call on when to `git init` + first commit).

## Phase 1 — Scaffolding (this thread)

- [x] Repo directory created at `/Users/tylerklug/Code/TKCGroup/globalnode/`
- [x] Tree built: `docs/{hopper,brand,content,daily,documentation}`, `src/{app,components,lib}`, `public/`, `scripts/`
- [x] NAS counterpart created: `GCN/projects/globalnode/`
- [x] Hopper populated with:
  - `docs/hopper/CELL_NODE_WIRE.md` (copied from NAS brand concept)
  - `docs/hopper/cell-node-wire-visual.html` (copied from /Code/docs/documentation)
  - `docs/hopper/altbox-research-2026-04-21.md` (new — altbot.ai WebFetch findings)
  - `docs/hopper/README.md` (explains what hopper is + disposition table)
- [x] Root meta-files:
  - `README.md` — repo intro
  - `CLAUDE.md` — agent conventions + data topology
  - `.gitignore` — explicit NAS pointers as comments
  - `PROGRESS.md` — this file
  - `MID-TERM.md` — next 1–7 threads
  - `LONG-TERM.md` — vision

## Phase 2 — Framework decision (Tyler-gate)

- [ ] Pick stack: **Next.js** (TKC default, Vercel-native) · **Astro** (static-first, better Lighthouse for marketing) · **plain HTML** (what the hopper viz is — simplest to ship)
- [ ] `npm init` (or pnpm / bun) + framework install
- [ ] First commit: "chore: initial scaffold" with the tree + hopper + chosen framework's boilerplate

## Phase 3 — Component extraction (after framework)

Decompose `docs/hopper/cell-node-wire-visual.html` into components. Each `<section>` → one component. Order suggested by the current viz flow:

- [ ] `<Hero />` — three concentric rings mark + pulse + hero tagline
- [ ] `<Tiers />` — three-column Cell/Node/Wire card grid
- [ ] `<Diagram />` — two-Node illustration with onion-routed Wire path + animated pulse dot
- [ ] `<Commitments />` — 6-card grid of the Wire promises
- [ ] `<Lexicon />` — 11-term glossary strip
- [ ] `<LandingMock />` — mockup of globalnode.ai above-the-fold
- [ ] `<Altbox />` — cross-promo hero (device render + specs + altbot.ai CTA)
- [ ] `<Identity />` — color swatches + type specimen
- [ ] `<Taglines />` — hero + 5 alternates, numbered
- [ ] `<Footer />` — adapted from current HTML footer

## Phase 4 — Hopper cleanup

Once components are extracted, file hopper contents per `docs/hopper/README.md` disposition table:

- [ ] Split `CELL_NODE_WIRE.md` into `docs/brand/{vocabulary,commitments,protocol,taglines,identity}.md`
- [ ] Fold `altbox-research-2026-04-21.md` → `docs/content/altbox-section.md`; archive raw research to NAS `GCN/projects/globalnode/research/`
- [ ] Archive the original `cell-node-wire-visual.html` to `docs/hopper/.archived/` once every section is componentized

## Phase 5 — Shippability gates

Before pointing globalnode.ai at the deployed site:

- [ ] Self-host IBM Plex fonts in `public/fonts/` (no Google Fonts CDN — "no custodian" brand commitment)
- [ ] Strip the "recess — not a ratification" disclaimer from footer
- [ ] Decide waitlist strategy: form (which host? must honor no-tracking) or GitHub link to spec-in-progress
- [ ] Favicon + OG image (mark on violet bg, one of each)
- [ ] Accessibility pass: alt text on all SVGs, color contrast audit, keyboard nav
- [ ] Mobile breakpoint audit (current viz has some grid reflow; needs real-device testing)
- [ ] Decide domain: `globalnode.ai` ($80/2yr per Tyler's screenshot) — purchase + Vercel/Netlify/Cloudflare Pages deploy
- [ ] Decide launch framing: manifesto + waitlist (honest) vs "wait until Consulate demos" (conservative). See T48 thread-close discussion.

## Execution Log

| Time | Action | Outcome |
|---|---|---|
| 2026-04-21 T48 | Repo tree + hopper + meta-docs scaffolded | Phase 1 complete; Tyler-gate on Phase 2 stack |

## Blockers

- **Framework choice** — needs Tyler's call before Phase 2.
- **Shard assignment** — CLAUDE.md flags TBD; note in thread-close handoff if unresolved.
- **Launch framing** — manifesto vs "wait for Consulate." Not a Phase 1-2 blocker; Phase 5 gate.

## Related

- NAS: `GCN/projects/globalnode/PROGRESS.md` (cross-agent phase roadmap — to be authored in parallel with this)
- Parent: `GCN/projects/global-agent-network/PROGRESS.md` (five-phase GAN roadmap)
