---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Skull Lantern
---
# [Skull Lantern](Mechanics\CLI\bestiary\undead/skull-lantern-ccodex.md)
*Source: Creature Codex p. 343*  

*From the pile of bones, a skull rises into the air as the hood of an old cloak slips from it and drops to the floor. A baleful greenish light pours from its hollow sockets. Its jaws open wide and a rasping voice utters words in a strange tongue.*

## Accidental Animation

A form of enigmatic, semi-sentient undead, a skull lantern comes into being spontaneously, soon after the destruction of another humanoid undead. It rarely lasts long, however, due to the fact that its first act is often to levitate slowly above a recently-vanquished undead creature's remains with eerie light shining from its eye sockets.

## Traces of Life

Skull lanterns are given to muttering, repeating nonsense phrases, and even occasionally shouting, though what excites them to such utterings is as yet unknown; there seems to be no rhyme or reason to it. In fact, it isn't entirely clear if skull lanterns are inhabited by some spiritual remnant of their former selves or if they are occupied by some other entity altogether. Whether or not such behavior is a sign of intelligence at work, their willingness to communicate becomes more pronounced the closer they come to places of arcane power.

## Enigmatic Companions

A few brave experimenters have discovered that these beings can be put to several uses. If a creature tethers a skull lantern to itself and pulls the skull along for an hour, the skull will begin floating next to the creature of its own volition; a useful trait, since the skull produces a somewhat ghastly, but steady, light. It will float along in this way until something stops it from doing so, either by attacking it, separating from it through the use of a barrier of some sort, or placing it in a container. When abandoned, a skull lantern simply floats in place where it was left and won't take up following another creature until tethered and "trained" to do so again. When attacked, a skull lantern will defend itself with its bite but otherwise will not attack.

## Undead Nature

A skull lantern doesn't require air, food, drink, or sleep.

```statblock
"name": "Skull Lantern (CCodex)"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "14"
"hit_dice": "4d4 + 4"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "16"
  - !!int "12"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "passive Perception 8"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "When immersed in magical darkness, a skull lantern emits a brilliant\
      \ flash of light powerful enough to dispel magical darkness in a 30-foot-radius\
      \ sphere centered on itself, illuminating the area with bright light for 1d4\
      \ rounds. Afterwards, the light winks out and the skull falls to the ground,\
      \ inert. In one week, the skull lantern has a 50% chance of becoming active\
      \ again, though failure to do so means it will never reanimate."
    "name": "Flare"
  - "desc": "The skull lantern sheds bright light in a 20-foot-radius and dim light\
      \ for an additional 20 feet."
    "name": "Illumination"
  - "desc": "If damage reduces the skull to 0 hp, it must make a Constitution saving\
      \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
      \ a critical hit. On a success, the skull drops to 1 hp instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Bite"
  - "desc": "The skull lantern opens its mouth, releasing a searing beam of light\
      \ in a 15-foot line that is 5 feet wide. Each creature in that line must make\
      \ a DC 13 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save,\
      \ or half as much damage on a successful one."
    "name": "Fire Beam (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/skull-lantern-ccodex.png"
```
^statblock

## Environment

any