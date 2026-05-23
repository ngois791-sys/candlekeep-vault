---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Elementalist
---
# [Elementalist](Mechanics\CLI\bestiary\humanoid/elementalist-ccodex.md)
*Source: Creature Codex p. 122*  

*A dragonborn draped in flowing robes cracks its knuckles, causing sparks of elemental magic to spray in all directions.*

Dragons carry the power of the elements in their blood, and some dragonborn also carry this supernatural gift.

## Arcane Artillerists

Most dragonborn elementalists are specially trained soldiers, used on the field of battle to protect their infantry and cavalry allies. Elementalists specialize in combat spells that utilize a specific element, wasting no effort on broadening their horizons with utility spells.

> [!note] Dragonborn in Midgard
> 
> For most in Midgard, speaking the word dragonborn conjures images of the Mharoti Dragon Empire. They see the armies marching across the fields of their homelands, the wyverns soaring through the skies, the fire raining down upon the earth. To them, dragonborn herald death.
> 
> Most dragonborn resent this, of course. Like any other people, they are not inclined toward evil or good—but those within the Dragon Empire are subject to the sultan's dreams of conquest. Because the Dragon Empire holds scalykind above all other races, intelligent creatures like true dragons, dragonborn, and half‑dragons—even kobolds—receive superior education and martial training to the rest of the empire's peoples.
> 
> These dragonkin often go on to become officers in the Dragon Empire's mighty legions, desiring to amass even more power for themselves by conquering Midgard and the Southlands. Dragonborn elementalists and light cavalry are part of the Dragon Empire's akinji military caste. In peacetime, the akinji are its landholders, merchants, priests, mayors, headmen, ship captains, and minor figures, filling a role similar to landed gentry elsewhere. Dragonborn heavy cavalry within the empire are part of the timarli military caste, which is comprised entirely of minor nobles, generals, and ambassadors. Many dragonborn heavy cavalry serve the sultan directly as advisors, castellans, seers, or spies.
^dragonborn-in-midgard

```statblock
"name": "Elementalist (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "15"
  - !!int "12"
  - !!int "10"
  - !!int "17"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning, poison (see Elemental Focus)"
"senses": "passive Perception 10"
"languages": "Common, Draconic"
"cr": "2"
"traits":
  - "desc": "Each dragonborn elementalist permanently aligns with a particular element.\
      \ This elemental focus grants the dragonborn resistance to a certain damage\
      \ type and the ability to innately cast some spells. Its spellcasting ability\
      \ is Charisma (spell save DC 13, +5 to hit with spell attacks).\n\n- **Flame\
      \ (Fire).** The dragonborn has resistance to fire damage. It can cast the [produce\
      \ flame](Mechanics/CLI/spells/produce-flame-xphb.md) cantrip at will and can\
      \ cast [heat metal](Mechanics/CLI/spells/heat-metal-xphb.md) or [scorching ray](Mechanics/CLI/spells/scorching-ray-xphb.md)\
      \ three times per day.  \n- **Storm (Air).** The dragonborn has resistance to\
      \ lightning damage. It can cast the [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\
      \ cantrip at will and can cast [blur](Mechanics/CLI/spells/blur-xphb.md) or\
      \ [gust of wind](Mechanics/CLI/spells/gust-of-wind-xphb.md) three times per\
      \ day.  \n- **Tide (Water).** The dragonborn has resistance to cold damage.\
      \ It can cast the [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md)\
      \ cantrip at will and can cast [sleet storm](Mechanics/CLI/spells/sleet-storm-xphb.md)\
      \ or [water breathing](Mechanics/CLI/spells/water-breathing-xphb.md) three times\
      \ per day.  \n- **Cave (Earth).** The dragonborn has resistance to poison damage.\
      \ It can cast the [blade ward](Mechanics/CLI/spells/blade-ward-xphb.md) cantrip\
      \ at will and can cast [meld into stone](Mechanics/CLI/spells/meld-into-stone-xphb.md)\
      \ or [shatter](Mechanics/CLI/spells/shatter-xphb.md) three times per day.  "
    "name": "Elemental Focus"
  - "desc": "When making an opportunity attack, the dragonborn can cast a spell with\
      \ a casting time of 1 action instead of making a weapon attack. If this spell\
      \ requires a ranged attack roll, the dragonborn doesn't have disadvantage on\
      \ the attack roll from being within 5 feet of a hostile creature, though it\
      \ may still have disadvantage from other sources. This spell must only target\
      \ the creature that provoked the opportunity attack."
    "name": "War Mage"
"actions":
  - "desc": "The dragonborn makes two scimitar attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "The dragonborn breathes elemental energy in a 15-foot cone. Each creature\
      \ in that area must make a DC 12 Dexterity saving throw, taking 10 (3d6) damage\
      \ of the elementalist's elemental focus type on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Fire Breath (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/elementalist-ccodex.png"
```
^statblock

## Environment

any