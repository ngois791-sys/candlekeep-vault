---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Hierophant Lich
---
# [Hierophant Lich](Mechanics\CLI\bestiary\undead/hierophant-lich-ccodex.md)
*Source: Creature Codex p. 251*  

> [!quote]  
> 
> A pious word always on its dusty lips, the lich seemed content to count its beads and let dust rattle in its throat. Until, at last, it turned to us and said "I will share my dark blessings with your feeble souls"—and unleashed horrors I shudder to remember.

The hierophant lich is a dry, dusty skeleton with fragments of hair and skin and a fierce, raging light of unholy zeal blazing in its eyes. It is often crowned by a black halo, wreathed in purple flames, or wielding a staff topped with a demonic head that whispers vile suggestions or wicked prophecies to it.

## Servants of Dark Gods

The hierophant lich is always a devout follower of a dark god, demon lord, arch‑devil, or creature of outer darkness. When the hierophant's mortal lifetime would normally end, its dark master grants it additional life, so that it may continue to serve darkness. Usually, this gift is dispensed as part of the burial rites of the hierophant lich. The creature rises just as its body is about to be buried. In other cases, it leaves its tomb shortly after burial, or it stands up when the fires of its cremation are just starting to catch.

## Reborn at the Altar

Each hierophant lich has a sacred vessel that protects its vile soul. So long as this altar, unholy relic, or other sacred object remains whole, the hierophant lich is never permanently slain.

## Pure Evil Bones

The bones of a hierophant lich are said to contain deep, unholy power that serves to produce unholy scrolls, wardings, or wands.

## Undead Nature

A hierophant lich doesn't require air, food, drink, or sleep.

```statblock
"name": "Hierophant Lich (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "20"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "intelligence": !!int "5"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+5"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 19"
"languages": "Common, Abyssal, Infernal"
"cr": "9"
"traits":
  - "desc": "The hierophant lich is a 9th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 17, +9 to hit with spell attacks). The hierophant\
      \ lich has the following cleric spells prepared:\n\n**Cantrips (at will):**\
      \ [guidance](Mechanics/CLI/spells/guidance-xphb.md), [mending](Mechanics/CLI/spells/mending-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1st level (4 slots):** [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [protection from\
      \ evil and good](Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md),\
      \ [sanctuary](Mechanics/CLI/spells/sanctuary-xphb.md)\n\n**2nd level (3 slots):**\
      \ [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md), [hold\
      \ person](Mechanics/CLI/spells/hold-person-xphb.md), [silence](Mechanics/CLI/spells/silence-xphb.md)\n\
      \n**3rd level (3 slots):** [animate dead](Mechanics/CLI/spells/animate-dead-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)\n\
      \n**4th level (3 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md), [guardian\
      \ of faith](Mechanics/CLI/spells/guardian-of-faith-xphb.md)\n\n**5th level (1\
      \ slots):** [flame strike](Mechanics/CLI/spells/flame-strike-xphb.md)"
    "name": "Spellcasting"
  - "desc": "If the lich fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "As a bonus action, a hierophant lich can rise or descend vertically up\
      \ to 20 feet and can remain suspended there. This trait works like the levitate\
      \ spell, except there is no duration, and the lich doesn't need to concentrate\
      \ to continue levitating each round."
    "name": "Levitate"
  - "desc": "If it has a sacred vessel, a destroyed hierophant lich gains a new body\
      \ in 1d10 days, regaining all its hp and becoming active again. The new body\
      \ appears within 5 feet of the vessel."
    "name": "Rejuvenation"
  - "desc": "The hierophant lich has advantage on saving throws against any effect\
      \ that turns undead."
    "name": "Turn Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d6 + 1) bludgeoning damage plus 9 (2d8) necrotic damage. The target\
      \ must succeed on a DC 17 Wisdom saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 minute. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target\
      \ must defend the hierophant. The target can repeat the saving throw at the\
      \ end of each of its turns, ending the effect on itself on a success. An undead\
      \ target that fails is [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 24 hours and can only repeat the saving throw once every 24 hours."
    "name": "Unholy Smite"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the hierophant lich\
      \ can take a lair action to cause one of the following effects; the lich can't\
      \ use the same effect two rounds in a row:\n\n- The hierophant lich gains an\
      \ unholy shield of protection in the form of a shadowy halo of shifting purple.\
      \ It gains 20 temporary hp until initiative count 20 on the next round.  \n\
      - The hierophant lich calls on its god to smite a creature that the lich can\
      \ see within 60 feet of it. The target must make a DC 17 Wisdom saving throw,\
      \ taking 21 (6d6) radiant damage on a failed save, or half as much damage\
      \ on a successful one. If the target fails, it is poisoned until initiative\
      \ count 20 on the next round.  \n- Channeling its god's energy, the hierophant\
      \ lich grants up to five allies advantage on their next attack rolls.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the hierophant lich can expend a use to take one of the following actions.\
  \ The hierophant lich regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The hierophant lich casts a cantrip."
    "name": "Cantrip"
  - "desc": "The heirophant lich uses its Unholy Smite."
    "name": "Unholy Smite (Costs 2 Actions)"
  - "desc": "The hierophant lich threatens one creature within 10 feet of it with\
      \ eternal suffering. The target must succeed on a DC 17 Wisdom saving throw\
      \ or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for 1\
      \ minute. The target can repeat the saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success. If a target's saving throw is successful\
      \ or the effect ends for it, the target is immune to the hierophant lich's Damnation\
      \ for the next 24 hours."
    "name": "Damnation (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/hierophant-lich-ccodex.png"
```
^statblock

## Environment

any