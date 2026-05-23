---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Snow Cat
---
# [Snow Cat](Mechanics\CLI\bestiary\beast/snow-cat-ccodex.md)
*Source: Creature Codex p. 346*  

*With paws big enough to walk on top of fresh snow and senses sharp enough to hear or scent prey on windswept hills or steppes, the snow cats are superb hunters and fiercely independent.*

These panther-sized cats have the features of a lynx, including the long fur at the tips of the ears, and they can hear a snowshoe hare hopping a hundred yards away.

## Camouflage and Patience

A snow cat's coat changes with the seasons and ranges from stark white to muddy brown. They are patient hunters, preferring to ambush prey from high places. Their typical prey includes everything from mice and rabbits to goats, sheep, and small pigs.

## Friends to Small Folk

Gnomes and halflings have an affinity with these predatory animals, and it is common for several snow cats to serve as guards and scouts for a halfling village or a gnomish settlement. Stories of snow cats serving as mounts for small folk seem to have some truth to them, though this is rather uncommon.

## Feeding Frenzy

Some snow cats enjoy working as a hunting pair or as a scout for a mountain druid or steppe ranger. However, they are extremely difficult to pull away from a kill. Once they have their teeth in something, they get very possessive and cannot be convinced to part with a carcass unless given some other food in exchange. In hills or forests, they often hide a recent kill up a tree or on a high ledge and return to it over several days to devour it all

```statblock
"name": "Snow Cat (CCodex)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "10"
  - !!int "3"
  - !!int "14"
  - !!int "7"
"speed": "50 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The snow cat has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "If the snow cat surprises a creature and hits it with a bite attack,\
      \ the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape\
      \ DC 12) if it is a Medium or smaller creature."
    "name": "Stalker"
  - "desc": "The snow cat has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in snowy terrain."
    "name": "Snow Camouflage"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) slashing damage."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/snow-cat-ccodex.png"
```
^statblock

## Environment

arctic, forest