---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Queen of Cats
---
# [Queen of Cats](Mechanics\CLI\bestiary\fey/queen-of-cats-ccodex.md)
*Source: Creature Codex p. 32*  

*The taller-than-average woman steps out of the shadows, her gown whispering. Her head is that of a sleek, black cat with gleaming, green eyes. The nails on her fingers and toes are long, curved, and sharp.*

Khastiri is the Queen of Cats, the Shadow Guardian, and Herald of the Moon. She moves, often unseen, in all walks of mortal and fey life. Her true form is that of a statuesque woman nearly 10 feet tall with the head of a black cat. She prefers to move about at night under the moon. Her wanderings take her to places where danger and unsuspecting people are likely to cross paths, and her curious nature often leads her in unexpected directions. She carries the radiance and purity of moonlight into the dark, wielding it as a weapon as keen as her claws against her foes.

## Protector in the Dark

Those who strike out in search of adventure learn quickly that the shadows and crevices of the world hide many dangers. Most people have no defense against the worst things that prowl the darkness, the things that slip into the world from the places beyond. The Queen of Cats and her followers stand in opposition to those dark influences. Through the ages, her midnight prowling in cat form, and subsequent battles with creatures from the outer darkness, have given rise to the folk tales of cats protecting their owners from evil spirits.

## Diplomat and Spy

The Queen of Cats saunters through the world slipping from one stratum of society to another with grace and ease. Either as an unassuming black cat in back alleys or a woman of bearing regal enough to blend seamlessly in imperial courts, she finds forces of corruption and darkness wherever they lurk.

Befitting her fluid mobility through nearly any population, she often carries word from deities or powerful beings tied to the moon. Rumor holds that she is a confidant, or possibly a lover, of the the Moonlit King (Tome of Beasts, p. 190). The Queen of Cats is one of the few creatures who can slip through the twisted mazes surrounding his home. If his worsening madness is any concern to her, she doesn't show it.

## The Queen of Cats' Lair

The Queen of Cats lives in a luxurious extra dimensional palace called Bubastal. The entrance to the palace is difficult to find, often hidden in alleys, sewer entrances, or normally-empty alcoves between buildings. The only constant is the doorway is always in a city. The palace itself is full of carpets and soft furniture, cushions, and many potted plants. The air smells of fragrant herbs, particularly catnip, and incense. Small platforms, steps, and walkways make the entire palace an inquisitive cat's paradise, and all the décor features tassels and other dangling adornments.

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Queen of Cats (CCodex)"
"size": "Large"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "23d10 + 69"
"modifier": !!int "6"
"stats":
  - !!int "15"
  - !!int "22"
  - !!int "17"
  - !!int "16"
  - !!int "18"
  - !!int "21"
"speed": "50 ft., climb 40 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "8"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+16"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+11"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 19"
"languages": "All, telepathy 120 ft."
"cr": "15"
"traits":
  - "desc": "The queen of cats's innate spellcasting ability is Charisma (spell save\
      \ DC 19). It can innately cast the following spells, requiring only verbal components:\n\
      \n**At will:** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [invisibility](Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only)\n\n**3/day each:** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [pass without trace](Mechanics/CLI/spells/pass-without-trace-xphb.md)\n\n\
      **1/day each:** [maze](Mechanics/CLI/spells/maze-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "No cats or weretigers can willingly attack the Queen of Cats. They can\
      \ be forced to do so through magical means."
    "name": "Cat Passivism"
  - "desc": "The Queen of Cats has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "If the Queen of Cats fails a saving throw, she can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The Queen of Cats has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The Queen of Cats' weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If the Queen of Cats moves at least 20 feet straight toward a creature\
      \ and then hits it with a claw attack on the same turn, that target must succeed\
      \ on a DC 19 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Pounce"
  - "desc": "If she dies, the Queen of Cats' soul reforms on the Astral Plane. In\
      \ 1d6 days, it inhabits the body of another cat on the Material Plane which\
      \ becomes the Queen of Cats with all of the hp and abilities thereof. Only killing\
      \ every cat on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "When she falls, the Queen of Cats lands on her feet and takes no damage."
    "name": "Safe Fall"
  - "desc": "The Queen of Cats can use her action to polymorph into a Medium human\
      \ woman, a Small cat, or back into her true Large, cat-headed humanoid form.\
      \ Her statistics, other than her size, are the same in each form with the exception\
      \ that only her cat and true forms retain her climbing speed. Any equipment\
      \ she is wearing or carrying transforms with her."
    "name": "Shapechanger"
  - "desc": "The Queen of Cats can communicate with cats as if they shared a language."
    "name": "Speak with Felines"
