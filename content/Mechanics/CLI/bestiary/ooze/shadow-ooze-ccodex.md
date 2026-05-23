---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Ooze
---
# [Shadow Ooze](Mechanics\CLI\bestiary\ooze/shadow-ooze-ccodex.md)
*Source: Creature Codex p. 287*  

*A globe of impenetrable darkness slithers along the floor, rippling as deep a black as can be seen by the naked eye.*

Shadow oozes are pitch-black gelatinous blobs that swallow all nearby light. They yearn to destroy any place that is not the Plane of Shadow.

## Liquid Shadow

When some of the Plane of Shadow leaks into another world, it animates into one or more shadow oozes. These creatures despise living in a place that is not the Plane of Shadow and seek to consume almost any other creature they come across. This need to consume drives the oozes. Instinct tells them that if they grow large enough, they can cover the world in darkness and transform it into a second Plane of Shadow. If the ooze is sent back to the Plane of Shadow, it rejoins with the essence of that plane and no longer exists as an ooze.

## Guards of Shadow Fey

Shadow oozes show no interest in devouring shadow fey. As a result, shadow fey use shadow oozes to serve as guardians of their greatest treasures and most hidden fortresses. The shadow fey feed prisoners to the oozes and release the gelatinous monsters when intruders are afoot or when non-ooze guards are resting.

## Ooze Nature

A shadow ooze doesn't require sleep.

```statblock
"name": "Shadow Ooze (CCodex)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "60"
"hit_dice": "9d8 + 36"
"modifier": !!int "-2"
"stats":
  - !!int "16"
  - !!int "6"
  - !!int "18"
  - !!int "2"
  - !!int "6"
  - !!int "2"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+2"
"damage_immunities": "acid, necrotic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "The ooze devours all natural and magical light within 30 feet of it.\
      \ This area is heavily obscured by darkness for all creatures except shadow\
      \ fey."
    "name": "Aura of Darkness"
  - "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The ooze makes one pseudopod attack and then uses Snuff Out."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) bludgeoning damage plus 7 (2d6) necrotic damage and 3 (1d6)\
      \ acid damage."
    "name": "Pseudopod"
  - "desc": "The ooze extinguishes one natural or magical light source within 60 feet\
      \ of it. If the light source is created by a spell, it is dispelled."
    "name": "Snuff Out"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/shadow-ooze-ccodex.png"
```
^statblock

## Environment

urban