---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fragrite
---
# [Fragrite](Mechanics\CLI\bestiary\elemental/fragrite-ccodex.md)
*Source: Creature Codex p. 164*  

*Lustrous sand rises from the dunes, forming a translucent crystalline figure. Moments later, it bursts into a shower of glass and begins wandering once more, only to repeat the cycle over again.*

A fragrite roams the desert confused and alone. Its unstable body exposes its chaotic, callow nature.

## Explosive Beginnings

When lightning strikes the earth and the conditions are just right, there is a chance for the sand to become glass. When this unlikely occurrence involves enough elemental magic, there is another chance for the vitrified mass to come to life. The awakening of a fragrite is jarring and alarming, even to itself.

## Beware of Broken Glass

Though glass is brittle and easily broken, its razor sharp edges can cut deep. As the fragrite's form is chipped away by its enemies or its own volatile nature, its edges become more jagged and dangerous.

## Elemental Nature

A fragrite doesn't require air, food, drink or sleep.

```statblock
"name": "Fragrite (CCodex)"
"size": "Medium"
"type": "elemental"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "6"
  - !!int "8"
  - !!int "8"
"speed": "30 ft."
"damage_resistances": "fire; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Terran"
"cr": "6"
"traits":
  - "desc": "The fragrite has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in sandy terrain."
    "name": "Sand Camouflage (Sand Form Only)"
  - "desc": "The fragrite can burrow through sand without disturbing the material\
      \ it moves through."
    "name": "Sand Glide (Sand Form Only)"
  - "desc": "As a bonus action, the fragrite can polymorph into a mass of sand or\
      \ a glass humanoid. Its statistics are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed.\n\nWhile in sand form, the fragrite\
      \ has a burrow speed of 50 feet, it can move through a space as narrow as 1\
      \ inch wide without squeezing, and it is immune to the [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ condition. While in glass form, the fragrite has vulnerability to thunder\
      \ damage."
    "name": "Shapechanger"
"actions":
  - "desc": "The fragrite makes two strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) bludgeoning damage. If the fragrite is in its glass form and has\
      \ less than half of its total hp remaining, this attack instead deals 16 (3d8\
      \ + 3) slashing damage."
    "name": "Strike"
  - "desc": "The fragrite explodes into shards of glass, reducing its hp by 5 (2d4).\
      \ Each creature within 15 feet of it must make a DC 14 Dexterity saving throw,\
      \ taking 27 (6d8) slashing damage on a failed save, or half as much damage\
      \ on a successful one. The fragrite then polymorphs into its sand form."
    "name": "Spontaneous Explosion (Glass Form Only; (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/fragrite-ccodex.png"
```
^statblock

## Environment

badlands