---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Nightgaunt
---
# [Nightgaunt](Mechanics\CLI\bestiary\aberration/nightgaunt-ccodex.md)
*Source: Creature Codex p. 277*  

*The terrible outline of something noxiously thin and bat-winged descends silently from above—a faceless black being with smooth, whale-like skin and horns that curve toward each other. Its barbed tail lashes needlessly as it clutches the air with ugly prehensile paws.*

## Silent Malevolence

Nightgaunts never speak or smile, having only a suggestive blankness where a face ought to be. The beating of a nightgaunt's membranous wings makes no sound; nor does the tickling grasp of its cold, rubbery paws.

## Nightmare Servitors

These mindless aberrations are creations of an elder god of the Great Abyss, who wages inter‑dimensional war with various gods and horrors of the Outer Void. Nightgaunts serve as the advance guard and battle steeds of the ghouls that inhabit the darkest corners of the Shadow Realm and realms of pure dream and fancy. On occasion, they ally themselves with humans and the forces of light against greater chaos and particularly hated demon lords. Such alliances last only so long as is necessary to restore the rule of law and burn out all corruption from a place. Once this is accomplished, they sometimes leave, satisfied in their work, and other times remain to attack the wounded forces of good.

## Void Traveler

The nightgaunt doesn't require air, food, drink, or ambient pressure.

```statblock
"name": "Nightgaunt (CCodex)"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "17"
  - !!int "18"
  - !!int "4"
  - !!int "16"
  - !!int "16"
"speed": "20 ft., fly 60 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+11"
"damage_resistances": "necrotic, bludgeoning"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 120 ft., passive\
  \ Perception 17"
"languages": "Understands Common, Abyssal but can't speak"
"cr": "10"
"traits":
  - "desc": "The nightgaunt doesn't provoke an opportunity attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
  - "desc": "The nightgaunt has advantage on attack rolls against a creature if at\
      \ least one of the nightgaunt's allies is within 5 feet of the creature and\
      \ the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "The nightgaunt has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The nightgaunt doesn't make a sound and has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks."
    "name": "Utterly Silent"
"actions":
  - "desc": "The nightgaunt can use its Baneful Presence. It then makes three attacks.\
      \ two with its clutching claws and one with its barbed tail. If the nightgaunt\
      \ is grappling a creature, it can use its barbed tail one additional time."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) slashing damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16) if it is a Medium or smaller creature. Until this grapple ends,\
      \ the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The nightgaunt has two claws, each of which can grapple only one target. While\
      \ using a claw to grapple, the nightgaunt can't use that claw to attack."
    "name": "Clutching Claws"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage plus 10 (3d6) poison damage."
    "name": "Barbed Tail"
  - "desc": "Each creature of the nightgaunt's choice that is within 30 feet of the\
      \ nightgaunt and aware of it must succeed on a DC 16 Wisdom saving throw or\
      \ have disadvantage on all attack rolls and saving throws for 1 minute. A creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If a creature's saving throw is successful or the\
      \ effect ends for it, the creature is immune to the nightgaunt's Baneful Presence\
      \ for the next 24 hours."
    "name": "Baneful Presence"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/nightgaunt-ccodex.png"
```
^statblock

## Environment

planar