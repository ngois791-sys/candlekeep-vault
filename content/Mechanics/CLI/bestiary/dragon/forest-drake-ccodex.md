---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Forest Drake
---
# [Forest Drake](Mechanics\CLI\bestiary\dragon/forest-drake-ccodex.md)
*Source: Creature Codex p. 128*  

*A wingless, scaled beast the size of a hound squats low to the ground on four stocky legs. It blows fire from its mouth, igniting a pile of dry leaves and casting white ash onto its emerald scales. It smiles as the flames begin to climb up a dead tree.*

Forest drakes are short, wingless drakes. They trundle slowly across the ground but are capable of climbing trees at a rapid pace using their long, muscular tail and powerful, dagger-sharp claws. Forest drake eggs are laid in hollows buried beneath oldgrowth trees, and it is said that a drake will live as long as the tree where it hatched.

## Altruistic Arsonists

Forest drakes love setting forest fires. Yet despite their apparently ruthless contempt for their sylvan home, forest drakes set fires to protect their domains. Forest drakes are acutely aware that small, frequent forest fires cull dead and diseased trees and prevent the woods from becoming tinder-dry and prone to massive, uncontrollable infernos in the summer. Wood elves and seasoned human woodmen tend to make forest drakes their allies, as the helpful drakes keep their self-set wildfires from spreading. Lumberjacks, hunters, and farmers less skilled in the art of forestry often mistake forest drakes' altruism for malice and attack the creatures on sight.

## Druidic Watchdogs

Druids and forest drakes share a common interest in ensuring the continued survival of the natural world. While forest drakes tend not to directly aid mortals, they make an exception for their druidic allies by guarding druidic enclaves, scouting for threats by swinging through the treetops with their prehensile tails, and making secret markings in the trees to ward druids from dangerous areas.

```statblock
"name": "Forest Drake (CCodex)"
"size": "Small"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d6 + 32"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "19"
  - !!int "12"
  - !!int "15"
  - !!int "12"
"speed": "30 ft., climb 50 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+3"
"damage_immunities": "fire"
"condition_immunities": "[paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Druidic, Draconic, Sylvan"
"cr": "2"
"traits":
  - "desc": "The drake's long jump is up to 30 feet and its high jump is up to 15\
      \ feet with or without a running start. Additionally, if it ends its jump within\
      \ 5 feet of a creature, the first attack roll it makes against that creature\
      \ before the end of its turn has advantage."
    "name": "Mighty Leap"
"actions":
  - "desc": "The forest drake makes one bite attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage plus 3 (1d6) fire damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Claw"
  - "desc": "The drake exhales fire in a 15-foot cone. Each creature in that area\
      \ must make a DC 13 Dexterity saving throw, taking 17 (5d6) fire damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/forest-drake-ccodex.png"
```
^statblock

## Environment

forest