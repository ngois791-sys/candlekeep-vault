---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Megapede
---
# [Megapede](Mechanics\CLI\bestiary\monstrosity/megapede-ccodex.md)
*Source: Creature Codex p. 266*  

*A massive centipede lifts the upper half of its body off the ground, legs thrashing. Acid drips from hungry mandibles stained with liquid metal.*

Megapedes are fifteen-foot-long insects that roam underground areas in search of ore to devour. They are particularly fond of softer precious metals.

## Mine Destroyers

Megapedes invade active mines, forcing miners to retreat from their acid-spitting mouths. Ousting an invading megapede becomes a top priority, since the insect eats every vein of ore available. Dwarves train special squads that wear hide armor and wield glass weapons to fight the beasts.

## Taste for Gold

Megapedes prefer the taste of copper, silver, gold, and platinum to other metals. If a morsel of such a metal is nearby, the insect tastes it in the air and abandons all other meals until it can find and consume the treat. Adventurers venturing into megapede lairs should be careful what they carry.

```statblock
"name": "Megapede (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "15"
  - !!int "2"
  - !!int "7"
  - !!int "3"
"speed": "40 ft., climb 40 ft."
"damage_immunities": "acid"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The megapede can sense any metal within 600 feet of it. It knows the\
      \ direction to the metal and can identify the specific type of metal within\
      \ the area."
    "name": "Metal Sense"
"actions":
  - "desc": "The megapede makes one stinger attack and one bite attack. It can use\
      \ its Consume Metal in place of its bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a\
      \ Large or smaller creature, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 13). Until this grapple ends, the megapede has advantage on attacks\
      \ against the [grappled](Mechanics/CLI/rules/conditions.md#Grappled) target,\
      \ and it can't make bite attacks against another target."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (1d10 + 3) piercing damage and the target must make a DC 13 Constitution\
      \ saving throw or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute."
    "name": "Stinger"
  - "desc": "The megapede consumes one unattended Medium or smaller metal object or\
      \ attempts to consume a metal object worn or held by the creature it is grappling.\
      \ The [grappled](Mechanics/CLI/rules/conditions.md#Grappled) creature must succeed\
      \ on a DC 13 Strength saving throw or the object is consumed. If the object\
      \ is a magic item, the creature has advantage on the saving throw. Magic items\
      \ consumed by the megapede stay intact in its stomach for 1d4 hours before\
      \ they are destroyed."
    "name": "Consume Metal"
  - "desc": "The megapede spits acid in a line that is 30 feet long and 5 feet wide,\
      \ provided that it has no creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled).\
      \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
      \ 18 (4d8) acid damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Acid Spray (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/megapede-ccodex.png"
```
^statblock

## Environment

mountain, underground