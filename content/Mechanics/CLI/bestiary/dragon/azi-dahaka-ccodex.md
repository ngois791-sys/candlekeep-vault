---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Azi Dahaka
---
# [Azi Dahaka](Mechanics\CLI\bestiary\dragon/azi-dahaka-ccodex.md)
*Source: Creature Codex p. 45*  

*The source of the bone-rattling crack of thunder reveals itself to be a three-headed dragon with black and gold scales, a long serpent-like body, and immense black wings.*

## Demonic Avatar

Azi Dahaka is the product of a union between a storm demon and a dragon. Scholars speculate that it may, in fact, be an avatar of an immortal demon of deceit and killing the mortal form is not enough to end the threat; the avatar will only return.

## Sire of Storm and Swarm

Azi Dahaka takes delight in bringing down howling winds to cause misery and, when injured, its blood becomes rats, snakes, and stinging insects.

```statblock
"name": "Azi Dahaka (CCodex)"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "14"
  - !!int "19"
  - !!int "14"
  - !!int "13"
  - !!int "17"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "9"
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "lightning"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 21"
"languages": "Common, Draconic, Infernal"
"cr": "14"
"traits":
  - "desc": "If Azi Dahaka fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Azi Dahaka has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Azi Dahaka's three heads grant it advantage on saving throws against\
      \ being [blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), and knocked [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)."
    "name": "Multiple Heads"
  - "desc": "Azi Dahaka gets two extra reactions that can be used only for opportunity\
      \ attacks."
    "name": "Reactive Heads"
  - "desc": "A creature that hits Azi Dahaka with a melee attack while within 5 feet\
      \ takes 4 (1d8) piercing damage and 4 (1d8) poison damage as the dragon's\
      \ blood becomes biting and stinging vermin."
    "name": "Vermin Blood"
"actions":
  - "desc": "Azi Dahaka makes three bite attacks and two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 10 (1d10 + 5) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 12 (2d6 + 5) slashing damage."
    "name": "Claw"
  - "desc": "Azi Dahaka exhales a blast of wind and lightning in a 60-foot cone. Each\
      \ creature in that area must make a DC 18 Dexterity saving throw. On a failure,\
      \ a target takes 22 (4d10) bludgeoning damage and 18 (4d8) lightning damage,\
      \ is pushed 25 feet away from Azi Dahaka, and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, a target takes half the bludgeoning and lightning damage and\
      \ is pushed, but isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ All nonmagical flames in the cone are extinguished."
    "name": "Storm Breath (Recharge 5-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the azi dahaka can expend a use to take one of the following actions. The\
  \ azi dahaka regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Azi Dahaka can alter the weather in a 5-mile radius centered on itself.\
      \ The effect is identical to the control weather spell, except the casting time\
      \ and effects are immediate."
    "name": "Control Weather"
  - "desc": "A bolt of lightning flashes down from the clouds to a point Azi Dahaka\
      \ can see within 100 feet of it. Each creature within 5 feet of that point must\
      \ make a DC 20 Dexterity saving throw, taking 16 (3d10) lightning damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Call Lightning (Cost 2 Actions)"
  - "desc": "Azi Dahaka beats its wings. Each creature within 10 feet of the dragon\
      \ must succeed on a DC 20 Dexterity saving throw or take 12 (2d6 + 5) bludgeoning\
      \ damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). Azi\
      \ Dahaka can then fly up to half its flying speed."
    "name": "Wing Attack (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/azi-dahaka-ccodex.png"
```
^statblock

## Environment

mountain