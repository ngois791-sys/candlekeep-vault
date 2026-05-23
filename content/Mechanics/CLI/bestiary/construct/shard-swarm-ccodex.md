---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shard Swarm
---
# [Shard Swarm](Mechanics\CLI\bestiary\construct/shard-swarm-ccodex.md)
*Source: Creature Codex p. 329*  

*Broken pieces of metal, clay, and wood fly together in an erratic tornado.*

Most junk heaps are extremely forgettable. It takes refuse literally coming to life to leave lasting memories...and scars.

## Recycled Guardians

The process for creating construct guardians requires an investment of energy, gold, and time. When one of these guardians is destroyed, a thrifty spellcaster taps the residual magic of the scraps to create a shard swarm. The creator strategically positions the swarm to look like a harmless pile of junk, so it can surprise intruders.

## Surprise Cages

The pieces of a shard swarm can be spread far apart from one another and come together in an instant. Some creators use the swarms as living cages, ordering the shards to simply hold any uncooperative intruders until the creator performs a proper interrogation.

```statblock
"name": "Shard Swarm (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "3"
  - !!int "13"
  - !!int "11"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "0 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 7"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The swarm is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ while in the area of an antimagic field. If targeted by the [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\
      \ spell, the swarm must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or fall [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "If the shard swarm has at least 1 hit point and all of its pieces are\
      \ within 30 feet of each other, the pieces can re-form as a bonus action in\
      \ any space containing at least one of its pieces."
    "name": "Come Together (3/Day)"
  - "desc": "While the swarm remains motionless and isn't flying, it is indistinguishable\
      \ from a normal pile of junk."
    "name": "False Appearance"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a pebble. The swarm can't\
      \ regain hp or gain temporary hp."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 0 ft., one creature in the\
      \ swarm's space. *Hit:* 5 (2d4) slashing damage or 2 (1d4) slashing damage\
      \ if the swarm has half of its hp or less."
    "name": "Shards"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 30 ft., one target. *Hit:*\
      \ 3 (1d6) piercing damage. A piece of the swarm breaks off, falling into the\
      \ target's space."
    "name": "Shrapnel"
  - "desc": "The shard swarm envelopes one Medium or smaller creature in its space.\
      \ The target must succeed on a DC 13 Dexterity saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ inside the swarm for 1 minute. The target has disadvantage on this saving\
      \ throw if the shard swarm used Come Together to form in the target's space.\
      \ While [restrained](Mechanics/CLI/rules/conditions.md#Restrained), the target\
      \ doesn't take damage from the swarm's Shards action, but it takes 5 (2d4)\
      \ slashing damage if it takes an action that requires movement, such as attacking\
      \ or casting a spell with somatic components. A creature within 5 feet of the\
      \ swarm can take an action to pull a [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ creature out of the swarm. Doing so requires a successful DC 13 Strength check,\
      \ and the creature making the attempt takes 5 (2d4) slashing damage."
    "name": "Contain (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/shard-swarm-ccodex.png"
```
^statblock

## Environment

any