---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mytholabe
---
# [Mytholabe](Mechanics\CLI\bestiary\construct/mytholabe-ccodex.md)
*Source: Creature Codex p. 271*  

*An ever-shifting clockwork wonder engineered by the divine floats a few feet off the ground, bearing the weapons of legends long past.*

When heroes die, their magic equipment is often buried with them or passed to their descendents, but sometimes the gods have other plans for such items. The gods will bind the personal effects of their many fallen champions into clockwork mechanisms that do their bidding.

## Impervious

Crafted from the finest, toughest materials, and resonating with divine power that emits a deep, beautiful thrum, it is virtually impossible to damage a mytholabe through conventional heroic means. Magic weapons clang harmoniously off it with no lasting impact, and magical effects fare only slightly better.

## Weakness to the mundane

Mytholabes are broken, not killed. A common spear thrust into a gear will mar the perfection of its mechanical workings and its harmonic resonance. Mundane weapons are the most effective, but the nails-on-chalkboard screeching during the dismantling process must be painfully endured.

## Housing for sentience

Sometimes a sentient weapon is part of the machine, and its personality takes over (or corrupts) it. Some weapons find this pleasing; others, suffocating.

## Construct Nature

mytholabe doesn't require air, food, drink, or sleep.

```statblock
"name": "Mytholabe (CCodex)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "13"
  - !!int "18"
  - !!int "6"
  - !!int "16"
  - !!int "1"
"speed": "0 ft., fly 30 ft. (hover)"
"damage_resistances": "acid, cold, fire, radiant, thunder"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "passive Perception 13"
"languages": "Understands but can't speak"
"cr": "9"
"traits":
  - "desc": "The mytholabe's innate spellcasting ability is Wisdom (spell save DC\
      \ 0). It can innately cast the following spells, requiring no material components:\n\
      \n**1/day each:** [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md) (self\
      \ only)"
    "name": "Innate Spellcasting"
  - "desc": "The mytholabe is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The mytholabe has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The mytholabe's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Whenever the mytholabe is hit by a magical weapon attack, it recharges\
      \ its Purifying Resonance ability."
    "name": "Melodious Recharge"
  - "desc": "When the mytholabe suffers a critical hit from a nonmagical weapon, the\
      \ attacker quadruples the dice rolled instead of doubling them."
    "name": "Spanner In the Works"
  - "desc": "If the mytholabe is inhabited by a sentient weapon, its mental statistics\
      \ and alignment change to match that of the weapon's."
    "name": "Sentient Transformation"
  - "desc": "When the mytholabe is hit with a nonmagical melee weapon attack, each\
      \ creature within 15 feet of it must succeed on a DC 16 Constitution saving\
      \ throw or be [deafened](Mechanics/CLI/rules/conditions.md#Deafened) for 1 minute."
    "name": "Unbearable Scraping"
"actions":
  - "desc": "The mytholabe makes three heroic jab attacks. When its Purifying Resonance\
      \ is available, it can use the resonance in place of one heroic jab attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) piercing damage plus 7 (2d6) radiant damage."
    "name": "Heroic Jab"
  - "desc": "The mytholabe thrums with a harmonic resonance that brings order to those\
      \ within 30 feet. Each creature in that area must succeed on a DC 16 Constitution\
      \ saving throw or have all conditions and magical effects on it ended immediately\
      \ and any concentration it's maintaining broken."
    "name": "Purifying Resonance (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/mytholabe-ccodex.png"
```
^statblock

## Environment

any