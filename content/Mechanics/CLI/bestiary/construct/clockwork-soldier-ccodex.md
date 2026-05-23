---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Clockwork Soldier
---
# [Clockwork Soldier](Mechanics\CLI\bestiary\construct/clockwork-soldier-ccodex.md)
*Source: Creature Codex p. 65*  

*The halberd-wielding soldier is made of brass and iron and stands head-and-shoulders taller than any human soldier. Steam hisses from valves at its joints, and its face is an iron mask of sharp angles and intimidating steel teeth.*

## Mighty but Linear

Clockwork soldiers are shock troops deployed by some human and dwarven societies. These soldiers can strike hard and quickly but are poorly armored and susceptible to burning out their internal furnace. Their rudimentary mechanical minds are sufficient for front-line fodder but wholly unsuited for more fluid situations—in these cases they require orders from living officers.

```statblock
"name": "Clockwork Soldier (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "13"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "The soldier is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "A single clockwork soldier's rigid movements appear silly, but, when\
      \ gathered in numbers, they become an inhuman terror. When the clockwork soldier\
      \ makes a Charisma ([Intimidation](Mechanics/CLI/rules/skills.md#Intimidation))\
      \ check, it gains a bonus on that check equal to the number of other clockwork\
      \ soldiers the target can see or hear."
    "name": "Intimidating Legions"
  - "desc": "The soldier has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 10 ft., one target. *Hit:*\
      \ 7 (1d10 + 2) slashing damage."
    "name": "Halberd"
  - "desc": "The soldier makes four halberd attacks. After taking this action, it\
      \ is [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the end of its\
      \ next turn."
    "name": "Overdrive Flurry (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/clockwork-soldier-ccodex.png"
```
^statblock

## Environment

urban