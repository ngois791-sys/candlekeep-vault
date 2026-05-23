---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Fey Poisoner
---
# [Shadow Fey Poisoner](Mechanics\CLI\bestiary\humanoid/shadow-fey-poisoner-ccodex.md)
*Source: Creature Codex p. 148*  

*It's only after he is lying on the ground, bleeding from an arrow wound in the chest and writhing from the poison seeping through his veins, that the victim sees the pale elf.*

## Accomplished Killers

Raised in the dark dwellings of the Shadow Realm, the shadow fey are fleet of foot, quick of thought, and glib of tongue. Just a little extra training with poison, weapons, and magic makes them into uniquely-qualified killers.

## The Poisoner's Code

A shadow fey poisoner never gives the name of an employer, is rarely captured alive, and never kills the target except in self-defense.

```statblock
"name": "Shadow Fey Poisoner (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "18"
  - !!int "16"
  - !!int "13"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+12"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish"
"cr": "11"
"traits":
  - "desc": "During its first turn, the shadow fey has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit the poisoner scores against\
      \ a surprised creature is a critical hit."
    "name": "Assassinate"
  - "desc": "When in dim light or darkness, the shadow fey poisoner is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)."
    "name": "Born of Shadows"
  - "desc": "If the shadow fey poisoner is subjected to an effect that allows it to\
      \ make a Dexterity saving throw to take only half damage, the poisoner instead\
      \ takes no damage if it succeeds on the saving throw, and only half damage if\
      \ it fails."
    "name": "Evasion"
  - "desc": "The shadow fey has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "As a bonus action while in shadows, dim light, or darkness, the shadow\
      \ fey disappears into the darkness and reappears in an unoccupied space it can\
      \ see within 30 feet. A tendril of inky smoke appears at the origin and destination\
      \ when it uses this trait."
    "name": "Shadow Traveler (4/Day)"
  - "desc": "The shadow fey poisoner deals an extra 21 (6d6) damage when it hits\
      \ a target with a weapon attack and has advantage on the attack roll; or when\
      \ the target is within 5 feet of an ally of the poisoner, that ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ and the poisoner doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "While in sunlight, the shadow fey has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The shadow fey has advantage on Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ checks made to know about shadow roads and shadow magic spells or items."
    "name": "Traveler In Darkness"
"actions":
  - "desc": "The shadow fey poisoner makes two shortsword attacks or two longbow attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 28 (8d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 150/600 ft., one target. *Hit:*\
      \ 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 28 (8d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Longbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/shadow-fey-poisoner-ccodex.png"
```
^statblock

## Environment

underground, urban