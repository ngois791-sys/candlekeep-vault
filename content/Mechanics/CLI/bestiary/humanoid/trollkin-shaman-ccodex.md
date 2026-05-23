---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/trollkin
statblock: inline
statblock-link: "#^statblock"
aliases:
- Trollkin Shaman
---
# [Trollkin Shaman](Mechanics\CLI\bestiary\humanoid/trollkin-shaman-ccodex.md)
*Source: Creature Codex p. 357*  

*The thick-skinned, staff-wielding trollkin shaman barks rough orders to her brutish bodyguards in their guttural language. The trollkin grunts level their spears and growl menacingly.*

## Guardians of the Lair

While the raiding bands of the trollkins pillage for their livelihood, the trollkin shaman and its grunts protect hearth and home, securing the base against other raiders. The shaman's spells and affinity for beasts of the natural world help it maintain its status.

```statblock
"name": "Trollkin Shaman (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "trollkin"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "[hide armor](Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "16"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+2"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "The trollkin shaman is an 8th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 13, +5 to hit with spell attacks). The trollkin\
      \ shaman has the following druid spells prepared:\n\n**Cantrips (at will):**\
      \ [druidcraft](Mechanics/CLI/spells/druidcraft-xphb.md), [produce flame](Mechanics/CLI/spells/produce-flame-xphb.md),\
      \ [shillelagh](Mechanics/CLI/spells/shillelagh-xphb.md)\n\n**1st level (4 slots):**\
      \ [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md), [entangle](Mechanics/CLI/spells/entangle-xphb.md),\
      \ [faerie fire](Mechanics/CLI/spells/faerie-fire-xphb.md), [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\
      \n**2nd level (3 slots):** [flaming sphere](Mechanics/CLI/spells/flaming-sphere-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md)\n\n**3rd level (3\
      \ slots):** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [meld\
      \ into stone](Mechanics/CLI/spells/meld-into-stone-xphb.md), [sleet storm](Mechanics/CLI/spells/sleet-storm-xphb.md)\n\
      \n**4th level (2 slots):** [dominate beast](Mechanics/CLI/spells/dominate-beast-xphb.md),\
      \ [grasping vine](Mechanics/CLI/spells/grasping-vine-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The trollkin shaman regains 5 hp at the start of its turn. If the shaman\
      \ takes acid or fire damage, this trait doesn't function at the start of the\
      \ shaman's next turn. The shaman dies only if it starts its turn with 0 hp and\
      \ doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The trollkin shaman's skin is thick and tough, granting it a +1 bonus\
      \ to Armor Class. This bonus is already factored into the trollkin's AC."
    "name": "Thick Hide"
"actions":
  - "desc": "The trollkin shaman makes two staff attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used\
      \ with two hands."
    "name": "Staff"
  - "desc": "The trollkin shaman inspires ferocity in up to three trollkin it can\
      \ see. Those trollkin have advantage on attack rolls and saving throws until\
      \ the end of the shaman's next turn and gain 10 temporary hp."
    "name": "Inspire Ferocity (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/trollkin-shaman-ccodex.png"
```
^statblock

## Environment

any