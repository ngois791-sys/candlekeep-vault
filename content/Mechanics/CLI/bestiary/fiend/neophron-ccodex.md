---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Neophron
---
# [Neophron](Mechanics\CLI\bestiary\fiend/neophron-ccodex.md)
*Source: Creature Codex p. 87*  

*This creature has the sallow skin and sharp features of a ghoul, but its mouth unhinges impossibly wide, the lower jaw reaching almost to its waist. It has a ruff of reddish feathers around its neck and black, hook-like claws on its fingers and toes.*

Neophron are shapechanging, ghoulish demons that favor deserts and other areas where giant vultures are common, so they draw less attention when they change their shape. With a little care and a lot of luck, a neophron in its true form can pass as a ghoul, at a distance.

## Eyes and Teeth

Servants of the Unsated God, neophron demons are direct extensions of his will and influence. Employed as trackers, neophron bring their keen sense to bear, sniffing out particular victims.

## Impossible Hunger

Neophron ravenously devour any flesh they find, living and dead alike. No matter how much they eat, hunger gnaws at them, driving them to find new victims. Neophron can unhinge their maws to an impossible gape, and their guts defy all understanding of space, allowing them to swallow creatures their size.

## Fonts of Undeath

Humanoids who die in the gullet of a neophron are doomed to serve dark gods of hunger without end. The demon vomits a newly-created undead to spread hunger across the world.

> [!note] Neophron Demons and Death Cults
> 
> As their vulture-like appearance suggests, neophron demons are found devouring carrion and blood sacrifices in hideous dark rites in deserts and across plains. Their ability to create undead makes them especially popular with vampires, ghouls, and other intelligent undead, and their flight and shapeshifting make them common scouts for evil armies. The following examples are drawn from the Midgard setting (though applicable elsewhere).
> 
> **For the Blood Goddess.** The Red Goddess Marena seems quite fond of the neophron, though primarily as temple servants and plague bearers. The demons have been known to live in the belltowers of her cathedrals, creating nests of bone similar (at a distance) to stork nests. Being demons, the nests never contain eggs but are supplied with rounded, egglike skulls in profusion. On some occasions, a pair of neophron demons might carry a priestess swiftly through the sky from one place to another for some unholy purpose.
> 
> **The Twelve Horse Bargain.** While horses find a neophron's presence unsettling, Khazzaki khans and centaur chieftains have long struck bargains with the demons in exchange for a blood sacrifice of twelve horses or an entire herd of other animals. This is a notable amount of flesh and blood, but the power of the neophron to scout in darkness grants the upper hand to those who employ them in raiding, surprise attacks, and even the wholesale clash of armies. The ritual is known as an evil one, and the nomads avoid the summoning when they can. Those leaders who employ it are always somewhat suspect.
> 
> **In the Ghoul Empire.** Surprisingly, neophron demons thrive underground among the ghouls, where they often serve as bodyguards for darakhul nobles, evil high priests, and other notables. Their darkvision makes it possible for them to fly along underground passages with tremendous speed, tracking and often overtaking small bands of derro raiders, kobold merchants, or other underworld travelers.
> 
> **In Desert Oases.** Neophron work with gypsosphinxes (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) in desert territories, acting as scouts and spies for the creatures. They operate as guardians of temples and religious sites of Set and Anu Akma, the god of the underworld. When a [herald of undeath](Mechanics/CLI/bestiary/undead/herald-of-undeath-ccodex.md) draws near, a neophron's cries of adulation are loud, often the only warning those nearby get of the herald's approach.
> 
> **The Throne of Bone.** In one of the outer planes devoted to flesh, bone, and suffering, the neophron are constructing an enormous throne of bones and gristle stained red with blood and surrounded by a cathedral made of living and undead creatures. It is said a creature connected to the neophron will ascend the throne, look out over the multiverse, and assume the mantle of godhood.
^neophron-demons-and-death-cults

```statblock
"name": "Neophron (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "shapechanger, demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d8 + 60"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "20"
  - !!int "8"
  - !!int "16"
  - !!int "14"
"speed": "40 ft., fly 90 ft."
"skillsaves":
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+6"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 13"
"languages": "Abyssal, telepathy 60 ft."
"cr": "8"
"traits":
  - "desc": "The neophron can use its action to polymorph into a tiger or a wolf,\
      \ or back into its true form. Other than its size, its statistics are the same\
      \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
      \ reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "The neophron makes three attacks. one with its bite and one with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15\
      \ (2d10 + 4) piercing damage. If the target is a Medium or smaller creature,\
      \ it must succeed on a DC 16 Dexterity saving throw or be swallowed. A swallowed\
      \ creature is [blinded](Mechanics/CLI/rules/conditions.md#Blinded) and [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ it has total cover against attacks and other effects outside the neophron,\
      \ and it takes 14 (4d6) acid damage at the start of each of the neophron's\
      \ turns.\n\nThe neophron can only swallow one creature at a time. If a humanoid\
      \ dies while swallowed, it transforms into a ghast. At the start of its next\
      \ turn, the neophron regurgitates the ghast into an unoccupied space within\
      \ 10 feet. The ghast is under the neophron's control and acts immediately after\
      \ the neophron in the initiative count.\n\nIf the neophron takes 20 or more\
      \ damage in a single turn from a creature inside it, the neophron must succeed\
      \ on a DC 20 Constitution saving throw at the end of that turn or regurgitate\
      \ the swallowed creature, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the neophron. If the neophron dies, a swallowed\
      \ creature is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ by it and can escape the corpse by using 5 feet of movement, exiting [prone](Mechanics/CLI/rules/conditions.md#Prone). "
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) slashing damage. The target must succeed on a DC 16 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ until the end of its next turn."
    "name": "Claws"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/neophron-ccodex.png"
```
^statblock

## Environment

any