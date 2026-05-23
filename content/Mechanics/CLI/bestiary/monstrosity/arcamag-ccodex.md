---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Arcamag
---
# [Arcamag](Mechanics\CLI\bestiary\monstrosity/arcamag-ccodex.md)
*Source: Creature Codex p. 41*  

*A crystalline tick hops off the neck of the dead wizard and flies behind a bookshelf, where it changes into a harmless-looking silver ring bearing an arcane symbol.*

## A Bane of the Arcane

The arcamag is a creature that survives by feeding on the magical force within creatures, especially humanoid spellcasters. An arcamag looks like a tick comprised of jagged, clear-crystalline fragments. Barbed hooks springing from its mandibles allow it to attach to a host.

## Symbiote or Parasite?

The arcamag waits until a spellcaster takes possession of it, stowing it in a backpack or belt pouch. At that point, it changes into its natural form and works its way beneath clothing to a covered piece of flesh: the small of the back or the inner thigh are prime locations. Once there, the arcamag attaches to the caster. In the short term, a caster might benefit from acting as a host, but, in the long term, the consequences can be devastating and potentially fatal.

## Use in Battle

Arcamags are occasionally used by war wizards in battle, hoping to bolster the magical might of their troops. Sometimes this works, but, more often than not, inexperienced wizards are left dead on the battlefield.

> [!note] Changes to the Host
> 
> The following changes are made to a spellcaster that hosts an arcamag:
> 
> - Three times per short rest, the host can use a bonus action to cast a cantrip that would normally require an action. Each time this is done, the host loses hp equal to its spellcaster level.  
> - The host gains one additional spell slot per level of spell it can cast. Each time this extra slot is used, the host must succeed on a DC 10 Constitution saving throw or gain one level of exhaustion.  
> - Each time the host casts a spell, roll a `d20`. On a 1, the spell doesn't successfully complete, but the host still expends a spell slot as the arcamag absorbs the power of the spell.  
^changes-to-the-host

```statblock
"name": "Arcamag (CCodex)"
"size": "Tiny"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d4 + 10"
"modifier": !!int "0"
"stats":
  - !!int "7"
  - !!int "10"
  - !!int "15"
  - !!int "5"
  - !!int "12"
  - !!int "18"
"speed": "10 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Understands Common but can't speak"
"cr": "2"
"traits":
  - "desc": "While attached to a host, the arcamag has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks."
    "name": "Camouflage"
  - "desc": "The arcamag can use its action to polymorph into a small object, such\
      \ as a ring, wand, orb, rod, or scroll. Its statistics are the same in each\
      \ form. Any equipment it is wearing or carrying isn't transformed. It reverts\
      \ to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "While motionless, the arcamag is indistinguishable from an ordinary object."
    "name": "False Appearance (Object Form Only)"
"actions":
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature that can\
      \ cast spells. *Hit:* The arcamag attaches to the target. While attached, the\
      \ arcamag doesn't attack. Instead, it causes a handful of changes in its spellcaster\
      \ host (see Changes to the Host sidebar).\n\nThe arcamag can detach itself by\
      \ spending 5 feet of its movement. A creature other than the host can use its\
      \ action to detach the arcamag by succeeding on a DC 15 Strength check. The\
      \ host can use its action to detach the arcamag only after the host has expended\
      \ all of its spell slots for the day, including the extra cantrips and spell\
      \ slots gained from having the arcamag attached. Doing so doesn't require a\
      \ Strength check. When the arcamag detaches itself or is detached from a host,\
      \ the host takes 2 (1d4) psychic damage per spellcaster level."
    "name": "Attach"
  - "desc": "The arcamag magically teleports up to 60 feet to an unoccupied space.\
      \ If it is attached to a host when it uses this action, it automatically detaches."
    "name": "Teleport (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/arcamag-ccodex.png"
```
^statblock

## Environment

urban