---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spider Drake
---
# [Spider Drake](Mechanics\CLI\bestiary\dragon/spider-drake-ccodex.md)
*Source: Creature Codex p. 133*  

*Hidden in the stalactites near the ceiling of a web‑filled cave, a skulking half dragon, half arachnid waits to ensnare its prey.*

## Savage Hunters

Spider drakes are more primal than their true dragon cousins, following an instinctual desire to hunt and trap prey.

## Beautiful Treasures

Like its kin, the spider drake collects a hoard. Instead of displaying the hoard openly, the spider drake wraps its prizes in silk, encasing the valuables and the body of the hunted creature together. Opening the treasures of the lair often reveals the spider drake's most recent kills.

```statblock
"name": "Spider Drake (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "17"
  - !!int "7"
  - !!int "16"
  - !!int "15"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "7"
  - "wisdom": !!int "7"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "9"
"traits":
  - "desc": "When the spider drake is hit with a melee attack, the attacker's weapon\
      \ becomes stuck to the web fluid secreted from its scales. If the attacker didn't\
      \ use a weapon, it must succeed on a DC 16 Strength saving throw or become [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ in the webbing. As an action, a creature can make a DC 16 Strength check,\
      \ escaping or freeing its weapon from the secretions on a success."
    "name": "Sticky Secretions"
"actions":
  - "desc": "The spider drake makes three attacks. one with its bite and two with\
      \ its claws. It can use Web in place of its bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "The drake exhales poisonous gas in a 30-foot cone. Each creature in that\
      \ area must make a DC 15 Constitution saving throw. On a failure, a creature\
      \ takes 42 (12d6) poison damage and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ On a success, a creature takes half the damage and isn't [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ A creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Poison Breath (Recharge 5-6)"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 60/120 ft., one Large or smaller\
      \ creature. *Hit:* The creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by webbing. As an action, the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ creature can make a DC 16 Strength check, escaping from the webbing on a success.\
      \ The effect also ends if the webbing is destroyed. The webbing has AC 10, 5\
      \ hit points, vulnerability to fire damage, and immunity to bludgeoning, poison,\
      \ and psychic damage."
    "name": "Web (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/spider-drake-ccodex.png"
```
^statblock

## Environment

underground