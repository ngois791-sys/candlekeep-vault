---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Paper Golem Swarm
---
# [Paper Golem Swarm](Mechanics\CLI\bestiary\construct/paper-golem-swarm-ccodex.md)
*Source: Creature Codex p. 204*  

*A seemingly ordinary piece of paper leaps to life and lashes out with its sharp edges.*

## Reams of Danger

Though a single paper golem can protect the spellbooks of paranoid spellcasters, it is far more formidable when in the form of a swarm.

## Protector of Secrets

Once the paper golem has been created, it patiently lies in wait, dormant until an unsuspecting creature happens upon it.

## Poisoned Manuscripts

The ink of the paper golem is imbued with magic, creating a toxin to use against its victims.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Paper Golem Swarm (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "3"
  - !!int "7"
  - !!int "3"
"speed": "20 ft., fly 30 ft."
"damage_vulnerabilities": "fire"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons that aren't adamantine."
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 8"
"languages": "Understands the languages of its creator but can't speak"
"cr": "3"
"traits":
  - "desc": "As the paper golem."
    "name": "False Appearance"
  - "desc": "As the paper golem."
    "name": "Immutable Form"
  - "desc": "As the paper golem, except it can also apply to the swarm's whirlwind."
    "name": "Ink Blot (Recharge 4-6)"
  - "desc": "The paper golem's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The swarm can occupy another creature's space and vice versa, and it\
      \ can move through any opening large enough for a piece of paper. The swarm\
      \ can't regain hp or gain temporary hp."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 0 ft., one creature in the\
      \ swarm's space. *Hit:* 14 (4d6) slashing damage, or 7 (2d6) slashing damage\
      \ if the swarm has half of its hp or fewer."
    "name": "Paper Cut"
  - "desc": "The air is momentarily filled with paper golems. Each creature within\
      \ 5 feet of the swarm must make a DC 13 Dexterity saving throw, taking 7 (2d6)\
      \ slashing damage on a failed save, or half as much damage on a successful one."
    "name": "Whirlwind (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/paper-golem-ccodex.png"
```
^statblock

## Environment

urban