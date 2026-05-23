---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Goreling
---
# [Goreling](Mechanics\CLI\bestiary\undead/goreling-ccodex.md)
*Source: Creature Codex p. 207*  

*Bits and pieces of ground-up flesh and bone given unholy life shuffles forward, eager to feed.*

Gorelings are a necromancer's answer when there just isn't enough flesh around to create a full zombie. During a fight, a chopped off appendage or two can be converted into a handy minion.

## Torturous Hunger

It is said that within each goreling is a fragment of the dead creature's soul. It seeks out the flesh of living things, desperately trying to make itself whole again.

## Leftover Parts

Gorelings come in a variety of shapes and sizes, since they are made of whatever is lying around, including whole eyes, ears, fingers, and organs. The sight of one is unsettling, often even for a necromancer.

## Cannibal Tendencies

If no living flesh is available for a goreling to consume, it will cannibalize another goreling. Specimens become larger and larger as they absorb more and more flesh. Thankfully, most decay away to nothing before they get to be too big, but a massive goreling has been mistaken for a flesh golem more than once.

## Undead Nature

The goreling doesn't require air, food, drink, or sleep.

```statblock
"name": "Goreling (CCodex)"
"size": "Small"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "14"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "20 ft."
"damage_immunities": "necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "If 6 or more gorelings are within 30 feet of one another, they become\
      \ frenzied and their attacks deal an extra 2 (1d4) necrotic damage."
    "name": "Bloodthirsty"
  - "desc": "Up to five gorelings can occupy the same space."
    "name": "Swarming"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage plus 2 (1d4) necrotic damage."
    "name": "Slam"
"reactions":
  - "desc": "When a goreling is hit but not reduced to 0 hp, it splits into two new\
      \ gorelings. Each new goreling has 1 hp, doesn't have this reaction, and is\
      \ one size smaller than the original goreling."
    "name": "Multiplying"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/goreling-ccodex.png"
```
^statblock

## Environment

any