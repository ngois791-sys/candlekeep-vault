---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gloomflower
---
# [Gloomflower](Mechanics\CLI\bestiary\plant/gloomflower-ccodex.md)
*Source: Creature Codex p. 188*  

*A tiny flower with shining black petals sways lightly on its thorny stem.*

## Corpse Blooms

Gloomflowers are tiny blooms that thrive in the umbral light of the Shadow Realm. When a wanderer dies or goes mad within the darkness, a single gloomflower blooms in the shadow of its corpse. Some shadow fey say that the tortured mind of that creature now inhabits the ebon petals of the gloomflower, the air around the flower humming with its silent screams.

```statblock
"name": "Gloomflower (CCodex)"
"size": "Tiny"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "44"
"hit_dice": "8d4 + 24"
"modifier": !!int "-2"
"stats":
  - !!int "10"
  - !!int "6"
  - !!int "16"
  - !!int "1"
  - !!int "6"
  - !!int "18"
"speed": "10 ft."
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 120 ft., passive\
  \ Perception 8"
"languages": "Understands but can't speak, telepathy 120 ft."
"cr": "3"
"traits":
  - "desc": "Creatures have disadvantage on attack rolls against the gloomflower.\
      \ An attacker is immune to this effect if it doesn't rely on sight, as with\
      \ blindsight, or can see through illusions, as with truesight."
    "name": "Blur"
  - "desc": "Whenever the gloomflower takes damage, each creature within 10 feet of\
      \ the gloomflower must succeed on a DC 14 Wisdom saving throw or take 7 (2d6)\
      \ psychic damage."
    "name": "Psychic Scream"
"actions":
  - "desc": "The gloomflower makes two psychic strike attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +6 to hit, range 120 ft., one target. *Hit:*\
      \ 10 (3d6) psychic damage."
    "name": "Psychic Strike"
  - "desc": "Each creature of the gloomflower's choice that is within 60 feet of the\
      \ gloomflower and aware of it must make a DC 14 Wisdom saving throw. On a failure,\
      \ a creature is bombarded with visions of its fears and anxieties for 1 minute.\
      \ While bombarded, it takes 7 (2d6) psychic damage at the start of each of\
      \ its turns and must spend its action to make one melee attack against a creature\
      \ within 5 feet of it, other than the gloomflower or itself. If the creature\
      \ can't make a melee attack, it takes the [Dodge](Mechanics/CLI/rules/actions.md#Dodge)\
      \ action. The creature can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success. On a success, a creature\
      \ is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) by hallucinations\
      \ until the end of its next turn but isn't bombarded with visions of its fears\
      \ and anxieties.\n\nA creature that is reduced to 0 hp by this psychic damage\
      \ falls [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious) and is\
      \ stable. When that creature regains consciousness, it suffers permanent hallucinations\
      \ and has disadvantage on ability checks until cured by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or similar magic."
    "name": "Corrupting Visions (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/gloomflower-ccodex.png"
```
^statblock

## Environment

planar