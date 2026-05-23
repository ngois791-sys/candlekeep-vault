---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lost Minotaur
---
# [Lost Minotaur](Mechanics\CLI\bestiary\undead/lost-minotaur-ccodex.md)
*Source: Creature Codex p. 268*  

*The risen corpses of minotaurs who died while trapped in a labyrinth of any kind, lost minotaurs embody the anguish, rage, and humiliation of the worst deaths their people can imagine.*

## Pliable Malevolence

Motivated by an indiscriminate malice punctuated with a relentless hatred for any who survive an encounter with them, lost minotaurs may be swayed to track and kill specific prey. What it might desire in trade varies from creature to creature, but the prize usually involves an arranged hunt of some kind.

## Tales of Caution

Among minotaur communities, parents tell their children bloodcurdling tales of lost minotaurs to dissuade them from wandering into old, structurally unsound labyrinths. Tales of the nigh-unstoppable malice of these horrors find an audience most everywhere.

## Undead Nature

A lost minotaur doesn't require air, food, drink, or sleep.

> [!note] Lost Minotaurs in Midgard
> 
> A large number of lost minotaurs came into being after being trapped within their fortified labyrinths and then slowly starved out or slain by gas and necrotic attacks during the Mharoti invasions of minotaur lands three centuries past. Among the minotaur diaspora on the isle of Kyprion and elsewhere, tales of lost minotaurs within the Great Labyrinth in the ruins of Roshgazi abound. Similar tales are told of the old labyrinth of Cindass, though to a lesser degree. Intrepid treasure-seekers in these crumbled places of old magic often fall to the axes of the lost minotaurs.
^lost-minotaurs-in-midgard

```statblock
"name": "Lost Minotaur (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "18"
  - !!int "5"
  - !!int "12"
  - !!int "8"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "3"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "necrotic"
"damage_immunities": "cold, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "8"
"traits":
  - "desc": "If the lost minotaur moves at least 10 feet straight toward a target\
      \ and then hits it with a gore attack on the same turn, the target takes an\
      \ extra 13 (3d8) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 16 Strength saving throw or be pushed up to 10 feet away and knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "The lost minotaur has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The lost minotaur has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The lost minotaur can magically sense the presence of living creatures\
      \ within 1 mile away. It knows each creature's general direction but not exact\
      \ location."
    "name": "Sense Life"
"actions":
  - "desc": "The minotaur makes two twilight greataxe attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 18\
      \ (2d12 + 5) slashing damage and 9 (2d8) necrotic damage."
    "name": "Twilight Greataxe"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) piercing damage."
    "name": "Gore"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/lost-minotaur-ccodex.png"
```
^statblock

## Environment

underground