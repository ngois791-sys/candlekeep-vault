---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/simian
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kapi
---
# [Kapi](Mechanics\CLI\bestiary\humanoid/kapi-ccodex.md)
*Source: Creature Codex p. 336*  

*Dressed in loose-fitting clothing, this lithesome monkey-like humanoid is covered from head to toe in golden fur. He wields a quarterstaff, and his long, prehensile tail twists and turns behind him, as if imbued with a life of its own.*

A kapi's fur varies from snow white to reddish-brown with a yellowish-grey hue being the most common. Kapi from alpine forests have pale blue fur and red faces and hands.

## Jungle Homeland

Kapi are a race of simian humanoids originally from tropical jungles, where they make their homes in treetop villages. Although most kapi still live in their homeland, their restless tendencies have led many of them to venture forth and explore distant lands. Kapi can be found living alongside humans and other races in villages, towns, and cities throughout the world. 

## Insatiable Curiosity

Kapi are intrigued by strangers and are constantly asking questions, often beyond the point where this becomes annoying. Their innate curiosity and good-hearted nature means that kapi will sometimes throw their lot in with adventurers, priests, and other wanderers. Several famous tales recount the escapades of bold and brave kapi who accompanied legendary heroes and pious monks as sidekicks and protectors.

## Playful Tricksters

Kapi enjoy playing harmless pranks on others and sometimes acquire unattended items that don't belong to them, using their prehensile tails to grab small objects while no one is looking. These playful antics can often be misunderstood by humorless folk. When this happens, the kapi's ability to scamper up the nearest tree to get out of harm's way proves very handy.

> [!note] Kapi in Midgard
> 
> The kapi homeland is the Kamunthalur Jungle in Khandiria, far to the southeast of the Crossroads region and east of the Red Wastes. The great kapi city of Mangchala is located in a hidden gorge deep in the rainforest. Behind a towering waterfall, hundreds of cave mouths in the cliffside lead into the underground city, where the benevolent but capricious Monkey King rules.
^kapi-in-midgard

```statblock
"name": "Kapi (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "simian"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "10"
  - !!int "11"
  - !!int "13"
  - !!int "9"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "The kapi can take the [Disengage](Mechanics/CLI/rules/actions.md#Disengage)\
      \ action as a bonus action on each of its turns."
    "name": "Nimble Feet"
  - "desc": "The kapi can use its tail to pick up or hold a small object that isn't\
      \ being worn or carried. It can use its tail to interact with objects, leaving\
      \ its hands free to wield weapons or carry heavier objects. The kapi can't use\
      \ its tail to wield a weapon but can use it to trip an opponent (see below)."
    "name": "Prehensile Tail"
"actions":
  - "desc": "The kapi makes two attacks. one with its quarterstaff and one with its\
      \ tail trip."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage or 6 (1d8 + 2) bludgeoning damage if used\
      \ with two hands."
    "name": "Quarterstaff"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* The\
      \ target must succeed on a DC 14 Dexterity saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Tail Trip"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 30/120 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) bludgeoning damage."
    "name": "Sling"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/kapi-ccodex.png"
```
^statblock

## Environment

forest