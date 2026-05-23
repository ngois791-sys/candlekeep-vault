---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/ratfolk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ratfolk Warlock
---
# [Ratfolk Warlock](Mechanics\CLI\bestiary\humanoid/ratfolk-warlock-ccodex.md)
*Source: Creature Codex p. 316*  

*With filthy tunics and well-kept leathers, ratfolk slink through fights, always looking to flank, turn, or strike from behind. Their ability to work in large groups leads dwarves to despise them as a "lowly swarm of guttersnipes"—but they are effective.*

Ratfolk survive by their wits and bargains. They are notorious for their willingness to work as mercenaries in large dungeon complexes and to strike pacts with far greater powers than themselves. Ratfolk mercenaries often work in tandem with warlocks acting as captains or sergeants for their employers.

## Mercenary Flexibility

Ratfolk mercenaries can be bribed and corrupted with a large enough payment, but they like to say that they "stay bought until payday comes." Usually their loyalty is strong until matters turn against their current master—in some cases they have been known to offer their services to a foe mid-fight!

## Night and Tunnel Specialists

Ratfolk mercenaries excel at work in dark, tight quarters, against cavern monsters, and in old dwarven holds. They also enjoy city kidnappings, guarding towers or dungeons, or silent moonlight scouting in hills or forests. They prefer to avoid working in full sun on open fields, though they are professional enough that they can create an effective ambush on riverbanks, in forest shadow, or elsewhere.

## Overbold and Full of Themselves

Ratfolk warlocks tend to serve dark powers of shadow or diabolism, though sometimes they simply find the first power willing to make a pact for power (fey or genie-infused ratfolk warlocks are not unknown). The influx of power generally makes ratfolk warlocks insufferably bold, snide, and arrogant—they are convinced that their arcane power makes them the smartest, strongest, and handsomest ratfolk ever to slink through a darkened alley.

## Staves and Amulets

As tokens of their pact, ratfolk warlocks always carry or display a profusion of decorated staves, gilded amulets, or clinking silver sigils and rune‑encrusted bells. They are notably less stealthy than most ratfolk.

```statblock
"name": "Ratfolk Warlock (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "ratfolk"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "12"
  - !!int "17"
"speed": "25 ft., swim 10 ft."
"saves":
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "The ratfolk warlock's innate spellcasting ability is Charisma (spell\
      \ save DC 13, +5 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [dancing lights](Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [eldritch blast](Mechanics/CLI/spells/eldritch-blast-xphb.md), [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md),\
      \ [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md), [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md),\
      \ [speak with animals](Mechanics/CLI/spells/speak-with-animals-xphb.md)\n\n\
      **3/day each:** [command](Mechanics/CLI/spells/command-xphb.md), [darkness](Mechanics/CLI/spells/darkness-xphb.md),\
      \ [hellish rebuke](Mechanics/CLI/spells/hellish-rebuke-xphb.md)\n\n**1/day each:**\
      \ [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md), [hold\
      \ person](Mechanics/CLI/spells/hold-person-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The ratfolk warlock can move through the space of any Medium or larger\
      \ creature."
    "name": "Nimbleness"
  - "desc": "The ratfolk has advantage on attack rolls against a creature if at least\
      \ one of the ratfolk's allies is within 5 feet of the creature and the ally\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "*Melee Weapon Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 2\
      \ (1d6 - 1) bludgeoning damage or 3 (1d8 - 1) bludgeoning damage if used\
      \ with two hands."
    "name": "Quarterstaff"
  - "desc": "The ratfolk warlock causes tendrils of shadow to reach out from its body\
      \ toward all creatures within 10 feet of it. Each creature in the area must\
      \ succeed on a DC 13 Wisdom saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by the tendrils until the end of the ratfolk warlock's next turn."
    "name": "Darken"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/ratfolk-warlock-ccodex.png"
```
^statblock

## Environment

underground, urban