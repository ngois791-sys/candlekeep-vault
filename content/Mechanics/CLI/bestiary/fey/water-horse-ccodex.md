---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Water Horse
---
# [Water Horse](Mechanics\CLI\bestiary\fey/water-horse-ccodex.md)
*Source: Creature Codex p. 373*  

*The beautiful horse twitches slightly before it changes into a humanoid creature with a horse's head. Its beauty is transfixing despite the razor-sharp teeth.*

## A Dark Beast of Legend

The water horse often crosses to the mortal world via water bridges. A horse-headed humanoid in its natural form, the water horse can also appear as a fetching humanoid or a beautiful riding horse.

## An Aquatic Danger

While not a mindless killer, the water horse, also known as the each-uisge, has a taste for human flesh, and those who dwell in the mortal world eat well. They live on the shores of seas or lakes, often posing as fisher-folk or sailors to blend in with the local population. They use their charms and guile to draw victims back to their lair to feast. Water horses are particularly dangerous when a mated pair have young that need to be fed. While water horses create homes at the edge of the water, most have a secret lair beneath the surface.

```statblock
"name": "Water Horse (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "natural armor (humanoid form); 14 from natural armor (horse or hybrid\
  \ form)"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "10"
  - !!int "12"
  - !!int "15"
"speed": "30 ft., swim 60 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Sylvan"
"cr": "4"
"traits":
  - "desc": "The water horse can breathe air and water."
    "name": "Amphibious"
  - "desc": "The water horse can use its action to polymorph into a Medium humanoid,\
      \ a horse, or its true horse-humanoid hybrid form. Its statistics, other than\
      \ its size, speed, and AC, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "The water horse can use its Charming Gaze. In horse form, it then makes\
      \ two bite attacks. In humanoid form, it then makes two longsword attacks. In\
      \ hybrid form, it then makes two attacks. one with its bite and one with its\
      \ longsword."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) piercing damage."
    "name": "Bite (Hybrid or Horse Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with\
      \ two hands."
    "name": "Longsword (Humanoid or Hybrid Form Only)"
  - "desc": "{atk rw} +4 to hit, range 150/600 ft., one target. *Hit:* 6 (1d8 +\
      \ 2) piercing damage."
    "name": "Longbow (Humanoid or Hybrid Form Only)"
  - "desc": "The water horse targets one creature it can see within 30 feet of it.\
      \ The target must succeed on a DC 12 Charisma saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the target is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and can only move toward the water horse. The target can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \ The target has advantage on the saving throw if it has taken damage since\
      \ the end of its last turn. If the target successfully saves or if the effect\
      \ ends for it, the target is immune to this water horse's Charming Gaze for\
      \ the next 24 hours."
    "name": "Charming Gaze"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/water-horse-ccodex.png"
```
^statblock

## Environment

underwater