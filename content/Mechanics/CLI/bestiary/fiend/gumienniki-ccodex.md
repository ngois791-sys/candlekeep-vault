---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gumienniki
---
# [Gumienniki](Mechanics\CLI\bestiary\fiend/gumienniki-ccodex.md)
*Source: Creature Codex p. 213*  

*These stooped creatures resemble elderly humans with cranberry‑colored skin and bright, glowing eyes. They dress in loosely-woven clothing made from hay and foul leather strips.*

## Bargainers

Gumienniki strike fiendish bargains with willing farmers. They offer to protect silos and storehouses from vermin, thieves, and fire in return for a steady supply of livestock. Most of these bargains end poorly for the farmer, who soon discovers that the gumienniki doesn't discriminate when it's hungry.

## Slip in by Moonlight

The gumienniki travel from the Lower Planes to the Material Plane whenever the moon is full. They delight in sacrificing captured humanoids or livestock in starlight, and the harvest moon is of particular importance to them. During the harvest moon, gumienniki are said to sprout flaming wings, which allow them to fly.

## Servants of the Harvest

The gumienniki sometimes ally themselves with dark fertility cults in hidden groves, bringing blood sacrifices directly from their protected farmers to an altar. The farmers themselves may eventually be brought into the cult. The gumienniki may ally with a pack of [roggenwolf](Mechanics/CLI/bestiary/monstrosity/roggenwolf-ccodex.md) or [rattok demons](Mechanics/CLI/bestiary/fiend/rattok-ccodex.md) to starve entire villages. In a few cases, they become servants to vampires, spying on a village in their cat form and reporting any effort to resist the vampire's rule.

```statblock
"name": "Gumienniki (CCodex)"
"size": "Small"
"type": "fiend"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Common, Abyssal, Infernal"
"cr": "1"
"traits":
  - "desc": "As a bonus action, the gumienniki can change its form into a Tiny housecat,\
      \ or back into its true form. Its statistics, other than its size, are the same\
      \ in each form except it loses its flaming hand scythe attack when in cat form."
    "name": "Shapechanger"
  - "desc": "The gumienniki's speed is doubled when traveling over grassy areas or\
      \ through planted crops."
    "name": "Through Grass and Sheaves"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) slashing damage and 7 (2d6) fire damage."
    "name": "Flaming Hand Scythe"
  - "desc": "The gumienniki flashes its glowing eyes, illuminating a 15-foot cone.\
      \ Each creature in that area that can see the gumienniki must succeed on a DC\
      \ 12 Constitution saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ for 1 minute."
    "name": "Fiendish Blink (1/Day)"
"reactions":
  - "desc": "When the gumienniki is missed by an attack, it can taunt the attacker.\
      \ The attacking creature must succeed on a DC 12 Wisdom saving throw or have\
      \ disadvantage on its next attack roll or saving throw."
    "name": "Taunting Cackle"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/gumienniki-ccodex.png"
```
^statblock

## Environment

planar