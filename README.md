# globalnode

> Landing page + brand home for **Cell · Node · Wire** — a concept for the agent internet.
>
> Public face of the **Global-Agent-Network (GAN)** project, sibling to the eventual `globalnode/consulate` (reference implementation) and `globalnode/spec` (Wire protocol spec) repos.

**Status:** scaffolding stage. Tree + hopper + meta-docs only. No framework chosen yet.

## What this repo is

The single-page marketing / manifesto site for globalnode.ai. One hero, one vocabulary (Cell / Node / Wire), six protocol commitments, a lexicon, a product bridge to **Altbox** (altbot.ai hardware), an identity system, and a deck of taglines.

Source of the brand concept: `docs/hopper/CELL_NODE_WIRE.md` (recess drop, /Code Agent 1, 2026-04-21). Reference visualization that this repo will componentize: `docs/hopper/cell-node-wire-visual.html`.

## What this repo is NOT

- Not the Wire protocol implementation. That's the future `globalnode/consulate` repo.
- Not the Wire specification. That's the future `globalnode/spec` repo.
- Not an app with accounts, tracking, or server-side state. Static site. No custodian.

## Data topology

Three tiers (see `.gitignore` for the full set of rules):

| Tier | Lives | Examples |
|---|---|---|
| **Git** | This repo (anywhere, any machine) | Source code, tracked docs, configs, brand content |
| **NAS** | `/Volumes/homes/TKC Group/` | Secrets, env, large design source files, cross-agent coordination, project plan |
| **Local** | Each dev machine | `node_modules/`, build artifacts, IDE state |

This is the same split the broader TKC Group ecosystem uses (see `~/.claude/CLAUDE.md` "Universal Rules"). The point: `.git` travels freely between machines without dragging private state along.

See [`CLAUDE.md`](./CLAUDE.md) for the conventions unique to this repo.

## Structure

```
.
├── CLAUDE.md                   Repo conventions for AI agents (NAS mirror, data topology)
├── PROGRESS.md                 Thread scratchpad (current work)
├── MID-TERM.md                 Next 1–7 threads · side quests
├── LONG-TERM.md                Months out · vision · brain dumps
├── docs/
│   ├── hopper/                 Unsorted raw content — sort + file, don't pile up
│   ├── brand/                  (empty) Brand guide once hopper is sorted
│   ├── content/                (empty) Landing page copy sources
│   ├── daily/                  Per-thread daily logs (LAM artifacts, Rule #8)
│   └── documentation/          Moment docs, architecture notes, vision writing
├── src/
│   ├── app/                    (empty) Framework routes — stack TBD
│   ├── components/             (empty) UI components — stack TBD
│   └── lib/                    (empty) Shared utilities
├── public/                     (empty) Static assets
└── scripts/                    (empty) Dev / deploy helpers
```

## Related

- **Brand concept** (NAS canonical): `GCN/projects/global-agent-network/brand-concepts/2026-04-21-recess/CELL_NODE_WIRE.md`
- **Cross-agent project plan** (NAS): `GCN/projects/globalnode/` (created alongside this repo)
- **Broader GAN roadmap** (NAS): `GCN/projects/global-agent-network/PROGRESS.md`
- **Altbox** (hardware partner): https://altbot.ai

## Getting started

TBD — stack not chosen yet. Decision pending: Next.js (TKC ecosystem default), Astro (static-first marketing), or plain HTML (what the hopper viz is). Once picked, install instructions land here.
