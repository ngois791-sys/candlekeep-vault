---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Karakura
---
# [Karakura](Mechanics\CLI\bestiary\fiend/karakura-ccodex.md)
*Source: Creature Codex p. 235*  

*The karakura is a creature of haze and shadow, its hypnotic presence often overpowering.*

## Charismatic Predators

Karakura are vampiric fiends that use their wit and charm to draw in prey rather than chase it down. They prefer to charm mortals and feed upon devotion and love, though flesh and blood will do in a pinch.

## Corruptors for the Cause

Karakura often serve demon lords who direct them to seduce and corrupt mortals. As a mortal falls under the fiendish influence, a taint spreads upon its soul. It is transformed into a mane when it dies, which provides sustenance for the demon lords. The karakura regularly serve Alquam, the Demon Lord of Night (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), and his realm serves as a home to many karakura.

```statblock
"name": "Karakura (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "17d8"
"modifier": !!int "4"
"stats":
  - !!int "7"
  - !!int "18"
  - !!int "11"
  - !!int "15"
  - !!int "13"
  - !!int "20"
"speed": "30 ft., fly 40 ft."
"saves":
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+8"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_vulnerabilities": "radiant"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Abyssal, Infernal, telepathy 60 ft."
"cr": "5"
"traits":
  - "desc": "The karakura can only exist on the Material Plane at night or underground.\
      \ Spells or effects that count as sunlight cast the fiend back to the Plane\
      \ of Shadow for 1d4 hours."
    "name": "Night Walkers"
  - "desc": "The karakura can use its action to polymorph into a Small or Medium humanoid,\
      \ or back into its true form. Other than its size, its statistics are the same\
      \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
      \ reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "The karakura can telepathically communicate with any creature it has\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed) at any distance and across\
      \ different planes."
    "name": "Telepathic Bond"
"actions":
  - "desc": "The karakura makes three claw attacks and can use Charm or Shroud in\
      \ Darkness, if it is available."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "One humanoid the karakura can see within 30 feet of it must succeed on\
      \ a DC 15 Wisdom saving throw or be magically [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ until dawn. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target\
      \ obeys the fiend's commands. If the target suffers any harm or receives a suicidal\
      \ command, it can repeat the saving throw to end the effect. If the target successfully\
      \ saves, or if the effect on it ends, the target is immune to this karakura's\
      \ Charm for the next 24 hours.\n\nThe karakura can have only one target [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ at a time. If it charms another, the effect on the previous target ends."
    "name": "Charm"
  - "desc": "Bands of shadow stretch out from the karakura and wrap around a target\
      \ it can see within 30 feet. The target must succeed on a DC 15 Charisma saving\
      \ throw or be translocated to the Plane of Shadow for 1 minute. The creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. When a target exits the shroud, it appears in an unoccupied\
      \ space within 10 feet of the karakura.\n\nThe karakura can have only one target\
      \ in its shroud at a time. It can release a target as a bonus action.\n\nWhile\
      \ in the Plane of Shadow, the target is bombarded with horrific images and sensations.\
      \ Each round it remains in the Plane of Shadow, it must succeed on a DC 15 Charisma\
      \ saving throw or gain one short-term madness. A target held in the shroud is\
      \ released when the karakura dies."
    "name": "Shroud in Darkness (Recharge 5-6)"
  - "desc": "The karakura can magically enter the Plane of Shadow from the Material\
      \ Plane, or vice versa."
    "name": "Shadow Walk"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/karakura-ccodex.png"
```
^statblock

## Environment

planar