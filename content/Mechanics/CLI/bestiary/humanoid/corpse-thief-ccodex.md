---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Corpse Thief
---
# [Corpse Thief](Mechanics\CLI\bestiary\humanoid/corpse-thief-ccodex.md)
*Source: Creature Codex p. 66*  

*This thin, androgynous creature stands with a noticeable hunch. Its skin is patchy and discolored, and it wears dozens of trinkets on strings around its neck and shoulders.*

Unable to feel strong emotion naturally, corpse thieves steal objects from other humanoids, reliving sensations tied to those possessions in an attempt to find some feeling of belonging.

## Object Reading

By holding certain objects, a corpse thief can learn about the item's previous owner. It feels the sensations and emotions tied to the object, and such experiences are usually the only strong feelings it ever experiences in its life. The creature gets its name from its tendency to loot graves for such trinkets, although it is also adept at stealing them in the chaos of a battle.

## Alien Minds

Corpse thieves cannot feel strong emotions such as joy, anger, and love without reading it on an object. They have a weak sense of personal identity, often confusing memories gained through stolen items with their own. A corpse thief that steals too many objects from one individual may start to believe it is that person. Always seeking emotional connection but forever unable to attain it, corpse thieves live in small communities on the edges of humanoid settlements in mock semblances of those humanoids' societies.

## Unflattering Legends

In addition to the unfortunate name others have bestowed upon them, corpse thieves find themselves associated with several ugly myths. Some claim a corpse thief 's discolored patches of skin come from the flesh of humanoid corpses sewn onto its body. Others believe the creatures sometimes disguise themselves as recently deceased humanoids. If somebody makes a miraculous recovery from illness but acts strangely afterward, people may believe the individual is really a corpse thief in disguise.

```statblock
"name": "Corpse Thief (CCodex)"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "16"
  - !!int "11"
  - !!int "13"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "By concentrating for 10 minutes on a specific object, a corpse thief\
      \ learns more about the object's most recent owner. The effects of this trait\
      \ are different depending on if the most recent owner is alive or dead. This\
      \ trait only works once per object.\n\n- If the most recent owner is alive,\
      \ the corpse thief sees through that person's eyes for 10 minutes. This works\
      \ like the clairvoyance spell, except the most recent owner is the sensor and\
      \ controls which direction it is pointed, how far it can see, etc. The most\
      \ recent owner must make a DC 13 Wisdom saving throw. On a success, it gets\
      \ the sensation that it is being watched.  \n- If the most recent owner is dead,\
      \ the corpse thief can learn five things about the person's life through dream-like\
      \ visions and emotions. This works like the speak with dead spell, except the\
      \ spirit can only answer questions about events in which the object was present.\
      \  "
    "name": "Object Reading"
"actions":
  - "desc": "The corpse thief makes two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Claw"
  - "desc": "The corpse thief targets one creature within 5 feet of it and attempts\
      \ to steal one small item. The target must succeed on a DC 13 Dexterity saving\
      \ throw or lose one non-weapon, non-armor object that is small enough to fit\
      \ in one hand."
    "name": "Steal"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/corpse-thief-ccodex.png"
```
^statblock

## Environment

any