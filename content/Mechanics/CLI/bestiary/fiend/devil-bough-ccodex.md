---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Devil Bough
---
# [Devil Bough](Mechanics\CLI\bestiary\fiend/devil-bough-ccodex.md)
*Source: Creature Codex p. 302*  

The devil bough appears as an ordinary tree. It grows in the shape of the trees nearby to increase its chances at surviving past the sapling stage. Each devil bough has a single, fleshy, twisting bough tipped with a spindly, clawed hand. It keeps its this hand hidden as best it can, using it only to catch and devour small animals who flit through its branches.

## Devourers of Magic

Devil bough trees have a natural ability to feed on magical energy, gaining strength and growth spurts from consuming a spell or magical item. For this reason, the trees often inhabit places where magic is found: enchanted pools or interplanar portals.

## Cannibals

The devil bough will gladly eat its own kind or other fiends to sustain itself. However, if meat is scarce in a region, the trees are known to work together along with execrable shrubs to ensure survival.

```statblock
"name": "Devil Bough (CCodex)"
"size": "Huge"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d12 + 36"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "10"
  - !!int "10"
  - !!int "8"
"speed": "10 ft."
"saves":
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "tremorsense 60 ft., passive Perception 13"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "The devil bough has advantage on attack rolls against any creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by its bite attack."
    "name": "Grinding Maw"
  - "desc": "The devil bough knows if a creature within 60 feet of it is evil-aligned\
      \ or not."
    "name": "Like Calls to Like"
"actions":
  - "desc": "The devil bough makes one claw attack and one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (3d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (3d8 + 4) piercing damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 15).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and the devil bough can't make bite attacks against other targets."
    "name": "Bite"
"reactions":
  - "desc": "When a spell of 5th level or lower is cast within 100 feet of the devil\
      \ bough, it attempts to synthesize the magic. The spell resolves as normal,\
      \ but the devil bough has a 50% chance of regaining 5 (1d10) hp per level\
      \ of the spell cast."
    "name": "Arcasynthesis"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/devil-bough-ccodex.png"
```
^statblock

## Environment

any