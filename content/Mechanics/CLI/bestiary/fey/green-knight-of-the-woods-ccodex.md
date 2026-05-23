---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Knight of the Woods
---
# [Green Knight of the Woods](Mechanics\CLI\bestiary\fey/green-knight-of-the-woods-ccodex.md)
*Source: Creature Codex p. 209*  

*Clad in emerald green plate mail and a cloak woven from leaves, this mysterious knight wields a mighty battle axe. A shield decorated with greenery is strapped to his arm.*

## Fey Champions

Green knights serve the Fey Lords and Ladies, acting as their champions and protecting those ancient forests where the borders between the Material Plane and the lands of the fey are thin. They are creatures of honor, and they are sometimes sent by a fey noble to test the integrity and honesty of a mortal knight by challenging the mortal to a duel or other contest. Beneath their plate armor, green knights appear as heavily built humanoids with a greenish tinge to their skin.

## Forest Hideaways

Green knights make their homes in "green chapels" deep in the woods. These places are sometimes ruined churches or keeps overgrown with moss, vines and other foliage, or hidden forest gorges guarded by [woodwoses](Mechanics/CLI/bestiary/humanoid/woodwose-ccodex.md) or other fey creatures. Green knights often ride green‑skinned, fey warhorses into battle (use warhorse statistics with the Magic Resistance trait and plate barding).

```statblock
"name": "Green Knight of the Woods (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
  - "desc": "If the green knight's head is severed by a vorpal weapon or by other\
      \ means, magical vines sprout from its neck and the head reattaches by the start\
      \ of the green knight's next turn, preventing the green knight from dying from\
      \ the loss of its head."
    "name": "Headsman's Woe"
  - "desc": "As a bonus action, the green knight targets one creature that it can\
      \ see within 30 feet and issues a challenge. If the target can see the green\
      \ knight, it must succeed on a DC 14 Wisdom saving throw or become magically\
      \ compelled to engage the green knight in melee combat for 1 minute, or until\
      \ the knight challenges a new opponent. The target can repeat the saving throw\
      \ at the end of each of its turns, ending the effect on itself on a success.\n\
      \nOn its turn, the affected creature must move towards the green knight and\
      \ make a melee attack against the green knight."
    "name": "Knight's Challenge (3/Day)"
  - "desc": "The green knight has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The green knight can communicate with beasts and plants as if they shared\
      \ a language."
    "name": "Speak with Beasts and Plants"
"actions":
  - "desc": "The green knight makes two attacks. one with its battle axe and one with\
      \ its shield bash."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with\
      \ two hands."
    "name": "Battle Axe"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) bludgeoning damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 15). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by magical vines springing forth from the green knight's shield, and the green\
      \ knight can't make shield bash attacks against other targets."
    "name": "Shield Bash"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. *Hit:* 7 (1d6 + 4) piercing damage."
    "name": "Javelin"
"reactions":
  - "desc": "When the green knight is hit by a melee attack from a creature it has\
      \ successfully challenged, it can make one battle axe attack with advantage\
      \ against the attacker."
    "name": "Knight's Rebuke"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/green-knight-of-the-woods-ccodex.png"
```
^statblock

## Environment

forest