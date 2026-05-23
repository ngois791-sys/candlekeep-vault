---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration/shoth
statblock: inline
statblock-link: "#^statblock"
aliases:
- Oth
---
# [Oth](Mechanics\CLI\bestiary\aberration/oth-ccodex.md)
*Source: Creature Codex p. 334*  

Oth are soozes that have lived at least 100 years. The oth command the soozes and pilot the strange oozing ships which carry the shoth from world to world. Oths take their orders from droths and negotiate with the creatures of a world. Their magic and natural charm help them to lead a creature, people, or species to the zolvs. Oths are large humanoids with four appendages, and they wear hooded cloaks. Their zoms are stored inside their chest and pulse rhythmically like a mortal heart.

## Friendly

Oths are charismatic and friendly creatures, despite their oozing appearance. They have excellent senses of humor and can get along with nearly everyone. They sincerely want what is in the best interests of their allies. However, they work tirelessly to move their allies towards being dissolved since they see it as the best way of achieving ultimate kinship for all living creatures.

```statblock
"name": "Oth (CCodex)"
"size": "Large"
"type": "aberration"
"subtype": "shoth"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "18"
"speed": "30 ft., climb 10 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+7"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"damage_resistances": "acid, cold, fire"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 15"
"languages": "All, telepathy 100 ft."
"cr": "5"
"traits":
  - "desc": "The oth's innate spellcasting ability is Charisma (spell save DC 15,\
      \ +7 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring only verbal components:\n\n**At will:** [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md)\
      \ (2d10), [light](Mechanics/CLI/spells/light-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**3/day each:** [command](Mechanics/CLI/spells/command-xphb.md), [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\n\n**2/day each:**\
      \ [augury](Mechanics/CLI/spells/augury-xphb.md), [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md)\n\
      \n**1/day each:** [fireball](Mechanics/CLI/spells/fireball-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The oth, including its equipment, can move through a space as narrow\
      \ as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "Choose either the Dripping Arcanist (Innate Spellcasting) or Paladin\
      \ of Shoth trait."
    "name": "Multiple Roles"
  - "desc": "The oth derives its power from Shoth itself, its zom shining with sacred\
      \ light. Its Armor Class increases by 2. A non-shoth creature that starts its\
      \ turn within 5 feet of the oth must succeed on a DC 15 Charisma saving throw\
      \ or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) by the light of\
      \ Shoth until the end of its turn."
    "name": "Paladin of Shoth"
"actions":
  - "desc": "The oth makes two oozing slam attacks or one oozing slam and one greatsword\
      \ attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d10 + 3) bludgeoning damage and 2 (1d4) acid damage."
    "name": "Oozing Slam"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (4d6 + 3) slashing damage."
    "name": "Greatsword (Paladin of Shoth Only)"
  - "desc": "A shoth who has less than half its maximum hp can merge with any other\
      \ shoth creature within 10 feet, adding its remaining hp to that creature's.\
      \ The hp gained this way can exceed the normal maximum of that creature. A shoth\
      \ can accept one such merger every 24 hours."
    "name": "Merge"
  - "desc": "The oth sprays acid in a 30-foot cone. Each creature in the area must\
      \ make a DC 15 Dexterity saving throw, taking 22 (5d8) acid damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Spray (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/oth-ccodex.png"
```
^statblock

## Environment

urban