---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nian
---
# [Nian](Mechanics\CLI\bestiary\monstrosity/nian-ccodex.md)
*Source: Creature Codex p. 276*  

*The creature has the body of a massive, powerful bull and the head of a sleek and majestic lion with a single curved horn rising from its skull.*

## Divine Punishment

It is said that nian are sent by the gods to punish villages that have fallen out of favor or committed some terrible crime. Others believe that nian simply come to take food and riches that are not theirs, hoarding their treasures in underwater grottos or mountainous caverns.

## Sign of Beginnings and Endings

nian regularly hibernates for months, preferring to hunt during times when the seasons are shifting. Because of this, many villages in the east use a nian's appearance as a signal of changing times. The celebrations that take place during times of change in these villages, such as harvest festivals or new year gatherings, include many of the objects that ward against nians: red decorations, fiery displays, and clanging instruments.

```statblock
"name": "Nian (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "17"
  - !!int "11"
  - !!int "16"
  - !!int "9"
"speed": "50 ft., climb 30 ft., swim 30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 13"
"languages": "Sylvan, telepathy 60 ft."
"cr": "4"
"traits":
  - "desc": "The nian can hold its breath for 30 minutes."
    "name": "Hold Breath"
  - "desc": "If the nian moves at least 20 feet straight toward a creature and then\
      \ hits it with a gore attack on the same turn, that target must succeed on a\
      \ DC 14 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the nian\
      \ can make one stomp attack against it as a bonus action."
    "name": "Trampling Charge"
  - "desc": "The nian is inherently fearful of loud noises, fire, and the color red.\
      \ It will not choose to move toward any red object or any fiery or burning materials.\
      \ If presented forcefully with a red object, flame, or if it is dealt fire or\
      \ thunder damage, the nian must succeed on a DC 13 Wisdom saving throw or become\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened) until the end of\
      \ its next turn. After it has been [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ by a specific red object or a particular source of noise (such as clanging\
      \ a weapon on a shield) or fire (such as the burning hands spell), the nian\
      \ can't be [frightened](Mechanics/CLI/rules/conditions.md#Frightened) by that\
      \ same source again for 24 hours."
    "name": "Tremulous"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (2d12 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ creature. *Hit:* 15 (2d10 + 4) bludgeoning damage."
    "name": "Stomp"
  - "desc": "The nian creates magical darkness and silence around it in a 15-foot-radius\
      \ sphere that moves with it and spreads around corners. The dark silence lasts\
      \ as long as the nian maintains concentration, up to 10 minutes (as if concentrating\
      \ on a spell). The nian sees objects in the sphere in shades of gray. Darkvision\
      \ can't penetrate the darkness, no natural light can illuminate it, no sound\
      \ can be created within or pass through it, and any creature or object entirely\
      \ inside the sphere of dark silence is immune to thunder damage. Creatures entirely\
      \ inside the darkness are [deafened](Mechanics/CLI/rules/conditions.md#Deafened)\
      \ and can't cast spells that include a verbal component. If any of the darkness\
      \ overlaps with an area of light created by a spell of 2nd level or lower, the\
      \ spell creating the light is destroyed."
    "name": "Year's Termination (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/nian-ccodex.png"
```
^statblock

## Environment

mountain