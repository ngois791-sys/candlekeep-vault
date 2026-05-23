---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Berchta
---
# [Berchta](Mechanics\CLI\bestiary\fey/berchta-ccodex.md)
*Source: Creature Codex p. 153*  

*The old crone smiles softly, wrinkling a face lined with years of laughter and wisdom. Her dark hair hangs in lank strings against her pristine white, simple robe.*

Berchta the Guide, Grandmother of the Wood, Bright Swan, and the Endless Spindle, is a fey lady beloved of fate. She walks the world in different guises, sometimes a maiden, others a beautiful swan, but her true form is that of the splayed-footed crone. In either of her humanoid forms, she dresses in a simple, pure white dress or robe. Mothers and children in need welcome the sight of her, and any who do those innocents harm look on Berchta with well-earned dread.

## Spinner of Fate

Berchta oversees the practice of spinning, seeing in it the warp and weft of fate. Long ago, she entered into a pact with the god of fate, gaining some knowledge of the future. In exchange, she watches the strands of fate that spin from her wheel, ensuring their proper length and twist.

## Protector of Women and Children

Berchta has a great love of children and mothers, and she goes out of her way to offer them shelter and aid whenever she spies one in need. Her aid could be as simple as arranging for a hungry child to find bread or as direct and bloody as slaying a ruffian who would do a desperate mother harm. Nothing rouses Berchta's anger more swiftly or hotter than threatening a child.

## Soul Guide

As part of her oath to uphold the proper span of fate, Berchta oversees the path of any soul in her vicinity to its proper rest. She loathes the undead, viewing them as abominations who pervert the natural course of fate. Even those who would use divine magic to restore the dead to true life might find themselves called to task by an ancient crone with a keen silver blade, demanding to know why they would risk upsetting the balance of life and death.

> [!note] Touch of Iron
> 
> Lords and ladies of the fey courts are timeless creatures, inured to many of the world's threats. A universal exception to this is weapons of cold-wrought iron. This metal undoes the very fabric of a fey creature's life as it blights their ageless flesh. A cold iron weapon is treated as magical when used against any fey creature, and is the only weapon with any hope of harming the most powerful fey lords and ladies. Cold iron weapons, however, are difficult to construct. The skill and material required to produce such a weapon doubles its price or adds 100 gp to the cost, whichever is more. Finding a smith with the skill to make a durable weapon without the aid of fire is always difficult—and finding one with the courage to anger the fey courts may be even harder.
^touch-of-iron

## Berchta's Lair

Berchta's home is a remote valley nestled high in a mountain range. The valley is full of lush plants and trees, particularly birch. A clearing in the largest birch grove holds a small cabin where she dwells.

