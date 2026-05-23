---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/skeleton
statblock: inline
statblock-link: "#^statblock"
aliases:
- Monarch Skeleton
---
# [Monarch Skeleton](Mechanics\CLI\bestiary\undead/monarch-skeleton-ccodex.md)
*Source: Creature Codex p. 341*  

*An undead monarch, tight white skin clinging to its skeletal visage and a crooked oversized crown dangling precariously from the top of its skull, stares with glee at the coming battle.*

## Undead King

Necromantic energy seeps from the monarch and warps the reality of the mortal world it corrupts. It brings all that appear before it to their knees in reverence. A powerful arcane necromancer could discover and unlock the ability to command armies of undead with the remains of a monarch skeleton, but such research risks madness.

## Dread Blade

The blade the monarch wields is a powerful and cursed weapon when in the hands of the monarch. Infused with corruption, it slices through what remains of a mortal coil

## Ghostly Minions

The monarch skeleton can call upon the greatest warriors who have fallen before to rise and hold its enemies at bay. The monarch is often accompanied by a royal guard of skeletons eager to defend their sovereign.

## Undead Nature

The monarch skeleton doesn't require air, food, drink, or sleep.

```statblock
"name": "Monarch Skeleton (CCodex)"
"size": "Medium"
"type": "undead"
"subtype": "skeleton"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md)"
"hp": !!int "142"
"hit_dice": "15d8 + 75"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "14"
  - !!int "20"
  - !!int "12"
  - !!int "14"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "The languages it knew in life"
"cr": "9"
"traits":
  - "desc": "The monarch skeleton and any skeletons within 30 feet of it have advantage\
      \ on attack rolls against a creature if at least one of the skeleton's allies\
      \ is within 5 feet of the creature and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Master Tactician"
  - "desc": "As a bonus action, the monarch commands a skeleton within 30 feet of\
      \ it to make one attack as a reaction against a creature the monarch attacked\
      \ this round."
    "name": "Sovereign's Command"
  - "desc": "The monarch skeleton and any skeletons within 30 feet of it have advantage\
      \ on saving throws against effects that turn undead."
    "name": "Turning Defiance"
"actions":
  - "desc": "The monarch skeleton makes two dreadblade attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) slashing damage plus 7 (2d6) necrotic damage. If the target\
      \ is a creature, it must succeed on a DC 17 Constitution saving throw or its\
      \ hp maximum is reduced by an amount equal to the necrotic damage taken. This\
      \ reduction lasts until the creature finishes a long rest. The target dies if\
      \ this effect reduces its hp maximum to 0."
    "name": "Dreadblade"
  - "desc": "Each non-skeleton creature within 30 feet of the monarch must succeed\
      \ on a DC 16 Dexterity saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by ghostly, skeletal hands for 1 minute. A [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ target takes 10 (3d6) necrotic damage at the start of each of its turns.\
      \ A creature, including the target, can take its action to break the ghostly\
      \ restraints by succeeding on a DC 16 Strength check."
    "name": "Grasp of the Grave (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/monarch-skeleton-ccodex.png"
```
^statblock

## Environment

any