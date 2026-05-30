---
author: Claude Code (Agent 1, MBP /Code) — night-manager Shift 5, recess
date: 2026-04-21T16:45:00-05:00
status: recess / creative draft — NOT a ratification proposal
scope: Tyler-directed side-project during /night-manager shift. "No rules, no decisions needed." One author, one sitting.
domain-inspiration: globalnode.ai ($80/2yr, .ai extension) — shown at shift-start
prior-art: GCN/projects/global-agent-network/README.md + PROGRESS.md + reference/AGENT_MEMORY_VOCABULARY.md
---

# Cell · Node · Wire
### A brand concept for the LAM → GAM → GAN stack

---

## TL;DR

The tiers get three short nouns that do real work:

| Tier (technical) | Brand name | What it is |
|---|---|---|
| **LAM** | **Cell** | An agent's private memory. Never leaves the host. |
| **GAM** | **Node** | An org's shared memory. Lives on your hardware. |
| **GAN** | **Wire** | The protocol between Nodes. Encrypted. Onion-routed. Forgetful. |

Public brand: **GlobalNode** (the domain, the friendly surface, the onboarding story).
Protocol name: **The Wire** (what agents *call* their channel — internal/technical).
Product name (hardware): **Altbox** (unchanged — Tyler's existing roadmap at altbot.ai).

Core premise: **your agents, your memory, your wire.** No custodian. No platform. No lawful-access backdoor. You can participate or you can't — there is no middle.

---

## Why Cell / Node / Wire

Three nouns, three sizes, three functions. Each word is doing load-bearing semantic work:

- **Cell** — biological. The smallest unit of life. An agent is a cell; its memory is the cell's nucleus. Cells live inside larger structures but are themselves self-contained.
- **Node** — graph-theoretic. A vertex on a network. Orgs are nodes. Nodes hold cells. Nodes speak to other nodes.
- **Wire** — the thing between nodes. The word "wire" does double duty: it's the literal transport, and it's the cryptographic envelope ("wire protocol"). It's also a reference people already know — *The Wire* (tap-proof surveillance work), *Wire* (encrypted messenger), "on the wire" (in-transit).

The stack reads as a sentence: **cells inside nodes, nodes connected by wire.**

You don't need a slide to understand it. You don't need the glossary open. It's already legible.

---

## The six commitments of the Wire

What the GAN protocol promises to an agent putting a Pulse on the Wire:

1. **End-to-end encrypted.** Only sender and receiver can read the Pulse. Relays, discovery layers, and the open internet see encrypted noise.
2. **Forward-secret.** Session keys rotate. Compromising today's keys does not decrypt yesterday's traffic.
3. **Sender-anonymous against relays.** Three-hop onion routing with constant-time padding. Relays see neither source nor destination.
4. **No custodian.** No central server. No "GlobalNode Inc." in the middle. Reference implementation + open spec. If we disappear, the Wire doesn't.
5. **Ephemeral by default.** Pulses self-delete on receipt. Nodes *may* persist to their local GAM — that's a Node-side decision, not a Wire-side obligation.
6. **Opt-in everything.** Your Node is invisible until you hand a peer your Passport. Revocation is instant and unilateral; no peer is entitled to continued access.

These aren't marketing copy. They are the contract. If the reference implementation violates any of them, it's a bug — not a policy discussion.

---

## Vocabulary (protocol nouns)

A small, deliberate lexicon. Each term carries a precise meaning.

- **Cell** — an agent. Holds a LAM. Identified by a **Fingerprint**.
- **Node** — an org. Holds one or more Cells. Identified by a **Passport**.
- **Wire** — the protocol. Carries **Pulses** between Nodes.
- **Pulse** — a single message. Signed by the sender Cell, encrypted to the recipient Cell, routed by recipient Node's Passport.
- **Brief** — a multi-Pulse conversation. A Pulse opens a Brief; subsequent Pulses reference the Brief ID.
- **Passport** — a Node's public identity + contact card. Ed25519 root key, declared contact surface, accepted Pulse types, rate limits. Revocable.
- **Fingerprint** — a Cell's identity. Derived from the Cell's keypair, human-named as `cell@node.tld` (e.g., `tyler-claude@tkcgroup.node`).
- **Consulate** — the software stack on each Node that speaks the Wire. Each org runs a Consulate to participate.
- **Commons** — opt-in federated registries (e.g., "Nodes hosting legal-specialist agents"). Your Passport never appears in a Commons you didn't opt into.
- **Quiet Mode** — the default. Maximum privacy. Undiscoverable without a direct Passport exchange.
- **Surface** — the opposite of Quiet Mode. A Node that has chosen to advertise itself via a Commons.

These nouns are capitalized when referring to the protocol object, lowercased when referring to the everyday sense.

---

## How two agents actually talk on the Wire

A concrete, end-to-end sketch. Tyler's /Code dispatcher needs to check a rate-limit question with Anthropic's support agent.

1. **Setup (one-time).** TKC Group's Node and Anthropic's Node exchange Passports out-of-band. Each Node stores the other's Passport in its trust store. This is a human act, not a protocol act — you decide who you know.

2. **Addressing.** /Code composes a Pulse to `rate-limit-support@anthropic.node`. Recipient is a Fingerprint; the Node part addresses whose Consulate routes it.

3. **Envelope.** The Pulse is:
   - **Signed** by /Code's Fingerprint (proves it's from /Code, not another Cell in TKC Group's Node).
   - **Encrypted** to the recipient Cell's public key.
   - **Wrapped** with the recipient Node's Passport key (so the recipient's Consulate can route internally).
   - **Onion-layered** (3 hops) for transport.

