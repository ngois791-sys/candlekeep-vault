---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Necrophage Ghast
---
# [Necrophage Ghast](Mechanics\CLI\bestiary\undead/necrophage-ghast-ccodex.md)
*Source: Creature Codex p. 175*  

*This creature's stench precedes it, suggesting a shambling monstrosity; but, the keen look of intelligence in its eye and arcane sigils on its arm promise a more cunning and dangerous foe.*

## An Erudite Threat

Unlike typical ghouls and ghasts, the necrophage ghast possesses a keen intelligence that thirsts for arcane knowledge, especially the magic that can return the dead to life and force it to serve.

## Learn, then Conquer

The necrophage ghast seeks out knowledge, often spending days, weeks, or even months in solitary research to track down and learn a new bit of arcane necromantic magic. Afterwards, they are eager to put their newfound knowledge into practice. All their research is for naught if they cannot gather enough corpses to perform their experiments.

## Arcane Stench

Through careful experimentation, necrophage ghasts have engineered their natural stench into a magical aura that causes those with weak constitutions to be more susceptible to their arcane magic.

## Hungry Dead Nature

The necrophage ghast doesn't require air or sleep.

```statblock
"name": "Necrophage Ghast (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+5"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "The necrophage ghast is a 5th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 13, +5 to hit with spell attacks). The necrophage\
      \ ghast has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [friends](Mechanics/CLI/spells/friends-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1st level (4 slots):** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [false life](Mechanics/CLI/spells/false-life-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [ray of sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md)\n\n**2nd level\
      \ (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\n\
      \n**3rd level (2 slots):** [animate dead](Mechanics/CLI/spells/animate-dead-xphb.md),\
      \ [hypnotic pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Any living creature that starts its turn within 30 feet of the necrophage\
      \ ghast must succeed on a DC 13 Constitution saving throw or have disadvantage\
      \ on all saving throws against spells cast by any necrophage ghast for 1 minute.\
      \ If a creature's saving throw is successful or the effect ends for it, the\
      \ creature is immune to the stench of all necrophage ghasts for the next 24\
      \ hours."
    "name": "Necrophage Stench"
  - "desc": "The necrophage ghast and any undead within 30 feet of it have advantage\
      \ on saving throws against effects that turn undead."
    "name": "Turning Defiance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 12 (2d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is a creature other than an undead,\
      \ it must succeed on a DC 10 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/necrophage-ghast-ccodex.png"
```
^statblock

## Environment

underground, urban