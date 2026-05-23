---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ghost Dragon
---
# [Ghost Dragon](Mechanics\CLI\bestiary\undead/ghost-dragon-ccodex.md)
*Source: Creature Codex p. 170*  

*In the empty dragon's lair with no trace of treasure or beast, a cold breeze from nowhere wafts through the chamber. A wavering draconic form fades into sight, its hissing anger leaking out through translucent teeth.*

## The Wrath of Dragons

ghost dragon's creation does not differ greatly from the creation of a human ghost. Dragons of any size, color, or magical ability can become ghost dragons. If the circumstances of the dragon's demise are troubling or violent enough, the soul may be denied an afterlife, leaving the ghost dragon's spirit to haunt the Material Plane until it finds peace. Dragons whose wrathful natures are more intense than others are most likely to become ghost dragons.

## Tied to Lairs

Most ghost dragons are bound to the areas where they once laired. They may be able to roam within a mile or two of those places, but their unfinished business generally involves a notable event in their lairs: death at the hands of sneaky adventurers, betrayal by their followers, machinations of a rival dragon, etc. The ghost dragon may call upon the powers of its lair for a short time after its mortal death, but soon its lair powers (and its actions) fade. This tends to enrage the ghost dragon even more.

## Undead Nature

The ghost dragon doesn't require air, food, drink, or sleep.

```statblock
"name": "Ghost Dragon (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "126"
"hit_dice": "23d10"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "19"
  - !!int "10"
  - !!int "14"
  - !!int "16"
  - !!int "19"
"speed": "0 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "The languages it knew in life"
"cr": "11"
"traits":
  - "desc": "The ghost dragon can see 60 feet into the Ethereal Plane when it is on\
      \ the Material Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The ghost dragon can move through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The ghost dragon makes one claw attack and one withering bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (2d10 + 4) piercing damage, and the target must succeed on a DC 17 Constitution\
      \ saving throw or take 18 (4d8) necrotic damage."
    "name": "Withering Bite"
  - "desc": "The ghost dragon enters the Ethereal Plane from the Material Plane, or\
      \ vice versa. It is visible on the Material Plane while it is in the Border\
      \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
      \ the other plane."
    "name": "Etherealness"
  - "desc": "The ghost dragon exhales a blast of icy terror in a 30-foot cone. Each\
      \ living creature in that area must make a DC 16 Wisdom saving throw. On a failure,\
      \ a creature takes 44 (8d10) psychic damage and is [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. On a success, it takes half the damage and isn't [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ A [frightened](Mechanics/CLI/rules/conditions.md#Frightened) target can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success."
    "name": "Horrifying Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/ghost-dragon-ccodex.png"
```
^statblock

## Environment

any