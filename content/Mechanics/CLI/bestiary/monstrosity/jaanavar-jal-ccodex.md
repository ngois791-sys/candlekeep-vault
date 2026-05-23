---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jaanavar Jal
---
# [Jaanavar Jal](Mechanics\CLI\bestiary\monstrosity/jaanavar-jal-ccodex.md)
*Source: Creature Codex p. 229*  

*The massive white worm opens its gaping maw, revealing two square teeth, and spews flaming oil onto its prey.*

Exploding out of the river, the jaanavar jal, also known as the burning beast, is the scourge of the slow-moving rivers of the East. Though dim-witted, jaanavar jal is a canny predator who consumes anything it can catch.

## River Ambusher

The jaanavar jal is known to ambush herd animals, fishermen and even whole boats, spewing flaming oil from its gaping maw to roast its prey before feasting.

## Valuable Oils

The glands that produce the flaming oil (naphtha) are prized among the alchemists of the East. The brave, or perhaps foolish, hunters who manage to bring down a burning beast can make their fortunes with a single kill.

```statblock
"name": "Jaanavar Jal (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "20"
  - !!int "6"
  - !!int "13"
  - !!int "10"
"speed": "20 ft., swim 60 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "passive Perception 14"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The jaanavar jal can breathe air and water."
    "name": "Amphibious"
  - "desc": "The jaanavar jal regains 10 hp at the start of its turn if it has at\
      \ least 1 hp. If the jaanavar jal takes cold damage, this trait doesn't function\
      \ at the start of its next turn. The jaanavar jal dies only if it starts its\
      \ turn with 0 hp and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The jaanavar jal makes two attacks. one with its bite and one to constrict."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d10 + 5) piercing damage Constrict. Melee Weapon Attack: +8 to hit,\
      \ reach 5 ft., one Large or smaller creature. *Hit:* 10 (1d10 + 5) bludgeoning\
      \ damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and the jaanavar jal can't constrict another creature."
    "name": "Bite"
  - "desc": "The jaanavar jal expels a line of burning oil that is 40 feet long and\
      \ 5 feet wide from glands beside its mouth. Each creature in that line must\
      \ make a DC 16 Dexterity saving throw, taking 31 (9d6) fire damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Flaming Oil Spittle (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/jaanavar-jal-ccodex.png"
```
^statblock

## Environment

forest