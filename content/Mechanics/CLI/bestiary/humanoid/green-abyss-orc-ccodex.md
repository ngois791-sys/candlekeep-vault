---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/orc
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Abyss Orc
---
# [Green Abyss Orc](Mechanics\CLI\bestiary\humanoid/green-abyss-orc-ccodex.md)
*Source: Creature Codex p. 291*  

*Dwelling in the eternal twilight of deep jungles and shadowy canyons, these orcs are fond of plant camouflage and are sometimes covered in armor featuring plant spikes and spines. All are expert climbers.*

## Nocturnal Menace

Sheltering by day in caverns just beneath the surface, the orcs of the green abyss climb up into the world with the fall of night to hunt and make war in the jungle canopy. They often align themselves with particularly bloodthirsty druids and with vine lords (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). They are immune to the vine lord's spore sacs and can't be transformed into tendril puppets.

## Canopy-Dwelling Predators

Leaner and rangier than others of their kind, they stalk among the branches, spearing their prey below with poisons harvested from the deadly plants native to their home. Their nocturnal hunting hideaways resemble those of large apes; leafy nests that are difficult to spot from the ground.

## Fierce Survivalists

Adept at surviving in an unforgiving world, these orcs survive through a mastery of poisons, use of simple-but-effective traps they leave for the unwary, and by snatching meals from the grip of man-eating flora. They are omnivorous and fond of devouring enormous beetles, roaches, and snakes which other humanoids would pass over.

```statblock
"name": "Green Abyss Orc (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "16"
  - !!int "9"
  - !!int "11"
  - !!int "10"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 90 ft., passive\
  \ Perception 12"
"languages": "Orc"
"cr": "1/2"
"traits":
  - "desc": "As a bonus action, the orc can move up to its speed toward a hostile\
      \ creature that it can see."
    "name": "Aggressive"
  - "desc": "While in sunlight, the orc has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
      \ damage if used with two hands to make a melee attack. If the target is a creature,\
      \ it must succeed on a DC 13 Constitution saving throw, taking 9 (2d8) poison\
      \ damage on a failed save, or half as much damage on a successful one. If the\
      \ poison damage reduces the target to 0 hp, the target is stable but [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hp, and is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
    "name": "Poisoned Spear"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/green-abyss-orc-ccodex.png"
```
^statblock

## Environment

forest