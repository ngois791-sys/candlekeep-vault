---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Haunted Giant
---
# [Haunted Giant](Mechanics\CLI\bestiary\giant/haunted-giant-ccodex.md)
*Source: Creature Codex p. 183*  

*This giant appears dead-eyed and sullen, trudging along as if the weight of the entire world rests on his shoulders. Three huge ghostly figures swirl around the giant who looks at them with a mixture of fear and loathing.*

By adolescence, some male hill and stone giants are plagued by the spirits of their ancestors. The ghosts' incessant whispers drive them off alone or in small familial groups to lay their ancestors' remains to rest. This can consume their lives to the extent that even breeding isn't a priority, so the giants' own ancestors drive their race toward extinction. The more who die, the more ghosts return to burden the living, leading many tribes to cremate their dead—though this is considered a vile act of desecration by many giants.

## Anchored to Descendants

This ghostly harassment manifests itself as an ancestral spirit. These spirits are anchored to the souls of their descendants and appear near their host either as dark, flickering shades or as looming, spectral apparitions. The giant will take steps to defend its ancestral spirits if they are attacked but will likely be glad at the temporary respite if the spirits are driven off.

## Permanent Haunting

Spirits return to plague their briefly relieved descendants at the rate of one spirit per hour. The spirits cannot be destroyed permanently unless their bones are found and laid to rest.

```statblock
"name": "Haunted Giant (CCodex)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d12 + 48"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "8"
  - !!int "19"
  - !!int "5"
  - !!int "9"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "2"
  - "constitution": !!int "7"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "Giant"
"cr": "6"
"traits":
  - "desc": "Three ghostly spirits haunt the giant. The spirits are incorporeal, remain\
      \ within 10 feet of the giant at all times, and can't take actions. Each uses\
      \ the giant's AC and saving throws, has 15 hp and can only be harmed by radiant\
      \ damage. If an ancestral spirit is reduced to 0 hp, it disappears temporarily.\
      \ Reduce the giant's AC by 1 and remove one trait granted by the spirits for\
      \ each spirit that is driven off. Ancestral spirits can't be turned."
    "name": "Ancestral Spirits"
  - "desc": "At the start of its turn, the giant can gain advantage on all melee weapon\
      \ attack rolls during that turn, but attack rolls against it have advantage\
      \ until the start of its next turn. This trait is granted by the ancestral spirits."
    "name": "Reckless"
  - "desc": "The giant can see [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ creatures and objects as if they were visible and can see into the Ethereal\
      \ Plane. This trait is granted by the ancestral spirits."
    "name": "See Invisibility"
  - "desc": "The giant is immune to the [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ and [frightened](Mechanics/CLI/rules/conditions.md#Frightened) conditions.\
      \ This trait is granted by the ancestral spirits."
    "name": "Steadfast"
"actions":
  - "desc": "The giant makes two greatclub attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (3d8 + 5) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 60/240 ft., one target. *Hit:*\
      \ 21 (3d10 + 5) bludgeoning damage."
    "name": "Rock"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/haunted-giant-ccodex.png"
```
^statblock

## Environment

badlands, mountain