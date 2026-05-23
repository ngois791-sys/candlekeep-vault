---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Great Mandrake
---
# [Great Mandrake](Mechanics\CLI\bestiary\plant/great-mandrake-ccodex.md)
*Source: Creature Codex p. 260*  

*A crown of lettuce-like leaves sprouts from the soil. The leaves twitch slightly, and a faint, muffled squealing can be heard from the ground.*

## Howl of Injustice

Though some herbalists can breed mandrakes, a mandrake only blooms in the wild under grisly circumstances: when an innocent youth is wrongfully hanged for theft, and the youth's dying blood, spittle, sweat, or urine strikes the earth. The mandrake remains dormant for one year, after which time it grows into a thick, tuberous root that is shaped like a young humanoid sprouting a thick, leafy head of hair. If the root is pulled from the ground, it wails with such piercing fury that most common folk who hear it die instantly.

## Medicinal Marvel

Were it not for its incredible medicinal properties, the mandrake would never be cultivated at all. If ground into a powder and brewed for a year and a day, the mandrake root becomes an elixir of health, which can cure all poisons and afflictions.

## Great Mandrake

As a magical plant, the mandrake sometimes takes on an unusual appearance if it grows to full flowering. In these cases, the plant becomes thorny and its powers grow substantially. In particular, it gains the power of speech and its shriek becomes far stronger.

```statblock
"name": "Great Mandrake (CCodex)"
"size": "Tiny"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "44"
"hit_dice": "8d4 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "8"
  - !!int "16"
  - !!int "4"
  - !!int "11"
  - !!int "12"
"speed": "10 ft."
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "tremorsense 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "A great mandrake makes two attacks with its bite. When its shriek is\
      \ available, it can use the shriek in place of one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) piercing damage."
    "name": "Bite"
  - "desc": "Each creature within 60 feet of the mandrake that can hear it must succeed\
      \ on a DC 13 Constitution saving throw or take 11 (3d6) thunder damage. If\
      \ a creature fails the saving throw by 5 or more, it is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn. If it fails by 10 or more, it falls [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious).\
      \ An [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious) creature can\
      \ repeat the saving throw at the end of each of its turns, regaining consciousness\
      \ on a success."
    "name": "Shriek (Recharge 3-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/great-mandrake-ccodex.png"
```
^statblock

## Environment

urban