---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Void Speaker (Midgard Version)
---
# [Void Speaker (Midgard Version)](Mechanics\CLI\bestiary\humanoid/void-speaker-midgard-version-ccodex.md)
*Source: Creature Codex p. 408*  

The most revered void-touched, the void speakers whisper antitruths in Void Speech, drawing power from the tainted unwords. They often began as wizards who stumbled upon some scrap of forbidden lore and studied it so deeply it consumed them. Now they form the leadership and direction of clandestine void cults. Wizards are no strangers to the power of words, and those who accept the gifts of the Void become formidable foes of all sane life. The void speaker can reshape reality with its tainted words, splitting the flesh of foes, driving them mad with fear, or hurling them bodily to the ground.

> [!note] Void Speakers in Midgard
> 
> Feared and exterminated by all life-loving people, the void speakers are often the founders of cults that turn entire villages to evil in the Western Wastes, the Red Wastes, or sometimes in the extreme north or south. Their goal is usually to chant praise of dark gods until those gods answer—and to pillage and plunder in an unholy war in the meantime. When using the Midgard setting, change the void speaker's spells to the following (see "Fifth Edition Appendix" in Midgard Worldbook): 
^void-speakers-in-midgard

```statblock
"name": "Void Speaker (Midgard Version) (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "58"
"hit_dice": "13d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "18"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
"damage_resistances": "necrotic; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 10"
"languages": "Common"
"cr": "7"
"traits":
  - "desc": "The void speaker is a 9th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 15, +7 to hit with spell attacks). The void\
      \ speaker has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ *crushing curse* ^[The *Midgard World Handbook* by Kobold Press is currently\
      \ unconverted for 5eTools.], [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md), *word of misfortune*\
      \ ^[The *Midgard World Handbook* by Kobold Press is currently unconverted for\
      \ 5eTools.]\n\n**1st level (4 slots):** [burning hands](Mechanics/CLI/spells/burning-hands-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\n\
      \n**2nd level (3 slots):** *maddening whispers* ^[The *Midgard World Handbook*\
      \ by Kobold Press is currently unconverted for 5eTools.], [misty step](Mechanics/CLI/spells/misty-step-xphb.md),\
      \ [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\n**3rd level (3 slots):**\
      \ [counterspell](Mechanics/CLI/spells/counterspell-xphb.md), [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ *void strike* ^[The *Midgard World Handbook* by Kobold Press is currently\
      \ unconverted for 5eTools.]\n\n**4th level (3 slots):** [black tentacles](Mechanics/CLI/spells/evards-black-tentacles-xphb.md),\
      \ [blight](Mechanics/CLI/spells/blight-xphb.md), [confusion](Mechanics/CLI/spells/confusion-xphb.md)\n\
      \n**5th level (1 slots):** *living shadows* ^[The *Midgard World Handbook* by\
      \ Kobold Press is currently unconverted for 5eTools.]"
    "name": "Spellcasting"
  - "desc": "The void speaker has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Insane"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "The void speaker utters a magical phrase in Void Speech. Each hostile\
      \ creature within 30 feet of the void speaker who can hear it is affected by\
      \ one of the following."
    "name": "Word of the Void (Recharge 5-6)"
  - "desc": "Each affected creature must make a DC 15 Constitution saving throw, taking\
      \ 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Decaying Word"
  - "desc": "Each affected creature must make a DC 15 Strength saving throw. On a\
      \ failure, the creature takes 7 (2d6) thunder damage, is pushed 15 feet directly\
      \ away from the void speaker and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ On a success, the creature takes half damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Repelling Word"
  - "desc": "Each affected creature must succeed on a DC 15 Wisdom saving throw or\
      \ be [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for 1 minute.\
      \ A creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Unsettling Word"
"reactions":
  - "desc": "When a creature the void speaker can see within 60 feet hits it with\
      \ an attack, the attacker takes 7 (2d6) necrotic damage as the void speaker\
      \ barks a destructive word of"
    "name": "Rebuke From Beyond"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/void-speaker-midgard-version-ccodex.png"
```
^statblock

## Environment

any