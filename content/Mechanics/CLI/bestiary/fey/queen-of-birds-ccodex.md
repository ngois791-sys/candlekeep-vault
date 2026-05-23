---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Queen of Birds
---
# [Queen of Birds](Mechanics\CLI\bestiary\fey/queen-of-birds-ccodex.md)
*Source: Creature Codex p. 30*  

*Brightly-colored wings shimmer in the sunlight as the tall woman folds them against her body. Her piercing, jewel‑tone eyes glare down her long nose at those unfortunate enough to be bound to the land, her spear crackling with lightning.*

Vashnaya the Swift and Wise is the Queen of Birds and Mistress of Wind and Sky. She rules the winds from her palace atop its delicate, impossibly thin spire, mistress of all she surveys. She soars on the winds that blow far above the ground, looking down on the world from on high. Warlords and rulers covet her favor and the information she gleans, while soldiers fear the thunder strike of her spear.

## Words on the Wind

Birds of all sorts fly from far and wide, shifting their normal migratory patterns to visit the Queen of Birds. She adores their calls and songs but not only for their beauty. The Queen can understand the birds, and they enjoy telling her about everything they've seen and heard. Through these feathered informants, the Queen learns much of what transpires for many miles around her lair. Given enough time, she can learn about events on the far side of the world.

## Commanding and Proud

The Queen of Birds sees herself as above all others, literally and figuratively. Other beings with the ability to fly sometimes visit her palace in hopes to obtain her advice. Reaching the palace is the first test the Queen places before any who would seek her favor; anyone who can't reach her abode isn't worth her time. Those who do reach her home and show proper deference to her station and wisdom might earn her favor. Any who forget their place might find themselves suddenly shown out of the palace and to the several-hundred-foot plummet to the ground.

## The Queen of Birds' Lair

The Queen of Birds' lair is a strange sight. A thin stone spire only three feet wide rises from the ground to 500 feet in the air. Impossibly perched atop this spire is a palace with lush gardens, terraces, and open galleries. The Queen holds court in the palace Haval, surrounded by birds of all varieties and bird-like fey and humanoids such as ravenfolk.

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Queen of Birds (CCodex)"
"size": "Large"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"modifier": !!int "6"
"stats":
  - !!int "17"
  - !!int "22"
  - !!int "19"
  - !!int "18"
  - !!int "22"
  - !!int "21"
"speed": "40 ft., fly 90 ft."
"saves":
  - "strength": !!int "8"
  - "wisdom": !!int "11"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+11"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "lightning, thunder"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 21"
"languages": "All, telepathy 120 ft."
"cr": "14"
"traits":
  - "desc": "The queen of birds's innate spellcasting ability is Charisma (spell save\
      \ DC 18, +10 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring only verbal components:\n\n**At will:** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [gust of wind](Mechanics/CLI/spells/gust-of-wind-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3/day each:** [chain lightning](Mechanics/CLI/spells/chain-lightning-xphb.md),\
      \ [counterspell](Mechanics/CLI/spells/counterspell-xphb.md)\n\n**1/day each:**\
      \ [control weather](Mechanics/CLI/spells/control-weather-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "No bird or ravenfolk can willingly attack the Queen. They can be forced\
      \ to do so through magical means."
    "name": "Bird Passivism"
  - "desc": "The Queen of Birds doesn't provoke an opportunity attack when she flies\
      \ out of an enemy's reach."
    "name": "Flyby"
  - "desc": "If the Queen of Birds fails a saving throw, she can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "The Queen of Birds has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "If she dies, the Queen of Birds' soul reforms on the Astral Plane. In\
      \ 1d6 days, it inhabits the body of another bird on the Material Plane which\
      \ becomes the Queen of Birds with all of the hp and abilities thereof. Only\
      \ killing every bird on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "The Queen of Birds can use her action to polymorph into a Large jewel-toned\
      \ eagle, a Medium long-haired elven woman, or back into her true Large, winged\
      \ humanoid form. Her statistics, other than her size, are the same in each form\
      \ with the exception that only her true and eagle forms retain her flying speed.\
      \ Any equipment she is wearing or carrying transforms with her."
    "name": "Shapechanger"
  - "desc": "The Queen of Birds can communicate with birds as if they shared a language."
    "name": "Speak with Birds"
  - "desc": "The Queen of Birds' weapon attacks are magical. When she hits with a\
      \ weapon attack, the attack deals an extra 2d8 damage of her choice of lightning\
      \ or thunder damage (included in the attack)."
    "name": "Storm Strike Weapons"
