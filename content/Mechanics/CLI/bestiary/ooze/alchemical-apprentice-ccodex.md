---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alchemical Apprentice
---
# [Alchemical Apprentice](Mechanics\CLI\bestiary\ooze/alchemical-apprentice-ccodex.md)
*Source: Creature Codex p. 281*  

*The pile of color-changing ooze springs to life on the refuse heap behind an alchemical laboratory.*

## It's Alive!

Alchemical apprentice oozes form spontaneously from the waste product of alchemy labs. The creatures do not travel far from the source of their birth, as it is often the only supply of food in the region.

## Assistants and Guardians

Alchemists keep these oozes as pets and assistants in their labs. The creatures possess a surprising intelligence pertaining to alchemy and can help an alchemist in her work. They require little care and can survive a very long time on a small pile of sulfur or similar compounds. They seem to absorb minerals and garbage without ill effect. The oozes often offer protection to a laboratory, as their survival is linked to its continued usage.

## Burbling and Bubbling Sounds

When an alchemical apprentice ooze uses its telepathy, it emits a series of blurbs, blops, and other rather liquid and sometimes almost-sensible sounds. Those hearing these noises often become convinced it is a dialect of Aquan.

## Ooze Nature

An alchemical apprentice ooze doesn't require sleep.

```statblock
"name": "Alchemical Apprentice (CCodex)"
"size": "Small"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "63"
"hit_dice": "14d6 + 14"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "13"
  - !!int "16"
  - !!int "6"
  - !!int "10"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
"damage_resistances": "acid, cold, fire, poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": "Understands Common but can't speak, telepathy 10 ft."
"cr": "1"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "The ooze can absorb any potion, oil, tincture, or alchemical draught\
      \ that touches it, choosing to be affected by the substance or to nullify it."
    "name": "Absorb Potion"
  - "desc": "These oozes don't fare well in sunlight and don't easily endure the rigors\
      \ of travel. The creature dies if it is directly exposed to sunlight for more\
      \ than 1 minute. Each day it is more than 1 mile from its \"birth\" place, the\
      \ ooze must succeed on a DC 12 Constitution saving throw or die."
    "name": "Perishable"
  - "desc": "The alchemical apprentice can produce one common potion, oil, tincture,\
      \ or alchemical draught each day. If no creature is there to bottle, or otherwise\
      \ collect, the substance when it is produced, it trickles away and is wasted."
    "name": "Produce Potion (1/Day)"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d8 + 1) bludgeoning damage."
    "name": "Pseudopod"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 60 ft., one target. *Hit:*\
      \ 10 (3d6) acid, cold, fire, or poison damage."
    "name": "Magical Burble"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/alchemical-apprentice-ccodex.png"
```
^statblock

## Environment

urban