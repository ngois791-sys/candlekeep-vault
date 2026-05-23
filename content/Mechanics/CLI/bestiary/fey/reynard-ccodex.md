---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Reynard
---
# [Reynard](Mechanics\CLI\bestiary\fey/reynard-ccodex.md)
*Source: Creature Codex p. 155*  

*A brightly dressed figure wears a rakish wide-brimmed hat. The figure has a blend of human and fox features, smiling as it draws its rapier from the sheath at its hip.*

Reynard, the Fox Lord and the Laughing Trickster, is a man‑sized hybrid creature that blends a humanoid form with the features of a fox. In his true form, his body is covered in short, smooth red fur, and he has a bushy tail with a white tip. In any form, his eyes are the bright yellow-green of spring buds. He delights in leading hunters on merry chases, leaving them hopelessly lost in the woods surrounding his home. He sometimes makes it a game to strand such a group indefinitely, until they starve to death.

## Irreverent Jester

Reynard can't stand people who are full of themselves. This group automatically includes all rulers and authority figures, and he sees it as a personal mission to help such stodgy folk loosen up and enjoy life. He's usually oblivious to the disarray and outright danger his pranks, meant to help them unwind, ultimately wreak on their lives.

## Master of Hidden Paths

Reynard knows a vast number of secret paths and shortcuts, which he regularly uses to escape hunters, adventurers, and revenge from fey more powerful than himself who don't appreciate his sense of humor. Tales tell that the paths and burrows of Reynard's home can lead anywhere in the multiverse.

> [!note] Reynard and the Other Fey Lords & Ladies
> 
> Reynard is fairly solitary and visits fey courts only occasionally, though he enjoys them immensely. Most of the time, he is welcomed formally, asked to behave, and then thrown out when things go horribly wrong. The Lord of the Hunt (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), Reynard's implacable foe and rival, considers the Fox Lord a worthless and selfish creature. However, some of this is surely professional jealousy; Reynard prides himself on avoiding the Wild Hunt with ease and aplomb. The Snow Queen is occasionally friendly to Reynard, known to feed him roast winter hares fresh from the spit in exchange for diverting jokes, gossip, and (if rumor be believed) kisses, gifts, and endearments best left to those involved—at other times, she harries him with constant storms, snow, and frost. The Bear King finds Reynard tiresome and frivolous after a day or a week, though the two do enjoy occasional evenings of song and story together. The Queen of Night and Magic considers Reynard a foolish, foppish, and deeply unreliable Fey Lord, and she trusts him with nothing. The Queen of Witches likewise has relatively little good to say about Reynard, though he claims this is because he often gets the better of her in illusions and witchery. Berchta, by contrast, seems to be the one Fey Lady to truly see some good in Reynard. Because of her ability to see and mend fate, she occasionally entrusts Reynard with an important task—and he has never yet disappointed her.
^reynard-and-the-other-fey-lords-ladies

## Reynard's Lair

Reynard lives in Malperdy, an underground manor of twisted hallways, burrow-like tunnels, and secret chambers. When outmatched, he makes for one of the many bolt-hole entrances to Malperdy, intent on leaving his pursuers hopelessly lost in its halls. If the tales are true, Malperdy's tunnels and hallways lead to distant locations as well as to other planes of existence.

