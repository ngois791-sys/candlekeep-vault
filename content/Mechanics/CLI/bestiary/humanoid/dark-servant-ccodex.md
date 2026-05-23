---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dark-folk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dark Servant
---
# [Dark Servant](Mechanics\CLI\bestiary\humanoid/dark-servant-ccodex.md)
*Source: Creature Codex p. 47*  

*This figure is dressed in black robes, and every part of its body that isn't covered by robes is wrapped in gray bandages. It wields blood‑stained sickles in each bandaged hand and moves with menace.*

Dark folk arose when a line of human wizards swore allegiance to shadow gods and passed this shadow power to their children. Easily mistaken for humans at a glance, the dark folk long ago diverged from their ancestors.

The lowliest of the dark folk, the dark servants are also the most numerous. They cover their skin completely to shield it from even a single mote of light. Dark servants are without empathy and prefer the company of other dark folk. Murderous and cruel, they have difficulty interacting with non‑dark folk for long.

## Shadows among Light

Dark folk most often live near humanoid settlements. They worship the powers of darkness and shadow in secret, spreading their corruption in the dead of night and in darkened cellars. They often work nocturnal jobs as undertakers, night soil collectors, alchemists, or night watchmen, escaping the unrelenting glare of the sun.

## Darkened Blood

Sometimes a family line carries the tiniest seed of darkness, and a dark folk is born. These pale children face difficult lives, often singled out and shunned by peers for the dark nature they can't ever fully hide. Though most dark folk look human, dark folk can descend from any humanoid (though they lose all traits associated with their heritage).

```statblock
"name": "Dark Servant (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dark folk"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "Same as the dark eye."
    "name": "Dark Devotion"
  - "desc": "Magical darkness doesn't impede the dark folk's darkvision."
    "name": "Darksight"
  - "desc": "The dark servant has advantage on attack rolls against a creature if\
      \ at least one of the dark servant's allies is within 5 feet of the creature\
      \ and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "Same as the dark eye."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The dark servant makes two attacks with its sickle."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage."
    "name": "Sickle"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d8 + 1) piercing damage."
    "name": "Light Crossbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dark-servant-ccodex.png"
```
^statblock

## Environment

urban