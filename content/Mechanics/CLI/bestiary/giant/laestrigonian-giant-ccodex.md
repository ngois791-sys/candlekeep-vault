---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Laestrigonian Giant
---
# [Laestrigonian Giant](Mechanics\CLI\bestiary\giant/laestrigonian-giant-ccodex.md)
*Source: Creature Codex p. 184*  

*Dressed in ragged skirts or makeshift togas stitched from sailcloth and human skin, sporting tangled beards and hair caked with blood and filth, and with its teeth filed to points, a Laestrigonian giant is a mad horror to behold.*

## Close Enough is Too Close

From a distance, a Laestrigonian giant resembles a human of normal proportions, though standing some ten feet tall. At closer range, however, a visible insanity inhabits its eyes—bloodlust is never far from a Laestrigonian giant.

## Ship Wreckers

Laestrigonians dwell near natural harbors whose waters conceal jagged reefs and shoals. By various deceptions, they lure ships onto the hidden reefs and rocks, often the very same hazards that made them castaways. When escape becomes impossible, they run down and slaughter the shipwrecked sailors who attempt to come ashore in the surf.

## Cursed by the Gods

Castaways who violate the taboo against cannibalism sometimes undergo a monstrous transformation resulting from of an ancient curse. When the curse takes hold, the accursed grows in size and gains the ability to go without sustenance for long periods of time. However, it loses all desire to eat anything but humanoid creatures and can barely digest anything else. A Laestrigonian giant is not, however, long-lived; it remains susceptible to the diseases and parasites that accompany cannibalism, a diet of raw meat, and a lack of other sustenance. Nevertheless, death for a Laestrigonian usually comes at the hands of its fellows.

```statblock
"name": "Laestrigonian Giant (CCodex)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "18"
  - !!int "9"
  - !!int "11"
  - !!int "8"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": "Common, Giant"
"cr": "4"
"actions":
  - "desc": "The Laestrigonian giant makes one greatclub attack and one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 14 Constitution saving throw or contract a disease. Until the disease\
      \ is cured, the target can't regain hp except by magical means, and the target's\
      \ hp maximum decreases by 3 (1d6) every 24 hours. If the target's hp maximum\
      \ drops to 0 as a result of this disease, the target dies."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) bludgeoning damage."
    "name": "Greatclub"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 60/240\
      \ ft., one target. *Hit:* 16 (2d10 + 5) bludgeoning damage."
    "name": "Rock"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/laestrigonian-giant-ccodex.png"
```
^statblock

## Environment

coastal