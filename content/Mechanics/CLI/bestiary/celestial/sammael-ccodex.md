---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sammael
---
# [Sammael](Mechanics\CLI\bestiary\celestial/sammael-ccodex.md)
*Source: Creature Codex p. 19*  

*Pale-skinned, beautiful humanoids without gender, these angels are wrapped in black, swirling mist in the shape of elegant robes.*

## Three Forms

The sammael angels are often referred to as the "Gods' Severity," owing to the grim tasks assigned them. They are the angels burdened with execution, destruction, and punishment. Their weapons and tactics vary depending on the nature of their assignments. Executioners appear as muscled warriors, wielding massive, radiant axes. Destructors arrive with flaming fists and wield both elemental and divine magic. Punishers arrive with cruel whips, whose lashes sear both body and soul.

## Strong-Willed

Despite the dark nature of their work, sammael angels show no malice on their luminescent visages. Though their assigned tasks often run counter to their alignment and divine nature, the angels maintain their inherent goodness. This strength of will makes them unshakable in combat.

## Immortal Nature

The sammael angel doesn't require food, drink, or sleep.

```statblock
"name": "Sammael (CCodex)"
"size": "Medium"
"type": "celestial"
"subtype": "angel"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "19"
  - !!int "12"
"speed": "30 ft., fly 40 ft."
"saves":
  - "wisdom": !!int "7"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "All, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The sammael's weapon attacks are magical. When the sammael hits with\
      \ any weapon, the weapon deals an extra 2d8 radiant damage (included in the\
      \ attack)."
    "name": "Angelic Weapons"
  - "desc": "The sammael angel can use its bonus action to shift its purpose between\
      \ Destructor, Executioner, and Punisher.\n\n- **Destructor.** The sammael's\
      \ purpose is to destroy unholy monuments and statues. Its weapon attacks deal\
      \ double damage to objects and structures.  \n- **Executioner.** The sammael's\
      \ purpose is to slay a specific creature. The angel has advantage on attack\
      \ rolls against a specific creature, chosen by its deity. As long as the angel\
      \ and the victim are on the same plane of existence, the angel knows the precise\
      \ location of the creature.  \n- **Punisher.** The sammael's purpose is to punish,\
      \ but not kill, creatures, inflicting long-term suffering on those of its deity's\
      \ choosing. A creature reduced to 0 hp by the angel loses 3 (1d6) Charisma\
      \ as its body is horribly scarred by the deity's retribution. The scars last\
      \ until the creature is cured by the [greater restoration](Mechanics/CLI/spells/greater-restoration-xphb.md)\
      \ spell or similar magic.  "
    "name": "Sacred Duty"
"actions":
  - "desc": "The sammael makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (1d12 + 4) slashing damage plus 9 (2d8) radiant damage. If the target\
      \ is a creature, it must succeed on a DC 16 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of its next turn."
    "name": "Greataxe (Executioner Form Only)"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) fire damage plus 9 (2d8) radiant damage. If the target is a\
      \ creature, it must succeed on a DC 16 Strength saving throw or be pushed 10\
      \ feet away from the angel."
    "name": "Slam (Destructor Form Only)"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) slashing damage plus 9 (2d8) radiant damage. If the target\
      \ is a creature, it must succeed on a DC 16 Constitution saving throw or be\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the end of its\
      \ next turn. A creature's hp maximum is reduced by an amount equal to the radiant\
      \ damage taken. This reduction lasts until the creature finishes a short or\
      \ long rest."
    "name": "Whip (Punisher Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/sammael-ccodex.png"
```
^statblock

## Environment

any