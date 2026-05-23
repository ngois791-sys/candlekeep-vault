---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Terror Bird
---
# [Terror Bird](Mechanics\CLI\bestiary\beast/terror-bird-ccodex.md)
*Source: Creature Codex p. 352*  

*The flightless terror bird stands nearly ten feet tall atop two immensely powerful legs. Its plumage ranges from dark russet or brown to bright green.*

## Pack Hunters

The terror birds live and hunt in packs of ten to twelve individuals. They are clever hunters, drawing their prey into positions that allow the birds to flank. Their attacks are done with blazing speed and ferocity, removing limbs in a flurry of lacerating bites. 

## Fortress Nests

Terror birds live in woods or copses of trees, where they assemble walls made of branches around large nests. The nests have several ways in and out, and creatures without the terror bird's long legs find navigating the nests difficult. Several adults stay behind to guard the eggs and nest while the rest go out hunting.

## Mounts for Plains Tribes

Tribes of dust goblins, hobgoblins, humans, and even gnolls have been known to capture terror birds for use as mounts in battle.

```statblock
"name": "Terror Bird (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "14"
  - !!int "3"
  - !!int "12"
  - !!int "10"
"speed": "50 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The terror bird has advantage on attack rolls against a creature if at\
      \ least one of the bird's allies is within 5 feet of the creature and the ally\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "Terror birds who move at least 20 feet straight toward a target have\
      \ advantage on the next attack roll against that target."
    "name": "Passing Bite"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (3d6 + 4) slashing damage. The target must succeed on a DC 12 Constitution\
      \ saving throw or take 7 (2d6) slashing damage at the beginning of its next\
      \ turn."
    "name": "Serrated Beak"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/red-queen-ccodex.png"
```
^statblock

## Environment

forest