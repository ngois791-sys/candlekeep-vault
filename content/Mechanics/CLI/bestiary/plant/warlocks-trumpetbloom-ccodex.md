---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Warlock's Trumpetbloom
---
# [Warlock's Trumpetbloom](Mechanics\CLI\bestiary\plant/warlocks-trumpetbloom-ccodex.md)
*Source: Creature Codex p. 372*  

*This plant stands taller than an ogre, and it shuffles forward on a thick mass of tangled roots. A wicked-looking stinger, glistening with venom, flicks out of its "mouth" on the end of a whip-like tongue.*

## Born for War

Warlock's trumpetblooms were created by a mage and his cabal through a series of bizarre experiments that involved cross-breeding native jungle orchids and giant carnivorous plants with alien seed pods. The mage supervised the experiments personally, frequently consulting a living brain he kept in a glass cylinder. When the first trumpetblooms were propagated from seedlings, the mages were astounded at how quickly the plants grew and subsequently reproduced. An unstoppable army was within their grasp—or so they believed. The mages' optimism proved misguided when the trumpetblooms broke free of the glasshouses and attacked their masters.

## Aggressive Carnivores

Warlock's trumpetblooms are aggressive and intelligent plant creatures that seek to spread their seed pods throughout the jungle and beyond. Trumpetblooms are carnivores, feeding on the small deer, giant insects, and snakes that live in the jungle. They happily devour humanoid flesh when available, using their roots to soak up the nutrients from a decomposing corpse.

```statblock
"name": "Warlock's Trumpetbloom (CCodex)"
"size": "Large"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "18"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "20 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 13"
"languages": "Understands but can't speak"
"cr": "7"
"traits":
  - "desc": "A creature who attempts to communicate with the trumpetbloom must succeed\
      \ on a DC 15 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. The creature can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success."
    "name": "Alien Mind"
  - "desc": "The trumpetbloom has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The trumpetbloom makes three attacks. one with its stinger and two with\
      \ its tendrils."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 16 (2d12 + 3) piercing damage, and the target must succeed on a DC 15 Constitution\
      \ saving throw or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The target is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way.\
      \ It can repeat the saving throw at the end of each of its turns, ending the\
      \ effect on itself on a success."
    "name": "Stinger"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 15 ft., one target. *Hit:*\
      \ 10 (2d6 + 3) bludgeoning damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Medium or smaller creature. The trumpetbloom has\
      \ two tendrils, each of which can grapple only one target."
    "name": "Tendril"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/warlocks-trumpetbloom-ccodex.png"
```
^statblock

## Environment

forest