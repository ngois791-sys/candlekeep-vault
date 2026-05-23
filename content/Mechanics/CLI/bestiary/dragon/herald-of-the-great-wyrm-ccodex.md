---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Herald of the Great Wyrm
---
# [Herald of the Great Wyrm](Mechanics\CLI\bestiary\dragon/herald-of-the-great-wyrm-ccodex.md)
*Source: Creature Codex p. 217*  

*Doors flew open, and gates lifted as the draconic humanoid approached the castle. All locks failed, and a glowing portal opened between the roots of the courtyard chestnut tree. It opened its mouth to speak the words of the dragon gods.*

## Opener of the Ways

Rare indeed is the arrival of a herald of the Great Wyrm, the Keeper of Portals, the Opener of the Ways and Lord of Dragons. All locks, stoppers, chests, wards, and doors are said to spring open when it treads near, and gates and shadow portals pop into existence at its bidding. The herald of the great wyrm is a sign that the eye of dragonkind is upon a particular place or person—perhaps the thief of a great treasure, perhaps a great treasure to be taken.

## Keeper of Knowledge

The herald of the Great Wyrm knows of all scrolls, books, maps, and even carvings and graffiti within 10 miles of its location. No source of lore or writing can be hidden from it.

```statblock
"name": "Herald of the Great Wyrm (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d10 + 72"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "18"
  - !!int "18"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "strength": !!int "9"
  - "dexterity": !!int "5"
  - "constitution": !!int "9"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+9"
"damage_vulnerabilities": "necrotic"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "cold, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 16"
"languages": "Common, Elvish, Giant, Abyssal, Celestial, Draconic, Infernal"
"cr": "15"
"traits":
  - "desc": "The herald of the great wyrm emits an area of antimagic within 60 feet\
      \ of itself. This trait works like the [antimagic field](Mechanics/CLI/spells/antimagic-field-xphb.md)\
      \ spell, except it only affects magical travel. At the start of each of its\
      \ turns, the herald chooses whether this aura is active. The aura prevents the\
      \ herald's own magical traveling."
    "name": "Aura of Immobility"
  - "desc": "The herald of the great wyrm can use its action to polymorph into a Medium\
      \ dragonborn, Medium human, Small kobold, or back into its true draconic humanoid\
      \ form. In each form, its eyes glow with a magical light that shifts in color\
      \ and it wears a silver key, revealing its identity as a herald. Its statistics,\
      \ other than its size, are the same in each form. Any equipment it is wearing\
      \ or carrying, other than the silver key, transforms with it. It reverts to\
      \ its true form if it dies."
    "name": "Hidden Herald"
  - "desc": "If the herald of the great wyrm fails a saving throw, it can choose to\
      \ succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "As a bonus action, the herald of the great wyrm can open any object that\
      \ contains a mundane or magical means that prevents access. This trait works\
      \ like the knock spell, except it dispels rather than suppresses arcane lock\
      \ and it doesn't create an audible knock when used. Alternatively, the herald\
      \ can use a bonus action to open or close any magical portal, road, gateway,\
      \ or path."
    "name": "Portal Mastery"
  - "desc": "As a bonus action, the herald of the great wyrm can teleport up to 30\
      \ feet to an unoccupied space it can see toward or away from a hostile creature."
    "name": "Portal Movement"
"actions":
  - "desc": "The herald of the great wyrm makes two claw of fate attacks or two spectral\
      \ barrier attacks. If both claw of fate attacks hit the same target, the target\
      \ is [restrained](Mechanics/CLI/rules/conditions.md#Restrained). While [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ the target takes 13 (2d12) radiant damage at the start of each of its turns.\
      \ A creature, including the target, can take an action to make a DC 17 Strength\
      \ check, ending the [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ condition on a success. The herald can restrain only two creatures at a time\
      \ in this way."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d10 + 4) slashing damage plus 9 (2d8) radiant damage."
    "name": "Claw of Fate"
  - "desc": "Ranged Magical Attack. +9 to hit, range 60 ft., one target. *Hit:*\
      \ 18 (4d8) radiant damage. The target must succeed on a DC 18 Wisdom saving\
      \ throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by\
      \ magical bands of force for 1 minute. A creature, including the target, can\
      \ take its action to burst the bands of force by succeeding on a DC 17 Strength\
      \ check."
    "name": "Spectral Barrier"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the herald of the great wyrm can expend a use to take one of the following\
  \ actions. The herald of the great wyrm regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The herald makes one claw of fate attack."
    "name": "Claw of Fate"
  - "desc": "The herald makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The herald of the great wyrm creates a 5-foot-sphere of void matter on\
      \ a point it can see within 120 feet of it. At the start of each of the herald's\
      \ turns, each creature other than the herald within 30 feet of the well of unmaking\
      \ must succeed on a DC 16 Strength saving throw or be pulled up to 15 feet toward\
      \ the well. Each creature that starts its turn within 5 feet of the well must\
      \ make a DC 16 Constitution saving throw. On a failure, a creature takes 27\
      \ (6d8) necrotic damage and is [stunned](Mechanics/CLI/rules/conditions.md#Stunned).\
      \ On a success, a creature takes half the damage and isn't [stunned](Mechanics/CLI/rules/conditions.md#Stunned).\
      \ The well of unmaking lasts until the herald uses this legendary action again\
      \ or until the herald dies."
    "name": "Black Well of Unmaking (Cost 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/herald-of-the-great-wyrm-ccodex.png"
```
^statblock

## Environment

any