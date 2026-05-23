---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire Thrall
---
# [Vampire Thrall](Mechanics\CLI\bestiary\humanoid/vampire-thrall-ccodex.md)
*Source: Creature Codex p. 368*  

*Servants and lackeys of vampires, vampire thralls receive blood from their masters' veins periodically, granting them a number of benefits so long as they continue to receive their masters' blood.*

Vampire thralls are not themselves undead, though many are hopeful they soon will be. Ingesting humanoid blood is in no way beneficial to a thrall, but this fact has not prevented many from trying.

```statblock
"name": "Vampire Thrall (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "12"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "10"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "4"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "If the thrall has not consumed 1 ounce of blood from a vampire within\
      \ the past week, it is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 week and it loses darkvision and its Keen Senses, Limited Regeneration,\
      \ Spider Climb, and Sunlight Sensitivity traits until it consumes 1 ounce of\
      \ vampire blood."
    "name": "Blood-bound"
  - "desc": "The thrall has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "The thrall regains 2 hp at the start of its turn if it has at least 1\
      \ hp and isn't in sunlight. If the thrall takes radiant damage, this trait doesn't\
      \ function at the start of the thrall's next turn."
    "name": "Limited Regeneration"
  - "desc": "The thrall can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in sunlight, the thrall has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The vampire thrall makes two longsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage or 7 (1d10 + 2) slashing damage if used with\
      \ two hands."
    "name": "Longsword"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/vampire-thrall-ccodex.png"
```
^statblock

## Environment

any