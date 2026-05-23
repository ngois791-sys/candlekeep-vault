---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dark-folk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dark Voice
---
# [Dark Voice](Mechanics\CLI\bestiary\humanoid/dark-voice-ccodex.md)
*Source: Creature Codex p. 73*  

*Shadows cling to the black chainmail draping this humanoid's form. Black cloth binds its eyes tightly, but it turns its face as if it can see. The figure's frost-rimmed mace leaves wisps of vapor in the air as the whispering begins, and the light starts to die.*

Dark folk arose when a line of human wizards swore allegiance to shadow gods and passed this shadow power to their children. Easily mistaken for humans at a glance, the dark folk long ago diverged from their ancestors.

The most powerful of the dark folk, a dark voice sacrifices both eyes to the truth lurking in the shadows. All dark folk instantly recognize the power and authority vested within a dark voice, though hearing two voices leads to bitter rivalry. Either the local dark folk turn on one another until only one voice remains, or the weaker dark voice sets off to establish a splinter group.

In the rare case that multiple dark voices work together, the dark folk become a terrifying force. A dark voice commands the essence of darkness itself, whispering secrets that snuff light and fill listeners with terror so profound it can be deadly.

## Shadows among Light

Dark folk most often live near humanoid settlements. They worship the powers of darkness and shadow in secret, spreading their corruption in the dead of night and in darkened cellars. They often work nocturnal jobs as undertakers, night soil collectors, alchemists, or night watchmen, escaping the unrelenting glare of the sun.

## Darkened Blood

Sometimes a family line carries the tiniest seed of darkness, and a dark folk is born. These pale children face difficult lives, often singled out and shunned by peers for the dark nature they can't ever fully hide. Though most dark folk look human, dark folk can descend from any humanoid (though they lose all traits associated with their heritage).

```statblock
"name": "Dark Voice (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dark folk"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[chain mail](Mechanics/CLI/items/chain-mail-xphb.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+7"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., passive\
  \ Perception 13"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "Same as the dark eye."
    "name": "Dark Devotion"
  - "desc": "The dark voice regains 5 hp at the start of its turn if it is in an area\
      \ of dim light or darkness. The dark voice only dies if it starts its turn with\
      \ 0 hp and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "Same as the dark eye."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The dark voice makes two attacks with its mace."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage plus 7 (2d6) cold damage."
    "name": "Mace"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:*\
      \ 5 (1d10) piercing damage plus 7 (2d6) cold damage."
    "name": "Heavy Crossbow"
  - "desc": "The dark voice speaks in Umbral, whispering of what it sees beyond the\
      \ dark. The area within 30 feet of the dark voice becomes dimly lit until the\
      \ end of the dark voice's next turn. Only sunlight can illuminate the area brightly\
      \ during this time. Each non-dark folk creature in the area must succeed on\
      \ a DC 15 Charisma saving throw or take 13 (3d8) psychic damage and be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the start of its next turn."
    "name": "Whispers of Shadow (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/dark-voice-ccodex.png"
```
^statblock

## Environment

urban