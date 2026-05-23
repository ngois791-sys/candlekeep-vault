---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Exploding Toad
---
# [Exploding Toad](Mechanics\CLI\bestiary\monstrosity/exploding-toad-ccodex.md)
*Source: Creature Codex p. 150*  

*A green-skinned toad croaks as its red boils throb. The warts suddenly glow red-hot, and the amphibian explodes in flames and blood.*

Exploding toads are living traps created long ago by ancient dust goblin magic. They look like normal toads but their mouths have razor sharp teeth, and they explode in fire when they die. Most do not recognize the beasts' wicked personalities and explosive potential until it is too late.

## Goblin Magic

Exploding toads are created when a dust goblin ritual is cast upon a group of normal toads. The ritual takes a full day to complete and requires one pound of sulfur per toad being transformed, which is consumed in the casting. The instructions for the spell have never been written down. They are orally handed down from one dust goblin shaman to the next.

There are some spellcasters of other races who have successfully created their own exploding toads, though getting the beasts to cooperate is another matter entirely. Several mages spent years trying to crack the ritual only to have success literally blow up in their faces. The toads only trust dust goblins.

## Wicked and Suicidal

Smarter and more evil than the average amphibian, exploding toads relish their purpose. The savage amphibians die with glee, hoping to immolate as many creatures as possible. Exploding toads arrange themselves in tight groups, knowing that one of their deaths can set off a fiery chain reaction. Dust goblins often place the toads at the bottom of a covered pit or inside a ceiling rigged to collapse.

```statblock
"name": "Exploding Toad (CCodex)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "1"
"stats":
  - !!int "1"
  - !!int "13"
  - !!int "11"
  - !!int "4"
  - !!int "8"
  - !!int "3"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "fire"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 30 ft., passive\
  \ Perception 9"
"languages": "Understands Goblin but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The toad can breathe air and water."
    "name": "Amphibious"
  - "desc": "When the toad is reduced to 0 hp, it explodes in a 10-foot-radius sphere.\
      \ Each creature in the area must make a DC 11 Dexterity saving throw, taking\
      \ 10 (3d6) fire damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Final Croak"
  - "desc": "Ranged attacks against the toad have disadvantage."
    "name": "Mad Hopping"
  - "desc": "When an attack or effect deals fire damage to the toad, the toad can\
      \ choose to take the fire damage as if it were not immune."
    "name": "Selective Immunity"
  - "desc": "The toad's long jump is up to 10 feet and its high jump is up to 5 feet,\
      \ with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d4 + 1) piercing damage."
    "name": "Bite"
"reactions":
  - "desc": "The exploding toad can turn an attack that missed it into a hit or turn\
      \ a successful saving throw into a failure."
    "name": "Death Leap"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/exploding-toad-ccodex.png"
```
^statblock

## Environment

swamp