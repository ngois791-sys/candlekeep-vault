---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ghoulsteed
---
# [Ghoulsteed](Mechanics\CLI\bestiary\undead/ghoulsteed-ccodex.md)
*Source: Creature Codex p. 177*  

*The ghouls create horrific, intelligent, undead mounts for their most worthy soldiers and priests.*

Although they're large, run on all fours, and can be ridden as mounts, ghoulsteeds are the undead remains of humanoids. They're created when a humanoid is killed by massive amounts of necrotic energy.

## Hideous Mounts

Darakhul prize these undead creatures as mounts. They're ridden during war and hunts, but they are sometimes also trained as guardians for households, businesses, or temples.

## Often Mute

Ghoulsteeds aren't quite as intelligent as ghouls, but they're cannier than most creatures give them credit for being. Certainly, unlike most creatures used as mounts, they are somewhat intelligent and capable of speech, but they prefer to remain mute as much as possible to avoid drawing attention to themselves. This makes them useful as gossips, spies, and informers among the darakhul, who have a tendency to forget their mounts' intelligences.

## Prone to Biting

Ghoulsteeds are notorious for nibbling, nipping, or outright biting their riders, creatures passing by them, or the like.

## Undead Nature

The ghoulsteed doesn't require air, food, drink, or sleep.

```statblock
"name": "Ghoulsteed (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "16"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "If the ghoulsteed moves at least 20 feet straight toward a creature and\
      \ then hits it with a bite attack on the same turn, that target must succeed\
      \ on a DC 14 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the ghoulsteed\
      \ can make one bite attack against it as a bonus action."
    "name": "Pounce"
  - "desc": "When the ghoulsteed uses the [Dash](Mechanics/CLI/rules/actions.md#Dash)\
      \ action, it can Dash again as a bonus action."
    "name": "Sprint (3/Day)"
  - "desc": "If damage reduces the ghoulsteed to 0 hp, it makes a Constitution saving\
      \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
      \ a critical hit. On a success, the ghoulsteed drops to 1 hp instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "A ghoulsteed makes two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage and the ghoulsteed gains 5 (1d10) temporary\
      \ hp. These temporary hp stack with each other, but the ghoulsteed can only\
      \ have a maximum of 10 temporary hp at one time."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/ghoulsteed-ccodex.png"
```
^statblock

## Environment

underground