---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/tiefling
statblock: inline
statblock-link: "#^statblock"
aliases:
- Master of Demon Mountain
---
# [Master of Demon Mountain](Mechanics\CLI\bestiary\humanoid/master-of-demon-mountain-ccodex.md)
*Source: Creature Codex p. 264*  

*With a dark beard and fiery eyes, the master of Demon Mountain has long been a figure of terror to those who live within sight of his castle. Some say he is the dark, twisted son of Baba Yaga and an unnamed lord of the Abyss. Demons, certainly, bow and speak politely to him, and the least of them jump to his command.*

## Father of Fiends

The Master of Demon Mountain is a creature of lascivious appetites and the father of dozens of tieflings—and, at the same time, his family is a source of great pride to him. They are the foundation of an empire, and his brood is loyal and as ambitious as their father. They serve him ably in distant corners of the world, where he sends them to forge alliances through marriages or arcane trades.

## A Bound Legend

He remains a figure of legend as well as a political force. An expert demon binder, his power is terrifying even at a distance. But wielding worldly power and extending his influence is merely an entertaining game for him. His real goal is to reach immortality—although first he must break the pacts binding him to his dark manor.

```statblock
"name": "Master of Demon Mountain (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "17 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "18"
  - !!int "12"
  - !!int "23"
  - !!int "14"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "7"
  - "wisdom": !!int "8"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+9"
"damage_resistances": "fire"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Abyssal, Infernal"
"cr": "17"
"traits":
  - "desc": "The master of demon mountain is a 20th-level spellcaster. Its spellcasting\
      \ ability is Intelligence (spell save DC 20, +12 to hit with spell attacks).\
      \ The master of demon mountain has the following wizard spells prepared:\n\n\
      **Cantrips (at will):** [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md),\
      \ [light](Mechanics/CLI/spells/light-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [message](Mechanics/CLI/spells/message-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md)\n\
      \n**1st level (4 slots):** [fog cloud](Mechanics/CLI/spells/fog-cloud-xphb.md),\
      \ [grease](Mechanics/CLI/spells/grease-xphb.md), [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md), [shield](Mechanics/CLI/spells/shield-xphb.md)\n\
      \n**2nd level (3 slots):** [acid arrow](Mechanics/CLI/spells/melfs-acid-arrow-xphb.md),\
      \ [mirror image](Mechanics/CLI/spells/mirror-image-xphb.md), [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\
      \n**3rd level (3 slots):** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [fireball](Mechanics/CLI/spells/fireball-xphb.md), [fly](Mechanics/CLI/spells/fly-xphb.md),\
      \ [stinking cloud](Mechanics/CLI/spells/stinking-cloud-xphb.md)\n\n**4th level\
      \ (3 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md), [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [fire shield](Mechanics/CLI/spells/fire-shield-xphb.md)\n\n**5th level (3\
      \ slots):** [contact other plane](Mechanics/CLI/spells/contact-other-plane-xphb.md),\
      \ [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md), [seeming](Mechanics/CLI/spells/seeming-xphb.md)\n\
      \n**6th level (2 slots):** [arcane gate](Mechanics/CLI/spells/arcane-gate-xphb.md),\
      \ [disintegrate](Mechanics/CLI/spells/disintegrate-xphb.md)\n\n**7th level (2\
      \ slots):** [mirage arcane](Mechanics/CLI/spells/mirage-arcane-xphb.md), [plane\
      \ shift](Mechanics/CLI/spells/plane-shift-xphb.md)\n\n**8th level (1 slots):**\
      \ [antimagic field](Mechanics/CLI/spells/antimagic-field-xphb.md), [dominate\
      \ monster](Mechanics/CLI/spells/dominate-monster-xphb.md)\n\n**9th level (1\
      \ slots):** [foresight](Mechanics/CLI/spells/foresight-xphb.md), [meteor swarm](Mechanics/CLI/spells/meteor-swarm-xphb.md)"
    "name": "Spellcasting"
  - "desc": "If the Master fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Master has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Fiends summoned by the Master's Summon Fiend share a telepathic link\
      \ with him, are under his control, and can't summon other demons or devils.\
      \ A fiend remains until it or the Master dies or until the Master dismisses\
      \ it as a bonus action. The total CR of the fiends under the Master's control\
      \ can't exceed 16, otherwise the Master can summon any number or combination\
      \ of fiends. Any fiends the Master attempts to summon in excess of this limit\
      \ aren't summoned."
    "name": "Master of Fiends"
"actions":
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) slashing damage plus 14 (4d6) fire damage."
    "name": "Master's Knife"
  - "desc": "The Master summons 2d4 [wind demons](Mechanics/CLI/bestiary/fiend/wind-demon-ccodex.md)\
      \ (see page 93), 1d4 [wind's harp devils](Mechanics/CLI/bestiary/fiend/winds-harp-ccodex.md)\
      \ (see page 105), 1d2 [vrocks](Mechanics/CLI/bestiary/fiend/vrock-xmm.md),\
      \ 1d2 [chain devils](Mechanics/CLI/bestiary/fiend/chain-devil-xmm.md), or\
      \ 1 [fulad-zereh](Mechanics/CLI/bestiary/fiend/fulad-zereh-ccodex.md) (see page\
      \ 85) with no chance of failure. A summoned fiend appears in an unoccupied space\
      \ within 60 feet of the Master and acts immediately and on the Master's initiative."
    "name": "Summon Fiend (Recharge 6-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the master of demon mountain can expend a use to take one of the following\
  \ actions. The master of demon mountain regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The Master makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The Master magically teleports, along with any equipment he is wearing\
      \ or carrying, up to 120 feet to an unoccupied space he can see."
    "name": "Teleport (Costs 2 Actions)"
  - "desc": "The Master casts a spell from his list of prepared spells, using a spell\
      \ slot as normal."
    "name": "Cast a Spell (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/master-of-demon-mountain-ccodex.png"
```
^statblock

## Environment

mountain