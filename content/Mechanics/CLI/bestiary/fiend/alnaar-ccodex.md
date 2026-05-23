---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alnaar
---
# [Alnaar](Mechanics\CLI\bestiary\fiend/alnaar-ccodex.md)
*Source: Creature Codex p. 82*  

*The creature resembles a great blackened asp with smoldering skin and white-hot serpentine eyes. It slithers as confidently through the air as across the ground.*

## Serpent of Suffering

Alnaar demons appear most commonly when a people, race, or species is experiencing suffering. There to hasten the process, the alnaar erupts from the Abyss, leaving massive holes in the firmament of the afflicted cities and towns. The alnaar's only wish is to partake in the suffering of others, and it thrives on tormenting those already beset by tragedy. Disease, calamity, misfortune, and disaster are dinner bells to the alnaar.

## Devourers

These demons have an insatiable appetite, and a single alnaar has been known to devour a cattle herd in minutes. Alnaar who have not eaten recently become weakened and desperate. Some evil warlocks make pacts with alnaar demons, offering piles of meat for service as guardians or assassins.

## Demonic Mounts

When war rages across the Abyss, the great fiery serpents sometimes serve as mounts for powerful demons. A lord of the Abyss streaking through the skies atop the slithering alnaar terrorizes all but the most stalwart foe.

```statblock
"name": "Alnaar (CCodex)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "212"
"hit_dice": "25d10 + 75"
"modifier": !!int "6"
"stats":
  - !!int "20"
  - !!int "22"
  - !!int "17"
  - !!int "9"
  - !!int "12"
  - !!int "10"
"speed": "40 ft., burrow 20 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "7"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_vulnerabilities": "cold"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Abyssal"
"cr": "9"
"traits":
  - "desc": "A creature that starts its turn within 5 feet of the alnaar must make\
      \ a DC 16 Constitution saving throw, taking 14 (4d6) fire damage on a failed\
      \ save, or half as much damage on a successful one. A creature that touches\
      \ the alnaar or hits it with a melee attack while within 5 feet of it takes\
      \ 7 (2d6) fire damage. Nonmagical weapons and objects with Armor Class 15\
      \ or lower are immediately destroyed after coming into contact with the alnaar's\
      \ skin. Weapons that hit the alnaar deal their damage before being destroyed.\
      \ This trait is suppressed if the alnaar is starving."
    "name": "Skin of the Forge"
  - "desc": "If an alnaar hasn't fed on a Medium-sized or larger creature within the\
      \ last 12 hours, it is starving. While starving, the alnaar's Armor Class is\
      \ reduced by 2, it has advantage on melee attack rolls against any creature\
      \ that doesn't have all of its hp, and will direct its attacks at a single foe\
      \ regardless of tactical consequences. Once it feeds on a Medium-sized or larger\
      \ corpse or brings a Medium-sized or larger creature to 0 hp, it is no longer\
      \ starving."
    "name": "Starving Wrath"
"actions":
  - "desc": "The alnaar makes three fiery fangs attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d8 + 5) piercing damage and 3 (1d6) fire damage."
    "name": "Fiery Fangs"
  - "desc": "The alnaar becomes super-heated, expelling momentous energy outwards\
      \ in a 20-foot radius blast around it. Each creature caught in the blast must\
      \ make a DC 17 Dexterity saving throw. On a failed save, a creature takes 22\
      \ (4d10) fire damage and 22 (4d10) force damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, a creature takes half the fire and force damage but isn't knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). The fire ignites flammable\
      \ objects that aren't being worn or carried. After using Flare, the alnaar is\
      \ starving. It can't use Flare if it is starving."
    "name": "Flare (Recharge Special)"
"reactions":
  - "desc": "When a creature the alnaar can see moves, the alnaar can move up to 20\
      \ feet toward the moving creature. If the alnaar moves within 10 feet of that\
      \ creature, it can make one fiery fangs attack against the creature."
    "name": "On the Hunt"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/alnaar-ccodex.png"
```
^statblock

## Environment

planar