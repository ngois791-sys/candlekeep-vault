---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ink Guardian
---
# [Ink Guardian](Mechanics\CLI\bestiary\ooze/ink-guardian-ccodex.md)
*Source: Creature Codex p. 285*  

*A spill of ink slowly grows in size, corroding intruders without harming the nearby texts.*

Often left by wizards in libraries or studies, these small bottles produce an ink that can endanger any intruder that might come near. They protect their creators' residences while posing little risk to the books and manuscripts around them.

## Expansive Presence

An ink guardian first appears as a very small blob of ink, but, as it confronts intruders, it grows in size until it is large and imposing.

## Projected Protector

The bottles from which these guardians come are often mundane in appearance and seamlessly fit into the environments where they are found.

## Dangerous to Intruders

An ink guardian's ink is corrosive only to flesh, not wood or paper. It is not uncommon for wizards to return to their studies to find no sign of invasion other than the odd staff or pile of clothes lying on the floor.

## Ooze Nature

An ink guardian doesn't require sleep.

```statblock
"name": "Ink Guardian (CCodex)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"modifier": !!int "-2"
"stats":
  - !!int "16"
  - !!int "7"
  - !!int "16"
  - !!int "6"
  - !!int "6"
  - !!int "1"
"speed": "20 ft."
"damage_resistances": "fire, thunder, slashing"
"damage_immunities": "acid"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), passive Perception 8"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The ink guardian can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "When activated, the creature launches from its bottle, landing within\
      \ 20 feet of the bottle. It starts as Tiny, and at the start of each of its\
      \ turns, it increases in size by one step to a maximum of Large.\n\nWhen the\
      \ ink guardian is defeated, the bottle becomes inactive for 3d8 hours. After\
      \ that time, the ink guardian regains all its hp and is active again. The bottle\
      \ has AC of 20, 10 hp, and is immune to damage that isn't bludgeoning. If the\
      \ bottle is destroyed, the ink guardian dies and can't rejuvenate."
    "name": "Bottled Rejuvenation"
  - "desc": "A creature that touches the ink guardian or hits it with a melee attack\
      \ while within 5 feet of it takes 4 (1d8) acid damage. The ink guardian can\
      \ eat through flesh quickly, but it doesn't harm metal, wood, or paper."
    "name": "Selectively Caustic"
  - "desc": "When the ink guardian is subjected to thunder damage, it takes no damage\
      \ and instead splashes onto creatures within 5 feet of it. Each creature in\
      \ the area takes 4 (1d8) acid damage. When the ink guardian is reduced to\
      \ 0 hp, it explodes. Each creature within 15 feet of it must make a DC 13 Dexterity\
      \ saving throw, taking 9 (2d8) acid damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Volatile"
"actions":
  - "desc": "As a Medium or Large creature, the ink guardian makes two pseudopod attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) bludgeoning damage plus 7 (2d6) acid damage."
    "name": "Pseudopod"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/ooze/token/ink-guardian-ccodex.png"
```
^statblock

## Environment

urban