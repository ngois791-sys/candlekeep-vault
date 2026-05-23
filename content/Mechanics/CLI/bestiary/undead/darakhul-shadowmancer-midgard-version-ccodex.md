---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Darakhul Shadowmancer (Midgard Version)
---
# [Darakhul Shadowmancer (Midgard Version)](Mechanics\CLI\bestiary\undead/darakhul-shadowmancer-midgard-version-ccodex.md)
*Source: Creature Codex p. 173*  

*Relishing the darkness feared by others, the shadowmancer's undeath grants it nothing but time to study its art.*

## Servants of Alquam

While most darakhul follow the Hunger God, many shadowmancers praise the Demon Lord of Night, Alquam (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]).

## Never Alone

A darakhul shadowmancer is almost never encountered alone; it is regularly accompanied by shadow guardians, [shadow skeletons](Mechanics/CLI/bestiary/undead/shadow-skeleton-ccodex.md), or other horrors.

## Frequent Spies

Often called upon by their emperor to serve as spies among the cities of the surface world or as emissaries to the shadow fey, darakhul shadowmancers may be encountered virtually anywhere.

## Hungry Dead Nature

The darakhul doesn't require air or sleep.

```statblock
"name": "Darakhul Shadowmancer (Midgard Version) (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "9"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+1"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "The darakhul shadowmancer is a 9th-level spellcaster. Its spellcasting\
      \ ability is Intelligence (spell save DC 14, +6 to hit with spell attacks).\
      \ The darakhul shadowmancer has the following wizard spells prepared:\n\n**Cantrips\
      \ (at will):** [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md), *claws\
      \ of darkness* ^[The *Midgard World Handbook* by Kobold Press is currently unconverted\
      \ for 5eTools.], *douselight* ^[The *Midgard World Handbook* by Kobold Press\
      \ is currently unconverted for 5eTools.], [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md)\n\
      \n**1st level (4 slots):** *black ribbons* ^[The *Midgard World Handbook* by\
      \ Kobold Press is currently unconverted for 5eTools.], *cloak of shadow* ^[The\
      \ *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.],\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [ray of sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md)\n\
      \n**2nd level (3 slots):** *dark path* ^[The *Midgard World Handbook* by Kobold\
      \ Press is currently unconverted for 5eTools.], *darkbolt* ^[The *Midgard World\
      \ Handbook* by Kobold Press is currently unconverted for 5eTools.], [see invisibility](Mechanics/CLI/spells/see-invisibility-xphb.md)\n\
      \n**3rd level (3 slots):** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [fear](Mechanics/CLI/spells/fear-xphb.md), *legion* ^[The *Midgard World Handbook*\
      \ by Kobold Press is currently unconverted for 5eTools.]\n\n**4th level (2 slots):**\
      \ [arcane eye](Mechanics/CLI/spells/arcane-eye-xphb.md), *shadow monsters* ^[The\
      \ *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.]\n\
      \n**5th level (1 slots):** *shadow realm gateway* ^[The *Midgard World Handbook*\
      \ by Kobold Press is currently unconverted for 5eTools.]"
    "name": "Spellcasting"
  - "desc": "A darakhul in a prepared disguise has advantage on Charisma ([Deception](Mechanics/CLI/rules/skills.md#Deception))\
      \ checks made to pass as a living creature. While using this ability, the darakhul\
      \ loses its stench."
    "name": "Master of Disguise"
  - "desc": "While in dim light or darkness, the darakhul shadowmancer can take the\
      \ [Hide](Mechanics/CLI/rules/actions.md#Hide) action as a bonus action."
    "name": "Shadow Stealth"
  - "desc": "Any creature that starts its turn within 5 feet of the darakhul must\
      \ succeed on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the start of its next turn. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the darakhul's Stench\
      \ for the next 24 hours. A darakhul shadowmancer using this ability can't also\
      \ benefit from Master of Disguise."
    "name": "Stench"
  - "desc": "While in sunlight, the darakhul has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The darakhul shadowmancer and any ghouls within 30 feet of it have advantage\
      \ on saving throws against effects that turn undead."
    "name": "Turning Defiance"
"actions":
  - "desc": "The darakhul shadowmancer makes two attacks. one with its bite and one\
      \ with its dagger."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 11 (2d8 + 2) piercing damage, and, if the target is a humanoid, it must\
      \ succeed on a DC 13 Constitution saving throw or contract darakhul fever."
    "name": "Bite"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/darakhul-shadowmancer-midgard-version-ccodex.png"
```
^statblock

## Environment

underground