---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Darakhul High Priestess
---
# [Darakhul High Priestess](Mechanics\CLI\bestiary\undead/darakhul-high-priestess-ccodex.md)
*Source: Creature Codex p. 172*  

*Though all darakhul acknowledge dark gods, the priestess holds a closer link than most—always first to the feast, dividing out the choice morsels, intoning the words of hideous praise for the feast.*

An emissary of the Hunger God, the darakhul high priestess summons her ever-ravenous people to the feast. Leading rites of slaughter and gluttony or handing out punishments and oaths of deprivation, she exercises a great deal of control over her charges.

## Bone Cracking

The marrow is considered a delicacy among the darakhul—difficult to reach, rich in flavor. The high priestess traditionally awards the first marrow bone to the altar or cracks it herself on a battlefield, shouting a note of praise (literally, "blessed marrow") during this ritual.

## Vestments and Knives

The unholy garments of a darakhul priestess vary wildly in style, from formal robes stitched with black thread and set with garnet and rubies, to the more practical sacrificial robes of tooled leather, which resemble a butcher's apron. A priestess of the darakhul always carries a ritual flensing knife; it is never used in combat, only in the aftermath.

## Hungry Dead Nature

The darakhul doesn't require air or sleep.

```statblock
"name": "Darakhul High Priestess (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "[half plate armor](Mechanics/CLI/items/half-plate-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "18"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "8"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+5"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common"
"cr": "9"
"traits":
  - "desc": "The darakhul high priestess is a 15th-level spellcaster. Its spellcasting\
      \ ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). The\
      \ darakhul high priestess has the following cleric spells prepared:\n\n**Cantrips\
      \ (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md), [mending](Mechanics/CLI/spells/mending-xphb.md),\
      \ [resistance](Mechanics/CLI/spells/resistance-xphb.md), [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md),\
      \ [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [inflict wounds](Mechanics/CLI/spells/inflict-wounds-xphb.md), [protection\
      \ from evil and good](Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md),\
      \ [shield of faith](Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\n**2nd level\
      \ (3 slots):** [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3rd level (3 slots):** [animate dead](Mechanics/CLI/spells/animate-dead-xphb.md),\
      \ [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md), [protection from\
      \ energy](Mechanics/CLI/spells/protection-from-energy-xphb.md), [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)\n\
      \n**4th level (3 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md),\
      \ [stone shape](Mechanics/CLI/spells/stone-shape-xphb.md)\n\n**5th level (2\
      \ slots):** [contagion](Mechanics/CLI/spells/contagion-xphb.md), [insect plague](Mechanics/CLI/spells/insect-plague-xphb.md)\n\
      \n**6th level (1 slots):** [create undead](Mechanics/CLI/spells/create-undead-xphb.md)\n\
      \n**7th level (1 slots):** [regenerate](Mechanics/CLI/spells/regenerate-xphb.md)\n\
      \n**8th level (1 slots):** [antimagic field](Mechanics/CLI/spells/antimagic-field-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The darakhul high priestess can make three extra bite attacks on her\
      \ turn as a bonus action. If any of these attacks miss, all attacks against\
      \ her have advantage until the end of her next turn."
    "name": "Frenzy"
  - "desc": "A darakhul in a prepared disguise has advantage on Charisma ([Deception](Mechanics/CLI/rules/skills.md#Deception))\
      \ checks made to pass as a living creature. While using this ability, the darakhul\
      \ loses her stench."
    "name": "Master of Disguise"
  - "desc": "Any creature that starts its turn within 5 feet of the darakhul must\
      \ succeed on a DC 15 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the start of its next turn. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the darakhul's Stench\
      \ for the next 24 hours. A darakhul high priestess using this ability can't\
      \ also benefit from Master of Disguise."
    "name": "Stench"
  - "desc": "While in sunlight, the darakhul has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The darakhul high priestess and any ghouls within 30 feet of her have\
      \ advantage on saving throws against effects that turn undead."
    "name": "Turning Defiance"
"actions":
  - "desc": "The darakhul high priestess makes two claw attacks and one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage plus 9 (2d8) necrotic damage and, if the target\
      \ is a humanoid, it must succeed on a DC 16 Constitution saving throw or contract\
      \ darakhul fever."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is a creature other than an undead,\
      \ it must succeed on a DC 16 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a humanoid is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for more than 2 rounds, it contracts darakhul fever."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/darakhul-high-priestess-ccodex.png"
```
^statblock

## Environment

underground