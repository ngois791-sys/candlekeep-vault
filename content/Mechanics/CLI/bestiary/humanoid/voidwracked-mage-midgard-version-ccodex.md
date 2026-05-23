---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Voidwracked Mage (Midgard Version)
---
# [Voidwracked Mage (Midgard Version)](Mechanics\CLI\bestiary\humanoid/voidwracked-mage-midgard-version-ccodex.md)
*Source: Creature Codex p. 409*  

Dabbling in void magic often leads to unexpected and horrific results. A voidwracked mage is a spellcaster whose reckless experimentation has accidentally fused it with a portal to the Void itself. The driving purpose of a voidwracked mage is to increase the total entropy of the multiverse by consuming creatures with the event horizon to which it is fused. A voidwracked mage often serves more powerful void-touched creatures

> [!note] Voidwracked Mages in Midgard
> 
> Void magic often ends in spectacular disasters; the voidwracked mages are found almost entirely in the Western Wastes among the Dread Walkers and the dust goblins. Dust goblins of great age often aspire to the status of voidwracked mage, becoming living weapons against their tribe's enemies. Occasionally such a mage is found in Bemmea, Barsella, or (in one memorable case) Friula. When using the Midgard setting, change the voidwracked mage's spells to the following (see "Fifth Edition Appendix" in Midgard Worldbook):
^voidwracked-mages-in-midgard

```statblock
"name": "Voidwracked Mage (Midgard Version) (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "20"
  - !!int "8"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "8"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"senses": "passive Perception 9"
"languages": ""
"cr": "8"
"traits":
  - "desc": "voidwracked is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 16, +8 to hit with spell attacks). voidwracked has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** *crushing curse* ^[The\
      \ *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.],\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md),\
      \ *word of misfortune* ^[The *Midgard World Handbook* by Kobold Press is currently\
      \ unconverted for 5eTools.]\n\n**1st level (4 slots):** cause fear, [ray of\
      \ sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md), *screaming ray* ^[The\
      \ *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.],\
      \ [shield](Mechanics/CLI/spells/shield-xphb.md)\n\n**2nd level (3 slots):**\
      \ *destructive resonance* ^[The *Midgard World Handbook* by Kobold Press is\
      \ currently unconverted for 5eTools.], *maddening whispers* ^[The *Midgard World\
      \ Handbook* by Kobold Press is currently unconverted for 5eTools.], [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\
      \n**3rd level (3 slots):** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), *void strike* ^[The\
      \ *Midgard World Handbook* by Kobold Press is currently unconverted for 5eTools.]\n\
      \n**4th level (3 slots):** [black tentacles](Mechanics/CLI/spells/evards-black-tentacles-xphb.md),\
      \ [blight](Mechanics/CLI/spells/blight-xphb.md)\n\n**5th level (1 slots):**\
      \ *essence of instability* ^[The *Midgard World Handbook* by Kobold Press is\
      \ currently unconverted for 5eTools.]"
    "name": "Spellcasting"
  - "desc": "Creatures pulled through the event horizon via the voidwracked mage's\
      \ Accretion ability or that pass through it willingly become trapped in the\
      \ void. A trapped creature is unable to breathe and can't cast spells with verbal\
      \ components. At the end of its turn, the trapped creature takes 14 (4d6)\
      \ necrotic damage and 9 (2d8) cold damage. A trapped creature that is not\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated) can escape\
      \ if a rope or long pole is passed to it from the outside. Either the creature\
      \ itself or an ally outside of the event horizon must succeed on a DC 15 Strength\
      \ ([Athletics](Mechanics/CLI/rules/skills.md#Athletics)) check to pull the creature\
      \ out. The voidwracked mage can also release a trapped creature as an action."
    "name": "Event Horizon"
  - "desc": "When the voidwracked mage is reduced to 0 hp, its event horizon collapses\
      \ after 1 minute. Creatures trapped in the void when the event horizon collapses\
      \ are lost and can only be restored by a [wish](Mechanics/CLI/spells/wish-xphb.md)\
      \ or [true resurrection](Mechanics/CLI/spells/true-resurrection-xphb.md) spell."
    "name": "Horizon Collapse"
  - "desc": "The voidwracked mage has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ or [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Insane"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (4d6) necrotic damage."
    "name": "Void Touch"
  - "desc": "The voidwracked mage creates a strong gravitational pull in a 20-foot\
      \ cone. Each creature in that area must make a DC 15 Strength saving throw.\
      \ On a failure, the creature takes 28 (8d6) force damage and is pulled through\
      \ the voidwracked mage's event horizon. On a success, the creature takes half\
      \ the damage and is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)\
      \ but isn't pulled into the event horizon."
    "name": "Accretion (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/voidwracked-mage-midgard-version-ccodex.png"
```
^statblock

## Environment

any