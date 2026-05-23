---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Purple Slime
---
# [Purple Slime](Mechanics\CLI\bestiary\ooze/purple-slime-ccodex.md)
*Source: Creature Codex p. 307*  

*Covered with an iridescent sheen and able to pursue prey on land and water, a purple slime's needlelike spikes seem to be constantly in motion, changing its shape and even its hue to get closer to prey.*

## Aquatic Lurkers

The purple slime lives and hunts in shallow waters such as ponds, tide pools, abandoned animal troughs, and stagnant, flooded areas, where it is nearly invisible. The creature spreads itself out in such a place and waits for prey to approach.

## Necrotizing Enzymes

When it detects a nearby creature, it forms long, hollow, conical spikes from its amorphous body which jut out toward the intended prey. Once these spikes pierce its target, it injects a necrotic fluid which dissolves muscle tissue.

## Patient Hunters

Once a creature is killed or disabled, either by its spikes or its dissolving fluid, the slime undulates forward and covers the creature, devouring it entirely before returning to its previous hiding place.

## Ooze Nature

A purple slime doesn't require sleep.

```statblock
"name": "Purple Slime (CCodex)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "76"
"hit_dice": "8d10 + 32"
"modifier": !!int "-1"
"stats":
  - !!int "17"
  - !!int "8"
  - !!int "18"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 10 ft., swim 30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+1"
"damage_immunities": "acid, cold"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The purple slime can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "The purple slime can breathe air and water."
    "name": "Amphibious"
  - "desc": "The purple slime has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while underwater."
    "name": "Underwater Camouflage"
"actions":
  - "desc": "The purple slime makes two spike attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d8 + 2) piercing damage and 10 (3d6) poison damage. In addition, the\
      \ target must succeed on a DC 14 Constitution saving throw or its Strength score\
      \ is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise,\
      \ the reduction lasts until the target finishes a short or long rest."
    "name": "Spike"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/purple-slime-ccodex.png"
```
^statblock

## Environment

swamp