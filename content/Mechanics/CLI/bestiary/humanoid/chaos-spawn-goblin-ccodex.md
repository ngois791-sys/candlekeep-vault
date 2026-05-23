---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chaos-spawn Goblin
---
# [Chaos-spawn Goblin](Mechanics\CLI\bestiary\humanoid/chaos-spawn-goblin-ccodex.md)
*Source: Creature Codex p. 190*  

*This stunted creature, wrapped almost entirely in the remnants of a cloak, has the face of an emaciated goblin. Its tiny hole of a mouth looks incapable of speech, and its glazed eyes stare at nothing.*

## Warped by the Unknowable

These creatures were once goblins, still retaining their general size and form, but long exposure to the psyche-obliterating presence of Great Old Ones has warped them in a variety of ways. They no longer speak aloud but communicate telepathically in images. Chaos-spawn goblins no longer eat as they once did, receiving all of their sustenance from the star-born creatures they now serve.

## Single-minded Servants

Raiding and taking captives still occupies much of the chaos-spawn's time, but now their captives are placed inside organic pods or orifices of various kinds which grow in the ground below their masters' feet in web-like structures. There, the Great Old Ones drain whatever it is they wish from the captives, who leave nothing but a gel-like substance behind. This substance is what sustains the chaosspawn goblins, which they take in through feeding tubes.

## Loyal Servants

In their hunts for captives, they do not hesitate to prey on goblins. For this reason, and out of sheer terror, other goblins avoid the chaos-spawn as much as they are able. Indeed, the areas chaos-spawn inhabit are often barren of other intelligent life.

```statblock
"name": "Chaos-spawn Goblin (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "psychic"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The chaos-spawn goblin can take the Disengage or [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action on each of its turns."
    "name": "Nimble Escape"
"actions":
  - "desc": "The chaos-spawn goblin makes two attacks with its scimitar."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Scimitar"
  - "desc": "The chaos-spawn goblin targets one creature that it can sense within\
      \ 30 feet of it. The target must make a DC 12 Intelligence saving throw, taking\
      \ 7 (2d6) psychic damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Psychic Stab (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/chaos-spawn-goblin-ccodex.png"
```
^statblock

## Environment

badlands