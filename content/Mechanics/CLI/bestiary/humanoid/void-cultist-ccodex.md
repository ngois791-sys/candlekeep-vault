---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Void Cultist
---
# [Void Cultist](Mechanics\CLI\bestiary\humanoid/void-cultist-ccodex.md)
*Source: Creature Codex p. 407*  

Cultists are the most numerous void-touched; simple men and women taken and changed by the corrupt touch of the Void. Quite mad, they throw themselves into their filthy rituals and to certain death against their enemies with equal abandon. Void cultists show the corrupt nature of the Void in their bodies. Twisted and warped, they use these deformities as weapons against the enemies of the cult. While the cultists speak Void Speech, they lack the control to cause more than superficial pain and destruction with its vile syllables.

```statblock
"name": "Void Cultist (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "9"
  - !!int "13"
  - !!int "8"
"speed": "30 ft."
"damage_resistances": "psychic"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "The void cultist has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Insane"
"actions":
  - "desc": "The void cultist makes two attacks. one with its club and one with its\
      \ Flesh Twist."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage."
    "name": "Club"
  - "desc": "The void cultist has one or more of the following attack options."
    "name": "Flesh Twist"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 20/60 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) poison damage, and, if the target is a creature, it must succeed\
      \ on a DC 11 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute."
    "name": "Poisonous Spittle"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage, and, if the target is a Medium or smaller\
      \ creature, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape\
      \ DC 12). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the void cultist can't use its tentacle hand against another target. In\
      \ addition, the tentacle hand grants the cultist advantage on Strength ([Athletics](Mechanics/CLI/rules/skills.md#Athletics))\
      \ checks."
    "name": "Tentacle Hand"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage."
    "name": "Tusks"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/void-cultist-ccodex.png"
```
^statblock

## Environment

any