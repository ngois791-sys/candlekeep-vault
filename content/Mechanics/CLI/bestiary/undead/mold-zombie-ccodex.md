---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mold Zombie
---
# [Mold Zombie](Mechanics\CLI\bestiary\undead/mold-zombie-ccodex.md)
*Source: Creature Codex p. 395*  

*Black pustules cover a shambling corpse. The zombie lets out a baleful moan, breathing a cloud of black spores.*

Mold zombies are undead created by necromantic spores. They serve no masters and have no desires other than spreading their infection.

## Spore Infection

Mold zombies are created when a humanoid inhales the spores of an iumenta flower, a red-vined, black-petaled swamp plant that smells of rotting flesh. Once inhaled, the host contracts iumenta pox. The spores quickly shut down internal organs while growing into the muscles and the brain. When the host dies, the spores reanimate the corpse into a mold zombie.

## Spread the Spores

Mold zombies are controlled by their spores, which seek to infect more humanoids. When a zombie sees a potential host, it fights to the death, hoping to kill infected creatures so it can immediately rise as an undead. Mold zombies attract other mold zombies and move in large groups.

## Undead Nature

The mold zombie doesn't require air, food, drink, or sleep

```statblock
"name": "Mold Zombie (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "-1"
"stats":
  - !!int "17"
  - !!int "8"
  - !!int "16"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "20 ft."
"saves":
  - "strength": !!int "5"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "3"
"traits":
  - "desc": "When the zombie is reduced to 0 hp and doesn't survive with its Undead\
      \ Fortitude, it explodes in a cloud of spores. Each creature within 5 feet of\
      \ the zombie must succeed on a DC 13 Constitution saving throw or take 9 (2d8)\
      \ necrotic damage and contract iumenta pox (see Iumenta Pox sidebar)."
    "name": "Spore Death"
  - "desc": "If damage reduces the zombie to 0 hp, it must make a Constitution saving\
      \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
      \ a critical hit. On a success, the zombie drops to 1 hp instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The zombie makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage plus 7 (2d6) necrotic damage."
    "name": "Slam"
  - "desc": "The zombie breathes a cloud of spores in 15-foot cone. Each creature\
      \ in that area must succeed on a DC 13 Constitution saving throw or take 10\
      \ (3d6) necrotic damage and contract iumenta pox (see Iumenta Pox sidebar)."
    "name": "Plague Breath (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/mold-zombie-ccodex.png"
```
^statblock

## Environment

swamp