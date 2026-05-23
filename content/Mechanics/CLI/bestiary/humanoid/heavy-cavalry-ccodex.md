---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Heavy Cavalry
---
# [Heavy Cavalry](Mechanics\CLI\bestiary\humanoid/heavy-cavalry-ccodex.md)
*Source: Creature Codex p. 123*  

*A dragonborn knight sits astride a giant lizard like a mountain of armor and scales, draped in crimson heraldry. The knight couches its lance on its saddle and begins loading a heavy crossbow.*

## Mounted Soldier

Dragonborn heavy cavalry crash through the fields of war like a wall of scales and iron, breaking through enemy lines with the combined might of their lances and the weight of their giant lizard mounts. These mighty warriors also enjoy the privileges of high society as recompense for their military service, instilling most heavy cavaliers with a sort of patriotism, even if it only lasts as long as they receive their promised gold.

> [!note] Dragonborn in Midgard
> 
> For most in Midgard, speaking the word dragonborn conjures images of the Mharoti Dragon Empire. They see the armies marching across the fields of their homelands, the wyverns soaring through the skies, the fire raining down upon the earth. To them, dragonborn herald death.
> 
> Most dragonborn resent this, of course. Like any other people, they are not inclined toward evil or good—but those within the Dragon Empire are subject to the sultan's dreams of conquest. Because the Dragon Empire holds scalykind above all other races, intelligent creatures like true dragons, dragonborn, and half‑dragons—even kobolds—receive superior education and martial training to the rest of the empire's peoples.
> 
> These dragonkin often go on to become officers in the Dragon Empire's mighty legions, desiring to amass even more power for themselves by conquering Midgard and the Southlands. Dragonborn elementalists and light cavalry are part of the Dragon Empire's akinji military caste. In peacetime, the akinji are its landholders, merchants, priests, mayors, headmen, ship captains, and minor figures, filling a role similar to landed gentry elsewhere. Dragonborn heavy cavalry within the empire are part of the timarli military caste, which is comprised entirely of minor nobles, generals, and ambassadors. Many dragonborn heavy cavalry serve the sultan directly as advisors, castellans, seers, or spies.
^dragonborn-in-midgard

```statblock
"name": "Heavy Cavalry (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Lawful Neutral"
"ac": !!int "19"
"ac_class": "[splint armor](Mechanics/CLI/items/splint-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "17"
  - !!int "10"
  - !!int "14"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+4"
"damage_resistances": "fire"
"senses": "passive Perception 12"
"languages": "Common, Draconic"
"cr": "2"
"traits":
  - "desc": "If the dragonborn moves at least 20 feet straight toward a creature while\
      \ mounted and then hits with a lance attack on the same turn, it can make a\
      \ trample attack against that creature as a bonus action."
    "name": "Cavalry Charge"
  - "desc": "The dragonborn can't be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ dismounted, or moved against its will while mounted."
    "name": "Locked Saddle"
  - "desc": "The dragonborn is rarely seen without its giant lizard mount. The lizard\
      \ wears custom scale mail that raises its Armor Class to 15. While the dragonborn\
      \ is mounted, the giant lizard can't be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Mounted Warrior"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (1d12 + 2) piercing damage. Heavy Crossbow. Ranged Weapon Attack: +3\
      \ to hit, range 100/400 ft., one target. *Hit:* 6 (1d10 + 1) piercing damage."
    "name": "Lance"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) bludgeoning damage and the target must succeed on a DC 13 Strength\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Trample (Mounted Only)"
  - "desc": "The dragonborn breathes fire in a 15-foot cone. All creatures in that\
      \ area must make a DC 13 Dexterity saving throw, taking 10 (3d6) fire damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/heavy-cavalry-ccodex.png"
```
^statblock

## Environment

any