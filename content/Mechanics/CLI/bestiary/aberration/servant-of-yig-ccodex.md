---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Servant of Yig
---
# [Servant of Yig](Mechanics\CLI\bestiary\aberration/servant-of-yig-ccodex.md)
*Source: Creature Codex p. 325*  

*This massive ophidian is a hideous amalgam of man and snake—a fanged humanoid head with expressionless features sits atop the shimmering coils of a large, squamous body. As the creature hisses, its full lips open to speak in the rich, vibrant tone of an unknown tongue, forgotten long before the kingdoms of man arose.*

## Progeny of the Serpent God

Servants of Yig are monstrous humanoid-serpent hybrids that often serve as sentinels and assassins for the dreadful Old One Yig and his horrid devotees. The speckled, brownish hide and obscene stench of these long, scaly creatures contrasts the cold and otherworldly beauty of their emotionless countenance.

## Abhorrent Executioners

Legends speak of a curse that dooms anyone foolish enough to betray Yig or raise his ire. Indeed, those condemned by the Great Old One are visited by these odious servants to meet an unpleasant end. When these unnerving creatures aren't engaged as masterfully covert hunters, they serve as the duly deranging guardians of dark, forbidden places.

## The Swollen Death

The Servants of Yig are the Old One's children and were created in his horrible image. Their unholy venom causes the body of a creature slain by the poison to swell until its plump flesh ruptures with a repulsive "pop."

```statblock
"name": "Servant of Yig (CCodex)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "14"
  - !!int "12"
  - !!int "14"
"speed": "30 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "5"
  - "wisdom": !!int "3"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 15"
"languages": "Common, Abyssal, Draconic, Infernal"
"cr": "4"
"traits":
  - "desc": "The servant of yig's innate spellcasting ability is Charisma (spell save\
      \ DC 12). It can innately cast the following spells, requiring no material components:\n\
      \n**3/day each:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [fear](Mechanics/CLI/spells/fear-xphb.md)\n\n**1/day each:** [confusion](Mechanics/CLI/spells/confusion-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The Servant of Yig has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The servant of Yig makes two attacks. one with its bite and one with\
      \ its glaive."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) piercing damage plus 10 (3d6) poison damage. The target must\
      \ succeed on a DC 13 Constitution saving throw or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ While [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) this way, the\
      \ target is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and takes 7 (2d6) poison damage at the start of each of its turns. The target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 10 ft., one creature. *Hit:*\
      \ 7 (1d10 + 2) slashing damage."
    "name": "Glaive"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d8 + 2) bludgeoning damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 14). Until this grapple ends, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the Servant of Yig can't constrict another target."
    "name": "Constrict"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/servant-of-yig-ccodex.png"
```
^statblock

## Environment

urban