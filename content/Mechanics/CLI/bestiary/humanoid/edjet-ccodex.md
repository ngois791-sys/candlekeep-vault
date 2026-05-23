---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Edjet
---
# [Edjet](Mechanics\CLI\bestiary\humanoid/edjet-ccodex.md)
*Source: Creature Codex p. 121*  

*Born into war, the edjet are proud of their scars, their cracked scales, their trophies taken from the hairy races, and the plunder they have rendered to the great dragon lords. They are a proud few and with good reason.*

## Troops of Dragon Armies

The classic edjet are heavy troops of dragonborn devoted to one or another of the elemental gods and commanded by paladins or priests. Their general is typically a lesser dragon or major drake, and their units include any number of holy warriors and elementalists, as well as heavily armored lizard-riders, and even oliphaunt-riding artillerists. Their rank and file consist of halberdiers, feared as much for their prowess as for their ability to breathe gouts of flame into their enemy's front line.

## Dragons Above All

The edjet are raised from birth to believe in the superiority of the scaled folk over all others, and their confidence shows on the battlefield. Their charges are swift and crushing, and they fight with a zeal rarely seen elsewhere. The edjet are believers, and this gives them courage to stand tall against giants, magic, or even gods.

> [!note] Dragonborn in Midgard
> 
> For most in Midgard, speaking the word dragonborn conjures images of the Mharoti Dragon Empire. They see the armies marching across the fields of their homelands, the wyverns soaring through the skies, the fire raining down upon the earth. To them, dragonborn herald death.
> 
> Most dragonborn resent this, of course. Like any other people, they are not inclined toward evil or good—but those within the Dragon Empire are subject to the sultan's dreams of conquest. Because the Dragon Empire holds scalykind above all other races, intelligent creatures like true dragons, dragonborn, and half‑dragons—even kobolds—receive superior education and martial training to the rest of the empire's peoples.
> 
> These dragonkin often go on to become officers in the Dragon Empire's mighty legions, desiring to amass even more power for themselves by conquering Midgard and the Southlands. Dragonborn elementalists and light cavalry are part of the Dragon Empire's akinji military caste. In peacetime, the akinji are its landholders, merchants, priests, mayors, headmen, ship captains, and minor figures, filling a role similar to landed gentry elsewhere. Dragonborn heavy cavalry within the empire are part of the timarli military caste, which is comprised entirely of minor nobles, generals, and ambassadors. Many dragonborn heavy cavalry serve the sultan directly as advisors, castellans, seers, or spies.
^dragonborn-in-midgard

```statblock
"name": "Edjet (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "10"
  - !!int "13"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "fire"
"senses": "passive Perception 14"
"languages": "Common, Draconic"
"cr": "3"
"traits":
  - "desc": "When the dragonborn edjet is within 5 feet of two allies that aren't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated), it has advantage\
      \ on saving throws against being [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Line of Battle"
  - "desc": "Once per turn, the dragonborn edjet can deal an extra 10 (3d6) damage\
      \ to a creature it hits with a weapon attack if that creature is within 5 feet\
      \ of an ally of the edjet that isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Martial Advantage"
"actions":
  - "desc": "The dragonborn edjet makes two melee or ranged attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 8 (1d10 + 3) slashing damage."
    "name": "Halberd"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 4 (1d6 + 1) piercing damage."
    "name": "Shortbow"
  - "desc": "The dragonborn edjet exhales fire in a 15-foot cone. Each creature in\
      \ that area must make a DC 13 Dexterity saving throw, taking 10 (3d6) fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/edjet-ccodex.png"
```
^statblock

## Environment

any