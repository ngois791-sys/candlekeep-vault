---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Typhon, Father of Monsters
---
# [Typhon, Father of Monsters](Mechanics\CLI\bestiary\fiend/typhon-father-of-monsters-ccodex.md)
*Source: Creature Codex p. 81*  

*The creature towers out of a nightmare. It is humanoid from the waist up and serpentine from the waist down with its lower body splitting into two tails. Great scaled, leathery wings sprout from its shoulders, and its arms fork into nests of hissing snakes just below the elbow. Its eyes are baleful flames, casting ugly shadows into its wild hair and beard.*

Typhon is the Father of Monsters and Master of the Lamias. This towering demon lord lives in bitter exile, chained to his level of the Abyss by defeat in an ancient conflict against the powers of good. He broods in the depths of his cavern, hoarding stolen wealth and spawning ever more hideous creatures to unleash upon the multiverse.

## Desperate for Escape

While most demon lords can't easily leave their demesnes within the Abyss for various reasons, Typhon's very essence is bound beneath his mountain by the powers of heaven. No known portal, spell, ritual, or even divine intervention yet attempted can release him. His influence can slip through the cracks in the planes in the form of his demons and spawn, but the Father of Monsters himself can find no such release. He is obsessed with finding the key to his prison and will spare no amount of effort nor show a shred of mercy in pursuit of the solution.

## Eyes, Ears, and Claws

Of all the creatures that crawl into existence under Typhon's corrupted touch, his favorites are the lamia. Conventional demonology holds the lamia were created by a different demon lord originally, but Typhon delights in subverting that supposed truth. Lamia created or blessed by Typhon vary from the expected norm of a lower leonine body and sport a variety of bestial lower bodies. Snake tails are the most common, but the lower bodies of boars, crocodiles, sharks, and even spiders have been reported.

Many lamia abroad in the planes are servants of Typhon, actively seeking out information and power that might free their master from his prison. Besides the lamia, Typhon employs other spies that can often slip into places demons and monstrosities can't. Many planar explorers meet their end after being spared Typhon's fangs and pressed into his service to search out and steal some celestial artifact or demonic power that might lead to his release.

## Typhon's Lair

Typhon rules Tarkoros, a layer of the Abyss covered in dense forests and rocky hills that radiate out from a singular mountain. Within the mount is a honeycomb of tunnels and immense caverns that Typhon fills with beautiful treasure and hideous horrors. Monsters of all kinds spring up in the shadow of Typhon's wings. The creatures lurk in the halls of Tarkoros and spill out to seek portals to the Material Plane.

```statblock
"name": "Typhon, Father of Monsters (CCodex)"
"size": "Gargantuan"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "314"
"hit_dice": "17d20 + 136"
"modifier": !!int "2"
"stats":
  - !!int "30"
  - !!int "14"
  - !!int "26"
  - !!int "17"
  - !!int "22"
  - !!int "19"
"speed": "50 ft., burrow 50 ft., fly 90 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "15"
  - "wisdom": !!int "13"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+11"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+11"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+13"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 23"
"languages": "All, telepathy 120 ft."
"cr": "22"
"traits":
  - "desc": "The typhon, father of monsters's innate spellcasting ability is Charisma\
      \ (spell save DC 19, +11 to hit with spell attacks). It can innately cast\
      \ the following spells, requiring no material components:\n\n**At will:** [detect\
      \ magic](Mechanics/CLI/spells/detect-magic-xphb.md), [major image](Mechanics/CLI/spells/major-image-xphb.md)\n\
      \n**3/day each:** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md), [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\
      \n**1/day each:** [dominate monster](Mechanics/CLI/spells/dominate-monster-xphb.md),\
      \ [geas](Mechanics/CLI/spells/geas-xphb.md), [true polymorph](Mechanics/CLI/spells/true-polymorph-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "If Typhon fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Typhon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Typhon's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Typhon makes three attacks: two with his snake bites and one with his\
      \ or Enthralling Touch."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +17 to hit, reach 15 ft., one target. *Hit:*\
      \ 23 (3d8 + 10) piercing damage and the target must succeed on a DC 23 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 minute. While [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ in this way, the creature takes 11 (2d10) poison damage at the start of\
      \ its turn. A [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Snake Bites"
  - "desc": "*Melee Weapon Attack:* +17 to hit, reach 20 ft., one creature. *Hit:*\
      \ 26 (3d10 + 10) bludgeoning damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 20) if it is a Large or smaller creature. Until this grapple ends,\
      \ the creature is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ Typhon has two tails, each of which can grapple only one target."
    "name": "Tail"
  - "desc": "*Melee Spell Attack:* +11 to hit, reach 15 ft., one creature. *Hit:*\
      \ The target is magically cursed. Until the curse ends, the target has disadvantage\
      \ on Wisdom saving throws and all ability checks. The curse lasts until removed\
      \ by the [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) spell or\
      \ other magic."
    "name": "Enthralling Touch"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Typhon takes a lair\
      \ action to cause one of the following effects; Typhon can't use the same effect\
      \ two rounds in a row:\n\n- Typhon creates a creature at a point he can see\
      \ within the lair. A single aberration, dragon, monstrosity, or ooze of challenge\
      \ rating 10 or less or a demon of challenge rating 5 or less crawls out of a\
      \ crack in the ground. It acts immediately and on initiative count 20 on subsequent\
      \ rounds. The creature follows Typhon's commands and remains for 1 hour or until\
      \ Typhon uses this lair action again.  \n- Typhon howls, causing blood-curdling\
      \ echoes to reverberate through the lair. All Typhon's enemies within 300 feet\
      \ that can hear the howl must succeed on a DC 15 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of its next turn.  \n- Typhon causes chains of rock to burst\
      \ out of the ground, ceilings, or wall. Two creatures that Typhon can see within\
      \ 120 feet of him must succeed on a DC 15 Strength saving throw or be [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by the chains until initiative count 20 on the following round. A creature\
      \ can be freed if it or another creature takes an action to make a DC 15 Strength\
      \ check and succeeds. The chains crumble to dust if the creature is freed.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Typhon's lair is warped by Typhon's magic, which\
      \ creates one or more of the following effects:\n\n- Within 5 miles of the lair,\
      \ aberrations, beasts, dragons, monstrosities, and oozes are extremely common\
      \ and highly aggressive.  \n- Typhon can communicate telepathically with any\
      \ [lamia](Mechanics/CLI/bestiary/fiend/lamia-xmm.md) within 5 miles of the lair.\
      \  \n- Clouds grow thick in the sky within 1 mile of the lair. Even in broad\
      \ daylight the area is only dim light. Inside the lair itself, all light sources\
      \ have their illumination radius reduced to half.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the typhon can expend a use to take one of the following actions. The typhon\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Typhon makes one snake bites attack."
    "name": "Snake Bites"
  - "desc": "Typhon makes one enthralling touch attack."
    "name": "Enthrall"
  - "desc": "Typhon beats his wings. Each creature within 15 feet of Typhon must succeed\
      \ on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage\
      \ and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). Typhon can\
      \ then fly up to half his flying speed."
    "name": "Wing Attack (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/typhon-father-of-monsters-ccodex.png"
```
^statblock

## Environment

planar