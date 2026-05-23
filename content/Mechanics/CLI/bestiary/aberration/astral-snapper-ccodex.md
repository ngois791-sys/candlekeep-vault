---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Astral Snapper
---
# [Astral Snapper](Mechanics\CLI\bestiary\aberration/astral-snapper-ccodex.md)
*Source: Creature Codex p. 43*  

*This hideous creature has the body of a pale human. Its yellow eyes are slit with vertical pupils, and its wide grin reveals a mouth full of shark's teeth.*

## Hunters from Beyond

Mysterious extraplanar creatures, astral snappers hunt humanoids on the Material Plane, but they feed on their victim's innards while concealed in the Astral Plane. They erupt back into the Material Plane from the slain creature once the feast is complete. Though they are most at home in the Astral Plane, they can only get there through killing another creature and can only remain there until they have fed.

## Servants or Parasites

The few scholars familiar with these creatures speculate that they may have come into the world either attached to or in the wake of far greater creatures from beyond the stars, and perhaps they serve such godlike beings in some way.

## Strange Hungers

Astral snappers hunt by means of stealth and ambush, while seeking out lone travelers. When the astral snapper enters the victim's body by opening a portal in it to the Astral Plane, many of the creatures believe the astral snapper has simply broken off its attack and vanished. They count themselves lucky right up until the first pains of being devoured from the inside strike them.

```statblock
"name": "Astral Snapper (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "16"
  - !!int "8"
"speed": "40 ft."
"saves":
  - "constitution": !!int "4"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+1"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Deep Speech"
"cr": "3"
"traits":
  - "desc": "A creature hosting an astral snapper's astral form must make a DC 13\
      \ Wisdom saving throw each time it finishes a long rest. On a success, the astral\
      \ snapper is ejected from the host and the Astral Plane into an unoccupied space\
      \ in the Material Plane within 10 feet of the host and is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ for 1 round. On a failure, the astral snapper consumes part of the host's\
      \ internal organs, reducing the host's Constitution score by 1d4. The host\
      \ dies if this reduces its Constitution to 0. The reduction lasts until the\
      \ host finishes a long rest after the astral snapper has been expelled. If the\
      \ host's Constitution score is reduced to 0, the astral snapper exits the host's\
      \ body in the Material Plane by tearing its way out through the abdomen. The\
      \ astral snapper becomes completely corporeal as it exits the host, stepping\
      \ out of the host at its full size.\n\nFrom the time the astral snapper succeeds\
      \ on the initial dive into the host through the Astral Plane until the moment\
      \ it emerges from the host's abdomen, it can be seen by any creature that can\
      \ see into the Astral Planeits head buried in the host's back. The astral snapper\
      \ has disadvantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks and is effectively [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ when in this position until it takes damage."
    "name": "Astral Devour"
"actions":
  - "desc": "The astral snapper makes two attacks with its claws. If both attacks\
      \ hit the same target, the target must succeed on a DC 13 Wisdom saving throw\
      \ or its wound becomes a rift to the Astral Plane. The astral snapper immediately\
      \ passes through, closing the rift behind it. The target is then affected by\
      \ the astral snapper's Astral Devour trait."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/astral-snapper-ccodex.png"
```
^statblock

## Environment

farmland, urban