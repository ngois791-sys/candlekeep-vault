---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Storm Spirit
---
# [Storm Spirit](Mechanics\CLI\bestiary\elemental/storm-spirit-ccodex.md)
*Source: Creature Codex p. 350*  

*A floating figure made of crackling energy vibrates and shifts at an alarming rate. While the size of the creature is fixed, its form never seems to settle into a single shape.*

Storm spirits are primal guardians created from elemental energy. They are the manifested rage of nature come to destroy those who pollute and corrupt the land. As formless beings made of lightning and thunder, they serve a wide variety of masters, including storm lords (see page 139), elven enchanters (see page 143), and druids.

## Called by Druids

Druids can tap into the wrathful side of nature by performing a ritual to summon a group of storm spirits when they feel the laws of nature have been violated. These spirits feel an affinity for druids filled with righteous anger and serve until vengeance is done. The elementals can be called to aid in battles against undead, necromancy, pollution, harmful mining operations, and any grave injustice committed against the natural world. When the spirits are summoned, the druids give them the name of a person who becomes the hated quarry of the storm spirits.

## Cannot Be Stopped

Once a storm spirit has been given a quarry, it stops at nothing until that enemy or the elemental itself is destroyed. Druids must think carefully before summoning the storm spirit, for there is no way to call back the wrathful elemental once it has been given a target.

## Elemental Nature

A storm spirit doesn't require air, food, drink, or sleep.

```statblock
"name": "Storm Spirit (CCodex)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "11"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_immunities": "lightning, thunder"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Auran"
"cr": "1/2"
"traits":
  - "desc": "The spirit can move through a space as narrow as 1 inch wide without\
      \ squeezing. A creature that touches the spirit or hits it with a melee attack\
      \ while within 5 feet of it takes 2 (1d4) lightning and 2 (1d4) thunder\
      \ damage. In addition, the spirit can enter a hostile creature's space and stop\
      \ there. The first time it enters a creature's space on a turn, that creature\
      \ takes 2 (1d4) lightning and 2 (1d4) thunder damage. Any creature which\
      \ ends its turn in the same space as the spirit takes 2 (1d4) lightning and\
      \ 2 (1d4) thunder damage at the end of its turn."
    "name": "Storm Form"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) thunder damage."
    "name": "Thunder Slam"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 60/240 ft., one target. *Hit:*\
      \ 4 (1d4 + 2) lightning damage."
    "name": "Shocking Bolt"
  - "desc": "Each creature within 10 feet of the spirit must succeed on a DC 12 Dexterity\
      \ saving throw. On a failure, a creature takes 5 (2d4) lightning damage, 5\
      \ (2d4) thunder damage, is thrown 10 feet in a random direction, and is knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Tempest (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/storm-spirit-ccodex.png"
```
^statblock

## Environment

any