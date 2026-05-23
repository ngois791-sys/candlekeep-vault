---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spree
---
# [Spree](Mechanics\CLI\bestiary\fiend/spree-ccodex.md)
*Source: Creature Codex p. 91*  

*This wild gnome's shaggy hair is matted on one side with blood. It has razorlike claws, and its teeth are filed to points.*

Gnomes who die while succumbing to vile, homicidal desires sometimes return as murderous, demonic creatures.

## Instigators of Madness

Spree demons have a similar appearance to gnomes, but they look even more deranged. They seek to infect others with their murderous desires and inflict curses on those they harm. A single spree demon can incite violence that cripples a city for weeks, but they prefer to group up to spread mayhem all the quicker.

```statblock
"name": "Spree (CCodex)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "84"
"hit_dice": "13d6 + 39"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "17"
  - !!int "16"
  - !!int "10"
  - !!int "8"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "2"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Common, Gnomish, Abyssal"
"cr": "5"
"traits":
  - "desc": "The spree demon has advantage on attacks if it saw another spree demon\
      \ make a successful attack within the last minute."
    "name": "Frothing Rage"
  - "desc": "If a creature confused by the spree demon's claw attack reduces a target\
      \ to 0 hp, the confused creature must make a successful DC 14 Wisdom saving\
      \ throw or gain a short-term madness (see the System Reference Document 5.1).\
      \ If a creature fails this saving throw again while already suffering from a\
      \ madness, it gains a long-term madness instead."
    "name": "Spree Madness"
"actions":
  - "desc": "The spree demon makes two claw attacks. If both attacks hit the same\
      \ target, the target must succeed on a DC 14 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. While [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ this way, the creature believes it has shrunk to half its normal size. All\
      \ attacks against the creature do an extra 7 (2d6) psychic damage, and the\
      \ creature's attacks do half damage. A [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage plus 10 (3d6) poison damage, and the creature\
      \ must make a DC 14 Constitution saving throw. On a failure, the target can't\
      \ take reactions and must roll a d10 at the start of each of its turns to\
      \ determine its behavior for that turn for 1 minute. This works like the confusion\
      \ spell. The target can repeat the saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success. If a creature's saving throw is\
      \ successful or the effect ends for it, the creature is immune to this effect\
      \ for the next 24 hours."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/spree-ccodex.png"
```
^statblock

## Environment

urban