---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Venom Maw Hydra
---
# [Venom Maw Hydra](Mechanics\CLI\bestiary\monstrosity/venom-maw-hydra-ccodex.md)
*Source: Creature Codex p. 370*  

*Five reptilian heads upon long necks rise from the murky surface of the water. Sizzling venom drips from each gaping maw.*

The venom maw hydra lurks in sulfurous swamps and near areas of high geothermal activity, poisoning the hot springs and lakes where it dwells.

## Voracious Appetite

The venom maw hydra takes advantage of the sanctuary its warm water home promises to nearby fauna, devouring any creature that comes for warmth or a drink and leaving desolation in its wake.

## Deadly From Afar

Quick reflexes and the ability to spit vile secretions at range let it strike from the safety of its watery home.

```statblock
"name": "Venom Maw Hydra (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "231"
"hit_dice": "22d12 + 88"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "18"
  - !!int "5"
  - !!int "10"
  - !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "fire"
"damage_immunities": "acid"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 18"
"languages": ""
"cr": "12"
"traits":
  - "desc": "The venom maw hydra can breathe air and water."
    "name": "Amphibious"
  - "desc": "The venom maw hydra has five heads. While it has more than one head,\
      \ the venom maw hydra has advantage on saving throws against being [blinded](Mechanics/CLI/rules/conditions.md#Blinded),\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed), [deafened](Mechanics/CLI/rules/conditions.md#Deafened),\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [stunned](Mechanics/CLI/rules/conditions.md#Stunned),\
      \ and knocked [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious).\
      \ Whenever the hydra takes 25 or more damage in a single turn, one of its heads\
      \ dies. If all its heads die, the hydra dies. At the end of its turn, it grows\
      \ two heads for each of its heads that died since its last turn, unless it has\
      \ taken cold damage since its last turn. The hydra regains 10 hp for each head\
      \ regrown in this way."
    "name": "Multiple Heads"
  - "desc": "While the hydra sleeps, at least one of its heads is awake."
    "name": "Wakeful"
"actions":
  - "desc": "The venom maw hydra makes as many bite or spit attacks as it has heads."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage and 5 (2d4) acid damage."
    "name": "Bite"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 20/60 ft., one target. *Hit:*\
      \ 10 (3d6) acid damage, and the target must succeed on a DC 16 Dexterity saving\
      \ throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) until the\
      \ end of its next turn."
    "name": "Spit"
  - "desc": "The hydra sprays caustic liquid in a 30-foot cone. Each creature in the\
      \ area must make a DC 16 Dexterity saving throw, taking 22 (5d8) acid damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Venom Spray (Recharge 5-6)"
"reactions":
  - "desc": "When it is hit by a melee weapon attack within 10 feet of it, the venom\
      \ maw hydra lashes out with its tail. The attacker must make a DC 16 Strength\
      \ saving throw. On a failure, it takes 7 (2d6) bludgeoning damage and is knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success, the target\
      \ takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Tail Lash"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the venom maw hydra can expend a use to take one of the following actions.\
  \ The venom maw hydra regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The venom maw hydra makes one bite attack."
    "name": "Bite"
  - "desc": "The venom maw hydra makes one spit attack."
    "name": "Spit (Costs 2 Actions)"
  - "desc": "When the venom maw hydra is in water, it wallows, causing the water to\
      \ hiss, froth, and splash within 20 feet. Each creature in that area must make\
      \ a DC 16 Dexterity saving throw, taking 14 (4d6) acid damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Wallowing Rampage (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/venom-maw-hydra-ccodex.png"
```
^statblock

## Environment

swamp