---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yek
---
# [Yek](Mechanics\CLI\bestiary\fiend/yek-ccodex.md)
*Source: Creature Codex p. 95*  

*With a flattened, lupine face and skin pulled taught over its skeletal frame, the creature is terrible to behold. It wears entrails and bones of previous victims over its dark red fur and has black spikes jutting from its spine.*

## Favor Warlike Lords

While Qorgeth (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), [Chittr'k'k](Mechanics/CLI/bestiary/fiend/chittrkk-demon-lord-of-rats-ccodex.md), and similar demonic figures are popular overlords for yek demons, their greatest reverence is usually given to Mechuiti, lord of cannibals, and to [Typhon](Mechanics/CLI/bestiary/fiend/typhon-father-of-monsters-ccodex.md), lord of monsters, for the lords' sheer constant states of war. At other times they swear themselves to [hierophant liches](Mechanics/CLI/bestiary/undead/hierophant-lich-ccodex.md), umbral vampires, or anyone else who can guarantee them a steady supply of fresh, strong bone, frequent combat, and wanton destruction.

## Pack of Cannibals

Yek are loathsome fiends, hated by other demons because of their cannibalistic tendencies. They are creatures that do not care what flesh they feed upon but prefer it to be raw and wriggling. Though vicious fighters alone, they are rarely encountered without their pack. Even the most powerful of fiends can be brought down by a pack of yek.

## Pack Loyalties

The lesser yek demons are completely subservient to their pack leader, sometimes called the alpha yek, and follow that leader's direction in all things. This includes targets to attack, to which demon lord to swear obeisance, and when to betray one demonic warlord for another. They always move together as a group, directed by the strongest. When a yek pack leader is slain, the lesser yek scatter in complete disarray. They choose another leader within a few days, celebrating the occasion with an unholy feast. Some demonologists have confirmed that the weakest member of the pack is devoured by the new leader during this feast.

> [!note] Yek Demons as Mercenaries
> 
> While yek demons usually choose their own masters, they are among the most mercenary of demons and can be bargained with to a greater degree than most. An evil spellcaster can perform a yek summoning ritual (its details shared among malign warlords and wizards) offering "blood and bone and a stream of rich and constant plunder" to the demons' pack leader, in exchange for service against a particular foe. If the plunder and cartloads of bone are not forthcoming (as, for instance, when a foe withdraws from the battlefield), the yek demons invariably take their fee out of their summoner or that summoner's troops and followers.
> 
> This practice sometimes spreads to merely rapacious and opportunistic armies seeking an edge. For instance, in a controversial move, the armies of the Dragon Empire have begun using yek as shock troops, summoning the fiends behind enemy lines and letting them do the dirty work.
^yek-demons-as-mercenaries

```statblock
"name": "Yek (CCodex)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "77"
"hit_dice": "14d6 + 28"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "15"
  - !!int "9"
  - !!int "13"
  - !!int "10"
"speed": "30 ft., climb 30 ft."
"saves":
  - "strength": !!int "5"
  - "dexterity": !!int "5"
  - "constitution": !!int "4"
  - "intelligence": !!int "1"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "If a creature has three or more yek attached to it from a bite attack\
      \ at the end of its turn, the creature must succeed on a DC 12 Constitution\
      \ saving throw or its Constitution score is reduced by 1d4 as the demons feast\
      \ upon the creature's flesh."
    "name": "Devouring Swarm"
  - "desc": "The yek has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The yek has advantage on attack rolls against a creature if at least\
      \ one of the yek's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "The yek makes one bite attack and one claw attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (3d6 + 3) piercing damage, and, if the target is Large or smaller, the yek\
      \ demon attaches to it. While attached, the yek demon can make this attack only\
      \ against the target and has advantage on the attack roll. The yek demon can\
      \ detach itself by spending 5 feet of its movement. A creature, including the\
      \ target, can take its action to detach the yek demon by succeeding on a DC\
      \ 13 Strength check."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (3d4 + 3) slashing damage."
    "name": "Claw"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/alpha-yek-ccodex.png"
```
^statblock

## Environment

any