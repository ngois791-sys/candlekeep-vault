---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Grindylow
---
# [Grindylow](Mechanics\CLI\bestiary\aberration/grindylow-ccodex.md)
*Source: Creature Codex p. 210*  

*This creature has a fishlike head that is almost triangular in shape, sloping down and outward toward its wide mouth, filled with small, sharp teeth. Large eyes stare unblinking from its hideous face. A scrawny chest, covered in fish scales, supports two long, wiry arms which end in three clawed digits. Its lower body resembles the long tail of an eel.*

## Menace of the Shallows

Grindylows live in small bands of a dozen or so individuals, primarily in warm, coastal waters. Often hunted down by merfolk, they are quick to ingratiate themselves with other intelligent predators like the sahaugin in the hopes of gaining some protection. In this way, they often find themselves absorbed into the cults of their allies, dedicated to demon lords and malevolent sea gods.

## A Taste for Fear

Grindylows don't care much about religious pursuits, however. Their single passion in life consists of lurking in tide pools, rivers, and lagoons, where they wait for gnomes, halflings, or human children to come near the water's edge so they can leap up with their long, wiry arms and drag their victims under the water. They eat what they kill in this manner, but this is a matter of convenience. Their true enjoyment is derived from the attack and the fearful reactions of their prey, not the resulting meal.

## Murderous Mimics

Grindylows have some talent at voice mimicry which they sometimes use to lure creatures closer to the shore, but the most use this talent sees is in the recounting of the screams of their latest or greatest successes.

```statblock
"name": "Grindylow (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "14"
  - !!int "12"
  - !!int "8"
  - !!int "14"
  - !!int "9"
"speed": "10 ft., swim 40 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+4"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Aquan"
"cr": "1"
"traits":
  - "desc": "The grindylow can mimic humanoid voices. A creature that hears the sounds\
      \ can tell they are imitations with a successful DC 13 Wisdom ([Insight](Mechanics/CLI/rules/skills.md#Insight))\
      \ check."
    "name": "Mimicry"
  - "desc": "The grindylow has advantage on ability checks and saving throws made\
      \ to escape a grapple."
    "name": "Slippery"
  - "desc": "The grindylow can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "The grindylow makes two attacks. one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (2d6 + 1) slashing damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 13). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the grindylow can't use its claws on another target."
    "name": "Claws"
  - "desc": "A 20-foot-radius cloud of ink extends all around the grindylow if it\
      \ is underwater. The area is heavily obscured for 1 minute, although a significant\
      \ current can disperse the ink.\n\nAfter releasing the ink, the grindylow can\
      \ use the [Dash](Mechanics/CLI/rules/actions.md#Dash) action as a bonus action."
    "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/grindylow-ccodex.png"
```
^statblock

## Environment

underwater