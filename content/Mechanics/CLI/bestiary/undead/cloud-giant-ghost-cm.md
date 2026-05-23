---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cloud Giant Ghost
---
# [Cloud Giant Ghost](Mechanics\CLI\bestiary\undead/cloud-giant-ghost-cm.md)
*Source: Candlekeep Mysteries p. 146*  

```statblock
"name": "Cloud Giant Ghost (CM)"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d12"
"modifier": !!int "0"
"stats":
  - !!int "27"
  - !!int "11"
  - !!int "10"
  - !!int "12"
  - !!int "16"
  - !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Common, Giant"
"cr": "9"
"traits":
  - "desc": "The ghost can see 120 feet into the Ethereal Plane when it is on the\
      \ Material Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The ghost can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "The ghost regains 10 hit points at the start of its turn. If the ghost\
      \ takes radiant damage or damage from a magic weapon, this trait doesn't function\
      \ at the start of the ghost's next turn. The ghost dies only if it starts its\
      \ turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The ghost makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d8 + 8) force damage."
    "name": "Spectral Weapon"
  - "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice\
      \ versa. It is visible on the Material Plane while it is in the Border Ethereal,\
      \ and vice versa, yet it can't affect or be affected by anything on the other\
      \ plane."
    "name": "Etherealness"
  - "desc": "The ghost emits a dreadful howl that summons a cold, biting wind. This\
      \ wind engulfs up to three creatures of the ghost's choice that it can see within\
      \ 60 feet of it. Each target is pulled up to 20 feet toward the ghost and must\
      \ make a DC 15 Constitution saving throw, taking 16 (3d10) cold damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Wind Howl (Recharge 6)"
  - "desc": "The ghost casts one of the following spells, using Charisma as the spellcasting\
      \ ability and requiring no material components:\n\n**At will:** [fog cloud](Mechanics/CLI/spells/fog-cloud-xphb.md)\n\
      \n**3/day:** [telekinesis](Mechanics/CLI/spells/telekinesis-xphb.md)\n\n**1/day:**\
      \ [control weather](Mechanics/CLI/spells/control-weather-xphb.md)"
    "name": "Spellcasting"
"source":
  - "CM"
"image": "Mechanics/CLI/bestiary/undead/token/cloud-giant-ghost-cm.webp"
```
^statblock