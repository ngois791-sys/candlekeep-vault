---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chupacabra
---
# [Chupacabra](Mechanics\CLI\bestiary\monstrosity/chupacabra-ccodex.md)
*Source: Creature Codex p. 63*  

*This fearsome creature stands about three feet tall and looks like a cross between a dog and a reptile. Its body is covered in a leathery greenish-gray hide, and a crest of spines runs down its back. A pair of bulging, glowing eyes stare intently as it opens its mouth, revealing a set of razor sharp fangs.*

Chupacabras wander remote hills and plains at night, alone or in small packs, in search of their prey. They will sometimes attack lone humans, but they prefer to feed on the blood of sheep and other domestic animals. Goats are a particular favorite.

## Stealthy Hunters

The chupacabra stalks its quarry before leaping out and sinking its teeth into the creature's neck to drain its blood. When hunting in open ground, the chupacabra will use its terrible glowing eyes to paralyze its victim with fear before attacking. Creatures killed by chupacabra are found completely drained of blood with a triangular, almost bat-shaped, puncture wound in their necks. Superstitious farmers may blame vampires, but those brave enough, and who know of the chupacabra, may band together to hunt down the true culprit, using a caged goat as bait.

## Servants of the Demon Bat

Chupacabras are sometimes bred underground by derro worshippers of Camazotz, the Demon Lord of Bats (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]). The sudden appearance of the creatures in a locality may indicate the presence of Demon Bat cultists below ground. Worse, whispered rumors tell of chupacabras with bat-like wings created by the derro savants under direction from their dreaded Mi-Go allies.

```statblock
"name": "Chupacabra (CCodex)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "12"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+4"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The chupacabra has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "With a 10-foot running start, the chupacabra can long jump up to 25 feet."
    "name": "Running Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage, and the chupacabra attaches to the target.\
      \ While attached, the chupacabra doesn't attack. Instead, at the start of each\
      \ of the chupacabra's turns, the target loses 6 (1d6 + 3) hp due to blood\
      \ loss. The chupacabra can detach itself by spending 5 feet of its movement.\
      \ It does so after the target is reduced to 0 hp. A creature, including the\
      \ target, can use its action to detach the chupacabra."
    "name": "Bite"
  - "desc": "The chupacabra fixes its gaze on one creature it can see within 10 feet\
      \ of it. The target must succeed on a DC 11 Wisdom saving throw or be [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. A [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed) creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If a creature's saving throw is successful or the\
      \ effect ends for it, the creature is immune to the chupacabra's Fearful Gaze\
      \ for the next 24 hours."
    "name": "Fearful Gaze"
"reactions":
  - "desc": "When the chupacabra is reduced to less than half of its maximum hp, it\
      \ releases a foul, sulphurous stench. Each creature within 5 feet of the chupacabra\
      \ must succeed on a DC 11 Constitution saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn."
    "name": "Malodorous Stench"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/chupacabra-ccodex.png"
```
^statblock

## Environment

grassland