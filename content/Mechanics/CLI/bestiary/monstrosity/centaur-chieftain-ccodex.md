---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Centaur Chieftain
---
# [Centaur Chieftain](Mechanics\CLI\bestiary\monstrosity/centaur-chieftain-ccodex.md)
*Source: Creature Codex p. 60*  

*The chieftain's mane and hooves showed signs of long travel, the dust of the trail. But the light in his eyes was bright and the bluefeathered pike he shouldered seemed little more than a toothpick—the creature showed no sign of weariness.*

Centaurs are not easily ruled. Centaur chieftains attain their status through superior strength, force of will, and a knack for sensing trouble early. All of these characteristics require frequent displays, which govern their brash, domineering approach to diplomacy.

## Generous with Plunder

Centaur chieftains raid caravans, merchant carts, and small villages for fun and to win the devotion of their best warriors. The chieftains give most of the goods to the warriors as raiding is often the best way to buy centaur loyalty. Raids are especially common when a chieftain's position in a tribe is new or unstable.

## Courting Herds

Humanoids accustomed to monogamous marriages and clear, permanent partnerships are often offended by centaur courting practices. Chieftains invariably retain a small courting-herd of male and female centaurs. The size of these courting-herds is as much a mark of status as anything, though outsiders often assume the herd's members are all wives or husbands to the chieftain. This assumption is incorrect as the honorable harem positions are more akin to squires, grooms, and ladies-in-waiting in a human or elven court—they dote upon the leader but are not necessarily lovers. The senior members of a courting-herd are often spouses to a centaur chieftain, though how to determine this is a puzzle to outsiders.

## Drunken Raiding

While raiding can be honorable, centaur chieftains of both genders have an enormous appetite for alcohol and many are violent drunkards. This fuels their reputation as brawlers and impetuous raiders, though the chieftains who are less susceptible to bouts of drunkenness are highly regarded as leaders and mercenaries. Some chieftains turn to mercenary work largely to be paid in wine, beer, or other spirits.

```statblock
"name": "Centaur Chieftain (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "14"
  - !!int "9"
  - !!int "14"
  - !!int "14"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "5"
  - "wisdom": !!int "20"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "Common, Sylvan"
"cr": "5"
"traits":
  - "desc": "If the centaur moves at least 30 feet straight toward a target and then\
      \ hits it with a pike attack on the same turn, the target takes an extra 14\
      \ (4d6) piercing damage."
    "name": "Charge"
"actions":
  - "desc": "The centaur chieftain makes two attacks. one with its pike and one with\
      \ its hooves or two with its longbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 9 (1d10 + 4) piercing damage."
    "name": "Pike"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Hooves"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:*\
      \ 5 (1d8 + 1) piercing damage."
    "name": "Longbow"
  - "desc": "For 1 minute, the centaur chieftain can utter a special command or warning\
      \ whenever a nonhostile creature that it can see within 30 feet of it makes\
      \ an attack roll or a saving throw. The creature can add a d4 to its roll\
      \ provided it can hear and understand the centaur chieftain. A creature can\
      \ benefit from only one Leadership die at a time. This effect ends if the centaur\
      \ chieftain is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Leadership (Recharges after a Short or Long Rest)"
  - "desc": "The centaur chieftain rears back on its hind legs and makes a powerful\
      \ stomp with its hooves. Each creature within 15 feet of the chieftain must\
      \ make a DC 15 Dexterity saving throw, taking 28 (8d6) bludgeoning damage\
      \ on a failed save, or half as much damage on a successful one. The attack leaves\
      \ the centaur chieftain vulnerable, reducing its Armor Class by 2 until the\
      \ start of its next turn."
    "name": "Rearing Strike (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/centaur-chieftain-ccodex.png"
```
^statblock

## Environment

grassland