---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ghost Dwarf
---
# [Ghost Dwarf](Mechanics\CLI\bestiary\undead/ghost-dwarf-ccodex.md)
*Source: Creature Codex p. 171*  

*The spectral visage of a wide-eyed dwarf stares out from the open visor of a suit of black platemail, muttering to itself.*

## From Hope to Horror

The risen shades of dwarven paladins and other would-be heroes who made holy war on the undead and lost, the ghost dwarves march by night, sent back to slay those who originally sent them.

## Prayers Unanswered

The face of a ghost dwarf stares out from its black helm with a look of sheer terror, desperate and unguarded enough to horrify most dwarves. The echoes of their last words, of oaths in vain and pleadings with their gods, fill the air around them in a chilling whisper.

## Instruments of Spite

More powerful undead take great pleasure in sending these shades back against their grieving kin. The ghost dwarves themselves often lead wights and other lesser undead into battle.

## Undead Nature

A ghost dwarf doesn't require air, food, drink, or sleep.

```statblock
"name": "Ghost Dwarf (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "81"
"hit_dice": "18d8"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "30 ft., fly 40 ft. (hover)"
"saves":
  - "wisdom": !!int "5"
"damage_resistances": "acid; cold; fire; lightning; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "The languages it knew in life"
"cr": "6"
"traits":
  - "desc": "The ghost dwarf and any undead within 10 feet of it have advantage on\
      \ saving throws against effects that turn undead."
    "name": "Aura of Defiance"
  - "desc": "The ghost dwarf can see 60 feet into the Ethereal Plane when it is on\
      \ the Material Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The ghost dwarf can move through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the ghost dwarf has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The ghost dwarf makes three attacks, only one of which can be a hand\
      \ of the grave attack."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d6 + 2) plus 9 (2d8) necrotic damage. A new\
      \ ghostly axe appears in the ghost dwarf's hand after it is thrown."
    "name": "Ghostly Axe"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 18\
      \ (4d8) necrotic damage. The target must succeed on a DC 15 Constitution saving\
      \ throw or its hp maximum is reduced by an amount equal to the damage taken.\
      \ This reduction lasts until the target finishes a long rest. The target dies\
      \ if this effect reduces its hp maximum to 0."
    "name": "Hand of the Grave"
  - "desc": "The ghost dwarf emits a constant whisper consisting of prayers, pleading,\
      \ cursing, and cryptic phrases. The volume of the whispering intermittently\
      \ increases, and those within 30 feet of the ghost dwarf that can hear it must\
      \ succeed on a DC 15 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Prayers Unanswered (Recharge 5-6)"
  - "desc": "The ghost dwarf enters the Ethereal Plane from the Material Plane, or\
      \ vice versa. It is visible on the Material Plane while it is in the Border\
      \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
      \ the other plane"
    "name": "Etherealness"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/ghost-dwarf-ccodex.png"
```
^statblock

## Environment

any