---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Necromancer
---
# [Necromancer](Mechanics\CLI\bestiary\humanoid/necromancer-ccodex.md)
*Source: Creature Codex p. 404*  

Necromancers use their power over the undead to conjure servants and to poison, enfeeble, and kill foes with gleeful abandon. They are almost always accompanied by a group of zombies or skeletons; these are more likely to be mold zombies (see page 395), clacking skeletons (see page 340), or other variant undead for necromancers who have had time to establish a work site, pillage vaults and cemeteries, and hone their dark craft. They regularly use poison and poisonous traps and spells, as their undead companions are immune to such effects. 

```statblock
"name": "Necromancer (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Evil alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "12"
  - !!int "18"
  - !!int "15"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "6"
"traits":
  - "desc": "The necromancer is a 10th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 15, +7 to hit with spell attacks). The necromancer\
      \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [chill\
      \ touch](Mechanics/CLI/spells/chill-touch-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md)\n\
      \n**1st level (4 slots):** [false life](Mechanics/CLI/spells/false-life-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [ray of sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md)*\n\
      \n**2nd level (3 slots):** [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md)*,\
      \ [ray of enfeeblement](Mechanics/CLI/spells/ray-of-enfeeblement-xphb.md)*\n\
      \n**3rd level (3 slots):** [animate dead](Mechanics/CLI/spells/animate-dead-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [vampiric touch](Mechanics/CLI/spells/vampiric-touch-xphb.md)*\n\n**4th level\
      \ (3 slots):** [blight](Mechanics/CLI/spells/blight-xphb.md)*, [ice storm](Mechanics/CLI/spells/ice-storm-xphb.md),\
      \ [stoneskin](Mechanics/CLI/spells/stoneskin-xphb.md)\n\n**5th level (2 slots):**\
      \ [cloudkill](Mechanics/CLI/spells/cloudkill-xphb.md), [cone of cold ](Mechanics/CLI/spells/cone-of-cold-xphb.md)*"
    "name": "Spellcasting"
  - "desc": "Once per turn when a living creature fails a saving throw against or\
      \ is harmed by one of the necromancer's Necromancy spells of 1st level or higher,\
      \ the necromancer regains hp equal to three times the spell's level."
    "name": "Grim Harvest"
  - "desc": "When the necromancer casts animate dead, it can target one additional\
      \ corpse or pile of bones, creating another zombie or skeleton, as appropriate.\
      \ Undead created by the necromancer have an additional 9 hp and a +3 to their\
      \ weapon damage rolls."
    "name": "Undead Thralls"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d6) bludgeoning damage or 4 (1d8) bludgeoning damage if used with two\
      \ hands."
    "name": "Quarterstaff"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/necromancer-ccodex.png"
```
^statblock

## Environment

any