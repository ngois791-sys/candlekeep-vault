---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cleric of the Brew
---
# [Cleric of the Brew](Mechanics\CLI\bestiary\humanoid/cleric-of-the-brew-ccodex.md)
*Source: Creature Codex p. 399*  

Dwarves love their beer, so it is no surprise that many of them revere the goddess of beer. Clerics of the brew are talented brewers, creating delicious full-flavored mundane ales, but they can also channel the power of the goddess to make special "blessed" brews to aid her followers. They are capable fighters and are often found in the front ranks of dwarven war bands, swinging their maces and inspiring their comrades.

> [!note] Clerics of the Brew in Midgard
> 
> The Goddess of Merriment was originally introduced to the dwarves by the wandering Kariv, who still revere her as "Mother Ale." Ninkash, patron of brewers and tavern keepers, is widely beloved among both dwarves and humans and worshipped from the heights of the dwarven cantons to the desert cities of the Southlands. When someone dozes off after a bout of drinking, he or she is said to have "gone to visit Ninkash. " Her clerics, known as the vaer, act as trusted advisers to their communities, and many are empowered with the divine domain of Beer (see Midgard Heroes Handbook).
^clerics-of-the-brew-in-midgard

```statblock
"name": "Cleric of the Brew (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any Good alignment"
"ac": !!int "18"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "18"
  - !!int "13"
"speed": "25 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+7"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+4"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+3"
"damage_resistances": "poison"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "Common, Dwarvish"
"cr": "5"
"traits":
  - "desc": "The cleric of the brew is an 8th-level spellcaster. Its spellcasting\
      \ ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). The\
      \ cleric of the brew has the following cleric spells prepared:\n\n**Cantrips\
      \ (at will):** [guidance](Mechanics/CLI/spells/guidance-xphb.md), [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [mending](Mechanics/CLI/spells/mending-xphb.md), [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md)\n\
      \n**1st level (4 slots):** [cure wounds](Mechanics/CLI/spells/cure-wounds-xphb.md),\
      \ [healing word](Mechanics/CLI/spells/healing-word-xphb.md), [heroism](Mechanics/CLI/spells/heroism-xphb.md),\
      \ [purify food and drink](Mechanics/CLI/spells/purify-food-and-drink-xphb.md)\n\
      \n**2nd level (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [prayer of healing](Mechanics/CLI/spells/prayer-of-healing-xphb.md), [spiritual\
      \ weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n**3rd level (3 slots):**\
      \ [aura of vitality](Mechanics/CLI/spells/aura-of-vitality-xphb.md), [dispel\
      \ magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)\n\
      \n**4th level (2 slots):** [confusion](Mechanics/CLI/spells/confusion-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The cleric has a +6 bonus on ability checks to brew beer, has advantage\
      \ on saving throws against poison, and can't be intoxicated unless it chooses\
      \ to be."
    "name": "Master Brewer"
"actions":
  - "desc": "The cleric can use its Intoxicating Burp. It then makes two divine strike\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) bludgeoning damage plus 9 (2d8) radiant damage."
    "name": "Divine Strike"
  - "desc": "The cleric drinks, or administers to an ally, one of the beer goddess'\
      \ holy ales. For 1 minute, the drinker is immune to being [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
      \ gains 7 (2d6) temporary hp, and has advantage on ability checks based on\
      \ Charisma. The creature can't benefit from Blessed Brew again until it finishes\
      \ a short or long rest."
    "name": "Divine Brew"
  - "desc": "The cleric of the brew belches revoltingly in the face of a single creature\
      \ within 5 feet. The target must succeed on a DC 15 Constitution saving throw\
      \ or become [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) for 1 minute.\
      \ If a creature's saving throw is successful or the effect ends for it, the\
      \ creature is immune to the cleric's Intoxicating Burp for the next 24 hours."
    "name": "Intoxicating Burp"
  - "desc": "Allies within 30 feet of the cleric who are [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
      \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
      \ or [stunned](Mechanics/CLI/rules/conditions.md#Stunned) by an effect that\
      \ allows repeated saving throws (such as a dragon's Frightful Presence) have\
      \ advantage on the next saving throw. A creature that succeeds on the saving\
      \ throw regains 7 (2d6) hp."
    "name": "Boot and Rally (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/cleric-of-the-brew-ccodex.png"
```
^statblock

## Environment

any