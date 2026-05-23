---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ziphius
---
# [Ziphius](Mechanics\CLI\bestiary\aberration/ziphius-ccodex.md)
*Source: Creature Codex p. 392*  

*Commonly called a whale demon by sailors, the mane of bristles around the ziphius' face gives it an almost owl-like appearance as it cuts through the water with frightening speed.*

## Easily Bribed

Living prey in the water quickly attracts a ziphius' attention. Many ships on routes where a ziphius is known to hunt keep a goat, sheep, or pig aboard to throw overboard as an offering if the ziphius' distinctive dorsal fin is spotted. In cases of desperation, a captive or galley slave may be substituted.

## Huge and Extra-Huge

The largest reported ziphius encountered was larger than the frigate it attacked and sank. However, even the smaller ones vary between enormous and impossibly large. Most ziphius encountered are at least 75 feet long.

## Deep Dwellers

The ziphius are said to have a dwelling in the deepest oceans, a place where the sahuagin, deep ones, and a few archmages are their only visitors. It is called Cruugin, a monumental stone city set with glowing jewels, in reports from the few who claim to have visited

```statblock
"name": "Ziphius (CCodex)"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "10d20 + 30"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "16"
  - !!int "9"
  - !!int "13"
  - !!int "4"
"speed": "10 ft., swim 60 ft."
"saves":
  - "strength": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 120 ft., passive\
  \ Perception 14"
"languages": "Aquan, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "If the ziphius moves at least 20 feet straight toward a target and then\
      \ hits it with a dorsal fin attack on the same turn, the target takes an extra\
      \ 27 (5d10) slashing damage."
    "name": "Charge"
  - "desc": "The ziphius deals double damage to objects and structures."
    "name": "Siege Monster"
  - "desc": "As a bonus action at the start of its turn, the ziphius can choose one\
      \ creature within 120 feet that it can see. The ziphius' eyes glow, and the\
      \ target must succeed on a DC 15 Wisdom saving throw or the ziphius creates\
      \ a temporary mental bond with the target until the start of the ziphius' next\
      \ turn. While bonded, the ziphius reads the creature's surface thoughts, choosing\
      \ to either gain advantage on attacks against that target or cause the target\
      \ to have disadvantage on attacks against the ziphius."
    "name": "Telepathic Foresight"
  - "desc": "The ziphius can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "The ziphius makes one beak attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (3d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage. If the target is a Large or smaller creature,\
      \ it must succeed on a DC 15 Strength saving throw or be swallowed by the ziphius.\
      \ A swallowed creature is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside the ziphius, and it takes\
      \ 14 (4d6) acid damage at the start of each of the ziphius' turns. The ziphius\
      \ can have only one target swallowed at a time.\n\nIf the ziphius takes 20 damage\
      \ or more on a single turn from a creature inside it, the ziphius must succeed\
      \ on a DC 13 Constitution saving throw at the end of that turn or regurgitate\
      \ the swallowed creature, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the ziphius. If the ziphius dies, a swallowed\
      \ creature is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 20 feet of movement, exiting\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Beak"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (3d10 + 4) slashing damage."
    "name": "Dorsal Fin"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/ziphius-ccodex.png"
```
^statblock

## Environment

underwater