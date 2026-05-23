---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- Junk Shaman
---
# [Junk Shaman](Mechanics\CLI\bestiary\humanoid/junk-shaman-ccodex.md)
*Source: Creature Codex p. 238*  

*This short, reptilian humanoid has scales of dull yellow and gleaming copper. It is swathed in filthy robes absolutely festooned with scrap metal, chains, nails, and other bits of metal and wood refuse. It carries a staff made of a length of pipe, topped with a battered candelabra that burns with hissing flames.*

Spindly even for kobolds, junk shamans weigh more than most thanks to the metal bits in which they decorate themselves.

## Fringe Oracles

Most other kobolds look at the junk shamans as touched but can't deny that they channel some form of divine energy. A kobold community might openly shun a junk shaman, even while every member of the warren individually seeks the shaman out for wisdom and insight.

## Treasures from Trash

A junk shaman eschews the normal, respectable kobold pursuits of mining, trapmaking, and sorcery. Instead, it provides an afterlife of sorts for castoff articles from kobolds and other races alike. It gathers massive collections of broken weapons, useless tools, scrap materials, and other detritus, imbuing the garbage with a semblance of life.

```statblock
"name": "Junk Shaman (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "15 with junk armor"
"hp": !!int "42"
"hit_dice": "12d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "11"
  - !!int "11"
  - !!int "17"
  - !!int "9"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Draconic"
"cr": "2"
"traits":
  - "desc": "The kobold casts animate objects without any components. Wisdom is its\
      \ spellcasting ability."
    "name": "Animate Objects (1/Day)"
  - "desc": "As a bonus action, the kobold can create magical armor out of scrap metal\
      \ and bits of junk it touches. The armor provides AC 13 + Dexterity modifier,\
      \ and a critical hit scored against the kobold becomes a normal hit instead.\
      \ The armor lasts until the kobold uses a bonus action to end it, the armor\
      \ is removed from the kobold, or the kobold dies."
    "name": "Junk Armor"
  - "desc": "The kobold has advantage on attack rolls against a creature if at least\
      \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The kobold junk shaman makes two junk staff attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage plus 3 (1d6) fire damage."
    "name": "Junk Staff"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 120 ft., one target. *Hit:*\
      \ 7 (2d6) fire damage. If the target is a creature or flammable object that\
      \ isn't being worn or carried, it ignites. Until a creature takes an action\
      \ to douse the fire, the target takes 3 (1d6) fire damage at the start of\
      \ each of its turns."
    "name": "Flame Jet"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/junk-shaman-ccodex.png"
```
^statblock

## Environment

underground, urban