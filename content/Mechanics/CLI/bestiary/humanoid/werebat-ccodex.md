---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Werebat
---
# [Werebat](Mechanics\CLI\bestiary\humanoid/werebat-ccodex.md)
*Source: Creature Codex p. 258*  

*A lean, muscled humanoid covered in short, velvet-like fur crouches on the rooftop, its long, membranous wings drooping to the ground like the sleeves of a long robe. Its face bears little trace of anything humanoid with large, pointed ears, needle-like teeth, black eyes, flaring nostrils, and dark fur.*

## Night Hunters

Werebats hunt by night, swooping down from the darkness on unsuspecting prey and leaving mutilated corpses behind, often partially exsanguinated. When hunting, a werebat often takes on the form of a hideous, human-sized bat with a wingspan the length of a horse.

## Idolatry or Isolation

In cultures that worship bat deities, werebats are often seen as holy creatures. They may occupy clerical roles in such societies, though their tendency toward malevolence drives them to use such positions to seek greater power. Werebats living in less convenient circumstances seek out isolated lairs overlooking remote settlements, moving frequently when their gory presence draws too much attention.

Regardless of their circumstances, werebats usually have a swarm of bats at their command.

## Telltale Features

Werebats in their humanoid form often display bat-like features; a flattened or upturned nose, tufts of dark hair topping pointed ears, or sharp teeth are common.

```statblock
"name": "Werebat (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "human form; 14 from natural armor in bat form"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "12"
  - !!int "10"
  - !!int "12"
  - !!int "9"
"speed": "30 ft., fly 50 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The werebat can't use its blindsight while [deafened](Mechanics/CLI/rules/conditions.md#Deafened)."
    "name": "Echolocation"
  - "desc": "The werebat has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
  - "desc": "The werebat can use its action to polymorph into a bat-humanoid hybrid\
      \ or into a Medium-sized bat, or back into its true form, which is humanoid.\
      \ Its statistics, other than its AC, are the same in each form with the exception\
      \ that only its true and bat forms retain its flying speed. Any equipment it\
      \ is wearing or carrying isn't transformed. It reverts to its true form if it\
      \ dies."
    "name": "Shapechanger"
  - "desc": "While in sunlight, the werebat has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "In humanoid form, the werebat makes two mace attacks. In hybrid form,\
      \ it makes two attacks. one with its bite and one with its claws or mace."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) piercing damage. If the target is a humanoid, it must succeed\
      \ on a DC 14 Constitution saving throw or be cursed with werebat lycanthropy."
    "name": "Bite (Bat or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) slashing damage."
    "name": "Claws (Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) bludgeoning damage."
    "name": "Mace (Humanoid Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/werebat-ccodex.png"
```
^statblock

## Environment

urban