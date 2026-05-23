---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kharbek
---
# [Kharbek](Mechanics\CLI\bestiary\npc/kharbek-cm.md)
*Source: Candlekeep Mysteries p. 167*  

Kharbek, a 145-year-old shield dwarf, is the only survivor of a party of adventurers captured by the Order of the Immortal Lotus. If questioned, Kharbek is able to recall how a member of the Immortal Lotus disguised as a beggar lured the group to the temple, where the adventurers were tortured one by one. Kharbek's weapons rest on a nearby table. If their wounds are healed and levels of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion) removed, Kharbek offers to fight alongside the characters as a sign of gratitude.

Kharbek is a mountain dwarf explorer with brown skin, brown eyes, and jet-black hair. They stand just over 4 feet tall and have an athletic build.

## Personality Trait

"I am a zealous worshiper of Moradin and take it upon myself to protect those in need."

## Ideal

"Honesty is the best policy."

## Bond

"When someone helps me, I'm bound by my honor to return the favor."

## Flaw

"I am far too trusting and have a difficult time discerning a lie."

```statblock
"name": "Kharbek (CM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "1"
"hit_dice": "3d8 + 3"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"damage_resistances": "poison"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common, Dwarvish"
"cr": "1/2"
"traits":
  - "desc": "Kharbek has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
  - "desc": "Kharbek has 5 levels of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)."
    "name": "Exhaustion"
  - "desc": "Kharbek"
    "name": "Dwarven Resilience"
"actions":
  - "desc": "Kharbek makes two melee attacks or two ranged attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, ranged 150/600 ft., one target.\
      \ *Hit:* 6 (1d8 + 2) piercing damage."
    "name": "Longbow"
"source":
  - "CM"
"image": "Mechanics/CLI/bestiary/npc/token/kharbek-cm.webp"
```
^statblock