---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mantik, Barbed King of the Manticores
---
# [Mantik, Barbed King of the Manticores](Mechanics\CLI\bestiary\npc/mantik-barbed-king-of-the-manticores-ccodex.md)
*Source: Creature Codex p. 262*  

*Much larger than his kin, Mantik's scarred and wizened visage is punctuated by longsword-length teeth that grind and clatter together when he speaks. His coloration is direst crimson, and his black wings appear too withered for flight.*

Inside the sandblasted walls of a ruined castle, the king of the manticores roars decrees to the wind. Mantik, the oldest and most ferocious of his kind, sits atop the shattered throne of a long-forgotten kingdom. He is loved like a god by a loyal clan of kobolds, who bring the beast treasures and sacrifices.

## Withered Wings

Mantik's wings have mysteriously shrunken into two withered appendages. A kobold shaman suggested the Barbed King has come under a curse of some sort. Mantik believes divine magic is the only way to restore his ability to fly, but he is too proud to learn prayer or engage in devotion. Whatever the reason for his withered wings, Mantik bitterly plots to cure his strange affliction.

## The Barbed

The kobolds who worship Mantik refer to themselves as the Barbed. They scurry around the manticore's castle like servile rats, both enamored and terrified of their ruler.

## Covetous

Mantik has a substantial hoard gathered in the ruined chambers under his castle. His manticores raid the infrequent trade caravans traveling the wastes, and several times a year he embarks on treasure hunting expeditions, stalking the many scavenger bands picking through lost battlefields. His throne room is filled with ancient carvings, fractured statues, old tapestries, and jewelry-all displayed on crumbling stone pedestals or awkwardly hung from pock‑marked walls. Mantik both loves and loathes his hoard; he yearns for a castle fit to hold his treasures.

> [!note] Mantik in Midgard
> 
> In Midgard, Mantik dwells in a ruined castle deep in the Red Wastes that sprawl between the Dragon Empire and Khandiria. Surrounded by his motley army, Mantik lusts for a taste of the wealth kept in the Dragoncoil Mountains and in the cities of Khandiria, starting with Isquetta. His own treasury is filled with the spoils of his raids on caravans and drake lairs. He covets the three feathers of Azuran—magical sapphires carved into the shape of crane feathers—most of all. Mantik believes the jewels will restore his ability to fly.
^mantik-in-midgard

```statblock
"name": "Mantik, Barbed King of the Manticores (CCodex)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "18"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Common, Dwarvish, Draconic"
"cr": "9"
"traits":
  - "desc": "Mantik may not fly, levitate, or be polymorphed by any spell or effect."
    "name": "Cursed"
  - "desc": "If Mantik fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "Mantik's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Mantik has advantage on all opportunity attacks, and a creature reduced\
      \ to 0 hp by his attacks has disadvantage on its first death saving throw."
    "name": "Merciless Ferocity"
  - "desc": "If Mantik moves at least 20 feet in a straight line, all tail spike attacks\
      \ made this round have advantage. A creature struck by these tail spike attacks\
      \ must succeed on a DC 16 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Penetrating Volley"
  - "desc": "Mantik has thirty-six tail spikes. Used spikes regrow when he finishes\
      \ a long rest."
    "name": "Tail Spike Regrowth"
"actions":
  - "desc": "Mantik makes three attacks. two with his claws and one with his bite\
      \ or three with his tail spikes."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 100/200 ft., one target. *Hit:*\
      \ 11 (2d8 + 2) piercing damage and the creature must succeed on a DC 16 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn. A creature [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ by the tail spike has its speed halved and can't take the [Dash](Mechanics/CLI/rules/actions.md#Dash)\
      \ action."
    "name": "Tail Spike"
  - "desc": "Mantik unleashes an ground-shaking roar. Each creature within 60 feet\
      \ who can hear him must succeed on a DC 14 Wisdom saving throw or be [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ for 1d4 rounds."
    "name": "Roar of the Barbed King (Recharge 5-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Mantik can expend a use to take one of the following actions. Mantik regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Mantik moves up to his speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "Mantik lets loose a throaty growl. Each creature within 60 feet who can\
      \ hear Mantik must succeed on a DC 14 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ of him until the end of its next turn."
    "name": "Growl (Costs 2 Actions)"
  - "desc": "Mantik makes a tail spike attack."
    "name": "Tail Spike (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/npc/token/mantik-barbed-king-of-the-manticores-ccodex.png"
```
^statblock

## Environment

badlands