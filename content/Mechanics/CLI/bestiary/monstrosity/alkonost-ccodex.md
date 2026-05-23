---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alkonost
---
# [Alkonost](Mechanics\CLI\bestiary\monstrosity/alkonost-ccodex.md)
*Source: Creature Codex p. 12*  

*Graceful birds with the face of a beautiful man or woman flock on the edges of dark clouds. Their plumage is the color of storms, ranging from light gray to dark slate with a green or violet hue shimmering on the eldest.*

## Singers for the Storm God

An alkonost's song is heard only as a precursor to a massive storm. On land, they are the harbingers of electric storms, tornadoes, and powerful winds. At sea, they fly with the seabirds ahead of hurricanes and squalls. Sailors consider their song a beautiful reckoning-a reminder that every soul has a black wave waiting to claim it.

## Druid's Ally

Alkonost sometimes roost in the sacred groves of druids. There, the enigmatic creatures lay their eggs, an act normally coinciding with a tremendous electrical storm in the area. They guard both grove and eggs until the young hatch several weeks later.

```statblock
"name": "Alkonost (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "7"
  - !!int "14"
  - !!int "13"
"speed": "20 ft., fly 40 ft."
"damage_resistances": "lightning"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "An alkonost is immune to the effects of magical and natural wind, including\
      \ effects that would force it to move, impose disadvantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks, or force it to land when flying. In addition, its weapon attacks do\
      \ an extra 2 (1d4) lightning damage if it is within 1 mile of a lightning\
      \ storm."
    "name": "One with Wind"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) slashing damage."
    "name": "Claws"
  - "desc": "The alkonost sings a beautiful melody. Each creature within 30 feet of\
      \ it that can hear the melody must succeed on a DC 12 Charisma saving throw\
      \ or take 7 (2d6) lightning damage the next time it moves."
    "name": "Charged Melody (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/alkonost-ccodex.png"
```
^statblock

## Environment

mountain