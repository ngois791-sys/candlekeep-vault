---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Piasa
---
# [Piasa](Mechanics\CLI\bestiary\dragon/piasa-ccodex.md)
*Source: Creature Codex p. 298*  

*The dragon easily stands out from its draconic cousins with a huge rack of antlers rising from its head, and a well-groomed beard jutting from its tiger-like chin and jaw line. Its incredibly long tail whips to and fro, tipped by a terrible spike.*

## Bearded Drake

While the beard of the piasa can be mistaken as hair, it would be more correct to say that it is made of the same chitinous material as its scales. Male piasa are covered with scales that are a shade of green, while female piasa are covered in golden scales. Male beards are often gold in color, while female beards can range from light gold to almost black.

## Ravenous Carnivore

lower form of dragon, the piasa is well known for its hunger for humanoid flesh. While it will eat any source of meat, it prefers live prey that it has rendered unconscious and has a particular fondness for dwarf flesh.

## Hunters of Snakes

People that live near piasa quickly learn to carry poisoned spears and arrows for protection as the beasts are particularly susceptible to it. These villages often harvest poison from local snakes, driving many piasa to ruthlessly slaughter such creatures on sight. An area clear of snakes is often a sign of a piasa's presence.

```statblock
"name": "Piasa (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "9"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_vulnerabilities": "poison"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 15 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 14"
"languages": "Draconic"
"cr": "6"
"traits":
  - "desc": "The piasa's spiked tail is segmented and up to three times the length\
      \ of its body. When the piasa takes 25 or more damage in a single turn, a segment\
      \ of its tail is severed. When the first segment is severed, the tail attack's\
      \ damage type changes from piercing to bludgeoning and deals 1d8 less damage.\
      \ When the second segment is severed, the tail attack no longer deals damage,\
      \ but it can still grapple. When the third segment is severed, the piasa can't\
      \ make tail attacks. The tail re-grows at a rate of one segment per long rest."
    "name": "Segmented Tail"
"actions":
  - "desc": "The piasa can use its Frightful Presence. It then makes three attacks.\
      \ one with its bite or tail and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (2d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 15 ft., one target. *Hit:*\
      \ 13 (2d8 + 4) piercing damage. If the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 15).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and the piasa can't make tail attacks against other targets. When the piasa\
      \ moves, any Medium or smaller creature it is grappling moves with it."
    "name": "Tail"
  - "desc": "Each creature of the piasa's choice that is within 120 feet of the dragon\
      \ and aware of it must succeed on a DC 15 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ piasa's Frightful Presence for the next 24 hours."
    "name": "Frightful Presence"
  - "desc": "The piasa exhales sleep gas in a 30-foot cone. Each creature in that\
      \ area must succeed on a DC 15 Constitution saving throw or fall [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for 10 minutes. This effect ends for a creature if the creature takes damage\
      \ or someone uses an action to wake it."
    "name": "Sleep Breath (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/piasa-ccodex.png"
```
^statblock

## Environment

forest