---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kallikantzaros
---
# [Kallikantzaros](Mechanics\CLI\bestiary\fey/kallikantzaros-ccodex.md)
*Source: Creature Codex p. 233*  

*This goat-legged creature has green or brown skin, dirty ivory tusks, and black eyes that burn red in the dark. It considers frogs and worms treats, and the creature has a leather pouch stuffed with both.*

The kallikantzaros are dark fey creatures that dwell deep beneath the surface of the mortal world, along the trunk of Yggdrasil, the World Tree. Every day, the kallikantzaros work to saw down Yggdrasil, though who set them to this task has been forgotten by even them.

## Solstice Marauders

Each year, as the kallikantzaros draw close to succeeding in their purpose, the winter solstice arrives, a 12-day period where the kallikantzaros may cross over to the surface world to harass those who dwell there. Each year, the kallikantzaros are compelled to the surface to terrorize and plunder. And each year, upon returning to their lair, they are enraged to find that the World Tree has been healed.

## Goblin Confusion

With their greenish skin and pointed ears, the kallikantzaros are often mistaken for goblins or dust goblins. This drives most of them into a fury, as they insist they share nothing with "worthless, lazy, foolish" goblins. Many will insist on an immediate and profuse apology or a duel to settle the point.

```statblock
"name": "Kallikantzaros (CCodex)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[hide armor](Mechanics/CLI/items/hide-armor-xphb.md)"
"hp": !!int "59"
"hit_dice": "17d6"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "10"
  - !!int "6"
  - !!int "8"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 9"
"languages": "Common, Sylvan, Undercommon"
"cr": "2"
"traits":
  - "desc": "The kallikantzaros has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put a kallikantzaros to sleep."
    "name": "Fey Ancestry"
  - "desc": "A kallikantzaros who begins its turn within 20 feet of burning incense\
      \ must succeed on a DC 13 Constitution saving throw or have disadvantage on\
      \ attack rolls until the start of its next turn. The kallikantzaros can't voluntarily\
      \ move toward the incense. Burning old shoes has the same effect."
    "name": "Hateful Scents"
  - "desc": "The kallikantzaros can take the Disengage or [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action on each of its turns."
    "name": "Nimble Escape"
"actions":
  - "desc": "The kallikantzaros makes two handsaw attacks or two spear attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage. The handsaw does an extra die of damage against\
      \ a target that is wearing no armor."
    "name": "Handsaw"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d6 + 2) piercing damage or 6 (1d8 + 2) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear"
  - "desc": "Two kallikantzaros can combine their actions to move up to their speed\
      \ with a 5-foot, two-person saw held between them and attack a single creature\
      \ in their path. The target must succeed on a DC 13 Dexterity saving throw or\
      \ take 9 (2d6 + 2) slashing damage. If the creature is Large or smaller, it\
      \ must succeed on a DC 13 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone).\
      \ If the target is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ each kallikantzaros may make a handsaw attack against it as a bonus action."
    "name": "Misery Whip"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/kallikantzaros-ccodex.png"
```
^statblock

## Environment

underground