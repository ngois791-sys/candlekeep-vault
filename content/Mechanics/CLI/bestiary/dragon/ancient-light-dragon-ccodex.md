---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ancient Light Dragon
---
# [Ancient Light Dragon](Mechanics\CLI\bestiary\dragon/ancient-light-dragon-ccodex.md)
*Source: Creature Codex p. 116*  

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
"name": "Ancient Light Dragon (CCodex)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "407"
"hit_dice": "22d20 + 176"
"modifier": !!int "0"
"stats":
  - !!int "26"
  - !!int "10"
  - !!int "27"
  - !!int "18"
  - !!int "20"
  - !!int "19"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "15"
  - "wisdom": !!int "12"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+11"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+11"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+11"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+11"
"damage_resistances": "fire"
"damage_immunities": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 22"
"languages": "Celestial, Draconic"
"cr": "22"
"traits":
  - "desc": "The dragon can see 60 feet into the Ethereal Plane when it is on the\
      \ Material Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The dragon sheds bright light in a 30-foot radius and dim light for an\
      \ additional 30 feet."
    "name": "Illumination"
  - "desc": "The dragon can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The light dragon travels from star to star and does not require air,\
      \ food, drink, or sleep. When flying between stars, the light dragon magically\
      \ glides on solar winds, making the immense journey through the void in an impossibly\
      \ short time."
    "name": "Void Traveler"
"actions":
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 15 ft., one target. *Hit:*\
      \ 19 (2d10 + 8) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d6 + 8) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 20 ft., one target. *Hit:*\
      \ 17 (2d8 + 8) bludgeoning damage."
    "name": "Tail"
  - "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
      \ and aware of it must succeed on a DC 23 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ dragon's Frightful Presence for the next 24 hours."
    "name": "Frightful Presence"
  - "desc": "The dragon uses one of the following breath weapons.\n\n- **Radiant Breath.**\
      \ The dragon exhales radiant energy in a 90-foot cone. Each creature in that\
      \ area must make a DC 23 Dexterity saving throw, taking 77 (14d10) radiant\
      \ damage on a failed save, or half as much damage on a successful one.  \n-\
      \ **Flaring Breath.** The dragon emits a flash of dazzling light from its maw\
      \ in a 90-foot cone. Each creature in that area must make a DC 23 Constitution\
      \ saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded). Undead\
      \ within the area of effect must also make a DC 23 Wisdom saving throw or be\
      \ turned for 1 minute. Undead of CR 3 or lower who fail the saving throw are\
      \ instantly destroyed.  "
    "name": "Breath Weapon (Recharge 5-6)"
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
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the dragon can expend a use to take one of the following actions. The dragon\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dragon makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The dragon makes a tail attack."
    "name": "Tail Attack"
  - "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
      \ must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
      \ damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). The\
      \ dragon can then fly up to half its flying speed."
    "name": "Wing Attack (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/ancient-light-dragon-ccodex.png"
```
^statblock

## Environment

any