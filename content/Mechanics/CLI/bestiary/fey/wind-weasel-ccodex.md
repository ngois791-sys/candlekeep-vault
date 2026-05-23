---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wind Weasel
---
# [Wind Weasel](Mechanics\CLI\bestiary\fey/wind-weasel-ccodex.md)
*Source: Creature Codex p. 375*  

*In the autumnal deep forest, the wind stirs fallen leaves into swirling patterns—but some are not what they seem. The whipping winds tear at the skin of hapless travelers before resolving into fierce, weasel-like creatures with long, sickle-shaped claws.*

## Claws to Rip Flesh

Appearing as human-sized upright mustelids, these white and blue, furry fey of the deep forest are jealous of mortal intruders and can exact a heavy price from the incautious explorer. The claws on each front foot are extended like curved blades that inflict deep, scything wounds.

## Wind Riders

Wind weasels have an affinity for the element of air. By running in a tight circle, a wind weasel can generate—and become one with—a swirling vortex of abrasive wind. The weasel uses the whirlwind to surprise and slash at its foes—or to flee if the fight proves unequal.

## Seasonally Affected

During spring and summer, wind weasels are largely passive and spend most of their time in wind form, drifting lazily around the woodlands. As the leaves and temperatures fall, a wind weasel's mood becomes more vicious, and it actively seeks prey. Though largely beings of the wilds, wind weasels are known to associate with shadow fey and may sometimes be found as guards on the fringes of fey courts or deep woodland groves.

```statblock
"name": "Wind Weasel (CCodex)"
"size": "Medium"
"type": "fey"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "12"
  - !!int "11"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Sylvan"
"cr": "2"
"traits":
  - "desc": "The wind weasel can enter a hostile creature's space and stop there.\
      \ It can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Air Form (Whirlwind Form Only)"
  - "desc": "The wind weasel doesn't provoke an opportunity attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby (Whirlwind Form Only)"
  - "desc": "Until it attacks or uses Whirling Leaves, the wind weasel is indistinguishable\
      \ from a natural dust devil unless a creature succeeds on a DC 15 Intelligence\
      \ ([Investigation](Mechanics/CLI/rules/skills.md#Investigation)) check."
    "name": "Hidden In the Wind (Whirlwind Form Only)"
  - "desc": "The wind weasel can use its action to polymorph into a whirlwind. It\
      \ can revert back to its true form as a bonus action. It statistics are the\
      \ same in each form. Any equipment it is wearing or carrying isn't transformed.\
      \ It reverts to its true form if it dies. While a whirlwind, it has a flying\
      \ speed of 60 feet, immunity to the [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
      \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and [prone](Mechanics/CLI/rules/conditions.md#Prone) conditions, and resistance\
      \ to bludgeoning, piercing, and slashing damage from nonmagical attacks. The\
      \ wind weasel can't make bite or claw attacks while in whirlwind form."
    "name": "Shapechanger"
  - "desc": "When the wind weasel is subjected to the slow spell, it doesn't suffer\
      \ the effects of the spell but instead is forced into its true form and [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ until the end of its next turn."
    "name": "Windy Speed (Whirlwind Form Only)"
"actions":
  - "desc": "The wind weasel makes three attacks. one with its bite and two with its\
      \ scythe claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d10 + 3) slashing damage."
    "name": "Scythe Claw"
  - "desc": "Each creature in the wind weasel's space must make a DC 13 Dexterity\
      \ saving throw, taking 21 (6d6) slashing damage on a failed save, or half\
      \ as much damage on a successful one."
    "name": "Whirling Leaves (Whirlwind Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/wind-weasel-ccodex.png"
```
^statblock

## Environment

forest