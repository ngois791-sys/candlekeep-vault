---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ichneumon
---
# [Ichneumon](Mechanics\CLI\bestiary\monstrosity/ichneumon-ccodex.md)
*Source: Creature Codex p. 224*  

*With powerful jaws and teeth capable of shearing scales from meat with ease, the creature resembles a weasel the size of a brown bear.*

## Outsized Temerity

These creatures live in burrows and caves whose previous inhabitants were likely devoured by the new residents. Wily hunters, ichneumons prey upon all kinds of creatures, but they go to great lengths and far out of their way to feast on dragon eggs, or the dragons themselves if they can.

## Resourceful Rodent

Ichneumons have a keen animal intelligence, and they make an innovative use of their environment. A musky oil with insulating properties coats the fur of an ichneumon, granting it a measure of protection. When an ichneumon has the luxury of time to prepare before hunting, it finds the nearest source of mud and applies layer after layer to itself. The mud bonds with the creature's oily coat and forms a hard, thick outer armor, enhancing its natural protections.

## Hunted and Hated

The ichneumon's very existence is a source of humiliation and outrage for dragonkind. The mention of a dragon's name who was killed by an ichneumon is considered distasteful among dragons once they have hunted for the killer and settled the matter. Different standards of decency apply for other beings, however, and any non-dragon foolish enough to mention an ichneumon within hearing of a dragon might never be heard from again.

```statblock
"name": "Ichneumon (CCodex)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor; 18 from Mud Armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "4"
"stats":
  - !!int "22"
  - !!int "18"
  - !!int "18"
  - !!int "6"
  - !!int "14"
  - !!int "12"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "8"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Acrobatics](Mechanics/CLI/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"damage_resistances": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 12"
"languages": ""
"cr": "11"
"traits":
  - "desc": "The ichneumon is immune to a dragon's Frightful Presence and has advantage\
      \ on saving throws against the breath weapons of dragons."
    "name": "Draconic Predator"
  - "desc": "If the ichneumon is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the ichneumon instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The ichneumon has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "If the ichneumon spends an hour applying mud to itself, it can increase\
      \ its AC by 2 for 8 hours."
    "name": "Mud Armor"
"actions":
  - "desc": "The ichneumon makes three attacks. two with its bite and one with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (4d6 + 6) piercing damage and the target is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 18). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the ichneumon can't use its bite on another target."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 16 (3d6 + 6) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/ichneumon-ccodex.png"
```
^statblock

## Environment

hill, mountain, underground