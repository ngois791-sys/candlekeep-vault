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
- Battle Mage
---
# [Battle Mage](Mechanics\CLI\bestiary\humanoid/battle-mage-ccodex.md)
*Source: Creature Codex p. 397*  

Battle mages are open vessels through which arcane energy pours raw, unfettered, and without regard for self-preservation. The art of the battle mage takes as much practice as any other type of spellcasting—perhaps more so. Many nations count battle mages among their ranks, with most establishing and maintaining an elite college or academy to properly train these living weapons. Just as much time goes into indoctrinating the battle mages into the patriotic beliefs as in the magic itself, for no group wants a powerful weapon turned against its creator.

```statblock
"name": "Battle Mage (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "18"
  - !!int "14"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "constitution": !!int "3"
  - "intelligence": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+6"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "The battle mage is a 7th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 14, +6 to hit with spell attacks). The battle\
      \ mage has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\
      \n**1st level (4 slots):** [burning hands](Mechanics/CLI/spells/burning-hands-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\n**2nd level (3\
      \ slots):** [flaming sphere](Mechanics/CLI/spells/flaming-sphere-xphb.md), [misty\
      \ step](Mechanics/CLI/spells/misty-step-xphb.md), [shatter](Mechanics/CLI/spells/shatter-xphb.md)\n\
      \n**3rd level (3 slots):** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [fireball](Mechanics/CLI/spells/fireball-xphb.md), [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\
      \n**4th level (1 slots):** [ice storm](Mechanics/CLI/spells/ice-storm-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, a battle mage can overchannel its spells until the\
      \ start of its next turn. A creature has disadvantage on its saving throws against\
      \ an overchanneled spell. Attack rolls against the battle mage have advantage\
      \ until the start of its next turn."
    "name": "Overchannel"
  - "desc": "When a battle mage casts a spell that causes damage or that forces a\
      \ creature to make a saving throw, it can choose itself and any number of allies\
      \ to be immune to the damage caused by the spell and to automatically succeed\
      \ on the required saving throw."
    "name": "Tactical Casting"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Shortsword"
"reactions":
  - "desc": "When the battle mage is hit by a weapon attack, it can cast a cantrip\
      \ against the attacker."
    "name": "Self-Defense Casting"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/battle-mage-ccodex.png"
```
^statblock

## Environment

any