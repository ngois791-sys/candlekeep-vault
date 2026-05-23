---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/shoth
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sooze
---
# [Sooze](Mechanics\CLI\bestiary\aberration/sooze-ccodex.md)
*Source: Creature Codex p. 334*  

The sooze make up the bulk of the shoth's armed forces. It appears vaguely humanoid with two or three appendages capable of holding weapons or tools. Its zom sits inside its head, where the strange sphere is visible through its translucent flesh.

## Unquestioning

The sooze follow the instructions of the oth and droths without hesitation. They retain some of the personality traits of their former selves, but they are eager to prove themselves and embrace their status as freshly dissolved.

```statblock
"name": "Sooze (CCodex)"
"size": "Medium"
"type": "aberration"
"subtype": "shoth"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "49"
"hit_dice": "11d8"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., climb 10 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "acid, cold, fire"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 14"
"languages": "All, telepathy 100 ft."
"cr": "1/2"
"traits":
  - "desc": "The sooze, including its equipment, can move through a space as narrow\
      \ as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "Choose either the Laborer or Warrior trait."
    "name": "Multiple Roles"
  - "desc": "The sooze is strong and tireless. It gains immunity to [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ and can Dash as a bonus action 3 times each day."
    "name": "Laborer"
  - "desc": "The sooze is trained and equipped as a warrior. Its Armor Class increases\
      \ by 2. The sooze has advantage on attack rolls against a creature if at least\
      \ one of its allies is within 5 feet of the creature and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Warrior"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage and 2 (1d4) acid damage."
    "name": "Oozing Slam"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with\
      \ two hands."
    "name": "Longsword (Warrior Only)"
  - "desc": "A shoth who has less than half its maximum hp can merge with any other\
      \ shoth creature within 10 feet, adding its remaining hp to that creature's.\
      \ The hp gained this way can exceed the normal maximum of that creature. A shoth\
      \ can accept one such merger every 24 hours."
    "name": "Merge"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/sooze-ccodex.png"
```
^statblock

## Environment

urban