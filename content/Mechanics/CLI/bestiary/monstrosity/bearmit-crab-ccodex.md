---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bearmit Crab
---
# [Bearmit Crab](Mechanics\CLI\bestiary\monstrosity/bearmit-crab-ccodex.md)
*Source: Creature Codex p. 52*  

*What at first looks like an innocent pile of rocks on the shore turns out to be the shell of a bear-like creature brandishing two giant crab claws at the end of its powerful arms.*

These dangerous monstrosities can turn seemingly harmless beaches and shallows into treacherous stretches of feeding grounds. Only the occasional scattered bones or stuck weapon give any clue as to the true nature of these creatures.

## Coastal Guardians

Created by a great wizard to guard her coastal keep in years long past, these monstrosities now roam the rocky coastlines, indiscriminately preying on unfortunate victims near the shore and in shallow waters. Sometimes, those particularly adept at taming and training wild beasts may keep small groups of bearmit crabs as guardians.

## Crafted Homes

Driven by the scarcity of shells large enough to accommodate their size, bearmit crabs have adapted by crafting their own shells, using rocks glued together with sticky propolis. More commonly known as bee glue, propolis is harvested by bearmit crabs from the hives they find near the coastline.

## Viscid Shells

Many adventurers get a nasty surprise when they try to stab or slash at the shell. Intuitively, the attackers aim for the crevices between the rocks, only to find their weapons hopelessly stuck fast in the shell's binding agent. To further complicate matters, bashing on the shell with blunter weapons doesn't prove particularly effective. Often, weapons of past victims are compelling lures, for few can resist a seemingly unattended sword sticking out of a pile of rocks.

```statblock
"name": "Bearmit Crab (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "4"
  - !!int "13"
  - !!int "6"
"speed": "30 ft., swim 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_resistances": "bludgeoning"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "When a creature hits the bearmit crab with a slashing or piercing melee\
      \ weapon, the creature must succeed on a DC 13 Strength saving throw, or its\
      \ weapon becomes stuck to the bearmit crab's shell. While the weapon is stuck,\
      \ it can't be used. A creature can pull the weapon free by taking an action\
      \ to make a DC 13 Strength check and succeeding."
    "name": "Viscid Shell"
  - "desc": "The bearmit crab has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "While the bearmit crab remains motionless, it is indistinguishable from\
      \ a normal pile of rocks."
    "name": "False Appearance"
"actions":
  - "desc": "The bearmit crab makes two attacks. one claw attack and one bite attack\
      \ or two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) bludgeoning damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 13) if it is a Medium or smaller creature. Until this grapple ends,\
      \ the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The bearmit crab has two claws, each of which can grapple only one target."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/bearmit-crab-ccodex.png"
```
^statblock

## Environment

coastal