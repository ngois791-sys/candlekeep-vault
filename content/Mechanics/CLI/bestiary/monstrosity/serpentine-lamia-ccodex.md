---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Serpentine Lamia
---
# [Serpentine Lamia](Mechanics\CLI\bestiary\monstrosity/serpentine-lamia-ccodex.md)
*Source: Creature Codex p. 248*  

*The pair of serpentine creatures intertwine with the shackled prisoner, their scaly tails and grasping arms squeezing the life from him as he screams silently, the breath choked from his body.*

## The Smaller of the Species

Unlike the leonine forms of their larger lamia cousins, the serpentine lamias have humanoid torsos atop a serpentine tail. Seeing themselves as "true" lamia, the serpentine lamia consider the lion‑bodied members of their race "false lamia." They go to great lengths to destroy these false lamia whenever possible.

## Constant Search for Indulgence

Serpentine lamias share the same hedonistic tendencies as their larger namesakes; however, they are more willing to travel or create lairs in civilized areas. In locations, where monstrous species are not attacked on sight as threats, serpentine lamias often travel freely without disguise. Their love of the finer things in life offers them opportunities to act as merchants, curators, and art experts. Their barely controlled desires often leave them unhindered by conscience or scruple, affording them careers of a more criminal nature.

## Worship the Moon

Something in the serpentine lamias' psyches gives them a strong connection to the moon. They are at their most calm and rational when the moon is new, but as the lunar cycle moves toward its peak, the urges for debauchery and hedonism grow in the serpentine lamia. "During a full moon in a lamia's lair" has become a colloquial saying for a time or place of inescapable danger. For the duration of a full moon, serpentine lamias congregate at the home of the most prestigious of their kind. The bacchanalia that take place at these gatherings are legendary, where the overconsumption of the finest food and drink is only the beginning. In places with less stringent moral and ethical codes, the murder of innocents is often the highlight of these evenings.

```statblock
"name": "Serpentine Lamia (CCodex)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "11"
  - !!int "8"
  - !!int "13"
  - !!int "15"
"speed": "30 ft., climb 20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Abyssal"
"cr": "1"
"traits":
  - "desc": "When a humanoid that can see the serpentine lamia's eyes starts its turn\
      \ within 30 feet of the serpentine lamia, the serpentine lamia can force it\
      \ to make a DC 13 Charisma saving throw if the serpentine lamia isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and can see the creature. If the creature fails, it is [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 minute. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If a target's saving throw is successful or the effect\
      \ ends for it, the target is immune to the serpentine lamia's Seductive Gaze\
      \ for the next 24 hours.\n\nUnless surprised, a creature can avert its eyes\
      \ to avoid the saving throw at the start of its turn. If the creature does so,\
      \ it can't see the serpentine lamia until the start of its next turn, when it\
      \ can avert its eyes again. If the creature looks at the serpentine lamia in\
      \ the meantime, it must immediately make the save."
    "name": "Seductive Gaze"
  - "desc": "The serpentine lamia has advantage on attack rolls against a creature\
      \ it has surprised, or that is [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by it or its allies."
    "name": "Serpent Strike"
  - "desc": "The serpentine lamia has advantage on saving throws and ability checks\
      \ against being knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Snake Body"
"actions":
  - "desc": "The serpentine lamia makes two attacks, only one of which can be a constrict\
      \ attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Scimitar"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) bludgeoning damage. If the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 12).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the serpentine lamia can't constrict another target."
    "name": "Constrict"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/serpentine-lamia-ccodex.png"
```
^statblock

## Environment

forest, mountain, urban