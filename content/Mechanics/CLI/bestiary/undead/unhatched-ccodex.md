---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Unhatched
---
# [Unhatched](Mechanics\CLI\bestiary\undead/unhatched-ccodex.md)
*Source: Creature Codex p. 363*  

*The small, skeletal dragon jumps down from the bookshelf where it was reading. It spreads its bony wings laced with brittle, leathery skin and exhales a cloud of choking dust that smells like an ancient tomb.*

## Stewed in Necromancy

These unholy dragon whelps were never given the chance to hatch-their mothers were slain, and the eggs which contained them carried off to dark ends. The unhatched dragon egg is stewed in a vile necromantic soup which dissolves the hard shell and melts the creature's flesh from its bones. It arises from the wretched fluid as an evil, skeletal, draconic whelp, its hollow eye sockets glowing a pale yellow.

## More than Dead

In addition to the usual undead characteristics, the unhatched emerge with some minor necromantic magic. If allowed to mature, their magic grows in power, making liches especially fond of unhatched as pets.

## Lairs of Death and Knowledge

They are commonly found guarding evil wizard's lairs, vampire's resting places, or crypts and tombs of various sorts. Left to their own devices, they actively seek out magical knowledge and can be encountered in ruins containing libraries or other vaults of knowledge. They are cunning opponents, using their illusion magic to draw prey into their lair. The unhatched often band together in groups of three or more.

## Undead Nature

The unhatched doesn't require air, food, drink, or sleep.

```statblock
"name": "Unhatched (CCodex)"
"size": "Small"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d6 + 33"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "18"
  - !!int "10"
  - !!int "9"
"speed": "30 ft., fly 40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "necrotic, piercing"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Draconic"
"cr": "4"
"traits":
  - "desc": "The unhatched's innate spellcasting ability is Intelligence (spell save\
      \ DC 14, +6 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring only verbal components:\n\n**At will:** [chill touch](Mechanics/CLI/spells/chill-touch-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n**1/day each:**\
      \ [bane](Mechanics/CLI/spells/bane-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Deprived of parental bonds, the unhatched despise those who nurture and\
      \ heal others. The unhatched has advantage on attacks against a creature whose\
      \ most recent action was to heal, restore, strengthen, or otherwise aid another\
      \ creature."
    "name": "Hatred"
  - "desc": "As a bonus action, the unhatched gives itself advantage on its next saving\
      \ throw against spells or other magical effects."
    "name": "Minor Magic Resistance (3/Day)"
"actions":
  - "desc": "The unhatched makes one bite attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (3d6 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) piercing damage plus 4 (1d8) necrotic damage."
    "name": "Bite"
  - "desc": "The dragon exhales a cloud of choking dust infused with necrotic magic\
      \ in a 30-foot cone. Each creature in the area must make a DC 14 Dexterity saving\
      \ throw, taking 16 (3d10) necrotic damage on a failed save, or half as much\
      \ damage on a successful one. A creature who fails this save can't speak until\
      \ the end of its next turn as it chokes on the dust."
    "name": "Desiccating Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/unhatched-ccodex.png"
```
^statblock

## Environment

any