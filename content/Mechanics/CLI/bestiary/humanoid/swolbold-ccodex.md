---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kobold
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swolbold
---
# [Swolbold](Mechanics\CLI\bestiary\humanoid/swolbold-ccodex.md)
*Source: Creature Codex p. 240*  

*From behind the collection of angry kobolds steps a creature the size of a dwarf, its bulging muscles flexing as its kobold-like snout twists into a terrible grin.*

## A Beast Among Kobolds

The swolbold is the brute of the kobold world, a hulking specimen among its smaller and more fragile cousins. Roughly the height of a dwarf but much wider, the rippling muscles of the swolbold betray its ferocious strength. In contrast to the sneakiness and cunning of the kobold, the swolbold is straightforward and devastating in combat.

## Bred for Destruction

Swolbolds are very rare, and their penchant for unthinking destruction has stumped sages. Some theorize that swolbolds have been bred by evil wizards in arcane experiments gone horribly wrong. Others state the dark gods revered by kobolds gift these monsters to tribes particularly fervent in their worship. Others still conclude that carefully crafted alchemy transformed normal kobolds into these beastly creatures. Regardless of the swolbold's origins, experts agree on one thing: you don't want to meet a swolbold in a dark, subterranean lair.

## Fighting Style

The physiognomy of the swolbold allows them to shrug off most mundane blows. Their preferred fighting style is to crush the life out of their foes, rather than stabbing and scuttling like their smaller cousins. Their girth makes fitting into normal armor difficult, so their tribal leaders often create piecemeal armor for them: scraps of metal plates held over vital areas with bits of leather or rope.

One or two swolbolds may accompany a larger force of kobolds, acting at the vanguard of an attack. The larger creatures act as battering rams and moving shields, allowing the smaller kobolds to use their ranged attacks and devious tactics to the greatest effect.

```statblock
"name": "Swolbold (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "[scale mail](Mechanics/CLI/items/scale-mail-xphb.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "15"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "20 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
"damage_resistances": "bludgeoning"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Draconic"
"cr": "3"
"traits":
  - "desc": "If the swolbold uses the [Dash](Mechanics/CLI/rules/actions.md#Dash)\
      \ action on its turn and stops within 5 feet of a creature, it can make one\
      \ slam attack with disadvantage as a bonus action against that creature."
    "name": "Leaping Attack"
  - "desc": "The swolbold has advantage on attack rolls against a creature if at least\
      \ one of the swolbold's allies is within 5 feet of the creature and the ally\
      \ isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "While in sunlight, the swolbold has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) bludgeoning damage. If the target is a Large or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 14).\
      \ Until the grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and the swolbold can't make slam attacks against other targets."
    "name": "Slam"
  - "desc": "One creature [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by\
      \ the swolbold must make a DC 14 Strength saving throw, taking 21 (5d6 + 4)\
      \ bludgeoning damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Crush"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/swolbold-ccodex.png"
```
^statblock

## Environment

underground, urban