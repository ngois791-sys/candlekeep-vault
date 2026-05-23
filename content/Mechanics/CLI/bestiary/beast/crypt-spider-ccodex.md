---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Crypt Spider
---
# [Crypt Spider](Mechanics\CLI\bestiary\beast/crypt-spider-ccodex.md)
*Source: Creature Codex p. 348*  

*A black and red spider chitters with excitement as a nearby corpse erupts with a dozen hatchlings.*

A crypt spider is an intelligent arachnid with a red body and black abdomen. Females are distinctly larger than males.

## Graveyard Lurkers

Crypt spiders make their homes in crypts, graveyards, and other locations where dead bodies are plentiful. They are blessed by dark gods of undeath, and create and control undead through power granted by the blessing. 

## Horrifying Familial Bonds

Crypt spiders usually gather in mated pairs with a larger female dominating a smaller male. In desperate times, males become food for crypt-spider young. Once mated, the female lays her eggs in the bodies of their prey, where the brood mature by feeding on the creatures' fluids and each other. Those that survive into adulthood "hatch" from the corpse in a horrifying display.

## Social Creatures

Crypt spiders contact other crypt spiders to share unique catches, trading them like fine wines. While they can eat any creature, crypt spiders find humans, dwarves, and elves the most appetizing.

```statblock
"name": "Crypt Spider (CCodex)"
"size": "Medium"
"type": "beast"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "10"
  - !!int "11"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+1"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+1"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 10"
"languages": "Common, Undercommon"
"cr": "2"
"traits":
  - "desc": "As a bonus action, a crypt spider can cocoon a creature within 5 feet\
      \ that is currently [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by webbing. A cocooned creature has disadvantage on ability checks and saving\
      \ throws made to escape the web."
    "name": "Cocoon Prey"
  - "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in contact with a web, the spider knows the exact location of any\
      \ other creature in contact with that web."
    "name": "Web Sense"
  - "desc": "The spider ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d8 + 2) piercing damage, and the creature must make a DC 13 Constitution\
      \ saving throw, taking 9 (2d8) poison damage on a failed save, or half as\
      \ much damage on a successful one. If the poison damage reduces the creature\
      \ to 0 hp, the creature is stable but [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hp, and is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
    "name": "Bite"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/60 ft., one creature. *Hit:*\
      \ The creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by webbing. As an action, the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ creature can make a DC 13 Strength check, escaping from the webbing on a success.\
      \ The effect also ends if the webbing is destroyed. The webbing has AC 10, 5\
      \ hp, vulnerability to fire damage, and immunity to bludgeoning, poison, and\
      \ psychic damage."
    "name": "Web (Recharge 5-6)"
  - "desc": "The crypt spider creates a zombie from a humanoid creature it has killed\
      \ with its poison. This works like the animate dead spell, except the zombie\
      \ stays under the crypt spider's control for 1d4 days. At the end of this\
      \ duration or when the zombie is destroyed, the corpse bursts open, releasing\
      \ hundreds of crypt spider young (use swarm of spiders statistics). The crypt\
      \ spider can have no more than four zombies under its control at one time."
    "name": "Create Zombie"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/crypt-spider-ccodex.png"
```
^statblock

## Environment

underground, urban