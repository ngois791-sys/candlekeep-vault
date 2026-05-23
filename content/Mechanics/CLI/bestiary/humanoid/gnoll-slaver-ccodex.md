---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gnoll
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnoll Slaver
---
# [Gnoll Slaver](Mechanics\CLI\bestiary\humanoid/gnoll-slaver-ccodex.md)
*Source: Creature Codex p. 189*  

*With a fistful of chains and shackles and a fat money pouch, the cackling of a successful gnoll slaver is hard to mistake for anything else. They are common in slaveholding societies, though treated with respect only among their own kind.*

Occupying a strange role in a human land, gnoll slavers perform duties at which their bestial appearance and nature work to their advantage. They serve as brutal enforcers among the slave population, as captains of raiding bands, and as slave catchers, leading patrols along the land's borders in search of escapees.

## Brands, Scars, and Marks

Gnoll slavers have a fondness for gnawing their victims or threatening the creatures with punishments that scar and mark the victim. Branding slaves is a popular pastime among gnolls.

## Slain on Sight

Races near gnoll slavers tend to show no mercy towards the evil raiders; a captured slaver can expect a speedy execution and often is slain out of hand by a former slave. This merely drives gnoll slavers to some degree of caution; they prefer to operate in groups with other gnolls, and they are often the first to flee if things turn against them.

```statblock
"name": "Gnoll Slaver (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Gnoll"
"cr": "3"
"traits":
  - "desc": "When the gnoll reduces a creature to 0 hp with a melee attack on its\
      \ turn, the gnoll can take a bonus action to move up to half its speed and make\
      \ a bite attack."
    "name": "Rampage"
"actions":
  - "desc": "The gnoll makes three attacks. one with its bite and two with its whip\
      \ or three with its longbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) slashing damage."
    "name": "Whip"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:*\
      \ 6 (1d8 + 2) piercing damage."
    "name": "Longbow"
  - "desc": "The gnoll selects up to three creatures it has taken captive within 30\
      \ feet. Each creature must succeed on a DC 15 Wisdom saving throw or have disadvantage\
      \ for 1 minute on any attack rolls or skill checks to take actions other than\
      \ those the gnoll has ordered it to take."
    "name": "Menace Captives (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/gnoll-slaver-ccodex.png"
```
^statblock

## Environment

farmland, grassland, urban