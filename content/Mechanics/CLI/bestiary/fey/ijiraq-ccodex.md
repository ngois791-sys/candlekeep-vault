---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ijiraq
---
# [Ijiraq](Mechanics\CLI\bestiary\fey/ijiraq-ccodex.md)
*Source: Creature Codex p. 226*  

*A bipedal caribou adorned with spiked horns stalks the edge of the forest. Its melodious voice calls to hunters, telling them of clean springs, a fine honeycomb, and easy prey just a little further ahead.*

While their true forms are invisible to most, ijiraq are often seen wandering the wilds in the form of beasts or terrible caribouhuman hybrids. If seen in their true forms, they resemble short humans with horrifying features.

## Hunters of Man

Ijiraq are known to abduct humans to use for sport. Many will carry skulls of their kills as trophies, and they have a fondness for the taste of human meat. At times, they do pretend to be guides to some hidden shrine or a flock of fat geese, to lure a hunter away from others. However, they view it as poor form to attack humans that come to speak with them and will treat such people with respect during a moot.

## Loathing of the Sea

The ijiraq detest open waters, the creatures that live within them, and goods that come from them. Many villages have found safety from ijiraq by relocating close to the water's edge.

```statblock
"name": "Ijiraq (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "19"
  - !!int "11"
  - !!int "15"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 30 ft., passive Perception 15"
"languages": "Sylvan"
"cr": "7"
"traits":
  - "desc": "The ijiraq's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "After encountering an ijiraq, a creature must succeed on a DC 15 Wisdom\
      \ saving throw to remember the events. On a failure, the details of the encounter\
      \ rapidly fade away from the creature's mind, including the presence of the\
      \ ijiraq."
    "name": "Memory Loss"
"actions":
  - "desc": "In its true form, the ijiraq makes two claw attacks. In its hybrid form,\
      \ it makes one gore attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage and 9 (2d8) poison damage."
    "name": "Gore (Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage plus 13 (3d8) poison damage."
    "name": "Claw (Hybrid Form or True Form Only)"
  - "desc": "The ijiraq magically turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks, or until its concentration ends (as if concentrating on\
      \ a spell). It may choose whether equipment it wears or carries is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with it or not."
    "name": "Invisibility (True Form Only)"
  - "desc": "The ijiraq magically polymorphs into any beast that has a challenge rating\
      \ no higher than its own, into its caribou-human hybrid form, or back into its\
      \ true from. It reverts to its true form if it dies. Any equipment it is wearing\
      \ or carrying is absorbed or borne by the new form (the ijiraq's choice).\n\n\
      While in its true form or its hybrid form, its statistics are the same. When\
      \ in a beast form, the ijiraq retains its alignment, hp, Hit Dice, ability to\
      \ speak, proficiencies, and Intelligence, Wisdom, and Charisma scores, as well\
      \ as this action. Its statistics and capabilities are otherwise replaced by\
      \ those of the new form, except any class features or legendary actions of that\
      \ form."
    "name": "Change Shape"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/ijiraq-ccodex.png"
```
^statblock

## Environment

hill