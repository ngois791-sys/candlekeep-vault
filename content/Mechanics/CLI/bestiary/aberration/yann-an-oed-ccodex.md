---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yann-An-Oed
---
# [Yann-An-Oed](Mechanics\CLI\bestiary\aberration/yann-an-oed-ccodex.md)
*Source: Creature Codex p. 391*  

*From the fog, a monstrous form emerges. Its initial resemblance to an upright toad is quickly dispelled, as it reaches out with masses of long, writhing tentacles. Six eyes glow balefully above its massive fissure of a mouth.*

Shaped like a bipedal frog or toad, its arms are stumps that end in a mass of long, writhing tentacles. Three yellow eyes adorn either side of the yann-an-oed's head, and its mouth is a massive fissure.

## Dimensional Drifters

Found in oceans across multiple dimensions, many believe the spores of the yann-an-oed drift through the spaces between realities until they find a world that has adequate water and prey.

```statblock
"name": "Yann-An-Oed (CCodex)"
"size": "Huge"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "47"
"hit_dice": "5d12 + 15"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "11"
  - !!int "17"
  - !!int "8"
  - !!int "14"
  - !!int "7"
"speed": "30 ft., swim 40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+2"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 14"
"languages": "Aquan, telepathy 120 ft."
"cr": "2"
"traits":
  - "desc": "The yann-an-oed can breathe air and water."
    "name": "Amphibious"
  - "desc": "The yann-an-oed has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while underwater."
    "name": "Underwater Camouflage"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 15 ft., one target. *Hit:*\
      \ 7 (2d4 + 2) bludgeoning damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 12).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ The yann-an-oed can have only two targets [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ at a time."
    "name": "Tentacles"
  - "desc": "The yann-an-oed makes a bite attack against a Large or smaller creature\
      \ it is grappling. If the attack hits, the target is also swallowed, and the\
      \ grapple ends. While swallowed, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside the yann-an-oed, and it takes\
      \ 7 (2d6) acid damage at the start of each of the yann-an-oed's turns. A yann-an-oed\
      \ can have only one creature swallowed at a time.\n\nIf the yann-an-oed takes\
      \ 10 damage or more on a single turn from the swallowed creature, the yann-an-oed\
      \ must succeed on a DC 11 Constitution saving throw at the end of that turn\
      \ or regurgitate the creature, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the yann-an-oed. If the yann-an-oed dies, a swallowed\
      \ creature is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 10 feet of movement, exiting\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
  - "desc": "The yann-an-oed emits an owl-like hoot from a blowhole near the top of\
      \ its head. Each creature within 120 feet that is able to hear the sound must\
      \ succeed on a DC 12 Wisdom saving throw or return the hooting sound, if it\
      \ can make noise. The yann-an-oed is able to unerringly track a creature that\
      \ responds to its call for 1 hour, even if the creature is hidden by magic or\
      \ on another plane of existence."
    "name": "Hoot (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/yann-an-oed-ccodex.png"
```
^statblock

## Environment

underwater