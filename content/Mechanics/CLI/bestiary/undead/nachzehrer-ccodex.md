---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nachzehrer
---
# [Nachzehrer](Mechanics\CLI\bestiary\undead/nachzehrer-ccodex.md)
*Source: Creature Codex p. 272*  

*This walking corpse's skin is tight against its bones and covered in weeping pustules. Its burial clothes are shredded and tattered at the cuffs and sleeves.*

Nachzehrer are undead superficially similar to ghouls and easily mistaken for them at a distance. The giveaway is the multitude of sores and pustules that dot the creature's skin, ready to burst with virulent fluids.

## Plague Born

Nachzehrer arise when plague strikes and kills a large number of people. The first victim of a plague might rise as one of these foul undead, and if that nachzehrer can infect enough victims a second nachzehrer will rise to join the first.

## Feeds on Life

Nachzehrer are driven to feed on the essence of the living. The creature's shadow has a draining effect on living creatures, sapping their strength when it falls across them and leaving them ripe for the nachzehrer's grisly feeding. The creature's grinding teeth drain the life from its victims, while spreading its disease into the victim. Nachzehrer are particularly driven to hunt down and consume their own living family members.

## Undead Nature

A nachzehrer doesn't require air, food, drink, or sleep.

```statblock
"name": "Nachzehrer (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "18"
  - !!int "10"
  - !!int "15"
  - !!int "9"
"speed": "30 ft., burrow 15 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "The languages it knew in life"
"cr": "8"
"traits":
  - "desc": "A creature infected with grave pox becomes vulnerable to necrotic damage\
      \ and gains one level of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ that can't be removed until the disease is cured. Additionally, the creature\
      \ cannot reduce its [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ by finishing a long rest. The infected creature is highly contagious. Each\
      \ creature that touches it, or that is within 10 feet of it when it finishes\
      \ a long rest, must succeed on a DC 12 Constitution saving throw or also contract\
      \ grave pox.\n\nWhen an infected creature finishes a long rest, it must succeed\
      \ on a DC 16 Constitution saving throw or gain one level of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion).\
      \ As the disease progresses, the infected creature becomes weaker and develops\
      \ painful green pustules all over its skin. A creature that succeeds on two\
      \ saving throws against the disease recovers from it. The cured creature is\
      \ no longer vulnerable to necrotic damage and can remove [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ levels as normal."
    "name": "Grave Pox"
  - "desc": "A creature other than a construct or undead has disadvantage on attack\
      \ rolls, saving throws, and ability checks based on Strength while within 5\
      \ feet of the nachzehrer."
    "name": "Weakening Shadow"
"actions":
  - "desc": "The nachzehrer makes three attacks. two with its fists and one with its\
      \ bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one creature. *Hit:*\
      \ 7 (1d4 + 5) piercing damage plus 13 (3d8) necrotic damage. The target's\
      \ hp maximum is reduced by an amount equal to the necrotic damage taken, and\
      \ the nachzehrer regains hp equal to that amount. The reduction lasts until\
      \ the target finishes a long rest. The target dies if this effect reduces its\
      \ hp maximum to 0. The target must succeed on a DC 16 Constitution saving throw\
      \ or become infected with the grave pox disease (see the Grave Pox trait)."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) bludgeoning damage."
    "name": "Fist"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/nachzehrer-ccodex.png"
```
^statblock

## Environment

any