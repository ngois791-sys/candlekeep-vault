---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Anophiloi
---
# [Anophiloi](Mechanics\CLI\bestiary\monstrosity/anophiloi-ccodex.md)
*Source: Creature Codex p. 39*  

*With a needle-like snout and a gut full of blood, the anophiloi are hard to miss. The buzz of the creature's wings haunts the jungles and marshes, sending warm‑blooded creatures for cover.*

## Blood Drinkers

Predators of the swamplands, jungles, and other humid places, the anophiloi, intelligent mosquitoes the size of large dogs, feed mainly on livestock and large game animals. Their choice of food, however, is a pragmatic one and has nothing to do with morality; game animals won't organize to wipe them out, humanoids will. When famished, anything that bleeds becomes prey for the anophiloi.

## Seasonal Menace

The anophiloi require heat and humidity to thrive. They spend the cold months of the year dwindling in size and dehydrating while hidden in hibernation after one last gluttonous feeding. By the end of this dormant period, the creatures resemble a bundle of gray and black sticks. As soon as the temperature increases, the anophiloi take to the air and seek out easy prey.

## Barely Kept in Check

The anophiloi's period of dormancy allows farmers and keepers of livestock to keep the creature's population thin. At the first dip in temperature, hunts are organized. If not for the frenetic pace and frequency of their egg laying, the anophiloi would be an unpleasant memory in settled regions.

```statblock
"name": "Anophiloi (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "14"
  - !!int "5"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., climb 20 ft., fly 40 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_vulnerabilities": "cold"
"damage_resistances": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The anophiloi has advantage on melee attack rolls against any creature\
      \ that doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "The anophiloi can pinpoint, by scent, the location of living creatures\
      \ within 30 feet of it."
    "name": "Blood Sense"
"actions":
  - "desc": "The anophiloi makes two attacks. one with its claws and one with its\
      \ bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) piercing damage, and if the target is Large or smaller, the\
      \ anophiloi attaches to it. While attached, the anophiloi doesn't attack. Instead,\
      \ at the start of each of the anophiloi's turns, the target loses 5 (1d6 +\
      \ 2) hp due to blood loss.\n\nThe anophiloi can detach itself by spending 5\
      \ feet of its movement. It does so after it drains 20 hit points of blood from\
      \ the target or the target dies. A creature, including the target, can use its\
      \ action to detach the anophiloi by succeed on a DC 13 Strength check."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/anophiloi-ccodex.png"
```
^statblock

## Environment

farmland, forest