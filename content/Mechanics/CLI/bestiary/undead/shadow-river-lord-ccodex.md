---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow River Lord
---
# [Shadow River Lord](Mechanics\CLI\bestiary\undead/shadow-river-lord-ccodex.md)
*Source: Creature Codex p. 327*  

*The figure rising from the water appears to wear a cloak made of stars, but the moonlight reveals a watery garment of black liquid. The form beneath the water is as fluid as the cloak. A blue-white skull grins from atop the body, and the staff it holds glows with green fire.*

## Undead Fey Spirits

Shadow river lords make their homes where dangerous rivers wear away the barrier between the mortal world and the dark fey lands. These dangerous creatures prey upon those who travel or reside near the river. A creature that dies in the river forfeits its soul to the local shadow river lord, who whisks the soul away to the fey realm to be used as currency or as a means to gain further power.

## Shadow Skeleton Servants

While the souls of the victims of a shadow river lord are lost, the flesh is devoured by the river's denizens, leaving only bones. These bones are reanimated as [shadow skeletons](Mechanics/CLI/bestiary/undead/shadow-skeleton-ccodex.md), which lurk beneath the river's surface, waiting for their master's call to action. The shadow skeletons hide within rapids or at the deepest parts of a river, hoping to pull victims down to a watery demise.

## Undead Nature

A shadow river lord doesn't require air, food, drink, or sleep.

```statblock
"name": "Shadow River Lord (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "30 ft., swim 60 ft."
"damage_resistances": "cold; fire; necrotic; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "9"
"traits":
  - "desc": "The shadow river lord can move through a space as narrow as one inch\
      \ wide without squeezing."
    "name": "Amorphous"
"actions":
  - "desc": "The shadow river lord makes two greenfire staff or two shadowfrost bolt\
      \ attacks. If two attacks hit the same target, the target must make a DC 16\
      \ Constitution saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of its next turn."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) bludgeoning damage plus 7 (2d6) fire damage."
    "name": "Greenfire Staff"
  - "desc": "*Ranged Spell Attack:* +8 to hit, range 150 ft., one target. *Hit:*\
      \ 9 (2d8) necrotic damage plus 7 (2d6) cold damage."
    "name": "Shadowfrost Bolt"
  - "desc": "The shadow river lord expels a geyser of shadowy water from its staff\
      \ in a 30-foot cone. Each creature in that area must make a DC 16 Dexterity\
      \ saving throw, taking 21 (6d6) necrotic damage and 21 (6d6) cold damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Shadow Geyser (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/shadow-river-lord-ccodex.png"
```
^statblock

## Environment

forest, underwater