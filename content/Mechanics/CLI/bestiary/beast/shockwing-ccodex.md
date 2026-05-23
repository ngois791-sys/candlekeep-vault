---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shockwing
---
# [Shockwing](Mechanics\CLI\bestiary\beast/shockwing-ccodex.md)
*Source: Creature Codex p. 179*  

*Visibly charged with electricity, these giant moths range from cerulean to navy blue. Their long, crooked legs dangle from their bodies like bolts of lightning.*

## Free in the Storm

The shockwing's presence predicts a great electrical storm when these giant moths breed. They are wild and unpredictable during storms, and many woodland creatures seek shelter from them as much as from the rain.

```statblock
"name": "Shockwing (CCodex)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "14"
  - !!int "3"
  - !!int "10"
  - !!int "7"
"speed": "25 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "lightning"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The giant moth has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Antennae"
  - "desc": "At the start of each of the shockwing's turns, each creature within 5\
      \ feet of it must succeed on a DC 12 Constitution saving throw or take 2 (1d4)\
      \ lightning damage. This trait doesn't function if the shockwing has used its\
      \ Fulminating Wings in the last 24 hours."
    "name": "Charged"
"actions":
  - "desc": "The shockwing makes two proboscis attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage and 2 (1d4) lightning damage."
    "name": "Proboscis"
  - "desc": "A 20-foot radius burst of electricity releases from the shockwing. Each\
      \ creature in that area must succeed on a DC 12 Constitution saving throw or\
      \ be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the end of its\
      \ next turn."
    "name": "Fulminating Wings (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/shockwing-ccodex.png"
```
^statblock

## Environment

forest, grassland