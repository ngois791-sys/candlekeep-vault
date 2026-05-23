---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Xenabsorber
---
# [Xenabsorber](Mechanics\CLI\bestiary\aberration/xenabsorber-ccodex.md)
*Source: Creature Codex p. 387*  

*The creature stands next to the dead antelope, its humanoid form made of light-blue crystalline material. The head of the creature shifts and slowly grows two black horns.*

## An Impossible Imposter

The xenabsorber's body is comprised of magically-attuned blue crystal. When it vibrates on the same magical frequency as a nearby creature, it can change itself to copy some aspect of that creature. Given enough time, it can turn its entire form into that creature, though fine details elude it. The xenabsorber becomes agitated if it stays in one form too long, so it is always on the move, looking for new creatures to copy.

## A Grotesque Amalgam

At any given moment, the xenabsorber might be in its native blue crystalline state, fully disguised as a creature, or wearing aspects of many different creatures. In areas with high traffic of a variety of creatures, the xenabsorber might be a physical representation of the presence of or conflict between all of those creatures

> [!note] Trait Mimicry
> 
> This ability allows the xenabsorber to take on a nonmagical trait, attack, or reaction of a beast or humanoid it has seen recently. The copied feature can be any trait, attack, or reaction available to the creature being mimicked except the xenabsorber can't mimic the Swarm trait, the Shapechanger trait, the Change Shape action, or any Spellcasting trait, attack, or reaction. Any damage the xenabsorber deals with an attack it copies is always 8 (1d10 + 3) of the type the attack normally deals, and the DC for any trait or attack that requires the target to make a saving throw is always 13.
> 
> The xenabsorber can mimic any extra physical conditions of a mimicked attack, such as grapple (from an attack such as an octopus' tentacles) or knock prone (from an attack such as a wolf's bite), but it can't mimic poisons (such as the extra damage on a scorpion's sting attack). The xenabsorber must meet the requirements of a trait before it can use the trait. For example, if it copies the Charge trait, it must have a tusk, gore, or ram attack before it can use the trait.
> 
> This ability also allows the xenabsorber to copy a creature's means of natural, not magical, locomotion (such as the wings of a giant eagle to fly, the feet of a frog to swim, etc.), but at the xenabsorber's speed, not the speed of the copied creature.
^trait-mimicry

```statblock
"name": "Xenabsorber (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The xenabsorber has advantage on Charisma ([Deception](Mechanics/CLI/rules/skills.md#Deception))\
      \ checks to pass itself off as the type of creature it is impersonating as long\
      \ as it has at least 1 trait from that creature."
    "name": "Disguise"
  - "desc": "As a bonus action, a xenabsorber can take on 1 nonmagical physical trait,\
      \ attack, or reaction of a beast or humanoid with a challenge rating equal to\
      \ or less than its own that it has seen within the last week (see Trait Mimicry\
      \ sidebar). It can have up to 5 such traits at a time, no more than two of which\
      \ can be attacks. Each trait lasts until the xenabsorber replaces it with another\
      \ trait as a bonus action. If the xenabsorber goes a week without exposure to\
      \ a single beast or humanoid, it loses all of its traits and reverts back to\
      \ its true, blue crystalline form."
    "name": "Trait Mimicry"
"actions":
  - "desc": "The xenabsorber makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d10 + 3) bludgeoning damage."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/xenabsorber-ccodex.png"
```
^statblock

## Environment

any