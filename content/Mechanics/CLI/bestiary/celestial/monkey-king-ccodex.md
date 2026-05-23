---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/simian
statblock: inline
statblock-link: "#^statblock"
aliases:
- Monkey King
---
# [Monkey King](Mechanics\CLI\bestiary\celestial/monkey-king-ccodex.md)
*Source: Creature Codex p. 337*  

*As the hunter leveled his crossbow at the old silverback gorilla, a blur crossed his vision. An enormous monkey swung past him, striking him in the head with a ringed staff. The monkey's grin seemed both playful and terrifying.*

## Origin of the Monkey King

The gods once saw the most gifted, powerful monkey ever born, and they invited him to perform for them. The monkey, being curious, found the Peaches of Immortality, and he ate as many of them as he could find. The magical fruit gave him extraordinary powers, transforming him into the Monkey King.

## Master of the Simians

When the forces of civilization encroached on the lands of the simians, the Monkey King led his army of apes and monkeys against the hostile incursion of hunters and explorers. To this day, when his kind is threatened, the Monkey King appears to fight off the intruders.

## Wise Teacher

The Monkey King is sought by students hoping to learn the ways of his kind. The mix of wisdom and action, of great physical ability and great peace, is passed from the Monkey King to those worthy of his teachings.

```statblock
"name": "Monkey King (CCodex)"
"size": "Medium"
"type": "celestial"
"subtype": "simian"
"alignment": "Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "262"
"hit_dice": "25d8 + 150"
"modifier": !!int "7"
"stats":
  - !!int "19"
  - !!int "24"
  - !!int "22"
  - !!int "16"
  - !!int "21"
  - !!int "17"
"speed": "60 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "14"
  - "constitution": !!int "13"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+14"
"damage_immunities": "necrotic, poison, radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 22"
"languages": "Common, Celestial"
"cr": "21"
"traits":
  - "desc": "If the Monkey King fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Monkey King has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The Monkey King can communicate with primates as if they shared a language.\
      \ In addition, he can control primates with an Intelligence of 8 or lower that\
      \ are within 120 feet of him."
    "name": "Simian Affinity"
"actions":
  - "desc": "The Monkey King makes three golden staff attacks or two golden staff\
      \ attacks and one tail attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (2d10 + 7) bludgeoning damage plus 7 (2d6) radiant damage."
    "name": "Golden Staff"
  - "desc": "*Ranged Spell Attack:* +12 to hit, range 100 ft., one target. *Hit:*\
      \ 18 (4d8) radiant damage. The target must succeed on a DC 18 Charisma saving\
      \ throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the\
      \ end of its next turn."
    "name": "Enlightened Ray"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:*\
      \ 16 (2d8 + 7) bludgeoning damage, and the target must succeed on a DC 22\
      \ Dexterity saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Tail"
"reactions":
  - "desc": "When the Monkey King is hit by a weapon attack, he gains resistance to\
      \ bludgeoning, piercing, and slashing damage until the end of that turn."
    "name": "Drunken Dodge"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the monkey king can expend a use to take one of the following actions. The\
  \ monkey king regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Monkey King moves up to his speed without provoking opportunity attacks."
    "name": "Great Leap"
  - "desc": "The Monkey King makes a golden staff attack."
    "name": "Quick Staff"
  - "desc": "Each creature of the Monkey King's choice within 10 feet of him must\
      \ make a DC 18 Charisma saving throw, taking 36 (8d8) radiant damage on a\
      \ failed save, or half as much damage on a successful one."
    "name": "Golden Burst (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/monkey-king-ccodex.png"
```
^statblock

## Environment

farmland, forest, urban