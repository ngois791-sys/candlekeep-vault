---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Two-headed Eagle
---
# [Two-headed Eagle](Mechanics\CLI\bestiary\monstrosity/two-headed-eagle-ccodex.md)
*Source: Creature Codex p. 360*  

*With two sets of sharp eyes and razor-sharp beaks, the two-headed eagle spots its prey and snatches it up with frightening speed. Drawn to shiny objects, the eagle swoops down, snatching a mounted knight from its horse.*

## Hunters of the Unseen

Enormous birds of prey, twoheaded eagles soar the skies of many parts of the world, using their extraordinarily keen vision to hunt down prey and threats to their nests alike. Their ability to see invisible creatures has led to many ill-fated attempts to raid their nests; the same ability that makes them so sought after as potential guardians also makes their nests nigh impossible to approach undetected.

## Dangerous Favorites

Considered to be wise birds, they are nonetheless attracted to shiny objects, much to the dismay of the occasional, armored noble. This tendency, coupled with their disdain for herds of livestock as prey, has played a large role in their continued favor among villagers and country folk in many lands. While two-headed eagles do feed on deer, elk, and other game favored by hunters, their preferred prey consists of giant snakes, wild and dire boar, and large river fish.

## Symbol of the Watchful

Known for their ability to see the invisible, two-headed eagles appear frequently on coats of arms, symbolizing watchfulness, a dedication to truth, or a wariness for deception or assassins.

> [!note] Two-Headed Eagles in Midgard
> 
> These enormous birds of prey are both revered and feared in many lands. In the Maritime Republic of Triolo, two-headed eagles nest on a fortified harbor island near a temple of the sea god, Nethus. They are often seen plucking frightening creatures out of the waves to drop on the rocks from great heights, feeding on the smashed carcasses. Triolans consider them sacred and believe they use their ability to see the invisible to protect the land from would-be assassins. That the birds also cause the odd disappearance of travelers on remote stretches of road nearby is considered impolite to mention.
> 
> High in the Cloudwall Mountains, a Krakovan red-feathered variety hunts sheep and mountain goats in the high, snow-covered passes. These eagles are sometimes hunted by those seeking favor with King Lucan who likes the crimson plumage for his elite knights.
^two-headed-eagles-in-midgard

```statblock
"name": "Two-headed Eagle (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "142"
"hit_dice": "15d12 + 45"
"modifier": !!int "5"
"stats":
  - !!int "20"
  - !!int "21"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "14"
"speed": "20 ft., fly 100 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 14"
"languages": "Understands Common but can't speak"
"cr": "7"
"traits":
  - "desc": "The two-headed eagle doesn't provoke an opportunity attack when it flies\
      \ out of an enemy's reach."
    "name": "Flyby"
  - "desc": "The eagle has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks and on saving throws against being [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [stunned](Mechanics/CLI/rules/conditions.md#Stunned),\
      \ and knocked [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)."
    "name": "Two-headed"
  - "desc": "While the two-headed eagle sleeps, at least one of its heads is awake."
    "name": "Wakeful"
"actions":
  - "desc": "The two-headed eagle makes two bite attacks and one talons attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 16\
      \ (2d10 + 5) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) piercing damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the two-headed eagle can't use its talons on another target."
    "name": "Talons"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/two-headed-eagle-ccodex.png"
```
^statblock

## Environment

mountain