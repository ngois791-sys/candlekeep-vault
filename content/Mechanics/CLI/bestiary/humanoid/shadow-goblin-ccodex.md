---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/goblinoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Goblin
---
# [Shadow Goblin](Mechanics\CLI\bestiary\humanoid/shadow-goblin-ccodex.md)
*Source: Creature Codex p. 191*  

*This hunched and scrawny goblin has a long nose and pointed ears and wears an insincere, obsequious expression on its slategrey face. Dressed in a servant's uniform, it conceals a large knife behind its back.*

## Unseelie Servants

Someone needs to cook the meals, scrub the floors, and polish the silverware in the courts of the shadow fey, and more often than not these jobs fall on the shadow goblins. Smarter than the average goblin but just as cowardly and lazy, shadow goblins have served the shadow fey for centuries, working in the kitchens, stables, and smithies under the direction of a chamberlain known as the Goblin King, who presides over his own "court" below stairs. Shadow goblins make good cooks and reasonable grooms, but they are indifferent footmen and chambermaids.

## Touched by Shadow

Most shadow goblins were originally average goblins but living in the Shadow Realm for so long has changed them. They have taken on some of their masters' fey qualities. Others were once shadow fey or humans, who were caught stealing from powerful members of the courts or who offended shadow fey rulers and were transformed into shadow goblins as punishment.

## Untrustworthy Guides

Outsiders of low status visiting the shadow fey courts often end up relying on shadow goblins as guides and sources of information. Unfortunately, the goblins tend to be both annoyingly whiny and notorious liars. Although they are easily intimidated, shadow goblins are never truly cooperative and will disappear at the first sign of danger. Their loyalty to their shadow fey masters is born out of fear. They are reluctant to do anything that is likely to upset their masters and lead to a thrashing. Those outsiders that bully the goblins tend to suffer subsequently from badly-cooked food, missing bits of gear, and other petty acts of retribution.

```statblock
"name": "Shadow Goblin (CCodex)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "12"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Sleight of Hand](Mechanics/CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common, Elvish, Goblin"
"cr": "1/2"
"traits":
  - "desc": "The shadow goblin can take the Disengage or [Hide](Mechanics/CLI/rules/actions.md#Hide)\
      \ action as a bonus action on each of its turns."
    "name": "Nimble Escape"
  - "desc": "rThe shadow goblin has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks made to hide in dim light or darkness."
    "name": "Shadow Camouflage"
  - "desc": "While in sunlight, the shadow goblin has disadvantage on attack rolls\
      \ and on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The shadow goblin has advantage on Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ checks made to know about shadow roads and shadow magic spells or items."
    "name": "Traveler In Darkness"
  - "desc": "The shadow goblin has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put it to sleep."
    "name": "Unseelie Blessing"
"actions":
  - "desc": "The shadow goblin can make two attacks with its kitchen knife. The second\
      \ attack has disadvantage."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Kitchen Knife"
"reactions":
  - "desc": "When the shadow goblin is hit by an attack from a creature it can see,\
      \ it can curse the attacker. The attacker has disadvantage on attack rolls until\
      \ the end of its next turn."
    "name": "Vengeful Jinx"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/shadow-goblin-ccodex.png"
```
^statblock

## Environment

underground