---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lord of Vultures
---
# [Lord of Vultures](Mechanics\CLI\bestiary\fey/lord-of-vultures-ccodex.md)
*Source: Creature Codex p. 26*  

*This charismatic and handsome dark-skinned man has the noble bearing of a lord or king. A pair of black and gold wings grow from his back, and his bare feet are taloned like a raptor's. He wears fine silk clothing and brandishes a large, shining spear. A gold circlet sits atop his brow above his aquiline nose.*

Sampati is the immortal Lord of Vultures and King of Raptors and makes his home in a mountaintop eyrie on the highest peak of the tallest mountain. He acts as a god to vultures, eagles, rocs, and other birds of prey, protecting and safeguarding the interests of avians throughout the world. Though his domain and interests overlap with those of the Queen of Birds, Sampati and Vashnaya rarely interact. They have differing opinions on how their wards should be protected and keep out of each others' way to avoid unnecessary conflict.

## Uncommon Ally

Less reclusive than his counterpart, Sampati enjoys involving himself in the affairs of humans and their kin from time to time. He has been known to aid those brave enough to make the perilous climb to his mountain abode and will sometimes enlist the help of mortals himself, particularly if the natural order of things is at risk. If he feels these mortals cannot be entirely trusted, he will lay a geas upon them to make sure they do everything they can to complete whatever task he sets.

## Disguised Wanderer

Several times a year, Sampati travels the lands of mortals, either disguising himself as a dark-skinned human man with black and gold hair or taking the form of an enormous vulture with black and gold wings. In either guise, Sampati is always vigilant against those who seek to destroy birds of prey or their habitats and is ready to take swift and terrible action, if needed.

> [!note] Legends of Sampati in Midgard
> 
> Sampati and his brother Jatayu grew up in Khandiria centuries ago, the semi-divine sons of the God of the Rising Sun. Winged like vultures, they enjoyed flying through the sky, often challenging each other to see who could fly the highest. One day, Jatayu flew too close to the sun, and his feathers began to smolder. To stop his brother's wings from catching fire, Sampati spread his own wings, shielding Jatayu from the burning sun. He saved his brother's life, but Sampati's wings were burned to ashes. He crashed to earth and crawled wingless into a cave to seek refuge.
> 
> Many years later, the Monkey King and his kapi followers were traveling through Khandiria and passed close to Sampati's cave.The hungry Sampati leapt out, intending to devour the monkey people, but, as he was about to strike, he heard the Monkey King mention his brother's name. Amazed, Sampati learned that Jatayu had died heroically in battle against a great demon. When the Monkey King explained he and his companions were tracking the demon, Sampati told them he had seen the demon carrying off a beautiful young princess in his flying chariot and pointed the way.
> 
> Blessed for his good deed, Sampati's wings grew back, and he became the Lord of Vultures. If Sampati is ever killed, his spirit will enter the body of a bird of prey somewhere else in the world, and that bird will become the new Lord of Vultures.
^legends-of-sampati-in-midgard

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Lord of Vultures (CCodex)"
"size": "Large"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Neutral Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "16"
  - !!int "17"
  - !!int "20"
"speed": "30 ft., fly 90 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "All, telepathy 120 ft."
"cr": "12"
"traits":
  - "desc": "The lord of vultures's innate spellcasting ability is Charisma (spell\
      \ save DC 17). It can innately cast the following spells, requiring no material\
      \ components:\n\n**At will:** [animal friendship](Mechanics/CLI/spells/animal-friendship-xphb.md),\
      \ [thunderwave](Mechanics/CLI/spells/thunderwave-xphb.md)\n\n**3/day each:**\
      \ [charm person](Mechanics/CLI/spells/charm-person-xphb.md), [conjure animals](Mechanics/CLI/spells/conjure-animals-xphb.md)\
      \ (birds only, cast as a 9th-level spell), [dominate beast](Mechanics/CLI/spells/dominate-beast-xphb.md)\n\
      \n**1/day each:** [antimagic field](Mechanics/CLI/spells/antimagic-field-xphb.md),\
      \ [geas](Mechanics/CLI/spells/geas-xphb.md), [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "No bird or ravenfolk can willingly attack Sampati. They can be forced\
      \ to do so through magical means."
    "name": "Bird Passivism"
  - "desc": "Sampati has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks and can't be surprised."
    "name": "Danger Sense"
  - "desc": "If Sampati fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Sampati has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Sampati's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Sampati has advantage on attack rolls against a creature if at least\
      \ one of his allies is within 5 feet of the creature and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "If he dies, Sampati's soul reforms on the Astral Plane. In 1d6 days,\
      \ it inhabits the body of another bird of prey on the Material Plane which becomes\
      \ the Lord of Vultures with all of the hp and abilities thereof. Only killing\
      \ every bird of prey on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "Sampati can use his action to polymorph into a Huge giant vulture, a\
      \ Medium dark-skinned man with black and gold hair, or back into his true Large,\
      \ winged humanoid form. His statistics, other than his size, are the same in\
      \ each form with the exception that only Sampati's true and vulture forms retain\
      \ his flying speed. Any equipment he is wearing or carrying transforms with\
      \ him."
    "name": "Shapechanger"
  - "desc": "Sampati can communicate with birds as if they shared a language."
    "name": "Speak with Birds"
"actions":
  - "desc": "In humanoid or his true form, Sampati makes three spear attacks. In vulture\
      \ form, he makes three attacks. one with his beak and two with his talons."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +8 to hit, reach 10 ft. or range\
      \ 20/60 ft., one creature. *Hit:* 11 (2d6 + 4) piercing damage plus 3 (1d6)\
      \ radiant damage, or 13 (2d8 + 4) piercing damage plus 3 (1d6) radiant damage\
      \ if used with two hands to make a melee attack. If Sampati throws the spear,\
      \ it magically reforms in his hand immediately after the attack."
    "name": "Spear (Humanoid or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:*\
      \ 11 (3d4 + 4) piercing damage plus 3 (1d6) radiant damage."
    "name": "Beak (Vulture Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:*\
      \ 14 (3d6 + 4) slashing damage, and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 17) if it is a Huge or smaller creature and Sampati isn't already\
      \ grappling a creature. Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and takes 10 (3d6) piercing damage at the start of each of its turns."
    "name": "Talons (Vulture Form Only)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the lord of vultures can expend a use to take one of the following actions.\
  \ The lord of vultures regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Sampati moves up to half his speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "Sampati beats his wings. Each creature within 10 feet of Sampati must\
      \ succeed on a DC 17 Dexterity saving throw or take 11 (2d6 + 4) bludgeoning\
      \ damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Wing Buffet (Costs 2 Actions; True or Vulture Form Only)"
  - "desc": "Sampati flies up to his speed and makes a spear or talon attack against\
      \ one creature. If the attack hits, the target takes an extra 9 (2d8) piercing\
      \ or slashing damage. Sampati must fly at least 30 feet straight towards the\
      \ target to use this action. Sampati can't use this action if he is grappling\
      \ a creature."
    "name": "Dive Bomb (Costs 2 Actions; True or Vulture Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/lord-of-vultures-ccodex.png"
```
^statblock

## Environment

mountain