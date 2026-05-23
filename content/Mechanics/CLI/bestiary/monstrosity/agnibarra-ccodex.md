---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Agnibarra
---
# [Agnibarra](Mechanics\CLI\bestiary\monstrosity/agnibarra-ccodex.md)
*Source: Creature Codex p. 9*  

*Its skin constantly ablaze, the creature seems happiest only when watching fire consume creatures and objects around it.*

## Born in Fire

Native to volcanoes, thermal vents, and eternalfires that burn beneath the earth, agnibarras exult in flames. The tar-like substance that covers their hides burns constantly, and those agnibarras who go out into the world quickly find their way to locations and beings who venerate fire.

## Temple Servants or Terrors

Often employed as guardians or treated as blessed creatures in temples of fire worship, agnibarras bring great enthusiasm to such places, though that enthusiasm comes in the form of burning things. Agnibarras accept and burn offerings on behalf of temples, but their single-mindedness often leads them to claiming such sacrifices for themselves instead of the gods the temples serve. The creatures often consider themselves a proxy for the temples' gods, seeing little difference in a sacrifice to themselves or a temple's patron. When this occurs, however, many a priest has discovered, to their horror, what a perilous prospect ejecting an agnibarra from a temple can be. Entire towns have burned to the ground as the flaming creature made its exit.

## Improvement by Burning

The agnibarra's pyromania stems not from malice but from the creatures simply finding all things much more hospitable and beautiful when engulfed in flames. The agnibarra sees creatures that cannot withstand the flames as a nuisance, burning the creature to death means little more to the agnibarra than killing a field mouse would to a farmer.

```statblock
"name": "Agnibarra (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d6 + 18"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "16"
  - !!int "8"
  - !!int "10"
  - !!int "12"
"speed": "30 ft."
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "passive Perception 10"
"languages": "Common, Ignan"
"cr": "1"
"traits":
  - "desc": "A creature that touches the agnibarra or hits it with a melee attack\
      \ while within 5 feet of it takes 3 (1d6) fire damage, and flammable objects\
      \ within 5 feet of the agnibarra that aren't being worn or carried ignite."
    "name": "Body In Flames"
  - "desc": "The agnibarra sheds bright light in a 10-foot radius and dim light an\
      \ additional 10 feet."
    "name": "Illumination"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage plus 3 (1d6) fire damage. If the target is a\
      \ creature or a flammable object, it ignites. Until a creature takes an action\
      \ to douse the fire, the target takes 5 (1d10) fire damage at the start of\
      \ each of its turns."
    "name": "Burning Claw"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 15 30 ft., one target. *Hit:*\
      \ 9 (2d6 + 2) fire damage. If the target is a creature or a flammable object,\
      \ it ignites. Until a creature takes an action to douse the fire, the target\
      \ takes 5 (1d10) fire damage at the start of each of its turns."
    "name": "Spit Fire"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/agnibarra-ccodex.png"
```
^statblock

## Environment

mountain