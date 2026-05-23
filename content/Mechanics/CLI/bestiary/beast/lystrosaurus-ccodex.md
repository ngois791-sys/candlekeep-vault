---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lystrosaurus
---
# [Lystrosaurus](Mechanics\CLI\bestiary\beast/lystrosaurus-ccodex.md)
*Source: Creature Codex p. 108*  

*This creature, roughly the size of a hog, roots in the soil with tusks pointing downward from its upper jaw. The middle joints of its forelimbs point outward, like a lizard, and its thick, gray hide is sparsely covered with wiry hair down its back to its stubby tail. It makes a grunting, muttering sound to itself.*

Often used as guard animals by kobolds in warmer climes, the lystrosaurus has a reputation as a sturdy and self-sufficient companion. When not working in some capacity, it rips up vegetation and masticates the day away. At night, it digs shallow burrows in the ground to sleep, which are occasionally expanded upon by its masters.

```statblock
"name": "Lystrosaurus (CCodex)"
"size": "Medium"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "16"
  - !!int "2"
  - !!int "9"
  - !!int "6"
"speed": "30 ft., burrow 5 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "If the lystrosaurus moves at least 10 feet straight toward a creature\
      \ and then hits it with a ram attack on the same turn, the target must succeed\
      \ on a DC 13 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the lystrosaurus\
      \ can make one bite attack against it immediately as a bonus action."
    "name": "Headbutt"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) bludgeoning damage."
    "name": "Ram"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (3d6 + 3) piercing damage."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/lystrosaurus-ccodex.png"
```
^statblock

## Environment

grassland