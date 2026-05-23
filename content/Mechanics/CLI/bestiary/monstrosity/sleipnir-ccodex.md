---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sleipnir
---
# [Sleipnir](Mechanics\CLI\bestiary\monstrosity/sleipnir-ccodex.md)
*Source: Creature Codex p. 344*  

*These powerful horses have eight legs and variously snowy, dappled grey, or rich black coloration. Evil and cowardice are anathema to the sleipnir, and those adventurers who seek to ride them must first impress them with brave deeds and heroic songs.*

## Epic Origins

The sleipnir are touched by divinity, their speed and strength the stuff of legends. They appear when great acts of courage are about to be undertaken, and they may offer temporary service in this case, acting as mounts or beasts of burden. They hauled the raw timber for the first walls of Valhalla, carried queens into war against Jotunheim, and pulled the sun to Niflheim for the lost to be found.

## Draugr Bane

Sleipnir loathe the dishonorable undead and pursue them determinedly across the steppes and snowfields. Their hooves have a brilliant sheen, flashing with ensorcelling runes whenever they strike the undead. The great sleipnir matriarch, Gullfaxi, is famous for trampling an ancient vampire to death as the monster fled across an ice field.

```statblock
"name": "Sleipnir (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "10"
  - !!int "15"
  - !!int "10"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "cold"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Primordial"
"cr": "5"
"traits":
  - "desc": "As a bonus action, the sleipnir can leap into the air, gaining a flying\
      \ speed of 60 feet for 1 minute."
    "name": "Heroic Leap (1/Day)"
  - "desc": "If the sleipnir moves at least 20 feet straight toward a creature and\
      \ then hits it with a rune hooves attack on the same turn, that target must\
      \ succeed on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the sleipnir\
      \ can make another rune hooves attack against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "The sleipnir makes two rune hooves attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) bludgeoning damage and 3 (1d6) radiant damage. An undead creature\
      \ who takes damage from this attack must succeed on a DC 16 Charisma saving\
      \ throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by\
      \ magical runes until the end of its next turn."
    "name": "Rune Hooves"
  - "desc": "The sleipnir summons a gilded avalanche in a 30-foot cone. Each creature\
      \ in the area must make a DC 16 Dexterity saving throw. On a failure, a creature\
      \ takes 13 (3d8) bludgeoning and 13 (3d8) cold damage, is pushed 15 feet\
      \ away from the sleipnir, and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, a creature takes half the damage and isn't pushed or knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Gold and Ice (1/Day)"
"reactions":
  - "desc": "When a creature moves within 5 feet of the sleipnir, the sleipnir can\
      \ move up to its speed without provoking opportunity attacks."
    "name": "Eight Hooves (3/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/sleipnir-ccodex.png"
```
^statblock

## Environment

arctic, grassland