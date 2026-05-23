---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dream Wraith
---
# [Dream Wraith](Mechanics\CLI\bestiary\undead/dream-wraith-ccodex.md)
*Source: Creature Codex p. 139*  

*This wraith creature hovers over its sleeping victim, its ghostly silver hand reaching down toward her throat. The wraith changes form, appearing as the lost love of the sleeper. As the sleeper opens her eyes and smiles at the sight, the wraith wraps its cold fingers around the woman's throat and squeezes.*

## Haunter of Dreams

The dream wraith is an undead monster spawned when a living creature is killed while in the throes of a powerful dream. That dream wraith then wanders the world, searching out others having powerful dreams, hoping to finish its own unfinished dream and find peace in oblivion.

## Dwellers in the Dream World

Born from the world of dreams, the dream wraiths live partially in the mortal world and partially in the land of dreams. As such, it is particularly vulnerable to those who can mete out psychic damage.

## Sleeping Victims

While dream wraiths are rare, even a solitary wraith can devastate a densely populated area. They tend to focus on one victim at a time, stealing into bed chambers and bunkrooms at night while everyone sleeps. They move through walls without waking sleepers, sense the person having the most vivid dream, and drain its life force via its dreams. Sometimes the victim survives the attack, waking in the morning feeling very ill, but often the shock of the attack kills the dreamer. The creature's body remains, but its spirit follows the dream wraith into the night, becoming a servant of the creature.

## Undead Nature

The dream wraith doesn't require air, food, drink, or sleep.

```statblock
"name": "Dream Wraith (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "4"
"stats":
  - !!int "6"
  - !!int "18"
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "16"
"speed": "0 ft., fly 60 ft. (hover)"
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_vulnerabilities": "psychic"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "Any humanoid that dies at the hands of a dream wraith rises 1 hour later\
      \ as a wraith under the dream wraith's control."
    "name": "Create Wraith"
  - "desc": "The dream wraith can move through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the dream wraith has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) psychic damage, and the target must succeed on a DC 14 Charisma\
      \ saving throw or fall [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)."
    "name": "Sleep Touch"
  - "desc": "The dream wraith targets an [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ or sleeping creature within 5 feet of it. The creature must succeed on a DC\
      \ 14 Constitution saving throw or be reduced to 0 hp. The dream wraith gains\
      \ temporary hp for 1 hour equal to the amount of hp the creature lost."
    "name": "Steal Dreams"
"reactions":
  - "desc": "When a creature the dream wraith can see starts its turn within 30 feet\
      \ of the dream wraith, the dream wraith can create the illusion that it looks\
      \ like that creature's most recently departed loved one. If the creature can\
      \ see the dream wraith, it must succeed on a DC 14 Wisdom saving throw or be\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the end of its\
      \ turn."
    "name": "Dreamer's Gaze"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/dream-wraith-ccodex.png"
```
^statblock

## Environment

farmland, urban