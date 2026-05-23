---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire Priestess
---
# [Vampire Priestess](Mechanics\CLI\bestiary\undead/vampire-priestess-ccodex.md)
*Source: Creature Codex p. 367*  

*Pale-faced with long dark hair and a lascivious, predatory look on her face, this vampire priestess wears the crimson robes of the Red Sisters. She wields a scourge covered in vicious barbs, and a human skull stained ochre hangs on a chain from her hip.*

## Followers of the Blood Goddess

Temples and shrines exist to the goddess of lust and death in many towns and villages, and the feared Red Sisters ensure that the goddess's will is done. While most of her priestesses are human, their ranks include a number of vampires, who, unsurprisingly, revel in being part of a cult where the blood always flows freely.

## Undead Nature

The vampire priestess doesn't require air.

> [!note] Vampires in Midgard
> 
> Vampires rule the Blood Kingdom of Morgau openly, treating the living as cattle to be bought, sold, exploited, and drained of blood by their undead masters. King Lucan reigns supreme in Morgau. His sworn nobles and vampire progeny are the princes, princesses, dukes, and duchesses beneath him, all vampires of great power in their own right. The counts and countesses, who hold smaller territories or powerful monasteries for the King, rank slightly lower than the princes and duchesses. Generals and governors, vampires who command Morgau's troops or rule smaller fiefdoms, sit beneath the counts and countesses.
> 
> Vampire patricians rank lowest among the vampire nobility and make up the majority of the lesser nobles, barons, lords, and ladies of the Blood Kingdom—still quite dangerous, and easily able to command darakhul, vampiric knights, and other servants.
> 
> Vampire priestesses stand somewhat outside of the ranking of vampires in the Blood Kingdom, due to their association with the Blood Goddess' faith. Once a vampire joins the Red Sisters, she is bound to the Blood Goddess, but she is also afforded extra respect and status in Morgau, regardless of her sire or original place in the hierarchy.
> 
> King Lucan and his court are the very first northern shroud-eaters and remain some of the strongest to this day. In the Southlands, shroud-eaters dwell within the Grand Necropolis of Siwal, and many inhabit an island known as the Pallid Court of Vampires within the Nurian city of Per-Bastet.
^vampires-in-midgard

