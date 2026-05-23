---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thief Lord
---
# [Thief Lord](Mechanics\CLI\bestiary\humanoid/thief-lord-ccodex.md)
*Source: Creature Codex p. 406*  

It takes more than a quick blade to lead thieves. The thief lord makes use of considerable personal charm and a keen mind to direct the efforts of its fellows. Most thief lords prefer to keep one foot in law-abiding society and one foot in crime, though which world receives the greater part of their attention varies. Paranoid of assassination attempts by rivals, the thief lord takes minute doses of various poisons daily and has developed resistance to such substances.

```statblock
"name": "Thief Lord (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "[glamoured studded leather armor](Mechanics/CLI/items/glamoured-studded-leather-xdmg.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "12"
  - !!int "14"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"damage_resistances": "poison"
"senses": "passive Perception 15"
"languages": "Thieves' cant"
"cr": "8"
"traits":
  - "desc": "On each of its turns, the thief lord can use a bonus action to take the\
      \ [Dash](Mechanics/CLI/rules/actions.md#Dash), [Disengage](Mechanics/CLI/rules/actions.md#Disengage),\
      \ or [Hide](Mechanics/CLI/rules/actions.md#Hide) action."
    "name": "Cunning Action"
  - "desc": "If the thief lord is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half damage, the thief lord instead takes\
      \ no damage if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The thief lord deals an extra 14 (4d6) damage when it hits a target\
      \ with a weapon attack and has advantage on the attack roll, or when the target\
      \ is within 5 feet of an ally of the thief lord that isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and the thief lord doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "The thief lord makes two attacks with its rapier."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Rapier"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 30/120 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "When a creature the thief lord can see targets it with an attack, the\
      \ thief lord can sidestep behind an ally within 5 feet of it, moving to an unoccupied\
      \ space within 5 feet of the ally. The chosen ally becomes the target of the\
      \ attack instead."
    "name": "Protect Me"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/thief-lord-ccodex.png"
```
^statblock

## Environment

urban