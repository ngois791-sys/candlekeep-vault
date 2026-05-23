---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sage
---
# [Sage](Mechanics\CLI\bestiary\humanoid/sage-cm.md)
*Source: Candlekeep Mysteries p. 9*  

Candlekeep's resident lore experts are master sages and sages who dedicate themselves to scholarship above all.

```statblock
"name": "Sage (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "0"
"stats":
  - !!int "8"
  - !!int "10"
  - !!int "10"
  - !!int "18"
  - !!int "15"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+8"
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+6"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+8"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+8"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "1/2"
"actions":
  - "desc": "*Melee Spell Attack:* +6 to hit (with advantage if the target is wearing\
      \ armor made of metal), reach 5 ft., one creature. *Hit:* 9 (2d8) lightning\
      \ damage, and the target can't take reactions until the start of its next turn."
    "name": "Shocking Grasp (Cantrip)"
  - "desc": "The sage casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (save DC 14, +6 to hit with spell attacks):\n\n**At\
      \ will:** [light](Mechanics/CLI/spells/light-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md)\n\n**3/day each:** [comprehend\
      \ languages](Mechanics/CLI/spells/comprehend-languages-xphb.md), [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [identify](Mechanics/CLI/spells/identify-xphb.md)\n\n**1/day each:** [dispel\
      \ magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [levitate](Mechanics/CLI/spells/levitate-xphb.md),\
      \ [locate object](Mechanics/CLI/spells/locate-object-xphb.md), [see invisibility](Mechanics/CLI/spells/see-invisibility-xphb.md),\
      \ [sending](Mechanics/CLI/spells/sending-xphb.md), [tongues](Mechanics/CLI/spells/tongues-xphb.md),\
      \ [unseen servant](Mechanics/CLI/spells/unseen-servant-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "When the sage is hit by an attack or targeted by a [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ spell, it calls forth an [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ barrier of magical force that protects it. Until the start of its next turn,\
      \ the sage has a +5 bonus to AC, including against the triggering attack, and\
      \ it takes no damage from magic missile."
    "name": "Shield (1st-Level Spell; 3/Day)"
"source":
  - "CM"
"image": "Mechanics/CLI/bestiary/humanoid/token/sage-cm.webp"
```
^statblock