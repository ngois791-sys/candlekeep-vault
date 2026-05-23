---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dust Goblin Chieftain
---
# [Dust Goblin Chieftain](Mechanics\CLI\bestiary\humanoid/dust-goblin-chieftain-ccodex.md)
*Source: Creature Codex p. 136*  

*At first, the strange eyes and gibbering might make the dust goblin seem addled or at least a less-than-formidable foe. But its mastery of command words and bizarre ancient rituals makes these small creatures extremely dangerous, able to call on powers older than human history.*

A dust goblin chieftain must keep its tribe alive and fed, which is no small accomplishment in the wastelands it calls home. The chieftain has an edge on its fellows, which helps it keep the others in line, and that edge takes the form of a beneficial mutation brought on by the energies which permeate its homelands.

## Mastery of Ancient Languages

Dust goblin chieftains are often surprisingly learned in ancient tongues, able to speak and command creatures of the outer void, the hells, or from tombs long forgotten. Their ability to decipher scripts and faded text is unmatched.

## Strange Technology and Oddly Arcane Items

Thanks to the ruined civilizations which came before and in whose ruins the dust goblins live, a chieftain has access to a wide variety of unexpected items and magic. The exact nature of these items varies from chieftain to chieftain and is up to the GM's discretion.

```statblock
"name": "Dust Goblin Chieftain (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "44"
"hit_dice": "8d6 + 16"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "18"
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Goblin"
"cr": "3"
"traits":
  - "desc": "The dust goblin chieftain has advantage on saving throws against being\
      \ [charmed](Mechanics/CLI/rules/conditions.md#Charmed) or [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ In addition, it can use an action to read the surface thoughts of one creature\
      \ within 30 feet. This works like the detect thoughts spell, except it can only\
      \ read surface thoughts and there is no limit to the duration. The dust goblin\
      \ chieftain can end this effect as a bonus action or by using an action to change\
      \ the target."
    "name": "Alien Mind"
  - "desc": "On each of its turns, the dust goblin chieftain can use a bonus action\
      \ to take the [Dash](Mechanics/CLI/rules/actions.md#Dash), [Disengage](Mechanics/CLI/rules/actions.md#Disengage),\
      \ or [Hide](Mechanics/CLI/rules/actions.md#Hide) action."
    "name": "Cunning Action"
  - "desc": "The dust goblin chieftain deals an extra 10 (3d6) damage when it hits\
      \ a target with a weapon attack and has advantage on the attack roll, or when\
      \ the target is within 5 feet of an ally of the dust goblin chieftain that isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) and the chieftain\
      \ doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "When the dust goblin chieftain attacks a creature from hiding, the target\
      \ must succeed on a DC 13 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of its next turn."
    "name": "Twisted"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage plus 4 (1d8) poison damage. The target must\
      \ succeed on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 80/320 ft., one target. *Hit:*\
      \ 8 (1d8 + 4) piercing damage plus 4 (1d8) poison damage. The target must\
      \ succeed on a DC 13 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Light Crossbow"
"reactions":
  - "desc": "The dust goblin chieftain adds 2 to its AC against one melee attack that\
      \ would hit it. To do so, the chieftain must see the attacker and be wielding\
      \ a melee weapon."
    "name": "Parry"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dust-goblin-chieftain-ccodex.png"
```
^statblock

## Environment

badlands