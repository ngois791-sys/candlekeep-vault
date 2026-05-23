---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flame Eater Swarm
---
# [Flame Eater Swarm](Mechanics\CLI\bestiary\beast/flame-eater-swarm-ccodex.md)
*Source: Creature Codex p. 158*  

*A cloud of ash and fire draws closer, revealing itself to be dozens of tiny, soot-covered bats.*

These creatures were bred as part of the schemes of cultists of Camazotz (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), in the hope of creating a massive swarm of beasts that could fly to the sun and consume it. It's unlikely this ever could have worked, even if the creatures had turned out as intended, but something went horribly wrong during the ritual. What resulted was flame eaters: highly dangerous creatures that swarm into flying clouds, consume fire, and attack any creatures they encounter. They ignite flammable material, causing more fires, which the flame eaters devour and spread to other areas.

## Bane of the Living

These creatures are hated and feared by most living things. Even derros and their fellow insane cultists who created flame eaters are sometimes forced to eradicate the beasts for their own safety.

## Fire Cloud

Individually, a flame eater resembles an ashcolored bat with an oversized head, distended jaws, and glowing red eyes. As a swarm, they resemble a cloud of swirling embers.

```statblock
"name": "Flame Eater Swarm (CCodex)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "15"
  - !!int "12"
  - !!int "2"
  - !!int "14"
  - !!int "4"
"speed": "0 ft., fly 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "fire"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "2"
"traits":
  - "desc": "Any normal fire in the flame eater swarm's space at the end of the swarm's\
      \ turn is extinguished. Magical fire (a flaming weapon or wall of fire spell,\
      \ for example) is extinguished if the swarm makes a successful DC 13 Constitution\
      \ check. Only the swarm's space is affected; fires larger than the swarm continue\
      \ burning outside the swarm's space. For 1 minute after the swarm consumes any\
      \ flame, its bite attack deals an extra 9 (2d8) fire damage and any creature\
      \ that ends its turn in the swarm's space takes 4 (1d8) fire damage."
    "name": "Consume Flame"
  - "desc": "The swarm can occupy the same space as another creature and vice versa.\
      \ The swarm can move through any opening large enough for a Tiny bat. The swarm\
      \ can't regain hp or gain temporary hp."
    "name": "Swarm"
"actions":
  - "desc": "The swarm can make two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 0 ft., one creature in the\
      \ swarm's space. *Hit:* 7 (2d6) piercing damage, or 3 (1d6) piercing damage\
      \ if the swarm has half of its hp or fewer."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/flame-eater-swarm-ccodex.png"
```
^statblock

## Environment

underground