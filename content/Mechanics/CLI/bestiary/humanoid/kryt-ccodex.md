---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kryt
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kryt
---
# [Kryt](Mechanics\CLI\bestiary\humanoid/kryt-ccodex.md)
*Source: Creature Codex p. 243*  

*Kryts are bipedal, ancient-looking tortoises with knowing eyes whose depths seem to swirl with constellations of stars. Short and hearty like dwarves, they attack with great physical power.*

The kryt always settle near water; their oracles and mystics require it. They typically form small tribes in caves or small huts near ponds or reflective bodies of water.

## Dangerous Mystics

It is commonly known that kryts are able to see into the future, but few are brave enough to seek their counsel. With a reputation for attacking outsiders and giving chilling predictions, the few who survive their divinations return shaken and speechless with terror. Kryts usually find it easier to use livestock for their sacrificial divinations, but anyone entering their tribe should fear becoming an offering in their insatiable quest for ultimate knowledge of the future.

## Doom Mongers of Haruspicy

The kryts are haruspices who predict the future by examining the entrails of a sacrificed creature. Refusing to align themselves with a singular known deity, they claim they have seen prophecies of a cataclysm wrought by an ominous and unnamed power. Kryts live predominately silent lives, striving to save their voices for their ultimate calling as messengers for this mysterious god of death. They never record their findings, preferring to keep what they divine to themselves.

## Secret Society

Solitary kryts regard strangers with callous practicality, viewing them as mere pieces of flesh to be beaten and subjugated until they are prepared for a divining sacrifice. Kryts are reluctant to share any of their prophetic visions with others—even members of their own tribe.

```statblock
"name": "Kryt (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "kryt"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "16"
  - !!int "6"
  - !!int "18"
  - !!int "6"
"speed": "25 ft."
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "The kryt can hold its breath for 15 minutes."
    "name": "Hold Breath"
  - "desc": "The kryt catches a glimpse of the immediate future and gains advantage\
      \ on one attack roll or one saving throw."
    "name": "Prophetic Vision (1/Turn)"
"actions":
  - "desc": "The kryt makes three attacks. one with its bite and two with its quarterstaff."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) bludgeoning damage Quarterstaff. Melee Weapon Attack: +8 to\
      \ hit, reach 5 ft., one target. *Hit:* 8 (1d6 + 5) bludgeoning damage, or\
      \ 9 (1d8 + 5) bludgeoning damage if used with two hands."
    "name": "Bite"
"reactions":
  - "desc": "When a kryt is attacked by a creature it can see within 30 feet of it,\
      \ the kryt can haunt the creature with a vision of the creature's death. The\
      \ haunted creature has disadvantage on its next attack roll. Undead creatures\
      \ and creatures that are unable to be killed are immune to this reaction."
    "name": "Haunting Vision"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/kryt-ccodex.png"
```
^statblock

## Environment

forest, mountain