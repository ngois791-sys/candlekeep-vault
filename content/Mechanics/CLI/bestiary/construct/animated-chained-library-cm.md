---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animated Chained Library
---
# [Animated Chained Library](Mechanics\CLI\bestiary\construct/animated-chained-library-cm.md)
*Source: Candlekeep Mysteries p. 24*  

The three shelves are filled with books bound in iron covers, which are attached to chains that secure them to the shelves—a chained library. The reading desk is used to support the chained books while they are being read.

```statblock
"name": "Animated Chained Library (CM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "-1"
"stats":
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft. (blind beyond\
  \ this radius), passive Perception 7"
"languages": ""
"cr": "1"
"traits":
  - "desc": "If the library is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the library\
      \ move or act, that creature must succeed on a DC 15 Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check to discern that the library is animate."
    "name": "False Object"
"actions":
  - "desc": "The library makes two attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) bludgeoning damage, and if the target is a creature, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 12)."
    "name": "Chained Book"
"source":
  - "CM"
"image": "Mechanics/CLI/bestiary/construct/token/animated-chained-library-cm.webp"
```
^statblock