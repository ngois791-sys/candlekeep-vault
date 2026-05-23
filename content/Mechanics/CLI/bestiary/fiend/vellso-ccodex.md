---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vellso
---
# [Vellso](Mechanics\CLI\bestiary\fiend/vellso-ccodex.md)
*Source: Creature Codex p. 92*  

*This lanky, gray, hairless fiend grins widely, revealing a mouth full of long, sharp teeth and a lolling tongue, dripping saliva. Four short, black horns crown its temples and forehead above a pair of shining black eyes. The creature's hunched posture makes it hard to gauge its true size.*

## Cruel Hunters

Vellso demons chase after their quarry in a loping crouch, employing their wiry arms and the claws on their fingers to gain a purchase as they run up vertical surfaces as quickly as they do on level ground. These fiends love nothing more than hunting intelligent creatures, scraping their claws loudly against stone as they stalk their prey. They also enjoy biting their prey a single time then releasing it, sometimes for days, allowing the wound to fester and torment the hunted.

## Summoned to the Chase

For all their love of hunting, vellso eat little of what they kill. This makes the vellso of great use to ghouls and other creatures capable of summoning them, as prey is either left to be devoured or to rise as undead, usually marked in some way to show it was slain by the demon.

## Telepaths

Vellso have difficulty with speech due to their dagger-like teeth and long, lolling tongues. They rely on their telepathy for communication.

> [!note] Carrion Curse
> 
> Within a day, a dark discoloration around the wound is accompanied by the smell of putrefying flesh. Unless serious measures are taken to mask the smell, carrion eaters of all kinds will be drawn to the infected creature, gaining advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks to track the creature by smell within their usual range.
> 
> While infected with carrion curse, a creature can't be healed magically and can only heal naturally through rest and by spending hit dice. At the end of each long rest, a creature infected with carrion curse must succeed on a DC 13 Constitution saving throw or gain one level of [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion). If an infected creature succeeds on the saving throw, it no longer gains [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion) levels each day. A second successful save at the end of a long rest cures the disease. The abyssal disease resists many efforts at treatment and can only be cured by a [greater restoration](Mechanics/CLI/spells/greater-restoration-xphb.md) spell or similar magic.
> 
> A living creature that dies from the effects of carrion curse has a 75% chance of rising again as a [blood zombie](Mechanics/CLI/bestiary/undead/blood-zombie-ccodex.md) within 24 hours.
^carrion-curse

```statblock
"name": "Vellso (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "9"
  - !!int "14"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+8"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Abyssal, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The vellso has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The vellso has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The vellso's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The vellso can climb surfaces, including upside down on ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The vellso makes two attacks. one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) piercing damage and the target must succeed on a DC 15 Constitution\
      \ saving throw or take 13 (3d8) necrotic damage and contract the carrion curse\
      \ disease (see sidebar)."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/vellso-ccodex.png"
```
^statblock

## Environment

planar