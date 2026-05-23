---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/25
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Parzelon, King of Secrets
---
# [Parzelon, King of Secrets](Mechanics\CLI\bestiary\fiend/parzelon-king-of-secrets-ccodex.md)
*Source: Creature Codex p. 101*  

*This hulking fiend has a frightening leonine head atop the preternatural physique of a huge human body. A pronged crown sits upon his maned skull, and his eyes burn with a deep labradorite iridescence.*

## Saint of Vile Soothsayers

Parzelon is a formidable warrior as well as a patron of scholars. His ashen left hand wields an enormous immortal viper like a whip, while his right brandishes a terrible silver trumpet that heralds his coming (he loves to announce himself in lavish style). When summoned, the King of Secrets travels upon the back of a massive, fiendish black bear (treat as an adult red dragon with no fly speed, tail, wings, or legendary actions), who serves the Arch‑Devil for eternity as his steed and companion.

## Lord of Fallen Houses

The King of Secrets is a cunning monarch among devils, who attends mortals only to further his elusive, infernal agendas. A retinue of twenty two devils obey his will, belonging to both the Order of Virtues and the Order of Thrones. Two ancient orobas devils (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) serve him as spies and advisers.

```statblock
"name": "Parzelon, King of Secrets (CCodex)"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "378"
"hit_dice": "28d12 + 196"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "24"
  - !!int "26"
  - !!int "22"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "12"
  - "constitution": !!int "15"
  - "wisdom": !!int "14"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Animal Handling](Mechanics/CLI/rules/skills.md#Animal%20Handling)"
    "desc": "+14"
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+24"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+24"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+12"
  - "name": "[Investigation](Mechanics/CLI/rules/skills.md#Investigation)"
    "desc": "+16"
  - "name": "[Medicine](Mechanics/CLI/rules/skills.md#Medicine)"
    "desc": "+22"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+14"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+12"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+24"
"damage_resistances": "cold, lightning, psychic"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 24"
"languages": "All, telepathy 120 ft."
"cr": "25"
"traits":
  - "desc": "The parzelon, king of secrets is a 20th-level spellcaster. Its spellcasting\
      \ ability is (spell save DC 24, +16 to hit with spell attacks). He requires\
      \ no material components to cast his spells. The parzelon, king of secrets has\
      \ the following wizard spells prepared:\n\n**Cantrips (at will):** [fire bolt](Mechanics/CLI/spells/fire-bolt-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md), [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md),\
      \ [ray of frost](Mechanics/CLI/spells/ray-of-frost-xphb.md), [shocking grasp](Mechanics/CLI/spells/shocking-grasp-xphb.md)\n\
      \n**1st level (4 slots):** [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md),\
      \ [magic missile](Mechanics/CLI/spells/magic-missile-xphb.md), [sleep](Mechanics/CLI/spells/sleep-xphb.md)\n\
      \n**2nd level (3 slots):** [darkness](Mechanics/CLI/spells/darkness-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [locate object](Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\n**3rd level (3 slots):**\
      \ [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md), [clairvoyance](Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ [haste](Mechanics/CLI/spells/haste-xphb.md), [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\
      \n**4th level (3 slots):** [dimension door](Mechanics/CLI/spells/dimension-door-xphb.md),\
      \ [greater invisibility](Mechanics/CLI/spells/greater-invisibility-xphb.md),\
      \ [locate creature](Mechanics/CLI/spells/locate-creature-xphb.md), [phantasmal\
      \ killer](Mechanics/CLI/spells/phantasmal-killer-xphb.md), [polymorph](Mechanics/CLI/spells/polymorph-xphb.md)\n\
      \n**5th level (3 slots):** [dominate person](Mechanics/CLI/spells/dominate-person-xphb.md),\
      \ [scrying](Mechanics/CLI/spells/scrying-xphb.md), [telekinesis](Mechanics/CLI/spells/telekinesis-xphb.md),\
      \ [wall of force](Mechanics/CLI/spells/wall-of-force-xphb.md)\n\n**6th level\
      \ (2 slots):** [chain lightning](Mechanics/CLI/spells/chain-lightning-xphb.md),\
      \ [disintegrate](Mechanics/CLI/spells/disintegrate-xphb.md)\n\n**7th level (2\
      \ slots):** [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md), [prismatic\
      \ spray](Mechanics/CLI/spells/prismatic-spray-xphb.md)\n\n**8th level (1 slots):**\
      \ [feeblemind](Mechanics/CLI/spells/befuddlement-xphb.md)\n\n**9th level (1\
      \ slots):** [foresight](Mechanics/CLI/spells/foresight-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Any creature hostile to Parzelon that starts its turn within 20 feet\
      \ of him must make a DC 20 Wisdom saving throw, unless Parzelon is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated).\
      \ On a failed save, the creature is [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the start of its next turn. If a creature's saving throw is successful,\
      \ the creature is immune to Parzelon's Fear Aura for the next 24 hours."
    "name": "Fear Aura"
  - "desc": "If Parzelon fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Parzelon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Parzelon's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Parzelon makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 5 ft., one target. *Hit:*\
      \ 14 (2d8 + 5) piercing damage plus 14 (4d6) necrotic damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (4d4 + 5) piercing damage plus 21 (6d6) poison damage."
    "name": "Serpentine Lash"
  - "desc": "Parzelon summons 1d4 [barbed devils](Mechanics/CLI/bestiary/fiend/barbed-devil-xmm.md)\
      \ or 1d4 [spawn of Parzelon](Mechanics/CLI/bestiary/fiend/spawn-of-parzelon-ccodex.md).\
      \ A summoned devil appears in an unoccupied space within 60 feet of Parzelon,\
      \ acts as an ally, and can't summon other devils. It remains for 1 minute, or\
      \ until Parzelon dismisses it as an action."
    "name": "Summon Devil (1/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the parzelon can expend a use to take one of the following actions. The\
  \ parzelon regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Parzelon makes one serpentine lash attack."
    "name": "Serpentine Lash"
  - "desc": "Parzelon casts one spell."
    "name": "Spell (Costs 2 Actions)"
  - "desc": "Parzelon blows his accursed, silver horn, which emits a sickening blast\
      \ in a 30-foot cone that is audible 600 feet away. Each creature in the cone\
      \ must make a DC 20 Constitution saving throw. On a failure, a creature takes\
      \ 32 (5d12) poison damage and is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ for 1 minute. On a success, a creature takes half as much damage and isn't\
      \ [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated). An [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Horn of Nessus (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/parzelon-king-of-secrets-ccodex.png"
```
^statblock

## Environment

planar