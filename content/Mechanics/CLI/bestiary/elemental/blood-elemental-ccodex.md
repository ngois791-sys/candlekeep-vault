---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blood Elemental
---
# [Blood Elemental](Mechanics\CLI\bestiary\elemental/blood-elemental-ccodex.md)
*Source: Creature Codex p. 138*  

*A swirling, bubbling, ambulatory glob of blood the size of a hogshead cask lurches forward.*

Native to a lake of churning blood on an abyssal plane, blood elementals aren't typical elementals.

## Drawn to Life

A blood elemental is drawn to movement and absorbs whatever living creatures it finds, increasing its size and power in the process. Though feeding is not necessary to sustain themselves, blood elementals, over time, will shrink unless they consume living creatures. However, their need for prey is relatively slight—once a week to maintain their size.

## Blood Summoning

Offerings of blood and blood magic spells draw blood elementals from their planar homes, with the proper ritual. They also sometimes follow in the wake of certain demons and devils, devouring entire bodies in a matter of hours. When a blood elemental feeds, it first removes all liquids, then liquefies and consumes the remaining flesh, and finally sucks out the marrow, leaving behind only dry, reddish bones.

## Elemental Nature

The blood elemental doesn't require air, food, drink, or sleep.

> [!note] Blood Elementals in Midgard
> 
> Perhaps not surprising, blood elementals are commonly found in the Blood Hell and in the rites of the blood mages of Naa'Kesh and similar blood cults. Blood mages seem able to retain tiny blood elementals as familiars or guardians of some kind, though the exact nature of their bond is a mystery they guard jealously. Many small sects of blood cultists seem to learn the secret, leading some savants to believe that this knowledge is freely shared by priests of Marena and similar dark gods. For more information on blood magic and spells, see the "Fifth Edition Appendix" in the Midgard Worldbook.
^blood-elementals-in-midgard

```statblock
"name": "Blood Elemental (CCodex)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "18"
  - !!int "5"
  - !!int "10"
  - !!int "5"
"speed": "30 ft."
"damage_vulnerabilities": "poison"
"damage_resistances": "acid; fire; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "necrotic, psychic"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial"
"cr": "5"
"traits":
  - "desc": "Each time the elemental takes cold damage, its speed is reduced by 10\
      \ feet until the end of its next turn."
    "name": "Coagulate"
  - "desc": "If the blood elemental becomes entirely submerged in water, it dissipates\
      \ and dies instantly."
    "name": "Destroyed By Water"
  - "desc": "The elemental can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Liquid Form"
"actions":
  - "desc": "The elemental makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "Each creature in the elemental's space must make a DC 15 Constitution\
      \ saving throw. On a failure, a creature takes 10 (3d6) necrotic damage and,\
      \ if it is Large or smaller, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 13). A [grappled](Mechanics/CLI/rules/conditions.md#Grappled) creature\
      \ is [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and unable to\
      \ breathe. If the saving throw is successful, the creature is pushed out of\
      \ the elemental's space. The elemental can grapple one Large creature or up\
      \ to two Medium or smaller creatures at one time.\n\nAt the start of the elemental's\
      \ turn, each target [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by\
      \ it takes 10 (3d6) necrotic damage. A creature within 5 feet of the elemental\
      \ can use its action to make a DC 15 Strength check, freeing a [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ creature on a success. When Blood Drain deals 30 or more necrotic damage,\
      \ the elemental grows in size as though affected by an enlarge/reduce spell.\
      \ This increase in size lasts until the blood elemental finishes a long rest."
    "name": "Blood Drain (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/blood-elemental-ccodex.png"
```
^statblock

## Environment

planar