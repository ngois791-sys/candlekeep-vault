---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ouroboros
---
# [Ouroboros](Mechanics\CLI\bestiary\dragon/ouroboros-ccodex.md)
*Source: Creature Codex p. 293*  

*The length of the dragon's wingless, serpent-like body is covered in fine scales, black on one end, white on the other, blending into one another in the middle of its form.*

Immortal dragons, ouroboros are symbols of both the preservation of life and the destruction of all things.

## Cyclical Immortality

If slain, the ouroboros is reborn from the energy of its former body. When it rises again, its colors have swapped, and its behavior is changed. If it was destructive in its previous life, it becomes peaceful, and vice versa.

```statblock
"name": "Ouroboros (CCodex)"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "94"
"hit_dice": "9d12 + 36"
"modifier": !!int "0"
"stats":
  - !!int "21"
  - !!int "11"
  - !!int "19"
  - !!int "15"
  - !!int "18"
  - !!int "12"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "7"
  - "wisdom": !!int "7"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 17"
"languages": "All"
"cr": "6"
"traits":
  - "desc": "When the ouroboros is slain, it is reborn in a burst of energy in a 300-foot\
      \ radius from its body. Roll any die. On an even result, the energy causes plants\
      \ to grow, and creatures in the area regain 22 (5d8) hp. On an odd result,\
      \ creatures in the area must make a DC 15 Constitution saving throw, taking\
      \ 22 (5d8) necrotic damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Energetic Rebirth"
  - "desc": "As a bonus action, the ouroboros gains immunity to one type of damage.\
      \ It can change this immunity from one type to another as a bonus action."
    "name": "Variegated Scales"
"actions":
  - "desc": "The ouroboros can use its Introspective Presence. It then makes two bite\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 10 (1d10 + 5) piercing damage."
    "name": "Bite"
  - "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
      \ and aware of it must succeed on a DC 15 Wisdom saving throw or be [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ for 1 minute as the creature is overcome by introspective thoughts. A creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If a creature's saving throw is successful or the\
      \ effect ends for it, the creature is immune to the dragon's Introspective Presence\
      \ for the next 24 hours."
    "name": "Introspective Presence"
  - "desc": "The ouroboros exhales energy in a 30-foot cone. Each creature in that\
      \ area must make a DC 15 Dexterity saving throw, taking 27 (6d8) damage on\
      \ a failed save, or half as much damage on a successful one. The damage is either\
      \ acid, cold, fire, lightning, necrotic, poison, radiant, or thunder. The dragon\
      \ chooses the type of damage before exhaling."
    "name": "Kaleidoscopic Breath (Recharge 5-6)"
"reactions":
  - "desc": "When the dragon is hit with an attack, it gains resistance to damage\
      \ of that type until the end of its next turn, including the damage from the\
      \ attack that triggered this reaction."
    "name": "Reactive Hide"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the ouroboros can expend a use to take one of the following actions. The\
  \ ouroboros regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The ouroboros makes one bite attack."
    "name": "Bite Attack"
  - "desc": "The ouroboros blurs and shifts light around itself or another creature\
      \ it can see within 60 feet of it. Attacks against the target have disadvantage\
      \ until the end of the ouroboros' next turn. The target can resist this effect\
      \ with a successful DC 15 Wisdom saving throw."
    "name": "Blurring Faade (Costs 2 Actions)"
  - "desc": "The ouroboros causes itself or another creature it can see within 60\
      \ feet of it to illuminate with white flame. Attacks against the target have\
      \ advantage until the end of the ouroboros' next turn. The target can resist\
      \ this effect with a successful DC 15 Wisdom saving throw."
    "name": "Guiding Beacon (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/ouroboros-ccodex.png"
```
^statblock

## Environment

any