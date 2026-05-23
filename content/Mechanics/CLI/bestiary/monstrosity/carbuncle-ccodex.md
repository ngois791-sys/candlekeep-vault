---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Carbuncle
---
# [Carbuncle](Mechanics\CLI\bestiary\monstrosity/carbuncle-ccodex.md)
*Source: Creature Codex p. 57*  

*A glint of brilliant light shines from the forehead of a lithe cat-like creature covered in the vibrant plumage of a tropical songbird.*

The carbuncle is a jungle-dwelling beast highly sought after by alchemists for the shining jewel embedded in its forehead. The carbuncle's body is not unlike an ocelot mixed with a bird of paradise; a lithe, four-legged quadruped with vibrant purple‑and-crimson plumage instead of fur. Despite their bestial appearance, carbuncles possess great cunning and build villages of their own in caves deep in the jungle.

## Bearers of Precious Gems

The glimmering garnet in this creature's forehead—the carbuncle for which it is named—is more than just a precious stone. Alchemists and other arcanists spend exorbitant amounts on carbuncle hunters because the gem is rumored to hold the power to amplify magic like light through a magnifying lens. What few wizards understand is that the carbuncle's garnet only holds magical power if given willingly; a garnet pried from the skull of a slain carbuncle still shines beautifully (and is worth 300 gp in most markets) but is devoid of magic. If a carbuncle willingly removes the gem from its forehead and gives it to another creature, the gem regrows in `1d4` weeks.

## Capricious Tricksters

Carbuncles are well aware of how much their precious gem is valued by humans and their ilk and rightly fear humanoids for their cruelty and greed. However, particularly courageous carbuncles fight back against the hunters. They are not large or powerful creatures and instead use their cunning mind to trick hunters into following them into pits of quicksand, the lairs of deadlier creatures, or into piranhainfested waters.

```statblock
"name": "Carbuncle (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "16"
  - !!int "12"
"speed": "40 ft., climb 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "As a bonus action, the carbuncle can cause its garnet to glow or not.\
      \ While glowing, the garnet sheds bright light in a 10-foot radius and dim light\
      \ for an additional 10 feet."
    "name": "Gem Illumination"
  - "desc": "The carbuncle has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in jungle terrain."
    "name": "Jungle Camouflage"
"actions":
  - "desc": "The carbuncle makes one bite attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Claw"
  - "desc": "The carbuncle shoots a 30-foot-long, 5-foot-wide line of scintillating\
      \ light from the garnet on its forehead. Each creature in that line must make\
      \ a DC 13 Dexterity saving throw, taking 10 (3d6) radiant damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Light Beam (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/carbuncle-ccodex.png"
```
^statblock

## Environment

forest