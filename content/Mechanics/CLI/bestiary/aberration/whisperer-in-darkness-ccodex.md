---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Whisperer In Darkness
---
# [Whisperer In Darkness](Mechanics\CLI\bestiary\aberration/whisperer-in-darkness-ccodex.md)
*Source: Creature Codex p. 378*  

*A robed figure sits in a pool of deep shadows. The shrouded individual's strained, immobile face and listless hands look abnormal and corpse-like. An unmistakable morbid odor permeates the area, and the air vibrates with a hideous, repressed buzzing. The figure speaks in a hoarse whisper, though his mustache-screened lips remain curiously motionless.*

## Void Regent

Sorcerer, emissary, changeling, outsider...the alien entity known as the whisperer in darkness is all of these things and more. This abhorrent master of disguise implements clever and damnable constructions to covertly walk among men. Its naked form is a twisted contortion of grotesque, inhuman features that would surely drive an unsuspecting onlooker mad. The whisperer's artificial face and limbs are the waxen products of an expert artist, but they do little to mask the disturbing timbre of its voice.

## Tenebrous Physicia

The whisperer is a being of prodigious surgical, biological, chemical, and mechanical skill who consorts with nameless things from abysmal space. Among these entities are the vaguely insect-like Mi-Go (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 287), who colonize entire worlds in the name of malevolent gods.

## Mask of Nyarlathotep

The whisperer in darkness is one of the many avatars of the Crawling Chaos. This incarnation of the Faceless God is a cosmic abnormality who serves as a manipulative liaison between the mi-go and the native races of the planets they invade.

## Void Traveler

The whisperer in darkness doesn't require air, food, drink, or ambient pressure.

```statblock
"name": "Whisperer In Darkness (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d8 + 75"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "19"
  - !!int "21"
  - !!int "25"
  - !!int "18"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "10"
  - "wisdom": !!int "9"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+17"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+13"
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 19"
"languages": "All, telepathy 60 ft."
"cr": "15"
"traits":
  - "desc": "The whisperer in darkness's innate spellcasting ability is Intelligence\
      \ (spell save DC 20). It can innately cast the following spells, requiring no\
      \ material components:\n\n**At will:** [alter self](Mechanics/CLI/spells/alter-self-xphb.md),\
      \ [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [identify](Mechanics/CLI/spells/identify-xphb.md), [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only), [misty step](Mechanics/CLI/spells/misty-step-xphb.md), [sleep](Mechanics/CLI/spells/sleep-xphb.md),\
      \ [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\n**3/day each:** [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [dimension door](Mechanics/CLI/spells/dimension-door-xphb.md), [disintegrate](Mechanics/CLI/spells/disintegrate-xphb.md),\
      \ [dream](Mechanics/CLI/spells/dream-xphb.md), [modify memory](Mechanics/CLI/spells/modify-memory-xphb.md),\
      \ [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md), [teleport](Mechanics/CLI/spells/teleport-xphb.md)\n\
      \n**1/day each:** [feeblemind](Mechanics/CLI/spells/befuddlement-xphb.md), [meteor\
      \ swarm](Mechanics/CLI/spells/meteor-swarm-xphb.md), [mind blank](Mechanics/CLI/spells/mind-blank-xphb.md),\
      \ [weird](Mechanics/CLI/spells/weird-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The whisperer is a highly advanced being that often carries pieces of\
      \ powerful mi-go technology. Mi-go technology can be represented using the same\
      \ rules as magic items, but the functions are very difficult to determine. The\
      \ identify spell can't determine the function of a mi-go item, but an hour of\
      \ study and a successful DC 19 Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ check can reveal its purpose and proper function. Typical items are wands\
      \ of fireballs shaped like staves with peculiar triggers, eyes of the eagle\
      \ shaped as a pair of cylinders, or a helm of telepathy in the form of a glowing\
      \ metal disc adhered to the side of the creature's head."
    "name": "Disquieting Technology"
  - "desc": "The whisperer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The whisperer in the darkness makes two Grasp of the Void attacks."
    "name": "Multiattack"
  - "desc": "*Melee Spell Attack:* +12 to hit, reach 5 ft., one target. *Hit:* 21\
      \ (6d6) force damage, and the target must succeed on a DC 18 Constitution\
      \ saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) for\
      \ 1 minute. The target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Grasp of the Void"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/whisperer-in-darkness-ccodex.png"
```
^statblock

## Environment

planar