"actions":
  - "desc": "In eagle or humanoid form, the Queen of Birds makes two attacks. In her\
      \ true form, she makes three attacks. one with her talons and two with her spear."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +11 to hit, reach 5 ft. or range\
      \ 100/300 ft., one target. *Hit:* 13 (2d6 + 6) piercing damage plus 9 (2d8)\
      \ lightning or thunder damage, or 15 (2d8 + 6) piercing damage plus 9 (2d8)\
      \ lightning or thunder damage if used with two hands to make a melee attack.\
      \ If the Queen of Birds throws her storm spear, it magically reforms in her\
      \ hand immediately after the attack."
    "name": "Storm Spear (Humanoid or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 11 (2d4 + 6) slashing damage plus 9 (2d8) lightning or thunder damage.\
      \ If the target is a Medium or smaller creature, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 18). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ the Queen of Birds can automatically hit the target with her talons, and she\
      \ can't make talons attacks against other targets. When the Queen of Birds moves,\
      \ any Medium or smaller target she is grappling moves with her."
    "name": "Talons (Eagle or True Form Only)"
"reactions":
  - "desc": "The Queen of Birds adds 5 to her AC against one melee weapon attack that\
      \ would hit her. To do so, the Queen of Birds must see the attacker and be wielding\
      \ a melee weapon."
    "name": "Parry"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the Queen of Birds takes\
      \ a lair action to cause one of the following effects; she can't use the same\
      \ effect two rounds in a row:\n\n- The Queen of Birds sounds a piercing cry.\
      \ She summons 4 [giant eagles](Mechanics/CLI/bestiary/celestial/giant-eagle-xmm.md)\
      \ or 16 [bloodhawks](Mechanics/CLI/bestiary/beast/blood-hawk-xmm.md) in unoccupied\
      \ spaces she can see within 120 feet. The creatures act immediately and on initiative\
      \ count 20 in subsequent rounds. The creatures follow the Queen's commands and\
      \ remain for 1 hour or until the Queen uses this lair action again.  \n- The\
      \ Queen of Birds summons a 20-foot-radius sphere of brightly-colored songbirds\
      \ centered on a point she can see within 120 feet. Each creature other than\
      \ the Queen of Birds in the sphere when it appears or that ends its turn in\
      \ the sphere must succeed on a DC 15 Constitution saving throw or lose concentration\
      \ and spend its action that turn fending off the birds. Creatures within the\
      \ area are deafened. The birds last until initiative count 20 on the following\
      \ round.  \n- Two 5-foot-radius, 30-foot-tall cylinders of swirling air magically\
      \ form on points the Queen of Birds can see within 120 feet. Each creature other\
      \ than the Queen in a whirlwind when it appears or that ends its turn in a whirlwind\
      \ must succeed on a DC 15 Strength saving throw or be restrained by it. The\
      \ whirlwinds last for 1 minute or until the Queen uses this lair action again.\
      \ A creature can be freed if it or another creature takes an action to make\
      \ a DC 15 Strength check and succeeds.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a legendary Queen of Birds' lair is warped by the\
      \ Queen's magic, which creates one or more of the following effects:\n\n- The\
      \ area within 1 mile of the lair attracts birds of all varieties. They fill\
      \ the air with their songs and perch on trees and buildings. The Queen of Birds\
      \ can choose to see or hear through the senses of any bird in this area and\
      \ can speak through it while doing so.  \n- The weather within 6 miles of the\
      \ lair is clear with light winds unless the Queen of Birds chooses to let it\
      \ follow the surrounding weather patterns.  \n- Birds within 1 mile of the lair\
      \ reflect the Queen's mood. When she is content, they sing happily. If she is\
      \ displeased, they stare menacingly and grow eerily silent.  \n\nIf the Queen\
      \ of Birds dies, these effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the queen of birds can expend a use to take one of the following actions.\
  \ The queen of birds regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Queen of Birds flies up to her flying speed."
    "name": "Soar (Eagle or True Form Only)"
  - "desc": "The Queen of Birds makes a storm spear attack."
    "name": "Storm Spear (Humanoid or True Form Only)"
  - "desc": "The Queen of Birds makes an attack with her talons. If the attack htis,\
      \ she can fly up to half her speed."
    "name": "Swooping Death (Costs 2 Actions; Eagle or True Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/queen-of-birds-ccodex.png"
```
^statblock

## Environment

mountain