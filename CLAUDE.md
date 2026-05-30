# CLAUDE.md — globalnode

> Conventions for agents working in this repo. Augments (does not replace) the global `~/.claude/CLAUDE.md`.

## Repo purpose

Single-page landing site for **Cell · Node · Wire** — the globalnode.ai public face. See `README.md` for scope; this file is for agent behavior.

## Shard assignment

**TBD.** Candidates:
- `altbot.md` — Altbox is altbot's hardware line; GAN ties tightly to altbot infra; this page cross-promotes altbot.ai → short-term fit
- `tkc-v7.md` — follows the "TKCGroup/tkcgroup-rebrand → tkc-v7.md" precedent for TKC brand properties
- A new `globalnode.md` shard — if/when GAN becomes its own agent lane with enough traffic

**Default until Tyler decides:** inherit from `code.md` (meta-shard), since this repo was initialized under /Code.

**DO NOT create `shards/globalnode.md` speculatively.** Rule #11: don't author ecosystem-level artifacts without a decision. Flag in the next thread-close handoff if Tyler hasn't ruled.

## Data topology

Three tiers; each artifact belongs to exactly one.

### Tier 1 — Git (tracked in this repo)

- Source code (`src/`, `public/`, `scripts/`)
- Tracked docs (`README.md`, this file, `PROGRESS.md`, `MID-TERM.md`, `LONG-TERM.md`, `docs/` except secrets)
- Config (`package.json`, `tsconfig.json`, framework configs, `.env.example`)
- Anything a new contributor on a fresh machine needs to run the site

### Tier 2 — NAS (canonical on `/Volumes/homes/TKC Group/`)

| Artifact | NAS path |
|---|---|
| Env / secrets / API keys | `GCN/keys-secrets-variables/.secrets/globalnode/` |
| Cross-agent project plan, research, launch roadmap | `GCN/projects/globalnode/` |
| Brand concept canonical | `GCN/projects/global-agent-network/brand-concepts/2026-04-21-recess/CELL_NODE_WIRE.md` |
| Design source files (`.fig`, `.psd`, vector source) | `GCN/projects/globalnode/assets/` |
| Waitlist / export CSVs | `GCN/projects/globalnode/research/` |
| Fridges (inbound/outbound to this workspace) | `Global_Agent_Memory/fridge/{agent}/` — agent TBD per shard decision |
| Shard heartbeat | `Global_Agent_Memory/shards/{shard}.md` — per shard decision |

**Rule:** if you need to write any of the above, write to the NAS path. Never mirror into the repo.

### Tier 3 — Local (per-machine, regenerable)

- `node_modules/`, `.next/`, `dist/`, build output
- IDE state (`.idea/`, most of `.vscode/`)
- Git hooks state, log files

**Rule:** anything in this tier is a rebuild artifact. Don't check it in and don't mirror it to NAS.

## Why this split matters

The design goal: **.git travels freely.** A contributor on any machine (or an agent on any machine) can `git clone` and get everything they need in Tier 1 to read/edit/build. Nothing in the repo leaks secrets, nothing in the repo requires the NAS to render docs or build the site. If the NAS is unreachable, repo work continues normally.

The NAS layer (Tier 2) carries the stuff that would normally go uncommitted + lost-between-machines in a traditional single-developer workflow: env files, big design assets, research CSVs, cross-agent coordination. Centralizing those on NAS means any TKC machine can pick up the thread without Tyler hand-syncing zip files.

## Conventions specific to this repo

### Hopper discipline

`docs/hopper/` is a temp landing zone. When filing hopper contents:
1. Read the file fully (don't skim).
2. Decide disposition (split / combine / archive).
3. Archive the hopper file to `docs/hopper/.archived/` before deletion (per `ROUTING_STANDARD §3.4`).
4. Update `docs/hopper/README.md` table with what landed where.

Don't let hopper accumulate silent clutter; each hopper file should have a disposition note in `docs/hopper/README.md` from the moment it lands.

### PROGRESS / MID-TERM / LONG-TERM

Per global Rule #8 + Rule #12:
- `PROGRESS.md` = current thread's live work (read on inhale, update during, carryover on close)
- `MID-TERM.md` = next 1–7 threads, side quests, "later tonight" items
- `LONG-TERM.md` = months out, vision, brain dumps

All three are append-only (Rule #12). Use `Edit` with a fresh `## Carryover Notes` prepend; never `Write` over existing content.

### No custodian, no analytics

Brand commitment (see `CELL_NODE_WIRE.md` Six Commitments): the Wire has no custodian, is private by default, has no tracking. **The landing page must honor this:**
- No Google Analytics. No Plausible. No Posthog. Nothing that fingerprints visitors.
- No cookies except what strictly-essential functionality requires (almost certainly none for a static landing).
- Waitlist signup (if added): the submitter's email + nothing else. No IP, no UA, no behavioral data.
- CDN fonts are a tension — IBM Plex via Google Fonts pings Google. Self-host fonts in `public/fonts/` once the stack is chosen, so the page truly loads with zero third-party calls.

Violating any of the above breaks the brand promise the page exists to make.

> **⚠️ Active exception (2026-05-30, Tyler) — GA4 is live and intentional.** A GA4 tag (`G-MHFN1LZZ12`) was added to the live site by explicit founder decision as a **temporary launch-phase measurement tool**, knowingly accepting the tradeoff. The footer's "zero third-party requests" claim was removed accordingly (see `SiteFooter.tsx`). **Do NOT remove GA4 as a "fix" — it is deliberate.** Removal condition: once globalnode.ai has real traffic / real users, pull GA4 (`src/app/layout.tsx`) and restore the "zero third-party requests" footer line. Until then, leave it.

## Related agent docs

- Global rules: `~/.claude/CLAUDE.md` (MBP canonical)
- NAS protocol: `/Volumes/homes/TKC Group/Global_Agent_Memory/00_standards/`
- SA key registry: `/Volumes/homes/TKC Group/GCN/keys-secrets-variables/SA_KEY_REGISTRY.md`
- Brand concept source: `/Volumes/homes/TKC Group/GCN/projects/global-agent-network/brand-concepts/2026-04-21-recess/CELL_NODE_WIRE.md`
