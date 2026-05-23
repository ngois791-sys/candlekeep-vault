---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Spawn of Chernobog
---
# [Spawn of Chernobog](Mechanics\CLI\bestiary\fiend/spawn-of-chernobog-ccodex.md)
*Source: Creature Codex p. 347*  

*This ink-black, hulking beast looks cut from the darkness itself. It stands in the rough shape of a bear rearing up on its hind legs with slavering jaws dripping with a foul, black secretion. The antlers of a massive elk spread from either side of a pair of shining red eyes.*

## Darkness Begets Darkness

The spawn of Chernobog stalk places of horror, and their presence serves as a mark of evil deeds as surely as a trail of blood at the site of a murder.

## Remnants of Malice

Spawn of Chernobog come into being for a myriad of reasons, not all of which can be laid at the feet of the Black God's followers. One might appear in the wake of a particularly cruel betrayal ending in murder. A battlefield marked by merciless acts might become the hunting grounds of a spawn of Chernobog. Acts of malice, the spreading of terror; these are sacred to the Lord of the Night, and a sufficient quality or quantity of either may birth his cruel progeny.

## Indifferent Parentage

As one might imagine, a god of darkness, death, and destruction makes for an indifferent parent. Chernobog cares not what end his spawn may come to. So long as they spread fear and violence, they have served their purpose.

```statblock
"name": "Spawn of Chernobog (CCodex)"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "12"
  - !!int "18"
  - !!int "10"
  - !!int "12"
  - !!int "12"
"speed": "40 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_vulnerabilities": "radiant"
"damage_resistances": "necrotic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Understands Common, Undercommon but can't speak"
"cr": "4"
"traits":
  - "desc": "If a bite wound from the spawn of Chernobog results in an infection,\
      \ the black oil that drips from the spawn's jaws seeps into the wound and vanishes.\
      \ After each long rest, the creature must make a DC 14 Constitution saving throw.\
      \ On two successes, the disease is cured. On a failure, the disease progresses,\
      \ forcing the creature to undergo a series of changes, in the following order.\n\
      \n- The creature can't speak, and its tongue turns black.  \n- The creature's\
      \ eyes turn a deep red, and it gains darkvision 60 feet and the Sunlight Sensitivity\
      \ trait.  \n- The creature secretes black oil from its skin, and it has advantage\
      \ on ability checks and saving throws made to escape a grapple.  \n- The creature's\
      \ veins turn black, slowly working their way up through the body from the appendages\
      \ over 24 hours.  \n- When the blackened veins reach its head after the final\
      \ long rest, the creature experiences excruciating, stabbing pains in its temples.\
      \ At sunset, the creature dies as the antlers of an elk burst from its head.\
      \ The oil secreting from the corpse pools and forms a spawn of Chernobog at\
      \ midnight.  "
    "name": "Night's Blood"
  - "desc": "While in sunlight, the spawn of Chernobog has disadvantage on attack\
      \ rolls, as well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The spawn of Chernobog makes two attacks. one with its bite and one with\
      \ its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (1d8 + 6) piercing damage, and the creature must succeed on a DC 14 Constitution\
      \ saving throw or become infected with the night's blood disease (see the Night's\
      \ Blood trait)."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d6 + 6) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/spawn-of-chernobog-ccodex.png"
```
^statblock

## Environment

arctic, underground