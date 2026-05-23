---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elite Kobold
---
# [Elite Kobold](Mechanics\CLI\bestiary\humanoid/elite-kobold-ccodex.md)
*Source: Creature Codex p. 237*  

*Swift and lightly armored, the elite are archers, miners, and trap‑makers—educated and quicker than most of their fellow tribesmen.*

## Educated Mine Bosses

Elite kobolds are generally the claws of the king, literate, able to work out sums, keen-eyed with a sling stone, and (most of all) loyal to their tribe more than to their clutchmates. [King kobolds](Mechanics/CLI/bestiary/humanoid/king-kobold-ccodex.md) take advantage of their loyalty and put them in charge of planning raids as sergeants and junior chieftains or keeping other kobolds working in the mines.

## Quick Troops

In war, elite kobolds fill the roles of slingers, engineers, and massed light infantry. They fight with great devotion, though often with little effect except through weight of numbers or the occasional notable success at undermining enemy walls.

```statblock
"name": "Elite Kobold (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Draconic"
"cr": "1"
"traits":
  - "desc": "If two elite kobolds wielding any combination of picks and shovels combine\
      \ their efforts, they gain a burrow speed of 15 feet through non-rocky soil."
    "name": "Combat Tunneler"
  - "desc": "The kobold has advantage on attack rolls against a target if at least\
      \ one of the kobold's allies is within 5 feet of the target and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Mining Pick"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d4 + 3) bludgeoning damage."
    "name": "Sling"
  - "desc": "The elite kobold opens its miner's lantern and splashes burning oil in\
      \ a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving\
      \ throw, taking 14 (4d6) fire damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Lantern Splash (Recharge 5-6)"
  - "desc": "Two elite kobolds within 5 feet of each other can combine their actions\
      \ to slam their mining picks into the ground and split the earth in a 20-foot\
      \ line that is 5 feet wide, extending from one of the pair. Each creature in\
      \ that line must make a DC 13 Dexterity saving throw. On a failure, a creature\
      \ takes 7 (2d6) bludgeoning damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, a creature takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)"
    "name": "Small but Fierce"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/elite-kobold-ccodex.png"
```
^statblock

## Environment

underground, urban