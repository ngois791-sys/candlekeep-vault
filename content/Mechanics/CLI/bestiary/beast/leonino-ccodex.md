---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Leonino
---
# [Leonino](Mechanics\CLI\bestiary\beast/leonino-ccodex.md)
*Source: Creature Codex p. 250*  

*Slightly larger than a housecat and sporting the wings of an owl, the leonino are beloved and rare pets in elvish courts and palaces, where they are kept as companion animals to royal children, courtesans, and gigolos.*

The leonino are sometimes found as messengers for powerful elven enchanters, nobles, and rogues. While they can be tamed, most leonino are feral and live on the fringes of halfling settlements, along tropical and temperate coastlines, or in temperate forests, where they devour rodents, frogs, salamanders, and small birds.

## Listen and Rarely Speak

The leonino who live in elvish or halfling settlements invariably learn the language around them and are capable of speaking it. However, their innate hauteur and sense of superiority means that they rarely comment or converse; when they do, they are known for their wit and often quite deadpan humor.

## Water Couriers

The leonino are fond of harborfronts, ships, and fisherfolk of all kinds. They sometimes serve as messengers between elven ships and various harbormasters, other ship's captains, and even pirates and aquatic creatures such as merfolk or deep ones.

```statblock
"name": "Leonino (CCodex)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d4 + 6"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "8"
  - !!int "8"
  - !!int "12"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+1"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 11"
"languages": "Elvish"
"cr": "1/8"
"traits":
  - "desc": "The leonino doesn't provoke opportunity attacks when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
  - "desc": "If the leonino is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the leonino instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The flight of a leonine is especially silent and difficult to notice\
      \ in forests and urban settings. It has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while flying in these areas."
    "name": "Silent Wings"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage. If this is the first time the leonino has hit\
      \ the target within the past 24 hours, the target must succeed on a DC 10 Wisdom\
      \ saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) by\
      \ the leonino for 1 hour."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/leonino-ccodex.png"
```
^statblock

## Environment

forest, urban