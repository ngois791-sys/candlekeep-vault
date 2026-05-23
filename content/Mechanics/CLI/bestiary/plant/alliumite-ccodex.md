---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alliumite
---
# [Alliumite](Mechanics\CLI\bestiary\plant/alliumite-ccodex.md)
*Source: Creature Codex p. 13*  

*An ambulatory plant half the size of a halfling slashes out with its grass blades. Its peeling skin, its hair of sprouts, and its svelte, nimble physique allude to its fey origins. The odor of onions and garlic wafts from it as it advances..*

Stepping on a patch of wild onions, garlic, or leeks in the woods can prove to be a deadly affair. The onion folk are easily riled, and, once angry, they attack relentlessly, slashing at ankles with their wicked grass blades.

## Fey Origins

Alliumites began as a patch of sweet onions in a forest thicket, raised to sentience when a great deal of pixie dust spilled upon them. Arms and legs sprouted from their forms, and they began to think for themselves. Now they seek only to propagate, spreading far and wide. They have developed vast colonies through underground tunnels beneath forests and fields.

## Nature's Gardeners

Alliumites feel a supernatural compulsion to plant chives, garlic, and other wild herbs wherever they go. This instinctive imperative makes them well-suited as gardeners. Though their wild gardens might look haphazard to the untrained eye, an alliumite knows exactly where each individual seed and sprout is planted. Woodland animals and benevolent fey creatures can find sustenance and shelter in these plant sanctuaries, but woe to those who threaten or damage anything planted within an alliumite garden.

## Capable Combatants

Alliumites are exceptionally nimble. With razor-edged grass scimitars and darts made of thorns, they can overwhelm even a well-prepared adventurer. Able to dig through the ground almost as easily as walk and with a penchant for hidden and quiet movement, an alliumite can sneak up on anyone. If one of the onion folk is harmed in battle, it releases a stench that can make eyes water and temporarily cause blindness. Some say the stench can be so powerful as to even induce retching.

```statblock
"name": "Alliumite (CCodex)"
"size": "Small"
"type": "plant"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "4"
"stats":
  - !!int "6"
  - !!int "18"
  - !!int "12"
  - !!int "7"
  - !!int "12"
  - !!int "9"
"speed": "30 ft., burrow 20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Sylvan"
"cr": "1/4"
"traits":
  - "desc": "The alliumite has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks it makes in any terrain with ample obscuring plant life."
    "name": "Plant Camouflage"
  - "desc": "Each creature other than an alliumite within 5 feet of the alliumite\
      \ when it takes damage must succeed on a DC 13 Constitution saving throw or\
      \ be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) until the start of\
      \ the creature's next turn. On a successful saving throw, the creature is immune\
      \ to the Tearful Stench of all alliumites for 1 minute."
    "name": "Tearful Stench"
"actions":
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 20/60 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) piercing damage."
    "name": "Thorn Dart"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) slashing damage."
    "name": "Grass Blade"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/alliumite-ccodex.png"
```
^statblock

## Environment

farmland, grassland