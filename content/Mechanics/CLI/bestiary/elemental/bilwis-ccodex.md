---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bilwis
---
# [Bilwis](Mechanics\CLI\bestiary\elemental/bilwis-ccodex.md)
*Source: Creature Codex p. 53*  

*An enraged mass of malcontents storms across the tavern, overturning tables, busting bottles, and browbeating innocent patrons.*

## Summoned Saboteur

The bilwis is an elemental creature. Usually summoned on behalf of another to ruin an enemy's crops, the bilwis hides in the fields until harvest draws near then rips through the crops, devouring and scattering the yield.

## False Undead

The form of a bilwis leads to them being misidentified as a ghost of some kind, and they are often referred to as a "field ghost." Though remedies for a haunting fail to drive them away, the remedies do sometimes add the undead to the list of local maladies when graves are disturbed unnecessarily.

## Shrouded in Superstition

Many farmers believe that if they plant and plow their fields from the outside inward, the bilwis won't be able to find its way in to damage their crops. The bilwis are also blamed for the spread of various illnesses but have no such ability.

## Elemental Nature

The bilwis doesn't require air, food, drink, or sleep.

```statblock
"name": "Bilwis (CCodex)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "11d8"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "10"
  - !!int "10"
  - !!int "13"
  - !!int "16"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "lightning, thunder"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Auran"
"cr": "1"
"traits":
  - "desc": "The bilwis can enter a hostile creature's space and stop there. It can\
      \ move through a space as narrow as 1 inch wide without squeezing."
    "name": "Air Form"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "Each creature in the bilwis' space and within 5 feet of it must make\
      \ a DC 12 Strength saving throw. On a failure, a target takes 14 (4d6) bludgeoning\
      \ damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On\
      \ a success, a target takes half the bludgeoning damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Whirlwind (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/bilwis-ccodex.png"
```
^statblock

## Environment

farmland