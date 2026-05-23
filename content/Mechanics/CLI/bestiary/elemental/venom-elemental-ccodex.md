---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Venom Elemental
---
# [Venom Elemental](Mechanics\CLI\bestiary\elemental/venom-elemental-ccodex.md)
*Source: Creature Codex p. 140*  

*An enormous viper formed of green liquid curls upward, its dripping fangs ready to strike.*

## The Queen's Servants

Servants of the [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md), venom elementals are summoned from the demiplane of poisons. Venom elementals resemble water elementals but almost always take the form of a snake with prominent fangs.

## Willing Visitors

Unlike other elementals, these creatures crave summoning to the Material Plane, where they can observe the effects of their bites on living creatures.

## Elemental Nature

The venom elemental doesn't require air, food, drink, or sleep.

> [!note] Conjuring Blood and Venom Elementals
> 
> Conjuring a venom elemental or a blood elemental is similar to summoning a water elemental—with a few particular changes. For both types, the spell has the same casting time, range, and duration. For a venom elemental, the water and sand used as material components are replaced by water and venom taken from a giant spider or snake within the last 3 days. For a blood elemental, the material component is salt water with at least 1 gallon of fresh, uncongealed blood added to it.
^conjuring-blood-and-venom-elementals

```statblock
"name": "Venom Elemental (CCodex)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "6"
  - !!int "10"
  - !!int "8"
"speed": "40 ft., swim 50 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands Primordial but can't speak"
"cr": "4"
"traits":
  - "desc": "The elemental can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Liquid Form"
  - "desc": "The elemental has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while underwater."
    "name": "Underwater Camouflage"
"actions":
  - "desc": "The venom elemental makes two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage plus 7 (2d6) poison damage, and the creature\
      \ must succeed on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/venom-elemental-ccodex.png"
```
^statblock

## Environment

any