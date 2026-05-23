---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Moonchild Naga
---
# [Moonchild Naga](Mechanics\CLI\bestiary\monstrosity/moonchild-naga-ccodex.md)
*Source: Creature Codex p. 273*  

*This great serpent with shimmering scales of varying colors has the face of a beautiful woman. Its eyes shine like the moon in a sea of stars, and it sways to an unheard rhythm.*

## Starry Gaze

The pupils and irises of a moonchild naga appear as moons in miniature, surrounded by black sclera dotted with faintly glowing stars. The moonchild naga uses its eyes to claim a connection to the powers of the moon and the stars, which grants it powers of prophecy. The bewitching power in their gaze lends some credence to these claims.

## Manipulative Masters

These nagas excel at manipulation, convincing those who listen of their own hidden greatness, and that, through time spent in communion and service to the naga, they can unlock their true potential. Through ritual deprivation, drug-induced visions, the promised revelation of great secrets that never come, and the reinforcement of the naga's own place in their lives, moonchild nagas never lack for a small cadre of underlings to do their bidding.

## Two is a Crowd

Moonchild nagas avoid one another for fear that another will spoil their efforts or expose them as charlatans in order to make off with their devotees.

```statblock
"name": "Moonchild Naga (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "4"
"stats":
  - !!int "17"
  - !!int "18"
  - !!int "14"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "6"
"traits":
  - "desc": "The moonchild naga's innate spellcasting ability is Charisma (spell save\
      \ DC 15, +7 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring only verbal components:\n\n**At will:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [friends](Mechanics/CLI/spells/friends-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [message](Mechanics/CLI/spells/message-xphb.md), [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\
      \n**3/day each:** [color spray](Mechanics/CLI/spells/color-spray-xphb.md), [dispel\
      \ magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md)\n\n**1/day each:**\
      \ [dominate beast](Mechanics/CLI/spells/dominate-beast-xphb.md), [hypnotic pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "If it dies, the moonchild naga returns to life in 1d6 days and regains\
      \ all its hp. Only a [wish](Mechanics/CLI/spells/wish-xphb.md) spell can prevent\
      \ this trait from functioning."
    "name": "Rejuvenation"
"actions":
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 13 (2d8 + 4) piercing damage plus 18 (4d8) poison damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) bludgeoning damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the naga can't constrict another target."
    "name": "Constrict"
  - "desc": "The moonchild naga's bottomless gaze inexorably draws the eye of one\
      \ target within 30 feet. If the target can see the naga, it must succeed on\
      \ a DC 15 Wisdom saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of the naga's next turn. If the target's saving throw is successful,\
      \ it is immune to the naga's gaze for the next 24 hours."
    "name": "Starry Gaze"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/moonchild-naga-ccodex.png"
```
^statblock

## Environment

any