---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Keg Golem
---
# [Keg Golem](Mechanics\CLI\bestiary\construct/keg-golem-ccodex.md)
*Source: Creature Codex p. 199*  

*An ornate keg with a stern dwarven face, arms, and legs walks about the tavern, dispensing drink to any and all.*

Dwarven runes adorn the metal of the keg golem, powering it. Some dwarves use the golems to promote their favorite drinking spots.

## Creation

Keg golems are created when dwarven rune masters acquire a keg of their strongest ale and carve magical runes into it. The creator then forges a replica of its own face onto the front of the keg. The process requires two weeks of forging and runic inscription. The runes glow with the arcane energy of the creator, ranging from faint blues to dark reds.

## Mobile Guardian

Many dwarves create these constructs to use as a mobile source of ale on long journeys. When its master is threatened, the golem helps to incapacitate the adversary with its powerful ale blast. If lost, stolen, or bartered for, a keg golem can be used for promotional purposes or for guarding a tavern.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Keg Golem (CCodex)"
"size": "Medium"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "16"
  - !!int "8"
  - !!int "7"
  - !!int "3"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't adamantine"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Understands the languages of its creator but can't speak"
"cr": "3"
"traits":
  - "desc": "A keg golem holds 20 gallons of ale. If it runs out of ale or empties\
      \ itself from ale blast, the golem's speed is reduced to 0 and it has disadvantage\
      \ on all attack rolls until it is refilled with at least 1 gallon of ale."
    "name": "Empty Keg"
  - "desc": "The keg golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The keg golem has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "If the keg golem moves at least 15 feet straight toward a creature and\
      \ then hits it with a slam attack on the same turn, that target must succeed\
      \ on a DC 13 Dexterity saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the keg\
      \ golem can make one slam attack against it as a bonus action."
    "name": "Rolling Charge"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "The keg golem shoots a 1 gallon jet of ale in a 15-foot line that is\
      \ 5 feet wide. Each creature in that line must make a DC 13 Constitution saving\
      \ throw. On a failure, a target takes 9 (2d8) poison damage and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. On a success, a target takes half the damage and isn't [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ A [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success."
    "name": "Ale Blast (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/keg-golem-ccodex.png"
```
^statblock

## Environment

mountain, underground, urban