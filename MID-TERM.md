# globalnode — MID-TERM

> Next 1–7 threads · side quests · research to do before deciding · "later tonight" items.

## Launch follow-ups (added T1 · 2026-05-30)

- [ ] **Remove GA4** (`G-MHFN1LZZ12`) from `src/app/layout.tsx` + **restore the "zero third-party requests" footer line** in `SiteFooter.tsx` — once globalnode.ai has real traffic / real users. Tyler: GA4 is a temporary launch-measurement tool, not permanent. (See CLAUDE.md §"No custodian" exception note.)
- [ ] **Complete DNSSEC** on the 5 external-registrar domains (globalnode.ai, tkcgroup.co, textalerts.ai, witcraft.ai, batchformat.ai) — add the DS record at each registrar (values in T1 thread / repo PROGRESS).
- [ ] **Create `dmarc@tkcgroup.co`** alias so fleet DMARC aggregate reports are readable (records already published fleet-wide).
- [ ] **Email forwarding** for brand addresses (e.g. hi@globalnode.ai) — needs token perm `Account · Email Routing Addresses · Edit` + destination inbox + address list.
- [ ] **Cloudflare Web Analytics** for fleet brand sites — needs token perm `Account · Web Analytics · Edit`; then add snippets to each site's `<head>`.

## Framework decision aids

- [ ] Run a quick Lighthouse audit on the `cell-node-wire-visual.html` as-is to baseline performance. If already >95, plain HTML might be the right answer for a single-page static landing.
- [ ] Sketch 15-minute proof-of-concept in Next.js App Router: one component extracted, same visual, to feel the friction.
- [ ] Same for Astro — if componentization feels markedly cleaner, that's a strong signal.
- [ ] Compare bundle sizes for a hello-world equivalent in all three.

## Brand / content

- [ ] **Trademark check on "Altbox"** — before the cross-promo ships, confirm altbot.ai has the mark (or at least that we're not stepping on someone else's).
- [ ] **Deep-link the Altbox pre-order CTA** to the exact altbot.ai product page (currently points at root domain). Get the canonical URL from altbot-dispatch.
- [ ] **Wire a real Altbox product photo** into the device render slot. Current SVG is a stylized placeholder; a proper product shot shifts the page from "concept" to "product."
- [ ] Audit the six Wire commitments against any marketing law concerns (the claims are strong — "no backdoor," "ephemeral" — confirm we can make them without caveats once the reference implementation exists).

## Research before shipping

- [ ] **How does Signal's early landing page frame a pre-implementation protocol?** Study their 2014-ish framing. Matrix too. Pull screenshots into `docs/content/competitive-landing-patterns.md`.
- [ ] **Waitlist hosts that honor no-tracking** — Buttondown? Own Postgres? Self-hosted Listmonk? Research before picking. Mailchimp is out (pixels everywhere).
- [ ] **Self-hosted IBM Plex source** — download direct from IBM (Apache 2.0). Benchmark vs Google Fonts CDN.

## Side quests

- [ ] **SVG logo extraction** — the three-ring mark in the hero viz is hard-coded. Pull it out into `public/mark.svg` + a React component variant once the framework lands.
- [ ] **Icon set for the lexicon** — each of the 11 protocol terms could have a small glyph. Nice-to-have, not a ship gate.
- [ ] **Dark mode is already the default. Light mode?** Worth sketching. Bone/violet inverts cleanly; amber stays. Would double the appeal without doubling the design work.
- [ ] **Interactive diagram variant** — hover a Cell, see its Fingerprint address. Click a relay hop, see its onion layer decrypt. Progressive-enhancement only (static first).

## Parking lot (don't lose these)

- [ ] **Spec doc repo** — the eventual `globalnode/spec` companion. Landing page links to it; landing ships before it but with a "coming soon" or GitHub stub.
- [ ] **Consulate reference impl repo** — the `globalnode/consulate` companion. Same situation; landing links forward, can ship before it exists.
- [ ] **Tyler's "Altbox is a Node in a box" framing** — this line is stronger than what's in the current viz. Consider whether to lift it into the hero copy.
- [ ] **Audit the "Cell inside Node" visual metaphor for accessibility** — screen readers won't get the SVG story. Need a text narrative fallback that explains the tier system without the image.
