---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Simurg
---
# [Simurg](Mechanics\CLI\bestiary\celestial/simurg-ccodex.md)
*Source: Creature Codex p. 339*  

*The titanic creature's wolf-like paws reach for the ground, as its wings whip up a cloud of dust. Its canine muzzle releases an ear-splitting howl, while an incredibly long tail of multi-hued feathers drifts lazily on the wind.*

## Benevolent Guardians

Simurg are kind-hearted and protect those who dwell near them. When nesting atop a temple or sacred mountain, a simurgh often comforts and helps the local poor by healing their diseases and injuries and salving the passing of those it cannot help. After a time, the simurg flies away when too many pilgrims crowd its mountain or threaten to overwhelm a small country shrine.

## Cycle of Life

When it dies, a simurg is consumed by a heatless flame and is reborn elsewhere on the same plane in a burst of light. This leads to it often being mistaken for a phoenix.

## Enmity Towards Snakes

Simurg have a loathing of snakes and serpents and will attack them on sight. Even the lowliest of snakes understands this and will either hide from a simurg or be immediately hostile toward the simurg. 

```statblock
"name": "Simurg (CCodex)"
"size": "Gargantuan"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "108"
"hit_dice": "8d20 + 24"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "17"
  - !!int "14"
  - !!int "17"
  - !!int "16"
"speed": "20 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "All, telepathy 120 ft."
"cr": "5"
"traits":
  - "desc": "The simurg's innate spellcasting ability is Wisdom (spell save DC 14).\
      \ It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [detect poison and disease](Mechanics/CLI/spells/detect-poison-and-disease-xphb.md),\
      \ [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md), [spare the\
      \ dying](Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n**2/day each:** [cure\
      \ wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ [purify food and drink](Mechanics/CLI/spells/purify-food-and-drink-xphb.md)\n\
      \n**1/day each:** [greater restoration](Mechanics/CLI/spells/greater-restoration-xphb.md),\
      \ [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The simurg doesn't provoke an opportunity attack when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
  - "desc": "The simurg has advantage on [Perception](Mechanics/CLI/rules/skills.md#Perception)\
      \ (Wisdom) checks that rely on sight."
    "name": "Keen Sight"
"actions":
  - "desc": "The simurg makes three attacks. one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claws"
  - "desc": "The simurg beats its wings, creating wind in a 30-foot cone. Each creature\
      \ in that area must make a DC 15 Strength saving throw. On a failure, a creature\
      \ takes 27 (6d8) bludgeoning damage, is pushed 10 feet away from the simurg\
      \ and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success,\
      \ a creature takes half the damage and isn't pushed or knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Forceful Gale (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/simurg-ccodex.png"
```
^statblock

## Environment

any