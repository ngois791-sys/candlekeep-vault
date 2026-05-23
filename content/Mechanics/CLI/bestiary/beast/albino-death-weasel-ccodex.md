---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Albino Death Weasel
---
# [Albino Death Weasel](Mechanics\CLI\bestiary\beast/albino-death-weasel-ccodex.md)
*Source: Creature Codex p. 374*  

*This massive pale weasel moves with lightning speed. Its white fur is stained red with the crusty remains of its latest meal.*

Albino death weasels are ravenous hunters that spend every waking hour in search of food. Farming communities keep watchful eyes out for the signs of albino death weasel dens, since even large livestock, as well as the farmers themselves, are fair game to the creatures. Humanoids that inhabit forests and badlands, in particular, live in fear of albino death weasels.

## Hunting Beasts

Albino death weasels often serve as scenting and hunting beasts for ogres, hill giants, dark folk, vampires, and creatures of the Plane of Shadow. These trained weasels respond to voice commands and often wear a decorative collar or a distinctive earring.

## Foiling Invisible Intruders

Their combination of sharp hearing and their ability to detect prey by scent is believed to make them effective in sniffing out invisible intruders. Some wizards and druids rely on the weasels for precisely this reason.

```statblock
"name": "Albino Death Weasel (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "4"
  - !!int "15"
  - !!int "5"
"speed": "50 ft., burrow 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The weasel has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "If the weasel moves at least 20 feet straight toward a creature and then\
      \ hits it with a claw attack on the same turn, that target must succeed on a\
      \ DC 13 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the weasel\
      \ can make one bite attack against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage. The target is also [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 13) if it is a Medium or smaller creature and the albino weasel\
      \ isn't already grappling a creature. Until this grapple ends, the target is\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and the albino\
      \ death weasel can't claw another target."
    "name": "Claw"
  - "desc": "The weasel unleashes a spray of foul musk in a 20-foot cone. Each creature\
      \ in that area must succeed on a DC 12 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Musk Spray (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/albino-death-weasel-ccodex.png"
```
^statblock

## Environment

farmland, forest