---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Far Wanderer
---
# [Far Wanderer](Mechanics\CLI\bestiary\aberration/far-wanderer-ccodex.md)
*Source: Creature Codex p. 151*  

*An aberrant traveler and trader, the flesh of these elf-like humanoids glows in a shifting pattern of luminous constellations.*

## Cosmic Origins

The Court of Countless Stars dwells beyond the light of known suns on a demi-plane between cold and distant constellations. There, these otherworldly creatures worship Yorama the Living Star, an ancient aberration with the power to create life. The Court seeks to extend its influence across the planes of the universe, taking particular interest in fey creatures. Each far wanderer is connected to Yorama, who grants it magic and long life.

## Powers of the Mind

The far wanderers possess innate psychic powers, which they can manifest into harming or healing energy. They are highly intelligent, curious, and manipulative. They often ally with fey or sylvan courts, then use their position to create conflict with other beings, taking notes on the nature of disharmony.

## Yoramian Infusion

A far wanderer doesn't require air, food, drink, or sleep.

```statblock
"name": "Far Wanderer (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "12"
  - !!int "17"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "cold"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": "Common, Elvish, Sylvan"
"cr": "3"
"traits":
  - "desc": "The far wanderer understands the literal meaning of any spoken or written\
      \ language it hears or reads. In addition, it can use an action to read the\
      \ surface thoughts of one creature within 30 feet. This works like the detect\
      \ thoughts spell, except it can only read surface thoughts and there is no limit\
      \ to the duration. It can end this effect as a bonus action or by using an action\
      \ to change the target."
    "name": "Trader"
  - "desc": "As a bonus action, the far wanderer folds the fabric of reality to teleport\
      \ itself to an unoccupied space it can see within 30 feet. A brief shimmer of\
      \ starlight appears at the origin and destination."
    "name": "Traveler"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) slashing damage and 2 (1d4) cold damage."
    "name": "Stardust Blade"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 150/600 ft., one target. *Hit:*\
      \ 13 (2d8 + 4) piercing damage and 2 (1d4) cold damage."
    "name": "Stardust bow"
  - "desc": "The far wanderer channels the energy of the living god-star Yorama. One\
      \ creature the far wanderer can see within 60 feet must make a DC 13 Wisdom\
      \ saving throw, taking 7 (2d6) psychic damage on a failed save, or half as\
      \ much damage on a successful one. A creature who fails the saving throw is\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the end of its\
      \ turn. Alternately, the far wanderer can instead restore 14 (4d6) hp to one\
      \ willing creature it can see within 60 feet."
    "name": "Call to Yorama (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/far-wanderer-ccodex.png"
```
^statblock

## Environment

planar