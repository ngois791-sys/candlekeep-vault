---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ouroban
---
# [Ouroban](Mechanics\CLI\bestiary\humanoid/ouroban-ccodex.md)
*Source: Creature Codex p. 125*  

*Blood and slaughter are meat and drink to the ouroban! Strike hard, they say, to hasten the apocalypse—death in the name of the great wyrm!*

## Bringers of Apocalypse

Fanatical warriors obsessed with apocalypse and the power they believe will come to them when it arrives, ourobans spread fear, slaughter, and chaos wherever they can. In the doom cults to which they belong, no creature of greater rank rests easy with an ouroban underling as ourobans either claw their way to the top or die in the attempt. Those beneath an ouroban, however, rest a bit easier, so long as they display steady devotion in stoking the ouroban's vanity.

> [!note] Ouruban in Midgard
> 
> Venerating a dark, malevolent interpretation of Ouroboros, a number of ourobans joined the ranks of the Doomspeaker cult. Though the cult's disparate cells mainly worship demons, displays of destructive will and power sways them quickly, and ouroborans do not hesitate to take advantage of this. As a result, the ourobans often claim a following of doomspeaker cultists, be they human, dragonborn, kobold, or otherwise. A wise ouroban usually counts a debased cleric or two in its retinue.
^ouruban-in-midgard

```statblock
"name": "Ouroban (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "209"
"hit_dice": "38d8 + 38"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "13"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "5"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+8"
"damage_immunities": "fire"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 11"
"languages": "Common, Draconic"
"cr": "11"
"traits":
  - "desc": "The ouroban is a 14th-level spellcaster. Its spellcasting ability is\
      \ Charisma (spell save DC 16, +8 to hit with spell attacks). The ouroban has\
      \ the following paladin spells prepared:\n\n**1st level (4 slots):** [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [detect evil and\
      \ good](Mechanics/CLI/spells/detect-evil-and-good-xphb.md), [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [divine favor](Mechanics/CLI/spells/divine-favor-xphb.md) (fire damage instead\
      \ of radiant)\n\n**2nd level (3 slots):** [branding smite](Mechanics/CLI/spells/shining-smite-xphb.md),\
      \ [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md), [zone\
      \ of truth](Mechanics/CLI/spells/zone-of-truth-xphb.md)\n\n**3rd level (3 slots):**\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [elemental weapon](Mechanics/CLI/spells/elemental-weapon-xphb.md)\n\
      \n**4th level (1 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the ouroban imbues its greatsword with dark power.\
      \ All of its greatsword attacks do an additional 10 (3d6) necrotic damage\
      \ per hit until the start of its next turn."
    "name": "Devastate (Recharge 5-6)"
  - "desc": "Whenever the ouroban is subjected to fire damage, it takes no damage\
      \ and instead regains a number of hp equal to the fire damage dealt."
    "name": "Fire Absorption"
"actions":
  - "desc": "The ouroban makes three attacks with its greatsword."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage plus 3 (1d6) fire damage."
    "name": "Greatsword"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 100/400 ft., one target. *Hit:*\
      \ 9 (1d10 + 4) piercing damage."
    "name": "Heavy Crossbow"
  - "desc": "The ouroban exhales fire in a 15-foot cone. Each creature in that area\
      \ must make a DC 13 Constitution saving throw, taking 14 (4d6) fire damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharges after a Short or Long Rest)"
  - "desc": "The ouroban summons green flames under up to five creatures within 30\
      \ feet of it. Each target must succeed on a DC 17 Dexterity saving throw or\
      \ take 18 (4d8) fire damage and be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself with a success.\n\nThe ouroban has\
      \ advantage on attack rolls and ability checks against a creature [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ by its Abyssal Fires."
    "name": "Abyssal Fires (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/ouroban-ccodex.png"
```
^statblock

## Environment

any