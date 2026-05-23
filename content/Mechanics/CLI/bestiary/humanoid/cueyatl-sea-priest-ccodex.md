---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cueyatl Sea Priest
---
# [Cueyatl Sea Priest](Mechanics\CLI\bestiary\humanoid/cueyatl-sea-priest-ccodex.md)
*Source: Creature Codex p. 69*  

*Deep in the coastal jungles, the frog-like cueyatl subjugate other humanoids, forcing them into labor or delivering them to enigmatic gods.*

## Deadly Poisons

Giant ants and venomous aquatic life in the cueyatl diet help them generate poisonous secretions from their skin and in their saliva. The cueyatl use this poison to coat their weapons both for hunting and war.

## Savage Pirates

Knifing through the water in their outrigger canoes, the cueyatl attack ships that blunder into their coastal waters with great ferocity. The cargo is often left aboard if the cueyatl have no immediate use for it; the ships' crews are their main targets, sacrificed to appease their temperamental gods.

## Fiercly Obedient

Their priesthoods work together closely under the cueyatl priest-kings. These priest-kings speak with the authority of the gods, and the cueyatl never waver in their obedience, even to the point of self-sacrifice.

```statblock
"name": "Cueyatl Sea Priest (CCodex)"
"size": "Small"
"type": "humanoid"
"alignment": "Lawful Evil"
"ac": !!int "12"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "14"
  - !!int "10"
"speed": "30 ft., climb 20 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "3"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+4"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+2"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Aquan"
"cr": "1"
"traits":
  - "desc": "The cueyatl sea priest is a 2nd-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 12, +4 to hit with spell attacks). The cueyatl\
      \ sea priest has the following druid spells prepared:\n\n**Cantrips (at will):**\
      \ [guidance](Mechanics/CLI/spells/guidance-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md)\n\
      \n**1st level (3 slots):** [animal friendship](Mechanics/CLI/spells/animal-friendship-xphb.md),\
      \ [create or destroy water](Mechanics/CLI/spells/create-or-destroy-water-xphb.md),\
      \ [fog cloud](Mechanics/CLI/spells/fog-cloud-xphb.md), [speak with animals](Mechanics/CLI/spells/speak-with-animals-xphb.md)\n\
      \n**2nd level (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [silence](Mechanics/CLI/spells/silence-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3rd level (2 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The cueyatl can breathe air and water."
    "name": "Amphibious"
  - "desc": "The cueyatl has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in jungle terrain."
    "name": "Jungle Camouflage"
  - "desc": "The cueyatl has advantage on saving throws and ability checks made to\
      \ escape a grapple."
    "name": "Slippery"
  - "desc": "The cueyatl sea priest can communicate with amphibious and water breathing\
      \ beasts and monstrosities as if they shared a language."
    "name": "Speak with Sea Life"
  - "desc": "The cueyatl's long jump is up to 20 feet and its high jump is up to 10\
      \ feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +2 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 3 (1d6) piercing damage plus 7 (2d6) poison damage,\
      \ or 4 (1d8) piercing damage plus 7 (2d6) poison damage if used with two\
      \ hands to make a melee attack."
    "name": "Trident"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/cueyatl-sea-priest-ccodex.png"
```
^statblock

## Environment

coastal