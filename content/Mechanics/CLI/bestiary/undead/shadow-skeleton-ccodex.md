---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/skeleton
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Skeleton
---
# [Shadow Skeleton](Mechanics\CLI\bestiary\undead/shadow-skeleton-ccodex.md)
*Source: Creature Codex p. 342*  

*The skeleton's ribs are filled with shadow essence, which slithers in constant motion like the writhing of eels in a carcass. The whole sight is disquieting as it moves itself with a gliding, almost liquid step.*

## Shadow Realms and Rivers

Shadow skeletons are often servants to shadow river lords (see page 327) or other powerful creatures of shadow. Their writhing purple hearts generate a small amount of light—just enough to cast a shadow, never more.

## Malign Intent

Unlike ordinary skeletons, shadow skeletons have been known to display some cunning and a certain depth of cruelty. They sometimes chase small living animals or fling bits of bone and shadow at birds or bats.

## Undead Nature

The shadow skeleton doesn't require air, food, drink, or sleep.

```statblock
"name": "Shadow Skeleton (CCodex)"
"size": "Medium"
"type": "undead"
"subtype": "skeleton"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "15"
  - !!int "9"
  - !!int "11"
  - !!int "9"
"speed": "30 ft., swim 40 ft."
"damage_resistances": "fire, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "2"
"actions":
  - "desc": "The shadow skeleton makes two scimitar attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 7 (1d8 + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30 ft., one target. *Hit:*\
      \ 5 (1d4 + 3) piercing damage plus 3 (1d6) necrotic damage. If the target\
      \ is a creature other than an undead or a construct, it must make a DC 12 Constitution\
      \ saving throw. On a failure, the target is surrounded by a shadowy aura for\
      \ 1 minute. While surrounded by the aura, the target takes an extra 7 (2d6)\
      \ necrotic damage when hit by the scimitar attack of a shadow skeleton. Any\
      \ creature can take an action to extinguish the shadow with a successful DC\
      \ 12 Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana)) check. The\
      \ shadow also extinguishes if the target receives magical healing."
    "name": "Finger Darts"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/shadow-skeleton-ccodex.png"
```
^statblock

## Environment

underwater