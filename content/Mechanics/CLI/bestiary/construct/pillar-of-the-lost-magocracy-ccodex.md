---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pillar of the Lost Magocracy
---
# [Pillar of the Lost Magocracy](Mechanics\CLI\bestiary\construct/pillar-of-the-lost-magocracy-ccodex.md)
*Source: Creature Codex p. 299*  

*This pale gray, angular, stone column dominates the horizon, eldritch sigils decorating its surface. As night descends, these glyphs glow with an unearthly pinkish-white light.*

## Hazards of the Wastes

These strange pillars date back to ancient wizard kingdoms destroyed in ancient arcane wars. Each holds the insane spirit of a wizard slain during the wars. Most of the time, these spirits are half-asleep, and the pillars act as hazards, discharging magical energy at sunset and sunrise.

## Awakened Spirits

When the stars are right, however, the spirit of the ancient mage within the pillar awakens. Sworn to defend its magocracy, the spirit views nearby creatures as agents of a rival magocracy. The pillar's sigils glow brightly as it unleashes warped magic on nearby creatures.

> [!note] Pillars of the Lost Magocracy in Midgard
> 
> These bizarre columns are all that is left of Uxloon, one of the nine ancient magocracies of the Wasted West. Uxloon was destroyed in the Great Mage Wars by the terrifying Walker Pah'draguusthlai, who was summoned by Enkada Pishtuhk. The pillars are either the animated gravestones of Uxloon's council of wizards, or perhaps creations of the dust goblin (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) shamans or [void speakers](Mechanics/CLI/bestiary/humanoid/void-speaker-ccodex.md).
^pillars-of-the-lost-magocracy-in-midgard

```statblock
"name": "Pillar of the Lost Magocracy (CCodex)"
"size": "Huge"
"type": "construct"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d12 + 12"
"modifier": !!int "-5"
"stats":
  - !!int "9"
  - !!int "1"
  - !!int "13"
  - !!int "18"
  - !!int "8"
  - !!int "13"
"speed": "0 ft."
"saves":
  - "constitution": !!int "3"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 9"
"languages": "Understands Common but can't speak, telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "The pillar uses its Intelligence instead of its Dexterity to determine\
      \ its place in the initiative order."
    "name": "Mental Agility"
  - "desc": "A creature that touches the pillar or hits it with a melee attack while\
      \ within 5 feet of it takes 3 (1d6) lightning damage."
    "name": "Shocking Vengeance"
"actions":
  - "desc": "The pillar of lost magocracy unleashes a random magical attack on a target\
      \ or area within 120 feet. Roll a d4 to determine the effect.\n\n- **Mutant\
      \ Plants..** Grasping tendrils of alien vegetation sprout from the ground in\
      \ a 20-foot radius centered on a point the pillar can see within 120 feet. The\
      \ area becomes difficult terrain, and each creature in the area must succeed\
      \ on a DC 14 Strength saving throw or become [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ Treat as an entangle spell, except it only lasts for 2d4 rounds.  \n- **Acid\
      \ Rain..** Corrosive acid falls from the sky centered on a point the pillar\
      \ can see within 120 feet. Each creature in a 20-foot-radius, 40-foot-high cylinder\
      \ must make a DC 14 Dexterity saving throw, taking 13 (3d8) acid damage on\
      \ a failed save, or half as much damage on a successful one.  \n- **Noxious\
      \ Cloud..** The pillar creates a 20-foot-radius sphere of reddish, stinging\
      \ mist centered on a point it can see within 120 feet. The area is heavily obscured,\
      \ and each creature inside the cloud at the start of its turn must make a DC\
      \ 14 Constitution saving throw. On a failed save, the creature takes 13 (3d8)\
      \ poison damage and is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the start of its next turn. On a success, the creature takes half the\
      \ damage and isn't [blinded](Mechanics/CLI/rules/conditions.md#Blinded). The\
      \ cloud lasts for 1d4 rounds.  \n- **Shrinking Ray..** A bright green ray\
      \ strikes a single creature within 120 feet. The creature must succeed on a\
      \ DC 14 Constitution saving throw or be shrunk to half its size. Treat as an\
      \ enlarge/reduce spell, except it lasts for 2d4 rounds.  "
    "name": "Anger of the Ancient Mage"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/pillar-of-the-lost-magocracy-ccodex.png"
```
^statblock

## Environment

badlands