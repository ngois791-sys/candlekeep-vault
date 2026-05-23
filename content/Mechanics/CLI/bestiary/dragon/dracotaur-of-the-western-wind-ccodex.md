---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dracotaur of The Western Wind
---
# [Dracotaur of The Western Wind](Mechanics\CLI\bestiary\dragon/dracotaur-of-the-western-wind-ccodex.md)
*Source: Creature Codex p. 110*  

*An enraged mass of malcontents storms across the tavern, overturning tables, busting bottles, and browbeating innocent patrons.*

Countless stories surround the cloudy origins of the dracotaur, though most of them involve centaurs. Dragonborn believe that a dragon captured centaurs during a skirmish on the plains and drowned them in its blood centuries ago. When their bodies were fished out, they had been transformed into perfect, draconic warriors and a new, distinct species.

```statblock
"name": "Dracotaur of The Western Wind (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "3"
"stats":
  - !!int "21"
  - !!int "17"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "50 ft., swim 30 ft."
"saves":
  - "constitution": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish, Draconic"
"cr": "6"
"traits":
  - "desc": "If the dracotaur moves at least 30 feet straight toward a target and\
      \ then hits it with a bite attack on the same turn, the target takes an extra\
      \ 14 (4d6) piercing damage."
    "name": "Charge"
"actions":
  - "desc": "The dracotaur makes two attacks. one with its bite and one with its claws\
      \ or two with its longbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage plus 7 (2d6) lightning damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claws"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 150/600 ft., one target. *Hit:*\
      \ 12 (2d8 + 3) piercing damage."
    "name": "Longbow"
  - "desc": "The dracotaur shoots an arrow at a point it can see within 150 feet where\
      \ it explodes into a 20-foot-radius sphere of poison. Each creature in that\
      \ area must make a DC 15 Dexterity saving throw, taking 28 (8d6) poison damage\
      \ on a failed save, or half as damage much on a successful one."
    "name": "Poison Arrow (Recharges after a Short or Long Rest)"
  - "desc": "The dracotaur exhales poison in a 30-foot cone. Each creature in that\
      \ cone must make a DC 15 Dexterity saving throw, taking 28 (8d6) poison damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Thunder Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/dracotaur-of-the-eastern-wind-ccodex.png"
```
^statblock

## Environment

grassland