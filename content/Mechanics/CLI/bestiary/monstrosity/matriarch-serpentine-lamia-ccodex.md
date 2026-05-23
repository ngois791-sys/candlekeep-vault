---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Matriarch Serpentine Lamia
---
# [Matriarch Serpentine Lamia](Mechanics\CLI\bestiary\monstrosity/matriarch-serpentine-lamia-ccodex.md)
*Source: Creature Codex p. 248*  

*The pair of serpentine creatures intertwine with the shackled prisoner, their scaly tails and grasping arms squeezing the life from him as he screams silently, the breath choked from his body.*

## The Smaller of the Species

Unlike the leonine forms of their larger lamia cousins, the serpentine lamias have humanoid torsos atop a serpentine tail. Seeing themselves as "true" lamia, the serpentine lamia consider the lion‑bodied members of their race "false lamia." They go to great lengths to destroy these false lamia whenever possible.

## Constant Search for Indulgence

Serpentine lamias share the same hedonistic tendencies as their larger namesakes; however, they are more willing to travel or create lairs in civilized areas. In locations, where monstrous species are not attacked on sight as threats, serpentine lamias often travel freely without disguise. Their love of the finer things in life offers them opportunities to act as merchants, curators, and art experts. Their barely controlled desires often leave them unhindered by conscience or scruple, affording them careers of a more criminal nature.

## Worship the Moon

Something in the serpentine lamias' psyches gives them a strong connection to the moon. They are at their most calm and rational when the moon is new, but as the lunar cycle moves toward its peak, the urges for debauchery and hedonism grow in the serpentine lamia. "During a full moon in a lamia's lair" has become a colloquial saying for a time or place of inescapable danger. For the duration of a full moon, serpentine lamias congregate at the home of the most prestigious of their kind. The bacchanalia that take place at these gatherings are legendary, where the overconsumption of the finest food and drink is only the beginning. In places with less stringent moral and ethical codes, the murder of innocents is often the highlight of these evenings.

```statblock
"name": "Matriarch Serpentine Lamia (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "19"
"speed": "40 ft., climb 20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+10"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Common, Abyssal"
"cr": "5"
"traits":
  - "desc": "The matriarch serpentine lamia's innate spellcasting ability is Charisma\
      \ (spell save DC 15, +7 to hit with spell attacks). It can innately cast the\
      \ following spells, requiring no material components:\n\n**At will:** [animal\
      \ friendship](Mechanics/CLI/spells/animal-friendship-xphb.md) (snakes only),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md) (any humanoid\
      \ form), [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\n**3/day each:**\
      \ [animal messenger](Mechanics/CLI/spells/animal-messenger-xphb.md) (snakes\
      \ only), [charm person](Mechanics/CLI/spells/charm-person-xphb.md), [hypnotic\
      \ pattern](Mechanics/CLI/spells/hypnotic-pattern-xphb.md), [moonbeam](Mechanics/CLI/spells/moonbeam-xphb.md)\n\
      \n**1/day each:** [compulsion](Mechanics/CLI/spells/compulsion-xphb.md), [vampiric\
      \ touch](Mechanics/CLI/spells/vampiric-touch-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The matriarch serpentine lamia has advantage on attack rolls against\
      \ a creature she has surprised or that is [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ by her or her allies."
    "name": "Serpent Strike"
  - "desc": "The matriarch serpentine lamia has advantage on saving throws and ability\
      \ checks against being knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Snake Body"
  - "desc": "The matriarch serpentine lamia can communicate with snakes as if they\
      \ shared a language."
    "name": "Speak with Snakes"
"actions":
  - "desc": "The matriarch serpentine lamia makes three attacks, but can use her constrict\
      \ and Debilitating Touch attacks only once each."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d10 + 3) bludgeoning damage. If the target is a Medium or smaller creature,\
      \ it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 14).\
      \ Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ the matriarch can automatically hit the target with her constrict, and the\
      \ she can't constrict another target."
    "name": "Constrict"
  - "desc": "*Melee Spell Attack:* +7 to hit, reach 5 ft., one target. *Hit:* The\
      \ target is magically cursed for 10 minutes. Until the curse ends, the target\
      \ has disadvantage on Dexterity and Strength saving throws and ability checks."
    "name": "Debilitating Touch"
  - "desc": "One humanoid the matriarch serpentine lamia can see within 30 feet of\
      \ her must succeed on a DC 15 Charisma saving throw or be magically [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ for 1 day. The [charmed](Mechanics/CLI/rules/conditions.md#Charmed) target\
      \ obeys the matriarch's verbal commands. If the target suffers any harm or receives\
      \ a suicidal command, it can repeat the saving throw, ending the effect on a\
      \ success. If the target successfully saves against the effect, or if the effect\
      \ ends on it, the target is immune to the matriarch's Seduce for the next 24\
      \ hours. The matriarch can have only one target seduced at a time. If it seduces\
      \ another, the effect on the previous target ends."
    "name": "Seduce"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/matriarch-serpentine-lamia-ccodex.png"
```
^statblock

## Environment

urban