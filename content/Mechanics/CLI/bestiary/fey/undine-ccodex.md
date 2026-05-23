---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Undine
---
# [Undine](Mechanics\CLI\bestiary\fey/undine-ccodex.md)
*Source: Creature Codex p. 362*  

## Soulless Fey

Almost always female, these water fey lack a soul and may only gain one through bonding with a mortal. Undines often use their charm and talent for illusion to draw mortals to them, wooing the mortal into a binding kiss in an attempt to gain an immortal soul.

## Water Bonds

In many cases, undines befriend or partner with water elementals. The two communicate and share a single spirit, acting almost like a single creature. Some believe the undine devours or controls the elemental; others say the elemental worships and adores the undine willingly.

```statblock
"name": "Undine (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "18"
  - !!int "11"
  - !!int "13"
  - !!int "19"
"speed": "30 ft., swim 40 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+10"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Sylvan, Aquan"
"cr": "5"
"traits":
  - "desc": "The undine's innate spellcasting ability is Charisma (spell save DC 15).\
      \ It can innately cast the following spells, requiring only verbal components:\n\
      \n**At will:** [control water](Mechanics/CLI/spells/control-water-xphb.md),\
      \ [friends](Mechanics/CLI/spells/friends-xphb.md), [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md)\n\
      \n**3/day each:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [silent image](Mechanics/CLI/spells/silent-image-xphb.md)\n\n**1/day each:**\
      \ [hypnotic pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md), [major\
      \ image](Mechanics/CLI/spells/major-image-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The undine can breathe air and water."
    "name": "Amphibious"
  - "desc": "The undine can communicate telepathically with any creature cursed by\
      \ it with no range restriction. The undine doesn't need to be on the same plane\
      \ of existence as its cursed target to communicate this way."
    "name": "Cursed Telepathy"
  - "desc": "The undine can use its action to polymorph into a Small or Medium humanoid\
      \ with legs or with a mermaid's tail or back into its true watery humanoid form.\
      \ Its statistics, other than its size, are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed. It reverts to its true form if\
      \ it dies."
    "name": "Shapechanger"
  - "desc": "A creature cursed by the undine gains the Amphibious trait and a swimming\
      \ speed of 30 feet. After each long rest, the target must succeed on a DC 15\
      \ Constitution saving throw or its Constitution score is reduced by 1d4 as\
      \ it forgets to breathe regularly while resting. If the target received a Cursed\
      \ Kiss from the undine within the past 24 hours, it automatically succeeds on\
      \ its next saving throw. If the target ever lies to or is unfaithful to the\
      \ undine, it has disadvantage on its next saving throw, and its Constitution\
      \ is reduced by 2d4 instead of 1d4 on a failure. The curse lasts until the\
      \ undine takes a bonus action to lift it or until lifted by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or similar magic."
    "name": "Undine's Curse"
"actions":
  - "desc": "The undine uses its Cursed Kiss, if it can. It then makes two water hammer\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage plus 10 (3d6) cold damage. If the target\
      \ is a creature, it must succeed on a DC 15 Constitution saving throw or be\
      \ cursed (see the Undine's Curse trait)."
    "name": "Water Hammer"
  - "desc": "The undine kisses a target within 5 feet of it. The target must make\
      \ a DC 15 Constitution saving throw, taking 21 (6d6) psychic damage on a failed\
      \ save, or half as much damage on a successful one. A willing target takes no\
      \ damage but is immediately cursed (see the Undine's Curse trait), if it wasn't\
      \ already."
    "name": "Cursed Kiss (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/undine-ccodex.png"
```
^statblock

## Environment

underwater