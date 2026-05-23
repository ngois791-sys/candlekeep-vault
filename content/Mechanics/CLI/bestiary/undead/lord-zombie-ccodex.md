---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lord Zombie
---
# [Lord Zombie](Mechanics\CLI\bestiary\undead/lord-zombie-ccodex.md)
*Source: Creature Codex p. 394*  

*The cold white gleam in the glassy eyes of the noble in faded finery burns with evil, and its skin has the ashen pallor of the undead.*

Unlike shuffling, mindless specimens of zombie, lord zombies retain their personality and memories. The lord's mind is twisted with jealousy and obsession for the things it left unfinished in life.

## Corrupted Death

A figure of strong will who dies in a place infused with necrotic energy can draw the corruption into itself and rise as a terrifying lord zombie. More tragically, sometimes resurrection magic goes awry, and the victim returns as a nexus of undeath.

## Spreading Corruption

Lord zombies spread a constant wave of necrosis into the world around them. Even long-dead corpses quicken to the lord's call. The creatures are regularly accompanied by legions of zombies and often lair in cemeteries.

## Undead Nature

The lord zombie doesn't require air, food, drink, or sleep.

```statblock
"name": "Lord Zombie (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "The languages it knew in life"
"cr": "5"
"traits":
  - "desc": "If the lord fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Any non-undead creature that starts its turn within 30 feet of the lord\
      \ must succeed on a DC 16 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the start of the creature's next turn. On a successful saving throw,\
      \ the creature is immune to the lord's Stench for 24 hours."
    "name": "Stench"
  - "desc": "If damage reduces the lord to 0 hp, it must make a Constitution saving\
      \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
      \ a critical hit. On a success, the lord drops to 1 hp instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The lord zombie makes two slam attacks. It can use its Life Drain in\
      \ place of one slam attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) necrotic damage. The target must succeed on a DC 16 Constitution\
      \ saving throw or its hp maximum is reduced by an amount equal to the damage\
      \ taken. This reduction lasts until the target finishes a long rest. The target\
      \ dies if this effect reduces its hp maximum to 0.\n\nA humanoid slain by this\
      \ attack rises 24 hours later as a zombie under the lord's control, unless the\
      \ humanoid is restored to life or its body is destroyed. The lord can have no\
      \ more than twenty zombies under its control at one time."
    "name": "Life Drain"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the lord zombie can expend a use to take one of the following actions. The\
  \ lord zombie regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The lord telepathically commands all zombies it controls within 1 mile\
      \ to immediately move up to half their speed. A zombie that moves out of an\
      \ enemy's reach because of this movement doesn't provoke an opportunity attack."
    "name": "Shambling Hordes"
  - "desc": "The lord makes a life drain attack."
    "name": "Life Drain (Costs 2 Actions)"
  - "desc": "The lord targets a humanoid corpse within 30 feet, which rises as a zombie\
      \ under the lord's control."
    "name": "Arise (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/lord-zombie-ccodex.png"
```
^statblock