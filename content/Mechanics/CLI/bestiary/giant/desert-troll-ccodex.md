---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Desert Troll
---
# [Desert Troll](Mechanics\CLI\bestiary\giant/desert-troll-ccodex.md)
*Source: Creature Codex p. 356*  

*The creature rising from the sand stands to a towering height, its knobbled flesh blending with the parched ground. Its long arms flex, bringing up iron-hard claws.*

Desert trolls, uniquely suited to survive in their wasteland environment, are stout and bulky with skin cracked and hardened like parched earth. They are more intelligent than their cousins, and their temperament allows them to curb their evil impulses with subtlety and patience. As such, they can even assimilate successfully into civilized society, living and working in major cities and other settlements.

## Lurkers in Sand and Rock

More cunning than standard trolls, desert trolls revel in surprising their foes with sudden ambushes from beneath the sand. Their hardened claws allow them to tunnel through earth and sand, and their coloration suits them to blending with desolate surroundings. Civilized desert trolls often take up trades that allow them to leverage their burrowing, such as construction or grave digging.

## Born of Fire, Death in Water

Unlike most creatures who live in parched wastes, desert trolls have no need of water at all. Quite to the contrary, water is the bane of these creatures, dissolving their flesh and bones like acid. Many adventurers have met a sudden end by falling back on old standbys to defeat trolls, only to die shocked as their fire and oil slide harmlessly off the desert troll's stony flesh.

```statblock
"name": "Desert Troll (CCodex)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "13"
  - !!int "20"
  - !!int "9"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., burrow 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "fire"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Giant"
"cr": "6"
"traits":
  - "desc": "The desert troll has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in desert terrain."
    "name": "Desert Camouflage"
  - "desc": "If the desert troll burrows at least 15 feet straight toward a creature,\
      \ it can burst out of the ground, harming those above it. Each creature in its\
      \ space when it erupts must make a DC 16 Strength saving throw. On a failure,\
      \ the creature takes 10 (3d6) bludgeoning damage, is pushed out of the troll's\
      \ space, and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On\
      \ a success, the creature takes half the damage and is pushed out of the troll's\
      \ space, but isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Erupt"
  - "desc": "The desert troll has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The troll regains 10 hp at the start of its turn. If the troll takes\
      \ acid damage, this trait doesn't function at the start of the troll's next\
      \ turn. The troll dies only if it starts its turn with 0 hp and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The desert troll takes 1 acid damage for every 5 feet it moves in water\
      \ or for every gallon of water splashed on it."
    "name": "Water Susceptibility"
"actions":
  - "desc": "The desert troll makes three attacks. one with its bite and two with\
      \ its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d6 + 5) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/desert-troll-ccodex.png"
```
^statblock

## Environment

coastal