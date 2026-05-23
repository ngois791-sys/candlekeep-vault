---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ghost Boar
---
# [Ghost Boar](Mechanics\CLI\bestiary\monstrosity/ghost-boar-ccodex.md)
*Source: Creature Codex p. 169*  

*A hulking boar tosses its head and charges, fading in and out of existence as it moves.*

## Magical Creation

A magical experiment on a group of albino boars went awry, releasing the enormous beasts into the wild to proliferate.

## Ghostly Form

Ghost boars earn their name from their ability to temporarily become incorporeal. When the ghost boar moves, it becomes ghostly and insubstantial, passing through obstacles as it charges its prey.

## A Soul Depot

A strange side effect of the magical accident that created the ghost boar appears in the strongest of them: they are magnets for souls of the recently departed. The souls can use the meager spiritual magic of the ghost boar to communicate with those nearby.

```statblock
"name": "Ghost Boar (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "16"
  - !!int "7"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Understands Common but can't speak"
"cr": "3"
"traits":
  - "desc": "If the boar moves at least 20 feet straight toward a target and then\
      \ hits it with a tusk attack on the same turn, the target takes an extra 10\
      \ (3d6) slashing damage. If the target is a creature, it must succeed on a\
      \ DC 14 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "When the ghost boar moves, it becomes temporarily incorporeal. It can\
      \ move through creatures and objects as if they were difficult terrain. It takes\
      \ 5 (1d10) force damage and is pushed to the closest unoccupied space if it\
      \ ends its turn inside an object."
    "name": "Incorporeal Jaunt"
  - "desc": "If the boar takes 15 damage or less that would reduce it to 0 hp, it\
      \ is reduced to 1 hp instead."
    "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Tusk"
"reactions":
  - "desc": "When a creature hits the ghost boar with a melee weapon attack, the ghost\
      \ boar can make one tusk attack against the creature. The ghost boar must see\
      \ the attacker and be within 5 feet of it."
    "name": "Tusk Swipe"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/elder-ghost-boar-ccodex.png"
```
^statblock

## Environment

farmland, grassland