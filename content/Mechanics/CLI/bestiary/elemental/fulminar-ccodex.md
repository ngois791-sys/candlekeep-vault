---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fulminar
---
# [Fulminar](Mechanics\CLI\bestiary\elemental/fulminar-ccodex.md)
*Source: Creature Codex p. 165*  

*What seemed to be a storm cloud takes the shape of a feline predator. Flashes of lightning course through its semisolid body as it strikes with overwhelming speed.*

## Aerial Felines

Fulminars are creatures composed of semisolid elemental matter and roughly shaped like large feline predators.

## Cloud Giant Allies

Fulminars were either created or first summoned by powerful cloud giant sorcerers. They can also be found in the company of djinnis, silver dragons, and other creatures strongly connected to the element of air. It is unclear whether they have their own motives or are directed by a higher, elemental power.

## Lightning-Fast Slayers

Thanks to their speed, stealth, and a strange magical ability to entrap creatures with shackles of lightning, fulminars are extremely versatile, serving as spies, assassins, and shock troops.

## Elemental Nature

A fulminar doesn't require air, food, drink, or sleep.

```statblock
"name": "Fulminar (CCodex)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "112"
"hit_dice": "15d10 + 30"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "20"
  - !!int "14"
  - !!int "8"
  - !!int "17"
  - !!int "10"
"speed": "90 ft., fly 90 ft. (hover)"
"saves":
  - "dexterity": !!int "9"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 17"
"languages": "Auran"
"cr": "9"
"traits":
  - "desc": "The fulminar doesn't provoke an opportunity attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
  - "desc": "Bolts of lightning course around the fulminar's body, shedding bright\
      \ light in a 5-to 20-foot radius and dim light for an additional number of feet\
      \ equal to the chosen radius. The fulminar can alter the radius as a bonus action."
    "name": "Essence of Lightning"
  - "desc": "The fulminar can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing. A creature\
      \ that touches the fulminar or hits it with a melee attack while within 5 feet\
      \ of it takes 7 (2d6) lightning damage."
    "name": "Lightning Form"
"actions":
  - "desc": "The fulminar makes three attacks. one with its bite and two with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d8 + 5) piercing damage and 7 (2d6) lightning damage and the target\
      \ can't take reactions until the end of the fulminar's next turn."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) slashing damage and 7 (2d6) lightning damage."
    "name": "Claw"
  - "desc": "The fulminar magically creates three sets of shackles of lightning, each\
      \ of which can strike a creature the fulminar can see within 60 feet of it.\
      \ A target must make a DC 16 Dexterity saving throw. On a failure, the target\
      \ takes 18 (4d8) lightning damage and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ for 1 minute. On a success, the target takes half the damage but isn't [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ A [restrained](Mechanics/CLI/rules/conditions.md#Restrained) creature can\
      \ repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Lightning Shackles (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/elemental/token/fulminar-ccodex.png"
```
^statblock

## Environment

grassland, hill, mountain