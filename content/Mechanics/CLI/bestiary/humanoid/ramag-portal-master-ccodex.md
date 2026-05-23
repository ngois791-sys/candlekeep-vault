---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/ramag
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ramag Portal Master
---
# [Ramag Portal Master](Mechanics\CLI\bestiary\humanoid/ramag-portal-master-ccodex.md)
*Source: Creature Codex p. 313*  

*This oddly-proportioned figure weaves its too-long arms in intricate gestures as arcane energy crackles through its thick strands of hair.*

Portal masters are physically indistinguishable from other ramag, though they tend to occupy a higher station. Their clothing and equipment often clearly mark them as spellcasters. The surest mark of a portal master is a gate seal, a large ring of silver, mithral, iron, and copper twisted together. The seal is a focus for the portal master's spellcasting and its manipulation of planar fabric.

## Keepers of the Gates

Portal masters fill a potent role within ramag society; they exist to nullify portals, teleportation, and other methods of interplanar travel. Sometimes the flows of magic and the stars align, causing dormant gates to flicker to life. Beyond these gates lie ruins of the ancient titans and lost vestiges of ramag settlements. While some explorers take advantage of the opportunity to reclaim lost knowledge and wealth (and many are lost when the gates slam shut without warning), the portal masters are the first line of defense when other, fouler things come through from the other side.

```statblock
"name": "Ramag Portal Master (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "ramag"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "18"
  - !!int "12"
  - !!int "13"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "Common, Giant, Abyssal, Celestial, Infernal"
"cr": "5"
"traits":
  - "desc": "The ramag portal master is a 7th-level spellcaster. Its spellcasting\
      \ ability is Intelligence (spell save DC 15, +7 to hit with spell attacks).\
      \ The ramag portal master has the following wizard spells prepared:\n\n**Cantrips\
      \ (at will):** [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md), [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md), [shocking\
      \ grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\n**1st level (4 slots):**\
      \ [burning hands](Mechanics/CLI/spells/burning-hands-xphb.md), [mage armor](Mechanics/CLI/spells/mage-armor-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md)\n\n**2nd level\
      \ (3 slots):** [arcane lock](Mechanics/CLI/spells/arcane-lock-xphb.md), [hold\
      \ person](Mechanics/CLI/spells/hold-person-xphb.md), [levitate](Mechanics/CLI/spells/levitate-xphb.md),\
      \ [misty step](Mechanics/CLI/spells/misty-step-xphb.md)\n\n**3rd level (3 slots):**\
      \ [counterspell](Mechanics/CLI/spells/counterspell-xphb.md), [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [fireball](Mechanics/CLI/spells/fireball-xphb.md)\n\n**4th level (1 slots):**\
      \ [banishment](Mechanics/CLI/spells/banishment-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The ramag has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The ramag portal master makes two lightning stroke attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage plus 14 (4d6) force damage."
    "name": "Gate Seal"
  - "desc": "*Ranged Spell Attack:* +7 to hit, range 120 ft., one target. *Hit:*\
      \ 14 (4d6) lightning damage. If the target is a creature, it can't take reactions\
      \ until the start of the ramag's next turn."
    "name": "Lightning Stroke"
  - "desc": "The ramag magically empowers its gate seal to dampen teleportation, planar\
      \ gates, and portals within 60 feet of it. A creature that attempts to teleport\
      \ while within or into the area must succeed on a DC 15 Charisma saving throw\
      \ or the teleport fails. Spells and abilities that conjure creatures or objects\
      \ automatically fail, and portals or gates are suppressed while they remain\
      \ in the area. The seal lasts 1 hour, or until the ramag loses concentration\
      \ on it as if concentrating on a spell."
    "name": "Dimensional Seal (Recharges after a Short or Long Rest)"
  - "desc": "The ramag creates two magical gateways in unoccupied spaces it can see\
      \ within 100 feet of it. The gateways appear as shimmering, opaque ovals in\
      \ the air. A creature that moves into one gateway appears at the other immediately.\
      \ The gateways last for 1 minute, or until the ramag loses concentration on\
      \ them as if concentrating on a spell."
    "name": "Weave Dimensions"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/ramag-portal-master-ccodex.png"
```
^statblock

## Environment

urban