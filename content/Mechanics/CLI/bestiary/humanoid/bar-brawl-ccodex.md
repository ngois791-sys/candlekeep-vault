---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bar Brawl
---
# [Bar Brawl](Mechanics\CLI\bestiary\humanoid/bar-brawl-ccodex.md)
*Source: Creature Codex p. 48*  

*An enraged mass of malcontents storms across the tavern, overturning tables, busting bottles, and browbeating innocent patrons.*

The jovial peace of a drinking establishment can transform into a whirlwind of chaos and violence in a mere moment, and no one caught in the middle of a bar brawl can hope to evade it.

## Mob Brutality

A bar brawl arises suddenly and violently, often after a vile insult is lobbed or an accusation of cheating is lodged. Once enraged, the bar brawl attacks indiscriminately, assailing both the faultless and offending patrons with whatever weapons readily come to hand.

```statblock
"name": "Bar Brawl (CCodex)"
"size": "Huge"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "67"
"hit_dice": "9d12 + 9"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "9"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "piercing, slashing"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "passive Perception 10"
"languages": ""
"cr": "3"
"traits":
  - "desc": "As a bonus action, the bar brawl imbibes nearby alcohol to gain access\
      \ to a hidden reservoir of audacity and grit. The bar brawl gains 7 (2d6)\
      \ temporary hp for 1 minute."
    "name": "Liquid Courage (Recharge 5-6)"
  - "desc": "The bar brawl can occupy another creature's space and vice versa, and\
      \ the bar brawl can move through any opening large enough for a Medium humanoid.\
      \ Except for Liquid Courage, the bar brawl can't regain hp or gain temporary\
      \ hp."
    "name": "Swarm"
"actions":
  - "desc": "The bar brawl makes two melee attacks or two darts attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, range 0 ft., one target in the bar\
      \ brawl's space. *Hit:* 14 (4d6) bludgeoning damage, or 7 (2d6) if the bar\
      \ brawl has half its hit points or fewer."
    "name": "Barstool"
  - "desc": "*Melee Weapon Attack:* +4 to hit, range 0 ft., one target in the bar\
      \ brawl's space. *Hit:* 10 (4d4) slashing damage, or 5 (2d4) if the bar\
      \ brawl has half its hit points or fewer."
    "name": "Broken Bottles"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 20/40 ft. *Hit:* 10 (4d4)\
      \ piercing damage, or 5 (2d4) if the bar brawl has half its hit points or\
      \ fewer."
    "name": "Darts"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/bar-brawl-ccodex.png"
```
^statblock

## Environment

urban