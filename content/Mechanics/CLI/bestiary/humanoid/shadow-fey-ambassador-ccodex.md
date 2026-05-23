---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Fey Ambassador
---
# [Shadow Fey Ambassador](Mechanics\CLI\bestiary\humanoid/shadow-fey-ambassador-ccodex.md)
*Source: Creature Codex p. 145*  

*Stylishly dressed, this beautiful fey has alabaster-white skin, pointed ears, and a small pair of curved horns. Her face displays a cruel and cunning smile as she reads from a long parchment covered in elvish writing—a treaty full of devious sub-clauses and near‑unreadable small lettering.*

When fey lords and ladies need to treat with mortals on matters of interest, they will often dispatch a shadow fey ambassador to negotiate on their behalf. These silver-tongued ambassadors are diplomats par excellence, capable of blending charm, bribery, and sheer menace to get what they want.

## Hidden Embassies

When it arrives into a city, the shadow fey ambassador will first choose a disused building to establish its base of operations. This embassy is usually well hidden with few individuals entrusted with its location. Shadow fey ambassadors staff their embassy with plenty of minions, including other shadow fey, [shadow goblins](Mechanics/CLI/bestiary/humanoid/shadow-goblin-ccodex.md), and hounds of the night (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). Many ambassadors have a shadow fey guardian as a personal bodyguard.

## Haughty Proclamations

Once established, a shadow fey ambassador will inveigle itself into the local circles of power, then issue a proclamation outlining the wishes of the fey lord or lady to the mortal rulers. They will set out the many benefits of enthusiastic cooperation with these demands and the dire consequences of failing to comply. The unscrupulous shadow fey then respond as necessary with hefty bribes, intimidation, or assassination to bring recalcitrant mortals around to their way of thinking.

```statblock
"name": "Shadow Fey Ambassador (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "18"
  - !!int "16"
  - !!int "16"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+13"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+13"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 17"
"languages": "Common, Elvish"
"cr": "9"
"traits":
  - "desc": "The shadow fey has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Fey Ancestry"
  - "desc": "As a bonus action while in shadows, dim light, or darkness, the shadow\
      \ fey disappears into the darkness and reappears in an unoccupied space it can\
      \ see within 30 feet. A tendril of inky smoke appears at the origin and destination\
      \ when it uses this trait."
    "name": "Shadow Traveler (5/Day)"
  - "desc": "rWhile in sunlight, the shadow fey has disadvantage on attack rolls and\
      \ on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The shadow fey has advantage on Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ checks made to know about shadow roads and shadow magic spells or items."
    "name": "Traveler In Darkness"
"actions":
  - "desc": "The ambassador uses its Withering Stare. It then makes three rapier attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft. *Hit:* 8 (1d8 + 4)\
      \ piercing damage plus 10 (3d6) cold damage."
    "name": "Rapier"
  - "desc": "The silver-tongued shadow fey ambassador weaves together a string of\
      \ highly persuasive and agreeable words. Each creature within 30 feet of the\
      \ ambassador must succeed on a DC 16 Wisdom saving throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by the ambassador, regarding it as a wise and trustworthy ally with the creature's\
      \ best interests at heart. A [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ target doesn't have to obey the ambassador's commands, but it views the ambassador's\
      \ words in the most favorable way.\n\nEach time a [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ target witnesses the shadow fey ambassador or its allies do something harmful\
      \ to the target or its companions, it can repeat the saving throw, ending the\
      \ effect on itself on a success. Otherwise, the effect lasts as long as the\
      \ ambassador maintains concentration, up to 8 hours."
    "name": "Honeyed Words (Recharges after a Long Rest)"
  - "desc": "The shadow fey ambassador targets one creature it can see within 30 feet\
      \ of it. If the target can see it, the target must succeed on a DC 16 Wisdom\
      \ saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. The [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a target's saving throw is successful\
      \ or the effect ends for it, the target is immune to the ambassador's Withering\
      \ Stare for the next 24 hours."
    "name": "Withering Stare"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/shadow-fey-ambassador-ccodex.png"
```
^statblock

## Environment

underground, urban