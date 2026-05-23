---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Necrotic Tick
---
# [Necrotic Tick](Mechanics\CLI\bestiary\beast/necrotic-tick-ccodex.md)
*Source: Creature Codex p. 275*  

*A tick, bloated to the size of a child's head, buries its mandibles deep in its victim. Circles of necrotic flesh bubble around the wound.*

## Zombie Hosts

Necrotic ticks are normal ticks that have gorged themselves on blood rich with necrotic energy. They grow unnaturally large as they feed, weighing in excess of four pounds when fully engorged. Most begin their voracious lives attached to the backs of animal zombies, and it is not uncommon to find a cluster of them on a single animal.

## Death Bite

When the blood of a necrotic tick's undead host runs dry, the parasite rides its victim to a new host—usually an unfortunate living creature. As it sucks the living creature's blood, it leaks necrotic energy into the bite wound and starts a process that slowly turns the hapless victim into a zombie one pound of flesh at a time. If no potential hosts are available, ridden hosts hide in dark crevices or in trees, where they wait to pounce on the next passerby and deliver their crawling passengers.

```statblock
"name": "Necrotic Tick (CCodex)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"modifier": !!int "2"
"stats":
  - !!int "2"
  - !!int "14"
  - !!int "12"
  - !!int "1"
  - !!int "12"
  - !!int "8"
"speed": "10 ft., climb 10 ft."
"saves":
  - "constitution": !!int "3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "While attached to a living host, a necrotic tick leaks negative energy\
      \ into the host's bloodstream, quickly closing over the creature's wounds with\
      \ scabrous, necrotic flesh. If the host doesn't already have regeneration, it\
      \ regains 2 hp at the start of its turn if it has at least 1 hit point.\n\n\
      Track how many \"necrotic hp\" a host recovers via Necrotic Regeneration. Magical\
      \ healing reverses the necrosis and subtracts an equal number of necrotic hp\
      \ from those accumulated. When the necrotic hp equal the host's hit point maximum,\
      \ the host becomes a zombie."
    "name": "Necrotic Regeneration"
  - "desc": "When a necrotic tick's living host has lost three-quarters of its maximum\
      \ hp from Blood Drain, the tick's toxins fill the host with an unnatural desire\
      \ to approach other living beings. When a suitable creature is within 5 feet,\
      \ the tick incites a sudden rage in the host, riding the current host to a new\
      \ host. The current host must succeed on a DC 13 Wisdom saving throw or it attempts\
      \ to grapple a living creature within 5 feet of it as a reaction. The host can\
      \ re-attempt this saving throw at the end of each turn that it suffers damage\
      \ from the necrotic tick's Blood Drain."
    "name": "Ride Host"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 1 piercing damage, and the tick attaches to the target. While attached, the\
      \ necrotic tick doesn't attack. Instead, at the start of each of the tick's\
      \ turns, the target loses 5 (1d4 + 3) hp due to blood loss. The target must\
      \ make a DC 13 Wisdom saving throw. If it fails, it is affected by the tick's\
      \ toxins and doesn't attempt to remove the tick. The host will even replace\
      \ a dislodged tick unless prevented from doing so for 1 minute, after which\
      \ the tick's influence fades.\n\nThe tick can detach itself by spending 5 feet\
      \ of its movement. It does so when seeking a new host or if the target dies.\
      \ A creature, including the target, can use its action to detach the tick. When\
      \ a necrotic tick detaches, voluntarily or otherwise, its host takes 1 necrotic\
      \ damage."
    "name": "Blood Drain"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/necrotic-tick-ccodex.png"
```
^statblock

## Environment

any