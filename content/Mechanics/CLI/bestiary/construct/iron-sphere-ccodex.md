---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Iron Sphere
---
# [Iron Sphere](Mechanics\CLI\bestiary\construct/iron-sphere-ccodex.md)
*Source: Creature Codex p. 229*  

*An iron ball covered in black panels sits at the statue's feet. It seems slightly out of place, its surface smooth and bright.*

## Hidden Threat

From a distance, the iron sphere appears to be a ball four feet in diameter. Closer inspection reveals square plates in the sphere, each crowned by a black hemisphere. Iron spheres usually find placement as art objects, sometimes incorporated into statuary displays or among white stones, vases, or other decorative notions.

## Unpredictable Opponent

Once the iron sphere becomes active, it rolls toward a threat, deploying what weapons it deems necessary by means of the pistons beneath each plate on its exterior. Some pop open like a chest's lid, some fire outward, and others split open to reveal a blade, a spike, or a nozzle.

## Direct Control or Set to Guard

The owner of an iron sphere gives it commands through a gem, which can be concealed inside the plate at the topmost part of the sphere when not being used to control the sphere.

## Construct Nature

The inkling doesn't require air, food, drink, or sleep.

```statblock
"name": "Iron Sphere (CCodex)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d6 + 32"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "18"
  - !!int "4"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., burrow 10 ft., climb 20 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "lightning, necrotic, poison, psychic, radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 13"
"languages": "Understands the languages of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "The sphere is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The sphere deals double damage to objects and structures."
    "name": "Siege Monster"
  - "desc": "The sphere can launch itself into the air by extending the rods within\
      \ it like pistons. The sphere's long jump is up to 25 feet and its high jump\
      \ is up to 15 feet, with or without a running start."
    "name": "Standing Leap"
  - "desc": "The sphere can burrow through solid rock at half its burrow speed and\
      \ leaves a 5-foot-wide, 5-foot-high tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The iron sphere makes three melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage."
    "name": "Blade"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage."
    "name": "Piston"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Spike"
  - "desc": "The sphere extends a metal rod from one of its many facets and fires\
      \ a bolt of lightning in a 20-foot line that is 5 feet wide. Each creature in\
      \ that line must make a DC 15 Dexterity saving throw, taking 22 (4d10) lightning\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Lightning Cannon (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/iron-sphere-ccodex.png"
```
^statblock

## Environment

urban