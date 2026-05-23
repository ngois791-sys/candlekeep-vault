---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/simian
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vanara
---
# [Vanara](Mechanics\CLI\bestiary\humanoid/vanara-ccodex.md)
*Source: Creature Codex p. 338*  

*Wearing short pants and a colorful turban, this monkey-like creature howls a warning, its tan fur bristling.*

Quick and agile, vanara's long arms and prehensile tails are quite adept at many tasks. Their bodies are covered in fur, usually brown or black, but sometimes grey, white, or auburn. While they do bundle up in colder climates, most vanaras dress only in short pants or waist wraps and a colorful or plain white turban.

## Efficient and Supportive

Vanaras are a contemplative race that dwells in forests or along coastlines. They live in tribes or clans, which are self-sufficient and have little need for trade with cities. They are quite helpful to outsiders that seek assistance, however, for they believe that good deeds towards others will be returned.

## Sentinels of the Forest

Unlike their restless kapi cousins, vanaras are content with life in the forest and feel it is their duty to protect it. They communicate via rich, sonorous songs that can be heard for miles, warning those of ill intent not to tread in areas under their protection.

## Deeply Spiritual

Many vanaras spend hours meditating on topics that face their tribes or lands, seeking guidance from higher powers. They regularly gather to sing in deep, booming harmony in their own form of prayer to such higher powers.

```statblock
"name": "Vanara (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "simian"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "15"
  - !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "As a bonus action, the vanara can use its tail to distract an opponent\
      \ within 5 feet of it by pulling on an arm, tossing dirt in the target's face,\
      \ or some other method of interfering. The target must succeed on a DC 13 Dexterity\
      \ saving throw or have disadvantage on all attacks against the vanara until\
      \ the vanara's next turn."
    "name": "Distract"
  - "desc": "As a bonus action, the vanara can move up to 80 feet without provoking\
      \ opportunity attacks. It can't use this trait if it is wielding a weapon or\
      \ holding an object weighing more than 10 lbs."
    "name": "Quadrupedal Dash"
  - "desc": "The vanara's long jump is 30 feet and its high jump is up to 15 feet,\
      \ with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) bludgeoning damage and the target must succeed on a DC 13 Dexterity\
      \ saving throw or drop its weapon in a space within 10 feet of the target."
    "name": "Slam"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d4 + 3) bludgeoning damage."
    "name": "Sling"
  - "desc": "The vanara releases a sonorous howl in a 15-foot cone. Each creature\
      \ in that area must make a DC 13 Constitution saving throw. On a failure, a\
      \ creature takes 18 (4d8) thunder damage and is [deafened](Mechanics/CLI/rules/conditions.md#Deafened)\
      \ for 1 minute. On a success, the creature takes half the damage and isn't [deafened](Mechanics/CLI/rules/conditions.md#Deafened)."
    "name": "Howl (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/vanara-ccodex.png"
```
^statblock

## Environment

forest