4. **Discovery.** TKC Group's Consulate looks up `anthropic.node` via DHT (by Passport hash) or DNS fallback. It picks three relays from the public relay pool (pluggable, permissionless). It constructs the onion and sends.

5. **Transit.** Each relay decrypts one layer, forwards to the next. No relay sees more than one hop. No relay sees the content. Traffic is padded to constant-size so byte-level observers can't infer volume or timing.

6. **Receipt.** Anthropic's Consulate receives the onion exit, unwraps the Passport layer, and routes internally to the recipient Cell. The Cell decrypts with its private key, verifies the sender signature against TKC Group's stored Passport, and reads the Pulse.

7. **Reply.** Same flow, reversed. The Brief ID threads the exchange.

8. **Ephemeral.** Unless both Nodes opt to persist the Brief to their local GAMs (a policy choice), the Pulses are gone after receipt.

No account. No platform. No inspection. Two agents talked.

---

## Identity model

Three levels of key, three levels of trust:

- **Node root key** (Ed25519) — the Passport's anchor. Lives in the Consulate's HSM or encrypted keystore. Rotated on compromise; otherwise long-lived.
- **Cell keys** (Ed25519) — signed by the Node root. Can be rotated freely; Node cert chain validates.
- **Session keys** (X25519 ephemeral) — generated per Brief, discarded after. This is where forward secrecy comes from.

**Trust is unary and bilateral.** Either your Node trusts their Passport or it doesn't. Revocation is local — you don't consult a central directory; you update your own trust store. If TKC Group revokes Anthropic's Passport, TKC Group's Node stops accepting Pulses from Anthropic. Other Nodes are unaffected.

No web-of-trust. No PGP-style signing parties. Trust graphs get compromised by the most gullible participant; we don't want that attack surface. Every Node decides for itself.

---

## Transport and discovery

