---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cueyatl Warrior
---
# [Cueyatl Warrior](Mechanics\CLI\bestiary\humanoid/cueyatl-warrior-ccodex.md)
*Source: Creature Codex p. 69*  

*Deep in the coastal jungles, the frog-like cueyatl subjugate other humanoids, forcing them into labor or delivering them to enigmatic gods.*

## Deadly Poisons

Giant ants and venomous aquatic life in the cueyatl diet help them generate poisonous secretions from their skin and in their saliva. The cueyatl use this poison to coat their weapons both for hunting and war.

## Savage Pirates

Knifing through the water in their outrigger canoes, the cueyatl attack ships that blunder into their coastal waters with great ferocity. The cargo is often left aboard if the cueyatl have no immediate use for it; the ships' crews are their main targets, sacrificed to appease their temperamental gods.

## Fiercly Obedient

Their priesthoods work together closely under the cueyatl priest-kings. These priest-kings speak with the authority of the gods, and the cueyatl never waver in their obedience, even to the point of self-sacrifice.

```statblock
"name": "Cueyatl Warrior (CCodex)"
"size": "Small"
"type": "humanoid"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"modifier": !!int "-5"
"stats":
  - !!int "12"
  - !!int "1"
  - !!int "1"
  - !!int "12"
  - !!int "1"
  - !!int "1"
"speed": "30 ft., climb 20 ft., swim 30 ft."
"saves":
  - "strength": !!int "2"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+2"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 5"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The cueyatl can breathe air and water."
    "name": "Amphibious"
  - "desc": "The cueyatl has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in jungle terrain."
    "name": "Jungle Camouflage"
  - "desc": "The cueyatl has advantage on saving throws and ability checks made to\
      \ escape a grapple."
    "name": "Slippery"
  - "desc": "The cueyatl's long jump is up to 20 feet and its high jump is up to 10\
      \ feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage plus 7 (2d6) poison damage, or 7 (1d10 + 2)\
      \ slashing damage plus 7 (2d6) poison damage if used with two hands."
    "name": "Battleaxe"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/cueyatl-warrior-ccodex.png"
```
^statblock

## Environment

coastal