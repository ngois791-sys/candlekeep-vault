---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/trollkin
statblock: inline
statblock-link: "#^statblock"
aliases:
- Trollkin Grunt
---
# [Trollkin Grunt](Mechanics\CLI\bestiary\humanoid/trollkin-grunt-ccodex.md)
*Source: Creature Codex p. 357*  

*The thick-skinned, staff-wielding trollkin shaman barks rough orders to her brutish bodyguards in their guttural language. The trollkin grunts level their spears and growl menacingly.*

## Guardians of the Lair

While the raiding bands of the trollkins pillage for their livelihood, the trollkin shaman and its grunts protect hearth and home, securing the base against other raiders. The shaman's spells and affinity for beasts of the natural world help it maintain its status.

```statblock
"name": "Trollkin Grunt (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "trollkin"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "[hide armor](Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "9"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "As the trollkin shaman, but only regains 3 hp."
    "name": "Regeneration"
  - "desc": "As the trollkin shaman."
    "name": "Thick Hide"
"actions":
  - "desc": "The trollkin grunt makes two attacks, either with its spear or its longbow."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 150/600 ft., one target. *Hit:*\
      \ 5 (1d8 + 1) piercing damage."
    "name": "Longbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/trollkin-shaman-ccodex.png"
```
^statblock

## Environment

any