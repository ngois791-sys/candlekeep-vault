---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bathhouse Drake
---
# [Bathhouse Drake](Mechanics\CLI\bestiary\dragon/bathhouse-drake-ccodex.md)
*Source: Creature Codex p. 126*  

*A drake the size of a large mastiff stares at the gathered bathers with a firm gaze then lets out a breath of steam, moisturizing their skin.*

Creatures of unknown origin, bathhouse drakes are a welcome sight to those who desire a relaxing sabbatical for the right price.

## Unknown Origin

No one is certain how the bathhouse drakes came to be. Some theorize they were bred from other drakes to get a more tolerant and social temperament, while others speculate they might have migrated from some very distant jungle or rainforest. Another possible theory suggests they originated somewhere within the inner planes, where fire meets water. The drakes themselves, if they know, do not speak of it.

## Lords of Luxury

Bathhouse drakes are curiosities of the world, serving as often as being served. Their lairs are not the dangerous caves of many true dragons, but instead the wondrous marble bathhouses of their namesake. They invest treasure from their hoards and hire artisans to create the most artistic and functional bathhouses, drawing in customers and appeasing their own egos. Some truly ambitious bathhouse drakes invest in constructing additions such as inns and taverns into their "lairs," and some even hire masseurs and chefs to serve guests and, of course, the drakes themselves.

## Firm Yet Fair

While they possess the arrogance of their more ferocious draconic cousins, bathhouse drakes treat their subordinates (typically [kobolds](Mechanics/CLI/bestiary/dragon/kobold-warrior-xmm.md)) with some respect, rarely abusing and sometimes rewarding them. Though the prices of their services are high, they personally insure that they give only the best, for they understand such quality customer care is a reflection of themselves.

```statblock
"name": "Bathhouse Drake (CCodex)"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "18"
  - !!int "15"
"speed": "30 ft., fly 60 ft., swim 60 ft."
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+6"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 10 ft., passive Perception 14"
"languages": "Common, Draconic, Primordial"
"cr": "3"
"traits":
  - "desc": "The bathhouse drake's innate spellcasting ability is Wisdom (spell save\
      \ DC 14, +6 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [create or destroy\
      \ water](Mechanics/CLI/spells/create-or-destroy-water-xphb.md), [misty step](Mechanics/CLI/spells/misty-step-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n**3/day\
      \ each:** [control water](Mechanics/CLI/spells/control-water-xphb.md), [fog\
      \ cloud](Mechanics/CLI/spells/fog-cloud-xphb.md), [gaseous form](Mechanics/CLI/spells/gaseous-form-xphb.md),\
      \ [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The bathhouse drake can breathe air and water."
    "name": "Amphibious"
  - "desc": "The bathhouse drake has advantage on ability checks and saving throws\
      \ made to escape a grapple."
    "name": "Soapy"
"actions":
  - "desc": "The bathhouse drake makes three melee attacks. one with its bite and\
      \ two with its claws. Alternatively, it can use Scalding Jet twice."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 20/60 ft., one target. *Hit:*\
      \ 7 (2d6) fire damage."
    "name": "Scalding Jet"
  - "desc": "The bathhouse drake creates a burst of hot steam. Each creature within\
      \ 20 feet of it must make a DC 14 Constitution saving throw. On a failure, a\
      \ target takes 14 (4d6) fire damage and is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ for 1 minute. On a success, a target takes half the damage but isn't [blinded](Mechanics/CLI/rules/conditions.md#Blinded).\
      \ A [blinded](Mechanics/CLI/rules/conditions.md#Blinded) creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success."
    "name": "Steam Burst (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/bathhouse-drake-ccodex.png"
```
^statblock

## Environment

farmland, urban