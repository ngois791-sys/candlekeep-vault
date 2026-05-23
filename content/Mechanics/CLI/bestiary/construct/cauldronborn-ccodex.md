---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cauldronborn
---
# [Cauldronborn](Mechanics\CLI\bestiary\construct/cauldronborn-ccodex.md)
*Source: Creature Codex p. 59*  

*A humanoid made of clods of earth, worn stones, and fragments of metal roams a forgotten battlefield. When it spies a potion, faint light flares in its eye sockets and the creature rushes toward it.*

Sometimes mistaken for solitary earth elementals, cauldronborn arise from potions, corrupted by time or magic, that infuse nearby materials. The material animates with the potion's fluid holding the body together. They appear around ancient battlefields or magical ruins, searching for more potions to absorb and fuel their growth. Since a cauldronborn is only interested in potions, scavengers can search the same areas for other magic items the cauldronborn ignores. Having a lead-lined chest to safely store the magical items is vital to avoid the creature's attention.

## Corruption Given Form

Nearly all cauldronborn arise from the common [potion of healing](Mechanics/CLI/items/potion-of-healing-xdmg.md), thus their forms regenerate slowly. It is possible for other potions to grant cauldronborn corresponding benefits.

## Fueled Growth

Absorbing more potions increases a cauldronborn's resilience and eventually leads to gaining additional permanent benefits. The additional magical fluid also allows it to add more pieces onto its form and grow in size. It continues this cycle of searching, absorbing, and growing as long as it exists..

## Magically Obsessed

Cauldronborn are innately aware of magic and fixate on absorbing potions. They become increasingly frantic and dangerous when they sense potions nearby. A farmer may only need to engage in a brisk walk to stay safely out of reach of a creature on the hunt, while an alchemist carrying several potions will be run to ground by the desperate construct.

## Construct Nature

A cauldronborn doesn't require air, food, drink, or sleep.

```statblock
"name": "Cauldronborn (CCodex)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "-2"
"stats":
  - !!int "14"
  - !!int "7"
  - !!int "12"
  - !!int "3"
  - !!int "1"
  - !!int "6"
"speed": "20 ft."
"damage_resistances": "piercing, slashing from nonmagical weapons that aren't adamantine"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 5"
"languages": ""
"cr": "2"
"traits":
  - "desc": "As a bonus action, a cauldronborn can consume one potion within 5 feet\
      \ of it that is not being worn or carried. Along with the potion's effect, the\
      \ cauldronborn's hp maximum increases by 3 (1d6) and it gains the same number\
      \ of hp."
    "name": "Consumption"
  - "desc": "The cauldronborn can pinpoint the location of potions and magic items\
      \ within 60 feet of it. Outside of 60 feet, it can sense the general direction\
      \ of potions within 1 mile of it."
    "name": "Detect Elixir"
  - "desc": "The cauldronborn regains 2 hp at the start of its turn if it has at least\
      \ 1 hp."
    "name": "Regeneration"
  - "desc": "The cauldronborn triples its speed until the end of its turn when moving\
      \ toward a potion it has detected."
    "name": "Sprint"
"actions":
  - "desc": "The cauldronborn makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) bludgeoning damage."
    "name": "Slam"
  - "desc": "The cauldronborn releases a hungry screech, magically reaching out to\
      \ nearby potions. All potions within 10 feet of the cauldronborn magically move\
      \ toward the cauldronborn by rolling out of backpacks, hopping off of belts,\
      \ unburying themselves, etc. A creature wearing or carrying a potion must succeed\
      \ on a DC 13 Dexterity saving throw or its potion moves to within 5 feet of\
      \ the cauldronborn. The target must make a separate saving throw for each potion\
      \ it is attempting to keep in its possession."
    "name": "Call Potion (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/cauldronborn-ccodex.png"
```
^statblock

## Environment

any