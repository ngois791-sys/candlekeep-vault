---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Snow Hag
---
# [Snow Hag](Mechanics\CLI\bestiary\fey/snow-hag-ccodex.md)
*Source: Creature Codex p. 214*  

*Wrapped up against the cold in thick furs and a head scarf, this ugly old crone has a hooked nose, blue-tinged skin and long, clawed fingers. She trudges through the snow, leaning heavily on a gnarled staff.*

Snow hags live in the cold lands of the far north, making their homes in wooden cottages amidst the trees of the taiga or in remote mountainside caves.

## Evil Whispers

Snow hags enjoy posing as kindly wise women, selling herbal remedies and lucky charms. These remedies will work at first, but their efficacy soon fades, prompting the buyer to ask for something more permanent. The hag is only too willing to help but will ask for a favor in return. This might involve spreading gossip about another villager or playing a "harmless" prank on a neighbor. Slowly but surely, things escalate until everyone in the village is at each other's throats, much to the hag's delight.

## Exiled for Ugliness

The first snow hags were daughters of the Snow Queen (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), fathered by a hill giant lover she denies ever knowing. Appalled by their ugliness, the Snow Queen threw her offspring into the frozen wastes where they live to this day.

## Mothers of Beauty

Snow hags reproduce by stealing human infants and eating them. A year and a day after consuming the infant, the hag gives birth to a beautiful ice maiden (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). The magical kiss of an ice maiden freezes the heart of a mortal, putting it under her spell, but this magic can be broken by the kiss of the victim's true love. If an ice maiden loses seven lovers in this way, she transforms into a snow hag.

```statblock
"name": "Snow Hag (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_immunities": "cold"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Giant, Sylvan"
"cr": "3"
"traits":
  - "desc": "The snow hag's innate spellcasting ability is Charisma (spell save DC\
      \ 13, +5 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\n**At will:** [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md), [ray of\
      \ frost](Mechanics/CLI/spells/ray-of-frost-xphb.md)\n\n**1/day each:** [charm\
      \ person](Mechanics/CLI/spells/charm-person-xphb.md), [fog cloud](Mechanics/CLI/spells/fog-cloud-xphb.md),\
      \ [sleet storm](Mechanics/CLI/spells/sleet-storm-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The snow hag can move across icy surfaces without needing to make an\
      \ ability check. Additionally, difficult terrain composed of ice or snow doesn't\
      \ cost it extra moment."
    "name": "Ice Walk"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) slashing damage."
    "name": "Claws"
  - "desc": "The snow hag exhales a cloud of freezing fog in a 15-foot-radius around\
      \ her. Each creature in that area must make a DC 13 Constitution saving throw.\
      \ On a failure, a target takes 21 (6d6) cold damage and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by ice for 1 minute. On a success, a target takes half the damage and isn't\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained). A [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ target can make a DC 13 Strength check, shattering the ice on a success. The\
      \ ice can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire\
      \ and bludgeoning damage; immunity to slashing, cold, poison, and psychic damage)."
    "name": "Icy Embrace (Recharge 5-6)"
  - "desc": "The hag covers herself and anything she is wearing or carrying with a\
      \ magical illusion that makes her look like another creature of her general\
      \ size and humanoid shape. The illusion ends if the hag takes a bonus action\
      \ to end it or if she dies.\n\nThe changes wrought by this effect fail to hold\
      \ up to physical inspection. For example, the hag could appear to have human\
      \ hands, but someone touching them would feel her sharp claws. Otherwise, a\
      \ creature must take an action to visually inspect the illusion and succeed\
      \ on a DC 20 Intelligence ([Investigation](Mechanics/CLI/rules/skills.md#Investigation))\
      \ check to discern that the hag is disguised."
    "name": "Illusory Appearance"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/snow-hag-ccodex.png"
```
^statblock

## Environment

arctic