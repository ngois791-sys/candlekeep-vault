---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lotus Golem
---
# [Lotus Golem](Mechanics\CLI\bestiary\construct/lotus-golem-ccodex.md)
*Source: Creature Codex p. 202*  

*Drawing power from the river's current, the creature's core glows brighter, and its flowery surface blossoms and fades in cycles like a dozen springtimes.*

## Magic Battery

Lotus golems absorb magical power from their surroundings, which spellcasters can utilize.

## Flowering Strength

A lotus golem's body always has several blossoms, typically blooms of water plants. These are linked to its mystic strength: a lotus golem with only a few blossoms is far less powerful than one covered in them.

## Seasonal Creations

The lotus golem is made of woven water plants and flowers. To make a lotus golem, the creator must use expert weavers with fresh materials and complete the ritual between sunset and sunrise along a river bank. The golems are much less durable than their clay or stone counterparts and usually last only a few seasons. When they fall apart, their reeds and papyrus elements are used to make spell scrolls.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Lotus Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "82"
"hit_dice": "11d10 + 22"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "19"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "4"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "bludgeoning; piercing; slashing from nonmagical weapons that\
  \ aren't adamantine."
"damage_immunities": "cold, fire, poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 19"
"languages": "Understands the languages of its creator but can't speak"
"cr": "9"
"traits":
  - "desc": "The lotus golem absorbs energy from nearby spellcasting. Most lotus golems\
      \ hold 1 charge point at any given time but can hold up to 4. As a bonus action\
      \ while casting a spell within 5 feet of the lotus golem, the golem's controller\
      \ can expend the golem's charge points to cast the spell without expending a\
      \ spell slot. To do so, the controller must expend a number of charge points\
      \ equal to the level of the spell."
    "name": "Arcane Pool"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The golem can move across the surface of water as if it were harmless,\
      \ solid ground. This trait works like the water walk spell."
    "name": "Water Walker"
"actions":
  - "desc": "The lotus golem makes two arcane water attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d12 + 2) bludgeoning damage plus 7 (2d6) force damage."
    "name": "Arcane Water"
"reactions":
  - "desc": "When a spell is cast within 30 feet of it, the golem absorbs some of\
      \ the spell's potency. If it is a spell that forces a saving throw, the DC to\
      \ succeed drops by 2. If it is a spell with an attack roll, the attack roll\
      \ has disadvantage. The golem regains 20 hp and gains 1 charge point in its\
      \ Arcane Pool."
    "name": "Arcane Absorption"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/lotus-golem-ccodex.png"
```
^statblock

## Environment

any