---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ahu-Nixta
---
# [Ahu-Nixta](Mechanics\CLI\bestiary\aberration/ahu-nixta-ccodex.md)
*Source: Creature Codex p. 11*  

*Hidden deep within its clockwork armor, the creature is a shapeless horror from beyond the stars.*

## Clockwork Armor

Weak and easy prey in their natural state, the ahu-nixta long ago mastered the art of clockwork design, building armor that could carry them through the voids between stars and bolster their physical abilities.

## Always Murmuring Praise

The ahu-nixta constantly murmur praise of dark gods, though this sound is somewhat muffled by their armored shell. In large groups, their voices always offer the same praise, like a dark chorus.

```statblock
"name": "Ahu-Nixta (CCodex)"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "clockwork armor"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "14"
  - !!int "19"
  - !!int "13"
  - !!int "10"
"speed": "30 ft., fly 30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Deep Speech"
"cr": "3"
"traits":
  - "desc": "The ahu-nixta's innate spellcasting ability is Intelligence (spell save\
      \ DC 14, +6 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md) (2d10), [telekinesis](Mechanics/CLI/spells/telekinesis-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The creature within the machine is a somewhat shapeless mass, both protected\
      \ and given concrete manipulators by its armor. The clockwork armor has a variety\
      \ of manipulators that the ahu-nixta can use to attack or to interact with objects\
      \ outside of the armor. When the ahu-nixta is reduced to 0 hp, its clockwork\
      \ armor breaks and the ahunixta exits it. Once out of its armor, the creature's\
      \ pulpy mass no longer receives the benefits of the listed Damage or Condition\
      \ Immunities, except for psychic and [prone](Mechanics/CLI/rules/conditions.md#Prone).\n\
      \nWithout its clockwork armor, the ahu-nixta has the following statistics. AC\
      \ 12, hp 37 (5d10 + 10), Strength 9 (-1), and all its modes of travel are\
      \ reduced to 20 feet. In addition, it has no attack actions, though it can still\
      \ cast its spells. The ahu-nixta's body can form eyes, mouths, and grabbing\
      \ appendages. Its grabbing appendages can pick up objects and manipulate them,\
      \ but the appendages can't be used for combat. The ahu-nixta's extra appendages\
      \ can open and close glass-covered viewing ports in the clockwork armor, requiring\
      \ no action, so it can see and interact with objects outside the armor.\n\n\
      The ahu-nixta can exit or enter its clockwork armor as a bonus action."
    "name": "Clockwork Encasement"
  - "desc": "The clockwork armor of the ahu-nixta is immune to any spell or effect\
      \ that would alter its form, as is the creature that controls it as long as\
      \ the ahu-nixta remains within the armor."
    "name": "Immutable Form"
"actions":
  - "desc": "The ahu-nixta makes three melee attacks. It can cast one at will spell\
      \ in place of two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) slashing damage."
    "name": "Whirring Blades"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) piercing damage."
    "name": "Pronged Scepter"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d10 + 3) bludgeoning damage."
    "name": "Bashing Rod"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/ahu-nixta-ccodex.png"
```
^statblock

## Environment

planar