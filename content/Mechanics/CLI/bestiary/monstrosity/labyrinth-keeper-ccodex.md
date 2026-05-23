---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Labyrinth Keeper
---
# [Labyrinth Keeper](Mechanics\CLI\bestiary\monstrosity/labyrinth-keeper-ccodex.md)
*Source: Creature Codex p. 267*  

*The minotaur moon priestess stands at the center of the maze, raising her silver axe to the skies as the lunar light glistens off her silver horns. Behind her, the labyrinth keeper's hands and eyes begin to glow.*

## The Maze Keepers

The minotaur labyrinth keepers create and restore the maze-lair of their clan. The keeper takes careful notes, studies those who breach its creations, and, when necessary, defends the maze with its clan-mates.

```statblock
"name": "Labyrinth Keeper (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "10"
  - !!int "12"
  - !!int "16"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Abyssal"
"cr": "5"
"traits":
  - "desc": "The labyrinth keeper's innate spellcasting ability is Charisma (spell\
      \ save DC 14, +6 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [acid arrow](Mechanics/CLI/spells/melfs-acid-arrow-xphb.md),\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md), [locate object](Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\n**2/day each:** [inflict\
      \ wounds](Mechanics/CLI/spells/inflict-wounds-xphb.md), [stone shape](Mechanics/CLI/spells/stone-shape-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "If the labyrinth keeper moves at least 10 feet straight toward a target\
      \ and then hits it with a gore attack on the same turn, the target takes an\
      \ extra 9 (2d8) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 15 Strength saving throw or be pushed up to 10 feet away and knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "The minotaur labyrinth keeper can perfectly recall any path it has traveled."
    "name": "Labyrinthine Recall"
  - "desc": "At the start of its turn, the minotaur labyrinth keeper can gain advantage\
      \ on all spell attack rolls it makes during that turn, but attack rolls against\
      \ it have advantage until the start of its next turn."
    "name": "Reckless Caster"
"actions":
  - "desc": "The minotaur labyrinth keeper makes two attacks. one with its gore and\
      \ one with its shortsword."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage."
    "name": "Shortsword"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/labyrinth-keeper-ccodex.png"
```
^statblock

## Environment

underground