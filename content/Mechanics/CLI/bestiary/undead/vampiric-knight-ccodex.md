---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/vampire
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampiric Knight
---
# [Vampiric Knight](Mechanics\CLI\bestiary\undead/vampiric-knight-ccodex.md)
*Source: Creature Codex p. 369*  

*The figure looks like any other knight in black plate armor until its ebon longsword strikes true, draining the life force of those it hits.*

## Born in Despair

A vampiric knight is created when a holy knight is brought low on the field of battle by a vampire. Rather than taking on the traits of a normal vampire, the knight turns into a unique creature, destined to serve its murderer for eternity.

## Unaffected by Sunlight

The process of a vampiric knight's rebirth makes it immune to the effects of sunlight, unlike a normal vampire. This makes the knight a valued servant, capable of delivering messages—or death—at any moment.

## Undead Nature

The vampiric knight doesn't require air.

```statblock
"name": "Vampiric Knight (CCodex)"
"size": "Medium"
"type": "undead"
"subtype": "Vampire"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "The languages it knew in life"
"cr": "11"
"traits":
  - "desc": "The vampiric knight regains 20 hp at the start of its turn if it has\
      \ at least 1 hp and isn't in running water. If it takes radiant damage or damage\
      \ from holy water, this trait doesn't function at the start of the vampiric\
      \ knight's next turn."
    "name": "Regeneration"
  - "desc": "The vampiric knight has the following flaws:\n\n- *Forbiddance.* The\
      \ vampiric knight can't enter a residence without an invitation from one of\
      \ the occupants.  \n- *Harmed by Running Water.* The vampiric knight takes 20\
      \ acid damage if it ends its turn in running water.  \n- *Stake to the Heart.*\
      \ If a piercing weapon made of wood is driven into the vampiric knight's heart\
      \ while the knight is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ in its resting place, the vampiric knight is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ until the stake is removed.  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "The vampiric knight makes two impaling longsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with\
      \ two hands, plus 9 (2d8) necrotic damage. The vampiric knight impales the\
      \ target on its longsword, grappling the target if it is a Medium or smaller\
      \ creature (escape DC 17). Until the grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ takes 9 (2d8) necrotic damage at the start of each of its turns, and the\
      \ vampiric knight can't make longsword attacks against other targets."
    "name": "Impaling Longsword"
  - "desc": "Each living creature within 20 feet of the vampiric knight must make\
      \ a DC 17 Constitution saving throw, taking 42 (12d6) necrotic damage on a\
      \ failed save, or half as much damage on a successful one."
    "name": "Channel Corruption (Recharge 5-6)"
"reactions":
  - "desc": "When a creature makes an attack against an allied vampire, the knight\
      \ can grant the vampire a +3 bonus to its AC if the knight is within 5 feet\
      \ of the vampire."
    "name": "Shield"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/vampiric-knight-ccodex.png"
```
^statblock

## Environment

any