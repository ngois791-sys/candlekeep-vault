---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elder Ghost Boar
---
# [Elder Ghost Boar](Mechanics\CLI\bestiary\monstrosity/elder-ghost-boar-ccodex.md)
*Source: Creature Codex p. 169*  

*A hulking boar tosses its head and charges, fading in and out of existence as it moves.*

## Magical Creation

A magical experiment on a group of albino boars went awry, releasing the enormous beasts into the wild to proliferate.

## Ghostly Form

Ghost boars earn their name from their ability to temporarily become incorporeal. When the ghost boar moves, it becomes ghostly and insubstantial, passing through obstacles as it charges its prey.

## A Soul Depot

A strange side effect of the magical accident that created the ghost boar appears in the strongest of them: they are magnets for souls of the recently departed. The souls can use the meager spiritual magic of the ghost boar to communicate with those nearby.

```statblock
"name": "Elder Ghost Boar (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d12 + 33"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "17"
  - !!int "7"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Understands Common but can't speak"
"cr": "6"
"traits":
  - "desc": "If the ghost boar moves at least 20 feet straight toward a target and\
      \ then hits it with a tusk attack on the same turn, the target takes an extra\
      \ 14 (4d6) slashing damage If the target is a creature, it must succeed on\
      \ a DC 17 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "As ghost boar."
    "name": "Incorporeal Jaunt"
  - "desc": "If the elder ghost boar takes 20 damage or less that would reduce it\
      \ to 0 hp, it is reduced to 1 hp instead."
    "name": "Relentless (Recharges after a Short or Long Rest)"
  - "desc": "When a creature dies within 30 feet of the ghost boar, its spirit can\
      \ possess the boar, incapacitating the boar for up to 1 minute. During this\
      \ time, the spirit is affected by the speak with dead spell, speaking through\
      \ the ghost boar's mouth."
    "name": "Spirit Conduit"
"actions":
  - "desc": "The elder ghost boar makes two tusk attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 16\
      \ (3d6 + 6) slashing damage."
    "name": "Tusk"
"reactions":
  - "desc": "When it is targeted by an attack or spell or is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained), the ghost boar\
      \ becomes momentarily incorporeal. It gains resistance to any damage that isn't\
      \ force and ends any [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained) conditions on\
      \ itself."
    "name": "Ghostly Slip"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/elder-ghost-boar-ccodex.png"
```
^statblock

## Environment

farmland, grassland