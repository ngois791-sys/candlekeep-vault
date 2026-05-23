---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- King Kobold
---
# [King Kobold](Mechanics\CLI\bestiary\humanoid/king-kobold-ccodex.md)
*Source: Creature Codex p. 239*  

*Wrapped in tattered finery and draped in silver and gold jewelry, the king kobold sits on a throne, surrounded by an assortment of grisly traps and weaponry. Its crown, a garish mass of precious metals, adds weight to its boastful decrees.*

## Keen Nose for Politics

With considerable guile won by hard experience, a king kobold excels at subterfuge, sustains lucrative trade, and hones a keen eye for potential treachery. The king who rules for more than a few seasons has mastered the art of keeping itself safe through a combination of warriors paid well enough to be loyal, a constant campaign to root out enemies, and an abundance of traps, tricks, and contingencies should things go sour. However, security from threats above and below ground and wealth earned through trade are what truly maintain a king on its throne.

## Eyes Everywhere

The condition of its warrens and outlying tribes that pay tribute occupy much of a king kobold's time and energy. Tunnel-runners come and go in a constant stream from warren to warren to keep the king abreast of happenings in all of its holdings. A truly successful king may command fealty from a network of tribes stretching for miles.

## Long Live the King

Unlike many tribal kobold chieftains, a king kobold leaves the fighting to its underlings whenever possible, except when doing so might weaken its hold on its territory. Few creatures are as ruthless as a threatened king, and the king will not hesitate to sacrifice everything and everyone to escape and live to fight another day.

```statblock
"name": "King Kobold (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "18 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "25d6 + 25"
"modifier": !!int "5"
"stats":
  - !!int "8"
  - !!int "20"
  - !!int "12"
  - !!int "14"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+8"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+8"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Draconic"
"cr": "6"
"traits":
  - "desc": "The king kobold is a 4th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 13, +5 to hit with spell attacks). The king\
      \ kobold has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md)\n\
      \n**1st level (4 slots):** [alarm](Mechanics/CLI/spells/alarm-xphb.md), [grease](Mechanics/CLI/spells/grease-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)\n\n**2nd level (3 slots):**\
      \ [alter self](Mechanics/CLI/spells/alter-self-xphb.md), [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)"
    "name": "Spellcasting"
  - "desc": "On each of its turns, the king kobold can use a bonus action to take\
      \ the [Dash](Mechanics/CLI/rules/actions.md#Dash), [Disengage](Mechanics/CLI/rules/actions.md#Disengage),\
      \ or [Hide](Mechanics/CLI/rules/actions.md#Hide) action."
    "name": "Cunning Action"
  - "desc": "If the king kobold is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half damage, the king instead takes no\
      \ damage if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The king has advantage on attack rolls against a creature if at least\
      \ one of the king's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "The king kobold deals an extra 14 (4d6) damage when it hits a target\
      \ with a weapon attack and has advantage on the attack roll, or when the target\
      \ is within 5 feet of an ally of the king that isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and the king doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "While in sunlight, the king has disadvantage on attack rolls and on Wisdom\
      \ ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks that rely\
      \ on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The king kobold makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d6 + 5) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 30/120 ft., one target. *Hit:*\
      \ 8 (1d6 + 5) piercing damage."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "The king kobold halves the damage from one attack that hits it. To do\
      \ so, it must see the attacker."
    "name": "Uncanny Dodge"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/king-kobold-ccodex.png"
```
^statblock

## Environment

underground, urban