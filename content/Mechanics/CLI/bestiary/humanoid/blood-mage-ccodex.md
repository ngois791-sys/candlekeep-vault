---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blood Mage
---
# [Blood Mage](Mechanics\CLI\bestiary\humanoid/blood-mage-ccodex.md)
*Source: Creature Codex p. 397*  

Favoring linen robes of crimson or black to hide the stains and spatters of its medium, a blood mage about its work might look like a beggar and smell like an abattoir, but the power coursing through its veins makes such concerns beneath the blood mage's notice. Drawing power from bloodletting, both its own and that of others, makes most civilizations fear and despise the blood mage, necessitating that it practice its dark arts in secret. Each period of renewed study is usually accompanied by disappearances among the most vulnerable. A trail of exsanguinated corpses follows.

```statblock
"name": "Blood Mage (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "13"
"ac_class": "16 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "12"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+4"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "7"
"traits":
  - "desc": "The blood mage is a 10th-level spellcaster. Its spellcasting ability\
      \ is (spell save DC 15, +7 to hit with spell attacks). The blood mage has\
      \ the following wizard spells prepared:\n\n**Cantrips (at will):** [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [mending](Mechanics/CLI/spells/mending-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n**1st level (4 slots):** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [false life](Mechanics/CLI/spells/false-life-xphb.md), [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\n\n**2nd level\
      \ (3 slots):** [acid arrow](Mechanics/CLI/spells/melfs-acid-arrow-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md)\n\n**3rd level (3\
      \ slots):** [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [feign\
      \ death](Mechanics/CLI/spells/feign-death-xphb.md), [fly](Mechanics/CLI/spells/fly-xphb.md),\
      \ [vampiric touch](Mechanics/CLI/spells/vampiric-touch-xphb.md)\n\n**4th level\
      \ (3 slots):** [Evard's black tentacles](Mechanics/CLI/spells/evards-black-tentacles-xphb.md),\
      \ [blight](Mechanics/CLI/spells/blight-xphb.md)\n\n**5th level (2 slots):**\
      \ [conjure elemental](Mechanics/CLI/spells/conjure-elemental-xphb.md) ([blood](Mechanics/CLI/bestiary/elemental/blood-elemental-ccodex.md)\
      \ or [water](Mechanics/CLI/bestiary/elemental/water-elemental-xmm.md) only),\
      \ [scrying](Mechanics/CLI/spells/scrying-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The blood mage can absorb poisons or diseases from another creature,\
      \ living or dead, and turn it to the mage's use. It can expose a fresh cut to\
      \ a source of disease or poison and safely absorb the dormant affliction into\
      \ its blood stream. It can then inflict the disease or poison on another by\
      \ spitting a stream of blood at the creature. On a successful hit as a ranged\
      \ spell attack, the target is exposed to the disease or poison and must proceed\
      \ with whatever saving throws are required."
    "name": "Absorb Impurities"
  - "desc": "When subjected to a disease or poison effect that allows a Constitution\
      \ saving throw to take only half damage, the blood mage instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Blood Savant"
  - "desc": "When the blood mage ingests the blood of another creature, it is [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the start of its next turn. During that time, the blood mage experiences\
      \ a memory of the creature through its own eyes which may or may not be of the\
      \ incident which caused the creature to bleed. The older the blood, the foggier\
      \ and more obscure the memory is likely to be. Once the blood mage has consumed\
      \ a creature's blood in this way, the same creature's blood will never again\
      \ produce a memory for that blood mage."
    "name": "Blood Vision"
  - "desc": "The blood mage holds power over the flow of its own blood and the speed\
      \ at which it heals. The blood mage regains 10 hp at the start of its turn if\
      \ it has at least 1 hp."
    "name": "Regeneration"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "The blood mage drains life-giving blood from nearby creatures. Each creature\
      \ within 20 feet of the blood mage must succeed on a DC 15 Constitution saving\
      \ throw, taking 35 (10d6) necrotic damage on a failed save, or half as much\
      \ damage on a successful one. The blood mage gains temporary hp equal to the\
      \ single highest amount of necrotic damage dealt. A creature that doesn't have\
      \ blood is immune to Blood Feast."
    "name": "Blood Feast (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/blood-mage-ccodex.png"
```
^statblock

## Environment

any