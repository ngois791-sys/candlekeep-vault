---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thorned Sulfurlord
---
# [Thorned Sulfurlord](Mechanics\CLI\bestiary\fiend/thorned-sulfurlord-ccodex.md)
*Source: Creature Codex p. 306*  

*This fiend appears as a humanoid made from ashen twists of briar, but, instead of legs, its torso is connected to a shifting mass of twisting briar and thorns. Its visage is a wooden mask that changes from torment to malevolence to ecstasy. Its powerful hands are encircled by great clouds of yellow, sulfurous smoke. A forge-hot flame burns in its heart with enough intensity to scald living things that draw too close.*

## Immolating Reclaimer

Unlike most other fiendish plants whose evil is tempered somewhat by its plant-like origins, the thorned sulfurlord is a craven destructor. Wherever it goes, it burns natural vegetation to cinders and uses this new base to promote the growth of execrable shrubs and devil boughs. It is especially fond of lairing in towns or cities that were reduced to ruins by fire, drawing power and pleasure from burned edifices.

## Servant to None

The thorned sulfurlord does not respect the hierarchy of the Hells or the Abyss. It may form alliances with other fiends or evil creatures, provided the partnership furthers its desire to burn and replace the natural world. It may form a pact with a circle of dark-hearted druids, but only if it is given a large grove to immolate and seed.

```statblock
"name": "Thorned Sulfurlord (CCodex)"
"size": "Huge"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d12 + 54"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "9"
  - !!int "12"
"speed": "20 ft."
"saves":
  - "strength": !!int "9"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 17"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "11"
"traits":
  - "desc": "The ground within 10 feet of the thorned sulfurlord is difficult terrain."
    "name": "Burning Tangle"
  - "desc": "At the start of each of the thorned sulfurlord's turns, each creature\
      \ within 10 feet of the sulfurlord takes 7 (2d6) fire damage. If the thorned\
      \ sulfurlord takes cold damage, this trait doesn't function at the start of\
      \ its next turn."
    "name": "Hell Core"
  - "desc": "The thorned sulfurlord knows if a creature within 100 feet of it is evil-aligned\
      \ or not."
    "name": "Like Calls to Like"
  - "desc": "As a bonus action, the thorned sulfurlord sends its roots deep into the\
      \ ground. For 1 minute, the sulfurlord's speed is halved, it is immune to effects\
      \ that would move it, and it can't be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Root (3/Day)"
"actions":
  - "desc": "The thorned sulfurlord makes two sulfur slam attacks or two fiery spike\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d8 + 5) bludgeoning damage plus 9 (2d8) fire damage. The target must\
      \ succeed on a DC 17 Constitution saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of its next turn."
    "name": "Sulfur Slam"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 60/240 ft., one target. *Hit:*\
      \ 12 (3d6 + 2) piercing damage plus 9 (2d8) fire damage."
    "name": "Fiery Spike"
  - "desc": "The thorned sulfurlord targets a creature that has taken fire damage\
      \ from it within the last minute and causes a burst of fire to expand out from\
      \ that creature in a 30-foot-radius. Each creature in the area, including the\
      \ target, must make a DC 17 Dexterity saving throw, taking 35 (10d6) fire\
      \ damage on a failed save, or half as much damage on a successful one. The fire\
      \ ignites flammable objects in the area that aren't being worn or carried."
    "name": "The World Shall Know Fire (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/thorned-sulfurlord-ccodex.png"
```
^statblock

## Environment

any