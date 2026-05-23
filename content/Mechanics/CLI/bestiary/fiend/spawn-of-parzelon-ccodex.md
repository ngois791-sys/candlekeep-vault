---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spawn of Parzelon
---
# [Spawn of Parzelon](Mechanics\CLI\bestiary\fiend/spawn-of-parzelon-ccodex.md)
*Source: Creature Codex p. 102*  

*A drape of long hair obscures the countenance of this shapely woman. As she turns, her sharp-toothed leonine visage is revealed. Suddenly, long needlelike claws protrude from her lithe fingertips, and her dark blue feline eyes narrow in hungry anticipation.*

## Daughters of the Dread Prophet

Born from accursed liaisons with mortal bloodlines, these amalgams of lioness and lady are the insidious progeny of the Arch-Devil Parzelon, King of Secrets. The fiendishly graceful spawn of Parzelon live only to serve their infernal father and his hideous whims.

```statblock
"name": "Spawn of Parzelon (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "18"
  - !!int "13"
  - !!int "12"
  - !!int "10"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "4"
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 16"
"languages": "Infernal, telepathy 120 ft."
"cr": "5"
"traits":
  - "desc": "The spawn of parzelon's innate spellcasting ability is Charisma (spell\
      \ save DC 13). It can innately cast the following spells, requiring no material\
      \ components:\n\n**At will:** [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md)\n\
      \n**3/day each:** [expeditious retreat](Mechanics/CLI/spells/expeditious-retreat-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Magical darkness doesn't impede the spawn's darkvision."
    "name": "Devil's Sight"
  - "desc": "The spawn has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The spawn has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The spawn has advantage on attack rolls against a creature if at least\
      \ one of the spawn's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "If the spawn moves at least 20 feet straight toward a creature and then\
      \ hits it with a claw attack on the same turn, that target must succeed on a\
      \ DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the spawn\
      \ can make one bite attack against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "The spawn of Parzelon makes one bite attack and two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage plus 7 (2d6) necrotic damage."
    "name": "Claw"
  - "desc": "The spawn emits a dreadfully alluring purr. Each creature within 20 feet\
      \ of it that can hear it and that isn't a devil must succeed on a DC 15 Constitution\
      \ saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) for\
      \ 1 minute. A creature can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Tranquil Roar (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/spawn-of-parzelon-ccodex.png"
```
^statblock

## Environment

planar