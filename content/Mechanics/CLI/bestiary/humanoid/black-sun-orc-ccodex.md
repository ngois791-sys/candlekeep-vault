---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/orc
statblock: inline
statblock-link: "#^statblock"
aliases:
- Black Sun Orc
---
# [Black Sun Orc](Mechanics\CLI\bestiary\humanoid/black-sun-orc-ccodex.md)
*Source: Creature Codex p. 289*  

*Pale-skinned and strong as an ox, the Black Sun orcs worship strength and violence and feast on the cracked bones of their enemies.*

## Hidden by the Earth

Black Sun orcs excel at concealing their deeds from those on the surface world, lying in wait at night to abduct victims from the roads or their homes in near complete silence. The orcs bundle off such unfortunates to the concealed caverns leading to their homes beneath the earth, where they hand the captives over to their priestesses for sacrifice.

## Nocturnal Attacks

Black Sun orcs are strictly nocturnal, avoiding the eye of the sun in favor of raids under moonlight—and even these do not take place during the full moon.

## Foes of Trolls and Goblins

Trolls, trollkin, and goblins find the fish-bellied coloration and peculiar speech of Black Sun orcs hilarious and mock them mercilessly. In most cases, this ends in a fight with one side or the other driven away.

```statblock
"name": "Black Sun Orc (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[hide armor](Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "9"
  - !!int "12"
  - !!int "8"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Orc"
"cr": "2"
"traits":
  - "desc": "As a bonus action, the orc can move up to its speed toward a hostile\
      \ creature that it can see."
    "name": "Aggressive"
  - "desc": "Magical darkness doesn't impede the Black Sun orc's darkvision."
    "name": "Black Sun Sight"
  - "desc": "While in bright light, the orc has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Light Sensitivity"
  - "desc": "The orc has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in rocky terrain."
    "name": "Stone Camouflage"
"actions":
  - "desc": "The orc makes two attacks with its greatclub or with its sling."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 4 (1d4 + 2) bludgeoning damage."
    "name": "Sling"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/black-sun-orc-ccodex.png"
```
^statblock

## Environment

mountain, underground