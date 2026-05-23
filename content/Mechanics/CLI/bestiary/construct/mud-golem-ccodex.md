---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mud Golem
---
# [Mud Golem](Mechanics\CLI\bestiary\construct/mud-golem-ccodex.md)
*Source: Creature Codex p. 201*  

{Some golems are made by the concentrated work of dozens or hundreds of priests, wizards, or other enchanters, focusing all their efforts on a suitably impressive display of their god's power or their arcane mastery. Others are thrown together by apprentices on a bet or just to prove that hair can, indeed, be animated as a construct. The latter are the lesser golems, a set of golems that are rather easy to create but are often rather feeble when compared to their full-fledged brethren.}

## Mundane Materials

The lesser golems of hair and mud are simply animated piles of those materials. Those made of glass and wood are sturdier and often ornamented in some fashion but are far less robust that iron or clay.

## Temple and Workshop Helpers

In many instances, a lesser golem is conjured or animated to remove some of the drudgery of daily tasks. Initiate priests ask a hair golem to sweep the floors and remove spent candles from chapels. Apprentice alchemists set mud or glass golems to stir cauldrons, pulverize noxious minerals, or feed fires.

## Construct Nature

A lesser golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Mud Golem (CCodex)"
"size": "Small"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "13"
  - !!int "3"
  - !!int "8"
  - !!int "1"
"speed": "20 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't adamantine."
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Understands the languages of its creator but can't speak"
"cr": "1"
"traits":
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The mud golem has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The mud golem makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Ranged Weapon Attack:* +2 to hit, range 30/120 ft., one target. *Hit:*\
      \ 3 (1d6) bludgeoning damage, and the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of its next turn."
    "name": "Mud Ball"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/mud-golem-ccodex.png"
```
^statblock

## Environment

any