"actions":
  - "desc": "In human form, the Queen of Cats makes two moon strike attacks. In cat\
      \ form or her true form, she makes three attacks. two with her claws or moon\
      \ strike and one with her bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 15 (2d8 + 6) piercing damage."
    "name": "Bite (Cat or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) slashing damage plus 9 (2d8) radiant damage."
    "name": "Claw (Cat or True Form Only)"
  - "desc": "*Ranged Spell Attack:* +10 to hit, range 90 ft., one target. *Hit:*\
      \ 22 (4d10) radiant damage. The target must succeed on a DC 18 Dexterity saving\
      \ throw or shed dim light in a 5-foot radius until the start of the Queen's\
      \ next turn. As long as it glows, the target gains no benefit from being [invisible](Mechanics/CLI/rules/conditions.md#Invisible),\
      \ can't hide, and the next attack made against the target has advantage."
    "name": "Moon Strike"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the Queen of Cats takes\
      \ a lair action to cause one of the following effects; she can't use the same\
      \ effect two rounds in a row:\n\n- The Queen of Cats sounds a growling cry.\
      \ She summons 4 [tigers](Mechanics/CLI/bestiary/beast/tiger-xmm.md) or 8 [panthers](Mechanics/CLI/bestiary/beast/panther-xmm.md)\
      \ in unoccupied spaces she can see. The creatures act immediately and on initiative\
      \ count 20 in subsequent rounds. The creatures follow the Queen's commands and\
      \ remain for 1 hour or until the Queen uses this lair action again.  \n- The\
      \ Queen of Cats creates an area of magical darkness in a 20-foot-radius centered\
      \ on a point she can see within 120 feet. This action works like the darkness\
      \ spell except it dispels light created by a 4th level or lower spell if it\
      \ overlaps an area of such light. The darkness lasts until the Queen of Cats\
      \ dies, or until she uses this lair action again.  \n- The Queen of Cats creates\
      \ a magical beam of moonlight in a 15-foot-radius, 30-foot-high cylinder centered\
      \ on a point she can see within 120 feet. Each creature in the area becomes\
      \ vulnerable to radiant damage until initiative count 20 on the following round.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region containing the Queen of Cats' lair is warped by her magic,\
      \ which creates one or more of the following effects:\n\n- The area within 1\
      \ mile of the lair attracts hundreds of stray cats. The Queen of Cats can choose\
      \ to see or hear through the senses of any cat in this area and can speak through\
      \ it while doing so.  \n- Shadows grow deeper within 1 mile of the lair. Dexterity\
      \ ([Stealth](Mechanics/CLI/rules/skills.md#Stealth)) checks have advantage within\
      \ that area. The Queen of Cats can suppress this effect in any area she can\
      \ see (this doesn't require an action).  \n- Within 1 mile of the lair at night,\
      \ no matter the weather, there is always a clear patch in the sky that reveals\
      \ the moon. During any moon phase other than a new moon or lunar eclipse, this\
      \ area is dimly lit by moonlight.  \n\nIf the Queen of Cats dies, these effects\
      \ fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the queen of cats can expend a use to take one of the following actions.\
  \ The queen of cats regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The Queen of Cats moves up to her speed, jumping or climbing over obstacles\
      \ in the way. Difficult terrain caused by urban or forested terrain features\
      \ doesn't cost her extra movement when she leaps."
    "name": "Leap"
  - "desc": "The Queen of Cats makes a claw attack."
    "name": "Swipe (Cat or True Form Only)"
  - "desc": "The Queen of Cats moves up to her speed and can Hide."
    "name": "Scurry (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/queen-of-cats-ccodex.png"
```
^statblock

## Environment

urban