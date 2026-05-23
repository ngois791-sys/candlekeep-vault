---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/gnome
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gnomish Knife Cultist
---
# [Gnomish Knife Cultist](Mechanics\CLI\bestiary\humanoid/gnomish-knife-cultist-ccodex.md)
*Source: Creature Codex p. 402*  

In spite of, or perhaps because of, its slight statue, a gnomish knife cultist presents an unnerving figure. Its slightly unkempt hair pokes out from beneath a hat, and it constantly fidgets and shifts on its feet. Laughter erupts from it at inopportune moments during conversations. Gnomish knife cultists are the demon wranglers of their cults, summoning and managing whatever demons the cult needs to further its goals. They often can't resist the call of demons and have been known to summon rampaging demons unbidden, leading to many interrupted harvests or market days.

```statblock
"name": "Gnomish Knife Cultist (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "97"
"hit_dice": "15d6 + 45"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "16"
  - !!int "11"
  - !!int "12"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Gnomish, Abyssal"
"cr": "5"
"traits":
  - "desc": "The gnomish knife cultist's innate spellcasting ability is Charisma (spell\
      \ save DC 16, +8 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring only verbal components:\n\n**At will:** [enlarge/reduce](Mechanics/CLI/spells/enlarge-reduce-xphb.md),\
      \ [spider climb](Mechanics/CLI/spells/spider-climb-xphb.md)\n\n**3/day each:**\
      \ [bless](Mechanics/CLI/spells/bless-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md),\
      \ [protection from energy](Mechanics/CLI/spells/protection-from-energy-xphb.md)\n\
      \n**1/day each:** [haste](Mechanics/CLI/spells/haste-xphb.md), [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The knife cultist has an affinity with summoned demons. They obey it\
      \ without question and are immune to being [charmed](Mechanics/CLI/rules/conditions.md#Charmed).\
      \ In addition, demons summoned by the cultist have advantage on saving throws\
      \ against spells or effects that would send them to another plane (including\
      \ their home plane)."
    "name": "Demon Wrangler"
"actions":
  - "desc": "The gnomish knife cultist makes two attacks with its ritual knife."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage plus 7 (2d6) poison damage."
    "name": "Ritual Knife"
  - "desc": "The gnomish knife cultist summons one demon of challenge rating 6 or\
      \ two demons of challenge rating 4 or less. The summoned demons appear in unoccupied\
      \ spaces within 50 feet of the cultist, acting immediately after the cultist\
      \ in the initiative count. The demons are loyal to the cultist and follow its\
      \ commands. They remain for 1 hour, until the cultist dies, or until the cultist\
      \ dismisses them as a bonus action."
    "name": "Demonic Summonings (1/Day)"
  - "desc": "As a bonus action, the gnomish knife cultist can goad or soothe one of\
      \ its summoned demons within 50 feet. The affected demon has advantage on its\
      \ next attack (if goaded) or heals 16 (3d10) hp (if soothed)."
    "name": "Goad or Soothe (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/gnomish-knife-cultist-ccodex.png"
```
^statblock

## Environment

farmland, urban