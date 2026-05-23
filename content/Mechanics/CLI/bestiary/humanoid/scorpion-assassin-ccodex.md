---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Scorpion Assassin
---
# [Scorpion Assassin](Mechanics\CLI\bestiary\humanoid/scorpion-assassin-ccodex.md)
*Source: Creature Codex p. 405*  

The various scorpion cults train their believers in the arts of death. Few of their proselytes survive the initiation, but those who do emerge from their trials as assassins of unparalleled skill. Through the worship of their god, scorpion assassins cleanse their souls of emotion and their bodies of warmth. Countless rumors surround the death cult. It is said that a scorpion assassin's heart does not beat and that they stand always on the precipice of life and death. Others say that the assassins are living, but their mortal souls have been excised, and their bodies become vessels for gods of death. Others still claim they were never alive and are celestial reapers sent to usher mortals to their final judgment.

```statblock
"name": "Scorpion Assassin (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "5"
"stats":
  - !!int "12"
  - !!int "20"
  - !!int "16"
  - !!int "10"
  - !!int "18"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., passive\
  \ Perception 17"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The scorpion assassin is a 5th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 15, +7 to hit with spell attacks). The scorpion\
      \ assassin has the following spells prepared:\n\n**Cantrips (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md),\
      \ [light](Mechanics/CLI/spells/light-xphb.md), [mending](Mechanics/CLI/spells/mending-xphb.md),\
      \ [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n**1st level (4\
      \ slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [inflict wounds](Mechanics/CLI/spells/inflict-wounds-xphb.md), [shield of\
      \ faith](Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\n**2nd level (3 slots):**\
      \ [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md), [hold\
      \ person](Mechanics/CLI/spells/hold-person-xphb.md), [silence](Mechanics/CLI/spells/silence-xphb.md)\n\
      \n**3rd level (2 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [meld into stone](Mechanics/CLI/spells/meld-into-stone-xphb.md)"
    "name": "Spellcasting"
  - "desc": "During its first turn, the assassin has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit the assassin scores against\
      \ a surprised creature is a critical hit."
    "name": "Assassinate"
  - "desc": "If the scorpion assassin is subjected to an effect that allows it to\
      \ make a Dexterity saving throw to take only half damage, the assassin instead\
      \ takes no damage if it succeeds on the saving throw, and only half damage if\
      \ it fails."
    "name": "Evasion"
  - "desc": "Once per turn, the scorpion assassin deals an extra 17 (5d6) damage\
      \ when it hits a target with a weapon attack and has advantage on the attack\
      \ roll, or when the target is within 5 feet of an ally of the assassin that\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) and\
      \ the assassin doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "The scorpion assassin makes two scorpion stiletto attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d4 + 5) piercing damage, and the target must make a DC 14 Constitution\
      \ saving throw. On a failure, the target takes 24 (7d6) poison damage and\
      \ is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) for 1 minute. On\
      \ a success, the target takes half the damage and isn't [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)."
    "name": "Scorpion Stiletto"
"reactions":
  - "desc": "When an attacker the scorpion assassin can see hits it with an attack,\
      \ it can choose to take half the damage instead."
    "name": "Uncanny Dodge"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/scorpion-assassin-ccodex.png"
```
^statblock

## Environment

badlands, coastal