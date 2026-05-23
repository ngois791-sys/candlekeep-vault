---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ankou Soul Seeker
---
# [Ankou Soul Seeker](Mechanics\CLI\bestiary\dragon/ankou-soul-seeker-ccodex.md)
*Source: Creature Codex p. 38*  

*A cloak of inky shadows flutters around the bleached-white bones of a dragon. The skeletal dragon moves slowly and methodically, as if searching for something..*

Ankou are servitors of the gods of death. The first dragon to die each century is reborn as an ankou under the death god's auspices and is charged with living a second life as an apparition that ushers the souls of the dead to their final resting places.

## Creatures of Many Forms

Ankou are made from the spirits of dragons, and their natural form is that of a shadowy wyrm. However, ankou rarely manifest before mortals in their natural form for fear of sowing chaos throughout the mortal world. Many humanoid cultures tell legends of the ankou's baleful visage, claiming that the sight of an ankou in its true form is enough to drive a sane human mad and a dead human's spirit to becoming a howling specter. An ankou can adopt the form of any creature it has seen in its life or unlife, but tell‑tale signs of its true nature always leak through to the new form, such as a hollow voice that does not echo or wispy hair, fur, or feathers that move by an unfelt wind. The most popular forms for ankou to assume are humanoid skeletons, ravens, kindly elders, or young children.

## Charged with Grim Duty

The role of the ankou is a necessary one, but one which few dragons would willingly accept. Some dragons go to extreme lengths to avoid being the first to die in a new century with some even going so far as to accept lichdom before accepting the duty of the ankou. The gods of death are loathe to share such deep secrets with mortals, but it is known that the dragons that become ankou serve for eternity. All ankou obey the gods of death unquestioningly, greeting the souls of the deceased at the moment of their death and escorting them across the planes to their final resting place. A single soul herald ankou serves directly beneath the gods of death, commanding the ranks of ankou soul seekers. Typically, a single seeker claims and transports a soul to the herald residing in an extraplanar retreat, who then offers it personally to the gods of death.

## Enforcers of Fate

Though they can live until the end of time, ankou can be killed. Likewise, though ankou have grown wise through eons of life and unlife, they can still be fooled by canny mortals. While creatures that cheat death through cunning and their own wit are often treated with grudging respect by the ushers of souls, the ankou are still duty-bound to send the creatures to the realms of death. Mortals who cheat death by killing ankou gain no such admiration. While a skilled warrior or a powerful dragon can best a single ankou, the slaughter of one of their own sends the ankou into a rage. The ankou soul herald hunts down the transgressor personally in order to cast the creature's soul into the Hells to suffer for its transgression.

## Death God's Servant

The ankou doesn't require air, food, drink, or sleep.

```statblock
"name": "Ankou Soul Seeker (CCodex)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d10 + 72"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "19"
  - !!int "13"
  - !!int "14"
  - !!int "16"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "3"
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 18"
"languages": "All"
"cr": "8"
"traits":
  - "desc": "When an undead creature starts its turn within 30 feet of the ankou,\
      \ the undead must make a DC 15 Constitution saving throw, taking 7 (2d6) radiant\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Aura of Necromancy's Bane"
  - "desc": "As a bonus action while in dim light or darkness, the ankou becomes [invisible](Mechanics/CLI/rules/conditions.md#Invisible).\
      \ The cloak of shadows ends when the ankou chooses to end it as a bonus action,\
      \ when the ankou dies, or if the ankou ends its turn in bright light."
    "name": "Cloak of Shadows"
  - "desc": "The ankou has the celestial type in addition to the dragon type."
    "name": "Death Ascended"
"actions":
  - "desc": "The ankou makes three attacks. one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d10 + 3) piercing damage plus 4 (1d8) cold damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage"
    "name": "Claw"
  - "desc": "The ankou exhales cold fire in a 30-foot line that is 5 feet wide. Each\
      \ creature in that area must make a DC 15 Dexterity saving throw, taking 44\
      \ (8d10) cold damage on a failed save, or half as much damage on a successful\
      \ one. Undead creatures automatically fail the saving throw and treat all damage\
      \ dealt by this breath weapon as radiant instead of cold."
    "name": "Reaper's Breath (Recharge 5-6)"
  - "desc": "The ankou magically polymorphs into any beast, humanoid, or undead creature\
      \ it has seen before that has a challenge rating no higher than its own, or\
      \ back into its true form. It reverts to its true form if it dies. Any equipment\
      \ it is wearing or carrying is absorbed or borne by the new form (the ankou's\
      \ choice). Its statistics, other than its size, are the same in each form and\
      \ it doesn't gain any class features or legendary actions of the new form."
    "name": "Change Shape"
  - "desc": "The ankou can transport itself and up to eight creatures in contact with\
      \ it to another plane of existence. This works like the plane shift spell, except\
      \ dead or incorporeal creatures can be transported and don't have to be willing.\
      \ The ankou can't use this ability to banish an unwilling creature."
    "name": "Usher of Souls"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/ankou-soul-seeker-ccodex.png"
```
^statblock

## Environment

any