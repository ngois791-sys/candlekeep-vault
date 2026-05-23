---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tulpa
---
# [Tulpa](Mechanics\CLI\bestiary\undead/tulpa-ccodex.md)
*Source: Creature Codex p. 358*  

*This spectral humanoid's shape and features closely resemble the humanoid it follows. Its eyes swirl with star-like lights, and its skin is loose and pale. Overly large black claws tip its long fingers.*

## Manifestations

Tulpa are a coalescence of ill-will and obsessive thoughts. Brought into the Material Plane from pure negative thoughts, the tulpa is effectively immortal-remaining in the world until its creator ceases thinking dark thoughts. The tulpa heeds no commands and follows its creator at a distance, haunting its creator and attacking those who get too close. 

## Beacons of Darkness

While there is never more than one tulpa associated with a single creature, a tulpa's birth and continued existence draws malevolent things to it. Lesser undead and beastly evil are attracted to the tulpa, and its creator may regularly be pursued by a growing host of darkness. 

```statblock
"name": "Tulpa (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "9"
"speed": "0 ft., fly 30 ft. (hover)"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical weapons"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The tulpa can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "Within a day of being slain, the tulpa reforms within 500 feet of its\
      \ creator. It doesn't reform if its creator is slain, or if the creator's mental\
      \ disturbance is healed. The tulpa is immune to all damage dealt to it by its\
      \ creator."
    "name": "Rise Again"
  - "desc": "The tulpa always remains within 500 feet if its creator. As long as the\
      \ tulpa is within 500 feet of its creator, the creator has disadvantage on Wisdom\
      \ saving throws."
    "name": "It Follows"
"actions":
  - "desc": "The tulpa makes two black claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) necrotic damage."
    "name": "Black Claw"
  - "desc": "*Ranged Spell Attack:* +4 to hit, range 120 ft., one target. *Hit:*\
      \ 22 (4d10) psychic damage."
    "name": "Psychic Blast"
  - "desc": "The tulpa uses its action to fill a 40-foot radius around itself with\
      \ dread-inducing psychic energy. Each creature, other than the tulpa's creator,\
      \ within that area must succeed on a DC 13 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ of the tulpa until the end of its next turn and become cursed. A creature\
      \ with an Intelligence of 5 or lower can't be cursed. While cursed by the tulpa,\
      \ that creature's own thoughts turn ever more dark and brooding. Its sense of\
      \ hope fades, and shadows seem overly large and ominous. The cursed creature\
      \ can repeat the saving throw whenever it finishes a long rest, ending the effect\
      \ on itself on a success. If not cured within three days, the cursed creature\
      \ manifests its own tulpa."
    "name": "Imposing Dread (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/tulpa-ccodex.png"
```
^statblock

## Environment

any