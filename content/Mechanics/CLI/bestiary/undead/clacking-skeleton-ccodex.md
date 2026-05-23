---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/skeleton
statblock: inline
statblock-link: "#^statblock"
aliases:
- Clacking Skeleton
---
# [Clacking Skeleton](Mechanics\CLI\bestiary\undead/clacking-skeleton-ccodex.md)
*Source: Creature Codex p. 340*  

*Heard before it is seen, the skeleton approaches, its mismatch of bones from various humanoids clacking and clonking together with each horrid step. Leftover armor hangs from it in pieces and small horns jut half-fused from its skull.*

Augmented with necromantic power, the clacking skeleton emits the sound of grinding bone, terrifying those who hear it.

## Tomb Servitors

They are often created as guardians for tombs or the lairs of necromancers from the leftover bones of apprentices, slaves, and scribes. Some believe their clacking is a form of complaint that the creatures must continue to serve their masters even after death.

## Undead Nature

A clacking skeleton doesn't require air, food, drink, or sleep.

```statblock
"name": "Clacking Skeleton (CCodex)"
"size": "Medium"
"type": "undead"
"subtype": "skeleton"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "armor scraps"
"hp": !!int "45"
"hit_dice": "10d8"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "6"
  - !!int "8"
  - !!int "5"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "2"
"traits":
  - "desc": "If the clacking skeleton moves at least 10 feet, each beast or humanoid\
      \ within 30 feet of the skeleton that can hear it must succeed on a DC 13 Wisdom\
      \ saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of its next turn."
    "name": "Horrid Clacking"
"actions":
  - "desc": "The clacking skeleton makes two attacks. one with its glaive and one\
      \ with its gore or two with its shortbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 10 ft., one target. *Hit:*\
      \ 7 (1d10 + 2) slashing damage."
    "name": "Glaive"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) piercing damage."
    "name": "Gore"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 80/320 ft., one target. *Hit:*\
      \ 4 (1d6 + 1) piercing damage."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/clacking-skeleton-ccodex.png"
```
^statblock

## Environment

any