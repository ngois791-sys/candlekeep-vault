---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fire Imp
---
# [Fire Imp](Mechanics\CLI\bestiary\fiend/fire-imp-ccodex.md)
*Source: Creature Codex p. 103*  

*A tiny devil with red scales and wings of fire flits around the area, laughing as it ignites everything with a touch. The creature reeks of sulfur and brimstone.*

Fire imps are one of the lowest forms of devils, below even common imps. They are mischievous troublemakers who desire only to ignite the multiverse.

## Contained Insanity

While fire imps are demented arsonists, they are still devils and follow the chain of command. When the imps are not starting fires, they fidget, play with nearby utilitarian flames, and beg for permission to use their destructive abilities like whiny children. Glee strikes when the imps set something on fire, and they often go overboard, burning anything they can get away with.

## Distract and Weaken

Devils send fire imps to a fortified location to cause chaos and weaken defenses. Demons recognize the havoc the tiny fiends cause and know to expect a devil attack soon after the arrival of fire imps.

## Favored by Efreeti

Efreeti commonly hire fire imps as henchmen. The devils serve as spies, saboteurs, and guards in exchange for trips to the Plane of Fire, the most beautiful place in the multiverse to a fire imp. Efreeti often make the imps set fires to the property of nobles so that the genie can save the day...for a price.

```statblock
"name": "Fire Imp (CCodex)"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "14"
"hit_dice": "4d4 + 4"
"modifier": !!int "2"
"stats":
  - !!int "5"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "Common, Infernal"
"cr": "1/2"
"traits":
  - "desc": "Magical darkness doesn't impede the imp's darkvision."
    "name": "Devil's Sight"
  - "desc": "Whenever the imp is subjected to fire damage, it takes no damage and\
      \ instead regains a number of hp equal to the fire damage dealt."
    "name": "Fire Absorption"
  - "desc": "As a bonus action, the imp casts the heat metal spell without expending\
      \ any material components (spell save DC 12)."
    "name": "Heat Metal (1/Day)"
  - "desc": "The imp has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Spell Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) fire damage and if the target is a flammable object that isn't\
      \ being worn or carried, it also catches fire. If the target is a creature,\
      \ it must succeed on a DC 12 Dexterity saving throw or take another 2 (1d4)\
      \ fire damage at the start of its next turn."
    "name": "Fire Touch"
  - "desc": "*Ranged Spell Attack:* +4 to hit, range 150 ft., one target. *Hit:*\
      \ 5 (2d4) fire damage and if the target is a flammable object that isn't being\
      \ worn or carried, it also catches fire."
    "name": "Hurl Flame"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/fire-imp-ccodex.png"
```
^statblock

## Environment

planar