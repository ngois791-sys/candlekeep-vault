---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/roachling
statblock: inline
statblock-link: "#^statblock"
aliases:
- Roachling Scout
---
# [Roachling Scout](Mechanics\CLI\bestiary\humanoid/roachling-scout-ccodex.md)
*Source: Creature Codex p. 319*  

*With carapace dulled and with antennae sharp, a roaching scout scuttles quietly through shadow and along walls, always evading notice while observing all around it. Their speed and stealth combine to cover a lot of territory.*

## Nose for Sugar

Roachling scouts hunt down and retrieve food and other goods their people have trouble attaining due to their appearance and social station. Scouts have an uncanny knack for locating sugar, which is a vital ingredient in a roachling's diet. Their climbing ability and size also make roachling scouts excellent spies.

## Watchers

While most roachling scouts are sent to search and find, they are also excellent at watching and waiting. Some cults of Akyishigal (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) or Arbeyach employ them as lookouts and informants.

## Prone to Distraction

Roachling scouts can be easy to lead astray with a new scent, a delectable bit of rotting fruit, or a mysterious tune. Their curiosity is their greatest weakness.

```statblock
"name": "Roachling Scout (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "roachling"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "63"
"hit_dice": "14d6 + 14"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "13"
  - !!int "10"
  - !!int "14"
  - !!int "8"
"speed": "25 ft., climb 15 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "3"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 10 ft., passive Perception 16"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "The roachling scout has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The roachling scout has advantage on Constitution saving throws."
    "name": "Resistant"
  - "desc": "The roachling scout can move stealthily while traveling at a normal pace."
    "name": "Stealthy Traveler"
  - "desc": "The roachling scout has disadvantage on Charisma ([Performance](Mechanics/CLI/rules/skills.md#Performance))\
      \ and Charisma ([Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)) checks\
      \ in interactions with non-roachlings."
    "name": "Unlovely"
"actions":
  - "desc": "The roachling scout makes two begrimed shortsword attacks or two begrimed\
      \ dart attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage plus 7 (2d6) poison damage."
    "name": "Begrimed Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 20/60 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) piercing damage plus 7 (2d6) poison damage."
    "name": "Begrimed Dart"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/roachling-scout-ccodex.png"
```
^statblock

## Environment

underground, urban