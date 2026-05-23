---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ursa Polaris
---
# [Ursa Polaris](Mechanics\CLI\bestiary\monstrosity/ursa-polaris-ccodex.md)
*Source: Creature Codex p. 364*  

*Thick, white fur coats this hulking ursine, and massive crystalline shards of ice protrude from its shoulders. When it lets out a mighty roar, frigid breath dances between the jagged sprouts of ice that form its teeth.*

A fearsome sight, the ursa polaris dwarfs even the largest of polar bears. Some believe that they are polar bears blessed or cursed by gods of cold, winter, and the north. Followers of such gods often leave a caribou carcass, whale blubber, or seal meat as an offering to the ursa polaris.

## Creatures of Ice

The ursa polaris thrives in freezing arctic conditions and is capable of surviving off of ice alone, should other food sources become scarce. They dislike warmth; an ursa polaris will avoid warm waters and curl into its ice cavern when summer comes.

## Fiercely Territorial

The ursa polaris is a solitary creature, carving a vast swath of territory for itself and going out of its way to kill trespassers. Somewhere within its territory, a female ursa polaris will carve out an ice cavern to rear young; this cavern may be within glacial ice, an iceberg, or simply a frosty stone cavern.

## Hypnotically Deadly

The ursa polaris uses the mesmerizing play of light on the ice covering its body to hypnotize its prey for an easy kill.

```statblock
"name": "Ursa Polaris (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "18"
  - !!int "4"
  - !!int "16"
  - !!int "5"
"speed": "40 ft., swim 30 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_vulnerabilities": "fire"
"damage_immunities": "cold"
"senses": "passive Perception 16"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The ursa polaris has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The ursa polaris has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in snowy terrain."
    "name": "Snow Camouflage"
"actions":
  - "desc": "The ursa polaris makes three attacks. one with its bite and two with\
      \ its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) piercing damage plus 7 (2d6) cold damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) slashing damage."
    "name": "Claw"
  - "desc": "The ursa polaris exhales a blast of freezing wind and shards of ice in\
      \ a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving\
      \ throw, taking 18 (4d8) cold damage and 14 (4d6) piercing damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Cold Breath (Recharge 5-6)"
  - "desc": "The ursa polaris sways its back, causing the ice formations on its shoulders\
      \ to catch available light. Each creature within 30 feet of the ursa polaris\
      \ that sees the light pattern must make a DC 15 Wisdom saving throw. On a failure,\
      \ a creature takes 21 (6d6) radiant damage and is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ for 1 minute. On a success, a creature takes half the damage and isn't [stunned](Mechanics/CLI/rules/conditions.md#Stunned).\
      \ A [stunned](Mechanics/CLI/rules/conditions.md#Stunned) creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success. The effect also ends if the creature takes any damage or if\
      \ another creature takes an action to shake it out of its stupor."
    "name": "Hypnotic Array (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/ursa-polaris-ccodex.png"
```
^statblock

## Environment

arctic