---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wind's Harp
---
# [Wind's Harp](Mechanics\CLI\bestiary\fiend/winds-harp-ccodex.md)
*Source: Creature Codex p. 105*  

*Among the more bizarre products of diabolic fleshwarping, the wind's harp is a living object. Though a few might mistake it for an ordinary instrument, once a wind's harp devil squirms and plucks forth a jarring note, its bizarre, living shape is impossible to mistake for anything else.*

Loud, harsh, and prone to unleashing their racket at every possible opportunity, wind's harp devils serve the courts of Hell as background music and as instruments of sonic and psychic torture. [Devas](Mechanics/CLI/bestiary/celestial/deva-xmm.md) and [kinnara](Mechanics/CLI/bestiary/celestial/kinnara-ccodex.md) are particular targets of wind's harp devils.

## Arcane Counters

Intelligent devils often bring along a wind's harp devil to counter the spells of a wizard, bard, sorcerer, or other spellcaster. Devils in this position leave the wind's harp devil in the back ranks, protected by a few minor underlings.

## Friend to Winds

Wind's harp devils are on good terms with air elementals, wind demons, and similar creatures of air and song. They often work together against foes.

## Rich Materials of Disguise

The body of a wind's harp devil often resembles fine rosewood or mahogany. To enhance this appearance, they often glue mother-of-pearl or silver ornaments on themselves to appear more like an inanimate object. Once their red eyes open and their strings and mouths utter their screaming wails, this illusion cannot be sustained.

```statblock
"name": "Wind's Harp (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "63"
"hit_dice": "14d8"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "19"
"speed": "30 ft., fly 10 ft."
"saves":
  - "wisdom": !!int "2"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Infernal"
"cr": "4"
"traits":
  - "desc": "While the wind's harp devil remains motionless, it is indistinguishable\
      \ from an ordinary object."
    "name": "False Appearance"
  - "desc": "The wind's harp devil has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The wind's harp devil has advantage on attack rolls against a creature\
      \ if at least one of its allies is an air elemental, wind demon, or similar\
      \ creature of air, is within 20 feet of the target, and isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Strong Winds"
"actions":
  - "desc": "The wind's harp devil makes two infernal noise attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 60 ft., one target. *Hit:*\
      \ 9 (2d8) psychic damage plus 3 (1d6) thunder damage."
    "name": "Infernal Noise"
  - "desc": "The wind's harp devil creates an infernal cacophony. Each creature within\
      \ 30 feet of it must make a DC 14 Dexterity saving throw, taking 13 (3d8)\
      \ psychic damage and 7 (2d6) thunder damage on a failed save, or half as much\
      \ damage on a successful one. Devils are immune to the hellish chorus."
    "name": "Hellish Chorus (Recharge 5-6)"
"reactions":
  - "desc": "When a spell is cast within 60 feet of it, the wind's harp devil plays\
      \ a single, infernal note, interrupting the spell. This reaction works like\
      \ the counterspell spell, except it only works on spells of 3rd level or lower."
    "name": "Diabolical Countersong"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/winds-harp-ccodex.png"
```
^statblock

## Environment

any