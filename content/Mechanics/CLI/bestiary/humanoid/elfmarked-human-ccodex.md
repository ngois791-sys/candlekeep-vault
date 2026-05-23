---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elfmarked Human
---
# [Elfmarked Human](Mechanics\CLI\bestiary\humanoid/elfmarked-human-ccodex.md)
*Source: Creature Codex p. 403*  

The elvish legacy lives long in its people, and the half-elven people known as the elfmarked are no different. Many try to hide their elven heritage, but their ears and the elven magic that still runs in their blood sometimes makes the deception impossible. Because of their elven blood, the elfmarked are indelibly linked to the natural magical power of the world. This link can be useful to those who train in magic, though even those elfmarked who do not train have some magical abilities. When focused properly, the elfmarked can draw upon that power to do incredible feats.

> [!note] Elfmarked in Midgard
> 
> The elfmarked humans of Midgard are attuned to the ley lines that run throughout the world. They have an easier time when trying to open or travel on shadow roads, and they are more resistant to shadow corruption (see Midgard Worldbook). However, this attunement often distracts the elfmarked as the ley lines constantly thrum with energy. Elfmarked who stray too close to a powerful ley line suffer from random headaches, nosebleeds, or worse. 
^elfmarked-in-midgard

```statblock
"name": "Elfmarked Human (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "13"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Elvish"
"cr": "1/2"
"traits":
  - "desc": "The elfmarked human's innate spellcasting ability is Intelligence (spell\
      \ save DC 12). It can innately cast the following spells, requiring no material\
      \ components:\n\n**At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md)\n\n**1/day each:** [magic\
      \ missile](Mechanics/CLI/spells/magic-missile-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The elfmarked has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the elfmarked to sleep."
    "name": "Fey Ancestry"
  - "desc": "As a bonus action, the elfmarked gains advantage on its next weapon attack.\
      \ If the attack hits, it deals an extra 4 (1d8) force damage."
    "name": "Magical Resonance (5/Day)"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/elfmarked-human-ccodex.png"
```
^statblock

## Environment

any