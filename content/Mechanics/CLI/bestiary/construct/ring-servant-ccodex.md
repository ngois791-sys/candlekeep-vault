---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ring Servant
---
# [Ring Servant](Mechanics\CLI\bestiary\construct/ring-servant-ccodex.md)
*Source: Creature Codex p. 318*  

*The head, arms, and torso of this massive figure are composed of metal plates surrounding a core of glowing energy. The whole resembles a vaguely humanoid figure with two metal rings inscribed with glowing runes encircling its fists.*

Ring servants are mighty constructs created by ring magic. Though large in stature, they are deceptively light due to their form being composed of energy. A ring servant stands 10 feet tall and weighs 300 pounds

## Fleeting Form

Ring servants are temporary beings, brought into existence by transmuting two simple metal rings into the weapons that surmount the creature's fists. These rings serve as the catalyst that generates the rest of the creature's form. Ring servants aren't mindless. They understand the fleeting span of their existence and don't rebel against it. Exceptions exists, where powerful ring wardens work tirelessly to imbue a ring servant with permanent existence. Such an enduring transformation is rare, however, and the resulting creature may have difficulty coming to terms with lingering in the world.

## Construct Nature

A ring servant doesn't require air, food, drink, or sleep.

```statblock
"name": "Ring Servant (CCodex)"
"size": "Large"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "18"
  - !!int "8"
  - !!int "13"
  - !!int "10"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "strength": !!int "8"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands but can't speak"
"cr": "8"
"traits":
  - "desc": "The ring servant is immune to any spell or effect that would alter its\
      \ form."
    "name": "Immutable Form"
  - "desc": "The ring servant's slam attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The ring servant makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 18\
      \ (3d8 + 5) bludgeoning damage. The target must succeed on a DC 16 Strength\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Slam"
  - "desc": "The ring servant discharges a spinning ring of magical energy. Each creature\
      \ within 20 feet of the servant must make a DC 16 Dexterity saving throw, taking\
      \ 45 (10d8) force damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Ring of Destruction (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/ring-servant-ccodex.png"
```
^statblock

## Environment

any