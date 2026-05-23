---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Moon Priestess
---
# [Moon Priestess](Mechanics\CLI\bestiary\monstrosity/moon-priestess-ccodex.md)
*Source: Creature Codex p. 267*  

*The minotaur moon priestess stands at the center of the maze, raising her silver axe to the skies as the lunar light glistens off her silver horns. Behind her, the labyrinth keeper's hands and eyes begin to glow.*

## The Moon Worshippers

The moon is a symbol of trickery and confusion, and the minotaur moon priestess heeds the call to worship. She curses those who breach the central chamber of the labyrinth, making sure they never escape.

```statblock
"name": "Moon Priestess (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d10 + 54"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "10"
  - !!int "16"
  - !!int "12"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 19"
"languages": "Abyssal"
"cr": "7"
"traits":
  - "desc": "The moon priestess is a 10th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). The moon priestess\
      \ has the following cleric spells prepared:\n\n**Cantrips (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md),\
      \ [light](Mechanics/CLI/spells/light-xphb.md), [resistance](Mechanics/CLI/spells/resistance-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [guiding\
      \ bolt](Mechanics/CLI/spells/guiding-bolt-xphb.md), [shield of faith](Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\
      \n**2nd level (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [locate object](Mechanics/CLI/spells/locate-object-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3rd level (3 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)\n\n**4th\
      \ level (3 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md),\
      \ [divination](Mechanics/CLI/spells/divination-xphb.md), [stone shape](Mechanics/CLI/spells/stone-shape-xphb.md)\n\
      \n**5th level (2 slots):** [flame strike](Mechanics/CLI/spells/flame-strike-xphb.md),\
      \ [hallow](Mechanics/CLI/spells/hallow-xphb.md)"
    "name": "Spellcasting"
  - "desc": "If the moon priestess moves at least 10 feet straight toward a target\
      \ and then hits it with a gore attack on the same turn, the target takes an\
      \ extra 9 (2d8) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 15 Strength saving throw or be pushed up to 10 feet away and knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "The minotaur moon priestess can perfectly recall any path it has traveled."
    "name": "Labyrinthine Recall"
"actions":
  - "desc": "The moon priestess makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (2d12 + 4) slashing damage."
    "name": "Labrys Axe"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Gore"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/moon-priestess-ccodex.png"
```
^statblock

## Environment

underground