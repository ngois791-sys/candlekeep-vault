---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- War Wyvern
---
# [War Wyvern](Mechanics\CLI\bestiary\dragon/war-wyvern-ccodex.md)
*Source: Creature Codex p. 386*  

*This wyvern's thick armor, jagged claws, and heavy brow belies a pair of intelligent eyes. It looks upon its rider like a hound looks at its master.*

Bred to be fearsome, obedient, and intelligent mounts for elite knights, war wyverns are superior in all ways to their wild cousins. Their natural scales are enhanced with thick steel scale armor, and selective breeding has granted them the ability to spit venom, in addition to delivering it with their scorpion-like tails.

## Loyal and Deadly

A war wyvern is unflinchingly loyal and has been taught to unerringly follow verbal commands given by its master. In military situations, a wyvern's master will often command it to snatch cavalry riders from their horses with its steel-tipped talons, hurling them to their doom, or to use its spiked tail to smash siege weapons or supply wagons. Despite their viciousness on the battlefield, these domesticated wyverns serve their masters out of love, not fear, and act like energetic pit bulls when around those who treat them with kindness.

## Two Fight as One

Wyvern knights and their war wyverns act as a single unit in combat. A war wyvern cannot move or take actions independently while it is being used as a mount, but its specialized training gives it the ability to make a single attack when its rider takes the Multiattack action.

```statblock
"name": "War Wyvern (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "[scale mail](Mechanics/CLI/items/scale-mail-xphb.md)"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "6"
  - !!int "14"
  - !!int "6"
"speed": "20 ft., fly 80 ft."
"saves":
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Understands Common, Draconic but can't speak"
"cr": "7"
"traits":
  - "desc": "The wyvern deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The wyvern makes two attacks. one with its bite and one with its stinger.\
      \ While flying, it can use its claws in place of one other attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:*\
      \ 12 (2d6 + 5) piercing damage plus 10 (3d6) poison damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 18\
      \ (3d8 + 5) slashing damage and the creature is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the wyvern can't use its claw on another target."
    "name": "Claws"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:*\
      \ 12 (2d6 + 5) piercing damage. The target must make a DC 16 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Stinger"
  - "desc": "The wyvern spits venom at a target within 60 feet. The target must make\
      \ a DC 16 Constitution saving throw, taking 42 (12d6) poison damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Spit Venom (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/war-wyvern-ccodex.png"
```
^statblock

## Environment

mountain