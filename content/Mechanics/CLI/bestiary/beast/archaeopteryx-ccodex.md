---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Archaeopteryx
---
# [Archaeopteryx](Mechanics\CLI\bestiary\beast/archaeopteryx-ccodex.md)
*Source: Creature Codex p. 108*  

*An enraged mass of malcontents storms across the tavern, overturning tables, busting bottles, and browbeating innocent patrons.*

The archaeopteryx is either a feathered lizard which flies or a bird with teeth and small claws on its wings; opinions vary. It is about the size of a raven with similar black plumage, long legs ending in talons, and a long, fan-like tail. Its beak is lined with small, sharp teeth. The archaeopteryx favors warm, coastal areas, swamps, and jungles.

> [!note] Archaeopteryx in Midgard
> 
> Scaled citizens of the Mharoti Empire have domesticated the archaeopteryx, training them in a similar fashion to falconry, though the preferred prey consists of small land mammals instead of birds in flight. Ownership of a trained archaeopteryx carries with it something of an air of sophistication and luxury, particularly among dragonborn.
^archaeopteryx-in-midgard

```statblock
"name": "Archaeopteryx (CCodex)"
"size": "Tiny"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "3d4"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "13"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "6"
"speed": "5 ft., fly 50 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The archaeopteryx doesn't provoke opportunity attacks when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The archaeopteryx makes two attacks. one with its beak and one with its\
      \ talons."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d4 + 1) piercing damage."
    "name": "Beak"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d4 + 1) slashing damage."
    "name": "Talons"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/archaeopteryx-ccodex.png"
```
^statblock

## Environment

forest, swamp