```statblock
"name": "Berchta (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "172"
"hit_dice": "23d8 + 69"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "17"
  - !!int "16"
  - !!int "19"
  - !!int "22"
"speed": "20 ft., fly 60 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "8"
  - "intelligence": !!int "8"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 19"
"languages": "Common, Elvish, Gnomish, Druidic, Sylvan"
"cr": "16"
"traits":
  - "desc": "The berchta's innate spellcasting ability is Charisma (spell save DC\
      \ 19, +11 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\n**At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md), [scrying](Mechanics/CLI/spells/scrying-xphb.md),\
      \ [web](Mechanics/CLI/spells/web-xphb.md)\n\n**3/day each:** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [greater invisibility](Mechanics/CLI/spells/greater-invisibility-xphb.md)\n\
      \n**1/day each:** [geas](Mechanics/CLI/spells/geas-xphb.md), [legend lore](Mechanics/CLI/spells/legend-lore-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Berchta's weapon attacks are magical. When she hits with any weapon,\
      \ she deals an extra 2d8 force damage (included in the attack). In addition,\
      \ she adds her Wisdom modifier to her AC."
    "name": "Fate Touched"
  - "desc": "If Berchta fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Berchta can use her action to polymorph into a Medium human woman, a\
      \ Small swan, or back into her true form. Her statistics, other than her size\
      \ and speed, are the same in each form. Any equipment she is wearing or carrying\
      \ transforms with her. Berchta reverts to her true form if she dies."
    "name": "Shapechanger"
"actions":
  - "desc": "Berchta makes two attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage plus 9 (2d8) force damage."
    "name": "Silver Sickle (Humanoid Form Only)"
  - "desc": "*Ranged Spell Attack:* +11 to hit, range 120 ft., one target. *Hit:*\
      \ 13 (3d8) force damage. If the target is a creature, the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by fine, silver threads for 1 minute. A creature can be freed if it or another\
      \ creature takes an action to make a DC 16 Strength check and succeeds. An object\
      \ reduced to 0 hp by threads of fate is pulverized to a fine spray of dust."
    "name": "Threads of Fate"
  - "desc": "Berchta magically teleports, along with any equipment she is wearing\
      \ or carrying, up to 100 feet to an unoccupied space she can see."
    "name": "Teleport"
"reactions":
  - "desc": "When a creature Berchta can see targets her with an attack, Berchta can\
      \ force the attacker to make a DC 19 Wisdom saving throw. On a failure, the\
      \ attacker must choose a new target for the attack or choose not to make it,\
      \ wasting the attack or spell."
    "name": "Twist of Fate"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Berchta takes a lair\
      \ action to cause one of the following effects; she can't use the same effect\
      \ two rounds in a row:\n\n- Berchta slices a thread of fate, cursing a creature\
      \ she can see within 60 feet. Choose one ability score. The cursed creature\
      \ has disadvantage on attack rolls and ability checks based on that ability.\
      \ The curse lasts until removed or until Berchta uses this lair action again.\
      \  \n- Berchta lets out a call that can be heard by all within 1 mile. She summons\
      \ 4 [dire wolves](Mechanics/CLI/bestiary/beast/dire-wolf-xmm.md), 8 [wolves](Mechanics/CLI/bestiary/beast/wolf-xmm.md),\
      \ or 8 [giant owls](Mechanics/CLI/bestiary/celestial/giant-owl-xmm.md) that\
      \ act immediately and on initiative count 20 on subsequent rounds. The beasts\
      \ obey her commands and remain for 1 hour or until she uses this lair action\
      \ again.  \n- Berchta causes trees, bushes, and other vegetation to animate\
      \ in a 20-foot-radius centered on a point she can see within 100 feet. The area\
      \ becomes difficult terrain for all creatures other than Berchta and her allies,\
      \ and each creature in the area must succeed on a DC 15 Strength saving throw\
      \ or be restrained by the plants. A creature can be freed if it or another creature\
      \ takes an action to make a DC 15 Strength check and succeeds. The plants remain\
      \ for 1 minute or until Berchta uses this lair action again.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Berchta's lair is warped by her magic, which creates\
      \ one or more of the following effects:\n\n- Mothers and children within 5 miles\
      \ of Berchta's valley find nature itself assisting them. Beasts won't attack\
      \ them and circumstances guide them toward the valley.  \n- Game animals and\
      \ edible plants are plentiful in the area within 5 miles of Berchta's valley.\
      \ Any checks necessary to forage or hunt for food are made with advantage. \
      \ \n- Creatures who die within 5 miles of the lair can't become undead.  \n\n\
      If Berchta dies, these effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the berchta can expend a use to take one of the following actions. The berchta\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Berchta makes a silver sickle attack."
    "name": "Silver Sickle"
  - "desc": "Berchta uses teleport."
    "name": "Teleport"
  - "desc": "Berchta makes a threads of fate attack. If it hits, the target is affected\
      \ as if Berchta cast [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\
      \ on it."
    "name": "Unraveling Threads (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/berchta-ccodex.png"
```
^statblock

## Environment

farmland, forest, urban