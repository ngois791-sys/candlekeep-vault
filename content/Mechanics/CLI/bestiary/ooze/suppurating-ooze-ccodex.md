---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Suppurating Ooze
---
# [Suppurating Ooze](Mechanics\CLI\bestiary\ooze/suppurating-ooze-ccodex.md)
*Source: Creature Codex p. 288*  

*A sentient pool of blood and protoplasm seeps forward, the thin membrane encasing its form rippling with undulating pustules.*

## Unnatural Antibodies

Suppurating oozes lurk in horrible, disease-ridden places. These semi‑transparent accretions of pus and coagulant are borne from the liquefied remains of victims of a disease called the Seeping Death.

## Morbid Liquefaction

The contagion spread by the suppurating ooze is a radically advanced form of liquefactive necrosis and helps the ooze slowly digest its fleshy prey.

## Ooze Nature

An ooze doesn't require sleep.

```statblock
"name": "Suppurating Ooze (CCodex)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "-2"
"stats":
  - !!int "16"
  - !!int "6"
  - !!int "16"
  - !!int "1"
  - !!int "6"
  - !!int "2"
"speed": "10 ft., climb 10 ft."
"saves":
  - "constitution": !!int "5"
"damage_resistances": "cold, necrotic, slashing"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "A living creature that touches the ooze or hits it with a melee attack\
      \ while within 5 feet of it takes 4 (1d8) necrotic damage and must succeed\
      \ on a DC 13 Constitution saving throw or contract a disease. At the end of\
      \ each long rest, the diseased creature must succeed on a DC 13 Constitution\
      \ saving throw or its Dexterity score is reduced by 1d4. The reduction lasts\
      \ until the target finishes a long rest after the disease is cured. If the disease\
      \ reduces the creature's Dexterity to 0, the creature dies and its body becomes\
      \ a suppurating ooze 1d4 hours later. The disease lasts until removed by the\
      \ [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md) spell\
      \ or other similar magic."
    "name": "Seeping Death"
  - "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage plus 9 (2d8) necrotic damage. If the target\
      \ is a creature, it must succeed on a DC 13 Constitution saving throw or become\
      \ infected with the seeping death disease (see the Seeping Death trait)."
    "name": "Pseudopod"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/suppurating-ooze-ccodex.png"
```
^statblock

## Environment

underground, urban