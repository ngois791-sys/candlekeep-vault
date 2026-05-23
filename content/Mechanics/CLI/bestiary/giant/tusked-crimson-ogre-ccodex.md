---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tusked Crimson Ogre
---
# [Tusked Crimson Ogre](Mechanics\CLI\bestiary\giant/tusked-crimson-ogre-ccodex.md)
*Source: Creature Codex p. 279*  

*With prodigious, upward-curving tusks and blood-red skin, this ogre looks even more bestial than the rest of its race. Veins stand out over its heavily-muscled body, and its eyes display a madness beyond the promise of cruelty and stupidity inherent in its fellows.*

## Few in Number

Profane magical experimentation produced the tusked crimson ogres long ago, though they possess the capability to breed among themselves and their ogre kin. Seldom do they appear in great numbers due to their ferocity and utter lack of fear.

## Shunned by Normal Ogres

Other ogres have learned, for all their dimwittedness, to let tusked crimson ogres have their way, as a means of self-preservation.

> [!note] Tusked Crimson Ogres in Midgard
> 
> A creation of the cult known as the Sanguine Path, tusked crimson ogres became widely known in the expansionist wars of the Mharoti Dragon Empire, who employ the brutes as shock troops. Bred for war by the blood mages of Kaa'nesh, the tusked crimson ogres' bloodthirsty natures receive constant reinforcement through cult indoctrination. The ogres often bathe in blood before battle, which they believe makes them more powerful, offers them protection, and guarantees them an afterlife of joyous slaughter should they fall to the enemy.
^tusked-crimson-ogres-in-midgard

```statblock
"name": "Tusked Crimson Ogre (CCodex)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[half plate armor](Mechanics/CLI/items/half-plate-armor-xphb.md)"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "7"
  - !!int "7"
"speed": "40 ft."
"saves":
  - "constitution": !!int "6"
  - "wisdom": !!int "1"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+4"
"damage_resistances": "poison"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 8"
"languages": "Common, Giant"
"cr": "5"
"traits":
  - "desc": "The ogre has advantage on melee attack rolls against any creature that\
      \ doesn't have all its hp."
    "name": "Blood Frenzy"
  - "desc": "When the ogre reduces a creature to 0 hp with a melee attack on its turn,\
      \ the ogre can take a bonus action to move up to half its speed and make one\
      \ bite attack."
    "name": "Rampage"
"actions":
  - "desc": "The tusked crimson ogre makes two attacks. one with its morningstar and\
      \ one with its bite."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Morningstar"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "If the tusked crimson ogre doesn't have all of its hp, it flexes and\
      \ roars, spraying blood from its wounds. Each creature within 15 feet of the\
      \ ogre must make a DC 14 Constitution saving throw. On a failure, a creature\
      \ takes 21 (6d6) acid damage and goes berserk. On a success, a creature takes\
      \ half the damage and doesn't go berserk. On each of its turns, a berserk creature\
      \ must attack the nearest creature it can see, eschewing ranged or magical attacks\
      \ in favor of melee attacks. If no creature is near enough to move to and attack,\
      \ the berserk creature attacks an object, with preference for an object smaller\
      \ than itself. Once a creature goes berserk, it continues to do so until it\
      \ is [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious), regains all\
      \ of its hp, or is cured through [lesser restoration](Mechanics/CLI/spells/lesser-restoration-xphb.md)\
      \ or similar magic."
    "name": "Berserker's Blood (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/tusked-crimson-ogre-ccodex.png"
```
^statblock

## Environment

badlands, grassland