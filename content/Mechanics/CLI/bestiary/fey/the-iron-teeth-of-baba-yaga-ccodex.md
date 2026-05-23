---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- The Iron Teeth of Baba Yaga
---
# [The Iron Teeth of Baba Yaga](Mechanics\CLI\bestiary\fey/the-iron-teeth-of-baba-yaga-ccodex.md)
*Source: Creature Codex p. 47*  

*A set of iron dentures flap through the air, screeching in a voice like metal scraping on metal.*

## Scholar

The dentures are scholars of the arcane and are often found exploring ruins, especially ancient sites of magic. They see themselves as intellectually superior to their owner and chastise Baba Yaga for her use of baser forms of magic.

## Wilful

The iron teeth are usually content sitting firmly in Baba Yaga's mouth, assisting the witch. However, should she anger the dentures, either by ignoring their request to visit some forgotten tower or scolding them too much for insolence, the dentures may abandon her for a while. They may work against her if the two are particularly at odds.

```statblock
"name": "The Iron Teeth of Baba Yaga (CCodex)"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "15d6 + 15"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "12"
  - !!int "18"
  - !!int "10"
  - !!int "10"
"speed": "0 ft., fly 30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+6"
"damage_resistances": "lightning"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Dwarvish, Elvish, Infernal, Sylvan"
"cr": "2"
"traits":
  - "desc": "Iron's innate spellcasting ability is Intelligence (spell save DC 14,\
      \ +6 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring only verball components:\n\n**At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md), [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md),\
      \ [true strike](Mechanics/CLI/spells/true-strike-xphb.md)\n\n**5/day each:**\
      \ [grease](Mechanics/CLI/spells/grease-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [shield](Mechanics/CLI/spells/shield-xphb.md)\n\n**4/day each:** [acid arrow](Mechanics/CLI/spells/melfs-acid-arrow-xphb.md),\
      \ [blur](Mechanics/CLI/spells/blur-xphb.md), [heat metal](Mechanics/CLI/spells/heat-metal-xphb.md)"
    "name": "Innate Spellcasting"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (3d4 + 4) piercing damage."
    "name": "Pinch"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/the-iron-teeth-of-baba-yaga-ccodex.png"
```
^statblock

## Environment

forest