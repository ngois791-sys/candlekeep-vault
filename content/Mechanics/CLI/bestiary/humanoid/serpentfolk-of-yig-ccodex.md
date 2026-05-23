---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Serpentfolk of Yig
---
# [Serpentfolk of Yig](Mechanics\CLI\bestiary\humanoid/serpentfolk-of-yig-ccodex.md)
*Source: Creature Codex p. 324*  

*The hooded cultist utters a sibilant phrase. Then, like a fading mask of fog, his face suddenly vanishes and in its stead leers a monstrous serpent's head. His terrible, slit eyes blaze unblinkingly as his scaly hands twist and contort in arcane gestures.*

## Priests of the Serpent God

Grim tales are told of a prehistoric race of evil snake-people who, wearing the guise of a human cult, have surreptitiously built a monstrous religion around the worship of—the serpent god Yig. As an actor dons a mask, these fiendish humanoids use illusory magic to imitate anyone they wish. This disguise is often betrayed, however, by the presence of the serpentfolk's frightful, fetid scent

## Under Cloak of Blasphemy

Serpentfolk of Yig rely on natural cunning and the sorcery of their cold, reptilian bloodline to survive. These snake-people live in secret amongst the cities of civilized nations and plot to overthrow the warm-blooded inheritors of the world "when the stars are right." Known as "they that walk the night," the serpentfolk of Yig live to serve their dark god's hideous, evil agenda. Many seek to become powerful spellcasters and master assassins to better serve their cruel life's purpose. The Queen of Serpents (see page 34) considers the serpentfolk abominations, corrupted versions of true serpents, and there is great enmity between her followers and the followers of Yig.

## The Snake That Speaks

In defiance of the creation myths surrounding the World Serpent Veles, the serpentfolk worship their Great Old One progenitor as the true Father of Serpents, knowing him by many names—Set, Quetzelcoatl, and Ningishzida among them. As their insidious cults grow in size—swollen with allied horrors like the Servants of Yig, the [scitalis](Mechanics/CLI/bestiary/monstrosity/scitalis-ccodex.md), and other reptilian monstrosities—the serpentfolk move further and further from their shadowed jungle enclaves to corrupt the credulous kingdoms of man.

```statblock
"name": "Serpentfolk of Yig (CCodex)"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Abyssal, Draconic, Infernal"
"cr": "1"
"traits":
  - "desc": "The serpentfolk of yig's innate spellcasting ability is Charisma (spell\
      \ save DC 12). It can innately cast the following spells, requiring no material\
      \ components:\n\n**3/day each:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The serpentfolk has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The serpentfolk makes two attacks. one with its bite and one with its\
      \ scimitar."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 4 (1d4 + 2) piercing damage plus 3 (1d6) poison damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Scimitar"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/serpentfolk-of-yig-ccodex.png"
```
^statblock

## Environment

urban