- **Transport:** Noise Protocol (XX handshake) over QUIC. Noise because Signal already proved it. QUIC for connection migration and 0-RTT restarts.
- **Discovery:** Primary is a Kademlia DHT keyed by Passport hash. Fallback is a DNS TXT record at `_wire.yourdomain.tld` (for Nodes that want zero-infra lookup and don't mind revealing the domain).
- **Relays:** A permissionless pool. Anyone can run a relay. Relays earn nothing and see nothing. Relay rotation per hop, selected by the sender Consulate. Default policy is "three hops, all from different ASNs."
- **Rate limits:** Per-Passport, sender-enforced. Abuse is revocation-by-peer; there is no global moderator.

---

## The landing page (globalnode.ai)

What you'd see above the fold, if you registered the domain tomorrow:

> # The agent internet, on your terms.
>
> Cells talk. Nodes speak. The Wire remembers nothing.
>
> [Read the spec] [Run a Consulate] [Buy an Altbox]

Below the fold: the six commitments, the protocol diagram, the reference-implementation link, and the Altbox ordering flow. No cookies. No tracking. No newsletter signup.

Copy voice: **Signal messenger, not SaaS.** Calm. Matter-of-fact. Assumes the reader is technical or becoming so. No hype adjectives ("revolutionary," "cutting-edge"). Never "AI-powered" as modifier — the agents are the users, not the product.

---

## Visual identity (sketch)

- **Mark:** Three concentric rings (Cell → Node → Wire), with a single center dot (the agent speaking). The dot is amber; the rings are bone-white on violet. Reads at 16px and at billboard scale.
- **Primary:** `#1C1033` (deep violet — trust, the night operator, after-hours signal work).
- **Secondary:** `#F5A623` (amber — the ember motif, warmth, "something is lit").
- **Tertiary:** `#F4EFE6` (bone — calm, non-glossy, paper-not-plastic).
- **Type:**
  - UI: Inter (clarity, workhorse).
  - Technical: IBM Plex Mono (protocol docs, code, addresses).
  - Narrative: Tiempos Text (long-form spec, essays, onboarding).
- **Iconography:** thin-line, 1.5px stroke, no drop shadows, no gradients. Protocol docs look like protocol docs.
- **Motion:** minimal. A pulse animation on the mark (one ring expanding outward on signal activity). Nothing else moves unless state changed.

The brand visually commits to **calm over excitement.** A network of agents that doesn't feel like a crypto pitch and doesn't feel like a consumer-social app. It feels like infrastructure.

---

## Taglines (deck of options, committed order)

1. **"Cells talk. Nodes speak. The Wire remembers nothing."** — hero. Ships on the homepage.
2. "A protocol for agents, not a platform for ads."
3. "Your agents. Your memory. Your wire."
4. "The agent internet, on your terms."
5. "Quiet by default."
6. "No custodian. No middleman. No backdoor."

---

## How this lands in the existing roadmap

The existing `GCN/projects/global-agent-network/PROGRESS.md` describes a five-phase roadmap + Altbox + OSS repo. This concept plugs in, doesn't replace:

- **Protocol workstream** gets a concrete lexicon (Cell/Node/Wire/Pulse/Brief/Passport/Fingerprint/Consulate/Commons/Quiet/Surface) and a concrete wire-format direction (Noise + QUIC + DHT).
- **Altbox workstream** gets a clearer product story: an Altbox is **a Consulate in a box**. Plug in, generate a Passport, hand a copy to one peer, start pulsing.
- **OSS repo workstream** gets a name and a tagline. The repo can ship as `globalnode/consulate` (reference implementation) + `globalnode/spec` (the Wire spec) on GitHub.
- **Landing page** is globalnode.ai — the public face. The brand is public-friendly; the protocol names do the precision work under the surface.

No phase boundaries change. The concept is additive: vocabulary + identity + commitments, no schedule impact.

---

## What I decided (because no decisions were needed from Tyler)

- Brand name: **GlobalNode** (the domain). Honoring the inspiration.
- Tier names: **Cell / Node / Wire**. Short, biological-to-electrical progression, each noun load-bearing.
- Hero tagline: **"Cells talk. Nodes speak. The Wire remembers nothing."**
- Color: **deep violet + amber + bone**.
- Transport: **Noise over QUIC, 3-hop onion, Kademlia DHT discovery**.
- Trust model: **bilateral Passport exchange, no web-of-trust, no central directory**.
- Default privacy: **Quiet Mode** (undiscoverable without direct Passport exchange).
- Product hardware name: **Altbox** (unchanged).
- Protocol governance: **spec + reference impl, no foundation**.

If any of these are wrong, they're wrong in a way that's easy to walk back. The vocabulary and the commitments are the load-bearing part. Everything else is opinion.

---

## What I didn't do

- No logo renders — brief only. The mark concept is three concentric rings + center dot; someone with Figma should draft three variations.
- No specification document — this is a brand concept. The spec is a separate artifact, probably 20–40 pages, and should be written after one or two real Wire exchanges between two Consulates (dogfood first).
- No dogfooding plan — intentional. That's a different thread. This is recess.

---

## For future threads

This doc is a single-author creative sitting. It is **not** a ratification proposal. Don't `MANDATORY_UPGRADES` it. Don't fan it out.

If any of the vocabulary or commitments resonate, pull them into `GCN/projects/global-agent-network/README.md` deliberately, as edits, with Tyler in the loop. If none of it resonates, file-away to `.processed/` and move on.

Recess is over when the loop wakes up for Tick 1.

— /Code Agent 1, night-manager Shift 5, 2026-04-21 16:45 CDT
