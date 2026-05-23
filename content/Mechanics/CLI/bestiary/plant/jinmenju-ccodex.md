---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jinmenju
---
# [Jinmenju](Mechanics\CLI\bestiary\plant/jinmenju-ccodex.md)
*Source: Creature Codex p. 232*  

*The incessant sound of laughter fills the air, as if dozens of mirthful spirits are tittering at an unheard joke. The sound seems to come from a magnificent apple tree that bears dozens upon dozens of white apples, all of which shake in an unfelt breeze. Closer inspection reveals that each apple bears a face howling with laughter.*

## Bearer of Laughing Fruit

Legends say that the first jinmenju tree sprouted from the severed head of a traveling jester. The tree that grew from the jester's head bore white fruit with a human face that laughed incessantly. If the jinmenju tree can be made to laugh uproariously, such as with a hideous laughter spell or a joke told with a successful DC 15 Charisma (Performance) check, a piece of fruit falls from the tree and rolls away, growing into a new jinmenju over `1d4` weeks if it stays on the ground.

## Terrifying Jokester

Despite its unsettling appearance and demeanor, the jinmenju tree simply wants to bring happiness to other living creatures. The tree cannot move, but its magic is so powerful that people living near the tree have dreams calling them to sit beneath its boughs and blissfully eat its fruit. Though the jinmenju means no harm by its psychic intrusions, its actions often destroy communities and spread horror across the land. The tree itself cannot talk, but its fruit can hear its thoughts and speak them one word at a time, split between all the fruit on the tree. When the jinmenju wishes to convey a particularly strong emotion—often in the punchline of a joke—all of its fruit speaks at once.

## A Jinmenju's Lair

A jinmenju grows wherever its seeds take root. Since animals are unaffected by its fruit's magic, they can spread its seeds by eating the fruit and excreting the seeds, just like any other plant. Sometimes travelers pick jinmenju fruit and take it along to keep them company until it rots and they discard it. A jinmenju prefers to grow in shady groves and temperate rainforests, and jinmenju saplings will sometimes ask travelers to uproot them and relocate them to more favorable terrain.

An adult jinmenju usually keeps an audience nearby to listen to its jokes, though it often doesn't realize its psychic influence is keeping them there against their will. The lairs of ancient jinmenju look clean but are filled with hidden caches of bones and the starved corpses of those unable to break its thrall.

```statblock
"name": "Jinmenju (CCodex)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d12 + 48"
"modifier": !!int "-5"
"stats":
  - !!int "16"
  - !!int "1"
  - !!int "19"
  - !!int "17"
  - !!int "8"
  - !!int "22"
"speed": "0 ft."
"saves":
  - "constitution": !!int "8"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+14"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., tremorsense\
  \ 120 ft., passive Perception 13"
"languages": ""
"cr": "9"
"traits":
  - "desc": "Whenever the jinmenju makes a root attack, it can choose a point on the\
      \ ground within 120 feet of it. The root bursts from the ground, and that point\
      \ becomes the attack's point of origin. After attacking, the exposed root protrudes\
      \ from that point, and the jinmenju gains a reaction each turn that it can only\
      \ use to make an opportunity attack with that root. A root has AC 15, 45 hp,\
      \ and resistance to bludgeoning, piercing, and slashing damage from nonmagical\
      \ attacks. Damaging a root doesn't damage the jinmenju tree. The jinmenju can\
      \ have up to 5 roots active at one time. If it makes a root attack while it\
      \ has 5 roots active, one of the active roots burrows back into the ground and\
      \ a new root appears at the location of the new attack."
    "name": "Burrowing Roots"
  - "desc": "If a creature with Intelligence 5 or higher eats a bite of the fruit\
      \ of the jinmenju, it must succeed on a DC 16 Wisdom saving throw or fall [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ becoming [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ by fits of laughter as it perceives everything as hilariously funny for 1\
      \ minute. A creature can repeat the saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success. If the target takes damage while\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone), it has advantage on the\
      \ saving throw."
    "name": "Laughing Fruit"
"actions":
  - "desc": "The jinmenju makes two root attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d10 + 3) bludgeoning damage plus 14 (4d6) psychic damage."
    "name": "Root"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the jinmenju takes a\
      \ lair action to cause one of the following effects; it can't use the same lair\
      \ action two rounds in a row.\n\n- The jinmenju sways its branches, causing\
      \ its fruit to sing a soothing melody. Each creature within 60 feet that can\
      \ hear the jinmenju must succeed on a DC 16 Wisdom saving throw or suffer the\
      \ effects of the charm person spell until initiative count 20 on the next round.\
      \  \n- The jinmenju shakes its branches, causing its fruit to scream gibberish.\
      \ Each creature within 60 feet that can hear the jinmenju must succeed on a\
      \ DC 16 Wisdom saving throw or suffer the effects of the confusion spell until\
      \ initiative count 20 on the next round.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a jinmenju's lair is warped by its magic, which\
      \ creates one or more of the following effects:\n\n- People within 6 miles of\
      \ the jinmenju have a 10% chance each night of experiencing a strange and enthralling\
      \ dream. The dreamer is sitting with hundreds of other happy, laughing people\
      \ beneath the boughs of a tree that bears white apples. When the dreamer awakens,\
      \ it is psychically compelled to seek out the tree.  \n- People who live within\
      \ 1 mile of the jinmenju find everyday occurrences unusually funny, often laughing\
      \ at unhappy news or at inappropriate events, like funerals.  \n\nIf the jinmenju\
      \ dies, these supernatural effects disappear after 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the jinmenju can expend a use to take one of the following actions. The\
  \ jinmenju regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The jimenju makes one root attack."
    "name": "Root"
  - "desc": "The jinmenju restores 10 (3d6) hp to each of its exposed roots."
    "name": "Revitalize Roots"
  - "desc": "The jinmenju emits a puff of purple gas around its roots. Each creature\
      \ within 10 feet of an exposed root must succeed on a DC 16 Constitution saving\
      \ throw or fall [prone](Mechanics/CLI/rules/conditions.md#Prone) with laughter,\
      \ becoming [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and unable to stand up until the end of its next turn. A creature in an area\
      \ of overlapping gas only makes the saving throw once. A creature with an Intelligence\
      \ score of 4 or less isn't affected."
    "name": "Mirthful Miasma (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/plant/token/jinmenju-ccodex.png"
```
^statblock

## Environment

forest