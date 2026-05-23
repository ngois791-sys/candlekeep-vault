---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Devil Shark
---
# [Devil Shark](Mechanics\CLI\bestiary\monstrosity/devil-shark-ccodex.md)
*Source: Creature Codex p. 98*  

*With a fang-filled maw and the glimmer of malevolent intelligence in its ruby red eyes, this shark-like creature glides through the depths in complete silence.*

## Relentlessly Territorial

This terrifying creature possesses a cunning and devious mind which it uses to bend others to its will. The devil shark considers itself superior to all other creatures of the sea and goes to great lengths to prove it. A merciless, vicious predator when active, a devil shark carves out and defends a territory for itself measured in leagues, relentlessly hunting down any creature it considers a competitor for primacy.

## Slumbering Evil

The creature relies in part on the terror it spreads during its periods of activity to keep it safe and undisturbed during its long periods of dormancy. While dormant, it sleeps in deep undersea caves or ancient submerged structures of unknown artifice.

## Object of Veneration

The devil shark is a solitary creature, though it sometimes enjoys the worship of sahuagin. As rapacious as the hungriest shark, the devil shark enjoys consuming the flesh of sentient creatures and looks kindly on those providing it with such sacrifices, though it will just as soon eat those same admirers should such offerings cease.

```statblock
"name": "Devil Shark (CCodex)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "198"
"hit_dice": "12d20 + 72"
"modifier": !!int "2"
"stats":
  - !!int "24"
  - !!int "14"
  - !!int "22"
  - !!int "14"
  - !!int "20"
  - !!int "14"
"speed": "0 ft., swim 60 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "11"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+10"
"damage_resistances": "fire"
"damage_immunities": "cold"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 20"
"languages": "Deep Speech, Aquan, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "The devil shark has advantage on melee attack rolls against any creature\
      \ that doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "The devil shark has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The devil shark has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The devil shark can magically command any shark within 120 feet of it,\
      \ using a limited telepathy. This command is limited to simple concepts such\
      \ as \"come here,\" \"defend me,\" or \"attack this target.\""
    "name": "Shark Telepathy"
  - "desc": "The devil shark can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 5 ft., one target. *Hit:*\
      \ 29 (4d10 + 7) piercing damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 18)."
    "name": "Bite"
  - "desc": "The devil shark makes one bite attack against a Large or smaller target\
      \ it is grappling. If the attack hits, the target is also swallowed, and the\
      \ grapple ends. While swallowed, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside the devil shark, and it takes\
      \ 21 (6d6) acid damage at the start of each of the devil shark's turns. A\
      \ devil shark can have two Large, four Medium, or six Small creatures swallowed\
      \ at a time.\n\nIf the devil shark takes 30 damage or more on a single turn\
      \ from a swallowed creature, the devil shark must succeed on a DC 18 Constitution\
      \ saving throw or regurgitate all swallowed creatures, which fall [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ within 10 feet of the devil shark. If the devil shark dies, a swallowed creature\
      \ is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by\
      \ it and can escape by using 20 feet of movement, exiting [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
  - "desc": "The devil shark exhales a 60-foot cone of supernaturally cold water.\
      \ Each creature in that area must make a DC 18 Constitution saving throw. On\
      \ a failed save, a target takes 54 (12d8) cold damage and is pushed 20 feet\
      \ away from the devil shark. On a success, a target takes half the damage but\
      \ isn't pushed."
    "name": "Freezing Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/devil-shark-ccodex.png"
```
^statblock

## Environment

underwater