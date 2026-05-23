---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/ratfolk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ratfolk Mercenary
---
# [Ratfolk Mercenary](Mechanics\CLI\bestiary\humanoid/ratfolk-mercenary-ccodex.md)
*Source: Creature Codex p. 315*  

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
"name": "Ratfolk Mercenary (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "ratfolk"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "[leather armor](Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "45"
"hit_dice": "13d6"
"modifier": !!int "4"
"stats":
  - !!int "7"
  - !!int "18"
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "10"
"speed": "25 ft., swim 10 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "4"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+2"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "The ratfolk mercenary's melee weapon attacks deal one extra die of damage\
      \ if at least one of the mercenary's allies is within 5 feet of the creature\
      \ and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Chopper Squad"
  - "desc": "The ratfolk mercenary can move through the space of any Medium or larger\
      \ creature."
    "name": "Nimbleness"
  - "desc": "The ratfolk has advantage on attack rolls against a creature if at least\
      \ one of the ratfolk's allies is within 5 feet of the creature and the ally\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "If the ratfolk mercenary moves at least 10 feet straight toward a target\
      \ and then hits it with a shortsword attack on the same turn, the mercenary\
      \ can make one dart attack against another target within 20 feet as a bonus\
      \ action without disadvantage."
    "name": "Packing Heat"
"actions":
  - "desc": "The ratfolk mercenary makes two attacks with its shortsword or dart.\
      \ If both shortsword attacks hit the same target, the ratfolk mercenary can\
      \ use its bonus action to automatically deal an extra 4 (1d8) piercing damage\
      \ as it bites the target."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 20/60 ft., one target. *Hit:*\
      \ 6 (1d4 + 4) piercing damage."
    "name": "Dart"
"reactions":
  - "desc": "When a creature makes an attack against the ratfolk mercenary's current\
      \ employer, the mercenary grants a +2 bonus to the employer's AC if the mercenary\
      \ is within 5 feet of the employer."
    "name": "Guard the Big Cheese"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/ratfolk-mercenary-ccodex.png"
```
^statblock

## Environment

underground, urban