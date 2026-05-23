---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mandriano
---
# [Mandriano](Mechanics\CLI\bestiary\plant/mandriano-ccodex.md)
*Source: Creature Codex p. 261*  

*Despite its size, the twisted and gnarled tree-man moves precisely and quietly. It cloaks itself in a cape of darkness with only its pale face visible, lit by blue flame eyes.*

## Damned Fey

Mandrianos are a perversion of treants grown from soil defiled by ritual sacrifice. Bound to shepherd the undead, they ceaselessly wander their territories, collecting and tending their mindless charges. Beneath their billowing cloaks, their bodies have the gray color of driftwood. A mandriano's cloak is stitched from leaves of darkness and blows apart as if struck by a gale when the mandriano dies.

## Never Alone

Mandrianos work in pairs or small teams as they gather their flocks of undead and hunt for the living. They drain the essence of living creatures to feed themselves, their deceptively long arms allowing them to quickly snatch up prey.

```statblock
"name": "Mandriano (CCodex)"
"size": "Large"
"type": "plant"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"modifier": !!int "-2"
"stats":
  - !!int "15"
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+1"
"damage_vulnerabilities": "fire, necrotic, bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Understands Common, Sylvan but can't speak"
"cr": "5"
"actions":
  - "desc": "The mandriano makes two swipe attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) slashing damage. If the target is Medium or smaller, it is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 14). Until\
      \ this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ It can grapple up to three creatures."
    "name": "Swipe"
  - "desc": "The mandriano drains the essence of one [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ target. The target must make a DC 14 Constitution saving throw, taking 13\
      \ (4d6) necrotic damage on a failed save, or half as much damage on a successful\
      \ one. The target's hp maximum is reduced by an amount equal to the necrotic\
      \ damage taken, and the mandriano regains hp equal to that amount. The reduction\
      \ lasts until the target finishes a long rest. The target dies if this effect\
      \ reduces its hp maximum to 0. A humanoid slain in this way rises 24 hours later\
      \ as a zombie or skeleton under the mandriano's control, unless the humanoid\
      \ is restored to life or its body is destroyed. The mandriano can control up\
      \ to twelve undead at one time."
    "name": "Consume the Spark"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/mandriano-ccodex.png"
```
^statblock

## Environment

badlands, forest