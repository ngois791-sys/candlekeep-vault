---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sentinel In Darkness
---
# [Sentinel In Darkness](Mechanics\CLI\bestiary\construct/sentinel-in-darkness-ccodex.md)
*Source: Creature Codex p. 323*  

*A blindfolded, stone face leers down from beneath a hooded cloak stitched from thousands of desiccated treasure maps. With each step the four-armed, stone figure takes, torches sputter, compasses spin, and ink fades.*

## Protector of Secrets

Sentinels in darkness are magical constructs tasked with guarding secret vaults and reliquaries. These creatures ward off plunderers with their imposing form, brute strength, and magical nature that obscures secrets. It is said when a sentinel is slain, its cloak of maps burns away, leaving behind one map to a great, secret treasure.

## Magical Theft

Sentinels in darkness can magic away a coveted item, while cursing explorers with an unquenchable desire to find secrets—even at the cost of the explorer's own health.

## Awakening the Sentinel

To animate a sentinel in darkness, the creator must imbue an inert stone golem with the spirit of a mortal that died having taken at least one terrible secret to the grave.

## Construct Nature

A sentinel in darkness doesn't require air, food, drink, or sleep.

```statblock
"name": "Sentinel In Darkness (CCodex)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "9"
  - !!int "16"
  - !!int "6"
  - !!int "18"
  - !!int "1"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 17"
"languages": "Understands the languages of its creator but can't speak"
"cr": "7"
"traits":
  - "desc": "The sentinel has advantage on attack rolls against creatures with darkvision,\
      \ blindsight, or truesight."
    "name": "Scourge of the Seekers"
  - "desc": "Secret doors and illusory walls within 1,500 feet of the sentinel have\
      \ the DC to detect their presence increased by 5."
    "name": "Vault Keeper"
"actions":
  - "desc": "The sentinel makes two stone fist attacks. If both attacks hit a Large\
      \ or smaller creature, the target must succeed on a DC 15 Wisdom saving throw\
      \ or lose one non-weapon, non-armor object that is small enough to fit in one\
      \ hand. The object is teleported to a random unoccupied space within 200 feet\
      \ of the sentinel. The target feels a mental tug in the general direction of\
      \ the item until it is recovered."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (2d12 + 5) bludgeoning damage."
    "name": "Stone Fist"
  - "desc": "One creature the sentinel can see within 30 feet of it must succeed on\
      \ a DC 15 Wisdom saving throw or suffer the Curse of the Wanderer. While cursed,\
      \ the creature's speed is halved and it can't regain hp. For every 24 hours\
      \ it goes without discovering or learning new information, it takes 10 (3d6)\
      \ psychic damage. The curse lasts until it is lifted by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or similar magic."
    "name": "Curse of the Wanderer (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/sentinel-in-darkness-ccodex.png"
```
^statblock

## Environment

underground, urban