---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wyvern Knight
---
# [Wyvern Knight](Mechanics\CLI\bestiary\humanoid/wyvern-knight-ccodex.md)
*Source: Creature Codex p. 385*  

*Clad in armor and carrying a spiked lance, the knight grips tight to the reins of its wyvern mount. The knight snarls, goading its mount forward.*

For centuries, many realms have been safeguarded by knights on horseback, their advanced mobility and powerful steeds cutting through infantry lines like shears through cloth. But against the wyvern knights, even mighty cavaliers are little more than worms to be snapped up by a hungry starling. The wyvern knights are trained to ride domesticated war wyverns (see page 386), using their aerial mobility to perform countless roles on the battlefield from shattering cavalry charges to sowing chaos from behind enemy lines.

## Baal's First

A group of [elite kobolds](Mechanics/CLI/bestiary/humanoid/elite-kobold-ccodex.md), calling themselves Baal's First Legion, works with a dragonborn wyvern knight commander. The kobolds themselves hang onto leather straps and buckle themselves onto the commander's war wyvern for swift transport across a battlefield. As arsonists, scouts, and ambushers, they've been extremely effective.

```statblock
"name": "Wyvern Knight (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Evil"
"ac": !!int "20"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "18"
  - !!int "10"
  - !!int "12"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "7"
"skillsaves":
  - "name": "[Animal Handling](Mechanics/CLI/rules/skills.md#Animal%20Handling)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 14"
"languages": "Common, Draconic"
"cr": "5"
"traits":
  - "desc": "The wyvern knight has advantage on saving throws against being [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Brave"
  - "desc": "When the wyvern knight falls while wearing this ring, it descends 60\
      \ feet per round and takes no damage from falling."
    "name": "Ring of Feather Falling"
"actions":
  - "desc": "The wyvern knight makes two lance attacks. If the wyvern knight is riding\
      \ a war wyvern, its mount can then make one bite, claw, or stinger attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 9 (1d12 + 3) piercing damage plus 10 (3d6) poison damage. The wyvern knight\
      \ has disadvantage on attacks with this weapon against creatures within 5 feet\
      \ of it and can wield this weapon in one hand instead of two while mounted."
    "name": "Lance"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:*\
      \ 5 (1d10) piercing damage plus 10 (3d6) poison damage."
    "name": "Heavy Crossbow"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage plus 10 (3d6) poison\
      \ damage."
    "name": "Dagger"
"reactions":
  - "desc": "When a creature the wyvern knight can see attacks a target that is within\
      \ 5 feet of it, including a creature it is riding, the knight can use a reaction\
      \ to impose disadvantage on the attack roll. The knight must be wielding a shield."
    "name": "Protection"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/wyvern-knight-ccodex.png"
```
^statblock

## Environment

mountain