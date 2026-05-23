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
- Inkling
---
# [Inkling](Mechanics\CLI\bestiary\construct/inkling-ccodex.md)
*Source: Creature Codex p. 227*  

*A small, sentient pool of magical ink, shimmering in the light, flows along the bookshelf.*

An inkling forms when dormant magic sparks to life in a long-unused spellbook. It can take on any form it wishes, although it rarely exceeds a height and width of six inches. It usually chooses the form of a puddle and flows in and around books. It can seep through even the tiniest cracks in its surroundings, making its search for hidden knowledge an easier task.

## Wizards' Bane

Inklings possess a wizard's natural thirst for knowledge. Arcane casters must be careful, for inklings are disastrous to find in a wizard's library, craving knowledge and stealing the ink and the knowledge of spells for themselves. Inklings are primarily solitary entities. However, if enough spellbooks or scrolls are stored in one location, a horde of inklings can sometimes form.

## Clever Pets

Some inklings have been caught by the wizards they tried to plague. Those not destroyed are kept by such wizards and can be trained to search out a rival's books and bring back knowledge. While not forced by any binding or magical curse, the inklings still follow those they consider their masters, as they crave the acquisition of the arcane their masters provide. As long as the "master" keeps the inkling well-supplied with scrolls and other magical writings, it remains a loyal companion.

## Innate Casters

Inklings are naturally in tune with the arcane elements of the world and know the inner workings of spells. Not only can they cast some of the basic spells of wizards, they can also sometimes alter the nature of a spell already cast. This is quite helpful if they are ever discovered in a wizard's abode and need to make an escape.

## Construct Nature

The inkling doesn't require air, food, drink, or sleep.

```statblock
"name": "Inkling (CCodex)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "10"
"hit_dice": "4d4"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "10"
"speed": "20 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 11"
"languages": "Understands the languages of its creator but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The inkling's innate spellcasting ability is Intelligence (spell save\
      \ DC 12, +4 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring only somatic components:\n\n**At will:** [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md), [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n**1/day\
      \ each:** [color spray](Mechanics/CLI/spells/color-spray-xphb.md), [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The inkling can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "If an inkling spends 24 hours with a spellbook or a spell scroll, it\
      \ can learn the magic of one 2ndlevel or lower spell, erasing and absorbing\
      \ all the ink and magic used to inscribe the spell. The inkling can then cast\
      \ the spell once per day."
    "name": "A Thirst for Knowledge"
  - "desc": "The inkling has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage."
    "name": "Lash"
"reactions":
  - "desc": "If a spell attack hits the inkling, it can force the attacker to make\
      \ a DC 12 Intelligence saving throw. If the attacker fails the saving throw,\
      \ the spell is redirected to hit another creature of the inkling's choice within\
      \ 30 feet."
    "name": "Redirect Spell"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/inkling-ccodex.png"
```
^statblock

## Environment

urban