---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ancient Mandriano
---
# [Ancient Mandriano](Mechanics\CLI\bestiary\plant/ancient-mandriano-ccodex.md)
*Source: Creature Codex p. 261*  

*Despite its size, the twisted and gnarled tree-man moves precisely and quietly. It cloaks itself in a cape of darkness with only its pale face visible, lit by blue flame eyes.*

## Damned Fey

Mandrianos are a perversion of treants grown from soil defiled by ritual sacrifice. Bound to shepherd the undead, they ceaselessly wander their territories, collecting and tending their mindless charges. Beneath their billowing cloaks, their bodies have the gray color of driftwood. A mandriano's cloak is stitched from leaves of darkness and blows apart as if struck by a gale when the mandriano dies.

## Never Alone

Mandrianos work in pairs or small teams as they gather their flocks of undead and hunt for the living. They drain the essence of living creatures to feed themselves, their deceptively long arms allowing them to quickly snatch up prey.

```statblock
"name": "Ancient Mandriano (CCodex)"
"size": "Huge"
"type": "plant"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d12 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "8"
  - !!int "15"
  - !!int "12"
  - !!int "10"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+2"
"damage_vulnerabilities": "fire, necrotic, bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 13"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The ancient mandriano deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The ancient mandriano makes two swipe attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 15 ft., one target. *Hit:*\
      \ 15 (3d6 + 5) slashing damage. If the target is Medium or smaller, it is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 16). Until\
      \ this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ It can grapple up to three creatures."
    "name": "Swipe"
  - "desc": "As the mandriano, except the target must make a DC 16 Constitution saving\
      \ throw, taking 21 (6d6) necrotic damage on a failed save, or half as much\
      \ on a succes."
    "name": "Consume the Spark"
  - "desc": "The ancient mandriano animates one humanoid corpse within 60 feet. This\
      \ works like the animate dead spell, except it only creates zombies and the\
      \ zombies. The mandriano can control up to twenty zombies at one time."
    "name": "Call the Dead (3/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/ancient-mandriano-ccodex.png"
```
^statblock

## Environment

badlands