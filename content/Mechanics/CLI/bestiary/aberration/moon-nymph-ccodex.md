---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Moon Nymph
---
# [Moon Nymph](Mechanics\CLI\bestiary\aberration/moon-nymph-ccodex.md)
*Source: Creature Codex p. 269*  

*Within the moonlight spilling through the window, a shadow coalesces into a lovely female form. Although the figure's body is wraith-like, the face is distinct. A dark smile plays across fine lips, while her eyes sparkle like cold diamonds.*

## Children of the Night

The passages and fissures between the mortal world and the realms beyond are many and diverse. One such bridge is enabled by the moons of the mortal realm. Moon nymphs, as they are called, use those portals to move into the world, traveling down moonbeams to haunt mortals' dreams.

## Daughters of the Moon

Those who observe a moon nymph and live to tell the tale describe a slight humanoid creature, wraithlike in form but with a countenance as beautiful as the most alluring fairy. In reality, moon nymphs are genderless, taking on a visage that matches the dreams of their victims. Some might see a beautiful elf, others a handsome dwarf, and lovers of animals might even see a sleek feline or an adorable canine.

Regardless of the form, the moon nymph appears in muted colors, mostly shadowy blacks or pale whites and yellows. Their bodies are often hazy and ghostly at the edges, but the facial features are clearly defined and mesmerizing.

> [!note] Waxing and Waning
> 
> The moon nymph's connection to the moon affects its power as the cycles of the moon progress. The statistics given represent a moon nymph during a crescent or gibbous moon. During full moons, the challenge rating increases by 1, the creature's hp maximum increases by 30, it has advantage on attack rolls, and all saving throw DCs increase by 1. Inversely, during new moons, the challenge rating decreases by 1 as the numbers move in the opposite direction.
^waxing-and-waning

```statblock
"name": "Moon Nymph (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "17"
  - !!int "12"
  - !!int "13"
  - !!int "15"
  - !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "necrotic, radiant"
"damage_immunities": "psychic"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The moon nymph is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ in darkness or in bright light. It can only be seen via normal means when\
      \ in dim light."
    "name": "Invisibility"
  - "desc": "The moon nymph has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The moon nymph makes two beguiling touch attacks or two moonbeam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (4d6 + 3) psychic damage, and the target must succeed on a DC 14 Charisma\
      \ saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until\
      \ the end of its next turn."
    "name": "Beguiling Touch"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 120 ft., one target. *Hit:*\
      \ 21 (4d8 + 3) radiant damage, and the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of its next turn."
    "name": "Moonbeam"
  - "desc": "The moon nymph emits a wave of hallucinatory nightmare visions. Each\
      \ creature within 5 feet of the moon nymph must make a DC 14 Wisdom saving throw.\
      \ On a failure, the creature takes 36 (8d8) psychic damage and is [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ On a success, the creature takes half of the damage and isn't [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ A [frightened](Mechanics/CLI/rules/conditions.md#Frightened) creature must\
      \ succeed on a DC 10 Wisdom saving throw at the end of its turn to end the effect\
      \ on itself. On a second failed save, the creature is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ by fright for 1 round. On the start of its next turn, the creature must succeed\
      \ on a DC 12 Wisdom saving throw or be reduced to 0 hp."
    "name": "Veil of Nightmares (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/moon-nymph-ccodex.png"
```
^statblock

## Environment

farmland, urban