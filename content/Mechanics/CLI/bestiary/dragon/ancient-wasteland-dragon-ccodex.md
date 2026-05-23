---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ancient Wasteland Dragon
---
# [Ancient Wasteland Dragon](Mechanics\CLI\bestiary\dragon/ancient-wasteland-dragon-ccodex.md)
*Source: Creature Codex p. 120*  

*Rust-colored wings darken the sky, and a gout of bright energy erupts from the creature's jaws.*

Dark-tempered beasts who rule the magic-blasted wastes with a merciless territoriality, wasteland dragons prowl among the ruins of dead cities and dust-blown, haunted and barren lands that once were verdant.

## Territorial for a Reason

They consider all other dragons to be enemies, but no creatures are so hated by wasteland dragons as spellcasters and any who employ magic. They blame spellcasters—somewhat correctly—for the state of the lands they roam and, indeed, for their own current form.

Though these dragons breed true, they were once of different breeds altogether before they were warped by an unfettered magical catastrophe and the foul energies brought through to this world from the Void. Their once-brilliant scales have dimmed to the color of rust and soil; their crests and horns have gone grey and withered; the lands they rule now host horrors which even they must fear; and their natural defenses have been warped and supplanted by the very energies which wrought so much destruction. Dragons have long memories, and these atrocities, as far as they are concerned, could have happened yesterday. Thus they attack, without warning or mercy, any who trespass, showing spellcasters particular cruelty.

## Predatory Zeal by Necessity

Dedicated carnivores, wasteland dragons prefer to eat recent arrivals to their land. Beyond the practical consideration that they would likely kill the newcomers in any case, creatures corrupted by the wastes can be hazardous in unpredictable ways; poison, infections, and infestations can occur, and the taste of wastelands creatures is incredibly foul.

When they are unable to find travelers or migratory animals, wasteland dragons hunt the livestock of settlements, confident that few would dare pursue them to their horrifying homelands afterward.

## Territorial for a Reason

The hoard of a wasteland dragon might contain a good deal of very old coins and treasures in the conventional sense, but they also possess dangers of their own. These dragons often bring home curious devices, arcane tomes, and relics of the dead places in which they live, some likely infused with forbidden magic. Though the dragons have little use for such things other than to add to a collection, a plundered hoard could spell disaster for the world outside.

## A Wasteland Dragon's Lair

Wasteland dragons make their homes among the ruins of dead civilizations, often inside surviving structures vast enough to contain them and protect them from the elements. Old cisterns of sufficient size, auditoriums, or the audience chambers of forgotten nobles all make suitable lairs for a wasteland dragon. They are not above making their home in a cave, but it will likely be in close proximity to a ruined settlement of some size; wasteland dragons grow bored easily, and rummaging through ruins, either for curiosities or interlopers, takes up a good deal of their time.

A legendary wasteland dragon infuses its surroundings with traces of the magic it seeks to deny the outside world. It might hear the thoughts of trespassers as though they were carried on a breeze. Magic items and spells may behave unpredictably, becoming more powerful, functioning in a new way, or failing to function at all. Prolonged exposure to the environment near a wasteland dragon's lair may lead to mutations and even madness, though the latter often passes once the sufferer is taken from the area.

Clever creatures, wasteland dragons often make some use of the arcane items they find, seeing no hypocrisy in doing so; after all, they are hardly as foolish as humans! The approach to the creature's lair might be protected by strange energy fields, or weakened barriers between this world and another, or by creatures of the wastes who are smart enough to otherwise avoid annoying the dragon. The dragon confronted in its lair might forego its general inclination to attack immediately in favor of luring the intruders into such traps.

```statblock
"name": "Ancient Wasteland Dragon (CCodex)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "333"
"hit_dice": "18d20 + 144"
"modifier": !!int "0"
"stats":
  - !!int "28"
  - !!int "10"
  - !!int "26"
  - !!int "16"
  - !!int "15"
  - !!int "19"
"speed": "40 ft., burrow 30 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "15"
  - "wisdom": !!int "9"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "force"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [darkvision](Mechanics/CLI/rules/senses.md#Darkvision)\
  \ 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "23"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The dragon can use its Frightful Presence. It then makes three attacks.\
      \ one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (2d10 + 9) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 10 ft., one target. *Hit:*\
      \ 16 (2d6 + 9) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 15 ft., one target. *Hit:*\
      \ 18 (2d8 + 9) bludgeoning damage."
    "name": "Tail"
  - "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
      \ and aware of it must succeed on a DC 20 Wisdom saving throw or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ dragon's Frightful Presence for the next 24 hours."
    "name": "Frightful Presence"
  - "desc": "The dragon blasts warped arcane energy in a 90-foot line that is 5 feet\
      \ wide. Each creature in that line must make a DC 20 Dexterity saving throw,\
      \ taking 90 (20d8) force damage on a failed save, or half as much damage on\
      \ a successful one."
    "name": "Warped Energy Breath (Recharge 5-6)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair\
      \ action to cause one of the following effects; the dragon can't use the same\
      \ effect two rounds in a row:\n\n- A random encounter occurs from the Badlands\
      \ Terrain Table, as creatures who were given shelter and protection by the dragon\
      \ in exchange for their services earn their keep and attack the PCs.  \n- An\
      \ object the dragon can see within 120 feet of it flashes with arcane energy\
      \ and bursts. Each creature within 20 feet of the object must succeed on a DC\
      \ 14 Dexterity check or take 10 (3d6) piercing damage and become blinded for\
      \ 1 minute. A creature can take an action to rub its eyes and end the blindness\
      \ at the beginning of its next turn.  \n- Creatures within 30 feet of the dragon\
      \ receive a momentary, jumbled telepathic communication from one of the many\
      \ warped and alien beings of the wastes. Each creature in that area must succeed\
      \ on a DC 14 Wisdom saving throw or be incapacitated until the end of its next\
      \ turn.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a legendary wasteland dragon's lair is further\
      \ warped by the dragon's magic, which creates one or more of the following effects:\n\
      \n- Ghostly figures fighting battles from long ago appear with some frequency\
      \ within 5 miles of the dragon's lair.  \n- Dust goblins and other creatures\
      \ native to the wastes within 3 miles of the dragon's lair report trespassers\
      \ to it as soon as possible.  \n- Long-hidden entrances to buried structures\
      \ open themselves within 1 mile of the dragon's lair.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the dragon can expend a use to take one of the following actions. The dragon\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dragon makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The dragon makes a tail attack."
    "name": "Tail Attack"
  - "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
      \ must succeed on a DC 20 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning\
      \ damage and be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone). The\
      \ dragon can then fly up to half its flying speed."
    "name": "Wing Attack (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/ancient-wasteland-dragon-ccodex.png"
```
^statblock

## Environment

badlands, hill