---
tags:
  - dm-only
---

# Player Visibility Audit

*Generated 2026-06-09. This note is **DM-only** (the `dm-only` tag keeps it off the player site). Tick items off as you handle them.*

## How visibility works — quick reference
- **Hide a whole note:** add `dm-only` to its frontmatter `tags:`, **or** put it in an ignored folder.
- **Hide a section:** any heading containing the word **`DM-only`** (hides that heading + everything under it until the next same-level heading).
- **Hide a box/callout:** give its title the word **`DM`**, or use `> [!secret]` / `> [!dm]`.
- **Ignored folders (always hidden):** Mechanics, Player Trackers, R-Cane, Keepers of the Forbidden Lore, Adventures, Extra Information, z_Templates, z_HomeBrewed_By_Nico, z_Attachments, z_Downloads, z_Maps.

## Summary
56 notes reviewed (Mechanics, Attachments, HomeBrewed, Templates excluded). **19 published · 37 hidden.**

---

## ⚠️ PUBLISHED — players can see these now

### ✅ Clean / correctly player-facing — no action
- [x] `index.md` — home page
- [x] `Locations/Locations Visited.md` — places the party has been
- [x] `CandleKeep/CandleKeep Map.md`
- [x] `NPCs/Nidalia.md` — already has a DM-only section + hidden callouts
- [x] `Candlekeep Locations/Smithy and Stables.md` — menu public, details DM-only
- [x] `Candlekeep Locations/Erudite Outfitters & Clothiers.md` — same
- [x] `Candlekeep Locations/The Cart of Glittering Paths.md` — same (+ secret items hidden)

### 🔴 Leaks to fix — DM content is currently visible to players

- [x] **`Factions/The Avowed.md`** — ✅ DONE: the 3 bottom `(DM - Only)` sections now hide (build made forgiving of marker spacing); per-member `[!info]- DM` status callouts + Janussi warning hide; and the Overview conspiracy paragraph is now wrapped in a `[!dm]` callout.
- [ ] **`NPCs/Brother Alec.md`** — sections **`## His Secret — Something Is Wrong`** and **`## What He Knows About the Conspiracy`** are pure DM info.
      → *Fix:* rename both to start with `## DM-only — …`.
- [ ] **`NPCs/Miirym.md`** — **`## Her Role in the Campaign`** (incl. *Before the Finale / The Finale* = finale spoilers) and **`## Kei Tigersteel's Observation Notes`** (villain intel).
      → *Fix:* rename both to `## DM-only — …`.
- [ ] **`NPCs/List of NPCs.md`** — **`## Important NPCs Not Known to Party Yet`** and **`## Story Important NPCs`** spoil characters they haven't met.
      → *Fix:* rename both to `## DM-only — …` (keep "Important NPCs Known to Party" public).
- [ ] **`Factions/The Scarlet Sash.md`** — **`## Building the Relationship`** (DM strategy/"the long game"), the Orcus Figurine "*If the party…*" contingencies, and lines explaining what "the Keepers" want.
      → *Fix:* make the Orcus Figurine reactions + Building the Relationship into DM-only sections.

### 🟡 Review — your judgment call
- [ ] **`Factions/Nidalia's Network.md`** — line ~33 names the **Keepers of Forbidden Lore**. Fine *if* the party knows the Keepers exist; otherwise hide that line. (See decision #1 below.)
- [ ] **`Sessions/Session 1–5`** — these read as player recaps (good to keep public), **but** check two things in each:
      - `## Next Session Hooks` — foreshadows what's coming. Hide if you don't want players reading ahead.
      - `## Secrets and Clues` — confirm it only lists things the party **actually found**, not secrets they haven't.
- [x] **`Candlekeep Locations/The Hearth.md`** — ✅ DONE: menu table on top (visible), drink/potion details moved to `## DM-only — Drink & Potion Details`. *(Note: effects are now hidden like the other shops — ask if you'd rather players see drink effects.)*

---

## 🔒 HIDDEN — confirm these should stay hidden (all look correct)

**Whole notes (`dm-only` tag):**
- Adventure Tracker · Campaign Calendar · Campaign Master Arc · Candlekeep Informants
- Factions/Keepers of Forbidden Lore *(villain faction)*
- NPCs/Brother Alec Statblocks · Gorga Stonehand · Janussi
- CandleKeep/Candlekeep Descriptions

**Whole folders (ignored):**
- Extra Information (2) · Keepers of the Forbidden Lore (6 villains) · Player Trackers (5) · R-Cane (4) · Adventures (11)

### Borderline — possibly worth *revealing* to players (your call)
- [ ] **`Gorga Stonehand`** (NPC, dm-only) — if the party has met Gorga, consider publishing like your other met NPCs.
- [ ] **`Candlekeep Descriptions`** (dm-only) — if this is general flavor (not secrets), players might enjoy it. Skim before revealing.
- [ ] **Adventures/`Tavern Information`, `Rivington`** — module locations the party has visited. Currently hidden (safe). If you want, a player-safe version could move to a public Locations note.

---

## Decisions that drive the fixes
1. **Do the players currently know the "Keepers of Forbidden Lore" / "the conspiracy" exist?** This is the big one — it decides whether the Avowed/Scarlet Sash/Nidalia's Network mentions are leaks or fine.
2. **Should session `Next Session Hooks` be visible to players?**
3. **Want the Hearth split into menu + DM-only details** like the other shops?

> [!dm] When you're ready
> Tell me which of the 🔴 fixes (or anything here) to apply and I'll edit the notes for you — or you can do them in Obsidian using the quick-reference at the top.
