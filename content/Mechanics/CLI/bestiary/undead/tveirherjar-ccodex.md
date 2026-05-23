---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tveirherjar
---
# [Tveirherjar](Mechanics\CLI\bestiary\undead/tveirherjar-ccodex.md)
*Source: Creature Codex p. 359*  

*Decomposing warriors arise from among the slain upon the battlefield. Their armor is green with verdigris, and a black miasma emanates from them. Their eye sockets are hollow, dimly glowing a pallid green, and their weapons absorb light.*

## Countering the Valkyrie

Nidhogg, the serpent glutting on the corpses of the fallen while tangled amid the roots of Yggdrasil, has taken issue with the valkyrie poaching the best from the battlefield. He relishes the hatred of those who die with anger in their hearts, turning them into his captains in the fight against the valkyrie.

## Immortal Rage

Nidhogg places a curse upon those who were slain with hatred and rage burning within them, so that mortal men forget them utterly and their name is stricken from song. The tveirherjar have but one purpose: to corrupt the einherjar (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 167) with that same curse.

## Rebirth From Death

Tveirherjar are born into the dusk on the evening of their mortal demise. They stand up from amidst the gore and shamble away into the night. They cannot remember how they came to be, only that they have been given a new, higher purpose: to save their fallen comrades from Valhalla.

## Undead Nature

The tveirherjar doesn't require air, food, drink, or sleep.

```statblock
"name": "Tveirherjar (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md), [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "19"
  - !!int "10"
  - !!int "14"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 12"
"languages": "Common, Draconic"
"cr": "7"
"traits":
  - "desc": "Once reduced to 30 hp or less, the tveirherjar makes all attacks with\
      \ advantage."
    "name": "Battle Frenzy"
  - "desc": "As a bonus action, the tveirherjar forces a creature it hit with its\
      \ Niflheim longsword this round to make a DC 15 Constitution saving throw. The\
      \ creature takes 36 (8d8) necrotic damage on a failed save, or half as much\
      \ damage on a successful one. If an einherjar is reduced to 0 hp by this effect,\
      \ it dies, cursed to become a tveirherjar at sundown."
    "name": "Curse of the Tveirherjar (Recharge 6-6)"
  - "desc": "The tveirherjar's longsword absorbs light within 30 feet of it, changing\
      \ bright light to dim light and dim light to darkness. When the tveirherjar\
      \ dies, its longsword crumbles away, its magic returning to the creator for\
      \ the next tveirherjar."
    "name": "Niflheim Longsword"
  - "desc": "The tveirherjar can locate any einherjar within 1,000 feet. This trait\
      \ works like the locate creature spell, except running water doesn't block it."
    "name": "Unerring Tracker"
"actions":
  - "desc": "A tveirherjar makes two attacks with its Niflheim longsword."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) slashing damage plus 4 (1d8) necrotic damage."
    "name": "Niflheim Longsword"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 30/120 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage plus 10 (3d6) radiant damage, and the target\
      \ is outlined in a shimmering light until the end of the tveirherjar's next\
      \ turn. This light works like the faerie fire spell, except only the tveirherjar\
      \ has advantage on attacks against the creature and the light is not absorbed\
      \ by the tveirherjar's Niflheim longsword."
    "name": "Spear of the Northern Sky (Recharge 5-6)"
  - "desc": "The tveirherjar targets one creature it can see within 30 feet of it.\
      \ If the creature can see the tveirherjar, it must succeed on a DC 15 Wisdom\
      \ saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ for 1 minute. While [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
      \ the creature is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed).\
      \ The creature can repeat the saving throw at the end of each of its turns,\
      \ ending the effect on itself on a success."
    "name": "Terrifying Glare (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/tveirherjar-ccodex.png"
```
^statblock

## Environment

any