---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bookkeeper
---
# [Bookkeeper](Mechanics\CLI\bestiary\construct/bookkeeper-ccodex.md)
*Source: Creature Codex p. 55*  

*As the tome is opened, a blob of ink splashes toward the reader's eyes, followed by mischievous giggles.*

For those wary of prying eyes, a tiny construct made of ink can keep private journals, records of magical runes, or discoveries safe.

## Tiny Guards

Created by wizards fearful of having their research stolen, bookkeepers are ink constructs bound to a designated book. They provide protection not just from unwanted intrusion but also from physical damage. The bookkeeper can move on its own when needed, but it spends most of its time hiding within the book it is assigned to guard.

## Alarm

As long as the creator is on the same plane as the book, it is mentally alerted if the book is opened by anyone other than it. The book also shrieks if handled by anyone other than the creator. The creator does not set off any wards or alarms when opening its own book.

## Construct Nature

A bookkeeper doesn't require air, food, drink, or sleep.

```statblock
"name": "Bookkeeper (CCodex)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d4"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "6"
  - !!int "8"
  - !!int "3"
"speed": "20 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+1"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "cold, fire, poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 11"
"languages": "Understands the languages of its creator but can't speak"
"cr": "1/8"
"traits":
  - "desc": "As a bonus action while within 30 feet of its book, the bookkeeper can\
      \ hop inside its book. While inside its book, the bookkeeper has a flying speed\
      \ of 30 feet and is indistinguishable from ink on a page."
    "name": "Between the Lines"
  - "desc": "A bookkeeper makes all attacks, saving throws, and skill checks with\
      \ advantage when its creator is within 60 feet of its book. The bookkeeper's\
      \ hp maximum is reduced by 1 for every minute it is further than 60 feet from\
      \ its book. When its hp maximum reaches 0, it dies. If its creator dies, the\
      \ bookkeeper can be convinced to pass ownership of the book to a new creature\
      \ if the creature succeeds on a DC 13 Charisma check. The new owner becomes\
      \ the bookkeeper's new \"creator\" and inherits the bookkeeper along with the\
      \ book."
    "name": "Book Bound"
  - "desc": "When the bookkeeper dies, the book it is bound to is also destroyed."
    "name": "Disintegrate"
"actions":
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 20 ft., one target. *Hit:*\
      \ 3 (1d6) poison damage and the target must succeed on a DC 13 Dexterity saving\
      \ throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) until the\
      \ end of its next turn."
    "name": "Ink Splash"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1\
      \ piercing damage plus 1 poison damage."
    "name": "Bite"
  - "desc": "While inside its book, the bookkeeper magically turns its book [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks, or until its concentration ends (as if concentrating on\
      \ a spell). The bookkeeper is also [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ while inside the [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ book"
    "name": "Elusive Pages"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/bookkeeper-ccodex.png"
```
^statblock

## Environment

urban