---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental/pech
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pech Stonemaster
---
# [Pech Stonemaster](Mechanics\CLI\bestiary\elemental/pech-stonemaster-ccodex.md)
*Source: Creature Codex p. 295*  

Natives to the Elemental Plane of Earth, the stalwart and humble pech often cross to the Material Plane to escape threats in their homeland, seek valuable gems and ore, or serve masters in the formation of great stone creations. They also trade with topsiders to obtain new stoneworking equipment, and they have a strong affinity for the ale that they cannot brew themselves.

## Carved from Stone

Pech are small in size, slightly taller and broader than deep gnomes. Their long arms and legs are made of knotted muscles that appear chiseled from stone. Slate grey eyes bulge from their angular heads. They rarely have hair on their heads or bodies, and those that do sprout hair grow it in thick strands as sharp and rigid as a metal brush. A pech's fingers and toes are long and thin and topped with long, sharp nails as hard as stone. These nails allow them to climb sheer rock walls, acting as pitons.

## One with the Stone

Pech are born to work stone, to live their lives with a pickaxe in one hand and a hammer in the other, and to die with the understanding that their spirits will merge with the stone for eternity, forever surrounding their progeny. Pech society is built around the notion that pure enlightenment can be attained by communing with the stone that surrounds them. The more one works the stone, the closer one gets to becoming one with it: eternal, immovable, and stalwart. Pech mine the valuable substances provided by the stone and train their minds to harmonize with the rock. Those that master certain techniques become stonemasters, who often lead a clan of pech. Truly talented and dedicated stonemasters that reach a higher level of enlightenment with the stone might become lithlords, who travel from clan to clan and teach the young pech the way of the stone.

## Servants of the Giants

The pech sometimes come to the surface world to act as servants of the stone giants. Pech transport bring enormous stone monoliths to the heathers and moors of otherwise stone-free land, which the stone giants can then use for their strange, mystical ceremonies. Decades later, humans walking through the flat fields can only wonder how these huge stone monoliths seemingly appeared out of nowhere.

## Elemental Nature

A pech doesn't require air, food, drink, or sleep.

```statblock
"name": "Pech Stonemaster (CCodex)"
"size": "Small"
"type": "elemental"
"subtype": "pech"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d6 + 30"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "11"
  - !!int "16"
  - !!int "11"
"speed": "20 ft., climb 10 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Common, Undercommon, Terran"
"cr": "4"
"traits":
  - "desc": "The pech stonemaster's innate spellcasting ability is Wisdom (spell save\
      \ DC 13). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\n**3/day\
      \ each:** [shatter](Mechanics/CLI/spells/shatter-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "While in bright light, the pech has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Light Sensitivity"
  - "desc": "As a bonus action, the pech can draw on the power of unworked stone,\
      \ as long as it is in contact with stone. Until the end of the pech's next turn,\
      \ it gains resistance to piercing and slashing damage."
    "name": "One with the Stone (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "The pech stonemaster makes two attacks. one with its pick and one with\
      \ its hammer. If the pech stonemaster hits the same target with both attacks,\
      \ the target must succeed on a DC 13 Constitution saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the start of its next turn."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage."
    "name": "Pick"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) bludgeoning damage."
    "name": "Hammer"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/pech-stonemaster-ccodex.png"
```
^statblock

## Environment

mountain, underground