---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hound of Tindalos
---
# [Hound of Tindalos](Mechanics\CLI\bestiary\aberration/hound-of-tindalos-ccodex.md)
*Source: Creature Codex p. 221*  

*Stepping through corners of otherwise solid walls, the hairless doglike creatures coated in blue ichor are relentless pursuers able to cross dimensional barriers in pursuit of prey.*

## Hunters from the Void

Hideous and strange creatures from the Void, hounds of Tindalos hunt those who travel the planes of existence or break the bonds of time. None know if the hounds take offense to travel through time and space or if there is some quality of such travelers that they find irresistible, but, once they have the scent of such a creature, they rarely lose it. They hunt without rest, draining the creature of all fluids with long, hollow tongues once caught, leaving behind little more than a husk. They possess intelligence and the ability to speak, but no society or civilization of their kind has ever been witnessed. They live only to hunt.

## A Taste for Humanity

Hounds of Tindalos prefer human prey even when presented with other options.

## Hideous Beasts

The hound resembles a hairless dog, but its forelimbs end in remarkably human-looking hands. It has the head of a bat with large, luminous eyes and a short black beak, sharp as a razor. Notches in the center of the top and bottom of the beak allow a long, blue, hollow proboscis to snake out for feeding. Its skin color varies, though nodules along the hound's spine ooze a blue ichor that coats it most of the time.

```statblock
"name": "Hound of Tindalos (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"modifier": !!int "6"
"stats":
  - !!int "18"
  - !!int "22"
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "necrotic"
"damage_immunities": "cold, poison, psychic"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The hound of Tindalos may only enter the Material Plane at a sharp intersection\
      \ of surfaces. As a bonus action, the hound can teleport from one location to\
      \ another within sight of the first, provided it travels from one sharp corner\
      \ to another."
    "name": "Entrance By Corners"
  - "desc": "The hound of Tindalos has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely smell."
    "name": "Keen Smell"
  - "desc": "The hound of Tindalos has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "If the hound of Tindalos moves at least 15 feet straight toward a creature\
      \ and then hits it with a claw attack on the same turn, that target must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the hound\
      \ of Tindalos can make one tongue attack against it as a bonus action."
    "name": "Pounce"
  - "desc": "The hound of Tindalos has advantage on ability checks and saving throws\
      \ made to escape a grapple."
    "name": "Slippery"
"actions":
  - "desc": "The hound of Tindalos makes two claw attacks and one bite attack. It\
      \ can make one tongue attack in place of its two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (3d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage plus 7 (2d6) necrotic damage. The target's hp\
      \ maximum is reduced by an amount equal to the necrotic damage taken. The reduction\
      \ lasts until the target finishes a long rest. The target dies if this effect\
      \ reduces its hp maximum to 0."
    "name": "Tongue"
  - "desc": "The hound can transport itself to a different plane of existence. This\
      \ works like the plane shift spell, except the hound can only affect itself,\
      \ not other creatures, and can't use it to banish an unwilling creature to another\
      \ plane."
    "name": "Hunter of the Lost"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/hound-of-tindalos-ccodex.png"
```
^statblock

## Environment

planar