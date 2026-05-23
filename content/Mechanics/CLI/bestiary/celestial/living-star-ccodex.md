---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Living Star
---
# [Living Star](Mechanics\CLI\bestiary\celestial/living-star-ccodex.md)
*Source: Creature Codex p. 256*  

*A huge, glowing figure of churning, crackling energy bobs curiously above the battle, watching two warriors attack each other with sword and spear. The battle comes to a swift end when the figure flares, and both warriors slump to the ground, senseless.*

## Born of the Sun.

As the sun moves across the sky, it sheds smalls bits of itself. Most of these motes of solar energy die out within days, burning themselves to oblivion. But on rare occasions, these bits of star stuff last long enough to gain sentience. They become living stars.

## The Life of a Living Star

Living stars begin as young and immature balls of energy. They roam the heavens, observing the worlds below them. Based on those observations and interactions, they take on personalities and represent larger themes and domains—not unlike gods. The living stars may even insert themselves into the mortal realm, gaining worshippers and interfering in the lives of the creatures of the world.

## Radiant Nature

A living star doesn't require air, food, drink, or sleep.

```statblock
"name": "Living Star (CCodex)"
"size": "Huge"
"type": "celestial"
"alignment": "Any alignment"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"modifier": !!int "6"
"stats":
  - !!int "24"
  - !!int "22"
  - !!int "21"
  - !!int "21"
  - !!int "19"
  - !!int "22"
"speed": "0 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "12"
  - "constitution": !!int "11"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+12"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison, radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 20"
"languages": "Common, Celestial"
"cr": "19"
"traits":
  - "desc": "The living star has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "As a bonus action, the living star can change its size. This trait works\
      \ like the enlarge/reduce spell, except it deals 2d4 extra damage when enlarged\
      \ and 2d4 less damage when reduced."
    "name": "Resize"
  - "desc": "A creature that starts its turn within 30 feet of the living star must\
      \ make a DC 19 Intelligence saving throw. On a failed save, the creature is\
      \ [blinded](Mechanics/CLI/rules/conditions.md#Blinded) for 1 minute. If a creature's\
      \ saving throw is successful or the effect ends for it, the creature is immune\
      \ to the living star's Starshine for the next 24 hours."
    "name": "Starshine"
  - "desc": "When a living star dies, it erupts, and each creature within 30 feet\
      \ of it must make a DC 19 Dexterity saving throw, taking 56 (16d6) radiant\
      \ damage on a failed save, or half as much damage on a successful one. A creature\
      \ reduced to 0 hp by this damage dies."
    "name": "Supernova"
"actions":
  - "desc": "The living star makes three starflare attacks. It can use its Silvered\
      \ Ray in place of one starflare attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (3d8 + 7) bludgeoning damage plus 14 (4d6) radiant damage."
    "name": "Starflare"
  - "desc": "*Ranged Spell Attack:* +12 to hit, range 150 ft., one target. *Hit:*\
      \ 28 (4d10 + 6) radiant damage, and the target must succeed on a DC 19 Charisma\
      \ saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until\
      \ the end of its next turn."
    "name": "Silvered Ray"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/living-star-ccodex.png"
```
^statblock

## Environment

any