---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Xiphus
---
# [Xiphus](Mechanics\CLI\bestiary\fey/xiphus-ccodex.md)
*Source: Creature Codex p. 388*  

*A faint ticking and a blur of light and limbs almost too fast to see are the only warnings that trouble is coming.*

These tiny beings have silver or white hair and bronze skin that shimmers no matter how much or little light is present. They have tall, pointed ears and slightly slanted eyes. A contraption of gears, pistons, and hourglasses filled with red sand spin and whir where the xiphus' heart should be.

## Gear-Hearted

Clockwork-enhanced fey, the xiphus were once [quickstep](Mechanics/CLI/bestiary/fey/quickstep-ccodex.md), but, long ago, they gave up on being merely flesh. When a xiphus comes of age, it undergoes an intense ritual in which its heart is replaced with a clockwork apparatus that beats like a heart and grants the fey power over time.

## Brotherly Rivals

They consider the quicksteps somewhat dim-witted for not making the same adjustment, and the two speedy fey rarely get along well for any length of time.

## Triple Speech

A xiphus speaks so rapidly that often it is not understood on a first pass—and so most xiphus will repeat themselves at least once and often twice when they are speaking to "the slow ones."

```statblock
"name": "Xiphus (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "55"
"hit_dice": "10d6 + 20"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "21"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "8"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_immunities": "lightning"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish"
"cr": "5"
"traits":
  - "desc": "If the xiphus is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the xiphus instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Whenever the xiphus is subjected to lightning damage, it takes no damage\
      \ and instead regains a number of hp equal to the lightning damage dealt."
    "name": "Lightning Absorption"
  - "desc": "As a bonus action, a xiphus chooses one creature it can see. The xiphus'\
      \ clockwork heart vibrates rapidly, bending time to give the xiphus the upper\
      \ hand against its chosen target. The xiphus chooses whether to have advantage\
      \ on its attacks against that target or on saving throws against spells cast\
      \ by the target until the start of the xiphus' next turn."
    "name": "Siphon Time (Recharge 5-6)"
  - "desc": "The movements of a xiphus are so swift that it is almost [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ when in motion. If the xiphus moves at least 10 feet on its turn, attack rolls\
      \ against it have disadvantage until the start of its next turn unless the xiphus\
      \ is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) or [restrained](Mechanics/CLI/rules/conditions.md#Restrained)."
    "name": "Startling Speed"
"actions":
  - "desc": "The xiphus makes three hidden dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +8 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d4 + 5) piercing damage plus 7 (2d6) lightning\
      \ damage."
    "name": "Hidden Dagger"
"reactions":
  - "desc": "If damage is dealt to a xiphus that would kill it, it can attempt to\
      \ temporarily borrow time from another creature to avoid death. One creature\
      \ the xiphus can see within 30 feet of it must succeed on a DC 16 Constitution\
      \ saving throw or take 10 (3d6) necrotic damage, and the xiphus regains hp\
      \ equal to the damage taken. The target is stable and doesn't die if this effect\
      \ reduces its hp to 0. After 2 rounds, the xiphus takes necrotic damage, and\
      \ the target regains hp, equal to the original amount borrowed."
    "name": "Borrowed Time (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/xiphus-ccodex.png"
```
^statblock

## Environment

forest, urban