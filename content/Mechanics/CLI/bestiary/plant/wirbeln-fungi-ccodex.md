---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wirbeln Fungi
---
# [Wirbeln Fungi](Mechanics\CLI\bestiary\plant/wirbeln-fungi-ccodex.md)
*Source: Creature Codex p. 166*  

*A strange, mushroom-shaped creature leaps and flies through the air, spraying spores below itself.*

Wirbeln are spiral-shaped bipedal fungi that appear in an array of colors. Each individual is a specific hue that indicates the type of spores it produces. Wirbeln fungi cause minor coloration changes as a form of communication, depending on mood, temperament, or personality.

## Symbiotic Nomads

The wirbeln fungi's origin is lost to history. Those familiar with the creatures know they are wanderers who roam until they find a suitable home, usually in deep and wild places. Home for the wirbeln fungi is best defined by the deep-rooted companionship they develop with other races, rather than a specific location. The wirbeln fungi form allegiances with numerous species, such as elves, gnomes, treants, and others.

## Fierce Protectors

The main strength of wirbeln fungi is their ability to turn back adversaries threatening their gatherings. The extreme loyalty of the wirbeln reveals itself through a determination to defend its chosen community, even if such defense is detrimental to the individual wirbeln.

## Cunning Controllers

Wirbeln fungi employ diversionary tactics, using their numbers and the natural terrain to their advantage to shirk capture and harass enemies. The wirbeln fungi continually fly out of reach, landing on high ledges or branches. They attack by shooting poisonous darts and dropping on enemies from above. They utilize body-and mind-altering spores with overwhelming effects.

```statblock
"name": "Wirbeln Fungi (CCodex)"
"size": "Small"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "13"
  - !!int "10"
  - !!int "12"
  - !!int "10"
"speed": "20 ft., fly 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Elvish, Druidic, Sylvan"
"cr": "1"
"traits":
  - "desc": "While the wirbeln remains motionless, it is indistinguishable from an\
      \ ordinary fungus."
    "name": "Natural Appearance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The creature can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success."
    "name": "Poison Needle"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 20/60 ft., one target. *Hit:*\
      \ 5 (1d4 + 3) piercing damage. If the target is a creature, it must make a\
      \ DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The creature can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success."
    "name": "Poison Dart"
  - "desc": "The wirbeln ejects spores in a 15-foot cone. All creatures that are not\
      \ wirbeln fungi must succeed on a DC 13 Constitution saving throw or take 5\
      \ (1d10) poison damage and be subject to one of the following effects for\
      \ 1 minute, depending on the wirbeln's color. green is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned);\
      \ red is [blinded](Mechanics/CLI/rules/conditions.md#Blinded); yellow is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated);\
      \ blue is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed); purple is\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened); and black is 5\
      \ (2d4) poison damage each round. The target can repeat the saving throw at\
      \ the end of each of its turns, ending the effect on itself on a success."
    "name": "Spore Cloud (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/wirbeln-fungi-ccodex.png"
```
^statblock

## Environment

forest, swamp, underground