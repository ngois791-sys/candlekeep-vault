---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bone Golem
---
# [Bone Golem](Mechanics\CLI\bestiary\construct/bone-golem-ccodex.md)
*Source: Creature Codex p. 195*  

*The creature moves with a strange grace despite the motley collection of bones that comprise its form.*

## A Lesser Golem

Upon seeing the gangly form of a bone golem, even experienced adventurers assume the terrible creature is the work of a necromancer. In reality, however, the creature is a construct, a golem in the same vein as a flesh or clay golem.

## Ghoul Servant

The art of crafting a golem from the bones of the fallen has been mastered by advanced clans or even nations of ghouls. After noticing the fragility of their animated skeletons, they undertook the study of construct magic to create the hardier and more resilient bone golems. These constructs are often sent on patrols with ghoul rangers to provide martial support.

## Construct in Undead Clothing

The ghoul arcanists who create bone golems do their best to disguise their creations as typical skeletons, hoping to fool wielders of divine might into wasting resources often used against real undead. In battle, a DC 20 Intelligence (Arcana) check is needed to determine the creature is a construct and not an undead.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Bone Golem (CCodex)"
"size": "Medium"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "17"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical Weapons that\
  \ aren't adamantine"
"damage_immunities": "necrotic, poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "7"
"traits":
  - "desc": "Whenever the bone golem starts its turn with 30 hp or fewer, roll a d6.\
      \ On a 6, the golem goes berserk. On each of its turns while berserk, the golem\
      \ attacks the nearest creature it can see. If no creature is near enough to\
      \ move to and attack, the golem attacks an object, usually an object smaller\
      \ than itself. Once the golem goes berserk, it continues to attack until it\
      \ is destroyed or it regains all its hp.\n\nThe golem's creator, if within 60\
      \ feet of the berserk golem, can calm it by speaking firmly and persuasively.\
      \ The golem must be able to hear its creator, who must take an action to make\
      \ a DC 15 Charisma ([Persuasion](Mechanics/CLI/rules/skills.md#Persuasion))\
      \ check. If the check succeeds, the golem ceases being berserk. If it takes\
      \ damage while still at 30 hp or fewer, the golem might go berserk again."
    "name": "Berserk"
  - "desc": "While the bone golem remains motionless, it is indistinguishable from\
      \ a pile of bones or ordinary, inanimate skeleton."
    "name": "False Appearance"
  - "desc": "The bone golem is immune to any spell or effect that would alter its\
      \ form."
    "name": "Immutable Form"
  - "desc": "The bone golem has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The bone golem's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Whenever the bone golem is subjected to necrotic damage, it takes no\
      \ damage and instead regains a number of hp equal to the necrotic damage dealt."
    "name": "Necrotic Absorption"
"actions":
  - "desc": "The bone golem makes two attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage plus 7 (2d6) necrotic damage."
    "name": "Claw"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 60/240 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage plus 7 (2d6) necrotic damage."
    "name": "Bone Shard"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/bone-golem-ccodex.png"
```
^statblock

## Environment

any