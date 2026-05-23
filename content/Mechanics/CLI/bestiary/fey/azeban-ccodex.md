---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Azeban
---
# [Azeban](Mechanics\CLI\bestiary\fey/azeban-ccodex.md)
*Source: Creature Codex p. 44*  

*This nimble, raccoon-like humanoid has grey-brown fur, a ringed tail, and sharp claws that allow it to scamper up trees with aplomb. Dark markings like a rogue's domino mask surround a pair of glowing yellow eyes that hint at its otherworldly origins.*

## Trickster Spirits

Azebans are mischievous fey spirits who enjoy playing tricks and causing trouble for others, particularly dull-witted humans. These pranks are most often trivial—rather than dangerous or malevolent—and frequently involve the azeban tricking its victims out of food or a magical trinket or causing an argument to break out among a group of travelers. Azebans like targeting pompous, greedy, or prideful individuals best. Skillful illusionists, they sometimes use powerful magic to create an illusory inn or village to fool their marks. On other occasions, a simple cantrip to make it appear as if someone belched or broke wind in polite company is all that is needed.

## Forest Dwellers

Living primarily in the pine forests of the cold northern lands, azebans get on well with the druids and shamans of barbarian tribes, who often seek out their advice on fey matters in exchange for food and magical baubles. Azebans prefer to make their homes close to water. Good climbers, they sleep among the branches of the pines at night, coming down to the water to eat. They are fussy eaters and always wash their food before consuming it.

## Reckless Souls

Azebans are quite fearless and have a tendency to get in over their heads. The shamans of the north tell a story that the first azeban wandered through the forest until he came to a great waterfall. Being somewhat foolish, he decided to get into a shouting match with the roaring torrent. Yelling louder and louder in an attempt to defeat his foe, he stepped too close to the edge and plunged headfirst into the rushing waters. Fortunately, the azeban did not drown, and to this day his descendants are able to emit an ear-splitting yawp as a last-ditch defense against aggressors.

```statblock
"name": "Azeban (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "8"
  - !!int "18"
"speed": "40 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+1"
  - "name": "[Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Elvish, Sylvan"
"cr": "4"
"traits":
  - "desc": "The azeban's innate spellcasting ability is Charisma (spell save DC 14).\
      \ It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [dancing lights](Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [faerie fire](Mechanics/CLI/spells/faerie-fire-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n**3/day each:**\
      \ [creation](Mechanics/CLI/spells/creation-xphb.md), [major image](Mechanics/CLI/spells/major-image-xphb.md),\
      \ [mislead](Mechanics/CLI/spells/mislead-xphb.md), [seeming](Mechanics/CLI/spells/seeming-xphb.md)\n\
      \n**1/day each:** [mirage arcane](Mechanics/CLI/spells/mirage-arcane-xphb.md),\
      \ [programmed illusion](Mechanics/CLI/spells/programmed-illusion-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The azeban can take the [Dash](Mechanics/CLI/rules/actions.md#Dash),\
      \ [Disengage](Mechanics/CLI/rules/actions.md#Disengage), or [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action on each of its turns."
    "name": "Elusive"
  - "desc": "The azeban has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The azeban makes two attacks. one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Claws"
  - "desc": "The azeban emits a piercing yell in a 15-foot cone. Each creature in\
      \ the area must make a DC 14 Constitution saving throw. On a failure, a target\
      \ takes 21 (6d6) thunder damage and is [deafened](Mechanics/CLI/rules/conditions.md#Deafened)\
      \ for 1 minute. On a success, a creature takes half the damage but isn't [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \ A creature made of inorganic material such as stone, crystal, or metal has\
      \ disadvantage on this saving throw. A nonmagical object that isn't being worn\
      \ or carried also takes the damage if it's in the area."
    "name": "Ear-Splitting Yawp (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/azeban-ccodex.png"
```
^statblock

## Environment

forest