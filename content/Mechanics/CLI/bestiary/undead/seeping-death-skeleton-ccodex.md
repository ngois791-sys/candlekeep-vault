---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Seeping Death Skeleton
---
# [Seeping Death Skeleton](Mechanics\CLI\bestiary\undead/seeping-death-skeleton-ccodex.md)
*Source: Creature Codex p. 288*  

Sometimes, the skeletal victim of a [suppurating ooze](Mechanics/CLI/bestiary/ooze/suppurating-ooze-ccodex.md) will reanimate, either by the twisted will of a necromancer or the ebb and flow of wild magic.

```statblock
"name": "Seeping Death Skeleton (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "armor scraps"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "15"
  - !!int "6"
  - !!int "8"
  - !!int "5"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "2"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage plus 9 (2d8) necrotic damage. If the target\
      \ is a creature, it must succeed on a DC 14 Constitution saving throw or become\
      \ infected with the [seeping death](Mechanics/CLI/rules/diseases.md#Seeping%20Death)."
    "name": "Diseased Claw"
"source":
  - "CCodex"
```
^statblock

## Environment

urban