---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Roggenwolf
---
# [Roggenwolf](Mechanics\CLI\bestiary\monstrosity/roggenwolf-ccodex.md)
*Source: Creature Codex p. 320*  

*A large wolf with long, white fur and black eyes pads its way into the rows of corn and vanishes. A chorus of dozens of howls echoes from every corner of the field at once.*

## Smart Prey

The roggenwolf has a taste for the flesh of intelligent beings. It stalks the fields of rural settlements, rendering its prey immobile with its strange howling before dragging the creature away into the fields to feast. It will ignore sheep and goats unless shepherds and servants are unavailable; it lurks near fountains and wells, where people come for water, or along paths between small villages.

## False Trails

A roggenwolf possesses just enough intelligence to understand a little of how humanoids think, and it often leaves the bones of its victims arranged in ways that mislead or cast blame on others. It may take a bone into a hunting kennel or place a scrap of cloth in a shepherd's hut to mislead others.

## Extracting Payment for Services

Once seen as minor deities who received sacrifices in exchange for protecting fields and isolated farms, roggenwolves have adapted to take what they were once given. They do still provide the same protection, but this is entirely incidental; they deter other predators to protect their own source of food. Some rituals still call them up to service, harming enemies or chasing off wolves or monsters.

```statblock
"name": "Roggenwolf (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "13"
  - !!int "5"
  - !!int "13"
  - !!int "14"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The roggenwolf has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing and smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) necrotic damage."
    "name": "Bite"
  - "desc": "The roggenwolf lets loose a howl that can only be heard inside the minds\
      \ of nearby creatures. Each creature within 30 feet of the roggenwolf that isn't\
      \ an undead or a construct must succeed on a DC 13 Wisdom saving throw or become\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened) and [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending both effects on itself on a success."
    "name": "Howl (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/roggenwolf-ccodex.png"
```
^statblock

## Environment

farmland, grassland