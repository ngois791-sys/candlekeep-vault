---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ratatosk Warlord
---
# [Ratatosk Warlord](Mechanics\CLI\bestiary\celestial/ratatosk-warlord-ccodex.md)
*Source: Creature Codex p. 314*  

*This large rodent stands upright, wearing a wooden breastplate and gripping a leaf-bladed silver spear. It chitters with menace.*

## Preening Protectors

These sleek-furred celestial beings act as the defenders of their kind. Every bit as egotistical as their smaller kin, their fur is always immaculate, and the wooden breastplates they wear often bear intricate carvings of arboreal patterns.

## Useful Nuisances

Though they have gained greater size and strength, ratatosk warlords have lost their connection to the celestial network of other ratatosks. Consequently, they are often found pestering their smaller kin for current news and bits of gossip while exaggerating the protection their greater size provides. The other ratatosks humor this for the most part, though with much sighing.

## Eager Guardians

While most ratatosk are messengers of the gods, many ratatosk warlords claim an even greater purpose: protecting Yggdrasil and the world trees that unite many elements of the cosmos with the realms of the gods and mortals. Their small watchtowers, sprawling tree cities, and portals to particular branches of Yggdrasil maintain a bit of order on the sprawling planar pathways or, in some cases, simply a safe place for a night's rest. However, convincing a ratatosk warlord that a particular traveler is not a servant of darkness is sometimes a quite difficult task; they see danger and demons everywhere.

```statblock
"name": "Ratatosk Warlord (CCodex)"
"size": "Small"
"type": "celestial"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "77"
"hit_dice": "14d6 + 28"
"modifier": !!int "4"
"stats":
  - !!int "7"
  - !!int "18"
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "12"
"speed": "25 ft., climb 25 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Celestial, telepathy 100 ft."
"cr": "5"
"traits":
  - "desc": "As a bonus action, the ratatosk warlord commands one ratatosk within\
      \ 30 feet of it to make one melee attack as a reaction."
    "name": "I'm Bigger That's Why"
  - "desc": "The ratatosk warlord can take the Dash or [Disengage](Mechanics/CLI/rules/actions.md#Disengage)\
      \ action as a bonus action on each of its turns."
    "name": "Warlord Skitter"
"actions":
  - "desc": "The ratatosk warlord makes two attacks. one with its gore and one with\
      \ its ratatosk shortspear."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 11 (2d6 + 4) piercing damage."
    "name": "Ratatosk Shortspear"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d4 + 4) piercing damage plus 14 (4d6) psychic damage."
    "name": "Gore"
  - "desc": "Each non-ratatosk creature within 30 feet that can hear the warlord must\
      \ succeed on a DC 15 Charisma saving throw or have disadvantage on all attack\
      \ rolls until the start of the warlord's next turn."
    "name": "Chatter of War (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/ratatosk-warlord-ccodex.png"
```
^statblock

## Environment

any