---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dream Squire
---
# [Dream Squire](Mechanics\CLI\bestiary\fey/dream-squire-ccodex.md)
*Source: Creature Codex p. 134*  

*Dressed in fine black and silver livery, this young-looking figure sports an embroidered coat of arms on its tabard. Upon closer inspection, the figure is pale and drawn with black hair and dark smears beneath its eyes..*

Dream squires are fey servants and bodyguards commonly found in service to shadow fey nobility. A shrinking, servile thing, a dream squire lurks in the shadows near its master, awaiting its master's whim.

## Taken and Bound

Perhaps it was a broken promise, a foolish deal made in haste, or punishment for offending a fey lord, but a dream squire was once a mortal man or woman who ran afoul of the fey. The fey took the mortal and transformed it into a fey creature. The freshly-minted squire is then bound to unflinchingly serve its new master.

## Conscripted

A dream squire is a tireless servant, forsaking refreshment and rest to serve its master's will. The squire often looks bedraggled and exhausted, though it keeps its clothing and equipment in top repair and cleanliness, so as not to embarrass its master.

## Tireless Nature

A dream squire doesn't require drink, food, or sleep.

> [!note] Dream Squires in Midgard
> 
> Dream squires are most often bound in service to the shadow fey, and sometimes to the elves of the Summer Lands or a priestess of Marena. They exist in great numbers in the fey courts of the Shadow Realm and are infrequently seen on the streets of Bemmea, Cronepisht, or Zobeck, attending or running some errand for their shadow fey masters.
^dream-squires-in-midgard

```statblock
"name": "Dream Squire (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "The dream squire has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened). If an effect\
      \ would cause the squire to take a harmful action against its master, it can\
      \ immediately repeat the saving throw (if any), ending the effect on a success.\
      \ The squire has disadvantage on attack rolls or ability checks made against\
      \ its master."
    "name": "Bound Devotion"
  - "desc": "The dream squire is bound to serve another creature as its master. The\
      \ squire obeys all the master's commands, and the master can communicate telepathically\
      \ with the squire as long as they are on the same plane.\n\nA [dispel evil and\
      \ good](Mechanics/CLI/spells/dispel-evil-and-good-xphb.md) spell's break enchantment\
      \ option that targets a dream squire forces it to make a Wisdom saving throw.\
      \ On a failure, the squire's bond with its master is broken, and it returns\
      \ to its true form (use human [guard](Mechanics/CLI/bestiary/humanoid/guard-xmm.md)\
      \ statistics)."
    "name": "Master's Bond"
"actions":
  - "desc": "The dream squire makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage plus 3 (1d6) psychic damage."
    "name": "Mace"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 6 (1d8 + 2) piercing damage plus 3 (1d6) psychic damage."
    "name": "Light Crossbow"
"reactions":
  - "desc": "When the dream squire's master is targeted by an attack or spell, the\
      \ squire magically teleports to an unoccupied space within 5 feet of the master,\
      \ and the attack or spell targets the squire instead. If the attack or spell\
      \ deals damage, the dream squire takes half damage from it. To use this ability,\
      \ the master and squire must be on the same plane."
    "name": "For the Master"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/dream-squire-ccodex.png"
```
^statblock

## Environment

underground, urban