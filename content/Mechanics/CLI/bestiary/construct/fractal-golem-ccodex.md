---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fractal Golem
---
# [Fractal Golem](Mechanics\CLI\bestiary\construct/fractal-golem-ccodex.md)
*Source: Creature Codex p. 198*  

*A twelve-foot-tall granite carving of a great warrior lunges to attack.*

Fractal golems are usually composed of granite. They are thin, long of limbs, and intricately carved. While looking like menacing hulks, these constructs are able trackers and lurkers.

## Programmed Hunters

Fractal golems are often used as bodyguards or arcane bounty hunters, knocking their quarry unconscious and bringing it back to their masters. A fractal golem's creator can imprint the golem with a specified individual the creator wants the construct to capture.

## Exploding Duplicates

Like other golems, fractal golems are nearly impervious to spells and ordinary weapons. However, when they would ordinarily be destroyed, they explode and split into smaller parts. Travelers fighting what they might have mistaken for an ordinary stone construct could end up fighting eight tiny golems, each with the power of the original. Once split, a fractal golem can't be healed or returned to its previous form.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Fractal Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "8"
"hit_dice": "1d10 + 3"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "6"
  - !!int "8"
  - !!int "1"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Understands the languages of its creator but can't speak"
"cr": "8"
"traits":
  - "desc": "When the golem is reduced to 0 hp, it explodes. Each creature within\
      \ 5 feet of it, except for other fractal golems, must succeed on a DC 14 Dexterity\
      \ saving throw or take 4 (1d8) force damage and be pushed back 5 feet. Two\
      \ duplicate fractal golems appear in the golem's space and the nearest unoccupied\
      \ space, each with the same statistics as the original fractal golem, except\
      \ one size smaller. When a Tiny duplicate of the golem is reduced to 0 hp, it\
      \ explodes and doesn't duplicate. All duplicates act on the same initiative."
    "name": "Fractalize"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (3d6 + 3) bludgeoning damage."
    "name": "Slam"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/fractal-golem-ccodex.png"
```
^statblock

## Environment

any