```statblock
"name": "Vampire Priestess (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[chain mail](Mechanics/CLI/items/chain-mail-xphb.md)"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "20"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "8"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Religion](Mechanics/CLI/rules/skills.md#Religion)"
    "desc": "+4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 18"
"languages": "The languages it knew in life"
"cr": "8"
"traits":
  - "desc": "The vampire priestess is a 9th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 16, +8 to hit with spell attacks). The vampire\
      \ priestess has the following cleric spells prepared:\n\n**Cantrips (at will):**\
      \ [light](Mechanics/CLI/spells/light-xphb.md), [guidance](Mechanics/CLI/spells/guidance-xphb.md),\
      \ [poison spray](Mechanics/CLI/spells/poison-spray-xphb.md), [thaumaturgy](Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\
      \n**1st level (4 slots):** [bane](Mechanics/CLI/spells/bane-xphb.md), [command](Mechanics/CLI/spells/command-xphb.md),\
      \ [inflict wounds](Mechanics/CLI/spells/inflict-wounds-xphb.md), [ray of sickness](Mechanics/CLI/spells/ray-of-sickness-xphb.md)\n\
      \n**2nd level (3 slots):** [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md),\
      \ [silence](Mechanics/CLI/spells/silence-xphb.md), [spiritual weapon](Mechanics/CLI/spells/spiritual-weapon-xphb.md)\n\
      \n**3rd level (3 slots):** [bestow curse](Mechanics/CLI/spells/bestow-curse-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md), [spirit guardians](Mechanics/CLI/spells/spirit-guardians-xphb.md)\n\
      \n**4th level (3 slots):** [banishment](Mechanics/CLI/spells/banishment-xphb.md),\
      \ [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)\n\n\
      **5th level (1 slots):** [contagion](Mechanics/CLI/spells/contagion-xphb.md),\
      \ [flame strike](Mechanics/CLI/spells/flame-strike-xphb.md)"
    "name": "Spellcasting"
  - "desc": "When she drops to 0 hp outside her resting place, the vampire priestess\
      \ transforms into a cloud of mist instead of falling [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious),\
      \ provided that she isn't in running water. If she can't transform, she is destroyed.\
      \ While she has 0 hp in mist form, she can't revert to her priestess form, and\
      \ she must reach her resting place within 2 hours or be destroyed.\n\nWhile\
      \ in mist form she can't take any actions, speak, or manipulate objects. She\
      \ is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
      \ creature's space and stop there. In addition, if air can pass through a space,\
      \ she can do so without squeezing, and she can't pass through water. She has\
      \ advantage on Strength, Dexterity, and Constitution saving throws, and she\
      \ is immune to all nonmagical damage, except the damage she takes from sunlight.\n\
      \nOnce in her resting place, she reverts to her priestess form. She is then\
      \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed) until she regains\
      \ at least 1 hp. After spending 1 hour in her resting place with 0 hp, she regains\
      \ 1 hp."
    "name": "Misty Escape"
  - "desc": "The vampire priestess regains 15 hp at the start of her turn if she has\
      \ at least 1 hp and isn't in sunlight or running water. If the priestess takes\
      \ radiant damage or damage from holy water, this trait doesn't function at the\
      \ start of her next turn."
    "name": "Regeneration"
  - "desc": "The priestess has the following flaws:\n\n- *Forbiddance.* The priestess\
      \ can't enter a residence without an invitation from one of the occupants. \
      \ \n- *Harmed by Running Water.* The priestess takes 20 acid damage if she ends\
      \ her turn in running water.  \n- *Stake to the Heart.* If a piercing weapon\
      \ made of wood is driven into the priestess' heart while she is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ in her resting place, the she is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ until the stake is removed.  \n- *Sunlight Hypersensitivity.* The priestess\
      \ takes 20 radiant damage when she starts her turn in sunlight. While in sunlight,\
      \ she has disadvantage on attack rolls and ability checks.  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "The vampire priestess can use her Bewitching Gaze. She then makes two\
      \ attacks, only one of which can be a bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage, and the creature must succeed on a DC 16 Constitution\
      \ saving throw or bleed profusely from the wound. A bleeding creature takes\
      \ 7 (2d6) slashing damage at the start of each of its turns. A creature can\
      \ take an action to stanch the wound with a successful DC 12 Wisdom ([Medicine](Mechanics/CLI/rules/skills.md#Medicine))\
      \ check. The wound also closes if the target receives magical healing."
    "name": "Scourge"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one willing creature,\
      \ or a creature that is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the vampire priestess, [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). *Hit:* 6 (1d6\
      \ + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hp maximum\
      \ is reduced by an amount equal to the necrotic damage taken, and the priestess\
      \ regains hp equal to that amount. The reduction lasts until the target finishes\
      \ a long rest. The target dies if this effect reduces its hp maximum to 0. A\
      \ humanoid slain in this way and then buried in the ground rises the following\
      \ night as a vampire spawn under the priestess' control."
    "name": "Bite"
  - "desc": "The vampire priestess targets one humanoid she can see within 30 feet.\
      \ If the target can see her, the target must succeed on a DC 16 Wisdom saving\
      \ throw or be [charmed](Mechanics/CLI/rules/conditions.md#Charmed) by the priestess\
      \ for 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ the creature is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and has a speed of 0. Each time the vampire priestess or her allies do anything\
      \ harmful to the target, it can repeat the saving throw, ending the effect on\
      \ a success. The target can also repeat the saving throw if another creature\
      \ uses an action to shake the target out of its stupor."
    "name": "Bewitching Gaze"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/vampire-priestess-ccodex.png"
```
^statblock

## Environment

urban