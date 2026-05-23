---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pixiu
---
# [Pixiu](Mechanics\CLI\bestiary\monstrosity/pixiu-ccodex.md)
*Source: Creature Codex p. 300*  

*The pair of creatures, like massive lions with strangely draconic faces, gnaw contentedly on a pile of treasure. The female's spiraling horns sweep back over her skull while her mate's single horn curves up from between his eyes.*

## Devourers of Wealth

Pixiu feed upon gold, silver, jewels, and magic items. Offering them valuables is an easy way to gain their attention or to pass unmolested when they are guardians of a pass, spring, or shrine. Their love of bells, baubles, and (especially) gold and silver necklaces leads them to work with bandits and wizards, so long as they are well-fed. In particular, they enjoy looting shrines and temples of bronze or silver bells.

## Ambitious and Docile

Female pixiu are often more ambitious and cunning than the males. In some cases, male pixiu are seen as more docile or mistaken for unusual lions or chimeras; a female pixiu always stands out in both her boldness and her aggression.

## Trained Hunters

Wealthy merchants and nobles have been known to raise and train pixiu as loyal companions. A well‑trained pixiu is able to hunt for treasure and return the wealth to its master without eating it.

```statblock
"name": "Pixiu (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d10 + 30"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "14"
  - !!int "5"
  - !!int "12"
  - !!int "10"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "necrotic"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands but can't speak"
"cr": "6"
"traits":
  - "desc": "The pixiu has an appetite for gold, silver, and jewels and consumes them\
      \ whenever possible. If the pixiu attempts to eat a magical coin, gemstone,\
      \ or piece of jewelry, the object has a 25% chance of breaking, dispelling its\
      \ magic and rendering it useless. If the object doesn't break, the pixiu gives\
      \ up trying to eat it."
    "name": "Consume Treasure"
  - "desc": "The pixiu is immune to disease and to effects that would lower its maximum\
      \ hp. In addition, each ally within 10 feet of the pixiu has advantage on saving\
      \ throws against disease and is immune to effects that would lower its maximum\
      \ hp."
    "name": "Protector of Qi"
  - "desc": "A pixiu can pinpoint, by scent, the location of precious metals and stones,\
      \ such as coins and gems, within 60 feet of it."
    "name": "Treasure Sense"
"actions":
  - "desc": "The pixiu makes three attacks. one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (3d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (3d6 + 4) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/pixiu-ccodex.png"
```
^statblock

## Environment

mountain, underground