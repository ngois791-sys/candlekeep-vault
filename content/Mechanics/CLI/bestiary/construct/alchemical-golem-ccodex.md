---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct/golem
statblock: inline
statblock-link: "#^statblock"
aliases:
- Alchemical Golem
---
# [Alchemical Golem](Mechanics\CLI\bestiary\construct/alchemical-golem-ccodex.md)
*Source: Creature Codex p. 192*  

*A man of solid silver plods steadily forward. Three massive tanks are embedded in its back, each sporting an adamantine needle pointing towards its metal neck.*

## Enhanced by Alchemy

Alchemical golems are powered not by traditional magic, but by a viscous fluid that flows through their silver bodies like blood. This alchemical slurry is potent enough on its own to power the twelve-foot-tall golem but burns with incredible power when infused with one of the three prime alchemical substances: brimstone, quicksilver, or salt. If multiple infusions are injected into the golem's vital stream at once, the mixture may become volatile.

## Pierced by Adamantine

An alchemical golem's exterior can only be pierced by magical or adamantine implements. To infuse the golem with alchemical admixtures, the golem's creator has equipped its alchemical tanks with adamantine syringes.

## Construct Nature

A golem doesn't require air, food, drink, or sleep.

```statblock
"name": "Alchemical Golem (CCodex)"
"size": "Large"
"type": "construct"
"subtype": "golem"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "-2"
"stats":
  - !!int "18"
  - !!int "7"
  - !!int "21"
  - !!int "7"
  - !!int "10"
  - !!int "1"
"speed": "20 ft."
"damage_resistances": "acid, cold, fire, lightning"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons that aren't adamantine"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": "Understands the languages of its creator but can't speak"
"cr": "9"
"traits":
  - "desc": "Syringes on the golem's back pierce its silver hide and infuse it with\
      \ a powerful admixture. At the start of its turn, the alchemical golem can select\
      \ one of the following infusions. Each infusion lasts until the start of its\
      \ next turn. The golem can't use multiple infusions at once.\n\n- **Brimstone.**\
      \ The golem takes 7 (2d6) necrotic damage when it activates this infusion.\
      \ The golem can breathe poison as an action. In addition, any creature that\
      \ starts its turn within 5 feet of the golem must succeed on a DC 16 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the start of the creature's next turn.  \n- **Quicksilver.** The golem\
      \ takes 14 (4d6) necrotic damage when it activates this infusion. The golem's\
      \ silver hide turns to shifting quicksilver, increasing its speed to 40 feet\
      \ and granting it resistance to damage to which it is not already immune.  \n\
      - **Salt.** The golem takes 17 (5d6) necrotic damage when it activates this\
      \ infusion. The golem's silver hide is covered with salt crystals, increasing\
      \ its AC by 3. The golem's slam attacks deal an extra 14 (4d6) piercing damage\
      \ and the ground within 20 feet of the golem becomes difficult terrain for 1\
      \ hour.  \n\n    A creature can force an adamantine syringe into the golem's\
      \ body with a successful DC 25 Strength check while grappling the golem, nullifying\
      \ its current infusion and dealing 35 (10d6) piercing damage to it.  "
    "name": "Alchemical Infusion"
  - "desc": "Whenever the golem takes acid, cold, fire, or lightning damage, all creatures\
      \ within 20 feet of the golem must make a DC 16 Dexterity saving throw, taking\
      \ damage equal to the damage the golem took on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Elemental Expulsion"
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The golem makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "The golem exhales poisonous fumes in a 30-foot cone. Each creature in\
      \ that area must make a DC 16 Dexterity saving throw, taking 31 (9d6) poison\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Poison Breath (Brimstone Infusion Only; (Recharge 5-6))"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/construct/token/alchemical-golem-ccodex.png"
```
^statblock

## Environment

any