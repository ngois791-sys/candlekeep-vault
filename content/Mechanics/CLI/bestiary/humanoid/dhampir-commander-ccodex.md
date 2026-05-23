---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dhampir
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dhampir Commander
---
# [Dhampir Commander](Mechanics\CLI\bestiary\humanoid/dhampir-commander-ccodex.md)
*Source: Creature Codex p. 107*  

*The thin, dark-haired commander wades into the throng of enemy soldiers. The leader's troops come rushing in, inspired by the courageous example.*

Dhampirs in military service fly up the ranks and use their natural charisma to inspire the soldiers beneath them to acts of heroism and violence.

## Inspiring Leaders

Dhampir commanders lead by example on the battlefield, wading into combat and leading charges. A dhampir's troops die for their leader and offer their own necks for feeding if the commander is injured. Good dhampirs rely on this loyalty to fight malevolent forces, while evil half-living commanders relish the power they have over soldiers, pushing them to acts of depravity.

```statblock
"name": "Dhampir Commander (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dhampir"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md),\
  \ [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "16"
  - !!int "14"
  - !!int "12"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "strength": !!int "5"
  - "dexterity": !!int "6"
  - "wisdom": !!int "4"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "necrotic"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "7"
"traits":
  - "desc": "Each ally within 30 feet of the dhampir that can see it can make one\
      \ melee attack as a bonus action."
    "name": "Inspiring Savagery"
  - "desc": "The dhampir has advantage on saving throws against disease."
    "name": "Undead Resistance"
"actions":
  - "desc": "The dhampir makes four rapier or four shortbow attacks. It can make a\
      \ grapple attack or Dark Thirst attack in place of any attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Rapier"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 80/320 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) piercing damage."
    "name": "Shortbow"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature that is\
      \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by the dhampir, incapactitated,\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). *Hit:* 5 (1d4\
      \ + 3) piercing damage plus 7 (2d6) necrotic damage. The dhampir commander\
      \ regains hp equal to the amount of necrotic damage dealt."
    "name": "Dark Thirst"
  - "desc": "The dhampir magically beguiles the mind of one humanoid it can see within\
      \ 30 feet for 1 hour. The target must succeed on a DC 15 Charisma saving throw\
      \ or the dhampir has advantage on Charisma checks against the target. If the\
      \ dhampir or any of its allies damage the target, the effect ends. If the target's\
      \ saving throw is successful or the effect ends, the target is immune to this\
      \ dhampir's Predatory Charm for the next 24 hours. A creature immune to being\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed) is immune to this effect.\
      \ A dhampir can have only one target affected by its Predatory Charm at a time.\
      \ If it uses its Predatory Charm on another target, the effect on the previous\
      \ target ends."
    "name": "Predatory Charm"
  - "desc": "For 1 minute, the dhampir can utter a special command or warning whenever\
      \ a nonhostile creature that it can see within 30 feet of it makes an attack\
      \ roll or a saving throw. The creature can add a d4 to its roll provided it\
      \ can hear and understand the dhampir. A creature can benefit from only one\
      \ Leadership die at a time. This effect ends if the dhampir is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Leadership (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dhampir-commander-ccodex.png"
```
^statblock

## Environment

urban