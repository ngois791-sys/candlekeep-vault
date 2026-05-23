---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alp
---
# [Alp](Mechanics\CLI\bestiary\fey/alp-ccodex.md)
*Source: Creature Codex p. 14*  

*A tiny, hirsute, unpleasant-looking little man squats here, wearing a burlap tunic and a tiny white cap. Bloodshot eyes beneath bushy brows take in the surroundings with a contemptuous sneer.*

## Bringer of Nightmares

Believed to be the horrid result of a childbirth in which traditions were flouted, an alp lives to torment anyone it can. It takes particular delight in turning the dreams of sleeping victims into bloodcurdling nightmares as it watches them toss and turn, leering from the edge of the bed. The alp uses its abilities to paralyze its victims as they wake, sitting atop them and forcing them to lie there in utter terror, unable to move or to scream for help before it vanishes.

## Farmer's Bane

When not otherwise occupying itself with tormenting the unconscious, an alp gets up to all sorts of evil throughout the night, from draining the cows dry of milk, to returning soiled diapers to infants, to smothering chickens.

## Hides in Plain Sight

Whenever people are about, the alp changes its form to that of a small farm creature. However, the tiny white cap which allows the alp to become invisible doesn't change with it, and so the alp tries to restrict itself to the forms of farm animals which are white in color. On occasion, though, in the excitement of the moment, the alp forgets.

```statblock
"name": "Alp (CCodex)"
"size": "Small"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d6 + 16"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "16"
  - !!int "8"
"speed": "30 ft."
"damage_resistances": "cold, necrotic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Sylvan"
"cr": "1"
"traits":
  - "desc": "Alp's innate spellcasting ability is Wisdom (spell save DC 13). It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      **At will:** [invisibility](Mechanics/CLI/spells/invisibility-xphb.md) (self\
      \ only)\n\n**3/day each:** [silent image](Mechanics/CLI/spells/silent-image-xphb.md),\
      \ [sleep](Mechanics/CLI/spells/sleep-xphb.md)\n\n**1/day each:** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [dream](Mechanics/CLI/spells/dream-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "While in dim light or darkness, the alp can take the [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action."
    "name": "Shadow Stealth"
  - "desc": "The alp can use its action to polymorph into a Small or Tiny beast it\
      \ has seen, or back into its true form. Its statistics, other than its size,\
      \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
      \ It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "While in sunlight, the alp has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) bludgeoning damage, and, if the target was sleeping or [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ before it was hit, it must succeed on a DC 13 Wisdom saving throw or become\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened) and [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ for 1 minute. The creature can repeat the saving throw at the end of each\
      \ of its turns, ending the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition on itself on a success. The creature must succeed on another saving\
      \ throw on a following round to end the [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ condition."
    "name": "Sleeper's Slap"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/alp-ccodex.png"
```
^statblock

## Environment

farmland