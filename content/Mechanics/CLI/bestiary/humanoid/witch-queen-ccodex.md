---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/derro
statblock: inline
statblock-link: "#^statblock"
aliases:
- Witch Queen
---
# [Witch Queen](Mechanics\CLI\bestiary\humanoid/witch-queen-ccodex.md)
*Source: Creature Codex p. 97*  

*The unfocused dark eyes and twisted smile of the small, dwarf-like creature at first make her seem insane, yet harmless. Then the magic that pours from her proves that assumption terribly wrong.*

## Cold, Calculating Insanity

The derro witch queen sits at the center of an entire clan of derro, turning the mad dreams and odd behaviors of each individual into action. Like the rest of her clan, the inscrutable thoughts and actions of the derro witch queen may seem random and chaotic, but at their core the derro find themselves moving toward a common goal.

## Ruler and Servant

The witch queen looks different from other derro. Her pale skin and dark raven hair set her apart, as do her cold, black-pupiled eyes. These changes come over the witch queen upon the death of the previous witch queen, when the mad soul of the witch queen transfers from one host to the next. While outsiders may think the witch queen rules her clan, the opposite is true. The witch queen responds to the unfocused, rambling thoughts of each member of her clan. Her synchronicity with every member of the clan informs all her actions and decisions, making her the maddest of the mad.

```statblock
"name": "Witch Queen (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "77"
"hit_dice": "14d6 + 28"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "9"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 9"
"languages": "Common, Dwarvish, Undercommon"
"cr": "5"
"traits":
  - "desc": "The witch queen is an 8th-level spellcaster. Its spellcasting ability\
      \ is Charisma (spell save DC 14, +6 to hit with spell attacks). The witch\
      \ queen has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [message](Mechanics/CLI/spells/message-xphb.md), [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md)\n\
      \n**1st level (4 slots):** [burning hands](Mechanics/CLI/spells/burning-hands-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md), [sleep](Mechanics/CLI/spells/sleep-xphb.md)\n\
      \n**2nd level (3 slots):** [invisibility](Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [spider climb](Mechanics/CLI/spells/spider-climb-xphb.md), [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\
      \n**3rd level (3 slots):** [blink](Mechanics/CLI/spells/blink-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\n**4th level\
      \ (2 slots):** [blight](Mechanics/CLI/spells/blight-xphb.md), [confusion](Mechanics/CLI/spells/confusion-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, a target of the witch queen's choice within 60 feet\
      \ of her has disadvantage on its saving throw against her next spell."
    "name": "Heightened Spell (3/Day)"
  - "desc": "The witch queen has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "While in sunlight, the witch queen has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage. If the target is a creature, it must succeed\
      \ on a DC 14 Charisma saving throw or use its reaction to move up to its speed\
      \ and make a melee attack against the nearest enemy of the witch queen."
    "name": "Maddening Scimitar"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/witch-queen-ccodex.png"
```
^statblock

## Environment

underground