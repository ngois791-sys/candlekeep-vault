---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alchemist Archer
---
# [Alchemist Archer](Mechanics\CLI\bestiary\humanoid/alchemist-archer-ccodex.md)
*Source: Creature Codex p. 141*  

*Hidden in the dappled shadows of the tree's leaves, the elf 's leather bandolier jingles softly. Leather armor dyed to match its surroundings, the nearly invisible archer removes a vial from the bandolier, quickly attaching it to an arrow. The well-kept bow does not creak as the bowstring is drawn.*

Mixing their knowledge of dangerous chemicals with their extensive weapon skills, these elves are devastating from afar.

## A Sharp Smell

Try as they might, alchemist archer elves cannot eliminate the scent of their various acids and tinctures. Their distinctive scent makes them easier to find by creatures with an acute sense of smell.

```statblock
"name": "Alchemist Archer (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "5"
"stats":
  - !!int "11"
  - !!int "20"
  - !!int "16"
  - !!int "18"
  - !!int "14"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "strength": !!int "4"
  - "intelligence": !!int "8"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Common, Elvish"
"cr": "10"
"traits":
  - "desc": "As a bonus action, the archer attaches an alchemy tube to the shaft of\
      \ one arrow before firing its longbow. On a successful hit, the alchemy tube\
      \ shatters and does one of the following."
    "name": "Alchemical Arrows"
  - "desc": "The target takes an extra 18 (4d8) thunder damage and must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Concussive"
  - "desc": "The target takes an extra 18 (4d8) acid damage and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by sticky, alchemical goo. As an action, the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ target can make a DC 16 Strength check, bursting through the goo on a success.\
      \ The goo can also be attacked and destroyed (AC 10; hp 5; immunity to piercing,\
      \ slashing, poison, and psychic damage)."
    "name": "Entangling"
  - "desc": "The target takes an extra 18 (4d8) fire damage and catches on fire,\
      \ taking 7 (2d6) fire damage at the start of each of its turns. The target\
      \ can end this damage by using its action to make a DC 16 Dexterity check to\
      \ extinguish the flames."
    "name": "Explosive"
  - "desc": "The archer has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the archer to sleep."
    "name": "Fey Ancestry"
  - "desc": "Once per turn, when the archer makes a ranged attack with its longbow\
      \ and hits, the target takes an extra 28 (8d6) damage."
    "name": "Hunter's Aim"
"actions":
  - "desc": "The alchemist archer makes three longbow attacks or two scimitar attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d6 + 5) slashing damage."
    "name": "Scimitar"
  - "desc": "*Ranged Weapon Attack:* +9 to hit, range 150/600 ft., one target. *Hit:*\
      \ 9 (1d8 + 5) piercing damage."
    "name": "Longbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/alchemist-archer-ccodex.png"
```
^statblock

## Environment

any