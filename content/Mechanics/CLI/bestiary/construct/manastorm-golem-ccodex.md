---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Manastorm Golem
---
# [Manastorm Golem](Mechanics\CLI\bestiary\construct/manastorm-golem-ccodex.md)
*Source: Creature Codex p. 203*  

*All the colors of the rainbow shimmer within a cloud. It coalesces into a vaguely humanoid form that smells of ozone and ash.*

## A Golem Without Form

The manastorm golem is the creation of a master wizard who harnesses the magic around it to create a construct without the need for materials; it makes the creature from magic itself. The golem is malleable and amorphous, expanding and contracting as needed, but it always reforms into a vaguely humanoid-shaped cloud of energy.

## Intelligent and Communicative

The manastorm golem is unique among its cousins because it is given an inherent intelligence from its creator. This, and its ability to fly, makes it a perfect scout. The golem can fly somewhere, investigate the area, and return with information, conveying it to the golem's master via magical whispers.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Manastorm Golem (CCodex)"
"size": "Medium"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "14"
  - !!int "16"
  - !!int "8"
  - !!int "1"
"speed": "60 ft., fly 60 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "acid, cold, fire, lightning, necrotic, poison, psychic, radiant,\
  \ thunder"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 9"
"languages": "Understands the languages of its creator but can't speak"
"cr": "8"
"traits":
  - "desc": "The manastorm golem can move through a space as narrow as 1 inch wide\
      \ without squeezing."
    "name": "Amorphous"
  - "desc": "Any spell or effect that would alter the golem's form only alters it\
      \ for 1 round. Afterwards, the manastorm golem returns to its humanoid-shaped\
      \ cloud form."
    "name": "Limited Mutability"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The manastorm golem can communicate with its maker via magical whispers\
      \ at a distance up to 120 feet. Only its master hears these messages and can\
      \ reply. Its messages go through solid objects but are halted by stone, magical\
      \ silence, a sheet of lead, and similar obstacles. Its voice can travel through\
      \ keyholes and around corners."
    "name": "Mystic Messages"
"actions":
  - "desc": "The golem makes two slam attacks. If both attacks hit a single living\
      \ creature, the creature is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d10 + 3) force damage."
    "name": "Slam"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 120/480 ft., one target. *Hit:*\
      \ 25 (4d10 + 3) force damage."
    "name": "Force Bolt"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/manastorm-golem-ccodex.png"
```
^statblock

## Environment

any