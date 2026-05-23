---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/cm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Valin Sarnaster
---
# [Valin Sarnaster](Mechanics\CLI\bestiary\npc/valin-sarnaster-cm.md)
*Source: Candlekeep Mysteries p. 182*  

Valin Sarnaster has been thoroughly corrupted by visions of a future in which she sees herself as the immortal heir of Savras's realm.*The Canopic Being*came into her possession years ago, and an obsession with the dark rituals therein set the oracle on her present course.

Valin has become a powerful undead as the first step on her path to godhood, and is now a mummy lord.

Valin can use her lair actions in any area of the tomb.

## Valin Sarnaster's Lair

Valin can use her lair actions in any area of the tomb.

```statblock
"name": "Valin Sarnaster (CM)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "18"
  - !!int "16"
"speed": "20 ft."
"saves":
  - "constitution": !!int "8"
  - "intelligence": !!int "5"
  - "wisdom": !!int "9"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+5"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 14"
"languages": "The languages it knew in life"
"cr": "16"
"traits":
  - "desc": "Valin Sarnaster is a 10th-level spellcaster. Her spellcasting ability\
      \ is Wisdom (spell save DC 17, +9 to hit with spell attacks). Valin has the\
      \ following cleric spells prepared:\n\n**Cantrips (at will):** [sacred flame](Mechanics/CLI/spells/sacred-flame-xphb.md),\
      \ [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n**1st level (4\
      \ slots):** [command](Mechanics/CLI/spells/command-xphb.md), [guiding bolt](Mechanics/CLI/spells/guiding-bolt-xphb.md),\
      \ [shield of faith](Mechanics/CLI/spells/shield-of-faith-xphb.md)\n\n**2nd level\
      \ (3 slots):** [hold person](Mechanics/CLI/spells/hold-person-xphb.md), [silence](Mechanics/CLI/spells/silence-xphb.md),\
      \ [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\n**3rd\
      \ level (3 slots):** [clairvoyance](Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\n\n**4th level (3\
      \ slots):** [divination](Mechanics/CLI/spells/divination-xphb.md), [dimension\
      \ door](Mechanics/CLI/spells/dimension-door-xphb.md)\n\n**5th level (2 slots):**\
      \ [contagion](Mechanics/CLI/spells/contagion-xphb.md), [scrying](Mechanics/CLI/spells/scrying-xphb.md)\n\
      \n**6th level (1 slots):** [harm](Mechanics/CLI/spells/harm-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Valin has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "While her heart remains in Alessia's body, Valin re-forms inside her\
      \ sarcophagus, regaining all her hit points and becoming active again."
    "name": "Rejuvenation"
"actions":
  - "desc": "Valin can use her Dreadful Glare and makes one attack with her rotting\
      \ fist."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target\
      \ is a creature, it must succeed on a DC 16 Constitution saving throw or be\
      \ cursed with mummy rot. The cursed target can't regain hit points, and its\
      \ hit point maximum decreases by 10 (3d6) for every 24 hours that elapse.\
      \ If the curse reduces the target's hit point maximum to 0, the target dies,\
      \ and its body turns to dust. The curse lasts until removed by the [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or other magic."
    "name": "Rotting Fist"
  - "desc": "Valin targets one creature she can see within 60 feet of her. If the\
      \ target can see Valin, it must succeed on a DC 16 Wisdom saving throw against\
      \ this magic or become [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the end of Valin's next turn. If the target fails the saving throw by\
      \ 5 or more, it is also [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for the same duration. A target that succeeds on the saving throw is immune\
      \ to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
    "name": "Dreadful Glare"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Valin takes a lair action\
      \ to cause one of the following effects; Valin can't use the same effect two\
      \ rounds in a row.\n\n- Each undead creature in the lair can pinpoint the location\
      \ of each living creature within 120 feet of it until initiative count 20 on\
      \ the next round.  \n- Each undead in the lair has advantage on saving throws\
      \ against effects that turn undead until initiative count 20 on the next round.\
      \  \n- Until initiative count 20 on the next round, any non-undead creature\
      \ that tries to cast a spell of 4th level or lower in Valin's lair is wracked\
      \ with pain. The creature can choose another action, but if it tries to cast\
      \ the spell, it must make a DC 16 Constitution saving throw. On a failed save,\
      \ it takes 1d6 necrotic damage per level of the spell, and the spell has no\
      \ effect and is wasted.  "
    "name": ""
"regional_effects":
  - "desc": "Valin's tomb is warped in any of the following ways by the creature's\
      \ dark presence:\n\n- Food instantly molders and water instantly evaporates\
      \ when brought into the lair. Other nonmagical drinks are spoiled—wine turning\
      \ to vinegar, for instance.  \n- [Divination](Mechanics/CLI/spells/divination-xphb.md)\
      \ spells cast within the lair by creatures other than Valin have a 25 percent\
      \ chance to provide misleading results, as determined by the DM. If a [divination](Mechanics/CLI/spells/divination-xphb.md)\
      \ spell already has a chance to fail or become unreliable when cast multiple\
      \ times, that chance increases by 25 percent.  \n- A creature that takes treasure\
      \ from the lair is cursed until the treasure is returned. The cursed target\
      \ has disadvantage on all saving throws. The curse lasts until removed by a\
      \ [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) spell or other magic.\
      \  \n\nIf Valin is destroyed, these regional effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Valin can expend a use to take one of the following actions. Valin regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Valin makes one attack with her rotting fist or uses her Dreadful Glare."
    "name": "Attack"
  - "desc": "Blinding dust and sand swirls magically around Valin. Each creature within\
      \ 5 feet of Valin must succeed on a DC 16 Constitution saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded)\
      \ until the end of her next turn."
    "name": "Blinding Dust"
  - "desc": "Valin utters a blasphemous word. Each non-undead creature within 10 feet\
      \ of Valin that can hear the magical utterance must succeed on a DC 16 Constitution\
      \ saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned) until\
      \ the end of Valin's next turn."
    "name": "Blasphemous Word (Costs 2 Actions)"
  - "desc": "Valin magically unleashes negative energy. Creatures within 60 feet of\
      \ Valin, including ones behind barriers and around corners, can't regain hit\
      \ points until the end of Valin's next turn."
    "name": "Channel Negative Energy (Costs 2 Actions)"
  - "desc": "Valin magically transforms into a whirlwind of sand, moves up to 60 feet,\
      \ and reverts to her normal form. While in whirlwind form, Valin is immune to\
      \ all damage, and it can't be [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
      \ [petrified](Mechanics/CLI/rules/conditions.md#Petrified), knocked [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ [restrained](Mechanics/CLI/rules/conditions.md#Restrained), or [stunned](Mechanics/CLI/rules/conditions.md#Stunned).\
      \ Equipment worn or carried by Valin remain in her possession."
    "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
  - "CM"
"image": "Mechanics/CLI/bestiary/npc/token/valin-sarnaster-cm.webp"
```
^statblock