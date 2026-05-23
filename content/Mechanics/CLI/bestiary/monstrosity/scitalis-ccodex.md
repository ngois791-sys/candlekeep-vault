---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Scitalis
---
# [Scitalis](Mechanics\CLI\bestiary\monstrosity/scitalis-ccodex.md)
*Source: Creature Codex p. 321*  

*The skin of this large snake is covered in an elegant pattern of intricate markings that scintillate with an eerie, supernatural brilliance. Its scales undulate a mesmerizing glamour as it slowly slithers forward.*

## Hypnotic Serpents

The scitalis is a deadly serpentine monstrosity that stuns its prey with the marvelous glimmer of its magically-variegated skin. Unlike most ophidians, these venomous hunters move rather slowly and rely on the stupefying effects of their otherworldly scales to capture the fleet of foot. With its prey adequately disabled, the scitalis languidly closes in to feast.

## Warm-bodied Wyrms

Due to the strange quality of its iridescent skin, the scitalis is actually a warm-blooded reptile. This torpid supernatural monstrosity is cold-resistant and can be seen wandering as far as the frigid climes of the arctic. The snakeskin of the scitalis maintains some of its enchanted properties once shed and can often fetch handsome rewards from purveyors of the arcane.

## Eldritch Origins

The provenance of the scitalis is a mystery as stupefying as its gleaming scales. Some sages speculate a draconic pedigree, while others claim this beautiful but deadly ophidian is a true child of Yig, the blasphemous Father of Serpents. Scitalis sightings are infrequent enough to fuel speculative and disquieting reports of variant breeds—glittering serpents with sinister spines, bat-like wings, or several sharp-toothed heads.

This creature's hide is required component for the [Cloak of Iridescence](Mechanics/CLI/items/robe-of-iridescence-ccodex.md)

```statblock
"name": "Scitalis (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "2"
  - !!int "18"
  - !!int "3"
"speed": "20 ft., swim 30 ft."
"saves":
  - "constitution": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "2"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "cold"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The scitalis has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage plus 9 (2d8) poison damage."
    "name": "Bite"
  - "desc": "Each creature of the scitalis' choice that is within 60 feet of the scitalis\
      \ and can see it must succeed on a DC 14 Wisdom saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ scitalis' Stunning Scales for the next 24 hours."
    "name": "Stunning Scales"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/scitalis-ccodex.png"
```
^statblock

## Environment

any