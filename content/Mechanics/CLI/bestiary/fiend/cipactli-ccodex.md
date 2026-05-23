---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cipactli
---
# [Cipactli](Mechanics\CLI\bestiary\fiend/cipactli-ccodex.md)
*Source: Creature Codex p. 83*  

*The first one hopped out of the stream with a foul noise; its many mouths chirping with a disquieting "reepmaok, reepmaok" sound. All might have died if not for the captain, who smacked a horse and drove it to sudden movement; the cipactli swarmed and stripped it to bones while our party fled.*

Cipactli are a hideous, demonic blend of the worst elements of crocodilians and deepwater fish with some of the coloration of a poisonous frog. They have scaled hide, a spiked tail with a spine, and toothy maws at each joint.

## Swift Spawning

The cipactli are all hermaphrodites or of indefinite gender, laying eggs in their fallen foes. These fiendish eggs hatch into young, froggish cipactli within a week, and their parent generally leaves them at least one large carcass as nourishment.

## Ravenous Raiders

Always hungry and ever-seeking easy prey, a cipactli demon steals blood and animal sacrifices from temples, devours goats and cattle in their barns, consumes carrion, demands sacrifices, and has been known to hypnotize then eat human victims so silently that others sleeping nearby never wake.

## Friends of Elementals

The cipactli were witnesses to the creation of the world, and their bloodline traces back to the earliest instances of fire, water, earth, void, and air. All elementals are at least somewhat respectful to a cipactli, and the two occasionally form alliances. Water elementals, in particular, often inhabit the same rivers, wells, and oceans as cipactli.

```statblock
"name": "Cipactli (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_vulnerabilities": "fire"
"damage_resistances": "lightning"
"damage_immunities": "cold, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Primordial"
"cr": "5"
"traits":
  - "desc": "The cipactli can breathe air and water."
    "name": "Amphibious"
  - "desc": "The cipactli has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made while underwater."
    "name": "Underwater Camouflage"
  - "desc": "As a bonus action, the cipactli can liquefy itself, disappearing from\
      \ its current location and reappearing in an unoccupied space it can see within\
      \ 20 feet. Its current location and the new location must be connected by water\
      \ in some way: a stream, ooze, soggy ground, or even runoff from a drain pipe."
    "name": "Water Step"
"actions":
  - "desc": "The cipactli makes two bite attacks. If both attacks hit a Medium or\
      \ smaller target, the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14), and the cipactli uses its Devouring Embrace."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "The cipactli devours a Medium or smaller creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by it. The devoured target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), it has total cover\
      \ against attacks and other effects outside the cipactli, and it takes 14 (4d6)\
      \ piercing damage at the start of each of the cipactli's turns as the fiend's\
      \ lesser mouths slowly consume it.\n\nIf the cipactli moves, the devoured target\
      \ moves with it. The cipactli can only devour one target at a time. A creature,\
      \ including the devoured target, can take its action to pry the devoured target\
      \ out of the cipactli's many jaws by succeeding on a DC 14 Strength check."
    "name": "Devouring Embrace"
  - "desc": "A cipactli sings a soporific, primordial song of eternal rest and divine\
      \ repose from its many mouths. Each creature within 100 feet of the cipactli\
      \ that can hear the song must succeed on a DC 14 Charisma saving throw or fall\
      \ asleep and remain [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 10 minutes. A creature awakens if it takes damage or another creature\
      \ takes an action to wake it. This song has no effect on constructs and undead."
    "name": "Ancient Lullaby (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/cipactli-ccodex.png"
```
^statblock

## Environment

any