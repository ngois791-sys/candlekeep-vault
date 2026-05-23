---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Metee-Kolen-Ol
---
# [Metee-Kolen-Ol](Mechanics\CLI\bestiary\humanoid/metee-kolen-ol-ccodex.md)
*Source: Creature Codex p. 404*  

As cold as the land they inhabit, metee-kolen-ol were practitioners of magic who succumbed to corruption at the hands of the sinister gods of the frozen wastes. Now they serve their masters as faithful lieutenants, dispassionately carrying out divine wishes and enforcing divine will. Communities who anger the masters of the metee-kolen-ol sometimes find themselves the targets of savage acts carried out by once-familiar faces, now turned to unfeeling pawns of merciless gods. Those under a metee-kolen-ol's command live in fear of the long marches and hard labors they may be ordered to endure. The metee-kolen-ol never suffer from the cold and are indifferent to negligible losses.

```statblock
"name": "Metee-Kolen-Ol (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "16 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "17"
  - !!int "13"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+3"
"damage_immunities": "cold"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "The metee-kolen-ol is a 5th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 13, +5 to hit with spell attacks). The metee-kolen-ol\
      \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [blade\
      \ ward](Mechanics/CLI/spells/blade-ward-xphb.md), [chill touch](Mechanics/CLI/spells/chill-touch-xphb.md),\
      \ [light](Mechanics/CLI/spells/light-xphb.md), [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md)\n\
      \n**1st level (4 slots):** [fog cloud](Mechanics/CLI/spells/fog-cloud-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [ray of sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md)\n\
      \n**2nd level (3 slots):** [acid arrow](Mechanics/CLI/spells/melfs-acid-arrow-xphb.md),\
      \ [alter self](Mechanics/CLI/spells/alter-self-xphb.md), [shatter](Mechanics/CLI/spells/shatter-xphb.md)\n\
      \n**3rd level (2 slots):** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [sleet storm](Mechanics/CLI/spells/sleet-storm-xphb.md)"
    "name": "Spellcasting"
  - "desc": "If a creature starts its turn within 30 feet of the metee-kolen-ol and\
      \ the two of them can see each other, the metee-kolen-ol can force the creature\
      \ to make a DC 12 Wisdom saving throw if the metee-kolen-ol isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ On a failed save, the creature has its speed halved, and it takes a −2 penalty\
      \ to its AC and Dexterity saving throws for 1 minute. The creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success. If a creature's saving throw is successful or the effect ends\
      \ for it, the creature is immune to the metee-kolen-ol's Wintry Gaze for the\
      \ next 24 hours.\n\nA creature that isn't surprised can avert its eyes to avoid\
      \ the saving throw at the start of its turn. If it does so, it can't see the\
      \ metee-kolen-ol until the start of its next turn, when it can avert its eyes\
      \ again. If it looks at the metee-kolen-ol in the meantime, it must immediately\
      \ make the save."
    "name": "Wintry Gaze"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one creature. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/metee-kolen-ol-ccodex.png"
```
^statblock

## Environment

arctic