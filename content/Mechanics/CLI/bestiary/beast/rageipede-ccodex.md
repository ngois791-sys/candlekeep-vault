---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Rageipede
---
# [Rageipede](Mechanics\CLI\bestiary\beast/rageipede-ccodex.md)
*Source: Creature Codex p. 310*  

*A three-foot-long centipede with a mottled carapace lunges from the undergrowth. Its front limbs end in sharp claws, while its mandibles drip venom.*

The rageipede is not commonly found in urban landscapes, though there have been reports of small forest hamlets becoming feeding grounds for the creature. The rageipede is commonly known as the fury worm due to its peculiar hunting methods.

## Fury's Kiss

The bite of the rageipede holds powerful mind-altering venom that causes even the most conditioned individuals to fall into a mindless rage, attacking anyone or anything in sight.

## Patient Stalkers

The rageipede's primary food source is carrion left in the wake of its enraged victims. The rageipede lies in wait for potential victims to pass within range, utilizing the element of surprise to bite. After biting its victim, the creature typically retreats and hides in nearby underbrush or tree cover, waiting to claim its spoils.

## Rageipede Victims

Victims go on a rampage, killing and destroying everything in sight. Once the wave of rage passes, the victims typically suffer no lingering effects. However, the victims are left with the memories of their deeds, which often proves worse than the alternative.

```statblock
"name": "Rageipede (CCodex)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d6 + 20"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "15"
  - !!int "1"
  - !!int "7"
  - !!int "3"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., passive\
  \ Perception 8"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The rageipede has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while in forests and tall grass."
    "name": "Natural Camouflage"
  - "desc": "If the rageipede surprises a creature and hits it with a bite attack\
      \ during the first round of combat, the target has disadvantage on its saving\
      \ throw against the rage caused by the rageipede's bite."
    "name": "Surprise Bite"
"actions":
  - "desc": "The rageipede makes one bite attack and two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) piercing damage plus 3 (1d6) poison damage and the target\
      \ must succeed on a DC 12 Wisdom saving throw or be overcome with a fit of rage\
      \ for 1 minute. While in a fit of rage, a creature has advantage on melee attack\
      \ rolls and its melee weapon attacks deal an extra 3 (1d6) damage. The creature\
      \ is unable to distinguish friend from foe and must attack the nearest creature\
      \ other than the rageipede. If no other creature is near enough to move to and\
      \ attack, the victim stalks off in a random direction, seeking a target for\
      \ its rage. The target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/rageipede-ccodex.png"
```
^statblock

## Environment

forest