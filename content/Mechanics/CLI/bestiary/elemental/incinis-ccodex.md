---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Incinis
---
# [Incinis](Mechanics\CLI\bestiary\elemental/incinis-ccodex.md)
*Source: Creature Codex p. 226*  

*This unusual elemental seems to be made from magma and fire. Its skin is pitch black with glowing cracks forming and closing as it moves. Its face is featureless, except for a great flaming maw that sputters and smokes as it speaks.*

## Curious

Incinis are naturally curious creatures, and though they savor the taste of the living, they are likely to greet newcomers before attacking. An incinis is not naive or easily fooled, and it resorts to violence the instant it senses treachery or lies.

## Volcanic Spirits

The incinis are often found on or near pools of magma, and seem to be capable to shaping and directing the flows of lava from active volcanoes.

## Elemental Nature

The incinis doesn't require air, food, drink, or sleep.

```statblock
"name": "Incinis (CCodex)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d10 + 72"
"modifier": !!int "5"
"stats":
  - !!int "12"
  - !!int "20"
  - !!int "18"
  - !!int "10"
  - !!int "16"
  - !!int "10"
"speed": "40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Ignan"
"cr": "10"
"traits":
  - "desc": "The elemental can move through a space as narrow as 1 inch wide without\
      \ squeezing. A creature that touches the elemental or hits it with a melee attack\
      \ while within 5 feet of it takes 5 (1d10) fire damage and must succeed on\
      \ a DC 16 Strength saving throw or the weapon becomes stuck in the elemental.\
      \ If the weapon's wielder can't or won't let go of the weapon, the wielder is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) while the weapon is\
      \ stuck. While stuck, the weapon can't be used. Until the grapple ends, the\
      \ wielder takes 5 (1d10) fire damage at the start of each of its turns. To\
      \ end the grapple, the wielder can release the weapon or pull it free by taking\
      \ an action to make a DC 16 Strength check and succeeding."
    "name": "Magma Form"
"actions":
  - "desc": "The incinis makes two magma fist attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one creature. *Hit:*\
      \ 14 (2d8 + 5) bludgeoning damage and 9 (2d8) fire damage."
    "name": "Magma Fist"
  - "desc": "The incinis transforms into a wave of magma, moving up to its speed in\
      \ a straight line. Each creature in the path where the incinis moves must make\
      \ a DC 17 Dexterity saving throw. On a failure, a target takes 21 (6d6) fire\
      \ damage and, if it is a Large or smaller creature, it is pushed ahead of the\
      \ incinis and knocked [prone](Mechanics/CLI/rules/conditions.md#Prone) in an\
      \ unoccupied space within 5 feet of where the incinis ends its movement. On\
      \ a success, a target takes half the damage and is neither pushed nor knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Wave of Magma (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/incinis-ccodex.png"
```
^statblock

## Environment

mountain