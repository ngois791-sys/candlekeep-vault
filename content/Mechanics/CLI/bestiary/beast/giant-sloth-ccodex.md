---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Sloth
---
# [Giant Sloth](Mechanics\CLI\bestiary\beast/giant-sloth-ccodex.md)
*Source: Creature Codex p. 345*  

*This elephant-sized beast has a pronounced snout with large canine teeth and claws like longswords. It spends most of its life slowly digesting its latest meal in its cool burrow.*

## Burrowers and Diggers

The carnivorous giant sloth lives in great dirt mounds dug to its satisfaction in hilly or grassland areas. Below the mound is a series of tunnels dug for escape and the storage of recent kills.

## Hunter at the Water's Edge

These clever predators bury themselves in mud and grass and wait beside rivers, lakes, and ponds for prey to draw near. Once within range, the sloth moves with surprising speed and, like a trapdoor spider, rushes out to pull its prey back into its hunting hole.

## Fetid Coats

The fur of the giant sloth is a matted nightmare of mud, blood, viscera, and mold. They apply fresh coats of mud when preparing to hunt, masking their scent for a short time. 

```statblock
"name": "Giant Sloth (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d10 + 50"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "19"
  - !!int "3"
  - !!int "12"
  - !!int "10"
"speed": "20 ft., climb 20 ft."
"saves":
  - "strength": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": ""
"cr": "7"
"traits":
  - "desc": "Any creature that starts its turn within 15 feet of the giant sloth must\
      \ succeed on a DC 15 Constitution saving throw or have disadvantage on its next\
      \ attack roll or ability check."
    "name": "Foul Odor"
  - "desc": "The giant sloth moves double its normal speed and has advantage on all\
      \ of its attacks for 1 round."
    "name": "Hunter's Dash (1/Day)"
"actions":
  - "desc": "The giant sloth makes two attacks. one with its claw and one with its\
      \ bite. If the giant sloth is grappling a creature, it can also use its Sloth's\
      \ Embrace once."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (3d6 + 4) slashing damage. The target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 15) if it is a Large or smaller creature and the sloth doesn't\
      \ have another creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (3d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "The giant sloth crushes a creature it is grappling by pulling the creature\
      \ against its fetid, furry chest. The target must make a DC 15 Strength saving\
      \ throw, taking 27 (6d8) bludgeoning damage on a failed save, or half as much\
      \ damage on a successful one. A creature that fails the save is also [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Sloth's Embrace"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/giant-sloth-ccodex.png"
```
^statblock

## Environment

grassland