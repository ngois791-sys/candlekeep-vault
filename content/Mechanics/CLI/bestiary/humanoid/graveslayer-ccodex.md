---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Graveslayer
---
# [Graveslayer](Mechanics\CLI\bestiary\humanoid/graveslayer-ccodex.md)
*Source: Creature Codex p. 400*  

Pious servants of the sun god, dwarven graveslayers belong to an elite group of undead-slaying warriors. Trained and drilled from an early age in the art of battle, these dwarves are molded into fanatical fighters against the skeletons, zombies, and worse creatures that threaten their mountain homeland. Although not full paladins, the graveslayers have blessings from the sun god that grant them the ability to channel holy power through their weapons and ensure that the undead they slay do not rise up again. The bodies of any fallen comrades are carried back home whenever possible to ensure they do not line up against the dwarves as undead opponents in the future. 

> [!note] Graveslayers in Midgard
> 
> The graveslayers are active in the Black Canton of Grisal in the Ironcrags bordering the Grisal Marches of western Doresh. The dwarves battle the skeletons and zombies of Morgau, raiding across the river into the mountains and beyond to the infamous Zombie Wood. A few members of this tradition also operate out of the Wolfmark, fighting against the Morgau undead with allies from the Northlands. Graveslayers who fall in battle and are left behind often become [ghost dwarves](Mechanics/CLI/bestiary/undead/ghost-dwarf-ccodex.md) if Morgau's necromancers don't get to them first.
^graveslayers-in-midgard

```statblock
"name": "Graveslayer (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any Non-Evil alignment"
"ac": !!int "18"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "10"
  - !!int "14"
  - !!int "13"
"speed": "25 ft."
"saves":
  - "wisdom": !!int "4"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+3"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+2"
"damage_resistances": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Dwarvish"
"cr": "4"
"actions":
  - "desc": "The graveslayer makes two attacks with its blessed battleaxe."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with\
      \ two hands, plus 7 (2d6) radiant damage. If the target is undead, it takes\
      \ an extra 3 (1d6) radiant damage. The blessed battleaxe is silvered, and\
      \ it is magical while in the graveslayer's hands."
    "name": "Blessed Battleaxe"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) slashing damage."
    "name": "Handaxe"
  - "desc": "The graveslayer presents its holy symbol and says a prayer. Each undead\
      \ creature within 30 feet that can see or hear it must succeed on a DC 12 Wisdom\
      \ saving throw or be turned for 1 minute or until it takes damage. A turned\
      \ undead must spend its turns trying to move as far away from the graveslayer\
      \ as it can, and it can't take reactions or willingly move to a space within\
      \ 30 feet of the graveslayer."
    "name": "Turn Undead (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "When an ally within 5 feet of the graveslayer is the target of an attack\
      \ the graveslayer can see, the graveslayer can swap places with the ally, becoming\
      \ the target instead."
    "name": "Brave Sacrifice"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/graveslayer-ccodex.png"
```
^statblock

## Environment

any