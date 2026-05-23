---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Arcanaphage
---
# [Arcanaphage](Mechanics\CLI\bestiary\monstrosity/arcanaphage-ccodex.md)
*Source: Creature Codex p. 42*  

*A soft-bodied, iridescent creature floats by, tentacles rippling along its back as it quests for its next meal.*

Arcanaphage are commonly found in places imbued with magic, their colorful skin rhythmically pulsating as they graze on arcane energies.

## Magivore

The arcanaphage diet consists exclusively of magic. It has no mouth; it feeds by absorbing nearby magical energy into a series of ropy tentacles that run the length of its body. With enough time, an arcanaphage can slowly slurp all of the power out of magical objects, traps, or spells permanently imbuing an area. Most arcanaphage are about the size of a large dog, though especially well-fed specimens the size of draft horses have been reported.

## Docile Unless Angered

If left to feed undisturbed, an arcanaphage typically ignores its surroundings. However, when it feels threatened or when food is scarce and it senses magic nearby, it viciously attacks.

## Unwitting Guardians

Its ability to neutralize magic in its immediate area, combined with its calm demeanor, makes an arcanaphage an excellent guardian against a wizard's ire. Some warlords even bring pet arcanaphage to battle as protection from spellcasters, although this is a gamble since the creatures like to sit on and absorb power from unattended magical objects, like a warlord's heirloom weapon, and can release a torrent of magical energy when slain.

```statblock
"name": "Arcanaphage (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "-5"
"stats":
  - !!int "10"
  - !!int "1"
  - !!int "1"
  - !!int "16"
  - !!int "2"
  - !!int "1"
"speed": "0 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 12"
"languages": ""
"cr": "4"
"traits":
  - "desc": "When an arcanaphage dies, it explodes in a surge of partially-digested\
      \ magical energy. Each creature within 5 feet per Feed score must make a DC\
      \ 14 Dexterity saving throw, taking 3 (1d6) force damage per Feed score on\
      \ a failed save, or half as much damage on a successful one. For 1 minute afterward,\
      \ the affected area is awash with volatile magic. A creature that starts its\
      \ turn in the affected area takes 7 (2d6) force damage."
    "name": "Arcane Discharge"
  - "desc": "Each time it feeds in combat, it regains hp equal to twice the level\
      \ of the spell it ate and increases its Feed score by 1. The arcanaphage can't\
      \ have a Feed score higher than 8, and its Feed score reduces by 1 each time\
      \ it finishes a long rest."
    "name": "Hunger"
  - "desc": "At the start of each of the arcanaphage's turns, each creature within\
      \ 30 feet of it that is currently maintaining concentration on a spell must\
      \ make a DC 14 Constitution saving throw. On a failure, the creature's spell\
      \ ends and the arcanaphage feeds."
    "name": "Ingest Magic"
  - "desc": "The arcanaphage is immune to damage from spells. It has advantage on\
      \ saving throws against all other magical effects."
    "name": "Magic Immunity"
"actions":
  - "desc": "The arcanaphage makes two tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Tentacle"
"reactions":
  - "desc": "The arcanaphage's tentacles glow when a spell is cast within 30 feet\
      \ of it, countering the spell. This reaction works like the counterspell spell,\
      \ except the arcanaphage must always make a spellcasting ability check, no matter\
      \ the spell level. Its ability check for this is +5. If it successfully counters\
      \ the spell, the arcanaphage feeds."
    "name": "Voracious"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/arcanaphage-ccodex.png"
```
^statblock

## Environment

any