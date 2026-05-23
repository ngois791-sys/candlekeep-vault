---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bronze Golem
---
# [Bronze Golem](Mechanics\CLI\bestiary\construct/bronze-golem-ccodex.md)
*Source: Creature Codex p. 196*  

*Steam hisses from openings along the chest and jawline of a shining bronze man with enormous fists.*

## Refurbished Statues

Early bronze golems were crafted on a budget and had to use existing statues as a base. The interiors of these statues were hollowed out to fit the golem's internal steam boiler, and the leftover bronze was recast into an intimidating, stern-visaged head. Early bronze golems were used as arcane prison guards and guardians of secret temples.

## Magic over Mechanics

Bronze golems were first developed as early prototypes of the steam golems (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). These prototypes used arcane magic to smooth over inconsistencies in early steam technology, but rapid advancements in steam and clockwork mechanical engineering has made mass-producing mechanical golems much faster and cheaper than creating magical ones.

## Valuable Bodies

A bronze golem weighs approximately 3,500 pounds and requires 3,000 gp worth of bronze and a steam engine worth 500 gp to construct. It also requires the replacement of magical reagents worth 1,500 gp every year to maintain the golem. Unlike a normal steam golem that requires coal and water to power it, these golems are powered by magical reagents, which perpetually generate burning steam within the bronze golem's internal boiler.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Bronze Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "57"
"hit_dice": "6d10 + 24"
"modifier": !!int "-2"
"stats":
  - !!int "17"
  - !!int "6"
  - !!int "18"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands the languages of its creator but can't speak"
"cr": "3"
"traits":
  - "desc": "The golem's body is hot to the touch, thanks to the boiler inside its\
      \ chest. A creature that touches the golem or hits it with a melee attack while\
      \ within 5 feet of it takes 5 (1d10) fire damage."
    "name": "Boiling Body"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The golem makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage and, if the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 13).\
      \ The golem can only grapple one creature at a time."
    "name": "Slam"
  - "desc": "The golem makes a slam attack against a target it is grappling as it\
      \ opens a plate in its chest and exposes its arcane boiler. If the attack hits,\
      \ the target is forced into the golem's boiler, and the grapple ends. While\
      \ inside the boiler, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside the boiler, and it takes 14\
      \ (4d6) fire damage at the start of each of its turns. To escape, it or another\
      \ creature must succeed on a DC 13 Strength ([Athletics](Mechanics/CLI/rules/skills.md#Athletics))\
      \ check to open the boiler, freeing the target, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 5 feet of the golem. A bronze golem can only have one creature\
      \ in its boiler at a time."
    "name": "Brazen Bull"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/bronze-golem-ccodex.png"
```
^statblock

## Environment

any