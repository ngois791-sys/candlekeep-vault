---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Clockwork Assassin
---
# [Clockwork Assassin](Mechanics\CLI\bestiary\construct/clockwork-assassin-ccodex.md)
*Source: Creature Codex p. 64*  

*The ticking of their gears is all the warning some victims ever hear.*

## Single-minded Killers

A deadly, sentient tool and a lucrative investment for those who would hire them out, a clockwork assassin is a cold and efficient killer with no concern for its own well being.

> [!note] Clockwork Assassins in Midgard
> 
> Creating or employing a clockwork assassin in the Free City of Zobeck is a capital crime. The gearforged oppose the creation of clockwork assassins not only because making an assassin requires the corruption of a soul gem, but also because the public might easily confuse honest gearforged with the look‑alike assassins. The temple of Rava and the gearforged both make efforts to uncover and destroy these constructs and those who make or employ them.
^clockwork-assassins-in-midgard

```statblock
"name": "Clockwork Assassin (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "12"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "4"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_immunities": "lightning, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands Common but can't speak"
"cr": "6"
"traits":
  - "desc": "During its first turn, the assassin has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit the assassin scores against\
      \ a surprised creature is a critical hit."
    "name": "Assassinate"
  - "desc": "When the assassin is destroyed, its core explodes, projecting superheated\
      \ steam and shrapnel. Each creature within 5 feet of the construct must make\
      \ a DC 13 Dexterity saving throw, taking 10 (3d6) fire damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Explosive Core"
  - "desc": "The assassin is immune to any spell or effect, other than its disassembly\
      \ trait, that would alter its form."
    "name": "Immutable Form"
  - "desc": "The assassin has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "If the assassin takes psychic damage, it has disadvantage on attack rolls,\
      \ saving throws, and ability checks until the end of its next turn."
    "name": "Psychic Susceptibility"
  - "desc": "The assassin deals an extra 10 (3d6) damage when it hits a target with\
      \ a weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of the assassin that isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and the assassin doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "The assassin's long jump is up to 20 feet and its high jump is up to\
      \ 10 feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "The clockwork assassin makes two rapier attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage and the target must succeed on a DC 15 Constitution\
      \ saving throw or take 11 (2d10) poison damage and be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute."
    "name": "Rapier"
  - "desc": "The assassin breaks its body down into a snakelike, segmented cylinder,\
      \ which allows it to move through a space as narrow as 6 inches wide. It can\
      \ reassemble itself into its true form by using this action again. While disassembled\
      \ into its snake form, the assassin can't attack and attack rolls against it\
      \ have advantage."
    "name": "Disassembly"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/clockwork-assassin-ccodex.png"
```
^statblock

## Environment

urban