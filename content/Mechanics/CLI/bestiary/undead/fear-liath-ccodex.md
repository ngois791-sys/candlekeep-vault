---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fear Liath
---
# [Fear Liath](Mechanics\CLI\bestiary\undead/fear-liath-ccodex.md)
*Source: Creature Codex p. 152*  

*Echoing footsteps and brief glimpses reveal a tall, featureless gray figure that disappears as quickly as it appeared.*

The fear liath, sometimes referred to by superstitious locals as the Grayman, is a supernaturally thin, ten-foot-tall spectral giant that lurks in the passes between craggy mountain peaks. Graymen stalk travelers and take great pleasure in toying with their prey, typically by timing their footfalls half a step behind their quarry's. All who survive encounters with a fear liath tell of the sound of crunching mountain gravel only a few yards behind them—yet when they turned around, the form of their pursuer was hazy, gray, and utterly featureless.

## Freed by Slaughter

Fear liaths were once mortals and are bound to the Material Plane by a hex known as the Gray Curse. A humanoid slain by a fear liath becomes a Grayman itself, and the fear liath who passed the curse is free to move on to the afterlife. The origin of the first fear liaths is a mystery distorted by millennia of oral legend, but most tellers agree on one detail: the first fear liaths were vain human mountaineers who angered the god of the sun and were cursed to walk the earth as shadows, unable to be seen by other creatures for the rest of existence.

## Undead Nature

The fear liath doesn't require air, food, drink, or sleep.

```statblock
"name": "Fear Liath (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d10"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "10"
  - !!int "8"
  - !!int "14"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "The languages it knew in life"
"cr": "2"
"traits":
  - "desc": "If [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) is cast\
      \ upon a fear liath, it is instantly destroyed. In addition, if the fear liath\
      \ kills a humanoid creature, the fear liath is destroyed and the humanoid it\
      \ killed rises as a fear liath in 1d4 hours. If [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ is cast upon the cursed humanoid before it becomes a fear liath, the curse\
      \ is broken."
    "name": "Gray Curse"
  - "desc": "The fear liath becomes incorporeal and appears as a dark gray shadow\
      \ while any living creature looks directly at it. While incorporeal, it can\
      \ move through other creatures and objects as if they were difficult terrain.\
      \ It takes 5 (1d10) force damage if it ends its turn inside an object. While\
      \ incorporeal, it also gains resistance to acid, fire, lightning, and thunder\
      \ damage, and bludgeoning, piercing, and slashing damage from nonmagical attacks.\
      \ The fear liath has no control over this trait.\n\nUnless surprised, a creature\
      \ can avert its eyes to avoid looking directly at the fear liath at the start\
      \ of its turn. If the creature does so, it can't see the fear liath until the\
      \ start of its next turn, when it can avert its eyes again. If a creature looks\
      \ at the fear liath, the fear liath becomes incorporeal."
    "name": "Unwatchable"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage. The target must succeed on a DC 13 Constitution\
      \ saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) for\
      \ 1 minute. It can repeat this saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/fear-liath-ccodex.png"
```
^statblock

## Environment

mountain