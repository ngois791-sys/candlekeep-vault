---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bloody Bones
---
# [Bloody Bones](Mechanics\CLI\bestiary\monstrosity/bloody-bones-ccodex.md)
*Source: Creature Codex p. 54*  

*A long-limbed, pale humanoid with a skinless head and saucer‑shaped eyes stumbles forward. A steady drizzle of blood descends from its crown, painting its face, shoulders, and back a deep crimson.*

## Under Bridge and Under Stairs

Though their lairs can be found anywhere, bloody bones most often occupy the spaces under stairways and bridges. There, they suckle at the trailing dark energies left behind by great betrayals or atrocities, often driving humanoids to commit such atrocities by imitating others they have seen and heard. They are sometimes found near a ghost's haunt, where their appetite for pained memories can be sated.

## Dark Influence

Creatures who live within a few miles of where a bloody bones rests are often filled with unexplainable dread, anger, and despair. Violent crimes and uncharacteristic sadness are both tell-tale signs that a bloody bones dwells nearby.

```statblock
"name": "Bloody Bones (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "6"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "3"
"traits":
  - "desc": "Any creature hostile to the bloody bones that starts its turn within\
      \ 10 feet of the bloody bones must succeed on a DC 13 Wisdom saving throw or\
      \ be [frightened](Mechanics/CLI/rules/conditions.md#Frightened) until the end\
      \ of its next turn. If a creature's saving throw is successful, the creature\
      \ is immune to the bloody bones' Horrifying Aura for the next 24 hours."
    "name": "Horrifying Aura"
  - "desc": "The bloody bones chooses one creature it can see. It moves, acts, and\
      \ speaks in a macabre imitation of the creature. Its utterances are nonsense,\
      \ and it can't understand the languages of its chosen target. It maintains this\
      \ imitation until it dies. A creature that hears and sees the bloody bones can\
      \ tell it is performing an imitation with a successful DC 14 Wisdom ([Insight](Mechanics/CLI/rules/skills.md#Insight))\
      \ check."
    "name": "Horrific Imitation"
"actions":
  - "desc": "The bloody bones makes two claw attacks. It can use its Dark Stare in\
      \ place of one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) slashing damage."
    "name": "Claw"
  - "desc": "The bloody bones stares balefully at one creature it can see within 60\
      \ feet. That creature must succeed on a DC 13 Wisdom saving throw or have disadvantage\
      \ on all attacks until the end of its next turn."
    "name": "Dark Stare"
"reactions":
  - "desc": "When it is hit by an attack, the bloody bones regains 5 (1d10) hit\
      \ points and has resistance to that damage type until the end of its next turn\
      \ as life-giving blood pours from the top of its skull."
    "name": "Its Crown Runs Red"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/bloody-bones-ccodex.png"
```
^statblock

## Environment

farmland, urban