---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blood Ooze
---
# [Blood Ooze](Mechanics\CLI\bestiary\ooze/blood-ooze-ccodex.md)
*Source: Creature Codex p. 282*  

*A slick of spilled blood lurches forward as it senses nearby blood, revealing itself to be a heavy mound of sticky, crimson sludge.*

## Blood Seeking

Like a vampire, a blood ooze craves hot, fresh blood. It draws the blood out of its victims, leaving nothing behind but a dry and withered husk.

## Temple Guardians

Blood oozes are often found as guardians of shrines, blood vaults, or temples where dark gods are propitiated with human or animal blood. The congealed remains of these sacrifices sometimes take on the dark energies of their surroundings and answer unholy prayer. In most cases, this means that they obey the directives of the temple's high priest in exchange for an occasional meal from an initiate or supplicant.

## Ooze Nature

A blood ooze doesn't require sleep.

```statblock
"name": "Blood Ooze (CCodex)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "76"
"hit_dice": "8d10 + 32"
"modifier": !!int "-2"
"stats":
  - !!int "16"
  - !!int "6"
  - !!int "18"
  - !!int "1"
  - !!int "8"
  - !!int "2"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid, fire, necrotic, slashing"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 9"
"languages": ""
"cr": "6"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "A creature that touches the ooze or hits it with a melee attack while\
      \ within 5 feet of it takes 5 (1d10) necrotic damage and the ooze gains temporary\
      \ hp equal to that amount as it drains blood from the victim. It can add temporary\
      \ hp gained from this trait to temporary hp gained from its pseudopod attack\
      \ and Overflow reaction. Its temporary hp can't exceed half its maximum hp.\
      \ If the ooze takes radiant damage, this trait doesn't function at the start\
      \ of the ooze's next turn, although it retains any temporary hp it previously\
      \ gained."
    "name": "Blood Drain"
  - "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage plus 16 (3d10) necrotic damage. The ooze\
      \ gains temporary hp equal to the necrotic damage taken."
    "name": "Pseudopod"
"reactions":
  - "desc": "When the blood ooze is hit with a melee attack, it can drain blood from\
      \ the attacker. The attacker must make a DC 15 Constitution saving throw, taking\
      \ 11 (2d10) necrotic damage on a failed save, or half as much damage on a\
      \ successful one. The ooze gains temporary hp equal to the necrotic damage taken."
    "name": "Overflow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/blood-ooze-ccodex.png"
```
^statblock

## Environment

underground, urban