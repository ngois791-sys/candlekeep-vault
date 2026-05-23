---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gargoctopus
---
# [Gargoctopus](Mechanics\CLI\bestiary\monstrosity/gargoctopus-ccodex.md)
*Source: Creature Codex p. 167*  

*A giant, blue octopus sits quietly in the waterlogged ruins of a library, poring over the remnants of ancient clay tablets.*

## Scholarly Wanderers

Belying its fearsome appearance, a gargoctopus is an insatiably curious scholar fascinated by the remnants of vanished cultures. It wanders the oceans exploring drowned cities and sunken ships, and occasionally it raises its imposing bulk from the water to investigate relics and ruins on land.

## Sharing Lore

It is in such surroundings that a gargoctopus sometimes encounters terrestrial adventurers. If it views them as trespassers, rivals, or threats, it may react aggressively or even violently, but a gargoctopus treated with careful respect can be a source of great lore. When one gargoctopus encounters another in its travels, the two spend days or weeks exchanging information, ensuring the survival of the knowledge they have each acquired.

## Tentacle Whirlwind

While preferring a life of the mind, an angered gargoctopus becomes a whirlwind of wet, crushing tentacles. Its ability to match the coloration of its flesh to its surroundings, and to adhere to walls and ceilings, makes it an elusive opponent. It can emit a cloud of ink that spreads in air or water, often using it to escape a dangerous situation. A gargoctopus is frequently accompanied by giant octopi serving as loyal bodyguards.

```statblock
"name": "Gargoctopus (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d10 + 16"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "12"
  - !!int "19"
  - !!int "16"
  - !!int "14"
"speed": "40 ft., climb 20 ft., swim 40 ft."
"skillsaves":
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The gargoctopus can breathe air and water."
    "name": "Amphibious"
  - "desc": "The gargoctopus has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide."
    "name": "Shifting Camouflage"
  - "desc": "The gargoctopus can climb on difficult surfaces, including upside down\
      \ on ceilings, without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The gargoctopus makes four tentacle attacks or one bite attack and three\
      \ tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (3d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 15 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) bludgeoning damage. If the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 15).\
      \ Until the grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ the gargoctopus can automatically hit the target with its tentacle, and it\
      \ can't use the same tentacle on another target. The gargoctopus can grapple\
      \ up to four creatures at one time."
    "name": "Tentacle"
  - "desc": "One Medium or smaller creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the gargoctopus is thrown up to 20 feet in a random direction and is knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). If the target strikes a\
      \ solid surface, the target takes 7 (2d6) bludgeoning damage. If the target\
      \ is thrown at another creature, that creature must succeed on a DC 12 Dexterity\
      \ saving throw or take the same damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Fling"
  - "desc": "The gargoctopus slams the creatures [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by it into a solid surface. Each [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ creature must make a DC 15 Constitution saving throw. On a failure, a target\
      \ takes 10 (3d6) bludgeoning damage and is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of the gargoctopus' next turn. On a success, a target takes\
      \ half the damage and isn't [stunned](Mechanics/CLI/rules/conditions.md#Stunned)."
    "name": "Tentacle Slam (Recharge 5-6)"
  - "desc": "A 20-foot-radius cloud of darkness extends around the gargoctopus. The\
      \ area is heavily obscured until the start of the gargoctopus' next turn. If\
      \ underwater, the gargoctopus can use the [Dash](Mechanics/CLI/rules/actions.md#Dash)\
      \ action as a bonus action after releasing the cloud."
    "name": "Ink Cloud (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/gargoctopus-ccodex.png"
```
^statblock

## Environment

underwater