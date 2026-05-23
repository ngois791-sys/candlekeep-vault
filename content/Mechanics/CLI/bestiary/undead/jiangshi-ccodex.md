---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jiangshi
---
# [Jiangshi](Mechanics\CLI\bestiary\undead/jiangshi-ccodex.md)
*Source: Creature Codex p. 230*  

*Its sickly-green, glowing skin covered in tattered robes, the undead creature lurches forward with a stiff, hopping motion, and baring claw-like hands. A thin strip of paper covered in tiny writing hangs from its hat.*

## Inauspicious Burials

A jiangshi is created when burial rites are carried out improperly. Unable to leave the body, the tortured soul re-animates the corpse after rigor mortis has set in, giving the jiangshi its rigid posture and nickname as a "hopping vampire." A jiangshi has a burial prayer written on a small scroll stitched to its forehead or hat, warding it against magic.

## Bizarre Gaits

Stiff-limbed and hunched, jiangshi move around by hopping, rather than walking, in search of living prey. It can make enormous leaps to catch a foe, and, when it grabs hold of a victim, it sucks out the creature's breath. Jiangshi are blind, detecting living victims by listening for the sounds of breathing. It is possible to remain undetected by a jiangshi by holding one's breath and keeping very still.

## Hungry Dead Nature

The jiangshi doesn't require air or sleep.

```statblock
"name": "Jiangshi (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "14"
"speed": "20 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 14"
"languages": "Understands the languages it knew in life but can't speak"
"cr": "6"
"traits":
  - "desc": "The jiangshi can't use its blindsight while [deafened](Mechanics/CLI/rules/conditions.md#Deafened)."
    "name": "Blind Senses"
  - "desc": "The jiangshi has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
  - "desc": "The jiangshi has advantage on saving throws against spells and other\
      \ magical effects. A creature can take its action while within 5 feet of the\
      \ jiangshi to rip the prayer off the jiangshi by succeeding on a DC 16 Strength\
      \ check. The jiangshi loses this trait if its prayer scroll is removed."
    "name": "Prayer of Magic Resistance"
  - "desc": "The jiangshi's long jump is up to 30 feet and its high jump is up to\
      \ 15 feet, with or without a running start."
    "name": "Standing Leap"
  - "desc": "When a creature that can see the jiangshi starts its turn within 30 feet\
      \ of the jiangshi, it must make a DC 14 Wisdom saving throw, unless the jiangshi\
      \ is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated). On a\
      \ failed save, the creature is [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ jiangshi's Terrifying Appearance for the next 24 hours."
    "name": "Terrifying Appearance"
"actions":
  - "desc": "The jiangshi makes two claw attacks. It can use Life Drain in place of\
      \ one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) slashing damage. The target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Medium or smaller creature and the jiangshi doesn't\
      \ have two other creatures [grappled](Mechanics/CLI/rules/conditions.md#Grappled)."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature that is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by the jiangshi, [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). *Hit:* 14 (4d6)\
      \ necrotic damage. The target must succeed on a DC 14 Constitution saving throw\
      \ or its hp maximum is reduced by an amount equal to the necrotic damage taken.\
      \ This reduction lasts until the target finishes a long rest. The target dies\
      \ if this effect reduces its hp maximum to 0.\n\nA humanoid slain in this way\
      \ rises 24 hours later as a jiangshi, unless the humanoid is restored to life,\
      \ its body is bathed in vinegar before burial, or its body is destroyed."
    "name": "Life Drain"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/jiangshi-ccodex.png"
```
^statblock

## Environment

farmland, urban