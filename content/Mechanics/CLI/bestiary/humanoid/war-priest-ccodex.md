---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- War Priest
---
# [War Priest](Mechanics\CLI\bestiary\humanoid/war-priest-ccodex.md)
*Source: Creature Codex p. 411*  

Priests lead a flock; some with words, and others by example. A war priest leads with words, actions, and no small amount of physical violence against its enemies. While a war priest leads the faithful, it also exemplifies the traits representative of its deity. The weapons may change, from the hammers and axes of dwarven gods to the swords of the elves to the shortswords of the halflings. Regardless of the deity, though, the ability to bring holy or unholy damage to the fight is the hallmark of the war priest. Unlike a war chaplain, a war priest is always counted among the commanders of an army and is often a personal adviser to the army's general. In some cases, the war priest also serves as a general.

```statblock
"name": "War Priest (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[chain mail](Mechanics/CLI/items/chain-mail-xphb.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "11"
  - !!int "16"
  - !!int "12"
"speed": "25 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+6"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The war priest is a 7th-level spellcaster. Its spellcasting ability is\
      \ Wisdom (spell save DC 14, +6 to hit with spell attacks). The war priest\
      \ has the following cleric spells prepared:\n\n**Cantrips (at will):** [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md), [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md),\
      \ [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n**1st level (4\
      \ slots):** [bless](Mechanics/CLI/spells/bless-xphb.md), [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [shield of faith](Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\
      \n**2nd level (3 slots):** [aid](Mechanics/CLI/spells/aid-xphb.md), [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n**3rd\
      \ level (3 slots):** [beacon of hope](Mechanics/CLI/spells/beacon-of-hope-xphb.md),\
      \ [mass healing word](Mechanics/CLI/spells/mass-healing-word-xphb.md)\n\n**4th\
      \ level (1 slots):** [death ward](Mechanics/CLI/spells/death-ward-xphb.md)"
    "name": "Spellcasting"
"actions":
  - "desc": "The war priest makes three attacks with its imbued warhammer."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used\
      \ with two hands, plus 13 (3d8) radiant (good or neutral priests) or necrotic\
      \ (evil priests) damage."
    "name": "Imbued Warhammer"
"reactions":
  - "desc": "When an ally the war priest can see within 30 feet hits with a melee\
      \ weapon attack, the war priest can make the weapon deal an extra 9 (2d8)\
      \ radiant (good or neutral priests) or necrotic (evil priests) damage."
    "name": "Blessing of War"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/war-priest-ccodex.png"
```
^statblock

## Environment

any