---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alabaster Tree
---
# [Alabaster Tree](Mechanics\CLI\bestiary\celestial/alabaster-tree-ccodex.md)
*Source: Creature Codex p. 301*  

*These large and exaggerated versions of mundane oak, pine, or willow trees boast steel-hard trunks and brightly glowing foliage. The bark of these trees form placid visages that stare out mutely at the surrounding landscape. While only three varieties have been found, priests and scholars speculate that the spirited trees could manifest in any arboreal form. Animals happily make homes in the branches and roots of the alabaster trees, where they enjoy protection and unnaturally long lives.*

## Stars in the Branches

An alabaster tree welcomes kind‑hearted and good-aligned creatures by illuminating its leaves and needles with pulses of brilliant white light. During this time, the tree will attempt to communicate with the creature for the purpose of sharing information about the goings-on in the region.

## Protectors

Alabaster trees are the protectors of a lustrating grove. Their ability to move quickly for short periods of time and their tough trunks make them formidable combatants. The trees suffer no evil or trickery and happily toss interlopers out of the grove.

```statblock
"name": "Alabaster Tree (CCodex)"
"size": "Huge"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d12 + 40"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "18"
  - !!int "10"
  - !!int "14"
  - !!int "10"
"speed": "10 ft."
"saves":
  - "strength": !!int "8"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "radiant"
"condition_immunities": "[stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 15"
"languages": "All, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "As a bonus action, the alabaster tree moves up to five times its speed,\
      \ leaving a trail of difficult terrain behind it."
    "name": "Churning Advance (3/Day)"
  - "desc": "Hallowed reeds within 60 feet of an alabaster tree have advantage on\
      \ saving throws."
    "name": "Foster the Grasses"
  - "desc": "The alabaster tree knows if a creature within 60 feet of it is good-aligned\
      \ or not."
    "name": "Like Calls to Like"
  - "desc": "A good-aligned creature who takes a short rest within 10 feet of an alabaster\
      \ tree gains all the benefits of a long rest."
    "name": "Soul's Respite"
"actions":
  - "desc": "The alabaster tree makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (3d4 + 5) bludgeoning damage plus 4 (1d8) radiant damage and the creature\
      \ is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 16)."
    "name": "Slam"
  - "desc": "The alabaster tree makes one slam attack against a Large or smaller target\
      \ it is grappling. If the attack hits, the target is engulfed in razor-sharp\
      \ leaves, and the grapple ends. While engulfed, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total\
      \ cover against attacks and other effects outside of the leaves, and it takes\
      \ 13 (3d8) slashing damage at the start of each of the alabaster tree's turns.\
      \ An alabaster tree can have only one creature engulfed at a time.\n\nIf the\
      \ alabaster tree takes 15 damage or more on a single turn from the engulfed\
      \ creature, the alabaster tree must succeed on a DC 14 Constitution saving throw\
      \ at the end of that turn or release the creature in a shower of shredded leaves.\
      \ The released creature falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the alabaster tree. If the alabaster tree dies,\
      \ an engulfed creature is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape from the leaves and branches by using an action to untangle\
      \ itself."
    "name": "Serrated Squeeze (Willow Only)"
  - "desc": "One Large or smaller object held or creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the alabaster tree is thrown up to 40 feet in a random direction and knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). If a thrown target strikes\
      \ a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10\
      \ feet it was thrown. If the target is thrown at another creature, that creature\
      \ must succeed on a DC 15 Dexterity saving throw or take the same damage and\
      \ be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Toss (Oak Only)"
  - "desc": "The alabaster tree fires a cloud of sharp needles at all creatures within\
      \ 30 feet of it. Each creature in that area must make a DC 15 Dexterity saving\
      \ throw, taking 18 (4d8) piercing damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Cloud of Needles (Recharge 5-6) (Pine Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/alabaster-tree-ccodex.png"
```
^statblock

## Environment

any