---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Three-headed Cobra
---
# [Three-headed Cobra](Mechanics\CLI\bestiary\monstrosity/three-headed-cobra-ccodex.md)
*Source: Creature Codex p. 354*  

*This monstrous serpent's body is as thick as a man's torso and covered in ink-black scales. Its trunk branches out to support three hissing heads atop flaring cobra hoods. For all its size, it slithers across the ground almost silently.*

Often employed as guardians, the native intelligence of these creatures makes them capable of learning commands.

## Color Variations

The three-headed cobra is most common throughout warm climates, though not unknown on the open plains and in some jungles. While most retain the black coloration found in jungles and hills, other varieties exist. The desert variety often has a pale bone color and skull-like hood pattern; the plains varieties tend toward green or khaki coloration.

## Golden Guardians

The three-headed cobra is a watchful creature associated with guarding shrines and sometimes with rulership over a particular abandoned city or necropolis. Some believe they are protectors of ancient holy relics, sacred scrolls, or divine sparks. Because one of its heads is always awake and alert, it is also favored to guard treasure vaults and counting houses, where large sums of coins are stored. In these cases, the three-headed cobra's scales take on a golden or silvery coloration.

## Servants of the Queen

The three-headed cobra carries a strong association with the Queen of Serpents (see page 34), who, according to legend, never strays far from their protection (honor guards of at least two and as many as a dozen are common near the Queen). They are thought to be her close companions, and many believe the three-headed cobras serve not only as her bodyguards but also as her consorts.

```statblock
"name": "Three-headed Cobra (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "16"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "40 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_resistances": "poison"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The three-headed cobra gets two extra reactions that can be used only\
      \ for opportunity attacks."
    "name": "Reactive Heads"
  - "desc": "The cobra has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks and on saving throws against being [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [stunned](Mechanics/CLI/rules/conditions.md#Stunned),\
      \ and knocked [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)."
    "name": "Three-headed"
  - "desc": "While the three-headed cobra sleeps, at least one of its heads is awake."
    "name": "Wakeful"
"actions":
  - "desc": "The three-headed cobra makes three bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 15 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage and the target must make a DC 15 Constitution\
      \ saving throw, taking 7 (2d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/three-headed-cobra-ccodex.png"
```
^statblock

## Environment

coastal, grassland