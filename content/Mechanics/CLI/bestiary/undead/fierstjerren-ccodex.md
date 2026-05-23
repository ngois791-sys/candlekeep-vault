---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fierstjerren
---
# [Fierstjerren](Mechanics\CLI\bestiary\undead/fierstjerren-ccodex.md)
*Source: Creature Codex p. 157*  

*An ancient man with dead eyes, long white hair, and tattooed runes covering his still-muscular body bears his sword menacingly.*

Fierstjerren are undead servants of the northern death cults, raised from fallen reavers through dark magic. They are boastful and arrogant, and injury only makes them stronger.

## Relentless Agents

Fierstjerren carry out the orders of their creators with independence and foresight, while others independently further the cause of evil as they see fit.

## Malevolence Under Tension

Fierstjerren are animated by a controlling spirit of necrotic energy. When the fierstjerren is wounded, the spirit tears free, animating the twice-undead corpse in a burst of necromantic destruction.

## Accompanied by Zealots

Fierstjerren are often accompanied by a dozen thralls—humanoid zealots serving the cult, willingly or not, who view the fierstjerren as an avatar of death and will follow it to the grave and beyond. Thralls attack under the direction of the fierstjerren, who is alerted to any danger the thralls perceive. A fierstjerren will sacrifice its thralls without remorse to secure an advantage, a sacrifice that is often seen as an honor by the zealous thralls.

## Undead Nature

The fierstjerren doesn't require air, food, drink, or sleep.

```statblock
"name": "Fierstjerren (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[studded leather armor](Mechanics/CLI/items/studded-leather-armor-xphb.md)"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "When the fierstjerren has 80 hp or fewer, the spirit within it tears\
      \ free and tendrils of necrotic energy erupt from its skin. When it hits with\
      \ any weapon, the weapon deals an extra 4 (1d8) necrotic damage. When it has\
      \ 60 hp or fewer, its weapon attacks instead deal an extra 9 (2d8) necrotic\
      \ damage. When it has 40 hp or fewer, its weapon attacks instead deal an extra\
      \ 13 (3d8) necrotic damage."
    "name": "Apotheosis"
  - "desc": "A fierstjerren with thralls can't be surprised and attacks from hiding\
      \ don't gain advantage against it."
    "name": "Thrall Watch"
"actions":
  - "desc": "The fierstjerren makes two sword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) slashing damage."
    "name": "Sword"
  - "desc": "The fierstjerren targets one creature it can see within 30 feet of it.\
      \ If the creature can see the fierstjerren, it must succeed on a DC 15 Wisdom\
      \ saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of the fierstjerren's next turn."
    "name": "Terrifying Glare"
  - "desc": "The fierstjerren targets one humanoid it can see within 30 feet of it\
      \ that has a CR up to 1/2. The humanoid must succeed on a DC 15 Wisdom saving\
      \ throw or be magically [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by the fierstjerren. The fierstjerren can telepathically communicate with\
      \ any creature it has [charmed](Mechanics/CLI/rules/conditions.md#Charmed).\
      \ The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target can't take\
      \ reactions and obeys the fierstjerren's verbal and telepathic commands. A fierstjerren\
      \ can have up to twelve [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ thralls at one time. A [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ thrall loses the memories of its previous life and devotes itself to the fierstjerren\
      \ and the cult. The charm lasts for 24 hours or until the fierstjerren is destroyed,\
      \ is more than 300 feet from the [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ target, or takes a bonus action to end the effect. The fierstjerren can attempt\
      \ to reassert control over all of its thralls by using this action. Each thrall\
      \ can repeat the saving throw when the fierstjerren uses this action to reassert\
      \ control."
    "name": "Thrall Enslavement"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/fierstjerren-ccodex.png"
```
^statblock

## Environment

any