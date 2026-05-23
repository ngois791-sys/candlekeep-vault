---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Goliath Longlegs
---
# [Goliath Longlegs](Mechanics\CLI\bestiary\monstrosity/goliath-longlegs-ccodex.md)
*Source: Creature Codex p. 206*  

*A spider the size of a large house, with legs that could pass for trees, moves through the forest.*

Solitary hunters, goliath longlegs sit motionless for long periods of time, waiting for unsuspecting prey to walk beneath them.

## Stealthy Ambush Predators

The legs of a goliath longlegs mimic the size and texture of the trees of the forest in which it resides. It uses this natural camouflage to its advantage, hiding its body in the crowns of the nearby trees.

## Venomous Weapons

The goliath longlegs' legs are vulnerable to attack, so it prefers to poison its prey with a paralyzing nerve agent.

## Unknown Origin

Not much is known about the origin of this species. They are few in number, and, when one is discovered, word rarely gets back to civilization.

```statblock
"name": "Goliath Longlegs (CCodex)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "162"
"hit_dice": "12d20 + 36"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "4"
  - !!int "13"
  - !!int "3"
"speed": "20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "7"
"traits":
  - "desc": "A creature at least one size smaller than the goliath longlegs can travel\
      \ through and finish its turn in the goliath longlegs' space."
    "name": "Expansive"
  - "desc": "While a goliath longlegs remains motionless, it is indistinguishable\
      \ from other plants or trees."
    "name": "False Appearance"
  - "desc": "The goliath longlegs has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in forested terrain."
    "name": "Forest Camouflage"
  - "desc": "The goliath longlegs has eight legs. While it has more than four legs,\
      \ the goliath longlegs is immune to being knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). Whenever the\
      \ goliath longlegs takes 20 or more damage in a single turn, one of its legs\
      \ is destroyed. Each time a leg is destroyed after the fourth one, the goliath\
      \ longlegs must succeed on a DC 13 Constitution saving throw or fall [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ Any creature in the goliath longlegs' space or within 5 feet of it when it\
      \ falls [prone](Mechanics/CLI/rules/conditions.md#Prone) must make a DC 15 Dexterity\
      \ saving throw, taking 21 (6d6) bludgeoning damage on a failed save, or half\
      \ as much damage on a successful one."
    "name": "Vulnerable Legs"
"actions":
  - "desc": "The goliath longlegs makes one bite attack and then as many leg attacks\
      \ as it has legs. It can use its Reel in place of two leg attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (1d8 + 4) piercing damage and the target must make a DC 15 Constitution\
      \ saving throw, taking 9 (2d8) poison damage on a failed save, or half as\
      \ much damage on a successful one. If the poison damage reduces the target to\
      \ 0 hp, the target is stable but [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hp, and is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 15 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) piercing damage."
    "name": "Leg"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/60 ft., one Large or smaller\
      \ creature. *Hit:* The creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by webbing and must succeed on a DC 15 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. The creature can repeat the saving throw at the end of each\
      \ of its turns, ending the [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ effect on itself on a success. As an action, the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ creature can make a DC 15 Strength check, escaping from the webbing on a success.\
      \ The webbing can also be attacked and destroyed (AC 12; hp 15; vulnerability\
      \ to fire damage; immunity to bludgeoning, poison, and psychic damage)."
    "name": "Paralytic Web (Recharge 5-6)"
  - "desc": "The goliath longlegs pulls one creature caught in its web up to 30 feet\
      \ straight toward it. If the target is within 10 feet of the goliath longlegs,\
      \ the goliath longlegs can make one bite attack as a bonus action."
    "name": "Reel"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/goliath-longlegs-ccodex.png"
```
^statblock

## Environment

forest