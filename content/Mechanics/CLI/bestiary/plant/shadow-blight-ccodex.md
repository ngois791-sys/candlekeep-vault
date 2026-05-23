---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Blight
---
# [Shadow Blight](Mechanics\CLI\bestiary\plant/shadow-blight-ccodex.md)
*Source: Creature Codex p. 326*  

*The stump of a blackened, frostbitten conifer stands upright on six leg-like roots and scuttles sideways like an arboreal hermit crab. Inky shadows fill a hollow near the base of the stump.*

## Born of Vampires

When a vampire becomes a crimson mist (see page 67), the terrified, bestial essence of the vampire initially flees and hides as it attempts to regain its senses. The mist lurks in the shadow of a tall tree in the icy northern lowlands and devours tree-dwelling insects and small animals until it is strong enough to once again hunt. The tree, weakened by the necrotic energy coming off the strengthening crimson mist, often succumbs to frostbite, animating the next sunset as a shadow blight.

## Spreading Parasite

The shadow blight longs to spread the shadow that animates it to other dead trees. It also tries to find a door to the Plane of Shadows, allowing it to exist in secluded darkness forever. It is willing to slaughter anyone who prevents it from satisfying its desires.

## Red Flowering

Shadow blights are sometimes cultivated by vampires, liches, or necromancers as particularly loathsome guardians. When they kill a living creature, they briefly flower. These blossoms resemble a pinkish dogwood or, in some climates, a flowering plum tree.

```statblock
"name": "Shadow Blight (CCodex)"
"size": "Small"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d6 + 30"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "16"
  - !!int "5"
  - !!int "16"
  - !!int "3"
"speed": "40 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold, necrotic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "While the shadow blight remains motionless, it is indistinguishable from\
      \ the stump of a dead tree."
    "name": "False Appearance"
"actions":
  - "desc": "*Melee Spell Attack:* +5 to hit, reach 10 ft., one target. *Hit:* 7\
      \ (2d6) cold damage plus 3 (1d6) necrotic damage."
    "name": "Frozen Shadow Tendril"
  - "desc": "The shadow blight magically animates 1d4 plants within 60 feet of it,\
      \ turning them into [awakened shrubs](Mechanics/CLI/bestiary/plant/awakened-shrub-xmm.md)\
      \ under its control. These plants' attacks deal an additional 3 (1d6) necrotic\
      \ damage. If the shrubs are not destroyed before 1 hour passes, they become\
      \ new shadow blights."
    "name": "Animate Plants (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/shadow-blight-ccodex.png"
```
^statblock

## Environment

arctic, forest