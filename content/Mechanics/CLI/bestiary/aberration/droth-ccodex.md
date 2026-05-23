---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration/shoth
statblock: inline
statblock-link: "#^statblock"
aliases:
- Droth
---
# [Droth](Mechanics\CLI\bestiary\aberration/droth-ccodex.md)
*Source: Creature Codex p. 333*  

Oth who live for centuries eventually transform into droth. These huge, undulating piles of ooze travel from world to world, creating the zolvs wherever they are needed. Droth have a calming effect on living creatures, and their rippling surface is not unlike a great body of water. Droth have a different sense of time than other shoth and communicating simple messages with them can take days or weeks. Droth are revered by the sooze and the oth, as they resemble Shoth itself. Droth, in turn, bolster the abilities of the lesser shoth.

## Made From Their Bodies

The dissolving pools (zolvs) of the shoth are made from a portion of a droth. A droth who has recently created a zolv remains weakened (maximum hp halved)) for several days. For this reason, the droth are heavily guarded during and after the zolv production process.

```statblock
"name": "Droth (CCodex)"
"size": "Huge"
"type": "aberration"
"subtype": "shoth"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "9"
  - !!int "20"
  - !!int "14"
  - !!int "16"
  - !!int "20"
"speed": "20 ft., climb 10 ft."
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold, fire"
"damage_immunities": "acid"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 17"
"languages": "All, telepathy 100 ft."
"cr": "12"
"traits":
  - "desc": "When the droth damages a creature, it absorbs a portion of that creature's\
      \ knowledge and power. As a bonus action, it can recreate any action available\
      \ to a creature it damaged within the last minute. This includes spells and\
      \ actions with limited uses or with a recharge. This recreated action is resolved\
      \ using the droth's statistics where applicable."
    "name": "Absorbent (3/Day)"
  - "desc": "The droth, including its equipment, can move through a space as narrow\
      \ as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "Any creature hostile to the droth that starts its turn within 20 feet\
      \ of the droth must succeed on a DC 17 Wisdom saving throw or have disadvantage\
      \ on all attack rolls until the end of its next turn. Creatures with Intelligence\
      \ 3 or lower automatically fail the saving throw."
    "name": "Soothing Aura"
"actions":
  - "desc": "The droth makes two oozing crush attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 15 ft., one target. *Hit:*\
      \ 30 (4d12 + 4) bludgeoning damage and 7 (2d6) acid damage."
    "name": "Oozing Crush"
  - "desc": "A shoth with less than half its maximum hp can merge with any other shoth\
      \ creature within 10 feet, adding its remaining hp to that creature's. The hp\
      \ gained this way can exceed the normal maximum of that creature. A shoth can\
      \ accept one such merger every 24 hours."
    "name": "Merge"
  - "desc": "The droth rises up and crashes down, releasing a 20-foot-radius wave\
      \ of acidic ooze. Each creature in the area must make a DC 17 Dexterity saving\
      \ throw. On a failure, a creature takes 45 (10d8) acid damage and is knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success, a creature\
      \ takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Acid Wave (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/droth-ccodex.png"
```
^statblock

## Environment

planar