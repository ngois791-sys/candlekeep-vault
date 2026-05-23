---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Korrigan
---
# [Korrigan](Mechanics\CLI\bestiary\fey/korrigan-ccodex.md)
*Source: Creature Codex p. 242*  

*Similar in appearance to a gnome or leprechaun, these pointy-eared faerie folk stand just under two feet tall. They have mischievous, flashing eyes and long, beautiful hair woven with pretty flowers. Clad in yellow robes and floral garlands, they sing and dance barefoot.*

## Night-time Revels

The korrigan are reclusive forest‑dwellers who emerge from their woodland grottoes at night to dance and sing amongst ancient standing stones or around waterfalls and streams. By night, they appear beautiful; however, by day, they are ugly and wizened, and their lovely brown hair turns scraggly and white.

## Mischievous Merrymakers

When the moon is full, the korrigan begin their revels, joining hands and dancing in circles, singing melodies so joyous that others feel compelled to join. Unfortunately, dancing for too long can prove dangerous—even deadly—to mortals, especially "stodgy" religious folk, who lack the stamina of the fey. When they are not at their revels, korrigan enjoy humiliating mortals by making the creatures do silly things. If its victim doesn't see the funny side of its pranks, a korrigan can exhale its poisonous breath on the creature to dispatch the humorless creature.

## Fey Soothsayers

Korrigan are said to be able to predict the future, and sometimes a mortal will brave the perils of the forest-and potential humiliation at the korrigan's hands-to seek its advice before making an important decision.

```statblock
"name": "Korrigan (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d6 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "17"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Performance](Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+5"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Gnomish, Sylvan"
"cr": "3"
"traits":
  - "desc": "The korrigan's innate spellcasting ability is Charisma (spell save DC\
      \ 13). It can innately cast the following spells, requiring no material components:\n\
      \n**3/day each:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [enthrall](Mechanics/CLI/spells/enthrall-xphb.md), [hideous laughter](Mechanics/CLI/spells/tashas-hideous-laughter-xphb.md),\
      \ [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\n**1/day each:** [divination](Mechanics/CLI/spells/divination-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The korrigan has advantage on saving throws against spells or other magical\
      \ effects cast or created by a cleric or paladin."
    "name": "Ungodly Resistance"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "The korrigan targets one creature within 5 feet and exhales its foul\
      \ breath. The creature must make a DC 14 Constitution saving throw, taking 21\
      \ (6d6) poison damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Deadly Breath (Recharge 4-6)"
  - "desc": "The korrigan sings a magical melody and dances. Each humanoid within\
      \ 60 feet of the korrigan that can hear the revels must succeed on a DC 13 Wisdom\
      \ saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) until\
      \ the revels end. For every korrigan that joins in the revels, the save DC increases\
      \ by 1 (maximum DC 19).\n\nEach korrigan participating in the revels must take\
      \ a bonus action on its subsequent turns to continue singing and must use its\
      \ move action to move at least 5 feet to continue dancing. It can keep singing\
      \ and dancing for up to 1 minute as long as it maintains concentration. The\
      \ song ends if all of the korrigan lose concentration or stop singing and dancing.\n\
      \nA [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and begins to dance and caper for the duration of the revels. A creature can\
      \ repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If a creature's saving throw is successful or the\
      \ effect ends for it, the creature is immune to the Enchanting Revels of the\
      \ same band of korrigan for the next 24 hours."
    "name": "Enchanting Revels (1/Day at Dusk or Night Only)"
"reactions":
  - "desc": "When a creature moves within 5 feet of the korrigan, the korrigan can\
      \ cast the misty step spell."
    "name": "Catch Me If You Can"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/korrigan-ccodex.png"
```
^statblock

## Environment

forest