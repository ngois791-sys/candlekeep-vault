---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant/as-its-patron-deity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dvarapala
---
# [Dvarapala](Mechanics\CLI\bestiary\giant/dvarapala-ccodex.md)
*Source: Creature Codex p. 137*  

*This fearsome warrior-giant stands guard in front of a pair of great doors, brandishing a large, bronze mace. He has a huge, block-like physique, thick arms and legs, large ears, and a monstrous face dominated by a mouth full of sharp teeth. He wears a skirt and several pieces of gold jewelry but is otherwise unclothed, as if to better show off his impressive belly.*

## Divine Door Guardians

Dvarapala are a race of semi‑divine giants who serve the various gods of the East, standing guard over their most sacred temples and shrines. Normally encountered in pairs or in even numbers, one dvarapala will be stationed on each side of the temple entrance with another pair inside, guarding the doorway into the inner sanctum. The dvarapala take orders from the god's servants, ensuring that only those allowed to enter the temple are admitted.

## Touched by the Gods

Although all dvarapala are both larger-than-life and martial, their appearances and costumes vary based on the attributes of their divine master. A dvarapala serving a god of war, for example, might appear more ferocious, while one sworn to a god of the morning might have skin that gleams with a golden glow. Its weapons vary as well, but huge gadas (maces) are favored by most dvarapala to knock intruders down the temple steps or bludgeon them into submission.

```statblock
"name": "Dvarapala (CCodex)"
"size": "Huge"
"type": "giant"
"subtype": "as its patron deity"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "18"
  - !!int "10"
  - !!int "16"
  - !!int "9"
"speed": "40 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Common, telepathy 120 ft."
"cr": "5"
"traits":
  - "desc": "The dvarapala's innate spellcasting ability is Wisdom (spell save DC\
      \ 14). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md) (2d8)\n\
      \n**3/day each:** [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\n\
      **1/day each:** [gust of wind](Mechanics/CLI/spells/gust-of-wind-xphb.md), [wind\
      \ wall](Mechanics/CLI/spells/wind-wall-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "In addition to Common, a dvarapala can speak one language associated\
      \ with its patron deity. Abyssal (chaotic or neutral evil deities), Celestial\
      \ (good deities), or Infernal (lawful evil deities). A dvarapala who serves\
      \ a neutral deity knows a language that is most appropriate for service to its\
      \ deity (such as Primordial for a neutral god of elementals or Sylvan for a\
      \ neutral god of nature)."
    "name": "Divine Words"
  - "desc": "The dvarapala has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "The dvarapala has advantage on saving throws against spells and other\
      \ magical effects. You Shall Not Pass! The dvarapala can make an opportunity\
      \ attack when a hostile creature moves within its reach as well as when a hostile\
      \ creature moves out of its reach. It gets one extra reaction that be used only\
      \ for opportunity attacks."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 25 (6d6 + 4) bludgeoning damage and if the target is Large or smaller it\
      \ must succeed on a DC 16 Strength saving throw or be pushed up to 15 feet away\
      \ from the dvarapala."
    "name": "Gada"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 10 ft. or range\
      \ 20/60 ft., one target. *Hit:* 14 (3d6 + 4) piercing damage."
    "name": "Javelin"
  - "desc": "The dvarapala targets one or more creatures it can see within 10 feet\
      \ of it. Each target must make a DC 16 Strength saving throw, taking 24 (7d6)\
      \ bludgeoning damage on a failed save, or half as much damage on a successful\
      \ one. A creature who fails its save is pushed 5 feet away from the dvarapala."
    "name": "Sweeping Strike (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/dvarapala-ccodex.png"
```
^statblock

## Environment

urban