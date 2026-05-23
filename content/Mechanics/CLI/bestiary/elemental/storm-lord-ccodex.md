---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Storm Lord
---
# [Storm Lord](Mechanics\CLI\bestiary\elemental/storm-lord-ccodex.md)
*Source: Creature Codex p. 139*  

*The rough shape of a man with a crown and beard of sea foam rises out of the center of the maelstrom on a swirling pillar of dark clouds and seawater. Raging, his fist clutches a crackling ball of lightning.*

## Violent Sea Kings

Native to the Plane of Water, storm lords make war on each other over territory and pride, but they also command their lesser elemental kin in battle against intruders from other planes. Less frequently, storm lords leave their home plane to address some perceived wrong or slight, but, in some cases, they are summoned to serve greater elemental tempests and hurricanes.

## Voice of Thunder

Foul tempered at the best of times, storm lords consider communication with non-aquatic creatures to be beneath them, preferring to settle disagreements with violence.

## Acknowledged Kinship

While they spurn most diplomatic attempts, storm lords receive such overtures more charitably when brought to them by aquatic creatures.

## Elemental Nature

The storm lord doesn't require air, food, drink, or sleep.

```statblock
"name": "Storm Lord (CCodex)"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "17d12 + 51"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "18"
"speed": "50 ft., fly 50 ft. (hover), swim 90 ft."
"saves":
  - "strength": !!int "10"
  - "constitution": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "acid; lightning; thunder; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Aquan"
"cr": "13"
"traits":
  - "desc": "The storm lord is surrounded in a 120-foot-radius by a ferocious storm.\
      \ The storm imposes disadvantage on ranged weapon attack rolls and Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks based on sight or hearing within the area. The storm lord's own senses\
      \ and attacks are not impaired by this trait.\n\nThe tempest extinguishes open\
      \ flames and disperses fog. A flying creature in the tempest must land at the\
      \ end of its turn or fall.\n\nEach creature that starts its turn within 30 feet\
      \ of the storm lord must succeed on a DC 16 Strength saving throw or be pushed\
      \ 15 feet away from the storm lord. Any creature within 30 feet of the storm\
      \ lord must spend 2 feet of movement for every 1 foot it moves when moving closer\
      \ to the storm lord."
    "name": "Tempest"
"actions":
  - "desc": "The storm lord makes two slam attacks or two lightning bolt attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 29 (7d6 + 5) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Ranged Spell Attack:* +9 to hit, range 60 ft., one target. *Hit:*\
      \ 31 (7d8) lightning damage."
    "name": "Lightning Bolt"
  - "desc": "The storm lord creates a peal of ear-splitting thunder. Each creature\
      \ within 30 feet of the storm lord must make a DC 17 Constitution saving throw.\
      \ On a failure, a target takes 54 (12d8) thunder damage and is [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \ On a success, a target takes half the damage but isn't [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \ The deafness lasts until it is lifted by the [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md)\
      \ spell or similar magic."
    "name": "Thunder Clap (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/storm-lord-ccodex.png"
```
^statblock

## Environment

underwater