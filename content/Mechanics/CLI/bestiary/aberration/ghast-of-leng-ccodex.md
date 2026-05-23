---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ghast of Leng
---
# [Ghast of Leng](Mechanics\CLI\bestiary\aberration/ghast-of-leng-ccodex.md)
*Source: Creature Codex p. 168*  

*A maddened, earnest expression sits on the creature's sickening approximation of a noseless human face that slopes down smoothly from the brow into a long, wrinkled neck. The torso of the creature is human-like as well but with sagging grey skin covered in bumps and knots like a toad. Its forelimbs end in splayed-out, curved claws, but its hind limbs are jointed like a hare, ending in sharp‑looking hooves.*

## Subterranean Carnivores

The ghasts of Leng are malevolent predators, willing to eat anything that moves. These foul creatures hunt in packs, bounding after their prey and tearing it to pieces among themselves with their claws, teeth, and sharp hooves. In the frenzy of feeding, it is not uncommon for one of the ghasts to be torn apart and consumed as well.

## From Across the Void

Subterranean creatures from the mysterious Plateau of Leng, where they primarily prey upon the fearsome gugs deep underground, the ghasts of Leng have spread across the darkened caverns of many worlds by some mysterious means. They are incapable of withstanding sunlight and keep themselves to the dark caverns in the earth.

> [!note] Ghasts of Leng and Yakirians
> 
> The yak-people and the ghasts of Leng are ancient enemies, but of a particular kind. When they meet, they do not fly into a rage or sudden hostility; instead, the ghast's pack leader chooses a member of the pack to fight the yakirian's chosen champion. The yakirian and ghast fight without quarter, though mercy is sometimes granted by the ghasts. Most of the time, the yakirian comes off the worse and (if it lives) withdraws, often leaving an offering for the winners: a knife, a carved gemstone, or some other token of victory. When a yakirian does win a bout, it invariably devours the heart of the ghast with an invocation to cast out the baleful work of Leng.
^ghasts-of-leng-and-yakirians

```statblock
"name": "Ghast of Leng (CCodex)"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "17d10 + 34"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "17"
  - !!int "14"
  - !!int "4"
  - !!int "9"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+1"
"damage_vulnerabilities": "radiant"
"damage_resistances": "cold"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The ghast of Leng has advantage on melee attack rolls against any creature\
      \ that doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "The ghast of Leng has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The ghast of Leng takes 20 radiant damage when it starts its turn in\
      \ sunlight. While in sunlight, it has disadvantage on attack rolls and ability\
      \ checks."
    "name": "Sunlight Hypersensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/ghast-of-leng-ccodex.png"
```
^statblock

## Environment

planar