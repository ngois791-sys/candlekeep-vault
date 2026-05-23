---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ahuizotl
---
# [Ahuizotl](Mechanics\CLI\bestiary\monstrosity/ahuizotl-ccodex.md)
*Source: Creature Codex p. 10*  

*Its hide black and rubbery, the ahuizotl's dark hair bristles into clumps of sharp spikes to protect it. The creature's long tail ends in a clawed hand, which it uses to grab and drag prey underwater.*

## Hunger for Flesh

The ahuizotl is a carnivorous hunter who feasts upon the flesh and bones of living creatures. It savors teeth, eyes, and fingernails the most, and villages have discovered mounds of remains by local lakes missing only those pieces.

## Snatch Thieves

Ahuizotl are not always killers. Frequently they snatch a mirror, a banner, a fine bucket, or a bit of jewelry from a nobleman or servant down by the water. Ahuizotl collect these treasures and sometimes give them to [cueyatl](Mechanics/CLI/bestiary/humanoid/cueyatl-ccodex.md) priests ([sea](Mechanics/CLI/bestiary/humanoid/cueyatl-sea-priest-ccodex.md), [moon](Mechanics/CLI/bestiary/humanoid/cueyatl-moon-priest-ccodex.md)) as offerings to the water gods.

```statblock
"name": "Ahuizotl (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "13d6 + 26"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ahuizotl can breathe air and water."
    "name": "Amphibious"
  - "desc": "A creature that touches the ahuizotl or hits it with a melee attack while\
      \ within 5 feet of it must succeed on a DC 14 Dexterity saving throw or take\
      \ 4 (1d8) piercing damage."
    "name": "Spiky Coat"
"actions":
  - "desc": "The ahuizotl can use its Tail Grab. It then makes two attacks. one with\
      \ its bite and one with its claw."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Claw"
  - "desc": "The ahuizotl grabs a creature or item. If the target is a Medium or smaller\
      \ creature, it must succeed on a DC 14 Strength saving throw or be [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14). The ahuizotl can then move up to its speed as a bonus action.\
      \ The [grappled](Mechanics/CLI/rules/conditions.md#Grappled) creature must succeed\
      \ on a DC 14 Strength saving throw or be pulled along 5 feet behind the ahuizotl.\
      \ A creature being dragged by the ahuizotl makes attack rolls and Dexterity\
      \ saving throws with disadvantage.\n\nIf the target is an object or weapon being\
      \ held by another creature, that creature must succeed on a DC 14 Strength saving\
      \ throw, or the ahuizotl pulls the object away from the creature. After stealing\
      \ an object or weapon, the ahuizotl can move up to its speed as a bonus action.\
      \ The ahuizotl can only grapple one creature or hold one weapon or object at\
      \ a time. If holding a weapon, it can use its Tail Grab action to make one attack\
      \ with the weapon with no proficiency bonus"
    "name": "Tail Grab"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/ahuizotl-ccodex.png"
```
^statblock

## Environment

underwater