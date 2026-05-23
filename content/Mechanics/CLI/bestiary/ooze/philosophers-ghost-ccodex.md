---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Philosopher's Ghost
---
# [Philosopher's Ghost](Mechanics\CLI\bestiary\ooze/philosophers-ghost-ccodex.md)
*Source: Creature Codex p. 297*  

*Half fire and half ooze, a philosopher's ghost is a bubbling, burning, highly corrosive creature that can make the tallest tower tumble into ruin—if properly directed.*

The result of an alchemical process, a philosopher's ghost can appear as an ooze which glows a faint, eerie green in darkness, or as a vaguely-humanoid, green, sparking flame. It is especially drawn to movement, pursuing moving creatures to the exclusion of all else.

## Powerful and Difficult to Harness

Notoriously difficult to control, the unexpected creation of a philosopher's ghost spells disaster for the alchemist and, in all likelihood, anyone nearby as well. The creature burns its way through wooden structures with great speed, and, over time, even metal is melted by its heat.

## Alchemical Nightmare

Among alchemical circles, the only known remedy for a rampaging philosopher's ghost is complete immersion in water—even then it can spontaneously reignite and wreak further havoc long afterward when exposed to the air again.

## Ooze Nature

A philosopher's ghost doesn't require sleep.

```statblock
"name": "Philosopher's Ghost (CCodex)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "17"
  - !!int "12"
  - !!int "2"
  - !!int "10"
  - !!int "6"
"speed": "40 ft."
"damage_resistances": "acid; cold; slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 10"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The philosopher's ghost sheds bright light in a 20-foot-radius and dim\
      \ light for an additional 20 feet."
    "name": "Illumination"
  - "desc": "The philosopher's ghost can move through a space as narrow as 1 inch\
      \ wide without squeezing. A creature that touches the ghost or hits it with\
      \ a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In\
      \ addition, the philosopher's ghost can enter a hostile creature's space and\
      \ stop there. The first time it enters a creature's space on a turn, that target\
      \ takes 5 (1d10) fire damage and catches fire; until a creature takes an action\
      \ to douse the fire, the target takes 5 (1d10) fire damage at the start of\
      \ each of its turns."
    "name": "Persistent Burning Form"
  - "desc": "The philosopher's ghost deals double damage to objects and structures."
    "name": "Siege Monster"
  - "desc": "If completely immersed in water, a philosopher's ghost's movement halves\
      \ each round until it stops moving completely, becoming [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ and contact with it no longer causes damage. As soon as any portion of it\
      \ is exposed to the air again, it resumes moving at full speed."
    "name": "Water Vulnerability"
"actions":
  - "desc": "The philosopher's ghost makes two burning touch attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) fire damage. If the target is a creature, it suffers a burning\
      \ lesion, taking 2 (1d4) fire damage at the start of each of its turns. Any\
      \ creature can take an action to soothe the burning lesion with a successful\
      \ DC 12 Wisdom ([Medicine](Mechanics/CLI/rules/skills.md#Medicine)) check. The\
      \ lesion is also soothed if the target receives magical healing."
    "name": "Burning Touch"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/philosophers-ghost-ccodex.png"
```
^statblock

## Environment

urban