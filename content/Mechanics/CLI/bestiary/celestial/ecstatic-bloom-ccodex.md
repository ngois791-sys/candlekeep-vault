---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ecstatic Bloom
---
# [Ecstatic Bloom](Mechanics\CLI\bestiary\celestial/ecstatic-bloom-ccodex.md)
*Source: Creature Codex p. 303*  

{A single enormous white flower blooms at the heart of the lustrating grove. Many religions build temples around these great manifestations of divinity because of their curative dew. The blooms are highly intelligent and shimmer when conversing with other creatures. The stalks of the blooms are thick and recover from injury quickly.}

## Heart of the Grove

An ecstatic bloom is the leader and ultimate expression of a lustrating grove. A bloom will only appear if at least three hallowed reeds and two alabaster trees grow nearby. The perfume of the bloom calms beasts and repels undead.

## Philosopher Flowers

Ecstatic blooms are highly intelligent, thoughtful creatures. They enjoy communicating with other life forms and are excellent judges of character and motivation. They prefer to discuss the nature of divine power and the origins of the celestials. They love their grove-mates and consider the hallowed reeds and alabaster trees within their grove to be their children.

```statblock
"name": "Ecstatic Bloom (CCodex)"
"size": "Huge"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d12 + 54"
"modifier": !!int "-1"
"stats":
  - !!int "10"
  - !!int "9"
  - !!int "16"
  - !!int "20"
  - !!int "19"
  - !!int "14"
"speed": "10 ft."
"saves":
  - "intelligence": !!int "9"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_vulnerabilities": "fire"
"damage_immunities": "radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 19"
"languages": "All, telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "When an undead creature starts its turn within 30 feet of the bloom,\
      \ it must succeed on a DC 17 Wisdom saving throw or be turned until the end\
      \ of its next turn."
    "name": "Aura of Life"
  - "desc": "At the start of each of the ecstatic bloom's turns, the bloom and each\
      \ good-aligned creature, including the bloom, within 10 feet of it regains 4\
      \ (1d8) hp. If the bloom takes fire damage, this trait doesn't function at\
      \ the start of the bloom's next turn. The ecstatic bloom dies only if it starts\
      \ its turn with 0 hp and doesn't regain hp from this trait."
    "name": "Blessed Regrowth"
  - "desc": "Alabaster trees within 60 feet of the ecstatic bloom have advantage on\
      \ all saving throws."
    "name": "Foster the Trees"
  - "desc": "The ecstatic bloom knows if a creature within 120 feet of it is good-aligned\
      \ or not."
    "name": "Like Calls to Like"
"actions":
  - "desc": "The ecstatic bloom makes three gilded beam attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +9 to hit, range 150 ft., one target. *Hit:*\
      \ 27 (6d8) radiant damage."
    "name": "Gilded Beam"
  - "desc": "The bloom summons a chorus of booming celestial voices that descend into\
      \ the minds of nearby creatures. Each creature within 30 feet of the bloom must\
      \ succeed on a DC 17 Wisdom saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn. Castigate only affects non-good-aligned creatures\
      \ with an Intelligence of 5 or higher."
    "name": "Castigate (Recharges after a Short or Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/ecstatic-bloom-ccodex.png"
```
^statblock

## Environment

any