---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Young Light Dragon
---
# [Young Light Dragon](Mechanics\CLI\bestiary\dragon/young-light-dragon-ccodex.md)
*Source: Creature Codex p. 114*  

*Dragons who wandered across the Ethereal and Astral Planes and the godly outer planes became a breed unto themselves eons past.*

The forms of light dragons are no longer entirely physical, and they use this adaptation to pursue lives of reverence for beauty in places deadly to others—the high places among stars and dark voids.

## Lovers of Light

Motivated in their travels by a love and fascination for bright places of singular beauty, they often bask in a trancelike state for long years in close orbit around celestial structures they find pleasing to look upon or in the shimmering lights of planar conjunctions. In time, the desire to share the experience with their kin moves them on.

## Reclusive and Remote

When birthing and rearing their young, who lack their elders' ethereal bodies, light dragons seek out remote terrestrial places, often known only to others of their kind. Aware of the ruinous effects of their presence over the long term, light dragons avoid making their lairs near farmlands and places of sensitive vegetation. Deserts and inhospitable, rocky coastlines serve as their earthly homes.

During such periods when they do interact with other intelligent beings, they maintain a benevolent but remote approach, wishing all creatures well, but preferring to only interact with others of their kind or creatures who exhibit and appreciate beauty.

## A Network of Mutual Protection and Intelligence

Light dragons maintain amiable connections with one another, telling tales of their travels and sharing information of notable dangers. In particular, void dragons despise light dragons, and light dragons warn one another of a void dragon's approach. If one of their nemeses can be located and confronted with minimal danger to other creatures, the light dragons join forces to destroy it. Light dragons fear the unpredictable insanity of the void dragons and the dangerous knowledge the creatures attain in their studies. They seek to bring the volatile creatures down before the void dragons bring about cataclysmic harm. Many light dragons die in such attempts, and the fear of reprisal against the survivors makes light dragons one of the more reclusive and secretive types of dragon.

```statblock
"name": "Young Light Dragon (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "19"
  - !!int "14"
  - !!int "16"
  - !!int "15"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "radiant"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 30 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 16"
"languages": "Draconic"
"cr": "7"
"traits":
  - "desc": "The dragon sheds bright light in a 15-foot radius and dim light for an\
      \ additional 15 feet.Incorporeal Movement. The dragon can move through other\
      \ creatures and objects as if they were difficult terrain. It takes 5 (1d10)\
      \ force damage if it ends its turn inside an object."
    "name": "Illumination"
  - "desc": "The light dragon travels from star to star and does not require air,\
      \ food, drink, or sleep. When flying between stars, the light dragon magically\
      \ glides on solar winds, making the immense journey through the void in an impossibly\
      \ short time."
    "name": "Void Traveler"
"actions":
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (2d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "The dragon uses one of the following breath weapons."
    "name": "Breath Weapon (Recharge 5-6)"
  - "desc": "The dragon exhales radiant energy in a 30-foot cone. Each creature in\
      \ that area must make a DC 15 Dexterity saving throw, taking 44 (8d10) radiant\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Radiant Breath"
  - "desc": "The dragon emits a flash of dazzling light from its maw in a 30-foot\
      \ cone. Each creature in that area must make a DC 15 Constitution saving throw\
      \ or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded). Undead within\
      \ the area of effect must also make a DC 15 Wisdom saving throw or be turned\
      \ for 1 minute. Undead of CR 1 or lower who fail the saving throw are instantly\
      \ destroyed."
    "name": "Flaring Breath"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair\
      \ action to cause one of the following effects; the dragon can't use the same\
      \ effect two rounds in a row:\n\n- A 30-foot-radius sphere of water in its lair\
      \ boils. Each creature in the area must make a DC 15 Dexterity saving throw,\
      \ taking 21 (6d6) fire damage on a failed save, or half as much damage on\
      \ a successful one.  \n- A 60-foot-radius sphere of glowing stardust bursts\
      \ on a point the dragon can see within 120 feet of it. The burst spreads around\
      \ corners, illuminating objects and creatures in the area. Each creature in\
      \ the area must succeed on a DC 15 Dexterity saving throw or be outlined in\
      \ twinkling starlight. This starlight works like the faerie fire spell, except\
      \ it doesn't require concentration and lasts until the dragon uses this lair\
      \ action again or until the dragon dies.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a legendary light dragon's lair is warped by the\
      \ dragon's magic, which creates one or more of the following effects:\n\n- Fires\
      \ and nonmagical light sources burn twice as long as they would otherwise while\
      \ within 1 mile of a light dragon's lair.  \n- Clouds never gather within 3\
      \ miles of a light dragon's lair, leading to a lack of vegetation.  \n- Creatures\
      \ that can see in natural darkness can also see in areas of magical darkness\
      \ while within 1 mile of a light dragon's lair.  \n\nIf the dragon dies, these\
      \ effects fade over the course of 1d10 days."
    "name": ""
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/young-light-dragon-ccodex.png"
```
^statblock

## Environment

any