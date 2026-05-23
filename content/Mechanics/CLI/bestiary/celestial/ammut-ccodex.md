---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/badlands
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ammut
---
# [Ammut](Mechanics\CLI\bestiary\celestial/ammut-ccodex.md)
*Source: Creature Codex p. 15*  

*Lumbering across the sand, these massive monsters have the head of a crocodile, the body of a lion, and the hind quarters of a hippopotamus.*

## Touched by Radiance

Known as "devourers of the dead," ammut are said to have descended from a deity whose domain included the judgment of souls. The monsters have maintained a small portion of this heritage, and their blood is valued by alchemists for use in potent healing draughts.

## Bane of the Undead

Ammut are known to devour the walking dead, often swallowing them whole. The undead persist in the belly of the creature and are eventually absorbed by the ammut, setting the souls of the dead to permanent rest. It is said that powerful priests from distant sand-bound empires ride ammut into battle against undead armies.

```statblock
"name": "Ammut (CCodex)"
"size": "Large"
"type": "celestial"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d10 + 90"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "23"
  - !!int "6"
  - !!int "16"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "10"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "cold, radiant"
"damage_immunities": "necrotic"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 21"
"languages": ""
"cr": "9"
"traits":
  - "desc": "An undead creature that starts its turn within 10 feet of the ammut must\
      \ succeed on a DC 16 Charisma saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn. If a creature's saving throw is successful\
      \ or the effect ends for it, the creature is immune to the ammut's Judging Aura\
      \ for the next 24 hours."
    "name": "Judging Aura"
  - "desc": "The ammut has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The large belly of the ammut magically sustains the life of those trapped\
      \ inside it. A creature caught in its belly doesn't need food, water, or air.\
      \ The ammut can maintain one Medium or smaller creature this way as long as\
      \ the ammut remains alive."
    "name": "Prison Belly"
"actions":
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 32\
      \ (5d10 + 5) piercing damage plus 10 (3d6) radiant damage. If the target\
      \ is Large or smaller, it is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ (escape DC 17). Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ and the ammut can't bite another target."
    "name": "Bite"
  - "desc": "The ammut makes one bite attack against a Large or smaller target it\
      \ is grappling. If the attack hits, the target is also swallowed, and the grapple\
      \ ends. While swallowed, the target is [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ and [restrained](Mechanics/CLI/rules/conditions.md#Restrained) and it has\
      \ total cover against attacks and other effects outside the ammut. An ammut\
      \ can only have one Medium or smaller creature swallowed at a time.\n\nIf the\
      \ ammut takes 30 damage or more on a single turn from the swallowed creature,\
      \ the ammut must succeed on a DC 14 Constitution saving throw at the end of\
      \ that turn or regurgitate the creature, which falls [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ in a space within 10 feet of the ammut. If the ammut dies, a swallowed creature\
      \ is no longer [restrained](Mechanics/CLI/rules/conditions.md#Restrained) by\
      \ it and can escape from the corpse by using 10 feet of movement, exiting [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Swallow"
  - "desc": "The ammut inhales the tortured spirits of undead within 30 feet. Each\
      \ undead creature of CR 1 and lower in the area is automatically destroyed.\
      \ All other undead must succeed on a DC 17 Wisdom saving throw or be [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Ghost Breath (1/Day)"
  - "desc": "The ammut attempts to absorb the spirit of a dead or undead creature\
      \ in its belly. The creature must succeed on a DC 16 Wisdom saving throw or\
      \ be absorbed by the ammut. A creature absorbed this way is destroyed and can't\
      \ be reanimated, though it can be restored to life by powerful magic, such as\
      \ a [resurrection](Mechanics/CLI/spells/resurrection-xphb.md) spell. The ammut\
      \ regains hp equal to the absorbed creature's hp maximum."
    "name": "Absorb Spirit (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/ammut-ccodex.png"
```
^statblock

## Environment

badlands, coastal