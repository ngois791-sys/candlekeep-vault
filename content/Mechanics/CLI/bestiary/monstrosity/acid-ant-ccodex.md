---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Acid Ant
---
# [Acid Ant](Mechanics\CLI\bestiary\monstrosity/acid-ant-ccodex.md)
*Source: Creature Codex p. 8*  

*An ant the size of a housecat with a throbbing green abdomen gnaws everything in sight. Hissing liquid drips from its chittering mandibles.*

Though a single acid ant is barely a problem, these colonial insects travel in acid-spewing hordes that can lay waste to an entire village in a matter of hours.

## Endless Appetite

The arcane energy that swirls within acid ants keeps them constantly hungry. Their acidic bite allows them to devour almost any matter, though acid ants prefer the taste of meat. The beasts stay in an area until they have consumed everything organic and then hunt for more food, carving a path of devastation wherever they go.

## Potential Weapons

Many militaries have thought to capture and then unleash acid ants upon enemy troops. Such a challenge often results in those militaries losing their own soldiers to the ants. First, the ants must be captured. Then those ants must be held in acid‑proof housings; otherwise they are not contained for long. If these initial steps can be accomplished, the next challenge is releasing the ants in a way that they devour only enemies. Armies that can solve these problems master the art of destruction.

## Unknown Origin

No one knows how acid ants came to be, but elemental magic was involved. Perhaps they are the product of a deranged wizard's experiment or an elemental summoning ritual gone awry. Scholars and adventurers hunt for the origin of these beasts, searching for knowledge to better understand and annihilate the ants.

## Ant Colony

Acid ants are sometimes found with ordinary giant ants and giant ant queens (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). In these cases, the acid ants are a specialized warrior caste within the hive that still answer to the queen.

```statblock
"name": "Acid Ant (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "13"
  - !!int "12"
  - !!int "1"
  - !!int "7"
  - !!int "3"
"speed": "30 ft."
"damage_immunities": "acid"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "When the ant is reduced to 0 hp, it explodes in a burst of acid. Each\
      \ creature within 5 feet of the ant must succeed on a DC 11 Dexterity saving\
      \ throw or take 5 (2d4) acid damage."
    "name": "Explosive Death"
  - "desc": "The ant has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 20 60 ft., one target. *Hit:*\
      \ 5 (2d4) acid damage and the target takes 1 acid damage at the start of its\
      \ next turn unless the target immediately uses its reaction to wipe off the\
      \ spit."
    "name": "Acid Spit"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d4 + 1) piercing damage plus 2 (1d4) acid damage."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/acid-ant-ccodex.png"
```
^statblock

## Environment

any