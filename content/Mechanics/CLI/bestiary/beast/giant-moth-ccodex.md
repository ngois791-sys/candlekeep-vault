---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Moth
---
# [Giant Moth](Mechanics\CLI\bestiary\beast/giant-moth-ccodex.md)
*Source: Creature Codex p. 178*  

*The wings of this giant insect feature bold patterns that give it camouflage and intimidate would-be predators. Two large antennae quiver from its head, and a long, sharp tongue-like proboscis unfurls during feeding.*

Moths are old creatures, and they have survived through ages and events that other species have not. For this reason, though their coloration may not be as vibrant as butterflies and their flight not as graceful as dragonflies, moths are considered by many to possess great wisdom.

## Symbols of Death

Some cultures believe certain varieties of moths are omens of death or of the passing of one phase into another. These moths typically have darker coloration and may feature ominous-looking patterns on their wings.

```statblock
"name": "Giant Moth (CCodex)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "10"
  - !!int "3"
  - !!int "10"
  - !!int "7"
"speed": "25 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The giant moth has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Antennae"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) piercing damage."
    "name": "Proboscis"
  - "desc": "A 10-foot radius cloud of fine powder disperses from the giant moth.\
      \ Each creature in that area must succeed on a DC 10 Constitution saving throw\
      \ or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) until the end of\
      \ its next turn."
    "name": "Powdery Wings (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/giant-moth-ccodex.png"
```
^statblock

## Environment

any