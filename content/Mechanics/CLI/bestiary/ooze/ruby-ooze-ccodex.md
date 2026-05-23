---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ruby Ooze
---
# [Ruby Ooze](Mechanics\CLI\bestiary\ooze/ruby-ooze-ccodex.md)
*Source: Creature Codex p. 286*  

*The rough stone wall reveals a vein of blood-red gemstone running through it.*

## Miners' Menace

The ruby ooze has simple tricks, but they work well where humanoids are concerned. Ruby oozes hunt by packing themselves into crevasses in walls and surfaces near areas of high traffic, which has led to many costly battles inside mineshafts.

## Treasure Stalker

Ruby oozes are known to take on a semisolid form that strongly resembles a pile of cut stones. As soon as something warm and moving comes within reach, the ruby ooze lunges with its pseudopods. When confronted with strong and resisting prey, the ruby ooze launches some of its own protoplasm at the creature. This substance hardens the flesh it touches into a ruby-like stone, slowing and harming the creature enough for the ruby ooze to devour what flesh remains. When its prey is immobilized by its acid, the ruby ooze covers the body entirely and dissolves it down to the odd tooth or bit of ruby-colored bone.

## Hoard Bane

The creatures have been employed by those wishing to protect hoards of wealth, but the number of substances the ooze can dissolve makes this an infrequent method of security.

## Ooze Nature

A ruby ooze doesn't require sleep.

```statblock
"name": "Ruby Ooze (CCodex)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "8"
  - !!int "18"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_vulnerabilities": "lightning"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "acid, fire"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "6"
"traits":
  - "desc": "The ooze has advantage on attack rolls against any creature it has surprised."
    "name": "Ambusher"
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "A creature that touches the ooze or hits it with a melee attack while\
      \ within 5 feet of it takes 7 (2d6) acid damage. Any nonmagical weapon made\
      \ of metal or wood that hits the ooze is coated in a corrosive red slime. After\
      \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to\
      \ damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical\
      \ ammunition made of metal or wood that hits the ooze is destroyed after dealing\
      \ damage. The ooze can eat through 2-inch-thick, nonmagical wood or metal in\
      \ 1 round."
    "name": "Corrosive Form"
  - "desc": "While the ooze remains motionless, it is indistinguishable from a pile\
      \ of rubies."
    "name": "False Appearance"
  - "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The ruby ooze makes two pseudopod attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) bludgeoning damage plus 14 (4d6) acid damage."
    "name": "Pseudopod"
  - "desc": "The ooze sprays its bright red protoplasm in a 20-foot line that is 5\
      \ feet wide. Each creature in that line must make a DC 15 Dexterity saving throw.\
      \ On a failure, the creature takes 21 (6d6) acid damage and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ as its flesh begins to turn into a translucent ruby-like stone. On a success,\
      \ the creature takes half the damage and isn't [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The [restrained](Mechanics/CLI/rules/conditions.md#Restrained) creature must\
      \ make a DC 15 Constitution saving throw at the end of its next turn, taking\
      \ 21 (6d6) acid damage and becoming [petrified](Mechanics/CLI/rules/conditions.md#Petrified)\
      \ on a failure or ending the effect on a success."
    "name": "Acid Spray (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/ruby-ooze-ccodex.png"
```
^statblock

## Environment

underground