---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Shark Bowl
---
# [Giant Shark Bowl](Mechanics\CLI\bestiary\ooze/giant-shark-bowl-ccodex.md)
*Source: Creature Codex p. 284*  

*A giant shark within a huge fishbowl circles a myriad of shells, a small castle, and a treasure chest.*

## Bizarre Curiosity

A shark on dry land may not be very threatening, but a shark that shares its life force with a massive ooze is a different beast. It draws in its prey with the promise of treasure.

## Endless Appetite

The two monsters share a symbiotic attachment and would be doomed without one another. The shark and ooze both gain sustenance from living tissue the ooze gathers as the shark swims in the ooze, consuming it all. The magic within the giant shark bowl requires great energy to maintain, keeping the creature constantly hungry.

## Unknown Origin

A paranoid lich concocted this creature as an "improvement" on other oozes built to guard phylacteries. The lich reasoned that the illusion of a reward hidden inside the transparent ooze might sway possible thieves away from its true phylactery, especially if such a treasure had a "guard."

## Ooze Nature

The giant shark bowl doesn't require sleep.

```statblock
"name": "Giant Shark Bowl (CCodex)"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"modifier": !!int "-4"
"stats":
  - !!int "23"
  - !!int "3"
  - !!int "20"
  - !!int "1"
  - !!int "10"
  - !!int "5"
"speed": "20 ft., swim 20 ft."
"damage_resistances": "acid, fire, slashing"
"damage_immunities": "lightning"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 10"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The giant shark bowl can breathe air and water."
    "name": "Amphibious"
  - "desc": "The giant shark bowl has advantage on melee attack rolls against any\
      \ creature that doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "When the giant shark bowl is subjected to lightning damage, it takes\
      \ no damage and instead becomes charged for 1 minute. While charged, its attacks\
      \ deal an extra 2 (1d4) lightning damage."
    "name": "Electrical Charge"
  - "desc": "The shark bowl takes up its entire space. Other creatures can enter the\
      \ space, but they are subjected to the bowl's Engulf and have disadvantage on\
      \ the saving throw. Creatures inside the bowl can be seen but have total cover.\
      \ A creature within 5 feet of the bowl can take an action to pull a creature\
      \ out. Doing so requires a successful DC 15 Strength check, and the creature\
      \ making the attempt takes 22 (3d10 + 6) piercing damage. The bowl can hold\
      \ one Large creature or up to six Medium or smaller creatures inside it at a\
      \ time."
    "name": "Ooze Fish Bowl"
  - "desc": "The ooze and the giant shark's life forces have been entwined by an arcane\
      \ force. They share statistics as if they were one monster and can't be separated."
    "name": "Symbiotically Bound"
"actions":
  - "desc": "The giant shark bowl makes two attacks. one with its bite and one with\
      \ its pseudopod."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 22\
      \ (3d10 + 6) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 22 (3d10 + 6) bludgeoning damage."
    "name": "Pseudopod"
  - "desc": "The giant shark bowl moves up to its speed. While doing so, it can enter\
      \ Large or smaller creatures' spaces. Whenever the bowl enters a creature's\
      \ space, the creature must make a DC 16 Dexterity saving throw.\n\nOn a successful\
      \ save, the creature can choose to be pushed 5 feet back or to the side of the\
      \ bowl. A creature that chooses not to be pushed suffers the consequences of\
      \ a failed saving throw.\n\nOn a failed save, the bowl enters the creature's\
      \ space, and the creature takes 22 (3d10 + 6) piercing damage and is engulfed.\
      \ The engulfed creature can't breathe, is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and takes 22 (3d10 + 6) piercing damage at the start of each of the bowl's\
      \ turns. When the bowl moves, the engulfed creature moves with it.\n\nAn engulfed\
      \ creature can try to escape by taking an action to make a DC 15 Strength check.\
      \ On a success, the creature escapes and enters a space of its choice within\
      \ 5 feet of the bowl."
    "name": "Engulf"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/giant-shark-bowl-ccodex.png"
```
^statblock

## Environment

underground, urban