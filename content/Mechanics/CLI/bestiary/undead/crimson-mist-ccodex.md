---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Crimson Mist
---
# [Crimson Mist](Mechanics\CLI\bestiary\undead/crimson-mist-ccodex.md)
*Source: Creature Codex p. 67*  

*A thick crimson haze floats lazily through the air. Every few seconds, some of the mist coalesces into a drop of liquid that spatters beneath it, leaving a thin trail of blood in its wake.*

All vampires die horribly when exposed to the sun's golden rays. Yet when a vampire is killed by sunlight while feeding upon a living victim, its blood-fattened body explodes into a fine, crimson mist. The vampire's mind and personality are destroyed by the light of the sun, but its unholy lust for blood and hatred of the living persist in the form of a cloud of sanguine mist.

## Bloody Thoughts

A crimson mist begins its existence as an unthinking creature of animalistic instincts. However, as it feeds on the blood of the living, it also feeds on their thoughts. Over years of feeding, fragmented memories from hundreds of victims—and sometimes even memories from the vampire that spawned it—congeal into a patchwork consciousness. The unending torment of fractured thoughts and incoherent schemes only drives the mist deeper into homicidal madness.

## Reclaimed Memories

Some mists overcome the chaos of their thoughts and are able to create a cogent personality from the disparate snapshots of hundreds of lives. These mists gain the ability to speak any language their victims knew and can draw upon dozens of personas as they toy with their victims. They occasionally form into humanoid silhouettes, as if trying to regain their lost humanity. A mist that has reformed a personality has an Intelligence score of 17 (+3), a Wisdom score of 15 (+2), and a Charisma score of 18 (+4). Its Wisdom and Charisma saving throws increase to Wis +4 and Cha +6. It also gains the ability to speak all languages it knew in life.

## Undead Nature

The crimson mist doesn't require air, food, drink, or sleep.

```statblock
"name": "Crimson Mist (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"modifier": !!int "5"
"stats":
  - !!int "3"
  - !!int "20"
  - !!int "18"
  - !!int "5"
  - !!int "13"
  - !!int "8"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "4"
  - "charisma": !!int "2"
"damage_resistances": "acid; lightning; thunder; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Understands but can't speak"
"cr": "6"
"traits":
  - "desc": "The crimson mist is weightless and can enter a hostile creature's space\
      \ and stop there. In addition, if air can pass through a space, the mist can\
      \ do so without squeezing."
    "name": "Pseudocorporeal"
  - "desc": "Whenever the crimson mist deals necrotic damage to a living creature\
      \ with blood in its body, the creature's hp maximum is reduced by the same amount\
      \ and the mist regains hp equal to half the necrotic damage dealt. The reduction\
      \ lasts until the creature finishes a long rest. The creature dies if this effect\
      \ reduces its hp maximum to 0."
    "name": "Sanguine Feast"
  - "desc": "The crimson mist has the following flaws:\n\n- *Forbiddance.* The crimson\
      \ mist can't enter a residence without an invitation from one of the occupants.\
      \  \n- *Harmed by Running Water.* The crimson mist takes 20 force damage if\
      \ it ends its turn above or within running water.  \n- *Sunlight Hypersensitivity.*\
      \ The crimson mist takes 20 radiant damage when it starts its turn in sunlight.\
      \ While in sunlight, it has disadvantage on attack rolls and ability checks.\
      \  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "The mist moves up to its speed. While doing so, it can enter a Medium\
      \ or smaller creature's space. When the mist enters a creature's space, the\
      \ creature must make a DC 15 Dexterity saving throw. On a successful save, the\
      \ creature can choose to be pushed 5 feet back or to the side of the mist. A\
      \ creature that chooses not to be pushed suffers the consequences of a failed\
      \ saving throw.\n\nOn a failed save, the mist enters the creature's space, and\
      \ the creature takes 15 (4d6) necrotic damage and is engulfed. The engulfed\
      \ creature can't breathe, is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and takes 15 (4d6) necrotic damage at the start of each of the mist's turns.\
      \ When the mist moves, the engulfed creature doesn't move with it, and is freed.\
      \ An engulfed creature can try to escape by taking an action to make a DC 14\
      \ Strength check. On a success, the creature escapes and enters a space of its\
      \ choice within 5 feet of the mist. A creature within 5 feet of the mist can\
      \ take an action to pull a creature out of the mist. Doing so requires a DC\
      \ 14 Strength check, and the creature making the attempt takes 14 (4d6) necrotic\
      \ damage. The mist can only engulf one Medium or smaller creature at a time."
    "name": "Engulf"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/crimson-mist-ccodex.png"
```
^statblock

## Environment

any