---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blood Zombie
---
# [Blood Zombie](Mechanics\CLI\bestiary\undead/blood-zombie-ccodex.md)
*Source: Creature Codex p. 393*  

*The bloody corpse shambles onward, its footsteps easy to follow. It is feared and ruthlessly hunted by the forces of light.*

A blood zombie has been infused with necromantic magic that gives it a semblance of life. A coating of flowing blood covers the zombie, making it appear as though a shower of crimson constantly pours down its body.

## Vampire Toys

Vampires find blood zombies highly entertaining and faintly obscene—but cannot seem to resist touching, licking, or even draining the creatures of some quantity of blood.

## Servants of Blood Cults

Not surprisingly, blood zombies are often created to serve blood mages (see page 397), priests of blood cults, or dark temples. In these cases, the blood zombies are often marked with an unholy symbol or compelled to participate in dark sacrifices.

## Undead Nature

The blood zombie doesn't require air, food, drink, or sleep.

```statblock
"name": "Blood Zombie (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d8 + 24"
"modifier": !!int "-2"
"stats":
  - !!int "16"
  - !!int "6"
  - !!int "18"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "2"
"traits":
  - "desc": "A creature that touches the zombie or hits it with a melee attack while\
      \ within 5 feet of it takes 4 (1d8) necrotic damage and the zombie gains temporary\
      \ hp equal to that amount as it drains blood from the victim. If the zombie\
      \ takes radiant damage or damage from a magic weapon, this trait doesn't function\
      \ at the start of the zombie's next turn, although it retains any temporary\
      \ hp it previously gained. It can add temporary hp gained from this trait to\
      \ temporary hp gained from its slam attack. Its temporary hp can't exceed half\
      \ its maximum hp."
    "name": "Blood Drain"
  - "desc": "If damage reduces the zombie to 0 hp, it must make a Constitution saving\
      \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
      \ a critical hit. On a success, the zombie drops to 1 hp instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d10 + 2) bludgeoning damage plus 4 (1d8) necrotic damage. The zombie\
      \ gains temporary hp equal to the necrotic damage taken."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/blood-zombie-ccodex.png"
```
^statblock

## Environment

any