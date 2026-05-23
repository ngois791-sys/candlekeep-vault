---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- The Barbed
---
# [The Barbed](Mechanics\CLI\bestiary\humanoid/the-barbed-ccodex.md)
*Source: Creature Codex p. 263*  

*A brawny looking kobold brandishes a manticore spike driven through its scaled hand.*

## Leaders

The barbed are physically stronger than their brethren and bear the scars of living close to manticores. They are devoted to Mantik and believe he is a divine being who will lead them to victory over the drakes of the waste and the dragons of the mountains.

## Marked

The barbed are known by the large tail spike (from Mantik himself) driven through their wrist and hand. They are immune to the poison that still seeps from the spike.

```statblock
"name": "The Barbed (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "8"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Draconic"
"cr": "1"
"traits":
  - "desc": "The kobold has advantage on attack rolls against a creature if at least\
      \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) slashing damage and 3 (1d6) poison damage. The target must succeed\
      \ on a DC 12 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn."
    "name": "Barbed Slash"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Javelin"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/the-barbed-ccodex.png"
```
^statblock

## Environment

badlands