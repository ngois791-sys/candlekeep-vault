---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dark-folk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dark Eye
---
# [Dark Eye](Mechanics\CLI\bestiary\humanoid/dark-eye-ccodex.md)
*Source: Creature Codex p. 72*  

*This pale-skinned humanoid is swathed in dark robes. Beneath its hood, its face is a grotesque mask. Smooth, featureless flesh is where one eye would be; the existing eye is a black pit that swallows both light and hope.*

Dark folk arose when a line of human wizards swore allegiance to shadow gods and passed this shadow power to their children. Easily mistaken for humans at a glance, the dark folk long ago diverged from their ancestors.

Some dark folk carry a stronger measure of shadow in their souls, and it grants them the gift of sight, at the cost of one of their eyes. Staring into that eye threatens to draw the viewer in to its doom.

## Shadows among Light

Dark folk most often live near humanoid settlements. They worship the powers of darkness and shadow in secret, spreading their corruption in the dead of night and in darkened cellars. They often work nocturnal jobs as undertakers, night soil collectors, alchemists, or night watchmen, escaping the unrelenting glare of the sun.

## Darkened Blood

Sometimes a family line carries the tiniest seed of darkness, and a dark folk is born. These pale children face difficult lives, often singled out and shunned by peers for the dark nature they can't ever fully hide. Though most dark folk look human, dark folk can descend from any humanoid (though they lose all traits associated with their heritage).

```statblock
"name": "Dark Eye (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dark folk"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "15"
  - !!int "9"
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The dark eye has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Dark Devotion"
  - "desc": "hen a creature that can see the dark eye's eye starts its turn within\
      \ 30 feet of the dark eye, the dark eye can force it to make a DC 13 Wisdom\
      \ saving throw if the dark eye isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and can see the creature. On a failure, the creature takes 7 (2d6) psychic\
      \ damage and is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until the start of its next turn. On a success, the creature takes half the\
      \ damage and isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\n\
      \nUnless surprised, a creature can avert its eyes to avoid the saving throw\
      \ at the start of its turn. If the creature does so, it can't see the dark eye\
      \ until the start of its next turn, when it can avert its eyes again. If the\
      \ creature looks at the dark eye in the meantime, it must immediately make the\
      \ save."
    "name": "Gaze of Shadows"
  - "desc": "While in sunlight, the dark eye has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The dark eye makes two attacks with its dagger."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage plus 4 (1d8) cold\
      \ damage."
    "name": "Dagger"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dark-eye-ccodex.png"
```
^statblock

## Environment

urban