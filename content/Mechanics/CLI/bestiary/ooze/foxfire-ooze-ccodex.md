---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Foxfire Ooze
---
# [Foxfire Ooze](Mechanics\CLI\bestiary\ooze/foxfire-ooze-ccodex.md)
*Source: Creature Codex p. 283*  

*Smelling a bit like ozone and looking like a cloud of glowing lights, this ooze is filled with strange lines of dots and nerve-like filaments.*

## Cloud of Glowing Lights

From a distance, a foxfire ooze often resembles swamp gas or a cloud of fireflies. Its amorphous shape is filled with tiny glowing lights, generally green or yellow but sometimes orange, blue, purple, or even pink. A potential prey's curiosity is often what brings it close enough to strike.

## Natural Swimmers

Foxfire oozes are able to swim for short distances. Some even use ponds, slow-moving streams, or underground pools as lairs and breeding areas.

## Open Sky Hunter

Foxfire oozes are not relegated to caverns and dim sewers and are often found in rivers, forests, marshlands, and even sometimes in open plains, especially when storms threaten. A foxfire ooze encountered during a lightning storm is particularly aggressive.

## Ooze Nature

A foxfire ooze doesn't require sleep.

```statblock
"name": "Foxfire Ooze (CCodex)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "20"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 20 ft., fly 10 ft. (hover), swim 20 ft."
"damage_vulnerabilities": "cold"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "acid, fire, lightning"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "10"
"traits":
  - "desc": "The ooze has advantage on attack rolls against any creature it has surprised."
    "name": "Ambusher"
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "A creature that touches the ooze while wearing metal or hits it with\
      \ a melee attack with a metal weapon takes 9 (2d8) lightning damage and triggers\
      \ a lightning storm. All creatures within 20 feet of the ooze that are holding\
      \ or wearing metal must succeed on a DC 16 Dexterity saving throw or take 9\
      \ (2d8) lightning damage."
    "name": "Lightning Storm"
  - "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The foxfire ooze makes three pseudopod attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 20\
      \ (3d10 + 4) bludgeoning damage plus 4 (1d8) lightning damage."
    "name": "Pseudopod"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/foxfire-ooze-ccodex.png"
```
^statblock

## Environment

forest, grassland, swamp