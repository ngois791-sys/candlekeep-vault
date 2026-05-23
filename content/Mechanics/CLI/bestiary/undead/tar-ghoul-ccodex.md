---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tar Ghoul
---
# [Tar Ghoul](Mechanics\CLI\bestiary\undead/tar-ghoul-ccodex.md)
*Source: Creature Codex p. 176*  

*Decayed bodies emerge from a pit, covered with a thick, black ooze, showing their sharp teeth and hissing with hunger in their eyes.*

When attacked with fire, tar ghouls often scream with joy as they burst into flames.

## Burning Wish

Bored while under the service of a necromancer, an efreeti prince toyed with his master's creations to give them an edge against fiery spellcasters.

## Flaming Horde

These ghouls roam the darkness in packs, hunting for fresh meat. They relish roasting their food as it screams in pain.

## Bring your Own Fire

These creatures do not fear flame. They revel in the fear their victims experience as the victims realize the inferno will be their doom. Most of these ghouls wear pieces of flint on their rags to ignite themselves if their prey does not use fire against them.

## Hungry Dead Nature

The tar ghoul doesn't require air or sleep.

```statblock
"name": "Tar Ghoul (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"damage_resistances": "necrotic"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "As a bonus action or when it takes fire damage, the tar ghoul bursts\
      \ into flame. The tar ghoul continues burning until it takes cold damage or\
      \ is immersed in water. A creature that touches the tar ghoul or hits it with\
      \ a melee attack while within 5 feet of it while it is burning takes 3 (1d6)\
      \ fire damage. While burning, a tar ghoul deals an extra 3 (1d6) fire damage\
      \ on each melee attack, and its vomit tar action is a 15-foot cone that ignites\
      \ immediately. Each creature in that area must make a DC 13 Dexterity saving\
      \ throw, taking 21 (6d6) fire damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Fire Hazard"
"actions":
  - "desc": "The tar ghoul makes one bite attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is a creature other than an elf\
      \ or undead, it must succeed on a DC 11 Constitution saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claw"
  - "desc": "The tar ghoul vomits tar, covering the ground in a 10-foot square within\
      \ 5 feet of it. Each creature in the area must succeed on a DC 13 Dexterity\
      \ saving throw or be covered with tar. The tar ignites if touched by a source\
      \ of fire or if a creature covered with tar takes fire damage. The tar burns\
      \ for 3 (1d6) rounds or until a creature takes an action to stop the blaze.\
      \ A creature that starts its turn in the area or that starts its turn covered\
      \ with burning tar takes 5 (1d10) fire damage."
    "name": "Vomit Tar (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/tar-ghoul-ccodex.png"
```
^statblock

## Environment

any