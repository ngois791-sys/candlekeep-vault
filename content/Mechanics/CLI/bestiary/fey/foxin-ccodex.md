---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Foxin
---
# [Foxin](Mechanics\CLI\bestiary\fey/foxin-ccodex.md)
*Source: Creature Codex p. 163*  

*A long-eared fox-like fey creature sits serenely, its fur the color of morning's first light.*

Foxin come in a myriad of vibrant colors. Sometimes referred to as "the morning calm," they cause an unnatural sense of false tranquility.

## Serene Purpose

Foxin were originally created by a benevolent fey as a companion to healers. A foxin's natural aura can remove pain, fear, and discomfort, providing a pleasant illusion to those hurt or dying.

## Problematic Power

The foxin's natural calming ability erases any perception of danger or harm. One could be attacked or imperiled in a foxin's presence and remain blissfully unaware, smiling contentedly until it was too late.

## Potential Misuse

An army with a foxin as an ally could decimate its enemies without resistance. Happily, foxin are difficult to convince to participate in such atrocities. Their desires are individual and unpredictable. Their motives are often inscrutable; they manifest their powers at random or for their own amusement.

```statblock
"name": "Foxin (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d6 + 6"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands Common, Sylvan but can't speak"
"cr": "1/2"
"traits":
  - "desc": "The foxin has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "A foxin naturally emits an air of total belonging. It doesn't go unnoticed,\
      \ but other creatures always behave as though the foxin's presence is normal\
      \ and unobtrusive."
    "name": "Neutral Presence"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Strength\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Bite"
  - "desc": "The foxin targets any number of non-foxin creatures within 30 feet. Each\
      \ creature in that area must succeed on a DC 13 Wisdom saving throw or be treated\
      \ as [charmed](Mechanics/CLI/rules/conditions.md#Charmed) against all enemies\
      \ and dangers for 1 minute. A [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the foxin's Illusory\
      \ Calm for the next 24 hours. A creature has advantage on the saving throw if\
      \ it suffers any harm while [charmed](Mechanics/CLI/rules/conditions.md#Charmed)."
    "name": "Illusory Calm"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/foxin-ccodex.png"
```
^statblock

## Environment

grassland, urban