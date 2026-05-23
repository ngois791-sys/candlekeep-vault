---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Flame-scourged Scion
---
# [Flame-scourged Scion](Mechanics\CLI\bestiary\aberration/flame-scourged-scion-ccodex.md)
*Source: Creature Codex p. 159*  

*This tree-like creature's hide is charred, cracked, and oozing. A crown of long, branching tentacles set with goat-like eyes encircles a central fanged maw at the top of its bulk. Root-like appendages end in blackened, sooty hooves.*

## Born of Burned Groves

During a great scourge that broke the power of a dark goddess' followers and the power of the mages who worshiped her, crusaders destroyed her unholy groves. Her loyal followers and guardians were slain and the groves were razed with holy fire. All the unholy trees of those vile groves burned, as did the profane offspring of the dark goddess. However, not all that were burned died. The strongest of her children lived, and they remain as guardians of those lost places of power. Their might has warped and changed, but it is hardly diminished.

## Unholy Trees

Flame-scourged scions often lurk in their unholy mother's groves in tree form. Where once they would take the shape of living trees, now they appear as leafless, charred husks, to blend in with the hardscrabble nature of these desolate areas.

```statblock
"name": "Flame-scourged Scion (CCodex)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "125"
"hit_dice": "10d12 + 60"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "22"
  - !!int "16"
  - !!int "6"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "10"
  - "wisdom": !!int "2"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "fire; slashing from nonmagical weapons"
"condition_immunities": "[grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Common, Deep Speech, Sylvan"
"cr": "9"
"traits":
  - "desc": "When a flame-scourged scion takes fire damage, it has advantage on its\
      \ attack rolls until the end of its next turn. If it takes more than 5 fire\
      \ damage, it has advantage on its attack rolls for 2 rounds."
    "name": "Burning Rage"
  - "desc": "A flame-scourged scion can see through areas obscured by fire, smoke,\
      \ and fog without penalty."
    "name": "Firesight"
  - "desc": "Difficult terrain caused by rocks, sand, or natural vegetation, living\
      \ or dead, doesn't cost the flamescourged scion extra movement. Its speed can't\
      \ be reduced by any effect."
    "name": "Groundbreaker"
"actions":
  - "desc": "The flame-scourged scion makes three tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (2d10 + 4) bludgeoning damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 16).\
      \ Until the grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ the flame-scourged scion can automatically hit the target with its tentacle,\
      \ and it can't use the same tentacle on another target. The flame-scourged scion\
      \ can grapple up to two creatures at one time."
    "name": "Tentacle"
  - "desc": "The flame-scourged scion fills the area around itself with a cloud of\
      \ burning embers. Each creature within 10 feet of the flame-scourged scion must\
      \ make a DC 18 Constitution saving throw, taking 28 (8d6) fire damage on a\
      \ failed save, or half as much damage on a successful one. The embers die out\
      \ within moments."
    "name": "Embers (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/flame-scourged-scion-ccodex.png"
```
^statblock

## Environment

badlands, forest