---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Külmking
---
# [Külmking](Mechanics\CLI\bestiary\undead/kulmking-ccodex.md)
*Source: Creature Codex p. 244*  

*This creature's long, horse-like body has far too many legs with multiple arms that end in rending claws, while its misshapen head has a fanged maw used for rending flesh and sucking out souls.*

## Cursed Defiler

When a creature chooses to go out of its way to harm forests or other wildlands, fey spirits can curse it to become a külmking. This twisted, horrified undead is forced to become guardian to the lands it once corrupted.

## Stalker of Fey

Though a külmking must follow the wording of its curse to protect the lands to which it is tied, it is a vindictive spirit and will often hunt fey who enter its domain. It delights in terrorizing small sprites and gentle bearfolk alike.

## Sound of a Thousand Hooves

The sound of a külmking's hooves on cobblestones or stony ground often echoes and re-echoes, sounding like a stampede or a much larger company of horses. Occasionally, a pair of külmkings will pull a carriage for vampires, ghouls, or liches.

```statblock
"name": "Külmking (CCodex)"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "18"
  - !!int "17"
"speed": "60 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 18"
"languages": "Common"
"cr": "9"
"traits":
  - "desc": "If the külmking moves through another creature, it can use a bonus action\
      \ to corrupt that creature's soul. The target creature must make a DC 16 Charisma\
      \ saving throw. A creature [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ by the külmking has disadvantage on this saving throw.\n\nOn a failed save,\
      \ a creature suffers from terrible and violent thoughts and tendencies. Over\
      \ the course of 2d4 days, its alignment shifts to chaotic evil. A creature\
      \ that dies during this time, or after this shift is complete, rises 24 hours\
      \ later as a külmking. The corruption can be reversed by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or similar magic used before the creature's death.\n\nOn a success,\
      \ a creature is immune to the külmking's Corruption for the next 24 hours."
    "name": "Corruption"
  - "desc": "The külmking can pass through other creatures and objects as if they\
      \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "If the külmking moves at least 20 feet straight toward a creature and\
      \ then hits it with a hooves attack on the same turn, that target must succeed\
      \ on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is [prone](Mechanics/CLI/rules/conditions.md#Prone), the kü\
      lmking can make one hooves attack against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "The külmking makes two claw attacks and one bite or hooves attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) piercing damage. If the target is a creature that is not undead,\
      \ it must make a DC 16 Constitution saving throw or take 12 (2d8 + 3) necrotic\
      \ damage. The külmking regains hp equal to the amount of necrotic damage dealt."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is not undead, it must succeed\
      \ on a DC 16 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claws"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (3d6 + 3) bludgeoning damage."
    "name": "Hooves"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/kulmking-ccodex.png"
```
^statblock

## Environment

forest, grassland