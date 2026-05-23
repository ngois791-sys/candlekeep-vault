---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blood Giant
---
# [Blood Giant](Mechanics\CLI\bestiary\giant/blood-giant-ccodex.md)
*Source: Creature Codex p. 180*  

*A towering frame of bone wrapped in vessels of frozen blood, like a tree covered in crimson vines, blocks the way.*

Blood giants are formidable sentries, tireless in their oath to guard eldritch places and keep trespassers out.

## Sworn Guardians

Blood giants belong to a primordial tribe of giants that swore an oath to a god long forgotten by men. They stand as guardians to secret holy places of great power and as wardens to keep ancient enemies of their god from ever seeing the light of day.

## Blood Magic

Centuries ago, the blood of these creatures was mixed with the blood of the god to whom they swore their oath. That oath, keeps their bodies in a state between death and life, causing magical blood to endlessly flow through their bodies long after their mortal flesh has fallen away. They have great control over this blood, hardening it to an ice-like state and liquefying it at will. The blood giant's weapons are all made by this process.

## Eternal Guardian Nature

A blood giant doesn't require air, food, drink, or sleep.

```statblock
"name": "Blood Giant (CCodex)"
"size": "Huge"
"type": "giant"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d12 + 48"
"modifier": !!int "1"
"stats":
  - !!int "23"
  - !!int "12"
  - !!int "18"
  - !!int "8"
  - !!int "16"
  - !!int "1"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+2"
"damage_immunities": "cold, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Giant"
"cr": "8"
"traits":
  - "desc": "A blood giant can pinpoint the location of living creatures within 60\
      \ feet of it and can sense the general direction of living creatures within\
      \ 1 mile of it."
    "name": "Blood Sense"
  - "desc": "The blood giant's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The blood giant makes two blood spear attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, range 15 ft., one target. *Hit:*\
      \ 19 (3d8 + 6) piercing damage plus 7 (2d6) cold damage."
    "name": "Blood Spear"
  - "desc": "*Ranged Weapon Attack:* +9 to hit, range 60/240 ft., one target. *Hit:*\
      \ 28 (4d10 + 6) bludgeoning damage."
    "name": "Rock"
  - "desc": "The blood giant uses one of the following.\n\n- **Impale.** The blood\
      \ giant causes 10-foot-high blood spikes to burst from the ground within 15\
      \ feet of it. Each creature in the area must make a DC 15 Dexterity saving throw,\
      \ taking 26 (4d12) piercing damage plus 7 (2d6) cold damage on a failed\
      \ save, or half as much damage on a successful one.  \n- **Drown.** The blood\
      \ giant sends blood pouring down the throat of one creature within 30 feet,\
      \ which must make a DC 15 Constitution saving throw. On a failure, the creature\
      \ is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) until\
      \ the end of its next turn as it coughs up the blood and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute after that.  \n- **Vaporize.** A red mist surrounds the blood\
      \ giant in a 20-foot-radius sphere. The mist spreads around corners, and its\
      \ area is heavily obscured. It moves with the blood giant and doesn't impede\
      \ the giant's vision. The mist dissipates after 1d4 rounds.  "
    "name": "Blood Magic (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/blood-giant-ccodex.png"
```
^statblock

## Environment

any