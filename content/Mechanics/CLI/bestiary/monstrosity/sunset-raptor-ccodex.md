---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sunset Raptor
---
# [Sunset Raptor](Mechanics\CLI\bestiary\monstrosity/sunset-raptor-ccodex.md)
*Source: Creature Codex p. 351*  

> [!quote] A quote from The lone survivor of a sunset raptor attack  
> 
> "The captain just stared with wet eyes and a dazed smile, whispering something I couldn't hear. He just stared while they tore him apart. I just stared while they tore him apart."

## Beautiful Threat

The sunset raptor can be identified by its crimson plumage, crested head, and large peacock-like tail of golden feathers. Its tail feathers are reflective and mesmerizing, triggering surreal hallucinations of a spectator's dreams, desires, and nightmares.

## Deadly Oddities

Vicious and exotic, sunset raptors are highly prized among eccentric collectors. They can often be found guarding the lairs of mad wizards or stalking the gardens of giants. Jewelers, alchemists, and fortune tellers covet sunset raptor feathers for their bright color and use in spiritual rituals. However, sunset raptors are not easily caught or tamed, and many hunters and handlers have been devoured for not taking the proper precautions against these vibrant killers. 

## Social Predators

Sunset raptors have developed remarkably efficient pack tactics. They communicate using shrill, piercing calls, sacrificing the element of surprise in favor of swiftly coordinated attacks. Often, the fastest raptors run ahead of the pack, cutting off potential prey. Once their prey is cornered, the raptors close in, forming a ring and forcing their prey to gaze upon their deadly, hypnotic plumag.

```statblock
"name": "Sunset Raptor (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "4"
  - !!int "12"
  - !!int "16"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "When a creature that can see the sunset raptor's tail starts its turn\
      \ within 100 feet of the raptor, the raptor can force it to make a DC 12 Wisdom\
      \ saving throw if the raptor isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and can see the creature. On a failure, a creature becomes [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ until the start of its next turn. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the creature is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ as it suffers from surreal hallucinations and must move up to its speed closer\
      \ to the raptor that [charmed](Mechanics/CLI/rules/conditions.md#Charmed) it.\
      \ It doesn't avoid opportunity attacks, but before moving into damaging terrain,\
      \ such as lava or a pit, and whenever it takes damage from a source other than\
      \ the sunset raptor, a target can repeat the saving throw, ending the effect\
      \ on itself on a success. Other sunset raptors are immune to this effect.\n\n\
      Unless surprised, a creature can avert its eyes to avoid the saving throw at\
      \ the start of its turn. If the creature does so, it can't see the sunset raptor\
      \ until the start of its next turn, when it can avert its eyes again. If the\
      \ creature looks at the sunset raptor in the meantime, it must immediately make\
      \ the save."
    "name": "Hypnotic Plumage"
  - "desc": "The sunset raptor has advantage on attack rolls against a creature if\
      \ at least one of the raptor's allies is within 5 feet of the creature and the\
      \ ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "The sunset raptor makes two attacks. one with its bite and one with its\
      \ claw."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage"
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/sunset-raptor-ccodex.png"
```
^statblock

## Environment

forest, grassland