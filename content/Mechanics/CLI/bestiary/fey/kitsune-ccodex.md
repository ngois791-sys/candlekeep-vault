---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kitsune
---
# [Kitsune](Mechanics\CLI\bestiary\fey/kitsune-ccodex.md)
*Source: Creature Codex p. 236*  

*Kitsune enjoy being mysterious, elusive, and maddening—they like to have a secret or a joke at the ready. They delight in leading travelers into box canyons or deep marshes, though they are also quite witty, kind, and true to their friends.*

Kitsune are fey creatures that appear as foxes with two or more tails, depending on their age; an additional tail grows every 100 years. Kitsune are grey, black, shades of brown, or auburn, until their ninth tail grows. By that time, their fur has become white or golden. Occasionally, a blue, green, or bright red kitsune is seen; these are almost always cases of a kitsune sticking itself into a dyer's vat and gaining bright and distinctive fur for a time.

## Fashionable Humans

A kitsune in human form is usually quite elegant, well-dressed, and smooth. In some cases, they have a tendency to sniff for scent more than humans do; a habit from their fox form.

## Spirit Messengers

Some kitsune serve particular fey or spirits of a place, such as a shrine, a stream, or a particular mountain. In these cases, they often accept sacrifices on behalf of the spirit they serve.

## Faithful Tricksters

While kitsune are mischievous and enjoy playing pranks, they are loyal friends and guardians to loved ones.

```statblock
"name": "Kitsune (CCodex)"
"size": "Small"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "14d6"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "11"
  - !!int "12"
  - !!int "15"
  - !!int "14"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
  - "desc": "The kitsune's innate spellcasting ability is Charisma (spell save DC\
      \ 12, +4 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\n**At will:** [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md) (2d10), [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only), [major image](Mechanics/CLI/spells/major-image-xphb.md)\n\n**2/day\
      \ each:** [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md),\
      \ [tongues](Mechanics/CLI/spells/tongues-xphb.md)\n\n**1/day each:** [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [fly](Mechanics/CLI/spells/fly-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The kitsune can use its action to polymorph into a Small or Medium humanoid,\
      \ or back into its true form. The kitsune's tails remain, however, and its humanoid\
      \ form often has a fine coat of fur the same color as the kitsune. Its statistics,\
      \ other than its size, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "In humanoid form, the kitsune makes one rapier attack and one dagger\
      \ attack. In fox form, it makes two bite attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) piercing damage."
    "name": "Bite (Fox Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) piercing damage."
    "name": "Rapier (Humanoid Form Only)"
  - "desc": "Melee or *Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger (Humanoid Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/kitsune-ccodex.png"
```
^statblock

## Environment

farmland, urban