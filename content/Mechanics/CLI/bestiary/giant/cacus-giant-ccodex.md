---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cacus Giant
---
# [Cacus Giant](Mechanics\CLI\bestiary\giant/cacus-giant-ccodex.md)
*Source: Creature Codex p. 181*  

*Noxious smoke pours from the nostrils and mouth of this grinning giant.*

## A Divine Beginning

The original cacus giants spawned from a lesser deity of fire. The fire-bred giants acted as servants and helpers for their divine sire. After an interval of service, the cacus giants were released from their duties, free to make their own way in the mortal world.

While a few cacus giants found a place in the world, most bullied, abused, or robbed the mortals they encountered. Their lack of social graces and violent tempers put them into conflict with mortals, leading to heroes frequently hunting down and killing the cacus giants. As the years passed and the best of the giants fell, the cacus giants devolved into murderous beasts, surviving only by raiding and plundering civilized areas.

## Raiders and Pillagers

The current cacus giants lair within walking distance of civilized areas, surviving by stealing and consuming livestock or humans. Although they are not very intelligent, cacus giants possess enough cunning to trick those who try to track them back to their lairs, laying down false trails and preparing traps to dissuade and injure pursuers.

## Leaders and Followers

Enterprising and charismatic bandit princes may bribe, cajole, and flatter cacus giants into being the "leader" of the group, all the while controlling the foolish giants. Cacus giants might also be taken into the care of fire giants, who treat the cacus giants as shock troops in their war bands.

Occasionally a gifted and lucky cacus giant might actually become the leader of a group of raiders that plague an area. After stealing everything that is within easy reach, the group moves to another area, searching for similarly easy pickings.

```statblock
"name": "Cacus Giant (CCodex)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"modifier": !!int "0"
"stats":
  - !!int "21"
  - !!int "11"
  - !!int "20"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"damage_immunities": "fire"
"senses": "passive Perception 15"
"languages": "Giant"
"cr": "6"
"traits":
  - "desc": "When the cacus giant dies, it exhales a final breath of divine essence\
      \ in a gout of intense fire. Each creature within 5 feet of it must make a DC\
      \ 16 Dexterity saving throw, taking 27 (6d8) fire damage on a failed save,\
      \ or half as much damage on a successful one."
    "name": "Final Breath"
"actions":
  - "desc": "The cacus giant makes two greatclub attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (3d8 + 5) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 30/120 ft., one target. *Hit:*\
      \ 27 (4d10 + 5) bludgeoning damage."
    "name": "Rock"
  - "desc": "The cacus giant exhales fire in a 30-foot cone. Each creature in that\
      \ area must make a DC 16 Dexterity saving throw, taking 24 (7d6) fire damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/cacus-giant-ccodex.png"
```
^statblock

## Environment

mountain