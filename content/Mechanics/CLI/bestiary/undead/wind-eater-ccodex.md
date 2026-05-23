---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wind Eater
---
# [Wind Eater](Mechanics\CLI\bestiary\undead/wind-eater-ccodex.md)
*Source: Creature Codex p. 381*  

*A barely visible humanoid silhouette stalks the desolate and ruined place, killing any who would seek its secrets.*

## Warped by Arcane Catastrophe

The wrathful byproducts of cataclysms caused by arcane warfare, wind eaters were once humanoids. Now twisted into near-invisible, roughly human-shaped creatures, they wander their shattered homelands, attacking any intelligent life that comes near.

## Wasteland Wardens

Though they take a spiteful pleasure in hurting creatures whose lives remind them of what they once were, wind eaters retain a kernel of decency, which motivates them to thwart any exploration of their homes. They seek to stop the deadly knowledge that destroyed their bodies and their homes from falling into other hands that might inflict the same misery elsewhere.

## Undead Nature

The wind eater doesn't require air, food, drink, or sleep

```statblock
"name": "Wind Eater (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "18"
  - !!int "14"
  - !!int "12"
  - !!int "16"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "acid; cold; fire; lightning; necrotic; thunder; bludgeoning,\
  \ piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 15"
"languages": "Understands Common but can't speak"
"cr": "2"
"traits":
  - "desc": "The wind eater's innate spellcasting ability is Wisdom (spell save DC\
      \ 13). It can innately cast the following spells, requiring only somatic components:\n\
      \n**At will:** [silent image](Mechanics/CLI/spells/silent-image-xphb.md)\n\n\
      **3/day each:** [blur](Mechanics/CLI/spells/blur-xphb.md), [major image](Mechanics/CLI/spells/major-image-xphb.md)\n\
      \n**1/day each:** [mirage arcane](Mechanics/CLI/spells/mirage-arcane-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "A creature within 120 feet of the wind eater has disadvantage on Wisdom\
      \ ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks that rely\
      \ on hearing. All creatures within 20 feet of the wind eater are immune to thunder\
      \ damage and are [deafened](Mechanics/CLI/rules/conditions.md#Deafened). This\
      \ trait works like the silence spell, except the effect moves with the wind\
      \ eater and persists unless it is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ or until it dies."
    "name": "Aura of Silence"
  - "desc": "The wind eater can move through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "As a bonus action while in dim light or darkness, the wind eater becomes\
      \ [invisible](Mechanics/CLI/rules/conditions.md#Invisible). The invisibility\
      \ lasts until the wind eater uses a bonus action to end it or until the wind\
      \ eater attacks, is in bright light, or is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ Any equipment the wind eater wears or carries is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with it."
    "name": "Shadow Blend"
"actions":
  - "desc": "The wind eater makes two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/wind-eater-ccodex.png"
```
^statblock

## Environment

any