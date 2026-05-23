---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sootwing
---
# [Sootwing](Mechanics\CLI\bestiary\beast/sootwing-ccodex.md)
*Source: Creature Codex p. 329*  

*This ashen-colored giant moth flies freely through flame and smoke. Its large eyes flicker from yellow to orange as it regards possible prey.*

## Dwellers in the Char

Sootwings are most commonly found in the recently burned regions of forests or grasslands, though some have been seen flapping near volcanoes. They lay their eggs in the charred remains of old trees, and their larvae feed on the burned wood.

```statblock
"name": "Sootwing (CCodex)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "3"
  - !!int "10"
  - !!int "7"
"speed": "25 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_immunities": "fire"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The giant moth has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Antennae"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) piercing damage."
    "name": "Proboscis"
  - "desc": "A 20-foot radius cloud of smoldering ash disperses from the sootwing.\
      \ Each creature in that area must make a DC 11 Constitution saving throw. On\
      \ a failure, a creature takes 4 (1d8) fire damage and is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of its next turn. On a success, a creature takes half the damage\
      \ and isn't [blinded](Mechanics/CLI/rules/conditions.md#Blinded)."
    "name": "Sooty Wings (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/sootwing-ccodex.png"
```
^statblock

## Environment

grassland, mountain