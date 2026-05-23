---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Grave Behemoth
---
# [Grave Behemoth](Mechanics\CLI\bestiary\undead/grave-behemoth-ccodex.md)
*Source: Creature Codex p. 208*  

*A massive giant reeking of rotting flesh shambles forward. Its rubbery skin constantly ripples as if living things are trapped underneath.*

## Weapon Against Giants

In the past, a necromancer kingdom neared destruction from rampaging giants. Their undead were not sufficient to defeat the giants, so they turned to even darker arts. The necromancers flayed the flesh off hill giants, keeping the skins mostly intact, and stuffed the resulting sacks of flesh full of humanoid bodies before sewing it back together. Then, they enveloped their creations in necrotic energy until the giant flesh animated. . . along with the zombies trapped inside.

## Out of Many, One

A grave behemoth is more than the sum of its grisly parts. The dark ritual forms a hive mind between the behemoth and its zombie tenants, which act as an extension of the behemoth's will.

## Undead Nature

A grave behemoth doesn't require air, food, drink, or sleep.

```statblock
"name": "Grave Behemoth (CCodex)"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "9"
"hp": !!int "210"
"hit_dice": "20d12 + 80"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "8"
  - !!int "19"
  - !!int "13"
  - !!int "10"
  - !!int "8"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "4"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "10"
"traits":
  - "desc": "The behemoth starts with two arms and two legs. If it loses one arm,\
      \ it can't multiattack. If it loses both arms, it can't slam. If it loses one\
      \ leg, its speed is halved. If it loses both legs, it falls [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If it has both arms, it can crawl. With only one arm, it can still crawl,\
      \ but its speed is halved. With no arms or legs, its speed is 0, and it can't\
      \ benefit from bonuses to speed."
    "name": "Fleshbag"
  - "desc": "At the end of any turn in which the behemoth took at least 30 damage,\
      \ roll a d8. On a 1, it loses an arm. On a 2, it loses a leg. In addition,\
      \ 2 (1d4) [zombies](Mechanics/CLI/bestiary/undead/zombie-xmm.md) fall [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in unoccupied spaces within 10 feet of the behemoth, spilling from the wound."
    "name": "Flesh Wound"
  - "desc": "The grave behemoth and any zombies within 30 feet of it have advantage\
      \ on saving throws against effects that turn undead."
    "name": "Turning Defiance"
  - "desc": "Zombies created by a grave behemoth's Flesh Wound and Hurl Flesh share\
      \ a telepathic link with it, are under its control, are immune to necrotic damage,\
      \ and act immediately and on the grave behemoth's initiative."
    "name": "Zombie Keeper"
"actions":
  - "desc": "The grave behemoth makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 19 (3d8 + 6) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 25 (3d12 + 6) piercing damage plus 14 (4d6) necrotic damage."
    "name": "Gorge"
  - "desc": "The grave behemoth vomits putrid flesh and 5 (2d4) [zombies](Mechanics/CLI/bestiary/undead/zombie-xmm.md)\
      \ in a 30-foot cone. Each creature in that area must make a DC 16 Dexterity\
      \ saving throw. On a failure, a target takes 38 (11d6) necrotic damage and\
      \ is covered in rotting slime for 1 minute. On a success, a target takes half\
      \ the necrotic damage and isn't covered in slime. A creature, including the\
      \ target, can take an action to clean off the slime. [Zombies](Mechanics/CLI/bestiary/undead/zombie-xmm.md)\
      \ under the grave behemoth's control have advantage on attack rolls against\
      \ creatures covered in a grave behemoth's slime."
    "name": "Hurl Flesh (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/grave-behemoth-ccodex.png"
```
^statblock

## Environment

any