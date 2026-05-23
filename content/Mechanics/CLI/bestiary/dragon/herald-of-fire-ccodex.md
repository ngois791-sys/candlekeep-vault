---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Herald of Fire
---
# [Herald of Fire](Mechanics\CLI\bestiary\dragon/herald-of-fire-ccodex.md)
*Source: Creature Codex p. 215*  

*Boasting shining, golden claws and crimson robes and smelling of smoke and ash, the bipedal dragon strode through the burning city, pointing its golden claw at certain homes and businesses. In each place, the soldiers found golden plunder to load on the wagons.*

The herald of fire is a living embodiment of fiery justice and burnt sacrifices to the draconic gods. In most cases, the herald appears when some great sacrilege has been committed against the faith of fire, such as the withholding of taxes and tribute, or the slaughter of dragons and their kin, or desecration of a temple.

## Fiery Eyes and Magical Sword

Though the herald can assume the shape of a dragonborn, human, or kobold, it always has eyes filled with leaping flames, no matter its guise. This is far more obvious by night than in daylight. The herald often carries a magical sword of truth. It rarely uses this weapon in battle, for it is made of soft silver and inlaid with mithral and gold. However, all those near the sword find it quite difficult to lie.

## Quick to Anger

While a herald of fire does seek justice and tribute for the dragon gods, it is known for its propensity to anger at slight provocations. In many cases, its anger leads it to shout, stamp its clawed feet, or smash objects around it. In a few cases, it performs immediate and even fatal judgment on the source of its annoyance. Afterwards, it generally claims to have acted entirely within the law and dares others to gainsay it.

```statblock
"name": "Herald of Fire (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "17"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft., fly 50 ft."
"saves":
  - "strength": !!int "7"
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_vulnerabilities": "cold"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Common, Draconic, Infernal"
"cr": "12"
"traits":
  - "desc": "The herald of fire has advantage on melee attack rolls against any creature\
      \ that doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "The herald of fire can use its action to polymorph into a Medium dragonborn,\
      \ Medium human, Small kobold, or back into its true draconic humanoid form.\
      \ In each form, its eyes glow with magical fire and it wears a silver sword,\
      \ revealing its identity as a herald. Its statistics, other than its size, are\
      \ the same in each form. Any equipment it is wearing or carrying, other than\
      \ the silver sword, transforms with it. It reverts to its true form if it dies."
    "name": "Hidden Herald"
  - "desc": "If the herald fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The herald's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "At the start of each of the herald's turns, each creature within 30 feet\
      \ of it must succeed on a DC 16 Charisma saving throw or speak only the truth\
      \ until the start of the herald's next turn while within 30 feet of the herald."
    "name": "Scales of Justice"
  - "desc": "The herald can pinpoint, by scent, the location of precious metals and\
      \ stones, such as coins and gems, within 60 feet of it."
    "name": "Treasure Sense"
"actions":
  - "desc": "The herald of fire makes two fire claw attacks. If both attacks hit the\
      \ same target, the target ignites. Until a creature takes an action to douse\
      \ the fire, the target takes 7 (2d6) fire damage at the start of each of its\
      \ turns."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (2d8 + 3) slashing damage plus 7 (2d6) fire damage."
    "name": "Fire Claw"
  - "desc": "The herald magically shoots fire in a 60-foot line that is 5 feet wide.\
      \ Each creature in that line must make a DC 16 Strength saving throw. On a failure,\
      \ a target takes 42 (12d6) fire damage and, if it is Huge or smaller, is pushed\
      \ up to 15 feet away from the herald. On a success, a target takes half the\
      \ damage and isn't pushed."
    "name": "Fiery Lance (Recharge 5-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the herald of fire can expend a use to take one of the following actions.\
  \ The herald of fire regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The herald makes one fiery claw attack."
    "name": "Fiery Claw"
  - "desc": "The herald makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The herald of fire calls down searing, crimson fire in a 10-foot-radius,\
      \ 40-foot-high cylinder centered on a point the herald can see within 120 feet\
      \ of it. When a creature enters the area for the first time on a turn or starts\
      \ its turn there, it is engulfed in flames and must make a DC 16 Dexterity saving\
      \ throw. The creature takes 14 (4d6) fire damage on a failed save, or half\
      \ as much damage on a successful one. Flammable objects in the area that aren't\
      \ being worn or carried ignite. The pillar of fire lasts until the herald uses\
      \ this legendary action again or until the herald dies."
    "name": "Immolate Foe (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/herald-of-fire-ccodex.png"
```
^statblock

## Environment

any