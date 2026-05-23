---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Undead Phoenix
---
# [Undead Phoenix](Mechanics\CLI\bestiary\undead/undead-phoenix-ccodex.md)
*Source: Creature Codex p. 361*  

*This huge winged creature is surrounded by a dark purple aura like a slick, greasy fog. The flesh and feathers of the bird fall away in oozing lumps, as if it is in a perpetual state of decay.*

## The Antithesis of Rebirth

The phoenix is a fiery symbol of hope, rebirth, renewal, and the inspiring resilience of life. The undead phoenix is the antithesis of that: a symbol of death, decay, rot, and the relentless crush of death. The creature appears as a large bird surrounded by a swirling aura of purple-black vapors. Within the vile fog, the undead phoenix's physical form is in a constant state of decay: molting feathers, oozing flesh, dripping blood, and exposed bones. 

## Corrupted Creation

The undead phoenix is "born" when a typical phoenix dies at the hands of an undead creature that creates new undead: vampires, wraiths, wights, and the like. Liches sometimes arrange the creation of an undead phoenix to use them as mounts. Phoenixes succumbing to undeath rot away to nothing in a matter of seconds, leaving only a pile of foul, rotting goo. Moments later, the putrid ooze explodes as the undead phoenix slithers out of the substance in its new form. 

## Spreader of Decay

The undead phoenix is often a harbinger of death through disease, plague, or famine. Its aura invites sickness and rot in anyone unfortunate enough to get close. Its malignant beak spreads its decay, making natural or magical recuperation impossible.

## Undead Nature

The undead phoenix doesn't require air, food, drink, or sleep.

```statblock
"name": "Undead Phoenix (CCodex)"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d12 + 45"
"modifier": !!int "2"
"stats":
  - !!int "23"
  - !!int "14"
  - !!int "17"
  - !!int "8"
  - !!int "17"
  - !!int "9"
"speed": "30 ft., fly 90 ft."
"saves":
  - "strength": !!int "10"
  - "constitution": !!int "7"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": ""
"cr": "12"
"traits":
  - "desc": "A living creature that starts its turn within 10 feet of the undead phoenix\
      \ can't regain hp and has disadvantage on Constitution saving throws until the\
      \ start of its next turn."
    "name": "Bilious Aura"
  - "desc": "If it dies, the undead phoenix reverts into a pile of necrotic-tainted\
      \ ooze and is reborn in 24 hours with all of its hp. Only killing it with radiant\
      \ damage prevents this trait from functioning."
    "name": "Eternal Unlife"
"actions":
  - "desc": "The undead phoenix makes three attacks. two with its claws and one with\
      \ its decaying bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 20 (4d6 + 6) slashing damage."
    "name": "Claws"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d8 + 6) piercing damage plus 14 (4d6) necrotic damage. The target\
      \ must succeed on a DC 15 Constitution saving throw or be cursed with perpetual\
      \ decay. The cursed target can't regain hp until the curse is lifted by the\
      \ [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) spell or similar\
      \ magic."
    "name": "Decaying Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/undead-phoenix-ccodex.png"
```
^statblock

## Environment

any