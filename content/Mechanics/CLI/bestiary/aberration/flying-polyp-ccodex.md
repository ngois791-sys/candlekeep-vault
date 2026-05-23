---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flying Polyp
---
# [Flying Polyp](Mechanics\CLI\bestiary\aberration/flying-polyp-ccodex.md)
*Source: Creature Codex p. 162*  

*A towering column of flesh, eyes, tentacles, and mouths wriggles in the air. Wild winds whip about the creature in all directions.*

Flying polyps are ancient, wind-controlling aberrations that once dominated the Material Plane. They plot to take back what they believe is their rightful home.

## Former Rulers

Flying polyps once ruled from cities of towers. Other creatures bowed to them until dragons appeared and refused to serve. A blood-soaked conflict ended with dragons victorious. They bound the few surviving polyps in the Ethereal Plane.

## Exist in Two Worlds

After centuries in exile, the polyps uncovered a ritual that allowed them to exist in the Material Plane while still being bound to the Ethereal Plane. This ancient secret allows them to manipulate objects in the Material Plane as they please, but the use of this magic makes them vulnerable to lightning.

## Masters of Weather and Distance

Flying polyps sometimes destroy crops, flood rivers, or call storms down on those who trouble their remote peaks and strongholds. Invisible and capable of covering vast distances in little time, they maintain a web of malign alliances from arctic regions to tropical peaks.

```statblock
"name": "Flying Polyp (CCodex)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d12 + 54"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "17"
  - !!int "22"
  - !!int "14"
  - !!int "16"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_vulnerabilities": "lightning"
"damage_resistances": "acid; cold; fire; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"condition_immunities": "[prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 16"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "The flying polyp's innate spellcasting ability is Intelligence (spell\
      \ save DC 18). It can innately cast the following spells, requiring no material\
      \ components:\n\n**At will:** [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only)\n\n**3/day each:** [wind walk](Mechanics/CLI/spells/wind-walk-xphb.md)\n\
      \n**1/day each:** [control weather](Mechanics/CLI/spells/control-weather-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "A creature that starts its turn within 15 feet of the polyp must succeed\
      \ on a DC 17 Strength saving throw or be pushed up to 15 feet away from the\
      \ polyp."
    "name": "Aura of Wind"
  - "desc": "The polyp can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "The polyp has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The polyp makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 15 ft., one target. *Hit:*\
      \ 15 (3d6 + 5) bludgeoning damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 17).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and is not affected by the flying polyp's Aura of Wind. The flying polyp can\
      \ grapple up to two creatures at one time."
    "name": "Tentacle"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the polyp. *Hit:* 18 (3d8 + 5) piercing damage."
    "name": "Bite"
  - "desc": "Each creature within 30 feet of the polyp must make a DC 17 Strength\
      \ saving throw. On a failure, a creature takes 27 (5d10) bludgeoning damage\
      \ and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success,\
      \ a creature takes half the damage but isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Cyclone (Recharge 5-6)"
  - "desc": "The flying polyp magically enters the Ethereal Plane from the Material\
      \ Plane, or vice versa."
    "name": "Etherealness"
"reactions":
  - "desc": "When a creature the flying polyp can see targets it with an attack, the\
      \ flying polyp can unleash a line of strong wind 60 feet long and 10 feet wide\
      \ in the direction of the attacker. The wind lasts until the start of the flying\
      \ polyp's next turn. Each creature in the wind when it appears or that starts\
      \ its turn in the wind must succeed on a DC 17 Strength saving throw or be pushed\
      \ 15 feet away from the flying polyp in a direction following the line. Any\
      \ creature in the line treats all movement as difficult terrain."
    "name": "Fist of Wind"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/flying-polyp-ccodex.png"
```
^statblock

## Environment

planar