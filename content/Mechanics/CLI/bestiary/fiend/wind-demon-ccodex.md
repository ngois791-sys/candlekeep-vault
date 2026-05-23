---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wind Demon
---
# [Wind Demon](Mechanics\CLI\bestiary\fiend/wind-demon-ccodex.md)
*Source: Creature Codex p. 93*  

*The marshy reek of rotting vegetation was everywhere. Even above that rank scent, though, the arrival of the demons was clear: howling, pestilent, and enough to make our horses and dogs vomit and paw their noses.*

Half-corporeal and half a miasma of pestilent stench, wind demons are minor fiends that delight in foul odors, rank gasses, and poisonous air. They live in swamps, marshes, sewers and near volcanic vents—wherever a natural or synthetic stench reeks.

## Shrieking Servants of Cold and Death

Cold and foul-smelling, wind demons delight in serving other demons or gods of cold and decay. They often attend dark rituals to such divine beings, howling hideous prayers at a volume that can be heard over hills and valleys. They are sometimes found around wind harp devils, a rare instance where demons and devils tolerate one another's company.

## Rushing Motion

Wind demons have great difficulty sitting still for more than a moment. They are always in constant motion: speaking, manipulating small objects, blowing out torches and candles, and generally making a nuisance of themselves around larger, slower demons or among humans who wish to attend to some urgent plot or scheme.

## Connoisseurs of Rot

Wind demons are utterly delighted by foul smells of all kinds; rotting corpses, decaying plant matter, and raw sewage are all equally appealing to them. They often form small globes of concentrated stench to share with their own kind or to offer as gifts to summoners and to other demons.

```statblock
"name": "Wind Demon (CCodex)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "28"
"hit_dice": "8d6"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "10"
  - !!int "10"
  - !!int "7"
  - !!int "8"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "fire, lightning"
"damage_immunities": "cold, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Common, Abyssal"
"cr": "2"
"traits":
  - "desc": "When the wind demon is targeted by an attack or spell that requires a\
      \ ranged attack roll, roll a d6. On a 1 to 5, the attacker has disadvantage\
      \ on the attack roll. On a 6, the wind demon is unaffected, and the attack is\
      \ reflected back at the attacker as though it originated from the wind demon,\
      \ turning the attacker into the target."
    "name": "Arrow Bane"
  - "desc": "The wind demon has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The wind demon makes two frost claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d4 + 4) slashing damage plus 3 (1d6) cold damage."
    "name": "Frost Claw"
"reactions":
  - "desc": "After a creature the wind demon can see damages it with an attack, the\
      \ wind demon can move up to its speed without provoking opportunity attacks."
    "name": "Swift as Frost"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/wind-demon-ccodex.png"
```
^statblock

## Environment

any