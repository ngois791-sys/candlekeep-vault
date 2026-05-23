---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Brother Ox
---
# [Brother Ox](Mechanics\CLI\bestiary\fey/brother-ox-ccodex.md)
*Source: Creature Codex p. 24*  

*Clad in a simple, plain robe, this creature has the head of a massive ox with wide, sweeping horns and short, dark fur covering its powerfully-muscled body. It stands as still as a statue on one of its feet with the other braced against its opposite knee. The only sound it makes is the deep, rhythmic rush of its breath.*

Of all the animal lords, Brother Ox is the most contemplative, and the least likely to act despite his great power. He stands over fifteen feet tall, is strong enough to crush boulders, and moves like grass in the wind. He smells faintly of musk and incense and wears simple, homespun clothing without embellishments or adornments. His only possession is a string of wooden prayer beads. If he ever had a name other than Brother Ox, no one living remembers it and Brother Ox himself isn't telling.

## Endless Contemplation

Brother Ox lives atop the tallest mountain where the air is thin and bitter cold, filling his days with training, study, and contemplation to hone his physical and spiritual being. Despite the simple collection of books and scrolls he keeps, Brother Ox has gathered more knowledge than mortal scholars could dream. Chances are good that if a supplicant can reach Brother Ox, and convince him to help, there is almost no secret he can't uncover.

## Enigmatic Guide

Despite his vast, potentially endless, well of knowledge, Brother Ox isn't motivated to hand these pearls of wisdom out to anyone who asks. However, he has accepted the presence of the occasional pilgrim, and rarely, takes a yakirian (see page 390) or other supplicant as a long‑term student. Brother Ox is difficult to read and hasn't lost his composure in centuries. If a would-be knowledge‑seeker can survive the mountain journey and successfully locate the monastery, it might have to wait weeks or even years for Brother Ox to acknowledge its presence. Then he moves only to set the supplicant on a series of strange, menial, dangerous, or perplexing tasks before granting a request.

## Timeless Nature

Brother Ox doesn't require food, drink, or sleep.

## Brother Ox's Lair

Brother Ox's lair is a sprawling, stone monastery atop one of the tallest mountains in the world. The temple's interior is simply appointed and comfortable even for creatures not acclimated to life at extreme altitude. It contains a rock garden, martial arts practice areas, meditation chambers, a library of scrolls, sparse sleeping quarters with simple food and water, and a shrine dedicated to no particular gods.

## Animal Lords

