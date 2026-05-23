---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Moon Drake
---
# [Moon Drake](Mechanics\CLI\bestiary\dragon/moon-drake-ccodex.md)
*Source: Creature Codex p. 129*  

*A pale drake drifts through the air like a leaf on the surface of a pond, barely moving its billowing, cloak-like wings. Its large, jet‑black eyes stare skyward but reflect no light.*

Impalpable as the night and ephemeral as the moon, the pale‑winged moon drakes are mysterious creatures. Monster hunters have long struggled to capture a specimen and study the alien form, but the drakes are all but impossible to catch. Whenever a hunter tries to snare one, the moon drake's ethereal body turns into a beam of pure moonlight and flies away at impossible speeds.

## Power over Lycanthropes

The only thing that is known for certain about these drakes is that their connection with the moon gives them some power over lycanthropy. A moon drake's saliva is liquid moonlight, and it uses this against lycanthropes it encounters.

## Timid but Loyal

Moon drakes are flighty creatures and are frightened of most humanoid creatures. Moon drakes are often only able to overcome their fear of others when innocent people are in danger, and the drakes are the only ones able to save them. The people of countless countryside villages have stories of being nearly eviscerated by a rampaging werewolf, only to be saved by a strange creature with wings of moonlight hurtling from the heavens. These people say their rescuer cured the werebeast in a flash of pearlescent light then disappeared into the sky as quickly as it arrived.

```statblock
"name": "Moon Drake (CCodex)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "60"
"hit_dice": "9d8 + 36"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "20"
  - !!int "19"
  - !!int "13"
  - !!int "18"
  - !!int "14"
"speed": "25 ft., fly 100 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
"condition_immunities": "[paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "Common, Celestial, Draconic"
"cr": "5"
"traits":
  - "desc": "The moon drake's saliva can be bottled, distilled, and used in 1-ounce\
      \ doses. An afflicted lycanthrope that drinks this concoction is instantly cured\
      \ of lycanthropy, requiring no saving throw. This draught can't cure a natural-born\
      \ lycanthrope of the curse of lycanthropy."
    "name": "Curative Saliva"
  - "desc": "A moon drake's power waxes and wanes with the moon. Under a full moon,\
      \ it has resistance to bludgeoning, piercing, and slashing damage from nonmagical\
      \ attacks and its weapon attacks deal an additional 3 (1d6) radiant damage.\
      \ Under a new moon, it has vulnerability to bludgeoning, piercing, and slashing\
      \ damage. Under any other moon, it gains no extra traits."
    "name": "Moonbound"
"actions":
  - "desc": "The moon drake makes three attacks. one with its bite and two with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) piercing damage plus 5 (1d10) radiant damage. A shapechanger\
      \ that takes radiant damage from this attack instantly reverts to its true form\
      \ and can't assume a different form for 1d4 rounds."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d6 + 5) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature afflicted\
      \ with lycanthropy. *Hit:* The target must succeed on a DC 15 Constitution saving\
      \ throw or be cured of lycanthropy (it can willingly fail this save). This attack\
      \ can't cure a natural born lycanthrope of the curse of lycanthropy."
    "name": "Moonlight Nip"
  - "desc": "The drake exhales searing moonlight in a 60-foot line that is 5 feet\
      \ wide. Each creature in that area must make a DC 15 Constitution saving throw,\
      \ taking 33 (6d10) radiant damage on a failed save, or half as much damage\
      \ on a successful one. A shapechanger makes its saving throw with disadvantage.\
      \ If it fails, it also instantly reverts to its true form and can't assume a\
      \ different form for 1d4 rounds."
    "name": "Lunarbeam (Recharge 5-6)"
"reactions":
  - "desc": "When the moon drake takes damage or is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ it can transmute its physical form into an incorporeal form of pure moonlight\
      \ until the end of its next turn. While in this form, it has resistance to cold,\
      \ fire, and lightning damage and immunity to bludgeoning, piercing, and slashing\
      \ damage from nonmagical attacks. While in this form, the drake can pass through\
      \ openings at least 1 inch wide and through transparent objects. It takes 5\
      \ (1d10) force damage if it ends its turn inside an object."
    "name": "Form of Moonlight"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/moon-drake-ccodex.png"
```
^statblock

## Environment

forest