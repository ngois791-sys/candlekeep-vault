---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Greater Scrag
---
# [Greater Scrag](Mechanics\CLI\bestiary\monstrosity/greater-scrag-ccodex.md)
*Source: Creature Codex p. 322*  

*Suddenly, a pair of emaciated humanoids with greenish, rubbery hides, wicked looking claws, and enlarged lower jaws burst out of the side of the air pocket.*

## Demon Friends

Marine cousins of trolls, scrags as a group are very much attuned to water, water-based creatures, and water demons, going so far as to speak their languages and ally with forces of elemental water, ice, and ocean depths.

## Net Stealers and Shipbreakers

Both lesser and greater scrags are notorious for pulling down fishing nets from under the water, then either devouring the fisherfolk who hold onto them or eating the catch out of a full net (abandoning the ripped nets afterwards). In groups led by a greater scrag, they often stave in a small ship's hull, sink it, and devour the crew.

```statblock
"name": "Greater Scrag (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "17"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., swim 40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Giant, Abyssal, Aquan"
"cr": "7"
"traits":
  - "desc": "The scrag can breathe air and water."
    "name": "Amphibious"
  - "desc": "The scrag has advantage on melee attack rolls against any creature that\
      \ doesn't have all of its hp."
    "name": "Blood Frenzy"
  - "desc": "The greater scrag regains 10 hp at the start of its turn if it is in\
      \ contact with water. If the scrag takes acid or fire damage, this trait doesn't\
      \ function at the start of the scrag's next turn. The scrag dies only if it\
      \ starts its turn with 0 hp and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The greater scrag makes three attacks. one with its bite and two with\
      \ its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5)"
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (3d4 + 5)"
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/greater-scrag-ccodex.png"
```
^statblock

## Environment

swamp, underwater