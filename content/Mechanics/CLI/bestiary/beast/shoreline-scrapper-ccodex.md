---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shoreline Scrapper
---
# [Shoreline Scrapper](Mechanics\CLI\bestiary\beast/shoreline-scrapper-ccodex.md)
*Source: Creature Codex p. 330*  

*This bulky crustacean generates a magnetic pulse that draws metal to its growing, shell-like shelter.*

## Metal Scavenger

A shoreline scrapper instinctively seeks metal and gathers it using a magnetic pulse. The creature's accumulated metal forms a portable shelter that acts as its shell.

## Hunted for Hoard

A shoreline scrapper's hoard might include more than just rusty debris. As a result of scavenging a shipwreck or sunken city, its metal shell may contain valuables. For this reason, treasure seekers sometimes hunt shoreline scrappers. They hope to uncover riches from the creature's metal-hoard shell, but those foolish enough to engage a shoreline scrapper while equipped with metal rarely survive.

## Conditioned for War

Some aquatic and coastal races train shoreline scrappers for combat. On command, shoreline scrappers charge toward enemies and disarm them of metal equipment. Deployed soldiers then enter the fray to annihilate their vulnerable enemies.

```statblock
"name": "Shoreline Scrapper (CCodex)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "3"
  - !!int "11"
  - !!int "5"
"speed": "30 ft., swim 20 ft."
"saves":
  - "constitution": !!int "5"
"skillsaves":
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+2"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 10"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The shoreline scrapper can breathe air and water."
    "name": "Amphibious"
  - "desc": "At the start of each of the shoreline scrapper's turns, each creature\
      \ within 5 feet of the scrapper must succeed on a DC 15 Strength saving throw\
      \ or the metal items worn or carried by it stick to the scrapper's shell. A\
      \ creature that is made of metal or is wearing metal armor that fails the saving\
      \ throw is stuck to the shell and [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ If the item is a weapon and the wielder can't or won't let go of the weapon,\
      \ the wielder is adhered to the shell and is [restrained](Mechanics/CLI/rules/conditions.md#Restrained).\
      \ A stuck item can't be used. A creature can take its action to remove one creature\
      \ or object from the shoreline scrapper's shell by succeeding on a DC 15 Strength\
      \ check.\n\nItems made of gold and silver are unaffected by the shoreline scrapper's\
      \ Magnetic Shell. When the shoreline scrapper dies, all metal creatures and\
      \ objects are released."
    "name": "Magnetic Shell"
  - "desc": "The shoreline scrapper can pinpoint, by scent, the location of metals\
      \ within 60 feet of it."
    "name": "Metal Sense"
"actions":
  - "desc": "The shoreline scrapper makes two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (2d10 + 3) slashing damage."
    "name": "Claw"
  - "desc": "The shoreline scrapper causes a surge in the magnetic power of its shell.\
      \ Each creature within 25 feet of the shoreline scrapper is subjected to its\
      \ Magnetic Shell. On a failed save, a creature's metal objects or the creature\
      \ itself, if it is made of metal or wearing metal armor, are pulled up to 25\
      \ feet toward the shoreline scrapper and adhere to its shell. Creatures adhered\
      \ to the shoreline scrapper's shell are [restrained](Mechanics/CLI/rules/conditions.md#Restrained)."
    "name": "Magnetic Pulse (Recharge 5-6)"
"reactions":
  - "desc": "The shoreline scrapper adds 4 to its AC against one melee attack that\
      \ would hit it as it withdraws into its shell. Until it emerges, it increases\
      \ its AC by 4, has a speed of 0 ft., and can't use its claws or magnetic pulse.\
      \ The shoreline scrapper can emerge from its shell as a bonus action."
    "name": "Shell Protection"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/beast/token/shoreline-scrapper-ccodex.png"
```
^statblock

## Environment

underwater