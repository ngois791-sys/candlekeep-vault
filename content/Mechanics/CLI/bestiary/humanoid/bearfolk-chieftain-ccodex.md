---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/bearfolk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bearfolk Chieftain
---
# [Bearfolk Chieftain](Mechanics\CLI\bestiary\humanoid/bearfolk-chieftain-ccodex.md)
*Source: Creature Codex p. 51*  

*With white fur and a sturdy ax, bearfolk chieftains use their size and appearance to threaten strangers. Those who show courage are often welcomed to join the tribe around a fire and feast on seal meat.*

## Balanced Strength

Ruling even a small clan of bearfolk requires patience, sagacity, and ferocity in equal measure, and chieftains who last more than a season display mastery of such a balance. What tales the skalds do not tell of their deeds can be read in their scars, which they display with pride. Always flanked by loyal guards willing to enforce their will, bearfolk chieftains must nonetheless remain ready to wade into battle at a moment's notice against the horrors that lurk in their frozen wilderness or the challenges of their would-be successors.

## Axe of Rulership

Each chieftain owns (and often wields) an axe of some kind as a totem of rulership. Stealing a bearfolk chieftain's axe is a crime that usually results in death or exile.

> [!note] Bearfolk in Midgard
> 
> In the Midgard setting, bearfolk are rare but respected. They thrive both in the Northlands and in the Shadow Realm, where many of a chieftain's strongest guards (often referred to by their northern name, "huskarls") are expected to go on seasonal rambles over wide territory. Their fondness for wandering and their honest nature makes them natural friends to the dwarves and humans against giants and ogres.
^bearfolk-in-midgard

```statblock
"name": "Bearfolk Chieftain (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "bearfolk"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "14"
  - !!int "16"
  - !!int "9"
  - !!int "14"
  - !!int "12"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+11"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Giant"
"cr": "6"
"traits":
  - "desc": "A melee weapon deals one extra die of its damage when the bearfolk cheiftain\
      \ hits with it (included in the attack)."
    "name": "Brute"
  - "desc": "As a bonus action, the bearfolk can trigger a berserk frenzy that lasts\
      \ 1 minute. While in frenzy, it gains resistance to bludgeoning, piercing, and\
      \ slashing damage from nonmagical attacks and has advantage on attack rolls.\
      \ Attack rolls made against a frenzied bearfolk have advantage."
    "name": "Frenzy (1/rest)"
  - "desc": "The bearfolk has advantage on Wisdom([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "If the bearfolk moves at least 20 feet straight toward a creature and\
      \ then hits it with a battleaxe attack on the same turn, that target must succeed\
      \ on a DC 15 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the bearfolk\
      \ can make one bite attack against it as a bonus action."
    "name": "Savage Charge"
"actions":
  - "desc": "The bearfolk makes two attacks with its battleaxe and one with its bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) slashing damage, or 16 (2d10 + 5) slashing damage if used two-handed."
    "name": "Battleaxe"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) piercing damage."
    "name": "Bite"
  - "desc": "For 1 minute, the bearfolk chieftain can, as a reaction, utter a special\
      \ command or warning whenever a nonhostile creature that it can see within 30\
      \ feet of it makes an attack roll or a saving throw. The creature can add a\
      \ d4 to its roll, provided it can hear and understand the bearfolk chieftain.\
      \ A creature can benefit from only one Leadership die at a time. This effect\
      \ ends if the bearfolk chieftain is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Leadership (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/bearfolk-chieftain-ccodex.png"
```
^statblock

## Environment

any