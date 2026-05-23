---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shantak
---
# [Shantak](Mechanics\CLI\bestiary\monstrosity/shantak-ccodex.md)
*Source: Creature Codex p. 328*  

*A loathsome, horse-headed creature of elephantine bulk stretches its great slippery wings in malignant joy. The leering monstrosity calls out with tittering tones that rasp like the scratching of ground glass.*

## Nameless Sentinels

The noisome and hippocephalic birds known as shantaks are the stuff of grotesque legends. These incredible, winged colossi originate from the fabled Mountains of Leng, where they brood amongst immense quarries and cyclopean cities of onyx.

## Hideous Mounts

Shantaks often serve as mounts and servitors of arcane summoners and travelers of the Void (such as the inter-planar Folk of Leng). The rime and niter of the nether pits cling to the enormous wings of these repugnant beasts.

## Void Traveler

The shantak doesn't require air, food, drink, or ambient pressure.

```statblock
"name": "Shantak (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "18"
  - !!int "6"
  - !!int "14"
  - !!int "8"
"speed": "10 ft., fly 60 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "necrotic"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Understands Common but can't speak"
"cr": "5"
"traits":
  - "desc": "Magical darkness doesn't impede the shantak's darkvision."
    "name": "Eldritch Sight"
  - "desc": "The shantak doesn't provoke an opportunity attack when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
  - "desc": "The shantak has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight or smell."
    "name": "Keen Sight and Smell"
  - "desc": "The shantak has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The shantak has advantage on attack rolls against a creature if at least\
      \ one of the shantak's allies is within 5 feet of the creature and the ally\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "A shantak's hide is very slippery. A rider can dismount a shantak without\
      \ any penalty to movement speed. If an effect moves the shantak against its\
      \ will while a creature is on it, the creature must succeed on a DC 15 Dexterity\
      \ saving throw or fall off the shantak, landing [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 5 feet of it. If a rider is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ or [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious) while mounted,\
      \ it must make the same saving throw. In addition, the shantak can attempt to\
      \ shake off a rider as a bonus action, forcing the rider to make the saving\
      \ throw to stay mounted."
    "name": "Unctuous Hide"
"actions":
  - "desc": "The shantak makes two attacks. one with its bite and one with its talons."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage plus 5 (1d10) necrotic damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) slashing damage plus 5 (1d10) necrotic damage."
    "name": "Talons"
  - "desc": "The shantak emits a horrific screech. Each non-shantak creature within\
      \ 60 feet of it that can hear it must succeed on a DC 15 Constitution saving\
      \ throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened) until\
      \ the end of the shantak's next turn. The shantak can choose to include or exclude\
      \ its rider when using this action."
    "name": "Insane Tittering (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/shantak-ccodex.png"
```
^statblock

## Environment

planar