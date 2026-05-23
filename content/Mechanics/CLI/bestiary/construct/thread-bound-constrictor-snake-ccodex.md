---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thread-bound Constrictor Snake
---
# [Thread-bound Constrictor Snake](Mechanics\CLI\bestiary\construct/thread-bound-constrictor-snake-ccodex.md)
*Source: Creature Codex p. 353*  

*The beautiful snake woven into the rug begins to shift and slide as if slithering. It grows larger and springs from the surface of the rug.*

Found on tapestries and rugs, thread-bound constructs are created with magic that infuses textiles with the essence of a once-living creature. They appear mundane until triggered, at which point the pattern comes to life.

## Thread-Bound

When killed, the creature vanishes, reappearing upon the textile to which it is bound in a death pose. At the next dawn, it again assumes its living pattern and can be triggered again. If the textile is destroyed while the pattern of the creature is on it, the creature is also destroyed. Otherwise, damage to the textile does not harm the creature. If the creature is killed and the textile has been destroyed, the creature is permanently destroyed

## Construct Nature

The thread-bound construct doesn't require air, food, drink, or sleep.

> [!note] Thread-Bound Construct Template
> 
> Only a beast or monstrosity can be made into a thread-bound construct. To create one, a spellcaster ritually sacrifices a living creature over a textile's materials. The creator must then meditate over the newly woven textile for a week, setting the conditions that trigger the creature, like the conditions in the [glyph of warding](Mechanics/CLI/spells/glyph-of-warding-xphb.md) spell. When a creature becomes a thread-bound construct, it retains all its statistics except as noted below.
> 
> **Type**. The creature's type changes to construct, and it no longer requires air, food, drink, or sleep.
> 
> **Senses**. The construct gains darkvision 60 feet. Resistances. The construct gains resistance to bludgeoning, piercing, and slashing from nonmagical attacks.
> 
> **Immunities**. The construct gains immunity to poison damage and to the charmed, exhaustion, frightened, paralyzed, petrified, and poisoned conditions.
> 
> **Languages**. The construct understands the languages of its creator but can't speak.
> 
> **Antimagic Susceptibility**. As the thread-bound constrictor snake.
> 
> **Immutable Form**. As the thread-bound constrictor snake.
> 
> **Magic Weapons**. As the thread-bound constrictor snake.
> 
> **Shifting Form**. As the thread-bound constrictor snake.
^thread-bound-construct-template

```statblock
"name": "Thread-bound Constrictor Snake (CCodex)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "12"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "3"
"traits":
  - "desc": "The snake is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ while in the area of an antimagic field. If targeted by [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ the snake must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or return to the textile to which it is bound for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "The snake is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The snake's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The snake can enter a hostile creature's space and stop there. It can\
      \ move through a space as narrow as 1 inch wide without squeezing."
    "name": "Shifting Form"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:*\
      \ 13 (2d8 + 4) bludgeoning damage and the creature is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the snake can't constrict another target."
    "name": "Constrict"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/thread-bound-constrictor-snake-ccodex.png"
```
^statblock

## Environment

urban