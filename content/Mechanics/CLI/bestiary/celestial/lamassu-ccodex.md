---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lamassu
---
# [Lamassu](Mechanics\CLI\bestiary\celestial/lamassu-ccodex.md)
*Source: Creature Codex p. 247*  

*This magnificent creature has the head of a human, the body of a lion, and the golden wings of an eagle. It turns and smiles benevolently at all the travelers it meets.*

## Ancient Protectors

Lamassu are dedicated to battling the forces of evil and protecting sites of historic and religious importance from harm. Most of the time, they inhabit abandoned temples and other ruins in deserts and protect those sites from foul monsters. Kind and compassionate towards humanoids, their regal bearing and archaic turns of phrase can sometimes make them seem aloof and superior.

## Adopting a City

A lamassu will sometimes leave its ruins and adopt a humanoid city, simply by nesting in its largest gatehouse and inspecting the people and creatures that pass through the gate. In these situations, a protective lamassu watches for known criminals, offers blessings to the poor, and sometimes demands donations from the wealthy to assist beggars, widows, and orphans. In most cases, this role as a gate lamassu ends after a year and a day, but it can last up to a decade. Watch captains, merchants, and city rulers have attempted flattery, bribery, and carefully‑worded proclamations but nothing seems to dissuade a city lamassu.

## Immortal Nature

A lamassu doesn't require food, drink, or sleep.

```statblock
"name": "Lamassu (CCodex)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "20"
  - !!int "17"
  - !!int "18"
  - !!int "16"
"speed": "30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "9"
  - "wisdom": !!int "8"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 18"
"languages": "All, telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "The lamassu's innate spellcasting ability is Wisdom (spell save DC 16).\
      \ It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [detect evil and good](Mechanics/CLI/spells/detect-evil-and-good-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [magic circle](Mechanics/CLI/spells/magic-circle-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [unseen servant](Mechanics/CLI/spells/unseen-servant-xphb.md)\n\
      \n**3/day each:** [bless](Mechanics/CLI/spells/bless-xphb.md), [calm emotions](Mechanics/CLI/spells/calm-emotions-xphb.md),\
      \ [command](Mechanics/CLI/spells/command-xphb.md), [dimension door](Mechanics/CLI/spells/dimension-door-xphb.md),\
      \ [invisibility](Mechanics/CLI/spells/invisibility-xphb.md), [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\
      \n**1/day each:** [banishment](Mechanics/CLI/spells/banishment-xphb.md), [flame\
      \ strike](Mechanics/CLI/spells/flame-strike-xphb.md), [glyph of warding](Mechanics/CLI/spells/glyph-of-warding-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The lamassu has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The lamassu's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If the lamassu moves at least 20 feet straight toward a creature and\
      \ then hits it with a claw attack on the same turn, that target must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the lamassu\
      \ can make one claw attack against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "The lamassu makes two attacks with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) slashing damage plus 9 (2d8) radiant damage."
    "name": "Claw"
  - "desc": "The lamassu touches a creature. The target magically regains 22 (5d8)\
      \ hp and is cured of any curses or diseases and of any [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ [blinded](Mechanics/CLI/rules/conditions.md#Blinded), or [deafened](Mechanics/CLI/rules/conditions.md#Deafened)\
      \ conditions afflicting it."
    "name": "Healing Touch (3/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the lamassu can expend a use to take one of the following actions. The lamassu\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The lamassu makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The lamassu makes one claw attack."
    "name": "Claw Attack"
  - "desc": "The lamassu beats its wings. Each creature within 10 feet of it must\
      \ succeed on a DC 16 Dexterity saving throw or take 11 (2d6 + 4) bludgeoning\
      \ damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). The\
      \ lamassu can then fly up to its flying speed."
    "name": "Wing Attack (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/lamassu-ccodex.png"
```
^statblock

## Environment

coastal