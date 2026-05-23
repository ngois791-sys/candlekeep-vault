---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fulad-zereh
---
# [Fulad-zereh](Mechanics\CLI\bestiary\fiend/fulad-zereh-ccodex.md)
*Source: Creature Codex p. 85*  

*An enormous horned demon with a hide the color of burnt blood, a fulad-zereh's body is encased in red armor that has blackened through the ages.*

## Abyssal Officers

Lieutenants of demon armies, fulad-zereh tower over their allies and enemies alike. Fulad‑zereh are violent and bloodthirsty demons who have fought for centuries to attain their forms and power, or who are elevated by demon lords during times of war.

## Marked for Service

The armor that bolsters a fulad-zereh is forged to reflect the demon lord to which it is bound. It has been said that some fulad-zereh will abandon their demon lords rather than being demoted after battle. These rogue demons forge their own terrifying, nightmarish armor and sell their services to those willing to pay in souls.

```statblock
"name": "Fulad-zereh (CCodex)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "[plate](Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "20"
  - !!int "17"
  - !!int "15"
  - !!int "17"
"speed": "40 ft., fly 40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "9"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "When a creature that can see the fulad-zereh's eyes starts its turn within\
      \ 30 feet of the demon, the fulad-zereh can force it to make a DC 16 Constitution\
      \ saving throw if the demon isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and can see the creature. If the saving throw fails by 5 or more, the creature\
      \ is instantly [petrified](Mechanics/CLI/rules/conditions.md#Petrified). Otherwise,\
      \ a creature that fails the saving throw begins to turn to stone and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The [restrained](Mechanics/CLI/rules/conditions.md#Restrained) creature must\
      \ repeat the saving throw at the end of its next turn, becoming [petrified](Mechanics/CLI/rules/conditions.md#Petrified)\
      \ on a failure or ending the effect on a success. The petrification lasts until\
      \ the creature is freed by the [greater restoration](Mechanics/CLI/spells/greater-restoration-xphb.md)\
      \ spell or similar magic.\n\nUnless surprised, a creature can avert its eyes\
      \ to avoid the saving throw at the start of its turn. If the creature does so,\
      \ it can't see the demon until the start of its next turn, when it can avert\
      \ is eyes again. If the creature looks at the demon, it must immediately make\
      \ the save."
    "name": "Petrifying Gaze"
  - "desc": "A creature that touches the fulad-zereh or hits it with a melee attack\
      \ while within 5 feet of it must succeed on a DC 16 Dexterity saving throw or\
      \ take 9 (2d8) acid damage."
    "name": "Weeping Acid"
"actions":
  - "desc": "The fulad-zereh makes two attacks. one with its barbed whip and one with\
      \ its battleaxe."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 30 ft., one target. *Hit:*\
      \ 14 (3d6 + 4) slashing damage, and, if the target is Large or smaller, it\
      \ is pulled up to 25 feet toward the demon. If the target is a creature other\
      \ than an undead or a construct, it must succeed on a DC 16 Constitution saving\
      \ throw or take 5 (1d10) necrotic damage at the start of each of its turns\
      \ as a barb of pure Abyssal energy lodges itself in the wound. Each time the\
      \ demon hits the barbed target with this attack, the damage dealt by the wound\
      \ each round increases by 5 (1d10). Any creature can take an action to remove\
      \ the barb with a successful DC 14 Wisdom ([Medicine](Mechanics/CLI/rules/skills.md#Medicine))\
      \ check. The barb crumbles to dust if the target receives magical healing."
    "name": "Barbed Whip"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (3d8 + 4) slashing damage."
    "name": "Battleaxe"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/fulad-zereh-ccodex.png"
```
^statblock

## Environment

planar