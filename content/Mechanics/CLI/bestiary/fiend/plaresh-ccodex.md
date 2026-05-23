---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Plaresh
---
# [Plaresh](Mechanics\CLI\bestiary\fiend/plaresh-ccodex.md)
*Source: Creature Codex p. 89*  

*A squelching mass of fleshy worms twists and writhes. Thousands of thin bodies twine together, smooth skin and barbed segments giving way to eyeless heads with screeching, hissing maws. Green ichor drools from the mouths where tiny, needle-like teeth gleam.*

Plaresh demons arise from the slime and offal left behind in the wake of Qorgeth, Demon Lord of the Devouring Worm (Tome of Beasts, p. 90). Individually, these tiny worm demons are little more than a disgusting nuisance. When they band together into writhing masses hundreds or even thousands strong, the story changes drastically. The plaresh is an amalgamation of these demonic slivers, each linked into a cruel hive mind driven to common purpose in the service of the Writhing Prince.

## Devoured Tribute

Plaresh demons are more intelligent than any mortal vermin, but their lord's insatiable hunger overwhelms complex thought. Sometimes they act with a disturbing purpose which hints at a greater intelligence or plan, but mostly they exist to eat. When they devour a humanoid corpse, they send the unfortunate creature's soul to Qorgeth's tunnel‑realm, and a new plaresh slips through in the wake of the soul's passing.

```statblock
"name": "Plaresh (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "2"
  - !!int "17"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "3"
"speed": "30 ft., burrow 30 ft., swim 30 ft."
"damage_resistances": "cold, fire, lightning, bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft. (blind beyond\
  \ this radius), tremorsense 60 ft., passive Perception 11"
"languages": "Understands Abyssal but can't speak"
"cr": "3"
"traits":
  - "desc": "The plaresh can burrow through harder substances such as wood, stone,\
      \ or even metal. While doing so its burrow speed is reduced to half, and it\
      \ creates a cluster of bore holes that leaves the material porous and weak.\
      \ The material has 5 to its AC and half the usual hp."
    "name": "Grinding Maws"
  - "desc": "rThe plaresh has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The plaresh can occupy another creature's space and vice versa, and the\
      \ plaresh can move through any opening large enough for a Tiny worm. The plaresh\
      \ can't regain hp or gain temporary hp."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 0 ft., one creature in the\
      \ swarm's space. *Hit:* 14 (4d6) piercing damage, or 7 (2d6) piercing damage\
      \ if the swarm has half of its hit points or fewer. The target must make a DC\
      \ 13 Constitution saving throw, taking 7 (2d6) poison damage on a failed save,\
      \ or half as much damage on a successful one. If the target is wearing nonmagical\
      \ armor, the armor takes a permanent and cumulative 1 penalty to the AC it offers.\
      \ Armor reduced to an AC of 10 is destroyed."
    "name": "Bites"
  - "desc": "The plaresh targets one dead humanoid in its space. The body is destroyed,\
      \ and a new plaresh rises from the corpse. The newly created plaresh is free-willed\
      \ but usually joins its creator."
    "name": "Infest Corpse (Recharges after a Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/plaresh-ccodex.png"
```
^statblock

## Environment

any