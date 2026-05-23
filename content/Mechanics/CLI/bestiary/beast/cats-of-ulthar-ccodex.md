---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cats of Ulthar
---
# [Cats of Ulthar](Mechanics\CLI\bestiary\beast/cats-of-ulthar-ccodex.md)
*Source: Creature Codex p. 58*  

*An enraged mass of malcontents storms across the tavern, overturning tables, busting bottles, and browbeating innocent patrons.*

## A Convergence of Felines

Seeing a group of cats (called a clowder) slinking down an alley barely registers in the minds of busy city-dwellers. Pests to some, pets to others, and invisible to most, the domestic housecat does not seem much of a threat. However, any beast with tooth and claw poses a threat on some level. And hundreds of those beasts, inspired and working together, can be a terrifying prospect.

## The Cats and the Weather

The first sign a victim of the cats of Ulthar sees is cloudy, violent weather. The bluest, clearest daytime skies or the finest moonlit nights become stormy nightmares when the cats of Ulthar are on the prowl.

## A Hissing, Seething Mass

Through the darkness provided by the suddenly darkened skies, the cats of Ulthar come together, some from their comfortable homes and others from their wild dens. The call spares no feline, and all types of cats join together to form the swarm. The victims often do not see the cats until it is too late. The only thing the victims notice is a single hiss that rises up from the mass of fur and death.

```statblock
"name": "Cats of Ulthar (CCodex)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "55"
"hit_dice": "10d10"
"modifier": !!int "4"
"stats":
  - !!int "9"
  - !!int "18"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "3"
"speed": "40 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "4"
"traits":
  - "desc": "Each creature in the swarm must succeed on a DC 12 Wisdom saving throw\
      \ or fall [prone](Mechanics/CLI/rules/conditions.md#Prone) and become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns. If a creature's saving throw is successful or the effect ends for\
      \ it, the creature is immune to the swarm's Feline Terror for the next 24 hours."
    "name": "Feline Terror"
  - "desc": "The swarm has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight, hearing, or smell."
    "name": "Keen Senses"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny cat. The swarm\
      \ can't regain hp or gain temporary hp."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 0 ft., up to two creatures\
      \ in the swarm's space. *Hit:* 14 (4d6) piercing damage, or 7 (2d6) piercing\
      \ damage if the swarm has half of its hit points or fewer."
    "name": "Bites"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/cats-of-ulthar-ccodex.png"
```
^statblock

## Environment

farmland, urban