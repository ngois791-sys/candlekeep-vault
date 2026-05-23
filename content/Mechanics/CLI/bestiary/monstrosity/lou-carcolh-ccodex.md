---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lou Carcolh
---
# [Lou Carcolh](Mechanics\CLI\bestiary\monstrosity/lou-carcolh-ccodex.md)
*Source: Creature Codex p. 257*  

*A slimy green serpent with a hardened shell-like growth upon its back, the lou carcolh epitomizes the horror of both snake and snail. Its venomous maw features two needle-sharp fangs.*

## Trappers

The lou carcolh's preferred means of capturing prey is laying an ambush with its many mouth appendages stretched great distances, entrapping creatures who touch or step on them. The appendages regrow daily, so it is never without a fresh set.

## Steeds to Dark Fey

Some dark fey creatures tame and ride lou carcolh as steeds. Their surprising speed, climbing ability, and comfort in the water make them ideal for traversing dread wetlands and fetid forests.

```statblock
"name": "Lou Carcolh (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "3"
  - !!int "10"
  - !!int "10"
"speed": "30 ft., climb 10 ft., swim 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "tremorsense 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
  - "desc": "Given half an hour, the lou carcolh can extend its 6 sticky tongues up\
      \ to 60 feet from itself. A creature who touches one of these tongues must succeed\
      \ on a DC 13 Dexterity saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ as it adheres to the tongue. The tongues can be attacked (AC 12, 10 hp), and\
      \ any damage done to a tongue is also done to the lou carcolh. Killing a tongue\
      \ ends the [restrained](Mechanics/CLI/rules/conditions.md#Restrained) condition,\
      \ and the lou carcolh can't use that tongue for for the next 24."
    "name": "Sticky Tongues"
  - "desc": "For 1 minute, the lou carcolh leaves a slime trail behind it as it moves.\
      \ The slime creates difficult terrain, and any creature walking through it must\
      \ succeed on a DC 13 Dexterity ([Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics))\
      \ check or fall [prone](Mechanics/CLI/rules/conditions.md#Prone). The slime\
      \ remains effective for 1 hour."
    "name": "Slime Trail (1/Day)"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) piercing damage and 2 (1d4) poison damage and the target must\
      \ succeed on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its turn."
    "name": "Bite"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 16 (3d10) poison damage."
    "name": "Spit Venom"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 60 ft., one target. *Hit:*\
      \ The target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and\
      \ the lou carcolh can't use the same sticky tongue on another target."
    "name": "Sticky Tongue"
  - "desc": "The lou carcolh pulls in each creature of Large size or smaller who is\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by one of its sticky\
      \ tongues. The creature is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ and dragged up to 30 feet towards the lou carcolh. If a creature is dragged\
      \ within 5 feet of the lou carcolh, it can make one bite attack against the\
      \ creature as a bonus action."
    "name": "Reel"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/lou-carcolh-ccodex.png"
```
^statblock

## Environment

swamp