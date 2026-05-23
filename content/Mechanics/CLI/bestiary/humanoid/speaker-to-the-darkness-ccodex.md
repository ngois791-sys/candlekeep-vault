---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/derro
statblock: inline
statblock-link: "#^statblock"
aliases:
- Speaker to the Darkness
---
# [Speaker to the Darkness](Mechanics\CLI\bestiary\humanoid/speaker-to-the-darkness-ccodex.md)
*Source: Creature Codex p. 96*  

*Guano stains the bat fur robe and flayed-skin cloak of this creature. Its mustache is braided with beads of carved bone and its balding head is circled in straw-like white hair.*

The speaker to the darkness wears a mask and a cloak of flayed skin over a robe of bat fur. Its bare feet are caked with dried guano, while its clothing is spattered with fresher samples.

## Priest of Camazotz, Demon Lord of Bats

The speaker to the darkness oversees the religious aspects of the derro bat cult, leading rituals and sacrifices, consulting with Lord Camazotz (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), and organizing expeditions to the surface for prisoners. It often squabbles with other derro priests and leaders over how to divide such prisoners between them. The howling winds of the outer dark soothe its troubled mind, reminding it of the great destiny before it and its ultimate gift to its Lord Camazotz: eternal darkness.

```statblock
"name": "Speaker to the Darkness (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "[scale mail](Mechanics/CLI/items/scale-mail-xphb.md)"
"hp": !!int "135"
"hit_dice": "18d6 + 72"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "18"
  - !!int "10"
  - !!int "9"
  - !!int "18"
"speed": "25 ft."
"saves":
  - "dexterity": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_vulnerabilities": "radiant"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Abyssal, Deep Speech, Undercommon"
"cr": "5"
"traits":
  - "desc": "A creature struck by one of the speaker to the darkness' attacks must\
      \ succeed on a DC 15 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the start of the speaker's next turn."
    "name": "Boon of the Bat"
"actions":
  - "desc": "The speaker to the darkness makes two quarterstaff attacks or two sling\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d6) bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two\
      \ hands, plus 9 (2d8) necrotic damage."
    "name": "Quarterstaff"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 30/120 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) bludgeoning damage."
    "name": "Sling"
  - "desc": "The speaker conjures up to 3 [ghasts](Mechanics/CLI/bestiary/undead/ghast-xmm.md).\
      \ The [ghasts](Mechanics/CLI/bestiary/undead/ghast-xmm.md) appear in unoccupied\
      \ spaces within 30 feet of the speaker that the speaker can see. The [ghasts](Mechanics/CLI/bestiary/undead/ghast-xmm.md)\
      \ follow the speaker's commands, and it is immune to their Stench. It can't\
      \ have more than 3 [ghasts](Mechanics/CLI/bestiary/undead/ghast-xmm.md) conjured\
      \ at one time."
    "name": "Drawn from Beyond (Recharge 5-6)"
  - "desc": "The speaker creates a 15-foot-radius sphere of magical darkness on a\
      \ point it can see within 60 feet. This darkness works like the [darkness](Mechanics/CLI/spells/darkness-xphb.md)\
      \ spell, except creatures inside it have disadvantage on saving throws and the\
      \ speaker and its conjured [ghasts](Mechanics/CLI/bestiary/undead/ghast-xmm.md)\
      \ are unaffected by the darkness."
    "name": "Extinguish Light (1/rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/speaker-to-the-darkness-ccodex.png"
```
^statblock

## Environment

underground