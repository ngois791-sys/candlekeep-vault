---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Herald of Undeath
---
# [Herald of Undeath](Mechanics\CLI\bestiary\undead/herald-of-undeath-ccodex.md)
*Source: Creature Codex p. 219*  

*Skeletal and towering over the battle, the herald of undeath blasts the living in the name of its dark lord: "Hail the age of apocalypse, for your death is here! I shall reap you all into my master's fold, for I am the end times made flesh!"*

Fresh from the land of the dead, a herald of undeath is an enormous, undead servitor of the dark gods of undeath. It is often accompanied by flutterflesh (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) scouts or a pack of wraiths, and it travels as a messenger to a [hierophant lich](Mechanics/CLI/bestiary/undead/hierophant-lich-ccodex.md) or an evil high priest. The herald of undeath walks tirelessly to spread its master's grim message of death, doom, and decay.

## Shrieking Bones

When struck by magic or by a magical weapon, the bones of the herald cry out in pain with the voices of the damned.

## Separable Limbs and Eyes

The herald of undeath can detach its various limbs at any time, leaving them to act independently. It will often leave an eyeball somewhere to keep watch on a particular location.

## Raises Entire Cemeteries

A herald of undeath can and will raise entire undead armies from large cemeteries, battlefields, or necropoli. There is no limit to the number of undead that will follow a herald of undeath, and even intelligent undead are not immune to its clarion call. Tribes of gnolls sometimes follow them, seeking chaos and easy plunder.

## Undead Nature

A herald of undeath doesn't require air, food, drink, or sleep.

```statblock
"name": "Herald of Undeath (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "18"
  - !!int "10"
  - !!int "12"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "8"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_vulnerabilities": "radiant"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Common, Infernal"
"cr": "11"
"traits":
  - "desc": "A creature that starts its turn within 10 feet of the herald must succeed\
      \ on a DC 16 Constitution saving throw or take 13 (3d8) necrotic damage."
    "name": "Creeping Death"
  - "desc": "The herald's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The herald has advantage on saving throws against any effect that turns\
      \ undead."
    "name": "Turn Resistance"
"actions":
  - "desc": "The herald of undeath makes two reaping scythe attacks or uses its Ray\
      \ of Annihilation twice. If both reaping scythe attacks hit the same target,\
      \ the target must succeed on a DC 14 Constitution saving throw or it is reduced\
      \ to 0 hp."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d10 + 4) slashing damage plus 9 (2d8) necrotic damage."
    "name": "Reaping Scythe"
  - "desc": "*Ranged Spell Attack:* +7 to hit, range 120 ft., one target. *Hit:*\
      \ 18 (4d8) necrotic damage and the target must succeed on a DC 16 Charisma\
      \ saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) for\
      \ 1 round."
    "name": "Ray of Annihilation"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/herald-of-undeath-ccodex.png"
```
^statblock

## Environment

farmland, urban