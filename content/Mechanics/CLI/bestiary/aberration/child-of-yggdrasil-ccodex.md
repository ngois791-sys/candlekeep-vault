---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Child of Yggdrasil
---
# [Child of Yggdrasil](Mechanics\CLI\bestiary\aberration/child-of-yggdrasil-ccodex.md)
*Source: Creature Codex p. 61*  

*Long ago, a ratatosk found some dragon eggs, smeared them with the sap of the World Tree, and rolled them into a safe, warm place for later devouring. The eggs hatched a race of hunters that have plagued the ratatosk ever since.*

The children of Yggdrasil are sentient parts of the World Tree, saplings with long "hair" of ash leaves and radial symmetry. A child of Yggdrasil's four legs are rootlike and often planted in the ground. Its eyes sit at the center of flowers, and its "hands" resemble tentacles, though with twiggy branches rather than fingers.

## Cliff-Lovers

The children of Yggdrasil climb vertical cliffs and steep slopes in search of warmth and sunlight, roosting in these places until thirst drives them to climb down to a stream or pond. They often devour bird eggs on cliffs and can catch unwary climbers by surprise.

## Whispering Serpent Egg Horrors

Legends say the children of Yggdrasil came from a dragon's egg laid on the World Tree, which hatched a huge mass of serpents, each of them infused with the sap and cold wisdom of the World Tree itself. These larval forms of the children of Yggdrasil resemble a ball of serpents intertwined with leaves, and they feed on squirrels and mice until they grow large enough to lure bigger prey.

## Hissing Wind

The snakelike tongues and forked leaves of a child of Yggdrasil are always in motion; they are never entirely silent. In groups of three or more, the sound of their hissing resembles an ill, disquieting wind.

## Grove Gatherings

At night they come down from cliffs and hills and gather near streams to hiss, whisper, mate, and devour sacrifices left to them by druids or giants. At times like this, up to a dozen children of Yggdrasil may gather in one place, fusing their limbs and branches until shortly before dawn, when they go their separate ways.

```statblock
"name": "Child of Yggdrasil (CCodex)"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d10 + 30"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "18"
  - !!int "8"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_vulnerabilities": "fire"
"damage_immunities": "acid; cold; bludgeoning from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Common, Giant"
"cr": "6"
"traits":
  - "desc": "As an action, the child of Yggdrasil destroys one nonmagical object that\
      \ isn't being worn or carried, such as a rope, plank, candlestick, or even an\
      \ entire bronze cauldron."
    "name": "Acid Touch"
  - "desc": "The child of Yggdrasil has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in forest terrain."
    "name": "Forest Camouflage"
  - "desc": "The child of Yggdrasil has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "The child of Yggdrasil makes three claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) slashing damage plus 7 (2d6) acid damage."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/child-of-yggdrasil-ccodex.png"
```
^statblock

## Environment

forest