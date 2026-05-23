---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fleshpod Hornet
---
# [Fleshpod Hornet](Mechanics\CLI\bestiary\beast/fleshpod-hornet-ccodex.md)
*Source: Creature Codex p. 161*  

*A giant hornet with a yellow and red body, silver wings, and a black stinger buzzes angrily. Honeycomb-shaped bulbous tumors grow on its body.*

## Deadly Jungle Hunters

The fleshpod hornet makes it home in the deepest, darkest jungles. It eats the sweet fruits growing there but has learned to drink blood as well. Three or four fleshpod hornets can bring down even the largest jungle beasts. Very few people live long enough to describe a fleshpod hornet hive, as the beasts attack on sight.

## Honeycomb Tumors

Fleshpod hornets reproduce through their venomous stings. The eggs of the hornet are delivered with the poison, infecting a living creature. Within minutes, the eggs implanted in the victim form a lotus-pod tumor in its flesh. Immediately the eggs begin to hatch, feeding on the victim's body. Within 24 hours, the dominant larva reaches a form that can survive on its own. It bursts from the tumor and flies off.

The fleshpod hornet is not immune to its own tumors. While the hornet does not succumb to its own poison, it often bears several tumors, carrying its own eggs. The gestation period for the hornet's own eggs, however, are much slower than those eggs incubating in a victim.

```statblock
"name": "Fleshpod Hornet (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "120"
"hit_dice": "16d10 + 32"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "15"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 60 ft. (hover)"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": ""
"cr": "6"
"traits":
  - "desc": "If the fleshpod hornet flies at least 20 feet straight toward a creature\
      \ and then hits it with a slam attack on the same turn, that target must succeed\
      \ on a DC 13 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Flying Charge"
"actions":
  - "desc": "The fleshpod hornet makes two attacks. one with its slam and one with\
      \ its stinger."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one creature. *Hit:*\
      \ 13 (2d8 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one creature. *Hit:*\
      \ 11 (2d6 + 4) piercing damage. The target must make a DC 13 Constitution\
      \ saving throw, taking 21 (6d6) poison damage on a failed save, or half as\
      \ much damage on a successful one. On a failed saving throw, the target is also\
      \ infected with the eggs of the fleshpod hornet.\n\nThe injected eggs form a\
      \ circular lotus pod tumor, roughly half a foot in diameter, on the target within\
      \ 1 minute of injection. While carrying this tumor, the target has disadvantage\
      \ on skill checks and saving throws. Exactly 24 hours after the lotus pod appears,\
      \ a young fleshpod hornet (use giant wasp statistics) erupts from the tumor,\
      \ dealing does 33 (6d10) slashing damage to the target.\n\nThe tumor can be\
      \ excised with a DC 15 Wisdom ([Medicine](Mechanics/CLI/rules/skills.md#Medicine))\
      \ check, causing 16 (3d10) slashing damage to the host. If it is cut out without\
      \ the check, the patient must succeed on a DC 15 Constitution saving throw or\
      \ take 22 (4d10) slashing damage."
    "name": "Stinger"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/fleshpod-hornet-ccodex.png"
```
^statblock

## Environment

forest