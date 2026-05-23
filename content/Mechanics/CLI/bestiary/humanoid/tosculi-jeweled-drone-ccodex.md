---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/tosculi
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tosculi Jeweled Drone
---
# [Tosculi Jeweled Drone](Mechanics\CLI\bestiary\humanoid/tosculi-jeweled-drone-ccodex.md)
*Source: Creature Codex p. 355*  

*A wasp-like humanoid flits on humming wings. Its carapace gleams with bright jewel tones, flashing brilliantly in the light.*

In tosculi hive cities, powerful queens reign supreme, but even they have difficulty managing an entire swarm on their own. To extend their reach and authority, they rely on jeweled drones. More intelligent than most other tosculi, jeweled drones oversee individual aspects of the swarm and hive, managing the efficient order that constrains tosculi life. The jeweled drones produce powerful pheromones that help extend their authority and that also serve to forge nearby tosculi into a precise and deadly fighting force.

## Queen's Attendants

Jeweled drones are closest to the hive queens in both authority and physical proximity. They serve as advisors to the queen, bringing her news and information from all corners of the hive. It's not uncommon for queens to choose consorts from among the ranks of jeweled drones as well. Such favored wasp folk enjoy unparalleled influence, until the queen tires of and devours them

```statblock
"name": "Tosculi Jeweled Drone (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "tosculi"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d6 + 48"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "17"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+5"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Infernal"
"cr": "4"
"traits":
  - "desc": "The jeweled drone emits a sweet scent that empowers other tosculi within\
      \ 15 feet of the drone. A tosculi that starts its turn within the area can add\
      \ a d6 to one attack roll or saving throw it makes before the start of its\
      \ next turn, provided it can smell the scent. A tosculi can benefit from only\
      \ one Pheromones die at a time. This effect ends if the jeweled drone dies."
    "name": "Pheromones"
  - "desc": "While in bright light, the jeweled drone's carapace shines and glitters.\
      \ When a non-tosculi creature that can see the drone starts its turn within\
      \ 30 feet of the drone, the drone can force the creature to make a DC 12 Wisdom\
      \ saving throw if the drone isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ On a failure, the creature is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the start of its next turn.\n\nUnless surprised, a creature can avert\
      \ its eyes to avoid the saving throw at the start of its turn. If it does so,\
      \ it can't see the drone until the start of its next turn, when it can avert\
      \ its eyes again. If it looks at the drone in the meantime, it must immediately\
      \ make the save."
    "name": "Scintillating Carapace"
"actions":
  - "desc": "The jeweled drone makes three attacks. two with its claws and one with\
      \ its scimitar."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) slashing damage."
    "name": "Claws"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) slashing damage plus 10 (3d6) poison damage. If the poison damage\
      \ reduces the target to 0 hp, the target is stable but [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hp, and is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
    "name": "Scimitar"
"reactions":
  - "desc": "When a creature makes an attack against a tosculi hive queen, the jeweled\
      \ drone grants a +2 bonus to the queen's AC if the drone is within 5 feet of\
      \ the queen."
    "name": "Protect the Queen"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/tosculi-jeweled-drone-ccodex.png"
```
^statblock

## Environment

coastal, forest, grassland