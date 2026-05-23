---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nalusa Falaya
---
# [Nalusa Falaya](Mechanics\CLI\bestiary\aberration/nalusa-falaya-ccodex.md)
*Source: Creature Codex p. 274*  

*A tall, spindly humanoid covered in dark fur lumbers forward. Its lupine skull hosts pointed ears ending in tufts of fur and small, black eyes, which glow with reflected light. Sharp spines protrude from its hunched back.*

Primarily living alone, the nalusa falaya seem to mutter to themselves for company. In a few cases, they ally themselves with [zoogs](Mechanics/CLI/bestiary/aberration/zoog-ccodex.md) or spiders and may refer to these creatures as their "children."

## Unsavory Appetites

The nalusa falaya's jaw hosts terrifying teeth, and its eyes gleam in even the dimmest light. Humanoid young are their favorite delicacy, and many nalusa falaya have a particular appetite for elven young.

## Shadow Walkers

While this evil and devious creature may walk as a humanoid, its form has been seen to slither like a snake from shadow to shadow, where it disappears from sight. It is rumored that these creatures were once mortals but have been corrupted by energies from the Void.

## Portal Wardens

The nalusa falaya are often drawn to portals leading to or from planes of shadow, death, and darkness. These portals may resemble dark ponds, shadowy wells full of peculiar echoes, or even dark caverns covered in spiraling runes. When losing a battle, they sometimes disappear into shadow and never return.

```statblock
"name": "Nalusa Falaya (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "13"
  - !!int "11"
  - !!int "13"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "While in dim light or darkness, the nalusa falaya can take the [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action."
    "name": "Shadow Stealth"
  - "desc": "As an action, the nalusa falaya can teleport itself to a shadow it can\
      \ see within 30 feet."
    "name": "Shadow Step"
  - "desc": "While in sunlight, the nalusa falaya has disadvantage on ability checks,\
      \ attack rolls, and saving throws."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 12 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage."
    "name": "Claw"
  - "desc": "The nalusa falaya targets one creature it can see within 30 feet of it.\
      \ If the target can see the nalusa falaya, the target must succeed on a DC 12\
      \ Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of the nalusa falaya's next turn."
    "name": "Terrifying Glare"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/nalusa-falaya-ccodex.png"
```
^statblock

## Environment

farmland, urban