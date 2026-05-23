---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gear Mage
---
# [Gear Mage](Mechanics\CLI\bestiary\humanoid/gear-mage-ccodex.md)
*Source: Creature Codex p. 401*  

The gear mage can be found working alongside artificers, directing industrial efforts in large towns and cities. They can also be found holed up in a laboratory or a warehouse, experimenting with new forms of clockwork machinery.

```statblock
"name": "Gear Mage (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"ac_class": "16 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "12"
  - !!int "20"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The gear mage is a 9th-level spellcaster. Its spellcasting ability is\
      \ Intelligence (spell save DC 15, +7 to hit with spell attacks). The gear\
      \ mage has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md), [blade ward](Mechanics/CLI/spells/blade-ward-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md), [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\
      \n**1st level (4 slots):** [grease](Mechanics/CLI/spells/grease-xphb.md), [identify](Mechanics/CLI/spells/identify-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [shield](Mechanics/CLI/spells/shield-xphb.md)\n\
      \n**2nd level (3 slots):** [flaming sphere](Mechanics/CLI/spells/flaming-sphere-xphb.md),\
      \ [levitate](Mechanics/CLI/spells/levitate-xphb.md), [shatter](Mechanics/CLI/spells/shatter-xphb.md)\n\
      \n**3rd level (3 slots):** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [slow](Mechanics/CLI/spells/slow-xphb.md)\n\
      \n**4th level (2 slots):** [black tentacles](Mechanics/CLI/spells/evards-black-tentacles-xphb.md),\
      \ [fabricate](Mechanics/CLI/spells/fabricate-xphb.md)\n\n**5th level (1 slots):**\
      \ [animate objects](Mechanics/CLI/spells/animate-objects-xphb.md), [cloudkill](Mechanics/CLI/spells/cloudkill-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Whenever the gear mage casts a spell that animates, creates, or modifies\
      \ an object, the spell's duration is increased by 3 minutes, if it has a duration."
    "name": "Clockworker's Charm"
  - "desc": "The gear mage can reshape metal with a touch. When grasping a Small or\
      \ smaller piece of nonmagical metal, the gear mage can alter the form into any\
      \ shape that suits its purpose. The item must be in the gear mage's hands and\
      \ under its control; the mage can't, for example, reshape a piece of armor or\
      \ a weapon that's being worn or wielded by someone else. To create a specific\
      \ object, such as a key or mechanical component, the gear mage must be completely\
      \ familiar with it. Thus, it could replicate a key that it had in its possession\
      \ for an extended period of time, but it could not create a working key based\
      \ on seeing the lock alone. Objects the gear mage creates can have up to two\
      \ hinges and a latch, but finer mechanical detail is not possible."
    "name": "Metal Shape (1/Day)"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) bludgeoning damage or 5 (1d8 + 1) bludgeoning damage if used\
      \ with two hands."
    "name": "Quarterstaff"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/gear-mage-ccodex.png"
```
^statblock

## Environment

any