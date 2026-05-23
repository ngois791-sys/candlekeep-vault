---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Peluda Drake
---
# [Peluda Drake](Mechanics\CLI\bestiary\dragon/peluda-drake-ccodex.md)
*Source: Creature Codex p. 131*  

*The drake's wedge-shaped head sits atop a long, snake-like neck. Its wingless body is covered in enormous quills.*

## War Beasts

Quill drakes are often tamed and trained by elves for use as beasts of war. While they do not take well to other races, they have a strange rapport with those of elven heritage.

## Quills and Darts

Some tribes of jungle elves and [cueyatl](Mechanics/CLI/bestiary/humanoid/cueyatl-ccodex.md) make use of peluda drake quills in blowguns or as speartips. The quills retain their poison for only a few days, so the tribes often keep one or more peluda as captives.

## Root Lairs

Unlike most drakes, the peluda do not nest in trees or on cliffs. Instead, they dig underground dens reeking with acid and damp with steam, sometimes near hot springs or sulfurous fumaroles. Their line of acid is especially effective in close quarters, where dodging it is nearly impossible.

```statblock
"name": "Peluda Drake (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "6"
  - !!int "14"
  - !!int "10"
"speed": "30 ft., burrow 20 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "Draconic"
"cr": "3"
"traits":
  - "desc": "The peluda has 24 large, spiny quills and dozens of smaller ones. It\
      \ uses a large quill every time it makes a quill attack or a creature is successfully\
      \ damaged by its Spiky Hide. Used quills regrow when it finishes a long rest."
    "name": "Quill Regrowth"
  - "desc": "A creature that touches the peluda or hits it with a melee attack while\
      \ within 5 feet of it must succeed on a DC 13 Dexterity saving throw or take\
      \ 4 (1d8) piercing damage and 3 (1d6) poison damage."
    "name": "Spiky Hide"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d10 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage plus 3 (1d6) poison damage."
    "name": "Tail"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 20/80 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage plus 3 (1d6) poison damage."
    "name": "Quill"
  - "desc": "The peluda uses one of the following breath weapons.\n\n- **Steam Breath.**\
      \ The drake exhales scalding steam in a 15-foot cone. Each creature in that\
      \ area must make a DC 13 Constitution saving throw, taking 22 (4d10) fire\
      \ damage on a failed save, or half as much damage on a successful one.  \n-\
      \ **Acid Breath.** The drake exhales acid in a 15-foot line that is 5 feet wide.\
      \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
      \ 22 (4d10) acid damage on a failed save, or half as much damage on a successful\
      \ one.  "
    "name": "Breath Weapons (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/peluda-drake-ccodex.png"
```
^statblock

## Environment

forest