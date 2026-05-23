---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lesser Scrag
---
# [Lesser Scrag](Mechanics\CLI\bestiary\monstrosity/lesser-scrag-ccodex.md)
*Source: Creature Codex p. 322*  

*Suddenly, a pair of emaciated humanoids with greenish, rubbery hides, wicked looking claws, and enlarged lower jaws burst out of the side of the air pocket.*

## Demon Friends

Marine cousins of trolls, scrags as a group are very much attuned to water, water-based creatures, and water demons, going so far as to speak their languages and ally with forces of elemental water, ice, and ocean depths.

## Net Stealers and Shipbreakers

Both lesser and greater scrags are notorious for pulling down fishing nets from under the water, then either devouring the fisherfolk who hold onto them or eating the catch out of a full net (abandoning the ripped nets afterwards). In groups led by a greater scrag, they often stave in a small ship's hull, sink it, and devour the crew.

```statblock
"name": "Lesser Scrag (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "15"
  - !!int "8"
  - !!int "10"
  - !!int "9"
"speed": "10 ft., swim 40 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Abyssal, Aquan"
"cr": "2"
"traits":
  - "desc": "The scrag can breathe air and water Regeneration. The lesser scrag regains\
      \ 5 hp at the start of its turn if it is in contact with water. If the scrag\
      \ takes acid or fire damage, this trait doesn't function at the start of the\
      \ scrag's next turn. The scrag dies only if it starts its turn with 0 hp and\
      \ doesn't regenerate."
    "name": "Amphibious"
"actions":
  - "desc": "The lesser scrag makes two attacks. one with its bite and one with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4)"
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d4 + 4)"
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/greater-scrag-ccodex.png"
```
^statblock

## Environment

swamp, underwater