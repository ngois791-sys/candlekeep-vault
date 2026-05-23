---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Razorleaf
---
# [Razorleaf](Mechanics\CLI\bestiary\plant/razorleaf-ccodex.md)
*Source: Creature Codex p. 317*  

*This vaguely humanoid-shaped plant boasts shimmering black and plum-colored leaves sprouting from from its head, back, and arms. The leaves are wickedly sharp and can be shaken loose to form deadly slashing clouds.*

## Roots in Shadow

Razorleaves grow where the veil between the Shadow Realm and the Material Plane has thinned and darkness bleeds through into the soil. Their plant-like bodies are tinged with shadow magic but are as tangible as any other shrub or tree. Their roots are made of pure shadow and have a corrupting effect on other plants and animals around them.

## Letting the Light Out

Mature razorleaves have a darkening effect on the area in which they live. Nonmagical sources of light are only half as effective in these plants' groves. There is a 50% chance that a portal to the Shadow Realm will appear wherever three or more razorleaves dwell. Sustained by the presence of the plants, the portal serves as a doorway between worlds.

```statblock
"name": "Razorleaf (CCodex)"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "122"
"hit_dice": "15d8 + 45"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "16"
  - !!int "7"
  - !!int "12"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold, necrotic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 14"
"languages": ""
"cr": "5"
"traits":
  - "desc": "As an action, the razorleaf can dig its roots into the ground, securing\
      \ itself in place and causing the area in a 20-foot radius around it to be shrouded\
      \ in shadow. While rooted in this way, the razorleaf's speed becomes 0, it can't\
      \ be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone), and its attacks\
      \ deal an extra 3 (1d6) necrotic damage. This area is difficult terrain and\
      \ nonmagical sources of light are only half as effective while within it. Small\
      \ and smaller beasts with Intelligence 3 or lower in the area lose their natural\
      \ coloration and turn pale grey. These creatures are [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by the razorleaf while within the area. Plants and trees inside the area turn\
      \ an ashen color. The razorleaf can recall its roots and end this effect as\
      \ a bonus action."
    "name": "Dark Ground"
  - "desc": "A creature that touches the razorleaf or hits it with a melee attack\
      \ while within 5 feet of it takes 3 (1d6) slashing damage."
    "name": "Do Not Touch"
  - "desc": "While in bright light, the razorleaf has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Light Sensitivity"
"actions":
  - "desc": "The razorleaf makes two lacerating leaves attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (3d6 + 2) slashing damage."
    "name": "Lacerating Leaves"
  - "desc": "The razorleaf shakes loose a deadly shower of slicing leaves. Each creature\
      \ within 10 feet of the razorleaf must make a DC 14 Dexterity saving throw,\
      \ taking 21 (6d6) slashing damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Shower of Razors (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/razorleaf-ccodex.png"
```
^statblock

## Environment

forest