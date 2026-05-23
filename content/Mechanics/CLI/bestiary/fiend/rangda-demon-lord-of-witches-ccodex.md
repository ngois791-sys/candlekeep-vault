---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Rangda, Demon Lord of Witches
---
# [Rangda, Demon Lord of Witches](Mechanics\CLI\bestiary\fiend/rangda-demon-lord-of-witches-ccodex.md)
*Source: Creature Codex p. 49*  

*This giant, elderly woman, with long, unkempt hair, pendulous breasts, and horrific claws cracks a crooked smile. Her face is a horrifying, fanged mask with wild, protruding eyes, and her tongue is disturbingly long with curved spikes of bone along its edges.*

Rangda, also known as the Wretched Lover and the Rot Within, is the demon queen of witches.

## Sacrifice of Innocents

Worshippers of Rangda are required to deliver the babes of mortals unto her once a year. She delights in feasting upon these offerings, often swallowing them whole.

## Cursed Enemies

Rangda, once the mortal lover of Barong, is now his eternal enemy. Her hate for Barong fuels her machinations, and she blames him for her misfortunes. In this, at least, she is correct—Barong did betray her to darkness long ago, though she has since embraced it as an instrument of her vengeance.

## Friend to Hags.

Rangda is often accompanied by a halfdozen green or sea hags, occasionally by a few [night](Mechanics/CLI/bestiary/fiend/night-hag-xmm.md) or sand hags (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), and very rarely by one or two blood hags. The hags are messengers, guards, and allies of the demon queen.

## Rangda's Lair

Rangda's lair is nestled beneath an immense, twisted tree strewn with corpse flowers and surrounded by warlock's trumpetblooms (see page 372) deep in a vast bog of the Abyss. The tree must reshape itself to grant access to the Witch Queen's abode, an earthy, worm-ridden manse that reeks of decay.

```statblock
"name": "Rangda, Demon Lord of Witches (CCodex)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "262"
"hit_dice": "25d10 + 125"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "19"
  - !!int "20"
  - !!int "22"
  - !!int "17"
  - !!int "21"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "12"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+11"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 19"
"languages": "Common, Abyssal, Celestial, telepathy 120 ft."
"cr": "17"
"traits":
  - "desc": "The rangda, demon lord of witches's innate spellcasting ability is Charisma\
      \ (spell save DC 19, +11 to hit with spell attacks). It can innately cast\
      \ the following spells, requiring no material components:\n\n**At will:** [charm\
      \ person](Mechanics/CLI/spells/charm-person-xphb.md), [comprehend languages](Mechanics/CLI/spells/comprehend-languages-xphb.md),\
      \ [eldritch blast](Mechanics/CLI/spells/eldritch-blast-xphb.md) (4d10), [fly](Mechanics/CLI/spells/fly-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [vicious mockery](Mechanics/CLI/spells/vicious-mockery-xphb.md)\
      \ (4d4)\n\n**3/day each:** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md)\
      \ (8 hours), [blight](Mechanics/CLI/spells/blight-xphb.md), [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [major image](Mechanics/CLI/spells/major-image-xphb.md), [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md),\
      \ [tongues](Mechanics/CLI/spells/tongues-xphb.md), [witch bolt](Mechanics/CLI/spells/witch-bolt-xphb.md)\
      \ (5d12)\n\n**1/day each:** [feeblemind](Mechanics/CLI/spells/befuddlement-xphb.md),\
      \ [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md), [true polymorph](Mechanics/CLI/spells/true-polymorph-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "If Rangda fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Rangda has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Rangda makes three attacks. two with her claws and one with her tongue\
      \ lash."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 14 (2d8 + 5) slashing damage. If the target is a humanoid, it must succeed\
      \ on a DC 19 Constitution saving throw or become infected with cackle fever.\
      \ If the target succeeds, it is immune to this effect for 24 hours."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:*\
      \ 12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed\
      \ on a DC 19 Constitution saving throw or its Strength score is reduced by 1d4.\
      \ The target dies if this reduces its Strength to 0. Otherwise, the reduction\
      \ lasts until the target finishes a long rest."
    "name": "Tongue Lash"
  - "desc": "Rangda sways her body and tongue in a mesmerizing rhythm. Each creature\
      \ of her choice that is within 30 feet of her that can see her must succeed\
      \ on a DC 19 Charisma saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Hypnotic Sway (Recharge 5-6)"
  - "desc": "Rangda magically teleports to an unoccupied space within line of sight.\
      \ Alternatively, Rangda magically enters her home plane from the Material Plane,\
      \ or vice versa."
    "name": "Teleport"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Rangda takes a lair\
      \ action to cause one of the following effects; Rangda can't use the same effect\
      \ two rounds in a row:\n\n- Roots of the great tree burst through the ground\
      \ to grasp at a creature that Rangda can see. The creature must succeed on a\
      \ DC 15 Dexterity saving throw or be grappled (escape DC 15) until initiative\
      \ count 20 on the following round.  \n- Water bubbles up from the ground in\
      \ a 20-foot-radius from a point that Rangda can see, making the area difficult\
      \ terrain for 1 minute or until Rangda uses this lair action again.  \n- The\
      \ air in the lair shimmers in a disorienting way. Up to three creatures that\
      \ Rangda can see must succeed on a DC 15 Constitution saving throw or have disadvantage\
      \ on all attack rolls until initiative count 20 on the following round.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Rangda's lair is warped by her magic, which creates\
      \ one or more of the following effects:\n\n- Within 1 mile of the lair, all\
      \ terrain is considered difficult, as boggy ground sucks at the feet of those\
      \ walking, and leafless trees are grown so thick as to make flight burdensome.\
      \ Hags, warlocks who gain their power from Rangda, and creatures native to swamps\
      \ are unaffected.  \n- Rangda can choose to see or hear through the senses of\
      \ any beast or swarm within 3 miles of her lair.  \n- Water within 1 mile of\
      \ the lair becomes tainted with the sight rot disease. Any non-native creature\
      \ drinking water in this area, even water it brought in from outside the area,\
      \ must succeed on a DC 15 Constitution saving throw or become infected. Holy\
      \ water is not infected by this effect.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the rangda can expend a use to take one of the following actions. The rangda\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Rangda makes one claw attack."
    "name": "Claw"
  - "desc": "Rangda uses her Teleport ability."
    "name": "Teleport"
  - "desc": "Rangda casts a spell."
    "name": "Spell (Costs 2 Actions)"
  - "desc": "Rangda uses her Hypnotic Sway ability, if it is available."
    "name": "Hypnotic Sway (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/rangda-demon-lord-of-witches-ccodex.png"
```
^statblock

## Environment

planar