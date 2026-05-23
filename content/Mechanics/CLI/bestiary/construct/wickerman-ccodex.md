---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wickerman
---
# [Wickerman](Mechanics\CLI\bestiary\construct/wickerman-ccodex.md)
*Source: Creature Codex p. 380*  

*A burning effigy lumbers across the open plains. It belches black smoke with every step it takes, and the tortured screams of the humanoids inside it fill the air.*

## Empowered by Sacrifice

In ancient times, the druids of the flame burned people alive in giant wickermen as sacrifices to the gods. The druids soon discovered a strange phenomenon when they burned the wickermen: the sacrifices' souls were trapped within the construct, filling it with rage. The druids of the flame learned to control the wickerman's rage and turned their sacrifice into a weapon of war.

## Staff of Willow

A branch of the willow tree used to create the wickerman is formed into a staff, carved with runes, and conditioned with incense. The wielder can control a wickerman as long as it is within 120 feet of the wickerman and must use its action to command the wickerman to take an action.

## Construct Nature

The wickerman doesn't require air, food, drink, or sleep.

```statblock
"name": "Wickerman (CCodex)"
"size": "Huge"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "21"
  - !!int "3"
  - !!int "14"
  - !!int "15"
"speed": "40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 120 ft. (blind beyond\
  \ this radius), passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "9"
"traits":
  - "desc": "If the staff controlling the wickerman is broken or is not being worn\
      \ or carried by a humanoid, the wickerman goes berserk. On each of its turns\
      \ while berserk, the wickerman attacks the nearest creature it can see. If no\
      \ creature is near enough to move to and attack, the wickerman attacks an object\
      \ with preference for an object smaller than itself. Once the wickerman goes\
      \ berserk, it continues to do so until it is destroyed, until a new staff is\
      \ created, or until the staff is worn or carried by a humanoid."
    "name": "Berserk"
  - "desc": "A creature that touches the wickerman or hits it with a melee attack\
      \ while within 5 feet of it takes 5 (1d10) fire damage. If the wickerman's\
      \ flame is ever doused, it is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until the flame is rekindled by dealing at least 10 fire damage to it."
    "name": "Blazing Fury"
  - "desc": "If the wickerman is on fire, it takes 1 cold damage for every 5 feet\
      \ it moves in water or for every gallon of water splashed on it. If the wickerman\
      \ takes at least 100 points of cold damage within a 1 minute period, its flame\
      \ is doused."
    "name": "Water Susceptibility"
"actions":
  - "desc": "The wickerman makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 120 ft., one target. *Hit:*\
      \ 27 (5d10) fire damage."
    "name": "Blazing Ray"
  - "desc": "*Melee Weapon Attack:* +8, reach 10 ft., one target. *Hit:* 15 (2d10\
      \ + 4) bludgeoning damage plus 5 (1d10) fire damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). The wickerman has two fists, each of which can grapple only\
      \ one target."
    "name": "Slam"
  - "desc": "The wickerman makes one slam attack against a target it is grappling.\
      \ If the attack hits, the target is imprisoned inside its burning body, and\
      \ the grapple ends. A creature imprisoned in the wickerman is [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), has total cover\
      \ against attacks and other effects outside the wickerman, and it takes 17 (5d6)\
      \ fire damage at the start of each of the wickerman's turns. Up to 6 Medium\
      \ or smaller creatures can fit inside a wickerman's body. If the wickerman takes\
      \ 25 damage or more from a creature inside of it, the wickerman must succeed\
      \ on a DC 14 Constitution saving throw or the creature bursts free from it.\
      \ The creature falls [prone](Mechanics/CLI/rules/conditions.md#Prone) in a space\
      \ within 10 feet of the wickerman. If the wickerman dies, all creatures inside\
      \ of it are no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the burning corpse by using 15 feet of movement,\
      \ exiting [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Imprison"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/wickerman-ccodex.png"
```
^statblock

## Environment

forest