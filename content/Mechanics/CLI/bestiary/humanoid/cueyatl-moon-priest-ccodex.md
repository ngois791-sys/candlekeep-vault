---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cueyatl Moon Priest
---
# [Cueyatl Moon Priest](Mechanics\CLI\bestiary\humanoid/cueyatl-moon-priest-ccodex.md)
*Source: Creature Codex p. 68*  

*Deep in the coastal jungles, the frog-like cueyatl subjugate other humanoids, forcing them into labor or delivering them to enigmatic gods.*

## Deadly Poisons

Giant ants and venomous aquatic life in the cueyatl diet help them generate poisonous secretions from their skin and in their saliva. The cueyatl use this poison to coat their weapons both for hunting and war.

## Savage Pirates

Knifing through the water in their outrigger canoes, the cueyatl attack ships that blunder into their coastal waters with great ferocity. The cargo is often left aboard if the cueyatl have no immediate use for it; the ships' crews are their main targets, sacrificed to appease their temperamental gods.

## Fiercly Obedient

Their priesthoods work together closely under the cueyatl priest-kings. These priest-kings speak with the authority of the gods, and the cueyatl never waver in their obedience, even to the point of self-sacrifice.

```statblock
"name": "Cueyatl Moon Priest (CCodex)"
"size": "Small"
"type": "humanoid"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "81"
"hit_dice": "18d6 + 18"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "16"
  - !!int "12"
"speed": "30 ft., climb 20 ft., swim 30 ft."
"saves":
  - "constitution": !!int "4"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "The cueyatl moon priest is a 5th-level spellcaster. Its spellcasting\
      \ ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The\
      \ cueyatl moon priest has the following cleric spells prepared:\n\n**Cantrips\
      \ (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md), [resistance](Mechanics/CLI/spells/resistance-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\
      \n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [cure\
      \ wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [protection from evil and\
      \ good](Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md)\n\n**2nd\
      \ level (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [silence](Mechanics/CLI/spells/silence-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3rd level (2 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The cueyatl can breathe air and water."
    "name": "Amphibious"
  - "desc": "The cueyatl has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in jungle terrain."
    "name": "Jungle Camouflage"
  - "desc": "The cueyatl moon priest has advantage on saving throws and ability checks\
      \ made to escape a grapple."
    "name": "Slippery"
  - "desc": "The cueyatl's long jump is up to 20 feet and its high jump is up to 10\
      \ feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d8) piercing damage plus 7 (2d6) poison damage."
    "name": "Morningstar"
  - "desc": "The cueyatl moon priest harnesses moonlight, dispelling magical light\
      \ in a 30-foot radius. In addition, each hostile creature within 30 feet must\
      \ make a DC 13 Constitution saving throw, taking 16 (3d10) cold damage on\
      \ a failed save, and half as much damage on a successful one. A creature that\
      \ has total cover from the moon priest is not affected."
    "name": "Night's Chill (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/cueyatl-moon-priest-ccodex.png"
```
^statblock

## Environment

coastal