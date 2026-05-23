---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bat King
---
# [Bat King](Mechanics\CLI\bestiary\fey/bat-king-ccodex.md)
*Source: Creature Codex p. 22*  

*A dark-skinned man of small stature wearing a voluminous gray robe squints about curiously, his upturned nose doing the expression no favors. With his thick, black hair and beard worn close-cropped, he looks to be some sort of monk or scholar.*

## Redeemer

The sworn foe of Camazotz (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), the great corruptor of his children, the Bat King  spends much of his time devising ways to dispatch the demon lord's many servants. His time in human form is spent conducting research to that end. He does, however, make good use of his bat form when eavesdropping.

## Hit and Run

Traveling from land to land, searching the libraries and vaults of the great cities for anything that will aid him in his task, the Bat King returns often to the cities nearest to the jungles of the world. On that border between civilization and savagery, he flits to and fro, striking and fleeing. He has been killed many times, but his enemies have never dispatched him permanently.

## Secret Ally

The Bat King knows his limits and is always looking to form alliances of mutual interest against his foes. He rarely reveals his identity to allies for the safety of all involved but is otherwise straightforward in his dealings.

> [!note] Bat King in Midgard
> 
> The Bat King is the eternal enemy of Camazotz, Demon Lord of Bats (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). Their struggle takes place in forms and areas largely invisible to daylight-dwellers but is fierce nonetheless. While Camazotz rules the underworld and fire, the Bat King's followers are found in forests, jungles, and caverns closer to the surface. Some cults of Camazotz seek to capture and corrupt the Bat King's followers, turning ordinary animals into the skin bats (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) and [giant vampire bats](Mechanics/CLI/bestiary/beast/giant-vampire-bat-ccodex.md) found in service to various cults. The Bat King strives to keep his people free of their malign influences and seems to have an informal alliance with the Bear King (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) and the bearfolk in the Shadow Realm and elsewhere.
^bat-king-in-midgard

```statblock
"name": "Bat King (CCodex)"
"size": "Small"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d6 + 80"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "20"
  - !!int "19"
  - !!int "19"
  - !!int "17"
  - !!int "16"
"speed": "30 ft., fly 50 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "9"
  - "wisdom": !!int "8"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+15"
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+14"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+14"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+14"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+15"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+8"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison, psychic, thunder"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 18"
"languages": "All, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "The bat king's innate spellcasting ability is Charisma (spell save DC\
      \ 16). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [pass without trace](Mechanics/CLI/spells/pass-without-trace-xphb.md),\
      \ [shatter](Mechanics/CLI/spells/shatter-xphb.md), [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\
      \n**3/day each:** [darkness](Mechanics/CLI/spells/darkness-xphb.md), [scrying](Mechanics/CLI/spells/scrying-xphb.md)\n\
      \n**2/day each:** [etherealness](Mechanics/CLI/spells/etherealness-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)\n\n\
      **1/day each:** [astral projection](Mechanics/CLI/spells/astral-projection-xphb.md),\
      \ [teleport](Mechanics/CLI/spells/teleport-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "No bats or werebats can willingly attack the Bat King. They can be forced\
      \ to do so through magical means."
    "name": "Bat Passivism"
  - "desc": "The Bat King has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
  - "desc": "If the Bat King fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Bat King has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The Bat King's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If he dies, the Bat King's soul reforms on the Astral Plane. In 1d6\
      \ days, it inhabits the body of another bat on the Material Plane which becomes\
      \ the Bat King with all of the hp and abilities thereof. Only killing every\
      \ bat on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "The Bat King can use his action to polymorph into a Medium dark-skinned,\
      \ bearded human man of slight stature, into a Medium bat-humanoid hybrid, or\
      \ back into his true Small bat form. His statistics, other than his size, are\
      \ the same in each form with the exception that only the Bat King's hybrid and\
      \ bat forms retain his flying speed. Any equipment he is wearing or carrying\
      \ transforms with him."
    "name": "Shapechanger"
  - "desc": "The Bat King can communicate with bats as if they shared a language."
    "name": "Speak to Bats"
"actions":
  - "desc": "The Bat King makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 22 (5d6 + 5) piercing damage. If the target is a humanoid, it must succeed\
      \ on a DC 14 Constitution saving throw or be cursed with werebat lycanthropy."
    "name": "Blood Bite (Bat or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 15 (4d4 + 5) bludgeoning damage."
    "name": "Oblivion's Mace (Humanoid or Hybrid Form Only)"
  - "desc": "The Bat King lets loose an ear-shattering screech in a 20-foot cone.\
      \ Each creature in that area that can hear the screech must make a DC 18 Constitution\
      \ saving throw. On a failure, the creature takes 33 (6d10) thunder damage\
      \ and is [deafened](Mechanics/CLI/rules/conditions.md#Deafened) for 1 minute.\
      \ On a success, the creature takes half the thunder damage but isn't [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \ This attack deals double damage to objects and structures."
    "name": "Screech (Recharge 5-6)"
  - "desc": "The Bat King magically calls 2d4 [swarms of bats](Mechanics/CLI/bestiary/beast/swarm-of-bats-xmm.md).\
      \ In an urban environment, he can call 1 [werebat](Mechanics/CLI/bestiary/humanoid/werebat-ccodex.md)\
      \ (see page 258) instead. The called creatures arrive in 1d4 rounds, acting\
      \ as allies of the Bat King and obeying his spoken commands. The creatures remain\
      \ for 1 hour, until the Bat King dies, or until the Bat King dismisses them\
      \ as a bonus action."
    "name": "Summon Bats (2/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the bat king can expend a use to take one of the following actions. The\
  \ bat king regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Bat King casts one of his at will spells."
    "name": "At Will Spell"
  - "desc": "The Bat King makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The Bat King flies up to his flying speed without provoking opportunity\
      \ attacks."
    "name": "Flight (Bat or Hybrid Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/bat-king-ccodex.png"
```
^statblock

## Environment

urban