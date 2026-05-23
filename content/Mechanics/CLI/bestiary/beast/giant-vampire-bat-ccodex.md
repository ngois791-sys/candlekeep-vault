---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Vampire Bat
---
# [Giant Vampire Bat](Mechanics\CLI\bestiary\beast/giant-vampire-bat-ccodex.md)
*Source: Creature Codex p. 50*  

*A great bat the size of a horse with black and brown fur. As it shrieks, its blood-caked muzzle reveals long, yellowed fangs.*

Some bats subsist on a diet of fresh blood. Unlike their smaller relatives, giant vampire bats are blessed by Camazotz and have no need to stalk sleeping prey. They are large enough to seize the blood they crave.

```statblock
"name": "Giant Vampire Bat (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "2"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 60 ft."
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The bat has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
  - "desc": "The bat can't use its blindsight while [deafened](Mechanics/CLI/rules/conditions.md#Deafened)."
    "name": "Echolocation"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage and the target\
      \ is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 13).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the bat can't bite another target. The bat regains hp equal to the necrotic\
      \ damage dealt."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/giant-vampire-bat-ccodex.png"
```
^statblock

## Environment

grassland, mountain, underground