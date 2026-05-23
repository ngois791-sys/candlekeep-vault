---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Preta
---
# [Preta](Mechanics\CLI\bestiary\undead/preta-ccodex.md)
*Source: Creature Codex p. 223*  

*The emaciated creature smacks its withered lips in hungry anticipation as it reaches out with taloned claws.*

In Eastern lands when men and women huddle in their homes behind stout shutters, they know the scratch of claws upon the door heralds an unending hunger for blood. Preta appear as human-like undead with sunken, mummified skin, narrow limbs, distended bellies and wide, unblinking eyes.

## The Hungry Ghost

In many traditions, the preta is a pitiful creature suffering maddening hunger that can never be sated. They are often servants to blood cultists or ghouls.

## Blood-Drinking Trickster

While some only desire love or food or companionship, the dangerous preta are the ones who hunger for blood. These preta roam the countryside picking off travelers or isolated farmers. They use their invisibility and mastery of illusions to mask their approach until it is too late for their prey to flee.

## Hungry Dead Nature

The hungry ghost doesn't require air or sleep.

```statblock
"name": "Preta (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "The languages it knew in life"
"cr": "3"
"traits":
  - "desc": "The preta can see 60 feet into the Ethereal Plane when it is on the Material\
      \ Plane, and vice versa."
    "name": "Ethereal Sight"
"actions":
  - "desc": "The preta uses its Blood Siphon. It then makes two attacks with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) slashing damage."
    "name": "Claws"
  - "desc": "The preta magically draws the blood from a target it can see within 30\
      \ feet into its ever-hungry mouth. The target must succeed on a DC 13 Constitution\
      \ saving throw or take 7 (2d6) points of necrotic damage. The preta regains\
      \ hp equal to half the necrotic damage dealt."
    "name": "Blood Siphon"
  - "desc": "The preta magically enters the Ethereal Plane from the Material Plane,\
      \ or vice versa. It is visible on the Material Plane while it is in the Border\
      \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
      \ the other plane."
    "name": "Etherealness"
  - "desc": "The preta turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks or uses Blood Siphon, or until its concentration ends (as\
      \ if concentrating on a spell). While [invisible](Mechanics/CLI/rules/conditions.md#Invisible),\
      \ it leaves no physical evidence of its passage, leaving it traceable only by\
      \ magic. Any equipment the preta wears or carriers is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with it. While [invisible](Mechanics/CLI/rules/conditions.md#Invisible), the\
      \ preta can create small illusory sounds and images like the minor illusion\
      \ spell except it can create either two images, two sounds, or one sound and\
      \ one image."
    "name": "Hidden Illusionist"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/preta-ccodex.png"
```
^statblock

## Environment

any