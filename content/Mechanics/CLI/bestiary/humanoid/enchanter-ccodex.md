---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Enchanter
---
# [Enchanter](Mechanics\CLI\bestiary\humanoid/enchanter-ccodex.md)
*Source: Creature Codex p. 143*  

> [!quote] A quote from Dockmaster Hayes  
> 
> When negotiations turned sour, the kingpin's elf stepped out of the shadows, stopping my advancing guards with a glance. His eyes are all I remember after that, though this contract says the negotiations ended well.

Masters of arcane manipulation, enchanters often make themselves indispensible to diplomats when dealing with belligerent enemies, though some enchanters seek only to empower themselves at the expense of others.

## Quietly Dangerous

Most enchanters conceal the true depths of their power from those around them to insinuate themselves into halls of power and to bend the wills of those who can make the world more suitable to their desires.

## Fey Diplomats

Enchanters are often seen as companions, lords, or wardens of other fey; they speak with unicorns, accept fealty from gnomes, sprites, [leonino](Mechanics/CLI/bestiary/beast/leonino-ccodex.md), or [fey drakes](Mechanics/CLI/bestiary/dragon/fey-drake-ccodex.md), and sometimes conjure aerial spirits as servants, friends, or lovers. They have a knack for finding the uncanny side of the living world and are beloved by the fey lords and ladies.

```statblock
"name": "Enchanter (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "58"
"hit_dice": "13d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "19"
  - !!int "13"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "7"
"traits":
  - "desc": "The enchanter is a 13th-level spellcaster. Its spellcasting ability is\
      \ Intelligence (spell save DC 15, +7 to hit with spell attacks). The enchanter\
      \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [dancing\
      \ lights](Mechanics/CLI/spells/dancing-lights-xphb.md), [friends](Mechanics/CLI/spells/friends-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [message](Mechanics/CLI/spells/message-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n**1st\
      \ level (4 slots):** [charm person](Mechanics/CLI/spells/charm-person-xphb.md)*,\
      \ [hideous laughter](Mechanics/CLI/spells/tashas-hideous-laughter-xphb.md)*,\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\n\n**2nd level\
      \ (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md)*, [invisibility](Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)*\n\n**3rd level (3 slots):**\
      \ [hypnotic pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md), [lightning\
      \ bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\n**4th level (3 slots):**\
      \ [confusion](Mechanics/CLI/spells/confusion-xphb.md)*, [conjure minor elementals](Mechanics/CLI/spells/conjure-minor-elementals-xphb.md)\n\
      \n**5th level (2 slots):** [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md)*,\
      \ [hold monster](Mechanics/CLI/spells/hold-monster-xphb.md), [mislead](Mechanics/CLI/spells/mislead-xphb.md),\
      \ [modify memory](Mechanics/CLI/spells/modify-memory-xphb.md)*\n\n**6th level\
      \ (1 slots):** [irresistible dance](Mechanics/CLI/spells/ottos-irresistible-dance-xphb.md)*,\
      \ [chain lightning](Mechanics/CLI/spells/chain-lightning-xphb.md)\n\n**7th level\
      \ (1 slots):** [prismatic spray](Mechanics/CLI/spells/prismatic-spray-xphb.md)\n\
      \n> [!note]\n> * Enchantment spell of 1st level or higher"
    "name": "Spellcasting"
  - "desc": "The enchanter has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the enchanter to sleep."
    "name": "Fey Ancestry"
  - "desc": "When the enchanter casts an enchantment spell of 1st level or higher\
      \ that targets only one creature, the enchanter can choose to target all creatures\
      \ within 10 feet of the target instead."
    "name": "Reach of the Fey"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "The enchanter targets a creature within 30 feet of it who can see or\
      \ hear the enchanter. The target must succeed on a DC 15 Wisdom saving throw\
      \ or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) for 1 minute. The\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target's speed is reduced\
      \ to 0, it is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ and it must spend each round looking at the enchanter. While looking at the\
      \ enchanter, the [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target\
      \ is considered [blinded](Mechanics/CLI/rules/conditions.md#Blinded) to other\
      \ creatures not between it and the enchanter. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If the [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ target takes damage from one of the enchanter's allies, it has advantage on\
      \ the next saving throw. The effect also ends if the creature can no longer\
      \ see or hear the enchanter. If a creature's saving throw is successful or the\
      \ effect ends for it, the creature is immune to the enchanter's Captivating\
      \ Gaze for the next 24 hours."
    "name": "Captivating Gaze"
"reactions":
  - "desc": "When a creature within 30 feet that the enchanter can see targets it\
      \ with an attack, the enchanter can stop the attacker with a glance. The attacker\
      \ must succeed on a DC 15 Charisma saving throw or immediately stop the attack.\
      \ The attacker can't attack the enchanter again until the start of its next\
      \ turn."
    "name": "Beguiling Parry (Recharge 4-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/enchanter-ccodex.png"
```
^statblock

## Environment

any