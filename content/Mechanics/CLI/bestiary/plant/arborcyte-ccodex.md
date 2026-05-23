---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Arborcyte
---
# [Arborcyte](Mechanics\CLI\bestiary\plant/arborcyte-ccodex.md)
*Source: Creature Codex p. 40*  

*A mound of thorn-covered vines writhes into motion, rearing up to reveal an assemblage of bleached bones at its core. A hellish light gleams from the empty sockets of its many skulls.*

Though druids do not suffer twisted, unnatural things to survive in the wild, sometimes, in a cruel twist of fate, they become the very thing they abhor.

## Seed of Desecration

An arborcyte is the corrupted soul of a druid slain in the failed defense of its woodland home. A mass of vines crawl to the dying druid to serve as a vessel into the afterlife. The druid's soul is then twisted by forces of desecration, and what arises is a shambling monstrosity consumed by the desire to destroy any life that enters its blighted glade.

## Skeletal Remains

Those slain by an arborcyte are eventually stripped of flesh and other organic materials by the acidic sap oozing from its many tendrils. Those bones not left to litter the forest floor work their way into the arborcyte's core, joining the remnants of other victims and the slain druid in a verdant ossuary.

## Insidious Destruction

An arbocyte becomes deadlier when it is attacked. As its vines are hacked apart, each of the thorny tendrils rises up to fight alongside the main mass of the creature, creating an undulating dance of death threatening anyone foolish enough to remain in proximity.

```statblock
"name": "Arborcyte (CCodex)"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "1"
"stats":
  - !!int "21"
  - !!int "12"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "3"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"condition_immunities": "[deafened](Mechanics/CLI/rules/conditions.md#Deafened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "8"
"traits":
  - "desc": "Whenever the arborcyte suffers 10 or more damage from a single attack,\
      \ a length of its vines breaks free. This animated tendril is under the arborcyte's\
      \ control, moving and acting as an extension of the creature. Each tendril has\
      \ AC 14, 10 hp, and a speed of 10 feet."
    "name": "Shearing"
"actions":
  - "desc": "The arborcyte makes two thorn vine attacks plus one animated tendril\
      \ attack for each tendril it can see that has been created through its Shearing\
      \ trait."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (3d8 + 5) piercing damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the target takes 7 (2d6) acid damage\
      \ at the start of each of the arborcyte's turns, and tendril attacks against\
      \ the target have advantage. The arborcyte can grapple up to two creatures at\
      \ one time."
    "name": "Thorn Vine"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 9 (1d8 + 5) piercing damage."
    "name": "Animated Tendril"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/arborcyte-ccodex.png"
```
^statblock

## Environment

farmland, forest, grassland