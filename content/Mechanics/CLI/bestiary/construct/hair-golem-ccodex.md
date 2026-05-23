---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hair Golem
---
# [Hair Golem](Mechanics\CLI\bestiary\construct/hair-golem-ccodex.md)
*Source: Creature Codex p. 200*  

{Some golems are made by the concentrated work of dozens or hundreds of priests, wizards, or other enchanters, focusing all their efforts on a suitably impressive display of their god's power or their arcane mastery. Others are thrown together by apprentices on a bet or just to prove that hair can, indeed, be animated as a construct. The latter are the lesser golems, a set of golems that are rather easy to create but are often rather feeble when compared to their full-fledged brethren.}

## Mundane Materials

The lesser golems of hair and mud are simply animated piles of those materials. Those made of glass and wood are sturdier and often ornamented in some fashion but are far less robust that iron or clay.

## Temple and Workshop Helpers

In many instances, a lesser golem is conjured or animated to remove some of the drudgery of daily tasks. Initiate priests ask a hair golem to sweep the floors and remove spent candles from chapels. Apprentice alchemists set mud or glass golems to stir cauldrons, pulverize noxious minerals, or feed fires.

## Construct Nature

A lesser golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Hair Golem (CCodex)"
"size": "Small"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "13"
  - !!int "3"
  - !!int "8"
  - !!int "1"
"speed": "30 ft."
"damage_vulnerabilities": "slashing"
"damage_resistances": "bludgeoning, piercing from nonmagical weapons that aren't adamantine"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage. The target must succeed on a DC 11 Dexterity\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Lash"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/hair-golem-ccodex.png"
```
^statblock

## Environment

any