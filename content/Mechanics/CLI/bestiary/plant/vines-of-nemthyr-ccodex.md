---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vines of Nemthyr
---
# [Vines of Nemthyr](Mechanics\CLI\bestiary\plant/vines-of-nemthyr-ccodex.md)
*Source: Creature Codex p. 371*  

*The large humanoid form emerging from the treeline reveals itself to not be humanoid at all but a shambling of thick, ropy vines. Within the intertwined plants are bits of armor, broken weapons, and bleached bones.*

## Born of Blood and Battle

Vines of Nemthyr are born at the sites of bloody battles, where two armies leave the ground seeping with ichor and littered with the tools of war. As the plant life in the area soaks up both the physical remains and the psychic trauma of the deadly battle, vines of Nemthyr arise.

## A Walking Mass Grave

When the vines have soaked up enough death, they can merge into a single creature made of entwined vines, leafy plants, dangerous thorns, and blood-red flowers. This creature also incorporates the remnants of the battle that formed it: fragments of sundered armor, bloodied weapons, severed limbs, broken bones, rotting flesh, etc. To the untrained eye, this amalgam often looks like an undead monstrosity rather than a plant.

## A Relentless Hunger

The vines of Nemthyr, once formed, has one driving motivation: feed on further carnage. It seeks out sites of mass battles, and, if it can't find those, it seeks out living creatures in the hopes of creating its own carnage to feast upon. While the vines of Nemthyr does not drink blood directly, it does gain nourishment from planting its roots in blood-soaked soil.

```statblock
"name": "Vines of Nemthyr (CCodex)"
"size": "Large"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "19"
  - !!int "5"
  - !!int "13"
  - !!int "5"
"speed": "30 ft., burrow 30 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_resistances": "cold, poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "8"
"traits":
  - "desc": "As a bonus action, the vines of Nemthyr can separate itself into a group\
      \ of distinct vines. While separated in this way, the vines can move through\
      \ spaces as narrow as 3 inches wide. The separated vines can't attack while\
      \ in this state, but they can reform into the vines of Nemthyr as a bonus action."
    "name": "Dispersal"
  - "desc": "While the vines of Nemthyr remains motionless, it is indistinguishable\
      \ from a normal plant."
    "name": "False Appearance"
  - "desc": "The vines of Nemthyr has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The vines of Nemthyr makes three attacks. two with its slam and one with\
      \ its thorny lash."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 15 ft., one target. *Hit:*\
      \ 15 (2d10 + 4) slashing damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 15). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The vines of Nemthyr has two thorny lashes, each of which can grapple only\
      \ one target."
    "name": "Thorny Lash"
  - "desc": "The vines of Nemthyr shoots poisonous thorns in a 30-foot cone. Each\
      \ creature in that area must make a DC 15 Constitution saving throw, taking\
      \ 35 (10d6) poison damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Thorn Spray (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/vines-of-nemthyr-ccodex.png"
```
^statblock

## Environment

forest, grassland