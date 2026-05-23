---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Light Cavalry
---
# [Light Cavalry](Mechanics\CLI\bestiary\humanoid/light-cavalry-ccodex.md)
*Source: Creature Codex p. 124*  

*A lithe, red dragonborn wielding a curved cavalry saber and a sturdy steel shield emblazoned with its nation's crest sits upon a cloth-draped warhorse.*

## Mobile Infantry

Dragonborn light cavalry are used as scouts and as strike forces for dragonborn military units. Mounted upon warhorses and wearing light armor, these warriors execute rapid, surgical strikes against their enemy's infantry. When the need arises, these agile cavaliers are also used as ground-based scouts to support the army's air-based [wyvern knights](Mechanics/CLI/bestiary/humanoid/wyvern-knight-ccodex.md).

> [!note] Dragonborn in Midgard
> 
> For most in Midgard, speaking the word dragonborn conjures images of the Mharoti Dragon Empire. They see the armies marching across the fields of their homelands, the wyverns soaring through the skies, the fire raining down upon the earth. To them, dragonborn herald death.
> 
> Most dragonborn resent this, of course. Like any other people, they are not inclined toward evil or good—but those within the Dragon Empire are subject to the sultan's dreams of conquest. Because the Dragon Empire holds scalykind above all other races, intelligent creatures like true dragons, dragonborn, and half‑dragons—even kobolds—receive superior education and martial training to the rest of the empire's peoples.
> 
> These dragonkin often go on to become officers in the Dragon Empire's mighty legions, desiring to amass even more power for themselves by conquering Midgard and the Southlands. Dragonborn elementalists and light cavalry are part of the Dragon Empire's akinji military caste. In peacetime, the akinji are its landholders, merchants, priests, mayors, headmen, ship captains, and minor figures, filling a role similar to landed gentry elsewhere. Dragonborn heavy cavalry within the empire are part of the timarli military caste, which is comprised entirely of minor nobles, generals, and ambassadors. Many dragonborn heavy cavalry serve the sultan directly as advisors, castellans, seers, or spies.
^dragonborn-in-midgard

```statblock
"name": "Light Cavalry (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "fire"
"senses": "passive Perception 14"
"languages": "Common, Draconic"
"cr": "1"
"traits":
  - "desc": "While mounted, the dragonborn has advantage on melee weapon attacks against\
      \ creatures that are Medium or smaller and are not mounted."
    "name": "Infantry Slayer"
  - "desc": "While mounted, the dragonborn's mount can't be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Mounted Warrior"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage. Shortbow. Ranged Weapon Attack: +3 to hit,\
      \ range 80/320 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage."
    "name": "Cavalry Saber"
  - "desc": "rThe dragonborn breathes fire in a 15-foot cone. All creatures in that\
      \ area must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/light-cavalry-ccodex.png"
```
^statblock

## Environment

any