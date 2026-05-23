---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pattern Dancer
---
# [Pattern Dancer](Mechanics\CLI\bestiary\humanoid/pattern-dancer-ccodex.md)
*Source: Creature Codex p. 147*  

*Shadows weave around a lithe dancing figure, making it difficult to look away. The face of the dancer changes from beautiful to hideous, but always fascinating.*

## Servants of the Queen

Pattern dancers train in the arts of deception, magic, combat, and performance, always for a singular purpose: to serve their fey liege, the Queen of Night and Magic (Tome of Beasts, p. 192). The most promising young shadow fey of any gender are taken from their parents at a young age to train. Many fail to meet the rigorous standards, but a few thrive. After years of training and conditioning, they are divided into troupes and begin their lives as pattern dancers.

## Entertainer Spies

Pattern dancer troupes, consisting of anywhere from 3–12 dancers plus retainers and bodyguards for larger troupes, leave the Shadow Realm on missions for their queen and spend most of their time in the mortal world. With their reputations already established by their predecessors, troupes are always in demand by the rich, famous, and powerful.

## Spies for Hire

While they are ultimately in the service of their queen, pattern dancers also frequently offer their spying services and information gathering skills to the highest bidder. Their payment, however, is often in memories or in other information that they can pass along or provide to their liege.

```statblock
"name": "Pattern Dancer (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Performance](Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+7"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": "Common, Elvish"
"cr": "2"
"traits":
  - "desc": "The pattern dancer is a-level spellcaster. Its spellcasting ability is\
      \ Charisma (spell save DC 13, +5 to hit with spell attacks). The pattern dancer\
      \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [dancing\
      \ lights](Mechanics/CLI/spells/dancing-lights-xphb.md), [friends](Mechanics/CLI/spells/friends-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md)\n\
      \n**1st level (4 slots):** [color spray](Mechanics/CLI/spells/color-spray-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [shield](Mechanics/CLI/spells/shield-xphb.md)\n\n**2nd level (3 slots):**\
      \ [blur](Mechanics/CLI/spells/blur-xphb.md), [mirror image](Mechanics/CLI/spells/mirror-image-xphb.md)\n\
      \n**3rd level (2 slots):** [major image](Mechanics/CLI/spells/major-image-xphb.md),\
      \ [nondetection](Mechanics/CLI/spells/nondetection-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The pattern dancer's innate spellcasting ability is Charisma (spell save\
      \ DC 13). It can innately cast the following spells:\n\n**At will:** [hold person](Mechanics/CLI/spells/hold-person-xphb.md)\n\
      \n**3/day each:** [fear](Mechanics/CLI/spells/fear-xphb.md), [sleep](Mechanics/CLI/spells/sleep-xphb.md)\n\
      \n**1/day each:** [confusion](Mechanics/CLI/spells/confusion-xphb.md), [hypnotic\
      \ pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The shadow fey has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "As a bonus action while in shadows, dim light, or darkness, the shadow\
      \ fey disappears into the darkness and reappears in an unoccupied space it can\
      \ see within 30 feet. A tendril of inky smoke appears at the origin and destination\
      \ when it uses this trait."
    "name": "Shadow Traveler (1/Day)"
  - "desc": "While in sunlight, the shadow fey has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The shadow fey has advantage on Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ checks made to know about shadow roads and shadow magic spells or items."
    "name": "Traveler In Darkness"
  - "desc": "When three pattern dancers are within 60 feet of each other,\n\nthey\
      \ can work together to cast communal spells that are more\n\npowerful than they\
      \ could cast individually. To do this, one takes\n\nan action to cast a spell,\
      \ and the other two must use their\n\nreactions to complete it. These spells\
      \ are listed in innate spellcasting."
    "name": "Group Actions"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 150/600 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage."
    "name": "Longbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/pattern-dancer-ccodex.png"
```
^statblock

## Environment

underground, urban