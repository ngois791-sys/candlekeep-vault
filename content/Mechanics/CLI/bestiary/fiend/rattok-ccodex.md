---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Rattok
---
# [Rattok](Mechanics\CLI\bestiary\fiend/rattok-ccodex.md)
*Source: Creature Codex p. 90*  

*Wearing filthy hoods to hide their snouts, these small, ratlike demons squeaked with delight as they tore apart the innkeeper's cat. Everything they left behind was dead, injured, or befouled with their urine and scat.*

Thoroughly gross and decadent, rattok demons sport patchy fur, sharp whiskers, notched ears, dangling charms and amulets, and long claws. They delight in manipulating souls and are fond of both necrotic energy and pure flames.

## Servants of Chittr'k'k

Often called rat demons, the rattok do serve [Chittr'k'k, Demon Lord of Rats](Mechanics/CLI/bestiary/fiend/chittrkk-demon-lord-of-rats-ccodex.md), though many also serve other demons. They are greasy, sneering, smug and horrible bullies to lesser demons and enjoy tormenting those they catch. At the same time, they are complete toadies to larger and more powerful demons—though bold enough to sometimes play tricks on their masters. They spend most of their time in narrow tunnels, sewers, and caverns of the Abyss.

## Necrotic Connoisseurs

Rattok demons collect, bottle, and often distill and flavor souls, trading them and generating abhorrent bottled spirits from them. These bottled souls resemble potions. Consuming a bottled soul destroys a portion of a living soul and floods the drinker's mind with some of the soul's memories.

## Mishappen Claws, Black Hearts

A rattok demon's peculiar claws are a visible sign of its foulness, but its true evil lies within. Rattoks are famous as torturers, cannibals, slavers, and connivers—they constantly strive to outdo one another in vileness, and, among demonkind, they are known for their especially inventive evil deeds.

```statblock
"name": "Rattok (CCodex)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d6 + 24"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "6"
  - !!int "9"
"speed": "30 ft., swim 20 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, lightning"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Common, Abyssal"
"cr": "4"
"traits":
  - "desc": "As a bonus action, the rattok demon consumes one of the bottled souls\
      \ in its possession, regaining 7 (2d4 + 2) hp and gaining advantage on all\
      \ attack rolls and ability checks for 1 round. Any non-fiend who consumes a\
      \ bottled soul regains 7 (2d4 + 2) hit points and must make a DC 14 Constitution\
      \ saving throw. On a failure, the creature is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ for 1 round and [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) for\
      \ 1 hour. On a success, the creature is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour."
    "name": "Bottled Soul (3/Day)"
  - "desc": "Whenever the rattok demon is subjected to fire or necrotic damage, it\
      \ takes no damage and instead is unaffected by spells and other magical effects\
      \ that would impede its movement. This trait works like the freedom of movement\
      \ spell, except it only lasts for 1 minute."
    "name": "Fire Dancer"
  - "desc": "The rattok has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The rattok makes three attacks. one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage plus 3 (1d6) necrotic damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage."
    "name": "Claws"
  - "desc": "The rattok unleashes a wave of shadowy versions of itself that fan out\
      \ and rake dark claws across all creatures within 15 feet. Each creature in\
      \ that area must make a DC 13 Dexterity saving throw, taking 14 (4d6) necrotic\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Necrotic Rush (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/rattok-ccodex.png"
```
^statblock

## Environment

any