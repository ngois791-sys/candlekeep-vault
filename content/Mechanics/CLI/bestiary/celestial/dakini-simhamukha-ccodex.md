---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial/dakini
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dakini, Simhamukha
---
# [Dakini, Simhamukha](Mechanics\CLI\bestiary\celestial/dakini-simhamukha-ccodex.md)
*Source: Creature Codex p. 70*  

*Those who say that the good and wise are meek and gentle have never seen the simhamuka in her full rage, striking down evil with the fury of a raging lion.*

The simhamukha is a dakini of great vengeance and wrath but also of vast enlightenment. It appears as a titanic woman with blue-black skin and the head of a white lion with a golden mane. The lion's face has three yellow or red eyes with the third in the center of its forehead.

## Manifestations of Energy

Dakinis are lesser goddesses that take active roles in the world. They are an embodiment of enlightened awareness and wisdom and seek to help others to achieve a higher state of being. Of the dakinis, the simhamukha is the most wrathful, seeking to punish those who have harmed protected beings.

```statblock
"name": "Dakini, Simhamukha (CCodex)"
"size": "Huge"
"type": "celestial"
"subtype": "dakini"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "115"
"hit_dice": "11d12 + 44"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "15"
  - !!int "19"
  - !!int "12"
  - !!int "17"
  - !!int "19"
"speed": "50 ft."
"saves":
  - "strength": !!int "8"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "cold; fire; lightning; psychic; bludgeoning, slashing from\
  \ nonmagical weapons"
"damage_immunities": "necrotic, poison, radiant"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 16"
"languages": "All, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The dakini, simhamukha's innate spellcasting ability is Charisma (spell\
      \ save DC 15, +7 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [aid](Mechanics/CLI/spells/aid-xphb.md),\
      \ [guidance](Mechanics/CLI/spells/guidance-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**2/day each:** [confusion](Mechanics/CLI/spells/confusion-xphb.md), [searing\
      \ smite](Mechanics/CLI/spells/searing-smite-xphb.md), [thunderous smite](Mechanics/CLI/spells/thunderous-smite-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The simhamukha's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The simhamukha has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "When the simhamukha hits a creature with a melee attack, it can choose\
      \ to deal an additional 9 (2d8) radiant damage."
    "name": "Smite (3/Day)"
"actions":
  - "desc": "The simhamukha makes two attacks with its kartika, or one with its kartika\
      \ and one with its bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 16\
      \ (2d10 + 5) piercing damage. If this damage reduces the target to 0 hit points,\
      \ the simhamukha kills the target by decapitating it."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (3d8 + 5) slashing damage."
    "name": "Kartika"
  - "desc": "Each creature within 15 feet of the simhamukha must succeed on a DC 16\
      \ Strength saving throw. On a failure, a creature takes 13 (3d8) bludgeoning\
      \ damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). On\
      \ a success, it takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Staff Sweep (Recharge 5-6)"
  - "desc": "The simhamukha draws upon the deepest fears and regrets of the creatures\
      \ around it, creating illusions visible only to them. Each creature within 40\
      \ feet of the simhamukha, must succeed on a DC 15 Charisma saving throw or be\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for 1 minute. A\
      \ creature can repeat the saving throw at the end of each of its turns, taking\
      \ 11 (2d10) psychic damage on a failure or ending the effect on itself on\
      \ a success."
    "name": "Weird (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/dakini-simhamukha-ccodex.png"
```
^statblock

## Environment

any