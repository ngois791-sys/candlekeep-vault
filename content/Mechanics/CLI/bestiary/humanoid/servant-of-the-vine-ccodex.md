---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Servant of the Vine
---
# [Servant of the Vine](Mechanics\CLI\bestiary\humanoid/servant-of-the-vine-ccodex.md)
*Source: Creature Codex p. 144*  

*A cheerful elf with a glass full of wine sings and dances amid the patrons at the tavern. As the evening wanes, he keeps the party going—straight out the door and into the forest.*

The clergy of the elven god of wine and artistic pursuits follow their patron's edicts by spreading good cheer and inspiring art in all its forms. Their generosity is legendary when it comes to throwing spur-of-the-moment festivals, livening up listless tavern-goers, and offering openhanded patronage of the arts.

## Fools Bearing Unwelcome Wisdom

The elves understand the benefits and the hazards a servant of the vine represents and indulge in the revelry and abandon that forms the god's worship with moderation and caution. This is not so easy for the shorter-lived races, however, and the arrival of a servant of the vine among non-elvish people often heralds drunken foolishness, the dissolution of marriages, acts later considered shameful, and young people "taking to the road" with no idea what might await them. For these reasons, they rarely find a warm welcome twice in the same place.

## Artists and Vagabonds

A servant of the vine rarely travels alone, usually found in the company of libertine artists of varying kinds, or artistic libertines; the distinction soon blurs after a few days in the servant's company.

```statblock
"name": "Servant of the Vine (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "72"
"hit_dice": "16d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "13"
  - !!int "16"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
  - "desc": "The servant of the vine is an 11th-level spellcaster. Its spellcasting\
      \ ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The\
      \ servant of the vine has the following cleric spells prepared:\n\n**Cantrips\
      \ (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md), [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1st level (4 slots):** [bless](Mechanics/CLI/spells/bless-xphb.md), [create\
      \ or destroy water](Mechanics/CLI/spells/create-or-destroy-water-xphb.md) (creates\
      \ or destroys wine; wine created this way evaporates after 1 day), [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md),\
      \ [sanctuary](Mechanics/CLI/spells/sanctuary-xphb.md)\n\n**2nd level (3 slots):**\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ [protection from poison](Mechanics/CLI/spells/protection-from-poison-xphb.md)\n\
      \n**3rd level (3 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\n\n**4th level (3\
      \ slots):** [guardian of faith](Mechanics/CLI/spells/guardian-of-faith-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)\n\n\
      **5th level (2 slots):** [contagion](Mechanics/CLI/spells/contagion-xphb.md)\n\
      \n**6th level (1 slots):** [harm](Mechanics/CLI/spells/harm-xphb.md), [heal](Mechanics/CLI/spells/heal-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The servant has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the servant to sleep."
    "name": "Fey Ancestry"
  - "desc": "The servant of the vine selects up to 6 creatures within 50 feet and\
      \ grants them advantage to Dexterity ([Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)),\
      \ Dexterity ([Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)),\
      \ or Charisma ([Performance](Mechanics/CLI/rules/skills.md#Performance)) checks.\
      \ The servant of the vine chooses which skill for each recipient."
    "name": "Inspire Artistry (3/Day)"
"actions":
  - "desc": "The servant makes three drunken slash attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage and the target must succeed on a DC 14 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Drunken Slash"
  - "desc": "The servant of the vine exhales potent fumes in a 15-foot cone. Each\
      \ creature in that area must make a DC 14 Constitution saving throw. On a failure,\
      \ a creature takes 21 (6d6) poison damage and falls asleep, remaining [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 1 minute. On a success, a creature takes half the damage but doesn't fall\
      \ asleep. The [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious) target\
      \ awakens if it takes damage or another creature takes an action to wake it.\
      \ When the creature wakes, it is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until it finishes a short or long rest. The breath has no effect on constructs\
      \ or undead."
    "name": "Stuporous Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/servant-of-the-vine-ccodex.png"
```
^statblock

## Environment

any