---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Altar Flame Golem
---
# [Altar Flame Golem](Mechanics\CLI\bestiary\construct/altar-flame-golem-ccodex.md)
*Source: Creature Codex p. 193*  

*The large creature's rough, humanoid form is made of durable brick or stone, and its demonic face is shaped from flame.*

## Guardian of Fire

Certain fire cultists protect their sanctums in a surprising way. Those who seek to defile the holy altar of such cults find that it's capable of defending itself. The altar quickly takes a humanoid shape and destroys or drives out all who fail to show proper obeisance to the sacred flame, searing them with a holy inferno or crushing them with scorching fists of brick. These golems are found in larger, more important fire temples and seldom appear anywhere else.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Altar Flame Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "9"
  - !!int "18"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "20 ft."
"damage_immunities": "fire; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical Weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "10"
"traits":
  - "desc": "If the golem takes cold damage or is doused with at least three gallons\
      \ of water, it has disadvantage on attack rolls and ability checks until the\
      \ end of its next turn."
    "name": "Aversion to Water"
  - "desc": "When the altar flame golem is reduced to 0 hp, it explodes into shards\
      \ of hot stone and fire. Each creature within 15 feet of it must make a DC 16\
      \ Dexterity saving throw, taking 28 (8d6) fire damage on a failed save, or\
      \ half as much damage on a successful one. An altar flame golem is not immune\
      \ to the fire damage of another altar flame golem's death burst and doesn't\
      \ absorb it."
    "name": "Death Burst"
  - "desc": "While the golem remains motionless, it is indistinguishable from an altar\
      \ bearing an eternal flame."
    "name": "False Appearance"
  - "desc": "Whenever the golem is subjected to fire damage, it takes no damage and\
      \ instead regains a number of hp equal to the fire damage dealt."
    "name": "Fire Absorption"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The altar flame golem makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage plus 11 (2d10) fire damage."
    "name": "Slam"
  - "desc": "The golem breathes fire in a 30-foot cone. Each creature in that area\
      \ must make a DC 16 Dexterity saving throw, taking 36 (8d8) fire damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Flame Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/altar-flame-golem-ccodex.png"
```
^statblock

## Environment

urban