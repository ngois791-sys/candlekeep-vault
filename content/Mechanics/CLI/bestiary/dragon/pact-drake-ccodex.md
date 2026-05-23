---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pact Drake
---
# [Pact Drake](Mechanics\CLI\bestiary\dragon/pact-drake-ccodex.md)
*Source: Creature Codex p. 130*  

*The thief pushed a clinking bag across the desk, but the pact drake hissed and spit, making it clear that the law could not be bent, even for a handsome price.*

The word of law in draconic form, pact drakes make their homes in large cities or other seats of authority. They often appear at major negotiations, as if drawn by an uncanny sense. Sometimes welcomed, sometimes not, the drakes nevertheless assure that all parties honor the contract.

## Witnesses for a Price

Some nations or powerful individuals retain the services of a pact drake, usually by providing historical, legal, or religious documents. Some of these creatures also demand trivial payment in gems and jewels; though trivial to the drake could mean up to 10% of the kingdom's treasure. Delicate negotiations between rival humanoid powers sometimes fall to the pact drakes "employed" by both sides.

## Crowns, Seals, and Banners

As the embodiment of law, a pact drake must enforce all deals it brokers. While its 4-foot long body and 1-foot long tail make a pact drake seem insignificant, it carries an unmistakable presence in the halls of power. The creatures sometimes take on affectations to further their image, usually the trappings of authority recognized by the society around them, such as particular flags, rings, seals, or umbrellas carried by servants.

```statblock
"name": "Pact Drake (CCodex)"
"size": "Small"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "8d6 + 24"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "17"
  - !!int "17"
  - !!int "18"
  - !!int "20"
"speed": "40 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "psychic, radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 16"
"languages": ""
"cr": "1"
"traits":
  - "desc": "Pact's innate spellcasting ability is Charisma (spell save DC 15). It\
      \ can innately cast the following spells, requiring only somantic components:\n\
      \n**At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md)\n\n\
      **3/day each:** [arcane eye](Mechanics/CLI/spells/arcane-eye-xphb.md), [clairvoyance](Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ [scrying](Mechanics/CLI/spells/scrying-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Creatures that make a pact or agree to terms while the drake witnesses\
      \ the agreement are bound by the drake's magic. They have disadvantage on saving\
      \ throws against scrying by the drake (simply making a successful save against\
      \ the drake's scrying usually is enough to arouse its suspicion), and they become\
      \ potential targets for the drake's Punish Transgressor action."
    "name": "Binding Witness"
  - "desc": "The drake knows if it hears a lie."
    "name": "Sense Falsehood"
"actions":
  - "desc": "The pact drake makes two attacks. one with its bite and one with its\
      \ claw."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) piercing damage."
    "name": "Bite"
  - "desc": "The pact drake breathes a calming haze in a 30-foot cone. Creatures in\
      \ the cone must make a DC 15 Charisma saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ a creature also can't attack up to five creatures of the pact drake's choice.\
      \ A [charmed](Mechanics/CLI/rules/conditions.md#Charmed) creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ with a success."
    "name": "Enforced Diplomacy (Recharge 5-6)"
  - "desc": "The drake targets a single creature within 60 feet that broke the terms\
      \ of a pact witnessed by the drake. The creature must succeed on a DC 15 Charisma\
      \ saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
      \ and [stunned](Mechanics/CLI/rules/conditions.md#Stunned) for 1d6 minutes.\
      \ The conditions can be ended early only with a [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\
      \ (DC 15) spell or similar magic. When these conditions end, the affected creature\
      \ has disadvantage on saving throws until it finishes a long rest."
    "name": "Punish Transgressor"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/pact-drake-ccodex.png"
```
^statblock

## Environment

urban