---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- White Stag
---
# [White Stag](Mechanics\CLI\bestiary\celestial/white-stag-ccodex.md)
*Source: Creature Codex p. 379*  

*This beautiful and noble snow-white stag has an impressive rack of antlers and glows with an otherworldly, golden light.*

White stags are celestial beings, sent by the gods to the Material Plane to provide guidance to mortal heroes. Their appearance is said to be an indication that great events are in the offing, and those who are privileged enough to see one of these creatures will have an important part to play.

## Divine Messengers

When pious elves die and their spirits journey to the Outer Planes, some are accorded the honor of spending a year and a day serving the elven gods as a white stag before moving on to enjoy the afterlife. A deity will dispatch a white stag to the Material Plane when it wants to send a group of mortals on a divine quest, or it needs to give them a nudge in the right direction.

## Forest Chase

A white stag always appears some distance away in a forest or deep wood. Surrounded by a nimbus of golden light, it is clearly an otherworldly creature. The stag will look directly at a group of travelers, but if approached, it will turn and sprint off through the trees. If chased, the stag will lead its pursuers through a number of obstacles in the forest before eventually coming to a halt at a spot that has some bearing on the travelers' quest. If the travelers are able to keep the stag in sight or to follow its tracks, they are likely to find a useful clue or item when the creature stops running. Sometimes, the pursuers may experience a vision or other divine revelation.

## Dying Curse

A white stag always runs when attacked. If cornered, it defends itself to the best of its ability. Killing a white stag angers the gods who created it. When the stag dies, its body vanishes in a puff of white smoke, and the person who slew the creature is subject to a curse that can only be removed with magic or by performing a quest on behalf of the gods—sometimes both. 

```statblock
"name": "White Stag (CCodex)"
"size": "Large"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "13"
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "60 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Understands Common, Elvish, Celestial, Sylvan but can't speak"
"cr": "2"
"traits":
  - "desc": "When the white stag dies, the deity that created it curses the creature\
      \ that dealt the killing blow. The cursed creature finds the natural world working\
      \ against it. roots randomly rise up to trip the creature when it walks past\
      \ a tree (5% chance per mile traveled in forested terrain), animals are more\
      \ reluctant to obey (disadvantage on Wisdom (Animal Handling) checks), and the\
      \ wind seems to always be blowing in the least favorable direction for the creature\
      \ (scattering papers, sending the creature's scent in the direction of a creature\
      \ tracking it, etc.). This curse lasts until it is lifted by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or after the cursed creature completes a task of penance for the deity\
      \ or its temple."
    "name": "Beloved By the Gods"
  - "desc": "Difficult terrain doesn't slow the white stag's travel while in a forest."
    "name": "Forest Runner"
  - "desc": "With a 10-foot running start, the white stag can long jump up to 25 feet."
    "name": "Running Leap"
"actions":
  - "desc": "The white stag makes one gore attack and one hooves attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 10 (2d6 + 3) bludgeoning damage."
    "name": "Hooves"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/white-stag-ccodex.png"
```
^statblock

## Environment

forest