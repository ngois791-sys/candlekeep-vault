---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- War Chaplain
---
# [War Chaplain](Mechanics\CLI\bestiary\humanoid/war-chaplain-ccodex.md)
*Source: Creature Codex p. 410*  

The proud clergy of the god of honor and war, war chaplains promote and revere feats of bravery and sacrifice, committing such acts themselves. Warriors and soldiers seek their blessings before battle, and mercenaries ask their guidance in selecting a potential employer. War chaplains are always willing to provide this blessing and to advise mercenaries. They are often quite canny in knowing how a particular battle is likely to proceed, not always through divine knowledge or visions but simply through long experience and a sense of an army's potential and morale. The most capable war chaplains are often invited to ride with the officers or dine with generals, though they stand slightly outside the chain of command—they serve their god first.

War chaplains are both quite aggressive in battle and aware of the boundaries between war and its victims. While most of their ministry is devoted to counseling soldiers and officers, ruling on cases of plunder, or enforcing discipline in the ranks, they find time to comfort citizens, children, widows, and others in the wake of war. The glories of combat do not blind them to their duties under the laws of war. War chaplains are also necessarily well-versed in a broad range of funeral rites and practices, for their faithful soldiers often follow more than one tradition.

```statblock
"name": "War Chaplain (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "16"
"ac_class": "[ring mail](Mechanics/CLI/items/ring-mail-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "4"
  - "charisma": !!int "2"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+4"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The war chaplain is a 5th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 12, +4 to hit with spell attacks). The war chaplain\
      \ has the following cleric spells prepared:\n\n**Cantrips (at will):** [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [resistance](Mechanics/CLI/spells/resistance-xphb.md), [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md),\
      \ [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n**1st level\
      \ (4 slots):** [bless](Mechanics/CLI/spells/bless-xphb.md), [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md),\
      \ [healing word](Mechanics/CLI/spells/healing-word-xphb.md), [protection from\
      \ evil and good](Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md)\n\
      \n**2nd level (3 slots):** [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n**3rd\
      \ level (2 slots):** [beacon of hope](Mechanics/CLI/spells/beacon-of-hope-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the war chaplain commands an ally within 30 feet of\
      \ it to make one attack against a creature the chaplain attacked this round."
    "name": "Divine Orders"
"actions":
  - "desc": "The war chaplain makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage or 7 (1d10 + 2) slashing damage if used with\
      \ two hands."
    "name": "Longsword"
  - "desc": "The war chaplain targets one ally within 30 feet engaged in melee combat.\
      \ The target regains 10 (3d6) hit points."
    "name": "War God's Healing (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/war-chaplain-ccodex.png"
```
^statblock

## Environment

any