---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mountain Giant
---
# [Mountain Giant](Mechanics\CLI\bestiary\giant/mountain-giant-ccodex.md)
*Source: Creature Codex p. 185*  

*The large hill uncurls into a standing position, revealing itself to be an unbelievably large, craggy creature.*

## Children of the Earth

At the beginning of time, the first creatures to spring forth were the mountain giants, the daughters and sons of Aurgelmir, first of the giants. Where these gargantuan creatures were born, the mountains themselves heaved up to allow their passage. Since those times, the mountain giants have ruled their places of birth, dwelling atop or within the lofty peaks.

## Progeny Forged in Fire

While not immortal, because even the mountains themselves eventually crumble, the mountain giants are one of the longest-lived creatures known to inhabit the world. Once in its lifetime, whether male or female, a mountain giant feels the call to procreate. It seeks out the nearest active volcano, where it locates a mate with similar yearnings. Their progeny is born soon after, accompanied by spectacular volcanic activity that gives the newborn mountain giant a new home to inhabit and protect.

## A Giant Among Ants

The mountain giant is so large and inscrutable that it considers smaller races as mere insects, pests to be tolerated until they become too much of a nuisance. Then the mountain giant acts, crushing whole towns and villages as a person might step on an anthill. Even the largest stone giants are little more than pets to a mountain giant.

A mountain giant's lair includes all parts of the mountain that the giant calls home, from the large caverns deep within the mountain to the summit, and everywhere in between. The mountain giant is equally comfortable on the icy, snow-capped peaks as it is in the molten center of a volcano.

The mountain giant patrols its mountain lair regularly, ensuring that no creature is doing any harm, such as mining its metals, minerals, or gems or congregating in large communities in its plateaus, slopes, or valleys. Dwarven clans are the main pests for the mountain giant—they consider these bearded humanoids as humans might consider termites.

```statblock
"name": "Mountain Giant (CCodex)"
"size": "Gargantuan"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "313"
"hit_dice": "12d20 + 114"
"modifier": !!int "0"
"stats":
  - !!int "26"
  - !!int "10"
  - !!int "22"
  - !!int "14"
  - !!int "20"
  - !!int "10"
"speed": "50 ft."
"saves":
  - "constitution": !!int "13"
  - "intelligence": !!int "9"
  - "wisdom": !!int "12"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+15"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
"damage_immunities": "cold, fire, lightning, thunder, bludgeoning"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "tremorsense 120 ft., passive Perception 22"
"languages": "Common, Giant, Terran"
"cr": "21"
"traits":
  - "desc": "If the mountain giant fails a saving throw, it can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "A mountain giant has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The mountain giant can move and shape the terrain around it. This trait\
      \ works like the move earth spell, except it has no duration, and the giant\
      \ can manipulate any stone, natural or worked."
    "name": "Mountain Master"
  - "desc": "The mountain giant deals triple damage to objects and structures with\
      \ its melee and ranged weapon attacks."
    "name": "Siege Monster"
"actions":
  - "desc": "The mountain giant makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 20 ft., one target. *Hit:*\
      \ 21 (2d12 + 8) bludgeoning damage."
    "name": "Slam"
  - "desc": "*Ranged Weapon Attack:* +15 to hit, range 100/400 ft., one target.\
      \ *Hit:* 40 (5d12 + 8) bludgeoning damage."
    "name": "Boulder"
  - "desc": "The mountain giant unleashes a barrage of boulders in a 60-foot cone.\
      \ Each creature in that area must make a DC 22 Dexterity saving throw. On a\
      \ failure, a creature takes 58 (9d12) bludgeoning damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained). On a success,\
      \ the creature takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). A target, including\
      \ the [restrained](Mechanics/CLI/rules/conditions.md#Restrained) creature can\
      \ take an action to make a DC 20 Strength ([Athletics](Mechanics/CLI/rules/skills.md#Athletics))\
      \ or Dexterity ([Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)) check,\
      \ freeing the [restrained](Mechanics/CLI/rules/conditions.md#Restrained) creature\
      \ on a success."
    "name": "Boulder Spray (Recharge 5-6)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the mountain giant takes\
      \ a lair action to cause one of the following effects; the giant can't use the\
      \ same effect two rounds in a row:\n\n- The dust, grit, and pebbles in a 20-foot-radius\
      \ area within 60 feet of the mountain giant erupts in a cloud. The area becomes\
      \ difficult terrain. A creature in the area must succeed on a DC 18 Constitution\
      \ saving throw or be blinded until the end of its next turn.  \n- All flying\
      \ creatures within 120 feet of the mountain giant are pulled to the ground,\
      \ including those flying by magical means. A creature forced to the ground in\
      \ this way takes 3 (1d6) force damage for each 10 feet pulled. The creature's\
      \ speed becomes 0 until the end of its next turn.  "
    "name": ""
"regional_effects":
  - "desc": "The region around a mountain giant's home suffers from its presence,\
      \ which creates one or more of the following effects:\n\n- Avalanches occur\
      \ randomly within 5 miles of the lair. The rumbling can be heard at least an\
      \ hour before the avalanche begins. The resulting avalanche varies in power:\
      \ from toppling a few trees to destroying a city at the base of the mountain,\
      \ to diverting the flow of a river in the valley.  \n- Hunting becomes harder\
      \ in the area. The wildlife living within 1 mile of the mountain giant's lair\
      \ become agitated, giving them advantage on all Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks.  \n- Mining becomes more difficult near a mountain giant's lair. Any\
      \ who attempt to mine ores, minerals, or gems within 5 miles of the lair find\
      \ that it takes twice as much time and effort to mine the same amount as elsewhere.\
      \  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the mountain giant can expend a use to take one of the following actions.\
  \ The mountain giant regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The mountain giant commands the earth itself to assist in the fight.\
      \ The giant chooses three creatures it can see within 60 feet. Each target must\
      \ succeed on a DC 21 Dexterity saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ until the start of its next turn."
    "name": "Grasping Soil"
  - "desc": "The mountain giant emits a tremendous growl. Each creature within 20\
      \ feet of the giant must make a DC 21 Constitution saving throw. On a failure,\
      \ a creature takes 21 (6d6) thunder damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, a creature takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Roar (Costs 2 Actions)"
  - "desc": "rA piece of the mountain giant's body tears away in the form of an earth\
      \ elemental. The earth elemental acts on the same initiative count as the mountain\
      \ giant, obeying the mountain giant's commands and fighting until destroyed.\
      \ The mountain giant can have no more than five earth elementals under its control\
      \ at one time."
    "name": "Spawn Elemental (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/mountain-giant-ccodex.png"
```
^statblock

## Environment

mountain