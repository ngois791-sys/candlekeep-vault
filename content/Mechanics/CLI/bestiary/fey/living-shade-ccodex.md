---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Living Shade
---
# [Living Shade](Mechanics\CLI\bestiary\fey/living-shade-ccodex.md)
*Source: Creature Codex p. 255*  

*Shadows dance on the wall, cast by the flickering firelight. One of the shadows suddenly turns in defiance of the person who cast it, reaching its dark hand out from the wall.*

Bursts of magic sometimes unexpectedly infuse a person's shadow, giving rise to a creature known as a living shade. Though similar in many ways to the dreaded undead shadows, these creatures aren't undead. They are a type of fey spirit infused with the power of the Plane of Shadow.

## Conjured Servants

Some spellcasters draw power from shadow magic to deliberately turn their own shadow into a servant and guardian. Created living shades serve much as any other standard familiar spirit. A masterless living shade feels incomplete without a physical being to "cast" it, and it might agree to serve as another spellcaster's familiar as long as it's treated well.

## Playful Mimics

Not inherently malicious, living shades spend most of their time serving as their master's shadow, delighting in mirroring gestures and motion. Occasionally, they enjoy toying with unsuspecting viewers by moving out of sync with their master in small, deliberate ways. Even unbound living shades might spend much of their time playing the part of someone's shadow, "attaching" themselves to a random passerby. Living shades communicate through pantomime.

```statblock
"name": "Living Shade (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d8"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "10"
  - !!int "9"
  - !!int "10"
  - !!int "12"
"speed": "40 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [prone](Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands Common but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The living shade can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "While in dim light or darkness, the living shade can take the [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action."
    "name": "Shadow Stealth"
  - "desc": "While in sunlight, the living shade has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 2\
      \ (1d4) cold damage."
    "name": "Shadow Touch"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/living-shade-ccodex.png"
```
^statblock

## Environment

any