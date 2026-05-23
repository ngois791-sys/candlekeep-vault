---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kuunganisha
---
# [Kuunganisha](Mechanics\CLI\bestiary\fiend/kuunganisha-ccodex.md)
*Source: Creature Codex p. 245*  

*A strange amalgam of imp and quasit hunches beneath bat‑like wings. Its feet and hands end in wicked claws, and its eyes and needle-tooth-filled mouth are too large for its bald head.*

## Magical Conduit

The kuunganisha were created as mobile, sentient conduits for arcane power. Long-term exposure to a particular school of magic can alter a kuunganisha's appearance, such as fire-feather wings instead of bat-like wings on a kuunganisha regularly used to channel evocation magic or skin covered in non-functioning, but constantly-moving eyes on kuunganishas exposed to excessive divination magic.

## Flexible Entropy

While kuunganisha are always evil, they may be lawful, neutral, or chaotic, depending on the alignment of their masters.

```statblock
"name": "Kuunganisha (CCodex)"
"size": "Small"
"type": "fiend"
"alignment": "Any Evil alignment"
"ac": !!int "13"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "11"
  - !!int "10"
  - !!int "12"
  - !!int "13"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "fire; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 20 ft., passive\
  \ Perception 11"
"languages": "Common, Abyssal, Infernal"
"cr": "2"
"traits":
  - "desc": "Magical darkness doesn't impede the fiend's darkvision."
    "name": "Fiend Sight"
  - "desc": "The kuunganisha has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The fiend regains 1 hp at the start of its turn if it has at least 1\
      \ hp. Will of the Master. The master of the kuunganisha can cast a spell through\
      \ the familiar, using the fiend's senses to target the spell. The range limitations\
      \ are treated as if the spell originated from the kuunganisha, not the master.\
      \ The spell effect occurs on the kuunganisha's turn, though the master must\
      \ cast the spell during the master's turn. Concentration spells must still be\
      \ maintained by the master."
    "name": "Regeneration"
"actions":
  - "desc": "The kuunganisha makes one claw attack and one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or take 5 (2d4) poison damage and become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) slashing damage."
    "name": "Claw"
  - "desc": "The kuunganisha magically turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks, or until its concentration ends (as if concentrating on\
      \ a spell). Any equipment the fiend wears or carries becomes [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with it."
    "name": "Invisibility"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/kuunganisha-ccodex.png"
```
^statblock

## Environment

any