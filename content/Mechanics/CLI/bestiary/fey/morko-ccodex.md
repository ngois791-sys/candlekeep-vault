---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Morko
---
# [Morko](Mechanics\CLI\bestiary\fey/morko-ccodex.md)
*Source: Creature Codex p. 270*  

*The only portion of this small, gnomish-looking creature's face that is visible through its wiry brown hair is a pair of impish eyes, a bulbous nose, and a mouth in a perpetual sneer. The rest of its body is entirely wrapped up in layers of filthy, mismatched fabric.*

## Freeloading Fiend

A nuisance who can spell disaster when it gets up to its tricks before winter, a morko lives to glut itself on the labors of others while causing as much chaos as it can. It has a particular predilection for eating its fill of chickens and then digging passages into the coop for foxes and the like. It also delights in unraveling rope and tying the tails of horses and cattle to whatever will cause the most destruction when it shouts in the animal's ear.

## Loves a Good Fire

Morkos can't be harmed by fire, but they do enjoy a warm place to sleep. This combination led them to discover the best place for sleep: about halfway down a chimney. The creatures wriggle down and wedge themselves in, nice and cozy, occasionally poking down at the embers with their spears to get the flames going nice and hot. The shouts and curses of those below as the building begins to fill with smoke makes the practice that much more enjoyable.

## Withering Looks

Morkos derive a great deal of enjoyment from lurking on the outskirts of villages prior to any festival which involves dancing, and they have an excellent memory for such dates. They hide and wait until a lone individual comes close to their location, whereupon they reveal themselves and give the hapless victim a withering stare before scampering off into the wilds. The recipient of this gaze suffers under a particularly cruel curse, and the morko will likely hide somewhere to watch the effects unfold during the festivities.

```statblock
"name": "Morko (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "11"
  - !!int "12"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "fire, poison"
"senses": "passive Perception 12"
"languages": "Elvish, Sylvan"
"cr": "1/4"
"traits":
  - "desc": "The morko has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. and range\
      \ 20/60 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage, or 5 (1d8 +\
      \ 1) piercing damage if used with two hands to make a melee attack."
    "name": "Spear"
  - "desc": "The morko fixes its gaze on a creature it can see within 30 feet. The\
      \ target must make a DC 13 Wisdom saving throw or become cursed with ill manners,\
      \ taking disadvantage on all ability checks and saving throws based on Charisma.\
      \ The curse lasts until removed by the [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or other magic, or until the creature drinks a pitcher of curdled milk."
    "name": "Disdainful Eye (Recharge 6-6)"
  - "desc": "For 1 minute, the morko magically decreases in size, along with anything\
      \ it is wearing or carrying. While shrunken, the morko is Tiny, halves its damage\
      \ dice on Strength-based weapon attacks, and makes Strength checks and Strength\
      \ saving throws with disadvantage. If the morko lacks the room to grow back\
      \ to its regular size, it attains the maximum size possible in the space available."
    "name": "Shrink (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/morko-ccodex.png"
```
^statblock

## Environment

farmland