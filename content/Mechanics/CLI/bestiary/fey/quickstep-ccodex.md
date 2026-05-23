---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Quickstep
---
# [Quickstep](Mechanics\CLI\bestiary\fey/quickstep-ccodex.md)
*Source: Creature Codex p. 308*  

*With bright, striped pants and rapiers at the ready, it would seem to be impossible to miss the sight of these short, brawling fey. And yet one continually overlooks them, their voices echoing too high to hear.*

The quicksteps move through life at a hurtling pace, never pausing for more than a moment, speaking quickly and impatiently, always ready to move on while slower, duller creatures surround them with sluggish frustrations.

## Fey Fashions

The quicksteps have a fondness for bright, patterned clothing with outrageous puffed sleeves, striped hose, and the like. Bright gems and sharp tailoring always get their attention, at least for a moment.

## Cannot Resist a Challenge

Moving swiftly and largely invisibly, quicksteps are excellent messengers, scouts, and spies—but they have a love of dueling and challenges. It is extremely rare for them to turn down an invitation to single combat. They slow down their motions on these occasions, to allow their opponents to see defeat coming.

## Friends to Gold and Silver

The quicksteps are happy to visit any fey court, light or dark, and can be quite mercenary in their demeanor. They claim they require rich pay to cover the expenses of their fine clothes and the maintenance of their moonlight-enhanced weapons.

```statblock
"name": "Quickstep (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "19"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"condition_immunities": "[unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 14"
"languages": "Common, Elvish"
"cr": "5"
"traits":
  - "desc": "If the quickstep is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the quickstep instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The quickstep has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "The movements of a quickstep are so swift that it is almost [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ when in motion. If the quickstep moves at least 10 feet on its turn, attack\
      \ rolls against it have disadvantage until the start of its next turn unless\
      \ the quickstep is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained)."
    "name": "Startling Speed"
"actions":
  - "desc": "A quickstep makes two attacks with its moonlight rapier and one with\
      \ its hidden dagger."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage plus 7 (2d6) cold damage."
    "name": "Moonlight Rapier"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d4 + 4) piercing damage plus 3 (1d6) cold damage."
    "name": "Hidden Dagger"
  - "desc": "Each creature within 10 feet of the quickstep must make a DC 15 Constitution\
      \ saving throw as the quickstep whirls in a blur of cold steel. On a failure,\
      \ a target takes 9 (2d8) piercing damage and 7 (2d6) cold damage and is\
      \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed) for 1 round. On a\
      \ success, a target takes half the piercing and cold damage and isn't [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)."
    "name": "Freezing Steel (Recharge 6-6)"
"reactions":
  - "desc": "When a creature the quickstep can see targets it with an attack, the\
      \ quickstep can move to an unoccupied space within 5 feet of it without provoking\
      \ opportunity attacks. If this movement would put the quickstep out of reach\
      \ of the attacker, the attack misses."
    "name": "Quick Dodge"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/quickstep-ccodex.png"
```
^statblock

## Environment

forest, urban