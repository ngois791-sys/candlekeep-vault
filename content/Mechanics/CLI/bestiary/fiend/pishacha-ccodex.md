---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pishacha
---
# [Pishacha](Mechanics\CLI\bestiary\fiend/pishacha-ccodex.md)
*Source: Creature Codex p. 88*  

*This ghoul-like demon has blue-black skin covered in bulging red veins that glow like embers. A long, lascivious tongue snakes forth from a mouth filled with jagged teeth.*

## Cursed by the Gods

Originating in eastern lands, pishacha are created when the souls of the greedy and lustful are deemed too wicked to be reincarnated by the gods. Unable to redeem themselves, the pishacha are cursed to remain on the Material Plane and feed on the living.

## Graveyard Dwellers

Pishacha demons haunt remote places where they can lure a living creature to its doom. They often share space with ghouls, and some pishacha can be found dwelling near darakhul settlements. Those living near a pishacha lair make offerings of rice at the crossroads on holy days to appease the demons and keep them away.

## Bloodthirsty and Cruel

Pishacha seek to spread fear and mayhem among the living. They seek to possess humanoid bodies, driving their victims insane from the inside out.

```statblock
"name": "Pishacha (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "10"
  - !!int "16"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
"damage_vulnerabilities": "radiant"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 15"
"languages": "Common, Abyssal, telepathy 60 ft."
"cr": "3"
"traits":
  - "desc": "The pishacha can use its action to polymorph into a tiger or a wolf,\
      \ or back into its true form. Other than its size, its statistics are the same\
      \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
      \ reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "The pishacha makes two attacks. one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Claws"
  - "desc": "One humanoid that the pishacha can see within 5 feet of it must succeed\
      \ on a DC 13 Wisdom saving throw or be possessed by the pishacha; the pishacha\
      \ then disappears, and the target is [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ and loses some control of its body, succumbing to a random short-term madness\
      \ (see the System Reference Document 5.1) each round for 3d6 rounds. At the\
      \ end of the 3d6 rounds, the pishacha becomes dormant within the body.\n\n\
      While possessing a victim, the pishacha attempts to seize control of the body\
      \ again every 1d4 hours. The target must succeed on a DC 13 Wisdom saving\
      \ throw or succumb to another 3d6 round period of random short-term madness.\
      \ Even if the target succeeds, it is still possessed. If the target is still\
      \ possessed at the end of a long rest, it must succeed on a DC 13 Wisdom saving\
      \ throw or gain a long-term madness.\n\nWhile possessing a victim, the pishacha\
      \ can't be targeted by any attack, spell, or other effect, except those that\
      \ can turn or repel fiends, and it retains its alignment, Intelligence, Wisdom,\
      \ and Charisma. It otherwise uses the possessed target's statistics, but doesn't\
      \ gain access to the target's knowledge, class features, or proficiencies.\n\
      \nThe possession lasts until the body drops to 0 hp, the pishacha ends it as\
      \ a bonus action, or the pishacha is turned or forced out by an effect like\
      \ the dispel evil and good spell. The pishacha can also be forced out if the\
      \ victim eats a bowl of rice that has been cooked in holy water. When the possession\
      \ ends, the pishacha reappears in an unoccupied space within 5 feet of the body.\n\
      \nThe target is immune to possession by the same pishacha for 24 hours after\
      \ succeeding on the initial saving throw or after the possession ends."
    "name": "Demonic Possession (Recharge 6-6)"
  - "desc": "The pishacha magically turns [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ until it attacks or until its concentration ends (as if concentrating on a\
      \ spell)."
    "name": "Invisibility"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/pishacha-ccodex.png"
```
^statblock

## Environment

planar