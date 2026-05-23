---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flesh Reaver
---
# [Flesh Reaver](Mechanics\CLI\bestiary\undead/flesh-reaver-ccodex.md)
*Source: Creature Codex p. 160*  

*This pale, emaciated abomination crawls on four elongated, dissimilar limbs affixed to its inverted torso. Its long neck coils and slithers as its eyeless head searches for prey, accompanied by the sound of chattering teeth. Black ichor oozes from a stained hole at the base of its neck.*

## Terrifying Sight

A flesh reaver is a grotesque thing made from mismatched parts of the slain. Though it has no eyes, it searches its surroundings with other preternatural senses that unnerve even the most steadfast warrior. Its teeth chatter endlessly as it scours an area, the sound chilling the blood of its quarry.

## Hounds of War

Undead nations have many soldiers among their ranks, and every army needs a way to hunt down its enemies. The flesh reaver's keen senses and agility make it perfect for this task. Necromancers and ghoul barons bind the flesh reavers with magical chains in small packs to hunt down and destroy their enemies.

## Consuming Flesh

Like the ghouls it often serves, the flesh reaver is driven by an almost uncontrollable hunger, a slave to its need to feed on living flesh. Upon latching onto its prey, the flesh reaver releases a long, black, barbed tongue from the hole at the base of its neck that dissolves and devours the flesh of its victim.

## Hungry Dead Nature

The flesh reaver doesn't require air or sleep.

```statblock
"name": "Flesh Reaver (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "5"
  - !!int "10"
  - !!int "8"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 12"
"languages": "Understands Common but can't speak"
"cr": "1/2"
"traits":
  - "desc": "The flesh reaver has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "If the flesh reaver moves at least 15 feet, it can jump up to 20 feet\
      \ in any direction. If it lands within 5 feet of a creature, the creature must\
      \ succeed on a DC 13 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the flesh\
      \ reaver can make one Consume Flesh attack against it as a bonus action."
    "name": "Leap"
  - "desc": "The flesh reaver has advantage on attack rolls against a creature if\
      \ at least one of the flesh reaver's allies is within 5 feet of the creature\
      \ and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ creature. *Hit:* 4 (1d4 + 2) piercing damage, and the creature must make\
      \ a DC 13 Constitution saving throw, taking 7 (2d6) necrotic damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Consume Flesh"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/flesh-reaver-ccodex.png"
```
^statblock

## Environment

any