---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Void Giant
---
# [Void Giant](Mechanics\CLI\bestiary\giant/void-giant-ccodex.md)
*Source: Creature Codex p. 187*  

*Covered in writhing tattoos, the giant whispers strange words to itself.*

## Servants of the Void

The great void dragons maintain their primary lairs in the Void, the place of nothingness; however, some also keep lairs in the material world. These lairs are often empty of dragons, but still contain the great wealth that void dragons collect. Void giants, powerful servants of the void dragons, keep their masters' treasures safe.

## Seekers of Power

Void giants roam the world, looking for suitable lairs for their dragon masters. In the course of their duties, they get many opportunities to seek knowledge and practice the void magic to which the dragon masters give them access and training.

## Physical Representations of the Void

Stolen as children from cloud giant clans, void giants are imbued with dark magic from a young age. They are covered with writhing tattoos, arcane writings of the Void made manifest on their flesh, in dark rituals performed by their void dragon masters throughout their upbringing. These writings are the source of the giants' great spellcasting ability.

```statblock
"name": "Void Giant (CCodex)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d12 + 80"
"modifier": !!int "0"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "18"
  - !!int "18"
  - !!int "10"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "4"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+8"
"senses": "passive Perception 10"
"languages": "Common, Giant, Draconic"
"cr": "11"
"traits":
  - "desc": "The void giant is an 11th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (spell save DC 16, +8 to hit with spell attacks). The void\
      \ giant has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [chill touch](Mechanics/CLI/spells/chill-touch-xphb.md), [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md), [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\
      \n**1st level (4 slots):** [comprehend languages](Mechanics/CLI/spells/comprehend-languages-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md), [shield](Mechanics/CLI/spells/shield-xphb.md)\n\
      \n**2nd level (3 slots):** [crown of madness](Mechanics/CLI/spells/crown-of-madness-xphb.md),\
      \ [mirror image](Mechanics/CLI/spells/mirror-image-xphb.md), [scorching ray](Mechanics/CLI/spells/scorching-ray-xphb.md)\n\
      \n**3rd level (3 slots):** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [fly](Mechanics/CLI/spells/fly-xphb.md), [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\
      \n**4th level (3 slots):** [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [ice storm](Mechanics/CLI/spells/ice-storm-xphb.md), [phantasmal killer](Mechanics/CLI/spells/phantasmal-killer-xphb.md)\n\
      \n**5th level (2 slots):** [cone of cold](Mechanics/CLI/spells/cone-of-cold-xphb.md),\
      \ [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md)\n\n**6th level\
      \ (1 slots):** [disintegrate](Mechanics/CLI/spells/disintegrate-xphb.md)"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the void giant can infuse a spell with void magic.\
      \ One creature that is hit by that spell or who fails a saving throw against\
      \ that spell is [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until the\
      \ end of the creature's next turn."
    "name": "Void Casting"
"actions":
  - "desc": "The void giant makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (3d8 + 7) bludgeoning damage."
    "name": "Slam"
"reactions":
  - "desc": "If the void giant succeeds on a saving throw against an enemy spell,\
      \ the void giant doesn't suffer the effects of that spell. If it uses Void Casting\
      \ on its next turn, the void giant can affect all creatures hit by its spell\
      \ or who fail a saving throw against its spell instead of just one creature."
    "name": "Magic Absorption"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/void-giant-ccodex.png"
```
^statblock

## Environment

mountain, planar