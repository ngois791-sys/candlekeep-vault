---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Knight of the Road
---
# [Knight of the Road](Mechanics\CLI\bestiary\humanoid/knight-of-the-road-ccodex.md)
*Source: Creature Codex p. 146*  

*A grinning elf with snow white skin and jet-black hair holds up her hand authoritatively, blocking the path forward.*

## Agents of the Shadow Roads

Shadow fey knights of the road stalk the lands near shadow gates, or the shadow roads themselves, ever-watchful for opportunities to enrich themselves or improve their station, be it through robbery, ransom, or murder.

## Opportunists and Climbers

These shadow elves, often out-of-favor minor nobility, study every nook and cranny of the territory in which they work. They use their accumulated knowledge against their quarry with great effect in the hopes of using new wealth, knowledge, and infamy to curry favor with their betters.

## Never Far from Home.

Knights of the road prefer to fight, hunt, threaten, and do other business in the Shadow Realm, though they are active anywhere that connects to it.

```statblock
"name": "Knight of the Road (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish"
"cr": "5"
"traits":
  - "desc": "The shadow fey has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "The shadow fey has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Keen Sight"
  - "desc": "As a bonus action, the shadow fey designates a creature it can see within\
      \ 100 feet and obscures the creature and its companions' travel on a particular\
      \ shadow road. That shadow road will not open for the designated creature or\
      \ its traveling companions except through powerful magical means such as by\
      \ a key of Veles (see the \"Fifth Edition Appendix\" in the Midgard Worldbook).\
      \ In addition, that shadow road won't lead to its usual destination for the\
      \ designated creature or its traveling companions, instead leading the group\
      \ in a meandering loop. This effect lasts for 9 (2d8) days, until the shadow\
      \ fey removes the effect, or until the shadow fey dies."
    "name": "Obscure the Way (1/Day)"
  - "desc": "As a bonus action while in shadows, dim light, or darkness, the shadow\
      \ fey disappears into the darkness and reappears in an unoccupied space it can\
      \ see within 30 feet. A tendril of inky smoke appears at the origin and destination\
      \ when it uses this trait."
    "name": "Shadow Traveler (3/Day)"
  - "desc": "While in sunlight, the shadow fey has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The shadow fey has advantage on Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ checks made to know about shadow roads and shadow magic spells or items."
    "name": "Traveler In Darkness"
"actions":
  - "desc": "The knight of the road makes two longsword attacks or two shortbow attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with\
      \ two hands."
    "name": "Longsword"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (1d12 + 2) piercing damage."
    "name": "Lance"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 80/320 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage and the target must succeed on a DC 15 Constitution\
      \ saving throw or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. A [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/knight-of-the-road-ccodex.png"
```
^statblock

## Environment

any