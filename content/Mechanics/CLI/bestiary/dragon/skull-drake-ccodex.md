---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Skull Drake
---
# [Skull Drake](Mechanics\CLI\bestiary\dragon/skull-drake-ccodex.md)
*Source: Creature Codex p. 132*  

*What at first appears to be a dead creature of some sort reveals itself to be a gray-skinned, winged serpent whose body is covered in a bony exoskeleton. Slender and snakelike, its leathery wings cling to its body tightly as it slithers out from hiding.*

Fierce in appearance and a formidable opponent, the skull drake is a scavenger and carrion eater. Though it enjoys chasing smaller scavengers away from a prize meal, it will flee at the first sign of a more powerful creature.

## Wandering Scavenger

When left to its own devices, the skull drake travels many miles between places of death, regularly revisiting sites where it feasted previously. Poisoned pools, places of execution, cemeteries, and-with caution and speed-the lairs of creatures who drag their meals home with them. Circling vultures and crows draw a skull drake's attention, and a sizeable battlefield may become a temporary home for a skull drake until opportunity or threat drives it elsewhere. A skull drake prefers to sleep in piles of bones and corpses, using its bony protrusions to blend in. It spits a cloud of deadly gas at any creature coming too close or uses its long neck to strike like a snake.

## Associate of Death

Skull drakes consider themselves natural companions to practitioners of the necromantic arts, viewing such partnerships as mutually beneficial. It provides both parties with a degree of protection, and it assures the drake regular feeding since it has no qualms about eating the rotten remains of failed projects.

```statblock
"name": "Skull Drake (CCodex)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "16"
  - !!int "8"
  - !!int "12"
  - !!int "10"
"speed": "40 ft., burrow 10 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_vulnerabilities": "radiant"
"damage_resistances": "poison"
"damage_immunities": "necrotic"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"traits":
  - "desc": "The skull drake has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "While in sunlight, the skull drake has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The skull drake makes two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 10 (2d6 + 3) piercing damage."
    "name": "Bite"
  - "desc": "The skull drake exhales a 15-foot cone of noxious, black gas. Each creature\
      \ in the area must make a DC 13 Constitution saving throw, taking 14 (4d6)\
      \ necrotic damage on a failed save, or half as much damage on a successful one.\
      \ A creature reduced to 0 hp by this damage dies."
    "name": "Necrotic Breath (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/skull-drake-ccodex.png"
```
^statblock

## Environment

any