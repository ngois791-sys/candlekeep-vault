---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chuhaister
---
# [Chuhaister](Mechanics\CLI\bestiary\giant/chuhaister-ccodex.md)
*Source: Creature Codex p. 62*  

*A brutish forest-dwelling giant whose loathing for fey creatures is matched only by its love of power. It is a tall muscled humanoid with bark-like skin that wears animal skins and adorns itself with the skulls of its fey victims.*

## Imprisoner

Chuhaister detest fey creatures of any alignment, taking delight in capturing them and destroying their villages. Many chuhaister carry an unfortunate fey as a pet, which they keep in a wooden cage atop their heads. The giant's nullifying magic prevents the creature from using its spells to escape.

## Chieftains

Chuhaister sometimes lead small clans of forest marauders (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), serving as chieftain to the dim-witted giants. In this role, they organize raids on fey communities within their territory and terrorize other settlements near their border. As chieftain, the chuhaister uses its clan to build great wooden fortifications in the deep recesses of the forest.

```statblock
"name": "Chuhaister (CCodex)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"modifier": !!int "-5"
"stats":
  - !!int "22"
  - !!int "1"
  - !!int "1"
  - !!int "1"
  - !!int "10"
  - !!int "11"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "Giant, Orc, Sylvan"
"cr": "7"
"traits":
  - "desc": "Creatures of the fey type don't recover spells during a long rest while\
      \ within 60 feet of the chuhaister. In addition, the chuhaister automatically\
      \ sees through magical illusions created by spells of 3rd level or lower and\
      \ has advantage on saving throws and ability checks to detect or see through\
      \ illusion spells of 4th level or higher."
    "name": "Feybane"
  - "desc": "While in bright light, the chuhaister has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Light Sensitivity"
"actions":
  - "desc": "The chuhaister makes two greatclub attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 23 (5d6 + 6) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "*Ranged Weapon Attack:* +2 to hit, range 30/120 ft., one target. *Hit:*\
      \ 33 (5d10 + 6) bludgeoning damage."
    "name": "Rock"
"reactions":
  - "desc": "When the chuhaister or one ally within 30 feet of it is hit by an attack,\
      \ the chuhaister can create a magical, wooden barrier that interrupts the attack.\
      \ The attack causes no damage. The shield splinters and disappears afterwards."
    "name": "Deadfall Shield (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/chuhaister-ccodex.png"
```
^statblock

## Environment

forest