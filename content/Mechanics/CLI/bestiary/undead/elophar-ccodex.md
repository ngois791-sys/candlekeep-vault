---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elophar
---
# [Elophar](Mechanics\CLI\bestiary\undead/elophar-ccodex.md)
*Source: Creature Codex p. 149*  

*The hulking abomination's necrotic skin is covered in glowing runes, and acid sloshes out of blackened punctures in its distended belly with every shambling step it takes. It has no eyes, but its head is covered with eye tattoos that seem to be looking everywhere at once.*

## Born of Failed Rituals

No force is more dangerous to an ambitious ogre mage than its own magic. Ogres are superstitious creatures, and their magi keep them in line through fear of arcane power. The most effective way for an ogre mage to remind its dullard brethren of their arcane might is by publically and dramatically communing with the tribe's ancestral spirits. An elophar is created when an ogre mage bungles a ritual to call forth the spirits of the dead. During this failed ritual, its conductor is instantly struck dead and all the summoned spirits run rampant, trying to possess their summoner's lifeless corpse all at once.

## Controlled by Many Spirits

An elophar is not an unintelligent undead creature; it possesses the combined memories of all the spirits vying for control of its body. Because of the ceaseless struggle between the possessing spirits, the elophar rarely follows one course of action for long, erratically changing tactics from instant to instant.

## Undead Nature

The elophar doesn't require air, food, drink, or sleep.

```statblock
"name": "Elophar (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "8"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"modifier": !!int "-2"
"stats":
  - !!int "19"
  - !!int "6"
  - !!int "20"
  - !!int "16"
  - !!int "3"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 6"
"languages": "Common, Giant, Infernal"
"cr": "4"
"traits":
  - "desc": "The elophar's innate spellcasting ability is Intelligence (spell save\
      \ DC 13, +5 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md),\
      \ [chill touch](Mechanics/CLI/spells/chill-touch-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md)\n\
      \n**3/day each:** [grease](Mechanics/CLI/spells/grease-xphb.md), [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\
      \n**1/day each:** [enlarge/reduce](Mechanics/CLI/spells/enlarge-reduce-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "When the elophar takes damage other than acid damage, corrosive ectoplasm\
      \ bursts from its distended stomach. The elophar takes 7 (2d6) acid damage\
      \ and all creatures within 10 feet of it must make a DC 13 Dexterity saving\
      \ throw, taking 7 (2d6) acid damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Ectoplasmic Spray"
  - "desc": "The chaos of combat causes an elophar to swap between personalities at\
      \ the start of each of its turns. To determine which spirit is in control, roll\
      \ on the table below (it is possible for one spirit to remain in control for\
      \ multiple rounds if it is rolled multiple rounds in a row). See Spirit Control\
      \ Table."
    "name": "Possessed By Ancestors"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/elophar-ccodex.png"
```
^statblock

## Environment

any