---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Rimewing
---
# [Rimewing](Mechanics\CLI\bestiary\beast/rimewing-ccodex.md)
*Source: Creature Codex p. 178*  

*The wings of this giant moth resemble a stunningly complex snowflake. Its long icicle-shaped antennae click and clatter as it flies across the snowy northern woods.*

## Captivating

Rimewings are prized for their wings, which feature a magically compelling pattern and coloration. They are found in cold and snow-covered climes, where they use their magic to draw in prey.

```statblock
"name": "Rimewing (CCodex)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "3"
  - !!int "10"
  - !!int "7"
"speed": "25 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "cold"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The giant moth has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Antennae"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Proboscis"
  - "desc": "A 20-foot radius cloud of colorful ice crystals extends from the rimewing.\
      \ Each creature in that area must succeed on a DC 10 Wisdom saving throw or\
      \ be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) by the rimewing for\
      \ 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed) by the\
      \ rimewing, a creature is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and must move up to its speed toward the rimewing at the start of its turn,\
      \ stopping when it is 5 feet away. A [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Frosted Wings (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/rimewing-ccodex.png"
```
^statblock

## Environment

arctic, forest