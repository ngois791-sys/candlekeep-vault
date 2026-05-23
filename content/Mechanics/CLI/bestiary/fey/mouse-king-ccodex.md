---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mouse King
---
# [Mouse King](Mechanics\CLI\bestiary\fey/mouse-king-ccodex.md)
*Source: Creature Codex p. 28*  

*Clad in a simple, plain robe, this creature has the head of a massive ox with wide, sweeping horns and short, dark fur covering its powerfully-muscled body. It stands as still as a statue on one of its feet with the other braced against its opposite knee. The only sound it makes is the deep, rhythmic rush of its breath.*

## King of Rodents

The Mouse King is the King of all rodents, and he spends his days looking after the concerns of rodents on the Material, Astral, and Ethereal Planes. When slain, he is reborn within a week. As king, he often sees the taint of [Chittr'k'k's](Mechanics/CLI/bestiary/fiend/chittrkk-demon-lord-of-rats-ccodex.md) influence on his subjects. Thankfully, his people's ability to rapidly multiply leaves him with plenty of resources to defend his kind against the machinations of the Demon Lord.

## In the Company of Thieves

The Mouse King can always be found at the head of a guild of thieves. He schemes to make sure his wealth continues to grow, which often means entering into conflict with other gangs.

## Civic-Minded Scoundrel

When it comes to making money, he takes into account what is best for the long‑term prosperity of the city in which he operates, which he rightly believes is integral to his own success and that of his subjects. He is a great proponent of trade of all kinds, and his subjects have found their way to every corner of the world in the company of sailors, merchants, and drovers.

> [!note] Mouse King in Midgard
> 
> Myzi the First and Lord of the Undercity resides in Zobeck. His interests and, some say, his mortality are tied to that city. When Myzi dies, his spirit inhabits the body of another mouse or rat in Zobeck, transforming it within a week into his next incarnation. He strives to help Zobeck prosper as it is good for his people and his coffers. He uses the city's trade routes and river barges to take his informants far and wide.
> 
> Another Mouse King lives in the cities of Midgard outside of Zobeck. This Mouse King, like the other Animal Lords, is focused entirely on the preservation and betterment of his own kind. He strives to promote coexistence of humanoids and his people by keeping his feet both in the criminal underground and in the local political arena. Though many wonder to which he is truly loyal, all agree he aims to do what is best for his city in the long-term.
> 
> No one has ever seen Myzi and the Mouse King side‑by‑side, leading some to believe they are one and the same. When asked, Myzi and the Mouse King both refuse to comment on the matter or acknowledge the existence of the other.
^mouse-king-in-midgard

## The Mouse King's Lair

The Mouse King lives in the alleys and sewers of cities. Cities with a high amount of underground and criminal activity are especially attractive to the Mouse King. His lair is full of twisting sewer pipes of various sizes and dark alleyways leading to dead ends or in circles. Some of the pipes and alleyways lead to sewers and alleys in different cities, placing the Mouse King's lair in a space between cities.

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Mouse King (CCodex)"
"size": "Small"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d6 + 80"
"modifier": !!int "6"
"stats":
  - !!int "18"
  - !!int "23"
  - !!int "18"
  - !!int "20"
  - !!int "18"
  - !!int "18"
"speed": "40 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "8"
  - "wisdom": !!int "8"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+14"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+9"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+8"
  - "name": "[Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+14"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+14"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+8"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "All, telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "The mouse king's innate spellcasting ability is Charisma (spell save\
      \ DC 16). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [blur](Mechanics/CLI/spells/blur-xphb.md), [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [detect evil and good](Mechanics/CLI/spells/detect-evil-and-good-xphb.md)\n\
      \n**2/day each:** [etherealness](Mechanics/CLI/spells/etherealness-xphb.md)\n\
      \n**1/day each:** [astral projection](Mechanics/CLI/spells/astral-projection-xphb.md),\
      \ [teleport](Mechanics/CLI/spells/teleport-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The Mouse King has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Keen Sight"
  - "desc": "If the Mouse King fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Mouse King has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The Mouse King's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If he dies, the Mouse King's soul reforms on the Astral Plane. In 1d6\
      \ days, it inhabits the body of another mouse or rat on the Material Plane which\
      \ becomes the Mouse King with all of the hp and abilities thereof. Only killing\
      \ every mouse and rat on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "No rodents, ratfolk, or wererats can willingly attack the Mouse King.\
      \ They can be forced to do so through magical means."
    "name": "Rodent Passivism"
  - "desc": "The Mouse King can use his action to polymorph into a Medium black-haired\
      \ human woman with dark skin and copper eyes or a Small white-haired halfling\
      \ man with pale skin, dark eyes and a long moustache, a Medium mouse-humanoid\
      \ hybrid, or back into his true Small mouse form. His statistics, other than\
      \ his size, are the same in each form with the exception that only his hybrid\
      \ and true forms retain his climbing speed. Any equipment he is wearing or carrying\
      \ transforms with him."
    "name": "Shapechanger"
  - "desc": "The Mouse King can communicate with rodents as if they shared a language."
    "name": "Speak with Rodents"
  - "desc": "The Mouse King wears a ring of spell turning."
    "name": "Special Equipment"
"actions":
  - "desc": "In mouse form, the Mouse King makes two bite attacks. In humanoid form,\
      \ he makes three king's blade attacks. In hybrid form, he makes three attacks.\
      \ two with his king's blade and one with his bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 15 (2d8 + 6) piercing damage."
    "name": "King's Blade (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) piercing damage plus 7 (2d6) poison damage. If the target\
      \ is a creature, it must succeed on a DC 16 Constitution saving throw or become\
      \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) for 1 hour."
    "name": "Bite (Mouse or Hybrid Form Only)"
  - "desc": "The Mouse King magically calls 2d4 [swarms of rats](Mechanics/CLI/bestiary/beast/swarm-of-rats-xmm.md).\
      \ In an urban environment, he can call 1d4 [wererats](Mechanics/CLI/bestiary/monstrosity/wererat-xmm.md)\
      \ instead. The called creatures arrive in 1d4 rounds, acting as allies of\
      \ the Mouse King and obeying his spoken commands. The creatures remain for 1\
      \ hour, until the Mouse King dies, or until the Mouse King dismisses them as\
      \ a bonus action."
    "name": "Summon Rodents (2/Day)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the Mouse King takes\
      \ a lair action to cause one of the following effects; he can't use the same\
      \ effect two rounds in a row:\n\n- The Mouse King raises his arms and squeals,\
      \ calling swarms of rodents from the environment to trip his enemies. Each creature\
      \ within 60 feet of the Mouse King must succeed on a DC 16 Dexterity saving\
      \ throw or be knocked prone.  \n- The Mouse King chooses a point within 120\
      \ feet that he can see. A wave of spectral rodents emerges from the ground at\
      \ that point and attacks all creatures in a 30-foot-radius centered on that\
      \ point. Each creature in that area must succeed on a DC 16 Constitution saving\
      \ throw or take 10 (3d6) poison damage and be poisoned for 1 minute.  \n-\
      \ Each creature of the Mouse King's choice within 60 feet of him must make a\
      \ DC 16 Wisdom saving throw. On a failure, the creature is transformed into\
      \ a mouse as if affected by the polymorph spell. A creature can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \ If a creature's saving throw is successful or the effect ends for it, the\
      \ creature is immune to this effect for the next 24 hours.  "
    "name": ""
"regional_effects":
  - "desc": "The section of a city containing the Mouse King's lair is warped by his\
      \ magic, which creates one or more of the following effects:\n\n- The area within\
      \ 1 mile of the lair attracts hundreds of mice and rats. The Mouse King can\
      \ choose to see or hear through the senses of any mouse or rat in this area\
      \ and can speak through it while doing so.  \n- Mice and rats within 1 mile\
      \ of the lair are more resistant to disease. They never catch, carry, or spread\
      \ any diseases unless the Mouse King wishes it.  \n- Illicit deals are easier\
      \ to hide near the lair. Dexterity ([Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand))\
      \ checks made within 1 mile of the lair have advantage, and Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ or Intelligence ([Investigation](Mechanics/CLI/rules/skills.md#Investigation))\
      \ checks made to notice or find illegal dealings have disadvantage.  \n\nIf\
      \ the Mouse King dies, these effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the mouse king can expend a use to take one of the following actions. The\
  \ mouse king regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Mouse King makes one king's blade attack."
    "name": "King's Blade"
  - "desc": "The Mouse King moves up to his speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "The Mouse King casts one innate spell."
    "name": "Quick Casting (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/mouse-king-ccodex.png"
```
^statblock

## Environment

urban