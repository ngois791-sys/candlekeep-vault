---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quiet Soul
---
# [Quiet Soul](Mechanics\CLI\bestiary\undead/quiet-soul-ccodex.md)
*Source: Creature Codex p. 309*  

*The skeletal remains of a man bundled up in seal furs lies in the snow.*

## Forsaken Companion

The angry shade of one abandoned and left to die of starvation, thirst, or exposure to the elements, the quiet soul haunts many a frozen campsite, steep cavern, ravine, or deadly trap. Its helplessness, despair, and hatred for those who left it to die followed it beyond death. The quiet soul attempts to kill any who come near so they may join the quiet soul in its isolation. Barely able to move, quiet souls often end up camouflaged by their victims; just one more skeleton in a pile.

## Death Cult Shrines

Occasionally malevolent cults devoted to gods of death, winter, or darkness sacrifice one of their number to become a quiet soul. These quiet souls are given occasional sacrifices, decorated with jewels and finery, and serve as conduits for the voices of dark gods to their faithful. In some cases, they are positioned as statues or posed as supplicants in prayer.

## Undead Nature

A quiet soul doesn't require air, food, drink, or sleep.

> [!note] Quiet Souls in Midgard
> 
> Known in the frozen wastes of the Northlands as "suiksarpok" ("despises others"), the northerly tribes who drive dogsleds across the ice customarily avoid lone tents and frozen camps that answer no hails. However, if fate yields them no other choice, they must take elaborate precautions when making camp, for every tribe has a tale of finding a shelter full of corpses and the discoverers barely escaping the same fate at the hands of a suiksarpok. It is customary for traveling companions to greet one another upon waking in dangerous weather before anyone climbs out of their bedding, just in case.
^quiet-souls-in-midgard

```statblock
"name": "Quiet Soul (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "20d8"
"modifier": !!int "0"
"stats":
  - !!int "6"
  - !!int "10"
  - !!int "10"
  - !!int "8"
  - !!int "18"
  - !!int "10"
"speed": "10 ft."
"saves":
  - "constitution": !!int "3"
  - "wisdom": !!int "7"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_immunities": "cold, poison, psychic"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 17"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "6"
"traits":
  - "desc": "While the quiet soul remains motionless, it is indistinguishable from\
      \ an ordinary humanoid corpse."
    "name": "False Appearance"
  - "desc": "The quiet soul emits a magical aura of lethargy and despondency. Any\
      \ creature that starts its turn within 30 feet of the quiet soul must succeed\
      \ on a DC 15 Wisdom saving throw or fall [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 1 minute. The effect ends for a creature if the creature takes damage\
      \ or another creature uses an action to wake it."
    "name": "Melancholic Emanation"
"actions":
  - "desc": "*Ranged Spell Attack:* +7 to hit, range 60 ft., one target. *Hit:*\
      \ 21 (6d6) psychic damage. If an [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ creature is hit by this attack, that creature must make a DC 15 Wisdom saving\
      \ throw, remaining [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ on a failed save, or waking on a successful one."
    "name": "Psychic Lash"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/quiet-soul-ccodex.png"
```
^statblock

## Environment

arctic, underground