---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Weirding Scroll
---
# [Weirding Scroll](Mechanics\CLI\bestiary\construct/weirding-scroll-ccodex.md)
*Source: Creature Codex p. 376*  

*A humanoid figure teeters, clutching both ends of a curious scroll. The curled eldritch parchment is marked with strange, alien glyphs on one side that pulsate with an arcane glow, illuminating the figure's twisted face. Tendrils of opalescent light snake out from the surface of the bizarre scroll as the ensorcelled figure staggers forward.*

## Arcane Guardians

A weirding scroll is a grim construct crafted from a length of magically-treated humanoid skin. This morbid parchment is prepared by a master surgeon before undergoing certain profane and secret rites that imbue the scroll with formidable mind-warping abilities. This surreptitious construct lies in wait for a living creature to come along and serve as an unwilling surrogate for its creator's commands.

## Nimbused Puppeteers

The mobility of this odd artifice is limited. When a weirding scroll isn't flitting on the wind in a form of mock lifelessness, it employs a powerful domination, which manifests as an eerie tangle of light that entwines its victim.

## Athenaeum Wardens

The first weirding scrolls were constructed to help protect the massive libraries of an ancient race of sorcerer kings. Since then, the riddle of their creation has fallen into the hands of only the most studious of artificers. 

## Construct Nature

A weirding scroll doesn't require air, food, drink, or sleep.

```statblock
"name": "Weirding Scroll (CCodex)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "27"
"hit_dice": "6d4 + 12"
"modifier": !!int "0"
"stats":
  - !!int "1"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "8"
"speed": "0 ft., fly 10 ft."
"saves":
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 10"
"languages": "All, telepathy 120 ft."
"cr": "1/2"
"traits":
  - "desc": "The weirding scroll is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ while in the area of an antimagic field. If targeted by [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ the weirding scroll must succeed on a Constitution saving throw against the\
      \ caster's spell save DC or fall [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the weirding scroll remains motionless, it is indistinguishable\
      \ from a normal scroll."
    "name": "False Appearance"
"actions":
  - "desc": "A weirding scroll beguiles one humanoid that it can see within 30 feet.\
      \ The target must succeed on a DC 13 Wisdom saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 hour. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) creature\
      \ obeys the telepathic commands of the weirding scroll to the best of its ability.\
      \ This action works like the dominate person spell, except the weirding scroll\
      \ doesn't need to concentrate to maintain the domination, and it can't take\
      \ total and precise control of the target. The weirding scroll can have only\
      \ one humanoid under its control at one time. If it dominates another, the effect\
      \ on the previous target ends."
    "name": "Dominate"
  - "desc": "*Melee Spell Attack:* +5 to hit, reach 10 ft., one target. *Hit:* 3\
      \ (1d6) psychic damage plus 3 (1d6) radiant damage."
    "name": "Tendril of Light"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/weirding-scroll-ccodex.png"
```
^statblock

## Environment

any