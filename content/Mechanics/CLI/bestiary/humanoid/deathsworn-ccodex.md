---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Deathsworn
---
# [Deathsworn](Mechanics\CLI\bestiary\humanoid/deathsworn-ccodex.md)
*Source: Creature Codex p. 142*  

*The elf mutters softly to itself as it nocks an arrow in its ancient bow. In one fluid motion, the elf releases the arrow, blossoming with green fire, and leaps from cover, its blade striking a hair's breadth after its arrow.*

A deathsworn elf is one of the elite soldiers of the elvish empire, sworn to the service of the elvish war god. Its speedy archery, swift and silent travel, and masterful ambushes make it feared and respected by all its foes. Many claim the title, but few deathsworn still walk the mortal world; most have retreated to their fey realms to fight against darkness elsewhere.

## Bow Speech

Deathsworn have a reverence (some would say obsession) with their tools, in particular, their bows and arrows. They often wield particularly ancient, named heirloom weapons or those made by divine hands and given to elves—and they speak to their bows as if the makers or other spirits inhabit the weapons. This is quite disconcerting to other archers, as a deathsworn seems half-mad when most focused on its aim.

## Keen Eyed

Deathsworn have an incredible knack for noticing precise details at a distance; the exact number of soldiers marching down a valley, the height of a palisade, or the speed of a current all seem to spring to their eyes. Others occasionally find their propensity to share this information a touch grating.

> [!note] Deathsworn in Midgard
> 
> The deathsworn are the elite soldiers of Valeresh, the elvish god of war and justice, and were a foundation of elvish power. Most are believed to have returned to the Summer Lands, though they are occasionally found in the Arbonesse, Margreve, Gennecka, or other ancient forests. Widely referred to as "Valeran Deathsworn," they are feared by all reasonable mercenaries and soldiers of other nations.
^deathsworn-in-midgard

```statblock
"name": "Deathsworn (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "19"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"senses": "passive Perception 17"
"languages": "Common, Elvish"
"cr": "6"
"traits":
  - "desc": "The deathsworn can use Disengage as a bonus action."
    "name": "Archer's Step"
  - "desc": "As a bonus action after firing an arrow, the deathsworn can imbue the\
      \ arrow with magical power, causing it to trail green fire. The arrow deals\
      \ an extra 7 (2d6) fire damage."
    "name": "Death Bolt (3/Day)"
  - "desc": "The deathsworn has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the deathsworn to sleep."
    "name": "Fey Ancestry"
  - "desc": "The deathsworn has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
  - "desc": "The deathsworn's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The deathsworn can take the [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action."
    "name": "Stealthy Traveler"
  - "desc": "If the deathsworn surprises a creature and hits it with an attack during\
      \ the first round of combat, the target takes an extra 10 (3d6) damage from\
      \ the attack."
    "name": "Surprise Attack"
"actions":
  - "desc": "The deathsworn makes two melee attacks or four ranged attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) slashing damage."
    "name": "Scimitar"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 150/600 ft., one target. *Hit:*\
      \ 8 (1d8 + 4) piercing damage."
    "name": "Longbow"
  - "desc": "The deathsworn shoots a rain of fiery arrows in a 30-foot cone. Each\
      \ creature in that area must make a DC 15 Dexterity saving throw, taking 18\
      \ (4d8) piercing damage and 7 (2d6) fire damage on a failed save, or half\
      \ as much damage on a successful one."
    "name": "Volley (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/deathsworn-ccodex.png"
```
^statblock

## Environment

any