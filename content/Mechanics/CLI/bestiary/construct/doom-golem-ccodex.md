---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Doom Golem
---
# [Doom Golem](Mechanics\CLI\bestiary\construct/doom-golem-ccodex.md)
*Source: Creature Codex p. 197*  

*One hears a doom golem long before one sees it; a wailing of despair, a whisper of fate, like a lesser incarnation of death itself.*

## Winter Bound

Made of antlers, bone, and steel infused with winter spirits of death and destruction, doom golems are the creations of evil wizards and doomsday cults. They invariably include a hangman's rope, bones of an animal sacrificed to a dark god, and the captured final breath of a man sent to die in exile. A doom golem is animated by a trapped spirit of the arctic, which flees with a howl when the golem is destroyed.

## Glowing Bones

The golem's inner core glows blue, making it easy to see a doom golem after nightfall. Their bone frameworks are sometimes built with polar bear skulls or white dragon bones, and many have a pronounced hunch in their posture.

## Chorus of Fear

A doom golem's clattering bones make noise to terrify foes. Animals find the sound disquieting, but demons, goblins, and other creatures of evil are delighted by the ominous tones.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Doom Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d10 + 54"
"modifier": !!int "1"
"stats":
  - !!int "24"
  - !!int "13"
  - !!int "16"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "cold; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "10"
"traits":
  - "desc": "Any non-evil creature that starts its turn within 20 feet of the doom\
      \ golem must make a DC 15 Wisdom saving throw, unless the doom golem is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ On a failed save, the creature is [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the start of its next turn. If a creature's saving throw is successful,\
      \ the creature is immune to the doom golem's Fear Aura for the next 24 hours."
    "name": "Fear Aura"
  - "desc": "The doom golem sheds dim light in a 10-foot radius."
    "name": "Luminous Skeleton"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The doom golem makes one bite attack and one doom claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage."
    "name": "Doom Claw"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 23 (3d10 + 7) slashing damage."
    "name": "Bite"
  - "desc": "The doom golem releases an arctic wind in a 15-foot radius around itself\
      \ or in a 30-foot cone. Each creature in that area must make a DC 16 Constitution\
      \ saving throw, taking 38 (11d6) cold damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Wind of Boreas (Recharge 5-6)"
"reactions":
  - "desc": "When a creature the doom golem can see within 60 feet of it hits it with\
      \ a spell or attack that requires a ranged attack roll, the doom golem strikes\
      \ the attacker with a doom bolt. The doom bolt is a shadowy reflection of the\
      \ original attack, using the same attack roll and effects as the original, except\
      \ it deals necrotic damage."
    "name": "Doom Upon You"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/doom-golem-ccodex.png"
```
^statblock

## Environment

any