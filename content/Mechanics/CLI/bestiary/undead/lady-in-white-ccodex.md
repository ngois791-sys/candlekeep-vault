---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lady In White
---
# [Lady In White](Mechanics\CLI\bestiary\undead/lady-in-white-ccodex.md)
*Source: Creature Codex p. 246*  

*Swathed in white robes, skirts, and scarves, a lady in white seems to be a living woman for a time—until she reveals her true face, often one that terrifies all who see it.*

## Tragic Apparitions

The spirit of a woman who met a terrible, tragic end, often through murder at the hands of loved ones, a lady in white wanders near the place where she died.

## Unpredictable Encounters

Encounters with ladies in white vary markedly. The only consistent details are the general appearance of the ladies—that they seem to be living women when first encountered—and the fact that they rarely appear in front of more than a few people at once. Though the ladies in white often appear confused or lost, some do so to deceive and lead people into danger. Some will change their appearance suddenly, revealing the injuries from which they died and frightening people into the path of some hazard.

## Signs of the Past

Some ladies in white do no more than ask for directions or an escort home, disappearing along the route. Their sudden departure is usually accompanied by a scream at the location where their lives came to an end, but they otherwise cause their escorts no harm. The most frightening and wellknown encounters with ladies in white are when their appearances reveal the ones who killed them.

## Undead Nature

lady in white doesn't require air, food, drink, or sleep.

```statblock
"name": "Lady In White (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "11d8"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "11"
  - !!int "18"
"speed": "0 ft., fly 30 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "The languages it knew in life"
"cr": "2"
"traits":
  - "desc": "The lady in white can move through other creatures and objects as if\
      \ they were difficult terrain. It takes 5 (1d10) force damage if it ends its\
      \ turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) necrotic damage, and, if the target is a Large or smaller humanoid,\
      \ the lady in white attaches to it. The lady in white attaches to the target's\
      \ back, where it is unable to see the lady in white. The lady in white can detach\
      \ itself by spending 5 feet of its movement. A creature, other than the target,\
      \ can take its action to detach the lady in white by succeeding on a DC 14 Strength\
      \ check."
    "name": "Grasp"
  - "desc": "The lady in white makes one grasp attack against the target to which\
      \ it is attached. If the attack hits, the target's Charisma score is reduced\
      \ by 1d4. The target dies if this reduces its Charisma to 0. Otherwise, the\
      \ reduction lasts until the target finishes a short or long rest.\n\nIf a female\
      \ humanoid dies from this attack, a new lady in white rises from the corpse\
      \ 1d4 hours later."
    "name": "Inflict Sorrow"
  - "desc": "The lady in white turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks, or until its concentration ends (as if concentrating on\
      \ a spell)."
    "name": "Invisibility"
  - "desc": "The lady in white does away with her living disguise and reveals her\
      \ undead state. Each non-undead creature within 50 feet of the lady that can\
      \ see her must succeed on a DC 13 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a target's saving\
      \ throw is successful or the effect ends for it, the target is immune to the\
      \ lady's Corpse Revealed for the next 24 hours."
    "name": "Corpse Revealed"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/lady-in-white-ccodex.png"
```
^statblock

## Environment

any