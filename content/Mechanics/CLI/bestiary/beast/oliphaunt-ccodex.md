---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Oliphaunt
---
# [Oliphaunt](Mechanics\CLI\bestiary\beast/oliphaunt-ccodex.md)
*Source: Creature Codex p. 280*  

*Dwarfing even the largest mammoth, the beast lumbers forward, its enormous tusks swaying with the rhythm of its thunderous footfalls.*

The largest oliphaunts stand just over 30 feet tall, two to three times the size of a typical elephant. Males often have one pair of large tusks and a pair of shorter tusks known as tushes, which have no marrow inside. Female tusks are enormous, with the outside pair often being a few feet shorter, but no less deadly. Oliphaunts that live in hot, dry climates often have very little body hair, while those that live in colder climates will be heavily furred, similar to a mammoth.

## Titanic Mounts

While tribes of humanoids have been known to breed and raise tame oliphaunts to act as beasts of burden, giants are also well known for having oliphaunt mounts. Humanoids tend to build structures of wood and canvas to sit upon the gigantic beasts, while a single giant may ride an oliphaunt bareback or with some form of saddle.

```statblock
"name": "Oliphaunt (CCodex)"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "148"
"hit_dice": "9d20 + 54"
"modifier": !!int "-1"
"stats":
  - !!int "27"
  - !!int "9"
  - !!int "23"
  - !!int "3"
  - !!int "11"
  - !!int "6"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "8"
"traits":
  - "desc": "If the oliphaunt moves at least 20 feet straight toward a creature and\
      \ then hits it with a gore attack on the same turn, that target must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the oliphaunt\
      \ can make one stomp attack against it as a bonus action."
    "name": "Trampling Charge"
  - "desc": "If the oliphaunt starts its turn with a target [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
      \ it can slam the target into the ground as a bonus action. The creature must\
      \ make a DC 17 Constitution saving throw, taking 11 (2d10) bludgeoning damage\
      \ on a failed save, or half as much damage on a successful one. This doesn't\
      \ end the [grappled](Mechanics/CLI/rules/conditions.md#Grappled) condition on\
      \ the target."
    "name": "Trunk Slam"
"actions":
  - "desc": "The oliphaunt uses its trunk, then it makes one gore or stomp attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:*\
      \ 30 (5d8 + 8) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 35 (5d10 + 8) bludgeoning damage."
    "name": "Stomp"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 15 ft., one creature. *Hit:*\
      \ The target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape\
      \ DC 17) if it is a Large or smaller creature. Until the grapple ends, the target\
      \ is [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and the oliphaunt\
      \ can't use its trunk on another target."
    "name": "Trunk"
  - "desc": "The oliphaunt sweeps its tusks in a wide arc. Each creature in a 20-foot\
      \ cube must make a DC 17 Dexterity saving throw, taking 35 (10d6) bludgeoning\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Tusk Sweep (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/oliphaunt-ccodex.png"
```
^statblock

## Environment

arctic, grassland