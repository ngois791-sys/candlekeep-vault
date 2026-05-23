---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sigilian
---
# [Sigilian](Mechanics\CLI\bestiary\construct/sigilian-ccodex.md)
*Source: Creature Codex p. 335*  

*Students of magic scoff at the idea of sigilians. Living spells fleeing their tomes? Ridiculous. More likely a hazing ritual to frighten new students.*

## Born of Ink and Page

More experienced mages know sigilians are no prank. Whether intentionally created or born from improperly transcribed spells, they exist. They commonly appear as swirling clouds of glowing runes. 

## Hunger for Knowledge

Sigilians live unseen in libraries, arcing between books, eating words, and leaving behind scrambled passages. They're most dangerous when they enter spellbooks, where they can eat inscribed spells. 

## Sticks and Stones

Undisturbed sigilians are docile, but the destructive nature of their hunger makes it impossible for librarians and wizards to live and let live. Left alone, they can become powerful, self-aware, intelligent sigilians that store most of the words that form them in heavy tomes similar to a lich's phylactery. 

## Construct Nature

A sigilian doesn't require air, food, drink, or sleep.

```statblock
"name": "Sigilian (CCodex)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "4"
"stats":
  - !!int "6"
  - !!int "18"
  - !!int "14"
  - !!int "5"
  - !!int "10"
  - !!int "20"
"speed": "0 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Understands Common but can't speak"
"cr": "2"
"traits":
  - "desc": "The sigilian can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "At the start of each of its turns if the sigilian is inside a book that\
      \ is not a spellbook, it removes the words from 3 (1d6) pages and regains\
      \ 7 (2d6) hp."
    "name": "Cognivore"
  - "desc": "The sigilian can move half its speed to enter a book. If the book is\
      \ being worn or carried by a creature, that creature must succeed on a DC 14\
      \ Dexterity saving throw or the sigilian enters the book. A creature can take\
      \ its action to find the sigilian in a book by succeeding on a DC 12 Intelligence\
      \ ([Investigation](Mechanics/CLI/rules/skills.md#Investigation)) check. If successful,\
      \ a creature can use a bonus action to tear out the pages where the sigilian\
      \ is hiding, forcing the sigilian out of the book and into an unoccupied space\
      \ within 5 feet. Alternatively, a creature can destroy the book with a successful\
      \ melee attack, dealing half of the damage to the sigilian and forcing it out\
      \ of the book into an unoccupied space within 5 feet."
    "name": "Home Sweet Tome"
"actions":
  - "desc": "The sigilian makes three attacks. one with its cut and two with its paste."
    "name": "Multiattack"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 60 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) slashing damage and the sigilian copies one of the target's\
      \ weapon attacks for 1 minute."
    "name": "Cut"
  - "desc": "*Melee  or Ranged Spell Attack:* +7 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* Damage die and type are determined by the copied weapon\
      \ attack from Cut. Glowing runes in the image of that weapon appear as the sigilian\
      \ attacks."
    "name": "Paste"
  - "desc": "While inside a spellbook, the sigilian eats one spell of the highest\
      \ level present then exits the spellbook. It chooses to either make its next\
      \ Paste attack with a number of damage dice equal to the eaten spell's level\
      \ or regain 3 hp per spell level. The sigilian can only eat one spell at a time\
      \ and must use the devoured spell's energy before attempting to enter another\
      \ spellbook. The eaten spell's entry is garbled, but the owner can repair it\
      \ for half the gold and time usually spent to copy a spell. If the owner has\
      \ the spell prepared, it can re-record the spell during a long rest for no additional\
      \ cost."
    "name": "Devour Spell"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/sigilian-ccodex.png"
```
^statblock

## Environment

urban