---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Clockwork Servant
---
# [Clockwork Servant](Mechanics\CLI\bestiary\construct/clockwork-servant-ccodex.md)
*Source: Creature Codex p. 65*  

*The mechanical servant offers drinks and conversation, though it is prone to uncoordinated jerks and occasional graceless, lurching movements.*

## Advanced Social Skills

Clockwork servants have few defensive capabilities, though they boast enhanced minds compared to other clockwork automata. Particularly expensive clockwork servants can even carry on full conversations, though their memory gears must be routinely replaced or they develop something quite close to emotion and free will. They understand the basic language, etiquette, and protocol of their country of creation.

```statblock
"name": "Clockwork Servant (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "13"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "25 ft."
"skillsaves":
  - "name": "[Animal Handling](Mechanics/CLI/rules/skills.md#Animal%20Handling)"
    "desc": "+3"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+3"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common"
"cr": "1/8"
"traits":
  - "desc": "The servant can cast the mending and prestidigitation cantrips at will\
      \ without requiring spell components."
    "name": "Domestic Retainer"
  - "desc": "The servant is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The servant has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/clockwork-servant-ccodex.png"
```
^statblock

## Environment

urban