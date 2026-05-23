---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Albino Bat
---
# [Giant Albino Bat](Mechanics\CLI\bestiary\monstrosity/giant-albino-bat-ccodex.md)
*Source: Creature Codex p. 50*  

*An immense bat swoops out of the darkness. Unlike most bats, the creature is a bright smear in the shadows with dirty white fur and red eyes that gleam with a spark of cruel intelligence. All of its exposed skin is bright pink.*

Giant albino bats grow to staggering proportions. These bats are marked by Camazotz and aren't simple animals. They gather large gaggles of giant bats and swarms of common bats, claiming swaths of wilderness for their territories.

```statblock
"name": "Giant Albino Bat (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d12 + 18"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "15"
  - !!int "7"
  - !!int "14"
  - !!int "6"
"speed": "10 ft., fly 80 ft."
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 12"
"languages": "Understands Common, Abyssal but can't speak"
"cr": "3"
"traits":
  - "desc": "The bat can't use its blindsight while [deafened](Mechanics/CLI/rules/conditions.md#Deafened)."
    "name": "Echolocation"
  - "desc": "The bat has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
"actions":
  - "desc": "The bat makes two attacks: one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* 6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* 6 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d4 + 4) slashing damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 13).\
      \ Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the bat can't use its claws against another target."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/giant-albino-bat-ccodex.png"
```
^statblock

## Environment

farmland, forest, grassland, mountain, underground