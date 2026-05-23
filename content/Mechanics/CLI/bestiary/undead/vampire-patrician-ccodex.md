---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vampire Patrician
---
# [Vampire Patrician](Mechanics\CLI\bestiary\undead/vampire-patrician-ccodex.md)
*Source: Creature Codex p. 366*  

*Handsome and youthful-looking with blond hair, slightly pointed ears, and piercing blue eyes, this vampire has a definite air of arrogance as he regards everything around him with barely concealed contempt. *

Vampire patricians are weaker than their vampire kin but are far superior to the spawn their kin create. What they lack in power, they more than make up for in sheer cruelty.

## Iron-Fisted Rulers

Vampire patricians govern a small town or village for their undead overlord. Seeking to impress those above them, they keep the downtrodden peasantry in a state of perpetual dread with public floggings, executions, and sacrifices on the altars of the Blood Goddess and hunting expeditions in which the patrician and guests pursue hapless peasants through the woods.

## Brooding Presence

Vampire patricians make their homes in small castles or large manor houses, often on a steep hill that looms over their territory. Their subterranean resting places are well guarded by vampire spawn and mindless undead. The area around a vampire patrician's home is partially corrupted by its unnatural presence, creating the following effects: plants within 1,000 feet of its home warp to become more beautiful and deadly versions of their base form, secreting poison or releasing sweet-smelling, toxic pollen; and sounds are more muted, making conversation harder to overhear and screams for help almost inaudible over distances.

## Undead Nature

The vampire patrician doesn't require air.

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
"name": "Vampire Patrician (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "18"
  - !!int "18"
  - !!int "16"
  - !!int "13"
  - !!int "20"
"speed": "25 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "5"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+9"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+9"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "The languages it knew in life"
"cr": "10"
"traits":
  - "desc": "A melee weapon deals one extra die of its damage and an extra 3 (1d6)\
      \ necrotic damage when the vampire patrician hits with it (included in the attack)."
    "name": "Cruel Combatant"
  - "desc": "When it drops to 0 hp outside its resting place, the vampire patrician\
      \ transforms into a cloud of mist instead of falling [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious),\
      \ provided that it isn't in sunlight or running water. If it can't transform,\
      \ it is destroyed. While it has 0 hp in mist form, it can't revert to its vampire\
      \ form, and it must reach its resting place within 2 hours or be destroyed.\n\
      \nWhile in mist form it can't take any actions, speak, or manipulate objects.\
      \ It is weightless, has a flying speed of 20 feet, can hover, and can enter\
      \ a hostile creature's space and stop there. In addition, if air can pass through\
      \ a space, the mist can do so without squeezing, and it can't pass through water.\
      \ It has advantage on Strength, Dexterity, and Constitution saving throws, and\
      \ it is immune to all nonmagical damage, except the damage it takes from sunlight.\n\
      \nOnce in its resting place, it reverts to vampire form. It is then [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ until it regains at least 1 hp. After spending 1 hour in its resting place\
      \ with 0 hp, it regains 1 hp."
    "name": "Misty Escape"
  - "desc": "The vampire patrician can ignore the effects of sunlight for up to 1\
      \ minute."
    "name": "Noble Resilience (Recharges after a Long Rest)"
  - "desc": "The patrician regains 15 hp at the start of its turn if it has at least\
      \ 1 hp and isn't in sunlight or running water. If it takes radiant damage or\
      \ damage from holy water, this trait doesn't function at the start of its next\
      \ turn."
    "name": "Regeneration"
  - "desc": "The vampire patrician can climb difficult surfaces, including upside\
      \ down on ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The vampire patrician has the following flaws:\n\n- *Forbiddance.* The\
      \ patrician can't enter a residence without an invitation from one of the occupants.\
      \  \n- *Harmed by Running Water.* The patrician takes 20 acid damage if it ends\
      \ its turn in running water.  \n- *Stake to the Heart.* If a piercing weapon\
      \ made of wood is driven into the patrician's heart while the patrician is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ in its resting place, the patrician is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ until the stake is removed.  \n- *Sunlight Hypersensitivity.* The patrician\
      \ takes 20 radiant damage when it starts its turn in sunlight. While in sunlight,\
      \ it has disadvantage on attack rolls and ability checks.  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "The vampire patrician can use its Bone-Chilling Gaze. It then makes two\
      \ attacks, only one of which can be a bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one creature. *Hit:*\
      \ 13 (2d8 + 4) piercing damage plus 3 (1d6) necrotic damage."
    "name": "Rapier"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one willing creature,\
      \ or a creature that is [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the vampire patrician, [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated),\
      \ or [restrained](Mechanics/CLI/rules/conditions.md#Restrained). *Hit:* 7 (1d6\
      \ + 4) piercing damage plus 7 (2d6) necrotic damage. The target's hp maximum\
      \ is reduced by an amount equal to the necrotic damage taken, and the patrician\
      \ regains hp equal to that amount. The reduction lasts until the target finishes\
      \ a long rest. The target dies if this effect reduces its hp maximum to 0. A\
      \ humanoid slain in this way and then buried in the ground rises the following\
      \ night as a vampire spawn under the vampire patrician's control."
    "name": "Bite"
  - "desc": "The vampire patrician targets one humanoid it can see within 30 feet.\
      \ If the target can see the patrician, the target must succeed on a DC 17 Charisma\
      \ saving throw or become [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ with fear until the end of its next turn. Release the Hounds! (1/Day). The\
      \ vampire patrician calls 4d6 hunting hounds (use [mastiff](Mechanics/CLI/bestiary/beast/mastiff-xmm.md)\
      \ statistics) to its side. While outdoors, the vampire patrician can call 4d6\
      \ hunting raptors (use [blood hawk](Mechanics/CLI/bestiary/beast/blood-hawk-xmm.md)\
      \ statistics) instead. These creatures arrive in 1d4 rounds, helping the patrician\
      \ and obeying its spoken commands. The beasts remain for 1 hour, until the patrician\
      \ dies, or until the patrician dismisses them as a bonus action."
    "name": "Bone-Chilling Gaze"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/vampire-patrician-ccodex.png"
```
^statblock

## Environment

urban