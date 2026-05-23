---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Doomspeaker (Midgard Version)
---
# [Doomspeaker (Midgard Version)](Mechanics\CLI\bestiary\humanoid/doomspeaker-midgard-version-ccodex.md)
*Source: Creature Codex p. 399*  

The only creatures more vile than demons—creatures born irredeemably evil—are those who willingly adopt a demon's cruel ways. Worst among the demon worshipers are the fallen paladins known as doomspeakers, warriors so ensorcelled by power that they would burn the world just to rule its ashes. These creatures walk the path of evil not by birth but by choice, and they breed cruelty in their hearts so dark that no glimmer of compassion can pierce it. Doomspeakers raise vast hordes of weak-minded and rage-fueled followers to run roughshod over the world. Empowered by their leader's evil magic, such legions can trample even mighty armies into the mud.

> [!note] Doomspeakers in Midgard
> 
> In the Southlands, doomspeakers recruit many of the gnolls of the Sarkland Desert to their cause. The gnolls are drawn by the doomspeakers' strength and the thought of easy conquest. Doomspeakers have a hidden complex in the south that serves as their main base of operations and the resting place of the Book of Nine Dooms, a book containing magic that uses raw, violent emotion as fuel. They also maintain a presence on the Rothenian Plain, both in caves under Demon Mountain by permission of its Master and in the forests north of the plain. When using the Midgard setting, change the doomspeaker's spells to the following (see "Fifth Edition Appendix" in the *Midgard World Book* ^[The *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.])
> 
> - 1st level (4 slots): [bane](Mechanics/CLI/spells/bane-xphb.md), bloody smite, doom of the cracked shield, memento mori  
> - 2nd level (3 slots): bloodshot, caustic blood, [magic weapon](Mechanics/CLI/spells/magic-weapon-xphb.md)  
> - 3rd level (3 slots): blood armor, conjure undead, [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)  
^doomspeakers-in-midgard

```statblock
"name": "Doomspeaker (Midgard Version) (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+6"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": ""
"cr": "6"
"traits":
  - "desc": "The doomspeaker is a 12th-level spellcaster. Its spellcasting ability\
      \ is Charisma (spell save DC 15, +7 to hit with spell attacks). The doomspeaker\
      \ has the following paladin spells prepared:\n\n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md),\
      \ *bloody smite* ^[The *Midgard World Handbook* by Kobold Press is currently\
      \ unconverted for 5eTools.], *doom of the cracked shield* ^[The *Midgard World\
      \ Handbook* by Kobold Press is currently unconverted for 5eTools.], *memento\
      \ mori* ^[The *Midgard World Handbook* by Kobold Press is currently unconverted\
      \ for 5eTools.]\n\n**2nd level (3 slots):** *bloodshot* ^[The *Midgard World\
      \ Handbook* by Kobold Press is currently unconverted for 5eTools.], *caustic\
      \ blood* ^[The *Midgard World Handbook* by Kobold Press is currently unconverted\
      \ for 5eTools.], [magic weapon](Mechanics/CLI/spells/magic-weapon-xphb.md)\n\
      \n**3rd level:** *blood armor* ^[The *Midgard World Handbook* by Kobold Press\
      \ is currently unconverted for 5eTools.], *conjure undead* ^[The *Midgard World\
      \ Handbook* by Kobold Press is currently unconverted for 5eTools.], [dispel\
      \ magic](Mechanics/CLI/spells/dispel-magic-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The doomspeaker gains 10 (3d6) temporary hp whenever a creature dies\
      \ within 10 feet of it."
    "name": "Aura of the Funeral Feast"
  - "desc": "Whenever the doomspeaker deals damage with a melee weapon attack, the\
      \ target takes an extra 9 (2d8) necrotic damage (included in the attack).\
      \ This damage increases to 13 (3d8) if the target is a celestial, a good-aligned\
      \ dragon, or a fey."
    "name": "Pervasive Unholy Smite"
"actions":
  - "desc": "The doomspeaker makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage plus 9 (2d8) necrotic damage."
    "name": "Shortsword"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/doomspeaker-midgard-version-ccodex.png"
```
^statblock

## Environment

any