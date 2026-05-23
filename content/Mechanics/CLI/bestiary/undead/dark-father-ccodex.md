---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dark Father
---
# [Dark Father](Mechanics\CLI\bestiary\undead/dark-father-ccodex.md)
*Source: Creature Codex p. 71*  

*This towering humanoid is shrouded in a heavy cloak darker than night. Color drains from the world as it silently approaches.*

An embodiment of the finality of death, a dark father comes for those soon to die. These vultures of the living are attracted to those lingering on the steps to the afterlife and watch over them to hasten their deaths.

## Funereal Origins

Dark fathers frequent graveyards and sepulchers. A dark father may take up a dormant position among the dead, only making itself known when death knocks at a nearby creature's door. Shadows are sometimes drawn to the presence of a dark father.

## Scales of Death

Unlike more bloodthirsty undead, a dark father gives up pursuit if its target receives healing or curative effects that stave off the threat of death. However, it may linger if others are in danger of dying soon. A dark father has no quarrel with healthy creatures and avoids them. However, if attacked while waiting for a dying creature to expire, it will defend itself and even slay the attacker, if necessary.

## A Shade Apart

A dark father may be found among other powerful undead since creatures are more likely to face their mortality when confronting such foes. Just as often, a lone dark father may roam far and wide, finding itself in hospitals, battlefields, and among the houses of the poor and diseased.

## Undead Nature

A dark father doesn't require air, food, drink, or sleep.

```statblock
"name": "Dark Father (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "8"
"speed": "40 ft., fly 20 ft. (hover)"
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "The languages it knew in life"
"cr": "4"
"traits":
  - "desc": "The dark father has disadvantage on melee attack rolls against any creature\
      \ that has all of its hp."
    "name": "Death Waits"
  - "desc": "The dark father can move through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "When a creature within 30 feet of a dark father regains hp through any\
      \ means other than resting, it must succeed on a DC 14 Constitution saving throw\
      \ or take 3 (1d6) necrotic damage and have disadvantage on its next death\
      \ saving throw."
    "name": "None May Stop Death"
"actions":
  - "desc": "*Melee Spell Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 14 (4d6) necrotic damage. The target must succeed on a DC 14 Constitution\
      \ saving throw or its hp maximum is reduced by an amount equal to the damage\
      \ taken. This reduction lasts until the target finishes a long rest. The target\
      \ dies if this effect reduces its hp maximum to 0."
    "name": "Life Drain"
  - "desc": "The dark father targets a corpse it can see within 30 feet that has been\
      \ dead for no longer than 1 hour. A stream of dark energy flows between the\
      \ corpse and the dark father. At the end of the dark father's next turn, the\
      \ dark father absorbs the corpse and it vanishes completely. Any worn items\
      \ or possessions are unaffected. A corpse destroyed in this manner can't be\
      \ retrieved other than by a [wish](Mechanics/CLI/spells/wish-xphb.md) spell\
      \ or similar magic."
    "name": "Final Curtain"
"reactions":
  - "desc": "When a spell from the evocation or necromancy school is cast within 30\
      \ feet of the dark father, the dark father can counter the spell with a successful\
      \ ability check. This works like the counterspell spell with a +5 spellcasting\
      \ ability check, except the dark father must make the ability check no matter\
      \ the level of the spell."
    "name": "Banish Hope"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/dark-father-ccodex.png"
```
^statblock

## Environment

any