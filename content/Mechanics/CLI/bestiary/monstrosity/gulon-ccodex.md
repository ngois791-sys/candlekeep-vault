---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gulon
---
# [Gulon](Mechanics\CLI\bestiary\monstrosity/gulon-ccodex.md)
*Source: Creature Codex p. 212*  

*This creature has the face and claws of a great cat but a body covered in the shaggy reddish fur of a fox. It moves like a canine, its insatiable mouth dripping with drool.*

Gulons are forest-dwelling predators addicted to meat. They are known to attack any flesh-based creature they come across, even those much larger than themselves.

## Insatiable Gluttons

Gulons take immense pleasure in eating. One of these creatures gorges itself on a meal until it can consume no more, then finds two trees very close together. The monster then forces itself through the space between the trees to discharge the food from its body through violence. Once this disgusting process is complete, the gulon continues feeding. Travelers who find large piles of waste between two trees should turn back-for they are in gulon territory.

## Adventurous Eaters

When a gulon picks up the scent of a creature it has never tasted before, the monster hunts that quarry to the ends of the earth. Gulons have an innate drive to consume as many different kinds of meat as possible. If a gulon is drawn out of its territory following a potential meal, it may wander into a civilized area full of new meaty delights, and it may not leave that new hunting ground for days or weeks.

## Eating and Mating

Gulons are typically solitary animals, but males do make annual migrations in the spring to seek out a female's territory. If a female accepts a male, they spend weeks hunting together. The male returns to its territory near the end of the season and the female gives birth to a litter of gulon pups that leave the territory when they mature.

```statblock
"name": "Gulon (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "16"
  - !!int "5"
  - !!int "12"
  - !!int "5"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "6"
"traits":
  - "desc": "The gulon can move through a space as narrow as 1 foot wide without squeezing.\
      \ When it moves through an area smaller than its normal space, it excretes waste\
      \ in a 5-foot cube. This waste is difficult terrain and creatures crossing through\
      \ it must succeed on a DC 16 Constitution saving throw or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute."
    "name": "Amorphous"
  - "desc": "The gulon has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "The gulon makes three attacks. one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "The gulon belches a 15-foot-radius cloud of toxic gas around itself.\
      \ Each creature in the area must make a DC 16 Constitution saving throw, taking\
      \ 31 (7d8) poison damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Too Full (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/gulon-ccodex.png"
```
^statblock

## Environment

forest