---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wendigo
---
# [Wendigo](Mechanics\CLI\bestiary\monstrosity/wendigo-ccodex.md)
*Source: Creature Codex p. 377*  

*At first the creature looks like an emaciated man running, then it looks like a large wolf. Right before it attacks, it is obvious the creature is neither.*

## Born of Greed and Starvation

The wendigo's origins are mysterious. Some claim they are beings summoned forth from the corpses of humans who have died of starvation. Others say they come from those who have died because of cannibalism or their own greed.

## An Insatiable Appetite

Wendigos are found in harsh climates, preying on the weak and hungry. Legends speak of entire settlements devoured by a single wendigo. All that remains of these settlements are eerily silent buildings and a few scattered bones, all material wealth untouched.

## An Emaciated Horror

Wendigos have an emaciated humanoid shape with some disturbing lupine features, described by one scholar as a "hairless zombie werewolf.

## Punisher of Vices

Wendigos also have a special role in the punishment for cannibalism and greed. Greedy or cannibalistic individuals whose vices have caused the deaths of others, directly or indirectly, might be cursed by those victims as the victims die. This curse manifests as a wendigo being unleashed into the world.

```statblock
"name": "Wendigo (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "16"
  - !!int "11"
  - !!int "16"
  - !!int "12"
"speed": "40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "cold, fire"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Common"
"cr": "11"
"traits":
  - "desc": "A creature that starts its turn within 10 feet of the wendigo must succeed\
      \ on a DC 15 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ by gnawing cold and crippling hunger for 1 minute. A creature can repeat the\
      \ saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success. If a creature's saving throw is successful or the effect ends\
      \ for it, the creature is immune to the wendigo's Aura of Starvation for the\
      \ next 24 hours."
    "name": "Aura of Starvation"
  - "desc": "The wendigo has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The wendigo makes three attacks. two with its icy claw and one with its\
      \ bite. Alternatively, it uses its Frozen Spittle twice."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) slashing damage and 14 (4d6) cold damage."
    "name": "Icy Claw"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) piercing damage."
    "name": "Bite"
  - "desc": "*Ranged Spell Attack:* +7 to hit, range 100 ft., one target. *Hit:*\
      \ 28 (8d6) cold damage, and the target must succeed on a DC 16 Dexterity saving\
      \ throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained) until\
      \ the end of its next turn."
    "name": "Frozen Spittle"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/wendigo-ccodex.png"
```
^statblock

## Environment

arctic, farmland, mountain