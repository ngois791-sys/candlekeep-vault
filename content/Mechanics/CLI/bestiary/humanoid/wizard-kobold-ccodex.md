---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wizard Kobold
---
# [Wizard Kobold](Mechanics\CLI\bestiary\humanoid/wizard-kobold-ccodex.md)
*Source: Creature Codex p. 241*  

*An aura of power, centered on a glowing purple crystal atop a short staff, crackles around this pale kobold and arcs across the horns on its headdress. A luminous, leering dragon face fades into being, ghostly and terrible, behind it.*

Wizard kobolds are among the most cunning and intelligent of the scaly kin. They turn their talent for manipulating arcane magic to study and formula, often getting their start with a stolen spellbook, or one purloined from the remains of an adventurer who met its end in a kobold trap.

## Draconic Channel

Wizard kobolds have made a fearsome reputation for themselves with their ability to tap into their draconic heritage through their magic. The wizard draws magic either from a patron dragon or an ancestral dragon figure, manifesting it as a magical effigy. This apparition lends its resilience to the wizard and brings terror and death to the kobold's enemies.

```statblock
"name": "Wizard Kobold (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "58"
"hit_dice": "13d6 + 13"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "13"
  - !!int "17"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Draconic, Infernal"
"cr": "5"
"traits":
  - "desc": "The wizard kobold is an 8th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 14, +6 to hit with spell attacks). The wizard\
      \ kobold has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md), [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1st level (4 slots):** [burning hands](Mechanics/CLI/spells/burning-hands-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [shield](Mechanics/CLI/spells/shield-xphb.md)\n\n**2nd level (3 slots):**\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [mirror image](Mechanics/CLI/spells/mirror-image-xphb.md),\
      \ [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\n**3rd level (3 slots):**\
      \ [blink](Mechanics/CLI/spells/blink-xphb.md), [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [fireball](Mechanics/CLI/spells/fireball-xphb.md)\n\n**4th level (2 slots):**\
      \ [fire shield](Mechanics/CLI/spells/fire-shield-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The kobold has advantage attack rolls roll against a creature if at least\
      \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "The wizard kobold magically creates a draconic visage in an unoccupied\
      \ space it can see within 30 feet. The visage is a glowing, spectral head and\
      \ neck, resembling a variety of dragon chosen by the kobold, that sheds dim\
      \ light out to 10 feet. The visage lasts for 1 minute and grants the following\
      \ benefits:\n\n- A creature hostile to the wizard who starts its turn within\
      \ 30 feet of the visage and who is aware of the visage must succeed on a DC\
      \ 14 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to this\
      \ effect for the next 24 hours.  \n- The wizard gains immunity to the damage\
      \ type dealt by the chosen dragon's breath weapon.  \n- When the wizard uses\
      \ this action, and as a bonus action on it subsequent turns, it can use the\
      \ following attack:  \n\n        - **Breath of the Visage..** *Ranged Spell\
      \ Attack:* +6 to hit, range 120 ft., one target. *Hit:* 7 (2d6) damage of\
      \ the type dealt by the chosen dragon's breath weapon.    "
    "name": "Draconic Visage (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/wizard-kobold-ccodex.png"
```
^statblock

## Environment

underground, urban