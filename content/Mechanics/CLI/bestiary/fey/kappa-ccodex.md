---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kappa
---
# [Kappa](Mechanics\CLI\bestiary\fey/kappa-ccodex.md)
*Source: Creature Codex p. 234*  

*Lurking in the water is a strange child-sized humanoid that resembles a bizarre cross between a turtle, a lizard, and a monkey. It has a beak-like mouth, scaly reptilian skin, clawed and webbed hands, and a turtle-like shell on its back. In the top of its head is a bowl-like depression filled with water.*

## Tricksters and Trouble-Makers

Kappa are impish fey spirits that live in the rivers, lakes, and swamps of the eastern lands. Mischievous, they will often play lewd, childish pranks on those passing close to their homes, such as pulling down a traveler's breeches or stealing its clothing while it is swimming. They love the taste of horse and cow flesh and can drag the large animals into the water to drown before sucking out the creatures' entrails. Dark-hearted kappas will attempt to wrestle and drown innocent mortals.

## Weak Spot

The source of a kappa's power is the bowl-like cavity on the top of its head, which is filled with water from the river, lake, or other body of water where it resides. If this bowl ever becomes empty, the kappa is weakened and it will refill the bowl as soon as possible. Kappa are both scrupulously polite and not very bright. If approached with courtesy, a person bowing deeply can trick a kappa into returning the gesture, so that the water pours out of its head bowl.

## Favorite Foodstuffs

A kappa's favorite food is the cucumber. Wise travelers who must cross a bridge over a river inhabited by a kappa will throw cucumbers carved with their names and those of their companions into the water to assuage the creature's appetite. Farmers have been known to befriend kappas with regular gifts of cucumbers, melons, eggplants, and the occasional cow. In return, the kappas may irrigate the farmer's fields, provide fresh fish, or teach the farmer how to set broken bones.

```statblock
"name": "Kappa (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Evil or Chaotic Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "40"
"hit_dice": "11d6 + 11"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "12"
  - !!int "7"
  - !!int "14"
  - !!int "8"
"speed": "25 ft., swim 40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
  - "desc": "The kappa can breathe air and water."
    "name": "Amphibious"
  - "desc": "The kappa can grapple creatures that are two sizes larger than itself\
      \ and can move at full speed when dragging a creature it has [grappled](Mechanics/CLI/rules/conditions.md#Grappled)."
    "name": "Expert Wrestler"
  - "desc": "The kappa has a bowl-like indentation on its head which holds water from\
      \ the river or lake where it lives. If the kappa's head bowl is empty, it has\
      \ disadvantage on attack rolls and ability checks until the bowl is refilled\
      \ with water.\n\nNormal movement and combat do not cause water to spill from\
      \ the bowl, but an opponent can empty the bowl by knocking the kappa [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ or by making two successful grapple attacks one to grab the kappa, and one\
      \ to tip its head while it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)."
    "name": "Head Bowl"
  - "desc": "The kappa has advantage on ability checks and saving throws made to escape\
      \ a grapple."
    "name": "Slippery"
  - "desc": "The kappa has advantage on Strength and Dexterity saving throws made\
      \ against effects that would knock it [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Sure-footed"
"actions":
  - "desc": "The kappa makes two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d4 + 4) slashing damage. The target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Large or smaller creature and the kappa doesn't\
      \ already have another creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/kappa-ccodex.png"
```
^statblock

## Environment

swamp, underwater