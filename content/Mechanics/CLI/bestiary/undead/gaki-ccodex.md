---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gaki
---
# [Gaki](Mechanics\CLI\bestiary\undead/gaki-ccodex.md)
*Source: Creature Codex p. 222*  

*A wretched spirit, at once both emaciated and bloated, stuffs huge handfuls of filth from a dung heap into its gaping, toothy maw.*

The gaki, or hungry ghosts, are restless spirits of avaricious humans, cursed by the gods to live eternally in constant hunger. This hunger manifests itself as an insatiable desire to consume filth or cannibalistically devour human carrion. A hungry ghost appears as a hairless human with deep, bruised-blue skin stretched tight over both its emaciated ribs and its pendulous belly.

## Desperate Hunger

Gaki rarely hunt mortal creatures. Though gaki can kill mortal creatures and devour their flesh, they find the rancid taste of carrion far more appetizing. When gaki do attack humanoids, it is because that mortal is keeping it from eating. Gaki cursed to eternally feed on feces, for instance, stalk outhouses and viciously attack the creatures relieving themselves within, as the gaki believes the creatures are guarding their rightful meal.

## Esoteric Devourers

A hungry ghost is cursed to consume a single thing for eternity. Usually the object of their hunger is disgusting refuse like feces or garbage, but some gaki have more unusual tastes. Often, these tastes ironically reflect the sins these spirits committed in life. Gaki are generally benign, but the hungers that put them in conflict with civilized creatures—such as hungering for gold, clothing, magical scrolls—are the most destructive of all.

## Hungry Dead Nature

The hungry ghost doesn't require air or sleep.

```statblock
"name": "Gaki (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "4"
"stats":
  - !!int "7"
  - !!int "18"
  - !!int "17"
  - !!int "10"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "4"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "The languages it knew in life"
"cr": "8"
"traits":
  - "desc": "If a creature starts its turn within 10 feet of a gaki, it is overwhelmed\
      \ by a hunger that dissolves fat and atrophies muscle. It must make a DC 14\
      \ Constitution saving throw, taking 11 (2d10) necrotic damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Aura of Famine"
  - "desc": "At the start of its turn, if a creature can see the gaki, it must make\
      \ a DC 14 Wisdom saving throw. On a failure, it is overcome with a desire to\
      \ kill and eat the ghost, and it must move as close to the gaki as it can."
    "name": "Gluttonous Attraction"
  - "desc": "The gaki has advantage on melee attack rolls against any creature that\
      \ doesn't have all its hp."
    "name": "Hungry Frenzy"
  - "desc": "The gaki can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The gaki makes two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage plus 7 (2d6) acid damage."
    "name": "Bite"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 30 ft., one target. *Hit:*\
      \ 21 (6d6) acid damage."
    "name": "Spit Acid"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/gaki-ccodex.png"
```
^statblock

## Environment

any