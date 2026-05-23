---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Execrable Shrub
---
# [Execrable Shrub](Mechanics\CLI\bestiary\fiend/execrable-shrub-ccodex.md)
*Source: Creature Codex p. 304*  

{This crimson shrub is covered in brilliant, red thorns and mottled, blood-colored foliage. Small white flowers bloom on its branches before rapidly turning into stone hard fruit. Smoke rises from its leaves, and the ground where it grows is hot to the touch.}

The shrub is sentient and cunning. Evil creatures find they are welcomed into its thorny mass without impediment, and the shrub is grown as a perimeter defense for fiendish strongholds. Hunger and its callous nature prevent it from being a reliable ally, and the creatures who believe they control the execrable shrub often wind up feeding its thirst for blood.

## Nurturers of Evil

The execrable shrub offers shelter and protection to all manner of foul things. The plant typically grows around old ruins or caverns to tempt monstrous creatures to lair there. So long as the shrub has a steady supply of blood and meat, the relationship between plant and inhabitant remains agreeable.

## Resentful

The execrable shrub is the lowest form of fiendish plant. For this reason, it is often abused and slaughtered to feed the more advanced forms. This makes the shrub distrustful of other fiendish plants, and, though it will obey the stronger varieties, it secretly plots to usurp them. In combat, the shrub might seize on an opportunity to feed on a wounded ally.

```statblock
"name": "Execrable Shrub (CCodex)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "10"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "10 ft., burrow 10 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "poison, piercing"
"damage_immunities": "fire"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "tremorsense 60 ft., passive Perception 14"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "Whenever a creature is reduced to 0 hp within 60 feet of the execrable\
      \ shrub, the shrub regains 5 (1d10) hp."
    "name": "Healed By Blood"
  - "desc": "The execrable shrub knows if a creature within 60 feet of it is evil-aligned\
      \ or not."
    "name": "Like Calls to Like"
  - "desc": "Using telepathy, the execrable shrub can magically communicate with any\
      \ other evil-aligned creature within 100 feet of it. This communication is primarily\
      \ through images and emotions rather than actual words."
    "name": "Limited Telepathy"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage plus 2 (1d4) fire damage."
    "name": "Burning Slash"
  - "desc": "The execrable shrub releases a billowing cloud of smoke in a 10-foot-radius\
      \ that lasts for 1 minute and moves with the shrub. The area affected by the\
      \ smoke is heavily obscured."
    "name": "Smolder (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/execrable-shrub-ccodex.png"
```
^statblock

## Environment

any