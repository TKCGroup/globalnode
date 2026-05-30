# docs/hopper/

> **Hopper** = a temporary landing zone for unsorted raw content. Anything dropped here needs to be *sorted through* and then either (a) moved to a canonical location in `docs/`, (b) combined into a new/existing doc, or (c) archived.
>
> **Rule:** if it's in the hopper, it's not yet filed. Don't link to hopper contents from production code or published docs — link to the filed version once it lands in `docs/brand/`, `docs/content/`, `docs/documentation/`, etc.

## What's in here

| File | Source | Disposition needed |
|---|---|---|
| `CELL_NODE_WIRE.md` | Copy of `GCN/projects/global-agent-network/brand-concepts/2026-04-21-recess/CELL_NODE_WIRE.md` (/Code Shift 5 recess drop) | Split into `docs/brand/vocabulary.md`, `docs/brand/commitments.md`, `docs/brand/protocol.md`, `docs/brand/taglines.md`, `docs/brand/identity.md`. Keep original on NAS as source-of-truth; repo copy is for working reference. |
| `cell-node-wire-visual.html` | Copy of `/Users/tylerklug/Code/docs/documentation/cell-node-wire-visual.html` (reference visualization) | Dismantle into component-sized chunks once the Next.js/Astro/other stack is picked. Each `<section>` → one component. SVGs → extracted into `public/` or `src/components/*/svg/`. |
| `altbox-research-2026-04-21.md` | New — captures altbot.ai WebFetch findings (Altbox positioning, specs, marketing copy) | Fold into `docs/content/altbox-section.md` once the cross-promo copy is finalized. The raw findings can archive to NAS `GCN/projects/globalnode/research/`. |

## How to sort

When a thread has the attention-budget to actually file hopper contents:

1. **Read the file fully** — don't just skim the title. Some notes have embedded decisions or constraints buried in body text.
2. **Decide disposition**: (a) extract N specific pieces into N canonical files, (b) combine with existing canonical doc, (c) archive (it's reference-only; not directly used).
3. **Execute the move** per `00_standards/ROUTING_STANDARD.md §3.4` — archive the hopper file to `docs/hopper/.archived/{date}-{slug}.md` BEFORE deleting, so the source survives in history.
4. **Update this README's table** to reflect what landed where.

## Why "hopper"

A name that's cheerfully unfinished. Not "drafts," not "inbox" (that's an NAS concept), not "WIP" (too serious). Something clearly temporary, where you can drop things without pretending you know where they belong yet. Empties get filed or archived; doesn't accumulate silent clutter.
