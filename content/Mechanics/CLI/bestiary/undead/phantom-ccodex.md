---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Phantom
---
# [Phantom](Mechanics\CLI\bestiary\undead/phantom-ccodex.md)
*Source: Creature Codex p. 296*  

*The dark, vague outline of a person flickers in the gloom.*

The restless, angry spirits of those who have met a violent end, phantoms wander the night, vacillating between confusion, outrage, and misery.

## Bewildered Victims

Those who have attempted communication with phantoms report that the phantoms have little, if any, awareness of their undead state, and they seem disoriented and permanently trapped in the traumatic moments surrounding their deaths.

## Accidental Killers

Phantoms often approach the living with what seems like benign intent, but, when they draw close, they grab hold of living creatures and give voice to a terrifying, unearthly moan. They seem to be attempting communication, but, when their actions lead to the death of the creature, they wander away to find another.

## Undead Nature

A phantom doesn't require air, food, drink, or sleep.

```statblock
"name": "Phantom (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "12"
  - !!int "10"
  - !!int "6"
  - !!int "12"
  - !!int "12"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "The languages it knew in life"
"cr": "1"
"traits":
  - "desc": "The phantom can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the phantom has disadvantage on attack rolls, ability\
      \ checks, and saving throws."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d6) necrotic damage."
    "name": "Ghostly Grasp"
  - "desc": "The phantom emits an eerie moan. Each creature within 30 feet that isn't\
      \ an undead or a construct must make a DC 13 Wisdom saving throw. On a failure,\
      \ the target takes 9 (2d8) cold damage and is [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of the phantom's next turn. If the target fails the saving throw\
      \ by 5 or more, it is also [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for the same duration. On a success, the target takes half the damage and\
      \ isn't [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Chilling Moan (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/phantom-ccodex.png"
```
^statblock

## Environment

any