---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Armory Golem
---
# [Armory Golem](Mechanics\CLI\bestiary\construct/armory-golem-ccodex.md)
*Source: Creature Codex p. 194*  

*A hulking construct of living weaponry shambles across the battlefield, punching a hole through the vanguard like a torrent of steel.*

These animated piles of weapons and armor can shore up the defenses of a beleaguered line of troops or serve as the point of attack against entrenched enemies.

## Wartime Wizard Ingenuity

Conjuration magic capable of raising the contents of an unattended weapons armory was born out of necessity during long sieges. War arcanists would find themselves defending locations that had exhausted their troops, leaving the arcanists with plenty of armaments and no one to wield them. Thus was born the armory golem.

## Walking Weapons

Armory golems resemble a pile of discarded swords, shields, and spears in a vaguely‑humanoid shape. Because they are literal moving armories, these golems have many weapons at their disposal. Soldiers have been known to resupply from an armory golem during battle.

## Focus Weapon

The armory golem's creation spell requires one weapon or piece of armor as the target of the magic. This item powers the rest of the golem and is located in the center of its body. Casters have conjured more powerful golems using enchanted weapons as the focus, and some have even created sentient armory golems by employing sentient magic items, though how the items feel about such employment varies.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Armory Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "10"
  - !!int "2"
"speed": "30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ Weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "7"
"traits":
  - "desc": "The objects that make up the golem's body can be removed or destroyed.\
      \ With the exception of the slam attack, an attacker can choose to disable one\
      \ of the armory golem's attacks on a critical hit. Alternatively, the attacker\
      \ can attempt to destroy the golem's focus instead of disabling one of its attacks."
    "name": "Armory Exploit"
  - "desc": "A creature grappling the armory golem can take its action to remove the\
      \ golem's focus by succeeding on a DC 15 Strength check. If its focus is removed\
      \ or destroyed, the armory golem must make a DC 8 Constitution saving throw\
      \ at the start of each of its turns. On a success, the golem continues working\
      \ properly, but it repeats the saving throw the next round at 1 higher DC. On\
      \ a failure, the golem dies, falling into a heap of armaments."
    "name": "Focus Weakness"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The armory golem makes any two weapon attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (1d12 + 5) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 11 (1d12 + 5) piercing damage."
    "name": "Polearm Strike"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 80/320 ft., one target. *Hit:*\
      \ 11 (2d8 + 2) piercing damage."
    "name": "Crossbow Barrage"
  - "desc": "The golem reconfigures its construction, moving shields and armor to\
      \ encase its body. It regains 10 hp, and its AC increases by 2 until the end\
      \ of its next turn."
    "name": "Shield Wall (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/armory-golem-ccodex.png"
```
^statblock

## Environment

urban