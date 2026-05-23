---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- One-headed Clockwork Dragon
---
# [One-headed Clockwork Dragon](Mechanics\CLI\bestiary\construct/one-headed-clockwork-dragon-ccodex.md)
*Source: Creature Codex p. 111*  

*An orange glow burns in the eyes of an enormous mechanical dragon. Gears whir as the black-plated war machine spreads steel wings, spewing flames over a battalion of screaming knights.*

Clockwork dragons are siege machines fashioned after their namesake. The one-headed variety stands roughly twelve feet tall, while the three-headed dragon exceeds twenty.

## Weapons of War

Only the most developed nations can afford to build clockwork dragons, but they are worth the cost. A single machine easily turns the tide of most battles and lasts decades. Their mace-tipped fists can breakdown any structure, while mechanical wings give them flight. The dragons' bladed tails kill enemies in a single sweep and a special oil cannon in their chest makes any target vulnerable to the dragon's fiery breath.

## Group Control

A clockwork dragon is created and controlled by a team of three engineers that wear special circlets. While just one of these engineers can control a dragon for a short period of time, any sustained period of solo control is so taxing it kills the engineer. If all the engineers remove their headbands while the dragon is active, the construct attempts to massacre every creature it can see.

## Construct Nature

A clockwork dragon doesn't require air, food, drink, or sleep.

```statblock
"name": "One-headed Clockwork Dragon (CCodex)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"modifier": !!int "0"
"stats":
  - !!int "22"
  - !!int "10"
  - !!int "20"
  - !!int "10"
  - !!int "10"
  - !!int "1"
"speed": "30 ft., fly 50 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": "Understands Common but can't speak"
"cr": "8"
"traits":
  - "desc": "The dragon is magically bound to three circlets. As long as the dragon\
      \ is within 1 mile of a circlet wearer on the same plane of existence, the wearer\
      \ can communicate telepathically with the dragon. While the dragon is active,\
      \ the wearers see through its eyes and hear what it hears. During this time,\
      \ the wearers are deaf and blind with regard to their own senses.\n\nIf only\
      \ two circlet wearers are within 1 mile of the active dragon, each hour spent\
      \ wearing the circlets imposes one level of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)\
      \ on those wearers. If only a single wearer is within 1 mile of the active dragon,\
      \ each minute spent wearing the circlet gives that wearer one level of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion).\
      \ If no circlet wearers are within 1 mile of the dragon, it views all creatures\
      \ it can see as enemies and tries to destroy them until a circlet wearer communicates\
      \ with the dragon or the dragon is destroyed. A circlet wearer can use its action\
      \ to put the dragon in an inactive state where it becomes [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until a wearer uses an action to switch the dragon to active.\n\nEach circlet\
      \ is a magic item that must be attuned."
    "name": "Bound"
  - "desc": "The dragon is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The dragon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The dragon deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The dragon can use its Oil Spray. It then makes three attacks. one with\
      \ its bite and two with its fists."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d6 + 6) bludgeoning damage."
    "name": "Fist"
  - "desc": "The dragon exhales fire in a 30-foot cone. Each creature in that area\
      \ must make a DC 16 Dexterity saving throw, taking 35 (10d6) fire damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharge 6-6)"
  - "desc": "The dragon sprays oil in a 30-foot-cone. Each creature in the area must\
      \ succeed on a DC 16 Dexterity saving throw or become vulnerable to fire damage\
      \ until the end of the dragon's next turn."
    "name": "Oil Spray"
  - "desc": "The dragon swings its bladed tail. Each creature within 10 feet of the\
      \ dragon must make a DC 17 Dexterity saving throw, taking 15 (2d8 + 6) slashing\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Tail Sweep"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/one-headed-clockwork-dragon-ccodex.png"
```
^statblock

## Environment

urban