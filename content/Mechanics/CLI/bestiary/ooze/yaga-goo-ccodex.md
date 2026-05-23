---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yaga Goo
---
# [Yaga Goo](Mechanics\CLI\bestiary\ooze/yaga-goo-ccodex.md)
*Source: Creature Codex p. 389*  

*A bubbling pool of green and brown goo shifts to a vaguely humanoid shape.*

## Simmered Down

Adventurers who meet Baba Yaga and offend her are usually boiled down and turned into Yaga goo, an oozing, loyal spy. The recipe also exists outside of Baba Yaga's cauldrons—some hags and ancient witches know how to turn foes into Yaga goo.

## Scent of Stew

Yaga goo is said to smell rather appetizing, a bit like pork or a hearty mutton stew. This scent is difficult to distinguish from actual stew, so Yaga goo is known to do some of its spying for Baba Yaga in actual kitchens and cauldrons.

## Ooze Nature

The Yaga goo doesn't require sleep.

> [!note] Yaga Goo in Midgard
> 
> While many gnomes live free of the influence of Baba Yaga, some have not been so smart or lucky. The gnomes of Niemheim live with the daily fear of the Old Grandmother. Some poor fools tried to return to Baba Yaga, seeking to bargain, wheedle, and plead to sate her wrath. Fearful whispers describe how they were boiled down into wretched goo. This goo serves as a spy for Baba Yaga's minions and often terrorizes gnomes that might once have been family.
^yaga-goo-in-midgard

```statblock
"name": "Yaga Goo (CCodex)"
"size": "Small"
"type": "ooze"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "10d6 + 50"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "18"
  - !!int "20"
  - !!int "14"
  - !!int "12"
  - !!int "11"
"speed": "20 ft., climb 20 ft."
"saves":
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"damage_immunities": "necrotic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 11"
"languages": "Understands Common but can't speak"
"cr": "5"
"traits":
  - "desc": "The goo can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "The goo has advantage on attack rolls against fey and any creature with\
      \ the Fey Ancestry trait."
    "name": "Deadly to Fey"
  - "desc": "The goo can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The Yaga goo makes two pseudopod attacks. When its Foul Transit is available,\
      \ it can use Foul Transit in place of one pseudopod attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) bludgeoning damage plus 3 (1d6) necrotic damage."
    "name": "Pseudopod"
  - "desc": "The goo teleports to an unoccupied space it can see within 50 feet, leaving\
      \ behind a wretched puddle in the space it previously occupied. A creature within\
      \ 5 feet of the space the goo left must succeed on a DC 16 Constitution saving\
      \ throw or take 10 (3d6) necrotic damage and become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn. The first time a creature enters the puddle's\
      \ space or if a creature starts its turn in the puddle's space it takes 10 (3d6)\
      \ necrotic damage and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ The puddle lasts for 1 minute or until the goo that created it is killed."
    "name": "Foul Transit (Recharge 4-6)"
"reactions":
  - "desc": "When a creature the Yaga goo can see targets it with a melee attack while\
      \ within 5 feet of the goo, the goo can teleport to a puddle created by its\
      \ Foul Transit, if that puddle's space is unoccupied, negating the damage from\
      \ the attack. If it does, the attacker must succeed on a DC 16 Constitution\
      \ saving throw or take 10 (3d6) necrotic damage and become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn."
    "name": "Puddle Splash"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/yaga-goo-ccodex.png"
```
^statblock

## Environment

urban