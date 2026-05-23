---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity/worg
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fang of the Great Wolf
---
# [Fang of the Great Wolf](Mechanics\CLI\bestiary\monstrosity/fang-of-the-great-wolf-ccodex.md)
*Source: Creature Codex p. 384*  

*The light of reason in the large worg's eyes is unmistakable; it is a cunning beast, able to work together with goblin or worg allies to lure victims into ambushes or down dead-end paths.*

## Bestial Priests

A worg becomes a fang of the Great Wolf through the workings and rituals of the bestial cults of the Great Wolf, who seek out the craftiest of worgs for this honor. Once absorbed into the cult, the worgs serve more intelligent and powerful creatures such as werewolves and nightgarms (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 304), aiding them in keeping large packs of varied lupine beasts in order.

## Trophy Takers

Few things make a fang of the Great Wolf happier than tearing the arm rings from northern warriors and wearing them as trophies. When two or more fangs gather in one place, they compare and boast to one another about how the trophies were taken.

## No Thrall to Humanoids

After its transformation from a standard worg to a fang of the Great Wolf and its induction into the cult, the fang will not tolerate being ridden by any humanoid, including goblins and hobgoblins, though it may let one get close enough to try before making a meal of it.

```statblock
"name": "Fang of the Great Wolf (CCodex)"
"size": "Large"
"type": "monstrosity"
"subtype": "worg"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d10 + 10"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "13"
  - !!int "9"
  - !!int "13"
  - !!int "8"
"speed": "50 ft."
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+3"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+1"
"damage_resistances": "cold"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common, Goblin"
"cr": "3"
"traits":
  - "desc": "The worg has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (3d6 + 3) piercing damage. If the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 13)\
      \ if the worg isn't already grapping a creature. Until this grapple ends, the\
      \ target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and the\
      \ worg can't bite another target."
    "name": "Bite"
  - "desc": "The fang of the Great Wolf grows in size. This works like the enlarge/reduce\
      \ spell, except the worg can only enlarge and it lasts for 1 minute. While enlarged,\
      \ the fang of the Great Wolf gains the following action:\n\n- **Swallow..**\
      \ The worg makes one bite attack against a Medium or smaller target it is grappling.\
      \ If the attack hits, the target is also swallowed, and the grapple ends. While\
      \ swallowed, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside the worg, and it takes 10\
      \ (3d6) acid damage at the start of each of the worg's turns. The worg can\
      \ have only one creature swallowed at a time.  \n\n    If the worg takes 10\
      \ damage or more on a single turn from the swallowed creature, the worg must\
      \ succeed on a DC 11 Constitution saving throw at the end of that turn or regurgitate\
      \ the creature, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 5 feet of the worg. The creature is automatically regurgitated\
      \ when the worg is no longer enlarged. If the worg dies, a swallowed creature\
      \ is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by\
      \ it and can escape from the corpse by using 10 feet of movement, exiting [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \  "
    "name": "Might of the Great Wolf (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/fang-of-the-great-wolf-ccodex.png"
```
^statblock

## Environment

arctic, forest, grassland