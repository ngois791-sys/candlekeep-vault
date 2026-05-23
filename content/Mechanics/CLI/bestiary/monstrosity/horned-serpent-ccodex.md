---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Horned Serpent
---
# [Horned Serpent](Mechanics\CLI\bestiary\monstrosity/horned-serpent-ccodex.md)
*Source: Creature Codex p. 220*  

*This huge snake has a pair of wide horns, like those of a bull, and a smooth, opaque, red, ovoid stone between its eyes that gives off a faint glow.*

## Plague Bearers

Known to be a bringer of magical plagues, horned serpents are also sought after for their horns and the strange stones between their eyes, both believed to have powerful curative properties.

## Wilderness Wanderer

Horned serpents travel between lakes, ponds, and deep rivers, never staying in one area for more than a few seasons. Though they live primarily in the water, they venture onto the land to hunt, where the sweetness of their poisonous scent draws game to them.

## Grisly Signs

The presence of a horned serpent is most often detected by an area of dead creatures, poisoned but otherwise untouched.

```statblock
"name": "Horned Serpent (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "16"
  - !!int "20"
  - !!int "4"
  - !!int "1"
  - !!int "1"
"speed": "40 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 16"
"languages": ""
"cr": "12"
"traits":
  - "desc": "The horned serpent can breathe air and water."
    "name": "Amphibious"
  - "desc": "Those who fail a saving throw against the horned serpent's Gem Gaze or\
      \ bite attack become infected with the corpse cough disease. The infected creature\
      \ can't benefit from short or long rests due to a constant, wet cough. The infected\
      \ creature must succeed on a DC 17 Constitution saving throw each day or take\
      \ 18 (4d8) necrotic damage. The target's hp maximum is reduced by an amount\
      \ equal to the necrotic damage taken. The target dies if this effect reduces\
      \ its hp maximum to 0. The reduction lasts until the target is cured of the\
      \ disease with a [greater restoration](Mechanics/CLI/spells/greater-restoration-xphb.md)\
      \ spell or similar magic. If the infected creature comes into physical contact\
      \ with a blood relative before the disease is cured, the relative must succeed\
      \ on a DC 17 Constitution saving throw or also become infected with the disease.\
      \ The blood relative is afflicted with a constant, wet cough within hours of\
      \ infection, but the disease's full effects don't manifest until 1d4 days\
      \ later. Corpse cough is so named due to the smell of the cough as the infected\
      \ creature's lungs become necrotic."
    "name": "Corpse Cough"
  - "desc": "At the start of each of the horned serpent's turns, each creature within\
      \ 20 feet of it must make a DC 17 Constitution saving throw, taking 18 (4d8)\
      \ poison damage on a failed save, or half as much damage on a successful one."
    "name": "Poisonous Aura"
  - "desc": "The horned serpent is immune to scrying and to any effect that would\
      \ sense its emotions, read its thoughts, or detect its location."
    "name": "Shielded Mind"
"actions":
  - "desc": "The horned serpent makes one gore attack and one bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 19 (4d6 + 5) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d10 + 5) piercing damage, and the target must succeed on a DC 17 Constitution\
      \ saving throw or become infected with the corpse cough disease (see the Corpse\
      \ Cough trait)."
    "name": "Bite"
  - "desc": "The horned serpent's gem flashes, bathing a 30-foot cone in iridescent\
      \ light. Each creature in the area must make a DC 17 Constitution saving throw.\
      \ On a failed save, a creature takes 35 (10d6) radiant damage and is infected\
      \ with the corpse cough disease (see the Corpse Cough trait). On a success,\
      \ a creature takes half the damage and isn't infected with the disease. Gem\
      \ Gaze has no effect on constructs and undead."
    "name": "Gem Gaze (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/horned-serpent-ccodex.png"
```
^statblock

## Environment

forest, grassland, swamp