```statblock
"name": "Reynard (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "19"
  - !!int "14"
  - !!int "18"
  - !!int "17"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[grappled](Mechanics/CLI/rules/conditions.md#Grappled), [restrained](Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 10 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 60 ft., passive Perception 13"
"languages": "Common, Sylvan"
"cr": "12"
"traits":
  - "desc": "If Reynard fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Reynard's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Reynard can use his action to polymorph into a Small fox, a Medium human,\
      \ or back into his true hybrid form. His statistics, other than his size and\
      \ speed, are the same in each form. Any equipment he is wearing or carrying\
      \ transforms with him. Reynard reverts to his true form if he dies."
    "name": "Shapechanger"
"actions":
  - "desc": "In human form, Reynard makes two rapier attacks. In hybrid form, he makes\
      \ two attacks. one with his bite and one with his rapier."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage plus 7 (2d6) psychic damage. If the target is\
      \ a creature, it must succeed on a DC 16 Strength saving throw or be knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Bite (Fox or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 16 Constitution saving throw or its speed is halved. The effect ends\
      \ if the creature receives magical healing, or if a creature uses an action\
      \ to make a DC 14 Wisdom ([Medicine](Mechanics/CLI/rules/skills.md#Medicine))\
      \ check and succeeds."
    "name": "Rapier (Humanoid or Hybrid Form Only)"
  - "desc": "Reynard magically turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until he attacks, or until his concentration ends (as if concentrating on\
      \ a spell). Any equipment he wears or carries is [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ with him."
    "name": "Invisibility"
"reactions":
  - "desc": "When a creature Reynard can see hits him with an attack, he halves the\
      \ damage from that attack."
    "name": "Evade"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Reynard takes a lair\
      \ action to cause one of the following effects; he can't use the same effect\
      \ two rounds in a row:\n\n- Reynard can cause up to 3 doors within the lair\
      \ to become walls and an equal number of doors to appear on walls where there\
      \ previously were none.  \n- Reynard causes a section of the lair in a 50-foot-radius\
      \ sphere centered on a point he can see within 120 feet of him to become filled\
      \ with fog. The fog spreads around corners, and its area is heavily obscured.\
      \ A creature, other than Reynard, that starts its turn in the area must succeed\
      \ on a DC 15 Wisdom ([Survival](Mechanics/CLI/rules/skills.md#Survival)) check\
      \ or move in the opposite direction from the one it initially chooses. A wind\
      \ of at least 20 miles per hour disperses the fog. The fog otherwise lasts until\
      \ Reynard dies or uses this lair action again.  \n- Reynard causes an illusory\
      \ duplicate of himself to appear in his space. The double moves or speaks according\
      \ to Reynard's mental directions. Each time a creature targets Reynard with\
      \ an attack, roll a d20 to determine whether the attack instead targets the\
      \ duplicate. On a roll of 11 or higher, the attack hits and destroys the duplicate.\
      \ A creature can use its action to make a DC 15 Intelligence ([Investigation](Mechanics/CLI/rules/skills.md#Investigation))\
      \ check to determine which Reynard is real. On a success, the creature identifies\
      \ the illusion. The duplicate is intangible, but otherwise is identical to Reynard\
      \ by sight, smell, or hearing. The duplicate lasts for 1 minute or until Reynard\
      \ uses this lair action again.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Reynard's lair is warped by his magic, which creates\
      \ one or more of the following effects:\n\n- Paths within 2 miles of the lair\
      \ become overgrown, twisted, and disorienting. Creatures must succeed on a DC\
      \ 15 Wisdom ([Survival](Mechanics/CLI/rules/skills.md#Survival)) check while\
      \ traveling or become lost within the area. Lost creatures can repeat the check\
      \ every subsequent hour and regain their bearings on a success.  \n- Sounds\
      \ and sights become distracting within 1 mile of the lair. Creatures in that\
      \ area have disadvantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks made to oppose Dexterity ([Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand))\
      \ checks.  \n- Reynard and other foxes ignore difficult terrain within 1 mile\
      \ of the lair.  \n\nIf Reynard dies, these effects fade over the course of 1d10\
      \ days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the reynard can expend a use to take one of the following actions. The reynard\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Reynard makes a rapier attack."
    "name": "Rapier (Humanoid or Hybrid Form"
  - "desc": "Reynard moves up to half his speed without provoking opportunity attacks\
      \ and can Hide. Bite (Costs 2 Actions; Fox or Hybrid Form Only). Reynard makes\
      \ a bite attack."
    "name": "Scatter"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/reynard-ccodex.png"
```
^statblock

## Environment

forest