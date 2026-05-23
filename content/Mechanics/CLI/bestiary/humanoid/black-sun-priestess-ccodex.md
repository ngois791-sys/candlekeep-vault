---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/orc
statblock: inline
statblock-link: "#^statblock"
aliases:
- Black Sun Priestess
---
# [Black Sun Priestess](Mechanics\CLI\bestiary\humanoid/black-sun-priestess-ccodex.md)
*Source: Creature Codex p. 290*  

*With a fondness for cracking open ribcages and pulling out beating hearts, Black Sun priestesses are always on the lookout for the next sacrifice to their blasphemous gods.*

With her devotion painted in blood across her breast and her eyes alight with fervor for her dark faith, the Black Sun priestess embraces her cruel duties with relish.

## Front Line Fighter

Urging her people on to night raids for slaughter and glory, she wades into the fray alongside them as they leave little more than cracked, burnt bones in their wake. With her greatclub flecked with dried blood and her face painted white as a skull, she cuts a fearsome figure for a fearsome faith.

```statblock
"name": "Black Sun Priestess (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[hide armor](Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "9"
  - !!int "16"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+1"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Orc"
"cr": "3"
"traits":
  - "desc": "The black sun priestess is a 6th-level spellcaster. Its spellcasting\
      \ ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The\
      \ black sun priestess has the following cleric spells prepared:\n\n**Cantrips\
      \ (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md), [mending](Mechanics/CLI/spells/mending-xphb.md),\
      \ [resistance](Mechanics/CLI/spells/resistance-xphb.md), [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md)\n\
      \n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md)\n\
      \n**2nd level (3 slots):** [augury](Mechanics/CLI/spells/augury-xphb.md), [spiritual\
      \ weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n**3rd level (3 slots):**\
      \ [animate dead](Mechanics/CLI/spells/animate-dead-xphb.md), [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the priestess can move up to her speed toward a hostile\
      \ creature that she can see."
    "name": "Aggressive"
  - "desc": "Magical darkness doesn't impede the the Black Sun priestess' darkvision."
    "name": "Black Sun Sight"
  - "desc": "While in bright light, the orc has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Light Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage."
    "name": "Greatclub"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/black-sun-priestess-ccodex.png"
```
^statblock

## Environment

mountain, underground