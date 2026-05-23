---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hallowed Reed
---
# [Hallowed Reed](Mechanics\CLI\bestiary\celestial/hallowed-reed-ccodex.md)
*Source: Creature Codex p. 304*  

{These small patches of pale, yellow and green reeds with bright white tips propagate by merging with nearby mundane grasses and weeds. The merging process slowly transforms the native plant into these sentient stalks. The reeds serve as the sensors of a lustrating grove, growing out from the grove for several miles like luminescent fingers stretching across the landscape.}

## Ritual Use

The reeds sometimes allow small portions of their central mass to be cut away by good-aligned spellcasters. The pieces can be dried and carried or affixed to a holy symbol. The magic of hallowed reeds affects spells casts as rituals, often increasing their power, duration, or likelihood of success. Similarly, the reeds can be sacrificed in summoning rituals to increase the likelihood that the summoned creature will obey its master. For this reason, the reeds are hunted by evil diabolists and elementalists.

## Rule of Three

It is rare for the hallowed reeds to grow in clusters numbering less than three. It is equally rare to encounter the reeds in numbers not divisible by three. Once three hallowed reeds come to maturity, they often sprout a young alabaster tree, which they protect until it fully matures.

```statblock
"name": "Hallowed Reed (CCodex)"
"size": "Medium"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "10 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing"
"damage_immunities": "radiant"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft. (blind beyond\
  \ this radius), passive Perception 14"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The hallowed reed knows if a creature within 30 feet of it is good-aligned\
      \ or not."
    "name": "Like Calls to Like"
  - "desc": "Using telepathy, a hallowed reed can magically communicate with any other\
      \ good-aligned creature within 100 feet of it. This communication is primarily\
      \ through images and emotions rather than actual words."
    "name": "Limited Telepathy"
  - "desc": "If a hallowed reed is slain, a new patch of hallowed reeds will grow\
      \ in the same spot starting within a week of its death. Charring or salting\
      \ the ground where a hallowed reed was slain prevents this resurgence."
    "name": "Rebirth"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 15 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) radiant damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 12). Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ it takes 2 (1d4) radiant damage at the start of each of its turns, and the\
      \ hallowed reed can't grasp another target. Undead and fiends have disadvantage\
      \ on ability checks made to escape the grapple."
    "name": "Searing Grasp"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/hallowed-reed-ccodex.png"
```
^statblock

## Environment

any