While humanoids have vast pantheons and divine figures of every stripe, the animals of the world have much simpler forms of faith. Among each species there is always one paragon that embodies the animal spirit in a humanoid form, the better to speak to others and represent the animals in celestial councils. The [Queen of Serpents](Mechanics/CLI/bestiary/fey/queen-of-serpents-ccodex.md) speaks to the gods of the desert, and the [Queen of Birds](Mechanics/CLI/bestiary/fey/queen-of-birds-ccodex.md) holds a wide swath of territory with eyes drifting gently on updrafts throughout the world. Each animal lord sees and communicates with the members of its species in some mysterious and unknowable fashion. News from the granaries and the kitchens always finds its way to the [Mouse King's](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) ears, and news from fields of battle or of wheat inevitably lands in the remote nest of the [Lord of Vultures](Mechanics/CLI/bestiary/fey/lord-of-vultures-ccodex.md).

What do the animal lords do with their legions and their vast array of information? Some sages believe they trade this to other figures, demon and angel alike, in exchange for favors understood best as celestial currency. Others say that they merely inform their followers of dangers to avoid, rich prey to hunt, or similar concerns. In many cases, the animal lords find they have both the time and inclination to meddle occasionally in the affairs of humanoids, especially those who are particularly kind or unusually cruel to their followers.

As a group, the animal lords look after their own, and they defend their territory and their wellsprings of power against humanoid encroachment. The great argument among the animal lords themselves is whether to align themselves with the humanoid world (as the [Queen of Cats](Mechanics/CLI/bestiary/fey/queen-of-cats-ccodex.md) and, to some degree, the [Mouse King](Mechanics/CLI/bestiary/fey/mouse-king-ccodex.md) have done) or to remain outside of it (as the others have).

```statblock
"name": "Brother Ox (CCodex)"
"size": "Huge"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "187"
"hit_dice": "15d12 + 90"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "22"
  - !!int "17"
  - !!int "24"
  - !!int "19"
"speed": "60 ft."
"saves":
  - "strength": !!int "10"
  - "dexterity": !!int "9"
  - "wisdom": !!int "12"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+9"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [stunned](Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 22"
"languages": "All, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "No bovine creatures or wereboars can willingly attack Brother Ox. They\
      \ can be forced to do so through magical means."
    "name": "Bovine Passivism"
  - "desc": "If Brother Ox moves at least 20 feet straight toward a target and then\
      \ hits it with a gore attack, the target takes an extra 11 (2d10) piercing\
      \ damage. If the target is a creature, it must succeed on a DC 18 Strength saving\
      \ throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "If Brother Ox fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "Brother Ox has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Brother Ox's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "If he dies, Brother Ox's soul reforms on the Astral Plane. In 1d6 days,\
      \ it inhabits the body of another bovine on the Material Plane which becomes\
      \ Brother Ox with all of the hp and abilities thereof. Only killing every bovine\
      \ on the Material Plane will prevent this trait from functioning."
    "name": "Rejuvenation"
  - "desc": "Brother Ox can use his action to polymorph into a Huge ox, a Medium bald\
      \ human with a short, dark beard, or back into his true Huge ox-headed humanoid\
      \ form. His statistics, other than his size, are the same in each form. Any\
      \ equipment he is wearing or carrying transforms with him."
    "name": "Shapechanger"
  - "desc": "Brother Ox can communicate with any bovine creature as if they shared\
      \ a language."
    "name": "Speak with Bovines"
"actions":
  - "desc": "In ox or human form, Brother Ox makes three melee attacks. In his true\
      \ form, he makes three attacks. one with his gore and two with his unarmed strike."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d10 + 5) piercing damage."
    "name": "Gore (Ox or True Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 18 (3d8 + 5) bludgeoning damage."
    "name": "Unarmed Strike (Humanoid or True Form Only)"
  - "desc": "Brother Ox makes one unarmed strike against a creature to create an instability\
      \ within the target's essence that lasts 2d8 days. This instability is harmless\
      \ unless Brother Ox uses his action to end it early. To do so, Brother Ox and\
      \ the target must be on the same plane of existence. Brother Ox can use this\
      \ action again to force the target to make a DC 19 Constitution saving throw.\
      \ On a failure, the target is reduced to 0 hp. On a success, it takes 55 (10d10)\
      \ necrotic damage."
    "name": "Ki Disruption (Recharge 6-6)"
"reactions":
  - "desc": "When Brother Ox is hit by a ranged weapon attack, he can reduce the damage\
      \ he takes by 25 (1d10 + 20). If this reduces the damage to 0, Brother Ox\
      \ can catch the missile if it fits in one hand and he has one hand free. If\
      \ Brother Ox catches a missile in this way, he can throw the missile as a ranged\
      \ weapon attack as part of the same reaction. The missile has +10 to hit,\
      \ with a short range of 30 feet and a long range of 60 feet. On a hit, it deals\
      \ 18 (3d8 + 5) damage of a type appropriate to the missile."
    "name": "Deflect Missiles (Humanoid or True Form Only)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Brother Ox takes a lair\
      \ action to cause one of the following effects; he can't use the same effect\
      \ two rounds in a row:\n\n- Brother Ox can alter the structure of the lair.\
      \ A stone door, wall, or column appears or vanishes as Brother Ox desires. The\
      \ alteration is permanent until Brother Ox uses this lair action again to revert\
      \ it. Stone structures are composed of 5-foot-by-5-foot sections, have AC 17,\
      \ 30 hp per 5-foot section, and are immune to poison and psychic damage. If\
      \ a structure appears in a creature's space, the creature takes 3 (1d6) bludgeoning\
      \ damage and is pushed to the nearest unoccupied space of its choice. Brother\
      \ Ox can create any combination of structures totaling no more than three 5-foot-by-5-foot\
      \ sections with each use of this lair action.  \n- Brother Ox chooses one creature\
      \ he can see within 100 feet. Brother Ox is invisible to the target creature\
      \ until initiative count 20 on the following round.  \n- Brother Ox strikes\
      \ a great, spectral bell that appears for a brief moment. Each creature in a\
      \ 30-foot cone extending from Brother Ox must make a DC 15 Constitution saving\
      \ throw. On a failure, a creature takes 14 (4d6) thunder damage and is pushed\
      \ 15 feet away from Brother Ox. On a success, the creature takes half the damage\
      \ but isn't pushed.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Brother Ox's lair is warped by his presence, which\
      \ creates one or more of the following effects:\n\n- The area within 5 miles\
      \ of the lair becomes prone to blizzards that obscure sight, and the terrain\
      \ seems to shift and change as one travels. Ability checks made to avoid becoming\
      \ lost are made with disadvantage, and magic that would point the way to a destination\
      \ within 5 miles of the lair fails. Brother Ox can choose to render any number\
      \ of creatures immune to this effect or to rescind that immunity at any time.\
      \  \n- Creatures within 5 miles of the lair become more healthy and resilient\
      \ to sickness.  \n- Within the lair, circumstances are always perfect for meditation\
      \ and reflection. A creature who meditates during a short rest regains the maximum\
      \ number of hp when it spends hit dice and has advantage on its next Intelligence\
      \ or Wisdom check made before finishing a long rest.  \n\nIf Brother Ox dies,\
      \ these effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the brother ox can expend a use to take one of the following actions. The\
  \ brother ox regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Brother Ox moves up to his speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "Brother Ox regains 10 hp, is cured of all diseases, and ends one effect\
      \ lowering his ability scores or hp maximum. Brother Ox can't use this legendary\
      \ action again until the end of his next turn."
    "name": "Wholeness"
  - "desc": "Brother Ox makes one unarmed strike. If it hits a creature, the target\
      \ must succeed on a DC 19 Constitution saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Stunning Strike (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/brother-ox-ccodex.png"
```
^statblock

## Environment

hill, mountain