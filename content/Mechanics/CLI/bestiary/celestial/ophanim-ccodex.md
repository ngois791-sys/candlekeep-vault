---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ophanim
---
# [Ophanim](Mechanics\CLI\bestiary\celestial/ophanim-ccodex.md)
*Source: Creature Codex p. 18*  

*A pair of fiery nested chariot wheels spin slowly in the air. Though engulfed in flames, the wheels do not burn.*

## Enigmatic and Silent

Perhaps the most enigmatic of the angels, the ophanim appear alongside other angels, rarely speaking themselves. These angelic beings usually take the form of a flaming wheel with another wheel transverse to it within, the outer rims covered in unblinking eyes. They have also been known to take the form of an empty throne of fire.

## Herald of a God's Will

The accompanying presence of an ophanim in any form signifies divine justice and the direct attention of the deity whom it serves. Other angels treat the ophanim with great respect, feeling the weight of their deity's will in the heat of the ophanim's rings.

## A Symbol or a Weapon

Though they can speak, ophanim tend to communicate a god's displeasure with awesome destructive power, delivering the punishment decreed by the angel they accompany.

## Immortal Nature

The ophanim angel doesn't require food, drink, or sleep.

```statblock
"name": "Ophanim (CCodex)"
"size": "Large"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"modifier": !!int "6"
"stats":
  - !!int "24"
  - !!int "22"
  - !!int "25"
  - !!int "22"
  - !!int "24"
  - !!int "26"
"speed": "50 ft., fly 120 ft. (hover)"
"saves":
  - "intelligence": !!int "11"
  - "wisdom": !!int "12"
  - "charisma": !!int "13"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 22"
"languages": "All, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "The ophanim's innate spellcasting ability is Charisma (spell save DC\
      \ 21). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [bless](Mechanics/CLI/spells/bless-xphb.md), [detect evil and\
      \ good](Mechanics/CLI/spells/detect-evil-and-good-xphb.md), [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only), [scrying](Mechanics/CLI/spells/scrying-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**3/day each:** [dispel evil and good](Mechanics/CLI/spells/dispel-evil-and-good-xphb.md),\
      \ [earthquake](Mechanics/CLI/spells/earthquake-xphb.md), [holy aura](Mechanics/CLI/spells/holy-aura-xphb.md)\n\
      \n**1/day each:** [commune](Mechanics/CLI/spells/commune-xphb.md), [forbiddance](Mechanics/CLI/spells/forbiddance-xphb.md),\
      \ [true resurrection](Mechanics/CLI/spells/true-resurrection-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The ophanim knows if it hears a lie."
    "name": "Divine Awareness"
  - "desc": "The ophanim has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The ophanim makes four Light of Judgment attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +13 to hit, range 80/320 ft., one target. *Hit:*\
      \ 18 (4d8) radiant damage."
    "name": "Light of Judgment"
  - "desc": "The ophanim emits a burst of holy fire. Each creature within 30 feet\
      \ of the ophanim must make a DC 19 Dexterity saving throw, taking 63 (18d6)\
      \ radiant damage on a failed save, or half as much damage on a successful one.\
      \ A humanoid reduced to 0 hp by this damage dies, leaving only a pile of fine\
      \ ash."
    "name": "Holy Fire (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/ophanim-ccodex.png"
```
^statblock

## Environment

planar