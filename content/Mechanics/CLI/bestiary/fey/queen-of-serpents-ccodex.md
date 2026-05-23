---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Queen of Serpents
---
# [Queen of Serpents](Mechanics\CLI\bestiary\fey/queen-of-serpents-ccodex.md)
*Source: Creature Codex p. 34*  

*This brown-skinned, black-haired woman of regal bearing has her hair up and wears a gold tiara. She is wrapped in a cloak of snake scales, bearing a design like the spectacle markings on a king cobra.*

## Reclusive Seer

Shahmaran the Wise, as she is known in the lands near her home, is an oracle of minor fame. She delivers advice on matters material and mystical and has the favor of the benevolent desert gods. She seldom leaves the ancient stone chambers carved into her mountain home, but those seeking her counsel arrive with enough frequency to keep her informed of the outside world. They call her "the Serpent-Kissed;" her abode is awash with serpents, yet no one comes to harm there unless they seek to do harm to Shahmaran.

## Queen of Serpents

Known only to a few, Shahmaran is also an animal lord, the Queen of Serpents, who bears the mantle of protector of such creatures and treats with the gods on their behalf. The association of evil with serpents makes this a difficult task, and she secretly spends much of her time away from her home on errands and missions to keep her charges from dangers that threaten their existence and reputation. She is the only Queen of Serpents, and when she is killed a new queen rises within days.

## Civic Mediator

The Queen of Serpents sees a connection between the well-being of her charges and that of humanoids in general. She's noted that humans in particular only begin worshipping serpents in undesirable ways or killing them in droves when the humans' own fortunes begin to flag. Therefore, Shahmaran, on occasion, intercedes to restore order where there is chaos among humans, though she does so while attempting to conceal her involvement.

## The Queen of Serpents' Lair

The Queen of Serpents resides in an ancient stone labyrinth deep in a mountain between a rainforest and a desert. In the winter months and during the rainy season, she can be found in her lair surrounded by tens of thousands of hibernating snakes. During this time, she relies heavily on information from her non-serpentine sources. When the weather changes, she often exits her lair to interact with the humanoid settlements nearby.

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Queen of Serpents (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"modifier": !!int "5"
"stats":
  - !!int "22"
  - !!int "20"
  - !!int "18"
  - !!int "18"
  - !!int "21"
  - !!int "22"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "9"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+8"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+10"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 19"
"languages": "All, telepathy 120 ft."
"cr": "12"
"traits":
  - "desc": "The queen of serpents's innate spellcasting ability is Charisma (spell\
      \ save DC 18). It can innately cast the following spells, requiring no material\
      \ components:\n\n**At will:** [pass without trace](Mechanics/CLI/spells/pass-without-trace-xphb.md),\
      \ [purify food and drink](Mechanics/CLI/spells/purify-food-and-drink-xphb.md),\
      \ [protection from poison](Mechanics/CLI/spells/protection-from-poison-xphb.md)\n\
      \n**3/day each:** [darkness](Mechanics/CLI/spells/darkness-xphb.md), [scrying](Mechanics/CLI/spells/scrying-xphb.md)\n\
      \n**2/day each:** [etherealness](Mechanics/CLI/spells/etherealness-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)\n\n\
      **1/day each:** [astral projection](Mechanics/CLI/spells/astral-projection-xphb.md),\
      \ [teleport](Mechanics/CLI/spells/teleport-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The Queen of Serpents can grant a single creature a +1 enhancement to\
      \ Wisdom which lasts until the creature harms a reptile of any kind. Only one\
      \ creature may have this enhancement at any time."
    "name": "Bestowal of Trust"
  - "desc": "The Queen of Serpents has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "If the Queen of Serpents fails a saving throw, she can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Queen of Serpents has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The Queen of Serpents' weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If she dies, the Queen of Serpents' soul reforms on the Astral Plane.\
      \ In 1d6 days, it inhabits the body of another serpent on the Material Plane\
      \ which becomes the Queen of Serpents, with all of the hp and abilities thereof.\
      \ Only killing every serpent on the Material Plane will prevent this trait from\
      \ functioning."
    "name": "Rejuvenation"
  - "desc": "No serpents can willingly attack the Queen of Serpents. They can be forced\
      \ to do so through magical means."
    "name": "Serpent Passivism"
  - "desc": "The Queen of Serpents can communicate with serpents as if they shared\
      \ a language."
    "name": "Speak with Serpents"
  - "desc": "The Queen of Serpents can use her action to polymorph into a Large [constrictor\
      \ snake](Mechanics/CLI/bestiary/beast/constrictor-snake-xmm.md), a Medium human\
      \ woman of middle age, or back into her true human-snake hybrid form. Her statistics,\
      \ other than her size, are the same in each form with the exception that only\
      \ her snake and true forms retain her climbing and swimming speeds. Any equipment\
      \ she is wearing or carrying transforms with her."
    "name": "Shapechanger"
"actions":
  - "desc": "In human form, the Queen of Serpents makes three shortsword attacks.\
      \ In her true form, she makes two attacks. one with her bite and one with her\
      \ shortsword."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 27 (6d6 + 6) piercing damage, and the target must make a DC 16 Constitution\
      \ saving throw, taking 35 (10d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Bite (Snake or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one creature. *Hit:*\
      \ 9 (1d6 + 6) piercing damage."
    "name": "Shortsword (Human or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one creature. *Hit:*\
      \ 27 (6d6 + 6) bludgeoning damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 17) if it is a Large or smaller creature. Until this grapple ends,\
      \ the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the Queen of Serpents can't constrict another target."
    "name": "Constrict (Snake or True Form Only)"
  - "desc": "The Queen of Serpents targets up to six creatures that she can see within\
      \ 60 feet of her. Each creature must succeed on a DC 18 Charisma saving throw\
      \ or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) for 10 minutes.\
      \ The target is no longer [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ if it takes damage or another creature takes an action to shake it. If a creature's\
      \ saving throw is successful, the creature is immune to the Queen of Serpents'\
      \ Mesmerizing Gaze for the next 24 hours."
    "name": "Mesmerizing Gaze (Recharge 5-6)"
"regional_effects":
  - "desc": "The mountain where the Queen of Serpents lives is warped by her presence,\
      \ which creates one or more of the following effects:\n\n- The area within 5\
      \ miles of the lair attracts thousands of snakes. The Queen of Serpents can\
      \ choose to see or hear through the senses of any snake in this area and can\
      \ speak through it while doing so.  \n- Snakes and serpentine creatures within\
      \ 5 miles of the Queen of Serpents' lair have advantage on all Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide.  \n- The Queen of Serpents leaves no physical evidence\
      \ of her passage when within 1 mile of her lair unless she wishes to. In addition,\
      \ creatures and plants native to her domain don't cause her harm or cost her\
      \ extra movement when she moves through the area.  \n\nIf the Queen of Serpents\
      \ dies, these effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the queen of serpents can expend a use to take one of the following actions.\
  \ The queen of serpents regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Queen of Serpents makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The Queen of Serpents moves up to her speed without provoking opportunity\
      \ attacks."
    "name": "Move"
  - "desc": "The Queen of Serpents gets a brief glimpse of the immediate future, gaining\
      \ advantage on attack rolls and Dexterity-based saving throws until the end\
      \ of her next turn."
    "name": "Precognition (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/queen-of-serpents-ccodex.png"
```
^statblock

## Environment

mountain