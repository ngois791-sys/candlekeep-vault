---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Orthrus
---
# [Orthrus](Mechanics\CLI\bestiary\monstrosity/orthrus-ccodex.md)
*Source: Creature Codex p. 292*  

*A vicious snarl and a low growl issue from the two-headed pinscher. As both sets of lips curl back, the canine crouches and raises its tail, revealing a hissing serpent's head.*

An orthrus is a loyal, two-headed guard dog with a serpent for a tail. The creatures are smarter than the average canine and have an innate ferocity that keeps them fighting until the bitter end.

## Named for a Queen

The first orthruses were bred by a sorcerer queen of the same name to be palace guardians. She bred into the dogs an undying loyalty to the owner that raises them. Though she has long since died, her legacy lives on in the breed. Orthruses form monogamous pairs that only mate every few years and produce a brood of one or two pups, making them extremely rare. The combat prowess, rarity, and loyalty of orthruses make them an expensive, sought after breed.

## Loyal Guardians

Orthruses normally follow directives to the letter but their above-animal intelligence allows them some level of critical thinking, adaptation, and interpretation. They are the favored guardians of mages, wealthy nobles, and merchants who have plenty to protect. Some farmers save their copper pieces to buy an orthrus to protect livestock from predators while bandits and other criminals steal to acquire orthrus pups.

## Three Heads in Harmony

An orthrus has three heads but one mind. All of the canine's brains work together so it moves with a fluid grace. The heads of an orthrus never snap, hiss, or growl at each other. They understand that only one head needs to eat and breathe to benefit the entire creature.

```statblock
"name": "Orthrus (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "16"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"saves":
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Understands Common but can't speak"
"cr": "3"
"traits":
  - "desc": "The orthrus has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks and on saving throws against being [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [stunned](Mechanics/CLI/rules/conditions.md#Stunned),\
      \ or knocked [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)."
    "name": "Three-headed"
  - "desc": "While the orthrus sleeps, at least one of its heads is awake."
    "name": "Wakeful"
"actions":
  - "desc": "The orthrus makes three bite attacks. two with its canine heads and one\
      \ with its snake head. If the orthrus bites the same creature with both of its\
      \ canine heads in the same round, that creature must succeed on a DC 12 Strength\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Bite (Canine Head)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage, and the target must make a DC 12 Constitution\
      \ saving throw. On a failed save, it takes 14 (4d6) poison damage and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. On a success, it takes half the damage and isn't [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)."
    "name": "Bite (Snake Head)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/orthrus-ccodex.png"
```
^statblock

## Environment

urban