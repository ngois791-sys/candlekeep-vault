---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nodosaurus
---
# [Nodosaurus](Mechanics\CLI\bestiary\beast/nodosaurus-ccodex.md)
*Source: Creature Codex p. 109*  

*The nodosaurus is a broad-backed, armor-plated herbivore with a gentle disposition. When provoked or attacked, it can turn and slap opponents with its tail, but its thick hide and the spikes protruding from its side discourage most would-be predators from anything more than a cursory look.*

Lizardfolk have long trained the dinosaurs as beasts of burden, and a single nodosaurus is capable of carrying nearly all of the material a migratory tribe could hope to bring along.

```statblock
"name": "Nodosaurus (CCodex)"
"size": "Large"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "14"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "30 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The nodosaurus has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in swampy terrain."
    "name": "Swamp Camouflage"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (2d8 + 3) bludgeoning damage."
    "name": "Tail"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/nodosaurus-ccodex.png"
```
^statblock

## Environment

grassland, swamp