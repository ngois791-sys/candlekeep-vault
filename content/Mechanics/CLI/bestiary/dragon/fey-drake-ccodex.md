---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fey Drake
---
# [Fey Drake](Mechanics\CLI\bestiary\dragon/fey-drake-ccodex.md)
*Source: Creature Codex p. 127*  

*The small dragon flicks its tongue, light glinting off its purple‑black scales. The gleam in its eye hovers somewhere between mischief and malice.*

## Divine Servant

The oldest and most capricious drakes catch the eye of the god of dragons who imbues them with its power. That lucky drake then becomes a fey drake, a (mostly) faithful servant. The fey drake's main duties to its master generally involve finding people, spying on them, and, when appropriate, convincing them to perform tasks for the god of dragons. In the best cases, the task is something the person wants to do, and harmony prevails. In cases where the person is less agreeable, the fey drake uses its magic to force the person to comply.

## But Still Capricious

Fey drakes, however, have a streak of unpredictability. Something that seems like a good idea at the time, or something that might be a bad idea but be fun, is exactly what a fey drake is likely to do without regard for the long-term consequences. The fey drake is more prone to mischief than even its most mischievous draconic cousins.

> [!note] Silvaniel, the Demigod of Fey Drakes
> 
> Fey drakes are surprisingly devoted in their worship of a minor draconic deity named Silvaniel, the trickster friend of Veles, god of all dragons. The role of Silvaniel is to remind grim and brooding Veles of the existence of joy, warmth, friendship, and mischief in the world, for Veles (and many other great dragons) spend much of their time brooding and counting coins. Gnomes, halflings, and some kobolds also venerate Silvaniel.
^silvaniel-the-demigod-of-fey-drakes

```statblock
"name": "Fey Drake (CCodex)"
"size": "Small"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "15d6 + 30"
"modifier": !!int "5"
"stats":
  - !!int "6"
  - !!int "20"
  - !!int "15"
  - !!int "15"
  - !!int "16"
  - !!int "18"
"speed": "20 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "5"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Common, Draconic, Sylvan, telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "The fey drake's innate spellcasting ability is Charisma (spell save DC\
      \ 15, +7 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\n**At will:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [color spray](Mechanics/CLI/spells/color-spray-xphb.md), [grease](Mechanics/CLI/spells/grease-xphb.md)\n\
      \n**3/day each:** [hypnotic pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md),\
      \ [locate creature](Mechanics/CLI/spells/locate-creature-xphb.md), [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\
      \n**1/day each:** [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md),\
      \ [polymorph](Mechanics/CLI/spells/polymorph-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The fey drake has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "As a bonus action, the fey drake can magically turn [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until its concentration ends (as if concentrating on a spell). Any equipment\
      \ the drake wears or carries is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with it."
    "name": "Superior Invisibility"
"actions":
  - "desc": "The fey drake makes three bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d4 + 5) piercing damage, and the target must succeed on a DC 16 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour."
    "name": "Bite"
  - "desc": "The drake breaths a plume of purple gas in a 15-foot cone. Each creature\
      \ in that area must succeed on a DC 16 Wisdom saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the creature can't take bonus actions or reactions, and it makes all Intelligence,\
      \ Wisdom, and Charisma skill checks and saving throws with disadvantage."
    "name": "Bewildering Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/fey-drake-ccodex.png"
```
^statblock

## Environment

any