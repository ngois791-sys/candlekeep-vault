---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dhampir
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dhampir
---
# [Dhampir](Mechanics\CLI\bestiary\humanoid/dhampir-ccodex.md)
*Source: Creature Codex p. 106*  

*A lithe being of dark beauty appears human, though its movements, intensity, and charm are so powerful and coordinated it seems almost supernatural.*

Dhampirs are the half-living children of vampires and living mothers, born into a world that fears and rejects them. Thanks to their human-like appearance, many dhampirs hide in plain sight, spending their lives concealing their identities.

## Blood Ties

For most dhampirs, their mother's family is all they have since even those who do not know of a dhampir's true nature are generally put off by their supernatural presence. As a result, families with a dhampir withdraw from the world, becoming reclusive. Most dhampirs strike out on their own when they mature to spare their families further burden, but the half-living remember what their loved ones sacrificed. Dhampirs will return to aid their families at a moment's notice.

## Inner Darkness

For most dhampirs, their mother's family is all they have since even those who do not know of a dhampir's true nature are generally put off by their supernatural presence. As a result, families with a dhampir withdraw from the world, becoming reclusive. Most dhampirs strike out on their own when they mature to spare their families further burden, but the half-living remember what their loved ones sacrificed. Dhampirs will return to aid their families at a moment's notice.

```statblock
"name": "Dhampir (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dhampir"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+3"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "necrotic"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "The dhampir has advantage on saving throws against disease."
    "name": "Undead Resistance"
"actions":
  - "desc": "The dhampir makes two rapier or two shortbow attacks. It can make a grapple\
      \ attack or Dark Thirst attack in place of any attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) piercing damage."
    "name": "Rapier"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature that is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by the dhampir, [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). *Hit:* 1 piercing\
      \ damage plus 3 (1d6) necrotic damage. The dhampir regains hp equal to the\
      \ amount of necrotic damage dealt."
    "name": "Dark Thirst"
  - "desc": "The dhampir magically beguiles the mind of one humanoid it can see within\
      \ 30 feet for 1 hour. The target must succeed on a DC 13 Charisma saving throw\
      \ or the dhampir has advantage on Charisma checks against the target. If the\
      \ dhampir or any of its allies damage the target, the effect ends. If the target's\
      \ saving throw is successful or the effect ends, the target is immune to this\
      \ dhampir's Predatory Charm for the next 24 hours. A creature immune to being\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed) is immune to this effect.\
      \ A dhampir can have only one target affected by its Predatory Charm at a time.\
      \ If it uses its Predatory Charm on another target, the effect on the previous\
      \ target ends."
    "name": "Predatory Charm"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dhampir-ccodex.png"
```
^statblock

## Environment

urban