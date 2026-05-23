---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gugalanna
---
# [Gugalanna](Mechanics\CLI\bestiary\celestial/gugalanna-ccodex.md)
*Source: Creature Codex p. 211*  

*A large black bull rips up the earth in great heaps. White wings spread wide from his shoulders, and a burning sun disc floats between his white horns.*

Gugalanna, "The Great Bull of Heaven Who Makes the Earth Shake," is an instrument of Heaven, sent to trample enemies into dust. The sun disc between his horns makes clear his authority.

## Wrath of the Divine

Gugalanna often arrives in times of war, torture, slavery, or oppression in answer to prayers by the poor or the plague-ridden. While rare, these forms of divine intercession occur often enough that evil-doers are familiar with some of its ways and portents. Shining clouds are said to foretell Gugalanna's arrival, as are flowers blooming in midwinter or on the altars of dark gods.

## A Friend to Brother Ox

The animal lord [Brother Ox](Mechanics/CLI/bestiary/fey/brother-ox-ccodex.md) seems to be a friend to Gugalanna; the two sometimes work together.

## Hatred of Blood Magic

The biggest source of evil that brings Gugalanna's attention is the use of blood magic. The use of this form of magic invariably involves blood sacrifices, ritual murder, and other horrors. Gugalanna shakes down the pillars of temples devoted to such activities.

```statblock
"name": "Gugalanna (CCodex)"
"size": "Huge"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "253"
"hit_dice": "22d12 + 110"
"modifier": !!int "3"
"stats":
  - !!int "24"
  - !!int "16"
  - !!int "20"
  - !!int "10"
  - !!int "20"
  - !!int "18"
"speed": "60 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "12"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+14"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+11"
"damage_resistances": "necrotic"
"damage_immunities": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 15"
"languages": "Understands but can't speak, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "Gugalanna doesn't provoke an opportunity attack when it flies out of\
      \ an enemy's reach."
    "name": "Flyby"
  - "desc": "Gugalanna has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Gugalanna's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If Gugalanna moves at least 20 feet straight toward a creature and then\
      \ hits it with a horns attack on the same turn, that target must succeed on\
      \ a DC 22 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), Gugalanna\
      \ can make one kick attack against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "Gugalanna makes two attacks. one with its horns and one with its kick."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 5 ft., one target. *Hit:*\
      \ 34 (5d10 + 7) piercing damage and 14 (4d6) fire damage."
    "name": "Horns"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 5 ft., one target. *Hit:*\
      \ 18 (2d10 + 7) bludgeoning damage."
    "name": "Kick"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the gugalanna can expend a use to take one of the following actions. The\
  \ gugalanna regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Gugalanna makes a kick attack."
    "name": "Kick"
  - "desc": "Gugalanna spreads his wings and stomps his hooves, shaking the earth.\
      \ Each creature within 10 feet of Gugalanna must make a DC 22 Strength saving\
      \ throw. On a failure, a target takes 18 (2d10 + 7) bludgeoning damage and\
      \ is pushed 20 feet away from Gugalanna. On a success, a target takes half the\
      \ damage and isn't pushed. Gugalanna can then fly up to half his flying speed."
    "name": "Rearing Stomp (Costs 2 Actions)"
  - "desc": "The sun disc floating between Gugalanna's horns flares. Each creature\
      \ within 30 feet of Gugalanna must make a DC 18 Dexterity saving throw, taking\
      \ 21 (6d6) fire damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Blazing Sun Disc (Costs 2 Actions, (Recharge 5-6))"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/gugalanna-ccodex.png"
```
^statblock

## Environment

planar