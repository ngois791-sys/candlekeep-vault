---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- War Machine Golem
---
# [War Machine Golem](Mechanics\CLI\bestiary\construct/war-machine-golem-ccodex.md)
*Source: Creature Codex p. 205*  

*A tavern-sized, iron construct crushes everything in its path, sweeping away enemies and walls with one swipe of its mighty fist. The top of its head sports a catapult launching boulders.*

War machine golems are 40-foot-high, self-piloting siege weapons powered by dwarven engineering and necromancy.

## Fueled by Dead Dwarves

It takes a battalion of dwarf engineers a decade to manufacture a body for a golem war machine. Once the body is constructed, a circle of five necromancers summons the spirits of the dwarves' ancestors. Infused with these spirits, the body comes to life. The construct is bound to a master by the circle of necromancers at the time of the spirit infusion, usually a dwarf general. If the golem loses its master, it follows its last order and then lies dormant until another circle of necromancers is assembled to cast a ritual to bind the construct to a new master.

## Fueled by Dead Dwarves

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "War Machine Golem (CCodex)"
"size": "Gargantuan"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "232"
"hit_dice": "15d20 + 75"
"modifier": !!int "-1"
"stats":
  - !!int "26"
  - !!int "8"
  - !!int "21"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "40 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands Dwarvish but can't speak"
"cr": "18"
"traits":
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The golem deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The golem makes two slam attacks and one catapult attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:*\
      \ 22 (4d6 + 8) bludgeoning damage."
    "name": "Slam"
  - "desc": "The war machine golem hurls a boulder at a point it can see within 120\
      \ feet of it. Each creature within 10 feet of that point must make a DC 19 Dexterity\
      \ saving throw. On a failure, a target takes 16 (3d10) bludgeoning damage\
      \ and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success,\
      \ a target takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Catapult"
  - "desc": "The war machine golem breathes fire in a 60-foot cone. Each creature\
      \ in the area must make a DC 19 Dexterity saving throw, taking 35 (10d6) fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/war-machine-golem-ccodex.png"
```
^statblock

## Environment

any