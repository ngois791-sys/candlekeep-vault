---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Paper Golem
---
# [Paper Golem](Mechanics\CLI\bestiary\construct/paper-golem-ccodex.md)
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
"name": "Paper Golem (CCodex)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
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
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't adamantine."
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 8"
"languages": "Understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
  - "desc": "While the paper golem remains motionless, it is indistinguishable from\
      \ an ordinary sheet of paper."
    "name": "False Appearance"
  - "desc": "The paper golem is immune to any spell or effect that would alter its\
      \ form."
    "name": "Immutable Form"
  - "desc": "As a bonus action, the paper golem applies ink to itself. The next time\
      \ it hits a creature with a paper cut attack, the creature must make a DC 13\
      \ Constitution saving throw, taking 5 (2d4) poison damage on a failed save,\
      \ or half as much damage on a successful one."
    "name": "Ink Blot (Recharge 4-6)"
  - "desc": "The paper golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Paper Cut"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/paper-golem-ccodex.png"
```
^statblock

## Environment

urban